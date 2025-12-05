import Link from 'next/link'
import { getPublishedWhitepapers, getPublishedBlogs } from '@/lib/sanity'

export const revalidate = 3600 // Revalidate every hour

export default async function HomePage() {
  const whitepapers = await getPublishedWhitepapers()
  const blogs = await getPublishedBlogs()

  // Get first 4 whitepapers and first 6 blogs for homepage
  const featuredGuides = whitepapers.slice(0, 4)
  const recentBlogs = blogs.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted Guide to Paintless Dent Repair
            </h1>
            <p className="text-xl text-[var(--dent-100)] mb-8">
              Make informed decisions about dent repair. Learn about PDR techniques, find qualified technicians, and understand your options before spending a dime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quizzes" className="btn-accent text-lg px-8 py-4">
                Take Our Free Assessment
              </Link>
              <Link href="/guides" className="btn-secondary text-lg px-8 py-4">
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-[var(--steel-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--dent-600)]">85%</div>
              <div className="text-[var(--steel-600)] mt-1">of dents can be fixed with PDR</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--dent-600)]">50-70%</div>
              <div className="text-[var(--steel-600)] mt-1">cost savings vs body shop</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--dent-600)]">Same Day</div>
              <div className="text-[var(--steel-600)] mt-1">repairs available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--dent-600)]">100%</div>
              <div className="text-[var(--steel-600)] mt-1">original paint preserved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Quizzes */}
      <section className="bg-[var(--steel-50)] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--steel-900)] mb-4">
              Not Sure If PDR Is Right for You?
            </h2>
            <p className="text-lg text-[var(--steel-600)] max-w-2xl mx-auto">
              Take one of our quick assessments to understand your options and get personalized recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--dent-100)] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--steel-900)] mb-2">Can My Dent Be Fixed?</h3>
              <p className="text-[var(--steel-600)] mb-4">
                Answer a few questions about your dent to see if PDR is a good option.
              </p>
              <Link href="/quizzes/can-my-dent-be-fixed" className="text-[var(--dent-600)] font-medium hover:underline">
                Start Assessment &rarr;
              </Link>
            </div>

            <div className="card card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--accent-400)]/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--accent-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--steel-900)] mb-2">PDR vs Body Shop?</h3>
              <p className="text-[var(--steel-600)] mb-4">
                Compare your options and understand the cost-benefit tradeoffs.
              </p>
              <Link href="/quizzes/pdr-vs-body-shop" className="text-[var(--dent-600)] font-medium hover:underline">
                Compare Options &rarr;
              </Link>
            </div>

            <div className="card card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--steel-900)] mb-2">Hail Damage Check</h3>
              <p className="text-[var(--steel-600)] mb-4">
                Assess your hail damage and learn about the insurance claims process.
              </p>
              <Link href="/quizzes/hail-damage-assessment" className="text-[var(--dent-600)] font-medium hover:underline">
                Check Damage &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--steel-900)] mb-2">
                Expert PDR Guides
              </h2>
              <p className="text-lg text-[var(--steel-600)]">
                In-depth resources to help you understand paintless dent repair
              </p>
            </div>
            <Link href="/guides" className="hidden sm:block text-[var(--dent-600)] font-medium hover:underline">
              View All Guides &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide._id} href={`/guides/${guide.slug.current}`} className="card card-hover group">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {guide.categories?.map((cat) => (
                      <span key={cat._id} className="text-xs font-medium text-[var(--dent-600)] bg-[var(--dent-50)] px-2 py-1 rounded">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--steel-900)] group-hover:text-[var(--dent-600)] transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-[var(--steel-600)] line-clamp-2">
                    {guide.description}
                  </p>
                  <div className="mt-4 text-sm text-[var(--steel-500)]">
                    By {guide.author} &bull; {new Date(guide.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/guides" className="btn-secondary">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="bg-[var(--steel-50)] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--steel-900)] mb-2">
                Latest from the Blog
              </h2>
              <p className="text-lg text-[var(--steel-600)]">
                Tips, insights, and news about paintless dent repair
              </p>
            </div>
            <Link href="/blog" className="hidden sm:block text-[var(--dent-600)] font-medium hover:underline">
              View All Posts &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="card card-hover group">
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--steel-900)] group-hover:text-[var(--dent-600)] transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--steel-600)] text-sm line-clamp-2 mb-3">
                    {post.description}
                  </p>
                  <div className="text-xs text-[var(--steel-500)]">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--steel-900)] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Fix That Dent?
          </h2>
          <p className="text-xl text-[var(--steel-300)] mb-8 max-w-2xl mx-auto">
            Connect with certified PDR technicians in your area. Get quotes from verified professionals who meet our quality standards.
          </p>
          <Link href="/find-technician" className="btn-accent text-lg px-8 py-4">
            Find a PDR Technician Near You
          </Link>
        </div>
      </section>
    </>
  )
}
