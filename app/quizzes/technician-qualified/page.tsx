import { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: 'Is My PDR Technician Qualified? | Free Checklist',
  description: 'Evaluate your PDR technician or shop with our qualification checklist. Learn the red flags and green flags that indicate quality.',
  openGraph: {
    title: 'Is My PDR Technician Qualified? | Free Checklist',
    description: 'Evaluate your PDR technician with our professional qualification checklist.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/technician-qualified',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is My PDR Technician Qualified?',
    description: 'Evaluate your PDR technician with our professional qualification checklist.',
  },
}

const questions = [
  {
    id: 'certifications',
    question: 'Does the technician hold any industry certifications?',
    description: 'Ask about I-CAR, Vale, NAPDRT, or manufacturer certifications.',
    options: [
      { label: 'Yes - I-CAR certified and/or Vale trained', value: 'certified', points: 4 },
      { label: 'Yes - NAPDRT member or manufacturer certified', value: 'member', points: 3 },
      { label: 'Claims to be certified but couldn\'t show proof', value: 'claims', points: 1 },
      { label: 'No certifications or didn\'t ask', value: 'none', points: 0 },
    ],
  },
  {
    id: 'insurance',
    question: 'Does the business carry liability insurance?',
    description: 'Proper insurance protects you if something goes wrong.',
    options: [
      { label: 'Yes - provided proof of insurance', value: 'verified', points: 4 },
      { label: 'Yes - they said they\'re insured', value: 'claimed', points: 2 },
      { label: 'Not sure / Didn\'t ask', value: 'unsure', points: 1 },
      { label: 'No or refused to answer', value: 'no', points: 0 },
    ],
  },
  {
    id: 'warranty',
    question: 'What warranty is offered on the repair?',
    description: 'Quality technicians stand behind their work.',
    options: [
      { label: 'Lifetime warranty in writing', value: 'lifetime', points: 4 },
      { label: '2-5 year written warranty', value: 'long', points: 3 },
      { label: '90 days to 1 year warranty', value: 'short', points: 2 },
      { label: 'Verbal warranty only or none offered', value: 'none', points: 0 },
    ],
  },
  {
    id: 'estimate',
    question: 'How was the estimate provided?',
    description: 'Professional shops provide detailed written estimates.',
    options: [
      { label: 'Detailed written estimate after in-person inspection', value: 'detailed', points: 4 },
      { label: 'Written estimate from photos', value: 'photos', points: 3 },
      { label: 'Verbal quote only', value: 'verbal', points: 1 },
      { label: 'Quote seemed unusually low compared to others', value: 'lowball', points: 0 },
    ],
  },
  {
    id: 'reviews',
    question: 'What do online reviews and ratings show?',
    description: 'Check Google, Yelp, and BBB ratings.',
    options: [
      { label: '4.5+ stars with 50+ reviews', value: 'excellent', points: 4 },
      { label: '4.0-4.4 stars with good review count', value: 'good', points: 3 },
      { label: 'Mixed reviews or few reviews available', value: 'mixed', points: 1 },
      { label: 'Poor reviews, complaints, or no online presence', value: 'poor', points: 0 },
    ],
  },
  {
    id: 'experience',
    question: 'How many years of PDR experience does the technician have?',
    description: 'PDR requires years of practice to master.',
    options: [
      { label: '10+ years of dedicated PDR experience', value: 'expert', points: 4 },
      { label: '5-10 years of experience', value: 'experienced', points: 3 },
      { label: '2-5 years of experience', value: 'developing', points: 2 },
      { label: 'Less than 2 years or won\'t say', value: 'new', points: 0 },
    ],
  },
  {
    id: 'facility',
    question: 'What is the work environment like?',
    description: 'Professional setup affects repair quality.',
    options: [
      { label: 'Professional shop with proper lighting and tools', value: 'shop', points: 4 },
      { label: 'Mobile service with professional equipment', value: 'mobile', points: 3 },
      { label: 'Works from home but has good setup', value: 'home', points: 2 },
      { label: 'Unprofessional setup or couldn\'t verify', value: 'unknown', points: 0 },
    ],
  },
]

const results = [
  {
    minScore: 22,
    maxScore: 28,
    title: 'Highly Qualified Technician',
    description: 'Based on your answers, this technician appears to be highly qualified and professional. They demonstrate the certifications, experience, and business practices that indicate quality work.',
    recommendation: 'This technician meets the standards recommended by industry organizations like NAPDRT and I-CAR. Their warranty, insurance, and customer reviews suggest you\'re in good hands. Proceed with confidence, but always get the warranty in writing before work begins.',
    color: 'green' as const,
  },
  {
    minScore: 14,
    maxScore: 21,
    title: 'Acceptable with Some Concerns',
    description: 'This technician shows some positive indicators but also has areas of concern. They may be capable, but you should verify the missing credentials or get additional quotes.',
    recommendation: 'Ask more questions about the areas that scored lower. Request proof of insurance and get the warranty terms in writing. According to the Better Business Bureau, you should never feel pressured into immediate decisions. Consider getting a second opinion from another qualified technician.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 13,
    title: 'Significant Red Flags',
    description: 'Multiple warning signs suggest this may not be a qualified or reputable technician. The lack of verifiable credentials, poor reviews, or unprofessional practices are concerning.',
    recommendation: 'We strongly recommend getting quotes from other technicians. The Consumer Financial Protection Bureau advises consumers to verify contractor credentials before authorizing work. Look for I-CAR certified or NAPDRT member technicians who can provide proof of insurance and written warranties.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Better Business Bureau',
    url: 'https://www.bbb.org',
    description: 'Business accreditation and consumer complaint information',
  },
  {
    name: 'I-CAR (Inter-Industry Conference on Auto Collision Repair)',
    url: 'https://www.i-car.com',
    description: 'Industry standard for auto repair technician training and certification',
  },
  {
    name: 'Consumer Financial Protection Bureau',
    url: 'https://www.consumerfinance.gov',
    description: 'Consumer rights and contractor verification guidance',
  },
]

export default function TechnicianQualifiedQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--steel-700)] to-[var(--steel-900)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Is My PDR Technician Qualified?</h1>
          <p className="text-lg text-[var(--steel-300)]">
            Evaluate your technician with our professional qualification checklist.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Technician Qualification Check"
            description="Professional Standards Evaluation"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Find Verified Technicians"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
