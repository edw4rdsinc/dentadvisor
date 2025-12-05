import Link from 'next/link'
import { Metadata } from 'next'
import { getPublishedBlogs } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, insights, and news about paintless dent repair from the DentAdvisor team.',
}

export const revalidate = 3600

export default async function BlogPage() {
  const blogs = await getPublishedBlogs()

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-[var(--dent-100)] max-w-2xl">
            Tips, insights, and the latest news about paintless dent repair.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="card card-hover group">
                <div className="p-6">
                  {post.parentWhitepaper && (
                    <div className="text-xs font-medium text-[var(--dent-600)] mb-2">
                      From: {post.parentWhitepaper.title}
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-[var(--steel-900)] group-hover:text-[var(--dent-600)] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[var(--steel-600)] line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[var(--steel-500)]">
                    <span>By {post.author}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--steel-600)]">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
