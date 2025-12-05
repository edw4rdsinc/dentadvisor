import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDR Quizzes & Assessments',
  description: 'Take our free assessments to understand your dent repair options. Find out if PDR is right for you, compare repair methods, and assess hail damage.',
}

const quizzes = [
  {
    id: 'can-my-dent-be-fixed',
    title: 'Can My Dent Be Fixed with PDR?',
    description: 'Answer a few questions about your dent to see if paintless dent repair is a viable option for your situation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'dent',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'pdr-vs-body-shop',
    title: 'PDR vs. Body Shop Calculator',
    description: 'Compare your repair options side-by-side. Get personalized recommendations based on your specific damage and priorities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'accent',
    duration: '2-3 min',
    questions: 6,
  },
  {
    id: 'hail-damage-assessment',
    title: 'Hail Damage Severity Assessment',
    description: 'Evaluate your hail damage severity and get guidance on insurance claims, repair costs, and next steps.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'blue',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'technician-qualified',
    title: 'Is My PDR Technician Qualified?',
    description: 'Evaluate your PDR technician or shop with our professional qualification checklist. Learn the red flags and green flags.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: 'steel',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'lease-return-calculator',
    title: 'Lease Return Damage Calculator',
    description: 'Calculate potential lease-end charges for vehicle damage and see how PDR can save you money before your inspection.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'purple',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'dent-value-impact',
    title: 'How Dents Affect Your Car\'s Value',
    description: 'Calculate how much dents are hurting your vehicle\'s resale value and see the ROI of PDR repair.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'emerald',
    duration: '2-3 min',
    questions: 6,
  },
  {
    id: 'diy-or-pro',
    title: 'DIY or Pro? Dent Repair Decision',
    description: 'Should you attempt DIY dent repair or hire a professional? Get personalized advice based on your damage and skill level.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'amber',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'insurance-claim-navigator',
    title: 'Insurance Claim Navigator',
    description: 'Should you file an insurance claim for your dent damage? Decide if claiming is worth it based on deductibles and damage.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'sky',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'fleet-roi-calculator',
    title: 'Fleet PDR ROI Calculator',
    description: 'Calculate the return on investment for PDR services in your commercial fleet. See how dent repair impacts vehicle value.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: 'indigo',
    duration: '2-3 min',
    questions: 7,
  },
  {
    id: 'classic-car-compatibility',
    title: 'Classic Car PDR Compatibility',
    description: 'Is your classic, vintage, or collector car a good candidate for paintless dent repair? Find out if PDR is safe for your classic.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'rose',
    duration: '2-3 min',
    questions: 7,
  },
]

export default function QuizzesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">PDR Assessments</h1>
          <p className="text-xl text-[var(--dent-100)] max-w-2xl">
            Not sure if paintless dent repair is right for you? Our free assessments help you understand your options and make informed decisions.
          </p>
        </div>
      </section>

      {/* Quiz Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={`/quizzes/${quiz.id}`}
                className="card card-hover block group"
              >
                <div className="p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    quiz.color === 'dent' ? 'bg-[var(--dent-100)] text-[var(--dent-600)]' :
                    quiz.color === 'accent' ? 'bg-[var(--accent-400)]/20 text-[var(--accent-500)]' :
                    quiz.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    quiz.color === 'steel' ? 'bg-[var(--steel-100)] text-[var(--steel-600)]' :
                    quiz.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    quiz.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                    quiz.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                    quiz.color === 'sky' ? 'bg-sky-100 text-sky-600' :
                    quiz.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                    quiz.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {quiz.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[var(--steel-900)] group-hover:text-[var(--dent-600)] transition-colors mb-2">
                      {quiz.title}
                    </h2>
                    <p className="text-[var(--steel-600)] mb-4">
                      {quiz.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--steel-500)]">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {quiz.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {quiz.questions} questions
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="btn-primary">
                      Start Assessment &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Take Our Quizzes */}
      <section className="bg-[var(--steel-50)] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--steel-900)] text-center mb-12">
            Why Take Our Assessments?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Make Informed Decisions</h3>
              <p className="text-[var(--steel-600)]">
                Understand your options before talking to repair shops. Knowledge is power when negotiating repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Save Money</h3>
              <p className="text-[var(--steel-600)]">
                PDR can save 50-70% compared to traditional body shop repairs. Find out if it&apos;s right for your situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--dent-100)] flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--dent-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-2">Get Personalized Results</h3>
              <p className="text-[var(--steel-600)]">
                Our assessments provide tailored recommendations based on your specific damage and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
