import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'Hail Damage Severity Assessment | Free Calculator',
  description: 'Assess your vehicle\'s hail damage severity and get guidance on insurance claims, repair costs, and next steps.',
  openGraph: {
    title: 'Hail Damage Severity Assessment | Free Calculator',
    description: 'Assess your hail damage severity and get guidance on insurance claims and repair options.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/hail-damage-assessment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hail Damage Severity Assessment',
    description: 'Assess your hail damage and get guidance on insurance claims and repairs.',
  },
}

const questions = [
  {
    id: 'dent-count',
    question: 'Approximately how many dents can you count on your vehicle?',
    description: 'Count all visible dents across the entire vehicle.',
    options: [
      { label: '1-10 dents', value: 'minimal', points: 1 },
      { label: '11-50 dents', value: 'moderate', points: 2 },
      { label: '51-150 dents', value: 'significant', points: 3 },
      { label: 'Over 150 dents (too many to count)', value: 'severe', points: 4 },
    ],
  },
  {
    id: 'panels-affected',
    question: 'How many panels are affected by hail damage?',
    description: 'Count horizontal surfaces: hood, roof, trunk, plus any side panels.',
    options: [
      { label: '1-2 panels (usually hood or roof only)', value: 'few', points: 1 },
      { label: '3-4 panels', value: 'several', points: 2 },
      { label: '5-7 panels', value: 'many', points: 3 },
      { label: 'Nearly every panel is damaged', value: 'all', points: 4 },
    ],
  },
  {
    id: 'dent-size',
    question: 'What is the size of the largest dents?',
    description: 'Hail size directly correlates to dent severity.',
    options: [
      { label: 'Pea-sized (1/4 inch or less)', value: 'small', points: 1 },
      { label: 'Marble to dime-sized (1/4 to 3/4 inch)', value: 'medium', points: 2 },
      { label: 'Quarter to golf ball-sized (3/4 to 1.5 inch)', value: 'large', points: 3 },
      { label: 'Larger than golf ball (over 1.5 inch)', value: 'xlarge', points: 4 },
    ],
  },
  {
    id: 'paint-damage',
    question: 'Is there any paint damage from the hail?',
    description: 'Look for chips, cracks, or bare metal spots.',
    options: [
      { label: 'No - paint is intact everywhere', value: 'none', points: 4 },
      { label: 'Minor - a few small chips', value: 'minor', points: 3 },
      { label: 'Moderate - multiple chips or small cracks', value: 'moderate', points: 1 },
      { label: 'Severe - large areas of damaged paint', value: 'severe', points: 0 },
    ],
  },
  {
    id: 'glass-damage',
    question: 'Is there any glass damage (windshield, windows, sunroof)?',
    description: 'Check all glass surfaces for cracks, chips, or breaks.',
    options: [
      { label: 'No glass damage', value: 'none', points: 3 },
      { label: 'Small chip(s) in windshield only', value: 'chip', points: 2 },
      { label: 'Cracked windshield needs replacement', value: 'cracked', points: 1 },
      { label: 'Multiple glass panels damaged', value: 'multiple', points: 0 },
    ],
  },
  {
    id: 'vehicle-value',
    question: 'What is the approximate value of your vehicle?',
    description: 'This helps determine if repair costs might exceed the threshold for total loss.',
    options: [
      { label: 'Over $30,000', value: 'high', points: 4 },
      { label: '$15,000 - $30,000', value: 'mid-high', points: 3 },
      { label: '$8,000 - $15,000', value: 'mid', points: 2 },
      { label: 'Under $8,000', value: 'low', points: 1 },
    ],
  },
  {
    id: 'insurance-status',
    question: 'Do you have comprehensive insurance coverage?',
    description: 'Hail damage is covered under comprehensive, not collision.',
    options: [
      { label: 'Yes, with low deductible ($100-$500)', value: 'yes-low', points: 4 },
      { label: 'Yes, with higher deductible ($500-$1000)', value: 'yes-high', points: 3 },
      { label: 'Yes, but not sure about deductible', value: 'yes-unsure', points: 2 },
      { label: 'No comprehensive coverage / Not sure', value: 'no', points: 0 },
    ],
  },
]

const results = [
  {
    minScore: 22,
    maxScore: 28,
    title: 'Minor Hail Damage',
    description: 'Your vehicle has minor hail damage that is an excellent candidate for PDR repair. With minimal dents and no paint damage, repairs should be straightforward and relatively affordable.',
    recommendation: 'File a comprehensive insurance claim if your deductible makes sense (typically worth it for 20+ dents). Most minor hail repairs cost $500-$1,500 and can be completed in one day. According to NOAA, prompt repair prevents potential rust issues from developing in dented areas.',
    color: 'green' as const,
  },
  {
    minScore: 14,
    maxScore: 21,
    title: 'Moderate Hail Damage',
    description: 'Your vehicle has moderate hail damage that should still be repairable with PDR in most cases. The repair will require more time and expertise, but your vehicle can likely be restored to pre-storm condition.',
    recommendation: 'Definitely file an insurance claim - moderate hail repairs typically run $2,000-$5,000. Get a professional assessment before accepting any settlement. FEMA recommends documenting all damage thoroughly with photos before repairs begin. Request a certified PDR technician for best results.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 13,
    title: 'Severe Hail Damage',
    description: 'Your vehicle has severe hail damage that may approach or exceed total loss thresholds depending on vehicle value. Some panels may require conventional repair or replacement in addition to PDR.',
    recommendation: 'File your insurance claim immediately and get multiple professional assessments. Severe hail repairs can exceed $6,000-$10,000. If your vehicle is older or lower value, the insurance company may total it. According to the Insurance Information Institute, you have the right to choose your own repair shop and can negotiate the settlement.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'National Oceanic and Atmospheric Administration (NOAA)',
    url: 'https://www.noaa.gov',
    description: 'Hail storm data and vehicle damage statistics',
  },
  {
    name: 'Federal Emergency Management Agency (FEMA)',
    url: 'https://www.fema.gov',
    description: 'Storm damage documentation guidelines',
  },
  {
    name: 'Insurance Information Institute',
    url: 'https://www.iii.org',
    description: 'Comprehensive coverage and hail claim guidance',
  },
]

export default function HailDamageQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Hail Damage Severity Assessment</h1>
          <p className="text-lg text-blue-100 mb-6">
            Evaluate your hail damage and get guidance on insurance claims and repair options.
          </p>
          <QuizShareEmbed
            quizSlug="hail-damage-assessment"
            quizTitle="Hail Damage Severity Assessment"
            quizDescription="Assess your hail damage and get guidance on insurance claims and repairs."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Hail Damage Assessment"
            description="Severity Evaluation"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Find Hail Repair Specialists"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
