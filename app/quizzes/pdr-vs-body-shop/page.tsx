import { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: 'PDR vs Body Shop Calculator',
  description: 'Compare paintless dent repair vs traditional body shop repair. Get personalized cost estimates and recommendations for your vehicle damage.',
}

const questions = [
  {
    id: 'damage-type',
    question: 'What type of damage does your vehicle have?',
    description: 'Select the option that best describes your situation.',
    options: [
      { label: 'Dents without paint damage (hail, door dings)', value: 'dents-only', points: 4 },
      { label: 'Dents with minor scratches (paint intact underneath)', value: 'minor-scratch', points: 3 },
      { label: 'Dents with paint chips or cracks', value: 'paint-damage', points: 1 },
      { label: 'Dents with deep scratches to bare metal', value: 'deep-scratch', points: 0 },
    ],
  },
  {
    id: 'timeline',
    question: 'How quickly do you need the repair completed?',
    description: 'PDR is typically much faster than body shop repairs.',
    options: [
      { label: 'Same day or within 24 hours', value: 'urgent', points: 4 },
      { label: 'Within a few days', value: 'soon', points: 3 },
      { label: 'Within a week or two', value: 'flexible', points: 2 },
      { label: 'No rush - whenever it fits the schedule', value: 'no-rush', points: 1 },
    ],
  },
  {
    id: 'paint-priority',
    question: 'How important is preserving the original factory paint?',
    description: 'Factory paint affects resale value and long-term durability.',
    options: [
      { label: 'Very important - I want to keep the original paint', value: 'very-important', points: 4 },
      { label: 'Somewhat important - prefer original if possible', value: 'somewhat', points: 3 },
      { label: 'Not a priority - just want it fixed', value: 'not-priority', points: 1 },
      { label: 'Car is already repainted in that area', value: 'already-repainted', points: 0 },
    ],
  },
  {
    id: 'budget',
    question: 'What is your budget for this repair?',
    description: 'PDR typically costs 50-70% less than traditional body work.',
    options: [
      { label: 'Looking for the most affordable option', value: 'budget', points: 4 },
      { label: 'Moderate budget - want good value', value: 'moderate', points: 3 },
      { label: 'Flexible budget - quality is priority', value: 'flexible', points: 2 },
      { label: 'Insurance is covering it', value: 'insurance', points: 2 },
    ],
  },
  {
    id: 'rental-car',
    question: 'Would you need a rental car during repairs?',
    description: 'Longer repair times mean more rental car expenses.',
    options: [
      { label: 'Yes, I need my car daily', value: 'yes-daily', points: 4 },
      { label: 'Yes, but I have alternate transportation for a day or two', value: 'yes-short', points: 3 },
      { label: 'I can manage without for a week if needed', value: 'can-manage', points: 1 },
      { label: 'I have another vehicle to use', value: 'another-car', points: 0 },
    ],
  },
  {
    id: 'vehicle-plans',
    question: 'What are your plans for this vehicle?',
    description: 'This affects how important original paint preservation is.',
    options: [
      { label: 'Keeping it long-term (5+ years)', value: 'keeping', points: 3 },
      { label: 'Planning to sell or trade in soon', value: 'selling', points: 4 },
      { label: 'Lease vehicle - returning to dealer', value: 'lease', points: 4 },
      { label: 'Work/fleet vehicle - appearance matters', value: 'fleet', points: 3 },
    ],
  },
]

const results = [
  {
    minScore: 18,
    maxScore: 24,
    title: 'PDR Is Your Best Choice',
    description: 'Based on your priorities and damage type, paintless dent repair is clearly the better option for you. You\'ll save money, time, and preserve your original factory paint.',
    recommendation: 'PDR will likely save you 50-70% compared to body shop repair, with same-day service in most cases. Your vehicle\'s Carfax will remain clean (no body work reported), and you\'ll preserve the factory paint that protects against rust and maintains resale value. According to Kelley Blue Book, vehicles with original paint command higher resale prices.',
    color: 'green' as const,
  },
  {
    minScore: 10,
    maxScore: 17,
    title: 'PDR Is Likely the Better Option',
    description: 'For your situation, PDR appears to be the more practical choice, though both options could work. The benefits of speed, cost savings, and paint preservation make PDR worth pursuing first.',
    recommendation: 'We recommend getting quotes from both a PDR technician and a body shop to compare. In most cases like yours, PDR offers better value. Remember: body shop repairs typically take 3-5 days and require rental car arrangements, while PDR is often completed same-day.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 9,
    title: 'Body Shop May Be Necessary',
    description: 'Based on your damage type or priorities, traditional body shop repair may be the better solution. Paint damage or structural concerns typically require conventional repair methods.',
    recommendation: 'If your paint is damaged, body filler or repainting may be necessary - which PDR cannot address. Get quotes from both options, but prepare for body shop pricing. Ask about paint warranty and make sure they use OEM-quality materials. The Federal Trade Commission recommends getting multiple estimates for body work.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Kelley Blue Book',
    url: 'https://www.kbb.com',
    description: 'Vehicle valuation and the impact of body work on resale value',
  },
  {
    name: 'Federal Trade Commission',
    url: 'https://consumer.ftc.gov/articles/auto-body-repair',
    description: 'Consumer guide to auto body repair rights and best practices',
  },
  {
    name: 'Insurance Information Institute',
    url: 'https://www.iii.org',
    description: 'Insurance claim guidelines for vehicle damage repair',
  },
]

export default function PDRvsBodyShopQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--accent-500)] to-[var(--accent-600)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">PDR vs Body Shop Calculator</h1>
          <p className="text-lg text-white/90">
            Compare your options and find the best repair method for your situation.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="PDR vs Body Shop"
            description="Repair Method Comparison"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Get PDR Quotes"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
