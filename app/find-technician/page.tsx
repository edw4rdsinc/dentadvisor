import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find a PDR Technician',
  description: 'Connect with certified paintless dent repair technicians in your area. Get quotes from verified professionals who meet our quality standards.',
}

export default function FindTechnicianPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Find a Certified PDR Technician</h1>
            <p className="text-xl text-[var(--dent-100)]">
              Get connected with verified, certified professionals in your area. All technicians in our network meet our quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-[var(--steel-900)] mb-6">Get Free Quotes</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors"
                  placeholder="12345"
                  maxLength={5}
                />
              </div>

              <div>
                <label htmlFor="damage" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                  Type of Damage
                </label>
                <select
                  id="damage"
                  name="damage"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors"
                >
                  <option value="">Select damage type...</option>
                  <option value="hail">Hail Damage</option>
                  <option value="door-ding">Door Ding</option>
                  <option value="parking-lot">Parking Lot Dent</option>
                  <option value="minor-collision">Minor Collision</option>
                  <option value="multiple">Multiple Dents</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-[var(--steel-700)] mb-2">
                  Describe Your Damage (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none transition-colors resize-none"
                  placeholder="Tell us about the damage - location, size, number of dents, etc."
                />
              </div>

              <button type="submit" className="btn-accent w-full text-lg py-4">
                Get Free Quotes
              </button>

              <p className="text-xs text-[var(--steel-500)] text-center">
                By submitting this form, you agree to be contacted by certified PDR technicians in your area. Your information will not be sold or shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[var(--steel-50)] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--steel-900)] text-center mb-12">
            Why Choose Our Network?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Verified Credentials</h3>
              <p className="text-sm text-[var(--steel-600)]">
                All technicians are verified for proper licensing, insurance, and certifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-[var(--steel-600)]">
                Network technicians must maintain high customer satisfaction ratings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Fast Response</h3>
              <p className="text-sm text-[var(--steel-600)]">
                Most quotes provided within 24 hours of your request.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Free Quotes</h3>
              <p className="text-sm text-[var(--steel-600)]">
                No cost, no obligation. Compare quotes from multiple technicians.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
