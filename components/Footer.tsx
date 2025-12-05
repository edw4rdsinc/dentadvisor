import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    resources: [
      { name: 'PDR Guides', href: '/guides' },
      { name: 'Blog', href: '/blog' },
      { name: 'Quizzes', href: '/quizzes' },
      { name: 'FAQs', href: '/faqs' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'For Technicians', href: '/for-technicians' },
      { name: 'Partner With Us', href: '/partners' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  }

  return (
    <footer className="bg-[var(--steel-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--dent-500)] flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold">DentAdvisor</span>
            </Link>
            <p className="text-[var(--steel-400)] text-sm">
              Your trusted guide to paintless dent repair. We help vehicle owners make informed decisions about dent repair.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[var(--steel-400)] hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[var(--steel-400)] hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[var(--steel-400)] hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--steel-700)] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--steel-400)] text-sm">
            &copy; {new Date().getFullYear()} DentAdvisor. All rights reserved.
          </p>
          <p className="text-[var(--steel-500)] text-xs mt-2 md:mt-0">
            Part of the AIOS Network
          </p>
        </div>
      </div>
    </footer>
  )
}
