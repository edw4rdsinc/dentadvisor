import { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: 'Insurance Claim Navigator for Dent Repair',
  description: 'Should you file an insurance claim for your dent damage? Our quiz helps you decide if claiming is worth it based on deductibles, damage extent, and more.',
}

const questions = [
  {
    id: 'damage-cause',
    question: 'What caused the dent damage?',
    description: 'Different causes are covered under different policy types.',
    options: [
      { label: 'Hail storm or falling object', value: 'comprehensive', points: 4 },
      { label: 'Hit-and-run or vandalism', value: 'comp-hit', points: 4 },
      { label: 'Collision with another vehicle or object', value: 'collision', points: 3 },
      { label: 'Unknown / accumulated door dings', value: 'unknown', points: 1 },
    ],
  },
  {
    id: 'deductible',
    question: 'What is your relevant deductible amount?',
    description: 'Comprehensive for hail/vandalism, collision for accidents.',
    options: [
      { label: '$0 - $250 deductible', value: 'low', points: 4 },
      { label: '$250 - $500 deductible', value: 'medium', points: 3 },
      { label: '$500 - $1,000 deductible', value: 'high', points: 2 },
      { label: 'Over $1,000 or not sure', value: 'very-high', points: 1 },
    ],
  },
  {
    id: 'damage-estimate',
    question: 'What is the estimated repair cost?',
    description: 'Consider getting quotes before filing a claim.',
    options: [
      { label: 'Over $2,500 in damage', value: 'severe', points: 4 },
      { label: '$1,000 - $2,500 in damage', value: 'significant', points: 3 },
      { label: '$500 - $1,000 in damage', value: 'moderate', points: 2 },
      { label: 'Under $500 in damage', value: 'minor', points: 1 },
    ],
  },
  {
    id: 'claim-history',
    question: 'Have you filed any claims in the past 3-5 years?',
    description: 'Multiple claims can affect your premium and insurability.',
    options: [
      { label: 'No claims in 5+ years', value: 'clean', points: 4 },
      { label: 'One claim in the past 3-5 years', value: 'one', points: 3 },
      { label: 'Two claims in the past 3 years', value: 'two', points: 1 },
      { label: 'Three or more recent claims', value: 'multiple', points: 0 },
    ],
  },
  {
    id: 'at-fault',
    question: 'If collision-related, were you at fault?',
    description: 'At-fault claims have bigger premium impacts.',
    options: [
      { label: 'Not applicable - hail or vandalism', value: 'na-comp', points: 4 },
      { label: 'Not at fault - other driver responsible', value: 'not-fault', points: 4 },
      { label: 'Partial fault or unclear', value: 'partial', points: 2 },
      { label: 'At fault for the incident', value: 'at-fault', points: 1 },
    ],
  },
  {
    id: 'premium-concern',
    question: 'How concerned are you about premium increases?',
    description: 'Claims can raise premiums for 3-5 years.',
    options: [
      { label: 'Not concerned - damage far exceeds any increase', value: 'not-concerned', points: 4 },
      { label: 'Somewhat concerned - want to weigh options', value: 'somewhat', points: 3 },
      { label: 'Very concerned - premiums are already high', value: 'very', points: 1 },
      { label: 'Can\'t afford any premium increase', value: 'critical', points: 0 },
    ],
  },
  {
    id: 'documentation',
    question: 'Do you have documentation of the damage and cause?',
    description: 'Photos, police reports, and weather records help claims.',
    options: [
      { label: 'Yes - photos, police report or weather documentation', value: 'full', points: 4 },
      { label: 'Yes - have photos of the damage', value: 'photos', points: 3 },
      { label: 'Some documentation but not complete', value: 'partial', points: 2 },
      { label: 'No documentation', value: 'none', points: 1 },
    ],
  },
]

const results = [
  {
    minScore: 24,
    maxScore: 28,
    title: 'Filing a Claim Makes Sense',
    description: 'Based on your damage extent, deductible, and claim history, filing an insurance claim appears to be financially beneficial. The repair costs significantly exceed your deductible.',
    recommendation: 'Contact your insurance company to file a claim. The National Association of Insurance Commissioners (NAIC) recommends documenting everything with photos and keeping all repair estimates. You have the right to choose your own repair shop - consider a PDR specialist who works with insurance companies. Get a copy of the adjuster\'s damage assessment for your records.',
    color: 'green' as const,
  },
  {
    minScore: 15,
    maxScore: 23,
    title: 'Weigh the Costs Carefully',
    description: 'Your situation has factors both for and against filing a claim. The financial benefit may be marginal when considering potential premium increases.',
    recommendation: 'Before filing, ask your insurance agent about the specific premium impact of a claim given your history. The Insurance Information Institute notes that comprehensive claims (hail, theft) typically have less premium impact than collision claims. Calculate: (repair cost - deductible) vs (premium increase × 3-5 years). Get written repair estimates to make an informed decision.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 14,
    title: 'Consider Paying Out-of-Pocket',
    description: 'Based on your deductible amount, damage extent, or claim history, paying out-of-pocket may be the better financial choice. The claim benefit doesn\'t outweigh the potential downsides.',
    recommendation: 'When repair costs are close to or below your deductible, out-of-pocket payment avoids claim history impacts. According to the Consumer Federation of America, minor claims can raise premiums by $200-$400 annually for 3-5 years. PDR is often 50-70% less than body shop repair, making out-of-pocket more feasible. Get PDR quotes before deciding.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'National Association of Insurance Commissioners (NAIC)',
    url: 'https://content.naic.org',
    description: 'Consumer guidance on auto insurance claims and rights',
  },
  {
    name: 'Insurance Information Institute',
    url: 'https://www.iii.org',
    description: 'Insurance industry data and consumer education',
  },
  {
    name: 'Consumer Federation of America',
    url: 'https://consumerfed.org',
    description: 'Consumer advocacy and insurance claim impact research',
  },
]

export default function InsuranceClaimQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Insurance Claim Navigator</h1>
          <p className="text-lg text-sky-100">
            Decide if filing a claim is worth it for your dent damage.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Insurance Claim Decision"
            description="File or Pay Out-of-Pocket?"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Get Repair Estimates"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
