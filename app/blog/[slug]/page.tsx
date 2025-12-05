import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogBySlug, getPublishedBlogs, getBlogsByWhitepaper } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const blogs = await getPublishedBlogs()
  return blogs.map((blog) => ({ slug: blog.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return { title: 'Post Not Found' }
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      authors: [blog.author],
      publishedTime: blog.publishedAt,
    },
  }
}

export const revalidate = 3600

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  // Get related posts from same whitepaper
  const relatedPosts = blog.parentWhitepaper
    ? (await getBlogsByWhitepaper(blog.parentWhitepaper.slug.current)).filter(p => p._id !== blog._id)
    : []

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--steel-800)] to-[var(--steel-900)] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {blog.parentWhitepaper && (
            <Link
              href={`/guides/${blog.parentWhitepaper.slug.current}`}
              className="inline-block text-sm font-medium text-[var(--dent-300)] bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors mb-4"
            >
              From: {blog.parentWhitepaper.title}
            </Link>
          )}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg text-[var(--steel-300)] mb-6">{blog.description}</p>
          <div className="flex items-center gap-4 text-sm text-[var(--steel-400)]">
            <span>By {blog.author}</span>
            <span>&bull;</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose-dent">
                <PortableText value={blog.content} />
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Parent Guide CTA */}
              {blog.parentWhitepaper && (
                <div className="bg-[var(--dent-50)] border border-[var(--dent-200)] rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-[var(--steel-900)] mb-2">Read the Full Guide</h3>
                  <p className="text-sm text-[var(--steel-600)] mb-4">
                    This article is part of our comprehensive guide on this topic.
                  </p>
                  <Link href={`/guides/${blog.parentWhitepaper.slug.current}`} className="btn-primary w-full text-center text-sm">
                    View Full Guide
                  </Link>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 4).map((post) => (
                      <Link key={post._id} href={`/blog/${post.slug.current}`} className="block group">
                        <h4 className="text-[var(--steel-800)] font-medium group-hover:text-[var(--dent-600)] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-[var(--steel-500)] mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 bg-[var(--steel-900)] text-white rounded-lg p-6">
                <h3 className="font-semibold mb-2">Need PDR Service?</h3>
                <p className="text-sm text-[var(--steel-300)] mb-4">
                  Connect with certified technicians in your area.
                </p>
                <Link href="/find-technician" className="btn-accent w-full text-center text-sm">
                  Find a Technician
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <section className="bg-[var(--steel-50)] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-[var(--steel-600)]">Tags:</span>
              {blog.tags.map((tag) => (
                <span key={tag} className="text-sm text-[var(--steel-600)] bg-white px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
