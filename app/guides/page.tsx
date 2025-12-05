import Link from 'next/link'
import { Metadata } from 'next'
import { getPublishedWhitepapers, getAllCategories } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'PDR Guides',
  description: 'Comprehensive guides to paintless dent repair. Learn about finding technicians, understanding costs, insurance claims, and more.',
}

export const revalidate = 3600

export default async function GuidesPage() {
  const [whitepapers, categories] = await Promise.all([
    getPublishedWhitepapers(),
    getAllCategories(),
  ])

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">PDR Guides</h1>
          <p className="text-xl text-[var(--dent-100)] max-w-2xl">
            Expert resources to help you understand paintless dent repair, make informed decisions, and get the best results for your vehicle.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-[var(--steel-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides"
              className="px-4 py-2 rounded-full bg-[var(--dent-600)] text-white text-sm font-medium"
            >
              All Guides
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/guides/category/${cat.slug.current}`}
                className="px-4 py-2 rounded-full bg-[var(--steel-100)] text-[var(--steel-700)] text-sm font-medium hover:bg-[var(--steel-200)] transition-colors"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitepapers.map((guide) => (
              <Link key={guide._id} href={`/guides/${guide.slug.current}`} className="card card-hover group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {guide.categories?.map((cat) => (
                      <span key={cat._id} className="text-xs font-medium text-[var(--dent-600)] bg-[var(--dent-50)] px-2 py-1 rounded">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--steel-900)] group-hover:text-[var(--dent-600)] transition-colors mb-2">
                    {guide.title}
                  </h2>
                  <p className="text-[var(--steel-600)] line-clamp-3 mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[var(--steel-500)]">
                    <span>By {guide.author}</span>
                    <span>{new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {whitepapers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--steel-600)]">No guides available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
