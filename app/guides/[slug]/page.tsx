import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getWhitepaperBySlug, getBlogsByWhitepaper, getPublishedWhitepapers } from '@/lib/sanity'
import PortableText from '@/components/PortableText'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const whitepapers = await getPublishedWhitepapers()
  return whitepapers.map((wp) => ({ slug: wp.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const whitepaper = await getWhitepaperBySlug(slug)

  if (!whitepaper) {
    return { title: 'Guide Not Found' }
  }

  return {
    title: whitepaper.title,
    description: whitepaper.description,
    openGraph: {
      title: whitepaper.title,
      description: whitepaper.description,
      type: 'article',
      authors: [whitepaper.author],
      publishedTime: whitepaper.publishedAt,
    },
  }
}

export const revalidate = 3600

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const [whitepaper, relatedBlogs] = await Promise.all([
    getWhitepaperBySlug(slug),
    getBlogsByWhitepaper(slug),
  ])

  if (!whitepaper) {
    notFound()
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            {whitepaper.categories?.map((cat) => (
              <Link
                key={cat._id}
                href={`/guides/category/${cat.slug.current}`}
                className="text-sm font-medium text-[var(--dent-200)] bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
              >
                {cat.title}
              </Link>
            ))}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">{whitepaper.title}</h1>
          <p className="text-lg text-[var(--dent-100)] mb-6">{whitepaper.description}</p>
          <div className="flex items-center gap-4 text-sm text-[var(--dent-200)]">
            <span>By {whitepaper.author}</span>
            <span>&bull;</span>
            <span>{new Date(whitepaper.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {whitepaper.summary && (
                <div className="bg-[var(--dent-50)] border border-[var(--dent-200)] rounded-lg p-6 mb-8">
                  <h2 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Executive Summary</h2>
                  <p className="text-[var(--steel-700)]">{whitepaper.summary}</p>
                </div>
              )}

              <article className="prose-dent">
                <PortableText value={whitepaper.content} />
              </article>

              {/* Sources */}
              {whitepaper.sources && whitepaper.sources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[var(--steel-200)]">
                  <h2 className="text-xl font-semibold text-[var(--steel-900)] mb-4">Sources</h2>
                  <ol className="space-y-3 text-sm text-[var(--steel-600)]">
                    {whitepaper.sources.map((source, index) => (
                      <li key={source._key} className="flex gap-2">
                        <span className="font-medium text-[var(--steel-500)]">{index + 1}.</span>
                        <div>
                          <span className="font-medium text-[var(--steel-800)]">{source.name}</span>
                          {source.description && <span>, &ldquo;{source.description}&rdquo;</span>}
                          {source.url && (
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="block text-[var(--dent-600)] hover:underline truncate">
                              {source.url}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedBlogs.slice(0, 5).map((blog) => (
                      <Link key={blog._id} href={`/blog/${blog.slug.current}`} className="block group">
                        <h4 className="text-[var(--steel-800)] font-medium group-hover:text-[var(--dent-600)] transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-[var(--steel-500)] mt-1">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
      {whitepaper.tags && whitepaper.tags.length > 0 && (
        <section className="bg-[var(--steel-50)] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-[var(--steel-600)]">Tags:</span>
              {whitepaper.tags.map((tag) => (
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
