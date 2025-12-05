import { Metadata } from 'next'
import Quiz from '@/components/Quiz'
import QuizShareEmbed from '@/components/QuizShareEmbed'

export const metadata: Metadata = {
  title: 'Fleet PDR ROI Calculator | Business Value Analysis',
  description: 'Calculate the return on investment for PDR services in your commercial fleet. See how professional dent repair impacts vehicle value and brand image.',
  openGraph: {
    title: 'Fleet PDR ROI Calculator | Business Value Analysis',
    description: 'Calculate the ROI for PDR services in your commercial fleet.',
    type: 'website',
    siteName: 'DentAdvisor',
    url: 'https://dentadvisor.org/quizzes/fleet-roi-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleet PDR ROI Calculator',
    description: 'Calculate the ROI for PDR services in your commercial fleet.',
  },
}

const questions = [
  {
    id: 'fleet-size',
    question: 'How many vehicles are in your fleet?',
    description: 'Larger fleets often qualify for volume discounts and scheduled service.',
    options: [
      { label: '50+ vehicles', value: 'large', points: 4 },
      { label: '20-49 vehicles', value: 'medium', points: 3 },
      { label: '5-19 vehicles', value: 'small', points: 2 },
      { label: '1-4 vehicles', value: 'micro', points: 1 },
    ],
  },
  {
    id: 'vehicle-type',
    question: 'What type of vehicles make up your fleet?',
    description: 'Different vehicle types have different PDR considerations.',
    options: [
      { label: 'Passenger cars and sedans', value: 'cars', points: 4 },
      { label: 'SUVs and crossovers', value: 'suvs', points: 4 },
      { label: 'Light trucks and vans', value: 'trucks', points: 3 },
      { label: 'Mix of vehicle types', value: 'mixed', points: 3 },
    ],
  },
  {
    id: 'branding',
    question: 'Do your vehicles have company branding or wraps?',
    description: 'Branded vehicles are rolling advertisements - appearance matters more.',
    options: [
      { label: 'Yes - full vehicle wraps with company branding', value: 'full-wrap', points: 4 },
      { label: 'Yes - partial branding or decals', value: 'partial', points: 3 },
      { label: 'No branding but company-owned', value: 'unmarked', points: 2 },
      { label: 'Employee personal vehicles with allowance', value: 'personal', points: 1 },
    ],
  },
  {
    id: 'turnover',
    question: 'How often do you cycle/replace fleet vehicles?',
    description: 'Shorter cycles mean more resale events where condition matters.',
    options: [
      { label: 'Every 2-3 years', value: 'frequent', points: 4 },
      { label: 'Every 3-5 years', value: 'moderate', points: 3 },
      { label: 'Every 5-7 years', value: 'longer', points: 2 },
      { label: 'Run until end of life', value: 'full-life', points: 1 },
    ],
  },
  {
    id: 'current-damage',
    question: 'How much dent damage does your average fleet vehicle have?',
    description: 'Be honest about current fleet condition.',
    options: [
      { label: 'Minimal - 1-2 small dents per vehicle', value: 'minimal', points: 4 },
      { label: 'Some damage - 3-5 dents per vehicle', value: 'some', points: 3 },
      { label: 'Noticeable - 6-10 dents per vehicle', value: 'noticeable', points: 2 },
      { label: 'Significant - 10+ dents per vehicle', value: 'significant', points: 1 },
    ],
  },
  {
    id: 'customer-facing',
    question: 'How often do fleet vehicles interact with customers?',
    description: 'Customer-facing vehicles impact brand perception.',
    options: [
      { label: 'Daily - vehicles are core to customer experience', value: 'daily', points: 4 },
      { label: 'Frequently - regular customer site visits', value: 'frequent', points: 3 },
      { label: 'Sometimes - occasional customer interaction', value: 'sometimes', points: 2 },
      { label: 'Rarely - internal/warehouse use only', value: 'rarely', points: 1 },
    ],
  },
  {
    id: 'maintenance-budget',
    question: 'Does your fleet have a dedicated appearance maintenance budget?',
    description: 'Proactive maintenance is more cost-effective than reactive repair.',
    options: [
      { label: 'Yes - dedicated budget for appearance maintenance', value: 'dedicated', points: 4 },
      { label: 'Combined with general maintenance budget', value: 'combined', points: 3 },
      { label: 'Ad-hoc - repairs as needed', value: 'ad-hoc', points: 2 },
      { label: 'No budget - appearance not prioritized', value: 'none', points: 1 },
    ],
  },
]

const results = [
  {
    minScore: 24,
    maxScore: 28,
    title: 'Excellent PDR ROI Potential',
    description: 'Your fleet profile shows strong potential for positive ROI from a PDR program. Branded, customer-facing vehicles with regular turnover benefit most from maintained appearance.',
    recommendation: 'Implement a scheduled PDR maintenance program. The Federal Motor Carrier Safety Administration emphasizes professional vehicle appearance as part of brand standards. Volume fleet PDR contracts can reduce per-vehicle costs by 30-40%. Calculate ROI: each $200 PDR repair can preserve $500-$1,000 in resale value. Consider quarterly "dent sweeps" to maintain fleet appearance proactively.',
    color: 'green' as const,
  },
  {
    minScore: 15,
    maxScore: 23,
    title: 'Good ROI for Targeted PDR',
    description: 'Your fleet would benefit from PDR services, particularly for customer-facing vehicles or those approaching resale. A targeted approach maximizes value.',
    recommendation: 'Prioritize PDR for: (1) vehicles approaching sale/lease return, (2) customer-facing branded vehicles, (3) vehicles with concentrated damage. According to the National Highway Traffic Safety Administration\'s vehicle valuation guidelines, cosmetic condition significantly impacts fleet resale values. Start with a pilot program on 20% of your fleet to measure actual ROI before full implementation.',
    color: 'yellow' as const,
  },
  {
    minScore: 0,
    maxScore: 14,
    title: 'Selective PDR May Be Beneficial',
    description: 'Your fleet profile suggests limited but specific opportunities for PDR value. Focus on vehicles where appearance directly impacts business outcomes.',
    recommendation: 'For smaller or internal-use fleets, prioritize PDR only for: lease returns to avoid excess wear charges, vehicles being sold to maximize resale, and any customer-visible vehicles. The General Services Administration fleet management guidelines note that basic cosmetic maintenance extends useful vehicle life. Consider PDR only when repair cost is less than 40% of the value it protects.',
    color: 'red' as const,
  },
]

const sources = [
  {
    name: 'Federal Motor Carrier Safety Administration (FMCSA)',
    url: 'https://www.fmcsa.dot.gov',
    description: 'Commercial fleet standards and vehicle maintenance requirements',
  },
  {
    name: 'National Highway Traffic Safety Administration (NHTSA)',
    url: 'https://www.nhtsa.gov',
    description: 'Vehicle safety and valuation guidelines',
  },
  {
    name: 'General Services Administration (GSA)',
    url: 'https://www.gsa.gov/buy-through-us/products-and-services/transportation-and-logistics-services/fleet-management',
    description: 'Federal fleet management best practices and guidelines',
  },
]

export default function FleetROIQuiz() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Fleet PDR ROI Calculator</h1>
          <p className="text-lg text-indigo-100 mb-6">
            Calculate the business case for PDR in your commercial fleet.
          </p>
          <QuizShareEmbed
            quizSlug="fleet-roi-calculator"
            quizTitle="Fleet PDR ROI Calculator"
            quizDescription="Calculate the ROI for PDR services in your commercial fleet."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Quiz
            title="Fleet ROI Assessment"
            description="PDR Program Value Analysis"
            questions={questions}
            results={results}
            sources={sources}
            ctaText="Request Fleet Quote"
            ctaLink="/find-technician"
          />
        </div>
      </section>
    </>
  )
}
