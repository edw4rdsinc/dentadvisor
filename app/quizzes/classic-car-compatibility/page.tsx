import { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: 'Classic Car PDR Compatibility Check',
  description: 'Is your classic, vintage, or collector car a good candidate for paintless dent repair? Take our quiz to find out if PDR is safe for your classic.',
}

const questions = [
  {
    id: 'vehicle-age',
    question: 'What era is your classic car from?',
    description: 'Metal thickness and paint technology varied significantly by era.',
    options: [
      { label: '1980s-1990s (Modern classic)', value: 'modern', points: 4 },
      { label: '1970s (Malaise era)', value: '70s', points: 3 },
      { label: '1960s (Muscle car era)', value: '60s', points: 3 },
      { label: '1950s or earlier (Vintage/antique)', value: 'vintage', points: 1 },
    ],
  },
  {
    id: 'paint-type',
    question: 'What type of paint is on your classic car?',
    description: 'Original single-stage paints behave differently than modern clear coat.',
    options: [
      { label: 'Modern repaint with clear coat', value: 'modern', points: 4 },
      { label: 'Quality single-stage restoration paint', value: 'quality-single', points: 3 },
      { label: 'Original paint (survivor car)', value: 'original', points: 2 },
      { label: 'Original lacquer or aged single-stage', value: 'lacquer', points: 1 },
    ],
  },
  {
    id: 'paint-condition',
    question: 'What is the current condition of the paint?',
    description: 'Brittle or failing paint increases cracking risk during PDR.',
    options: [
      { label: 'Excellent - supple, no checking or crazing', value: 'excellent', points: 4 },
      { label: 'Good - minor imperfections but solid', value: 'good', points: 3 },
      { label: 'Fair - some checking, oxidation, or thin spots', value: 'fair', points: 1 },
      { label: 'Poor - cracking, flaking, or bare spots', value: 'poor', points: 0 },
    ],
  },
  {
    id: 'body-construction',
    question: 'What type of body construction does your car have?',
    description: 'Steel thickness and body-on-frame vs unibody affects PDR approach.',
    options: [
      { label: 'Unibody with standard sheet metal', value: 'unibody', points: 4 },
      { label: 'Body-on-frame with moderate steel', value: 'body-frame', points: 3 },
      { label: 'Heavy gauge steel (pre-1960s)', value: 'heavy', points: 2 },
      { label: 'Aluminum, fiberglass, or exotic materials', value: 'exotic', points: 1 },
    ],
  },
  {
    id: 'dent-characteristics',
    question: 'Describe the dent damage on your classic car.',
    description: 'Some dent types are better PDR candidates than others.',
    options: [
      { label: 'Minor door dings or shopping cart dents', value: 'minor', points: 4 },
      { label: 'Medium dents without sharp creases', value: 'medium', points: 3 },
      { label: 'Dents with creases or on character lines', value: 'creased', points: 1 },
      { label: 'Large dents, hail damage, or stretched metal', value: 'severe', points: 0 },
    ],
  },
  {
    id: 'restoration-level',
    question: 'What level of restoration/preservation is your car?',
    description: 'Concours and survivor cars have stricter requirements.',
    options: [
      { label: 'Driver quality - enjoy and maintain', value: 'driver', points: 4 },
      { label: 'Show quality - but not concours judged', value: 'show', points: 3 },
      { label: 'Concours or judged show car', value: 'concours', points: 2 },
      { label: 'Survivor - preserving original condition', value: 'survivor', points: 1 },
    ],
  },
  {
    id: 'previous-work',
    question: 'Has the damaged panel had previous body work?',
    description: 'Body filler under paint can crack during PDR.',
    options: [
      { label: 'No - original metal with no repairs', value: 'original', points: 4 },
      { label: 'Minor repairs - no filler in dented area', value: 'minor', points: 3 },
      { label: 'Unknown - bought the car this way', value: 'unknown', points: 2 },
      { label: 'Yes - panel has body filler or lead work', value: 'filled', points: 0 },
    ],
  },
]

const results = [
  {
    minScore: 22,
    maxScore: 28,
    title: 'Good Candidate for Classic Car PDR',
    description: 'Your classic car appears to be a good candidate for paintless dent repair. The paint condition, metal type, and dent characteristics suggest PDR can be performed safely.',
    recommendation: 'Find a PDR technician with specific classic car experience - this is critical. The Hagerty Drivers Foundation emphasizes using specialists who understand vintage vehicle needs. Ask for before/after photos of their classic car work. Expect a higher price point than modern vehicles due to the care required. A skilled technician will know when to stop if the paint shows any stress.',
    color: 'green' as const,
  },
  {
    minScore: 13,
    maxScore: 21,
    title: 'Proceed with Caution',
    description: 'Your classic car may be a PDR candidate, but there are factors that require careful evaluation. A hands-on assessment by a classic car specialist is essential.',
    recommendation: 'Before any work begins, have a classic car PDR specialist perform an in-person evaluation. The Antique Automobile Club of America recommends always getting written assessments for collector vehicles. Ask about test pushing in a hidden area first to verify paint flexibility. Get a clear understanding of what happens if paint cracking occurs. Document the car\'s current condition with detailed photos before any work.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 12,
    title: 'PDR May Not Be Advisable',
    description: 'Based on your classic car\'s characteristics, PDR carries significant risk. The paint type, age, previous body work, or damage type could lead to paint failure.',
    recommendation: 'Consider traditional metal finishing followed by repainting the panel. According to the Classic Car Club of America, preserving originality sometimes means accepting minor imperfections rather than risking further damage. For survivor cars, document the dent as part of the car\'s history. If you do attempt PDR, choose a specialist willing to stop immediately if paint stress appears and have a restoration plan ready.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Hagerty Drivers Foundation',
    url: 'https://www.hagerty.com/drivers-foundation',
    description: 'Classic car preservation and restoration best practices',
  },
  {
    name: 'Antique Automobile Club of America (AACA)',
    url: 'https://www.aaca.org',
    description: 'Standards for antique vehicle judging and preservation',
  },
  {
    name: 'Classic Car Club of America',
    url: 'https://www.classiccarclub.org',
    description: 'Guidance on classic car maintenance and restoration',
  },
]

export default function ClassicCarQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-rose-600 to-rose-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Classic Car PDR Compatibility Check</h1>
          <p className="text-lg text-rose-100">
            Find out if paintless dent repair is safe for your collector vehicle.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Classic Car Assessment"
            description="PDR Compatibility Evaluation"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Find Classic Car Specialists"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
