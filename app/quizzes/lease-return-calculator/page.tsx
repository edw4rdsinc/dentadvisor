import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'Lease Return Damage Calculator | Save on Fees',
  description: 'Calculate potential lease-end charges for vehicle damage and see how PDR can save you money before your lease inspection.',
  openGraph: {
    title: 'Lease Return Damage Calculator | Save on Fees',
    description: 'Calculate potential lease-end charges and see how PDR can save you money.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/lease-return-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lease Return Damage Calculator',
    description: 'Calculate potential lease-end charges and see how PDR can save you money.',
  },
}

const questions = [
  {
    id: 'lease-end-timeline',
    question: 'How soon does your lease end?',
    description: 'Earlier repair gives more flexibility and better scheduling.',
    options: [
      { label: 'More than 3 months away', value: 'plenty', points: 4 },
      { label: '1-3 months away', value: 'soon', points: 3 },
      { label: 'Less than 1 month away', value: 'urgent', points: 2 },
      { label: 'Already past or inspection scheduled', value: 'immediate', points: 1 },
    ],
  },
  {
    id: 'dent-count',
    question: 'How many dents does your leased vehicle have?',
    description: 'Count all dents that exceed the wear guidelines.',
    options: [
      { label: '1-2 small dents', value: 'few', points: 4 },
      { label: '3-5 dents', value: 'several', points: 3 },
      { label: '6-10 dents', value: 'many', points: 2 },
      { label: 'More than 10 dents', value: 'extensive', points: 1 },
    ],
  },
  {
    id: 'dent-size',
    question: 'What size are most of the dents?',
    description: 'Lease companies use size thresholds for damage charges.',
    options: [
      { label: 'Smaller than a quarter (may be under threshold)', value: 'small', points: 4 },
      { label: 'Quarter to golf ball sized', value: 'medium', points: 3 },
      { label: 'Larger than golf ball', value: 'large', points: 2 },
      { label: 'Various sizes including some large ones', value: 'mixed', points: 2 },
    ],
  },
  {
    id: 'location',
    question: 'Where are the dents located?',
    description: 'Some locations are more visible during inspections.',
    options: [
      { label: 'Mostly on doors or fenders', value: 'sides', points: 3 },
      { label: 'Hood, roof, or trunk', value: 'horizontal', points: 3 },
      { label: 'Bumper or trim areas', value: 'bumper', points: 2 },
      { label: 'Multiple panels including visible areas', value: 'multiple', points: 2 },
    ],
  },
  {
    id: 'paint-condition',
    question: 'Is there any paint damage with the dents?',
    description: 'Paint damage increases lease-end charges significantly.',
    options: [
      { label: 'No - paint is intact on all dents', value: 'none', points: 4 },
      { label: 'Minor scratches but no chips', value: 'minor', points: 3 },
      { label: 'Some paint chips or scratches', value: 'chips', points: 1 },
      { label: 'Paint damage to bare metal', value: 'severe', points: 0 },
    ],
  },
  {
    id: 'lessor',
    question: 'Who is your leasing company?',
    description: 'Different lessors have different wear guidelines.',
    options: [
      { label: 'BMW, Mercedes, Lexus (premium brands)', value: 'premium', points: 2 },
      { label: 'Toyota, Honda, Ford Financial', value: 'standard', points: 3 },
      { label: 'Third-party lessor (Ally, Chase, etc.)', value: 'third-party', points: 3 },
      { label: 'Not sure', value: 'unsure', points: 2 },
    ],
  },
  {
    id: 'previous-inspection',
    question: 'Have you had a pre-inspection or wear assessment?',
    description: 'Many lessors offer free pre-inspections months before lease end.',
    options: [
      { label: 'Yes - and damage was noted', value: 'noted', points: 2 },
      { label: 'Yes - no major concerns raised', value: 'clear', points: 4 },
      { label: 'No - haven\'t scheduled one', value: 'no', points: 3 },
      { label: 'Didn\'t know that was available', value: 'unaware', points: 3 },
    ],
  },
]

const results = [
  {
    minScore: 22,
    maxScore: 28,
    title: 'Low Risk - Minor Charges Expected',
    description: 'Based on your damage description, you may face minimal or no lease-end charges. However, proactive PDR repair could still save you money and eliminate any risk.',
    recommendation: 'While your damage may fall within normal wear guidelines, we recommend getting a PDR quote anyway. Many dents that seem "acceptable" still get charged $75-150 each at lease end. PDR typically costs 30-50% less than lease company charges. According to Edmunds, proactive repairs almost always save money versus lease-end charges.',
    color: 'green' as const,
  },
  {
    minScore: 14,
    maxScore: 21,
    title: 'Moderate Risk - $300-$800 in Potential Charges',
    description: 'Your vehicle has damage that will likely result in lease-end charges. PDR repair before your inspection could save you hundreds of dollars.',
    recommendation: 'Getting PDR repairs now is strongly recommended. Lease companies typically charge $150-300 per dent, plus administrative fees. A certified PDR technician can usually fix these dents for 40-60% less. The Federal Trade Commission notes that lease-end charges are one of the most common consumer complaints - being proactive protects you.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 13,
    title: 'High Risk - $800+ in Potential Charges',
    description: 'Your vehicle has significant damage that will almost certainly result in substantial lease-end charges. Immediate action is recommended.',
    recommendation: 'Act now to minimize costs. Multiple dents or paint damage can result in charges exceeding $1,000-$2,000 at lease end. Get PDR quotes immediately - even with your timeline, same-day repairs are often available. According to Consumer Reports, negotiating or disputing lease-end charges after the fact is rarely successful, making prevention the best strategy.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Edmunds',
    url: 'https://www.edmunds.com',
    description: 'Lease-end wear and tear guidelines and cost analysis',
  },
  {
    name: 'Federal Trade Commission',
    url: 'https://consumer.ftc.gov/articles/vehicle-leasing',
    description: 'Consumer rights in vehicle leasing agreements',
  },
  {
    name: 'Consumer Reports',
    url: 'https://www.consumerreports.org',
    description: 'Lease return best practices and excess wear guidance',
  },
]

export default function LeaseReturnQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Lease Return Damage Calculator</h1>
          <p className="text-lg text-purple-100 mb-6">
            See how much PDR could save you before your lease inspection.
          </p>
          <QuizShareEmbed
            quizSlug="lease-return-calculator"
            quizTitle="Lease Return Damage Calculator"
            quizDescription="Calculate potential lease-end charges and see how PDR can save you money."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Lease Return Calculator"
            description="Damage Charge Estimation"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Get PDR Quote Before Lease End"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
