import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'Can My Dent Be Fixed with PDR? | Free Assessment',
  description: 'Take our free assessment to find out if paintless dent repair is right for your vehicle damage. Get personalized recommendations in 2-3 minutes.',
  openGraph: {
    title: 'Can My Dent Be Fixed with PDR? | Free Assessment',
    description: 'Take our free assessment to find out if paintless dent repair is right for your vehicle damage.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/can-my-dent-be-fixed',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can My Dent Be Fixed with PDR?',
    description: 'Take our free assessment to find out if PDR is right for your vehicle damage.',
  },
}

const questions = [
  {
    id: 'paint-condition',
    question: 'What is the condition of the paint where the dent is located?',
    description: 'Look closely at the damaged area to assess paint integrity.',
    options: [
      { label: 'Paint is intact with no cracks, chips, or scratches', value: 'intact', points: 3 },
      { label: 'Minor scratches but no paint chips or cracks', value: 'minor-scratches', points: 2 },
      { label: 'Paint is chipped, cracked, or peeling', value: 'damaged', points: 0 },
      { label: 'Not sure / Hard to tell', value: 'unsure', points: 1 },
    ],
  },
  {
    id: 'dent-size',
    question: 'How large is the dent?',
    description: 'Estimate the diameter of the damaged area.',
    options: [
      { label: 'Small (quarter-sized or smaller)', value: 'small', points: 3 },
      { label: 'Medium (golf ball to baseball sized)', value: 'medium', points: 2 },
      { label: 'Large (softball sized or bigger)', value: 'large', points: 1 },
      { label: 'Multiple dents of varying sizes', value: 'multiple', points: 2 },
    ],
  },
  {
    id: 'dent-depth',
    question: 'How deep is the dent?',
    description: 'Run your finger across the dent to feel the depth.',
    options: [
      { label: 'Shallow - barely noticeable by touch', value: 'shallow', points: 3 },
      { label: 'Moderate - clearly feels indented', value: 'moderate', points: 2 },
      { label: 'Deep - significant depression in the metal', value: 'deep', points: 1 },
      { label: 'Has a sharp crease or fold in the metal', value: 'creased', points: 0 },
    ],
  },
  {
    id: 'location',
    question: 'Where is the dent located on your vehicle?',
    description: 'The location affects accessibility for PDR technicians.',
    options: [
      { label: 'Hood, roof, or trunk lid', value: 'accessible', points: 3 },
      { label: 'Door panel or fender', value: 'door-fender', points: 3 },
      { label: 'Quarter panel or near wheel well', value: 'quarter', points: 2 },
      { label: 'Near edge, body line, or trim', value: 'edge', points: 1 },
      { label: 'Pillar or structural area', value: 'structural', points: 0 },
    ],
  },
  {
    id: 'cause',
    question: 'What caused the dent?',
    description: 'Different causes create different types of damage.',
    options: [
      { label: 'Hail storm', value: 'hail', points: 3 },
      { label: 'Door ding in parking lot', value: 'door-ding', points: 3 },
      { label: 'Shopping cart or minor impact', value: 'cart', points: 2 },
      { label: 'Collision with another vehicle', value: 'collision', points: 1 },
      { label: 'Unknown / Just noticed it', value: 'unknown', points: 2 },
    ],
  },
  {
    id: 'vehicle-age',
    question: 'How old is your vehicle?',
    description: 'Paint and metal characteristics change with age.',
    options: [
      { label: 'Less than 5 years old', value: 'new', points: 3 },
      { label: '5-10 years old', value: 'mid', points: 2 },
      { label: '10-20 years old', value: 'older', points: 1 },
      { label: 'Over 20 years old (classic/vintage)', value: 'classic', points: 1 },
    ],
  },
  {
    id: 'previous-repair',
    question: 'Has this panel been repaired or repainted before?',
    description: 'Previous body work can affect PDR viability.',
    options: [
      { label: 'No, it has original factory paint', value: 'original', points: 3 },
      { label: 'Yes, it was professionally repainted', value: 'repainted', points: 1 },
      { label: 'Yes, it has body filler (Bondo)', value: 'filler', points: 0 },
      { label: 'Not sure', value: 'unsure', points: 2 },
    ],
  },
]

const results = [
  {
    minScore: 17,
    maxScore: 21,
    title: 'Excellent PDR Candidate',
    description: 'Based on your answers, your dent is an excellent candidate for paintless dent repair. PDR should be able to restore your vehicle to like-new condition while preserving the original factory paint.',
    recommendation: 'We recommend getting quotes from certified PDR technicians. Most repairs like yours can be completed in a few hours at 50-70% less than traditional body shop costs. Your original paint and factory warranty will be preserved.',
    color: 'green' as const,
  },
  {
    minScore: 11,
    maxScore: 16,
    title: 'Good PDR Candidate',
    description: 'Your dent appears to be a good candidate for PDR, though a technician will need to assess it in person to confirm. Some factors may make the repair more challenging, but it\'s likely still fixable.',
    recommendation: 'Schedule a free inspection with a certified PDR technician. They can evaluate the specific characteristics of your dent and provide an accurate quote. Most technicians offer no-obligation assessments.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 10,
    title: 'PDR May Not Be Suitable',
    description: 'Based on your answers, traditional PDR may not be the best solution for your damage. Factors like paint condition, dent severity, or location may require conventional body shop repair.',
    recommendation: 'We still recommend consulting with a PDR specialist - they may have advanced techniques for challenging repairs. However, you should also get quotes from body shops for comparison. Some damage is better addressed with traditional methods.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'I-CAR',
    url: 'https://www.i-car.com',
    description: 'Industry standard for auto body repair training and certification',
  },
  {
    name: 'National Highway Traffic Safety Administration',
    url: 'https://www.nhtsa.gov',
    description: 'Vehicle safety standards and repair guidelines',
  },
  {
    name: 'Insurance Institute for Highway Safety',
    url: 'https://www.iihs.org',
    description: 'Research on vehicle damage and repair outcomes',
  },
]

export default function CanMyDentBeFixedQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--dent-700)] to-[var(--dent-900)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Can My Dent Be Fixed with PDR?</h1>
          <p className="text-lg text-[var(--dent-100)] mb-6">
            Answer 7 quick questions to find out if paintless dent repair is right for your vehicle.
          </p>
          <QuizShareEmbed
            quizSlug="can-my-dent-be-fixed"
            quizTitle="Can My Dent Be Fixed with PDR?"
            quizDescription="Take our free assessment to find out if PDR is right for your vehicle damage."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Can My Dent Be Fixed?"
            description="PDR Assessment"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Get Free PDR Quotes"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
