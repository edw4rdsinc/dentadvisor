import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'DIY or Pro? Dent Repair Decision Guide',
  description: 'Should you attempt DIY dent repair or hire a professional? Take our quiz to get personalized advice based on your damage and skill level.',
  openGraph: {
    title: 'DIY or Pro? Dent Repair Decision Guide',
    description: 'Should you attempt DIY dent repair or hire a professional? Get personalized advice.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/diy-or-pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIY or Pro? Dent Repair Decision Guide',
    description: 'Should you attempt DIY dent repair or hire a professional?',
  },
}

const questions = [
  {
    id: 'damage-type',
    question: 'What type of dent are you dealing with?',
    description: 'The type of damage significantly affects DIY feasibility.',
    options: [
      { label: 'Small door ding (coin-sized, shallow)', value: 'small-ding', points: 4 },
      { label: 'Medium dent without creases (golf ball sized)', value: 'medium-smooth', points: 3 },
      { label: 'Dent with sharp creases or edges', value: 'creased', points: 1 },
      { label: 'Large dent or multiple dents', value: 'large-multiple', points: 0 },
    ],
  },
  {
    id: 'paint-condition',
    question: 'What is the paint condition in the dented area?',
    description: 'Paint damage changes the repair approach entirely.',
    options: [
      { label: 'Paint is perfect - no scratches or chips', value: 'perfect', points: 4 },
      { label: 'Minor surface scratches (can buff out)', value: 'minor', points: 3 },
      { label: 'Paint chips or cracks visible', value: 'chips', points: 1 },
      { label: 'Paint is cracked, flaking, or bare metal showing', value: 'damaged', points: 0 },
    ],
  },
  {
    id: 'location',
    question: 'Where is the dent located on the vehicle?',
    description: 'Some locations are much harder to repair than others.',
    options: [
      { label: 'Flat panel area (center of door, hood, etc.)', value: 'flat', points: 4 },
      { label: 'Near but not on a body line', value: 'near-line', points: 3 },
      { label: 'On or crossing a body line or crease', value: 'on-line', points: 1 },
      { label: 'Near edge, corner, or double-panel area', value: 'difficult', points: 0 },
    ],
  },
  {
    id: 'experience',
    question: 'What is your experience with auto body or DIY repairs?',
    description: 'Be honest - experience matters for successful results.',
    options: [
      { label: 'Experienced with auto body work or detailed DIY', value: 'experienced', points: 4 },
      { label: 'Handy person - comfortable with car maintenance', value: 'handy', points: 3 },
      { label: 'Some DIY experience but not with cars', value: 'some', points: 2 },
      { label: 'Little to no DIY experience', value: 'none', points: 0 },
    ],
  },
  {
    id: 'tools',
    question: 'What dent repair tools do you have access to?',
    description: 'Proper tools make a significant difference in results.',
    options: [
      { label: 'Professional PDR kit or suction tools', value: 'professional', points: 4 },
      { label: 'Basic dent puller and heat gun', value: 'basic', points: 3 },
      { label: 'Household items only (plunger, hair dryer)', value: 'household', points: 1 },
      { label: 'No tools - would need to buy everything', value: 'none', points: 1 },
    ],
  },
  {
    id: 'vehicle-value',
    question: 'What is your vehicle worth and how important is its appearance?',
    description: 'Higher-value vehicles have more at stake with DIY attempts.',
    options: [
      { label: 'Older vehicle / not concerned about perfect results', value: 'low-stakes', points: 4 },
      { label: 'Mid-range vehicle / want good results', value: 'moderate', points: 2 },
      { label: 'Newer or luxury vehicle / appearance matters', value: 'high-value', points: 1 },
      { label: 'Lease vehicle or planning to sell soon', value: 'critical', points: 0 },
    ],
  },
  {
    id: 'risk-tolerance',
    question: 'How would you feel if the DIY attempt made it worse?',
    description: 'Failed DIY can increase professional repair costs.',
    options: [
      { label: 'I\'d be fine - it\'s a learning experience', value: 'accepting', points: 4 },
      { label: 'Mildly frustrated but would accept it', value: 'mild', points: 3 },
      { label: 'Quite upset - don\'t want to risk it', value: 'concerned', points: 1 },
      { label: 'Can\'t afford to make it worse', value: 'cannot-risk', points: 0 },
    ],
  },
]

const results = [
  {
    minScore: 22,
    maxScore: 28,
    title: 'Good Candidate for DIY Repair',
    description: 'Based on your damage type, experience level, and risk tolerance, a DIY repair attempt is reasonable for your situation. The dent characteristics suggest household or basic tools may achieve acceptable results.',
    recommendation: 'Start with the least invasive method: clean the area, use a heat gun or hair dryer to warm the metal, then try a suction-based puller. The Department of Energy notes that heating metal makes it more pliable. Watch tutorial videos first and work slowly. If you don\'t see improvement after 2-3 attempts, stop and consult a professional to avoid further damage.',
    color: 'green' as const,
  },
  {
    minScore: 12,
    maxScore: 21,
    title: 'Consider Professional Help',
    description: 'Your situation has some factors that favor DIY and some that suggest professional repair. The risk of making the damage worse or not achieving satisfactory results is moderate.',
    recommendation: 'Get a professional quote before attempting DIY - you may be surprised how affordable PDR can be. The Consumer Financial Protection Bureau recommends getting multiple estimates. If cost is the main concern, some technicians offer "touch-up" pricing for imperfect but improved results. A failed DIY attempt can double professional repair costs.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 11,
    title: 'Professional Repair Recommended',
    description: 'Based on your damage characteristics, vehicle value, or other factors, professional repair is strongly recommended. DIY attempts in your situation have a high risk of causing additional damage or unsatisfactory results.',
    recommendation: 'This type of repair requires professional tools and expertise. According to the Federal Trade Commission\'s auto repair guidance, consumers should seek qualified technicians for complex repairs. Look for I-CAR certified PDR technicians who can assess whether paintless repair or body shop work is needed. The investment in professional repair protects your vehicle\'s value.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'U.S. Department of Energy',
    url: 'https://www.energy.gov',
    description: 'Material science and metal properties information',
  },
  {
    name: 'Consumer Financial Protection Bureau',
    url: 'https://www.consumerfinance.gov',
    description: 'Consumer guidance on service estimates and contracts',
  },
  {
    name: 'Federal Trade Commission',
    url: 'https://consumer.ftc.gov/articles/auto-repair',
    description: 'Auto repair consumer rights and choosing qualified technicians',
  },
]

export default function DIYOrProQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">DIY or Pro? Dent Repair Decision Guide</h1>
          <p className="text-lg text-amber-100 mb-6">
            Find out if you should attempt DIY repair or call a professional.
          </p>
          <QuizShareEmbed
            quizSlug="diy-or-pro"
            quizTitle="DIY or Pro? Dent Repair Decision Guide"
            quizDescription="Should you attempt DIY dent repair or hire a professional?"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="DIY vs Professional"
            description="Repair Approach Assessment"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Find Professional PDR"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
