import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'How Dents Affect Your Car\'s Value | ROI Calculator',
  description: 'Calculate how much dents are hurting your vehicle\'s resale value and see the ROI of PDR repair.',
  openGraph: {
    title: 'How Dents Affect Your Car\'s Value | ROI Calculator',
    description: 'Calculate how much dents are hurting your resale value and see the ROI of repair.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/dent-value-impact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Dents Affect Your Car\'s Value',
    description: 'Calculate how much dents are hurting your resale value and see the ROI of repair.',
  },
}

const questions = [
  {
    id: 'vehicle-value',
    question: 'What is your vehicle\'s approximate current value?',
    description: 'Check Kelley Blue Book or similar for a fair market estimate.',
    options: [
      { label: 'Over $40,000', value: 'luxury', points: 4 },
      { label: '$25,000 - $40,000', value: 'mid-high', points: 3 },
      { label: '$12,000 - $25,000', value: 'mid', points: 2 },
      { label: 'Under $12,000', value: 'economy', points: 1 },
    ],
  },
  {
    id: 'dent-count',
    question: 'How many visible dents does your vehicle have?',
    description: 'Count all dents that a buyer would notice.',
    options: [
      { label: '1-2 dents', value: 'minimal', points: 4 },
      { label: '3-5 dents', value: 'several', points: 3 },
      { label: '6-10 dents', value: 'many', points: 2 },
      { label: 'More than 10 dents', value: 'extensive', points: 1 },
    ],
  },
  {
    id: 'dent-visibility',
    question: 'How visible are the dents?',
    description: 'Consider what a buyer would see during a walk-around.',
    options: [
      { label: 'Hard to see - only visible in certain light', value: 'subtle', points: 4 },
      { label: 'Visible on close inspection', value: 'noticeable', points: 3 },
      { label: 'Obvious from normal viewing distance', value: 'obvious', points: 2 },
      { label: 'Very noticeable - first thing you see', value: 'prominent', points: 1 },
    ],
  },
  {
    id: 'location',
    question: 'Where are the dents primarily located?',
    description: 'Some locations affect perceived value more than others.',
    options: [
      { label: 'Roof or areas less visible', value: 'hidden', points: 4 },
      { label: 'Rear quarter panels or trunk', value: 'back', points: 3 },
      { label: 'Doors or front fenders', value: 'sides', points: 2 },
      { label: 'Hood or front-facing panels', value: 'front', points: 1 },
    ],
  },
  {
    id: 'sale-timeline',
    question: 'When do you plan to sell or trade in?',
    description: 'This affects the ROI calculation for repair.',
    options: [
      { label: 'Within the next month', value: 'immediate', points: 4 },
      { label: 'Within 3 months', value: 'soon', points: 3 },
      { label: 'Within 6-12 months', value: 'planning', points: 2 },
      { label: 'No specific plans yet', value: 'future', points: 1 },
    ],
  },
  {
    id: 'sale-method',
    question: 'How do you plan to sell?',
    description: 'Private sales are more affected by cosmetic issues.',
    options: [
      { label: 'Private sale (Facebook, Craigslist, etc.)', value: 'private', points: 4 },
      { label: 'Trade-in at dealership', value: 'trade', points: 3 },
      { label: 'CarMax, Carvana, or similar', value: 'instant', points: 2 },
      { label: 'Not sure yet', value: 'unsure', points: 2 },
    ],
  },
]

const results = [
  {
    minScore: 19,
    maxScore: 24,
    title: 'Minor Value Impact - $200-$500',
    description: 'Your dents are having a minor but real impact on your vehicle\'s value. Buyers will notice and use them to negotiate, even if the damage is subtle.',
    recommendation: 'PDR repair would likely cost $150-$400 and could recover $300-$800 in value. That\'s a positive ROI of 50-100%. According to Kelley Blue Book, even minor cosmetic issues can reduce offers by 5-10% as buyers use any flaw as a negotiating point. For private sales especially, a dent-free car commands significantly more buyer interest.',
    color: 'green' as const,
  },
  {
    minScore: 12,
    maxScore: 18,
    title: 'Moderate Value Impact - $500-$1,500',
    description: 'The dents on your vehicle are noticeably affecting its market value. Buyers will expect a significant discount or may pass on your listing entirely.',
    recommendation: 'Investing $300-$800 in PDR could recover $800-$2,000 in sale price. NADA Guides research shows that visible dents can reduce trade-in offers by 10-20%. Private buyers are even more sensitive - cars with cosmetic damage get 50% fewer inquiries. The repair ROI is strongly positive for your situation.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 11,
    title: 'Significant Value Impact - $1,500+',
    description: 'Your vehicle\'s dents are causing major value depreciation. Buyers see extensive dents as a sign of neglect and will dramatically reduce their offers.',
    recommendation: 'Even with higher repair costs of $800-$1,500, you could recover $2,000-$4,000 or more in sale price. Consumer Reports notes that cosmetic condition is the #2 factor (after mechanical) in used car purchasing decisions. Without repairs, you may need to accept wholesale pricing rather than retail. PDR is definitely worth it before selling.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Kelley Blue Book',
    url: 'https://www.kbb.com',
    description: 'Vehicle valuation and condition impact on pricing',
  },
  {
    name: 'NADA Guides',
    url: 'https://www.nadaguides.com',
    description: 'Trade-in value guidelines and condition ratings',
  },
  {
    name: 'Consumer Reports',
    url: 'https://www.consumerreports.org',
    description: 'Used car buying behavior and condition preferences',
  },
]

export default function DentValueImpactQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">How Much Are Dents Hurting Your Car&apos;s Value?</h1>
          <p className="text-lg text-emerald-100 mb-6">
            Calculate the resale impact and see the ROI of PDR repair.
          </p>
          <QuizShareEmbed
            quizSlug="dent-value-impact"
            quizTitle="How Dents Affect Your Car's Value"
            quizDescription="Calculate how much dents are hurting your resale value and see the ROI of repair."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Value Impact Calculator"
            description="Resale Value Analysis"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Get PDR Quote"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
