'use client'

import { useParams } from 'next/navigation'
import Quiz from '@/components/Quiz'

// Quiz data for each quiz - same as the individual pages
const quizData: Record<string, {
  title: string
  description: string
  headerColor: string
  questions: any[]
  results: any[]
  sources: any[]
  ctaText: string
  ctaLink: string
}> = {
  'can-my-dent-be-fixed': {
    title: 'Can My Dent Be Fixed with PDR?',
    description: 'PDR Assessment',
    headerColor: 'from-[#15803d] to-[#166534]',
    questions: [
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
    ],
    results: [
      {
        minScore: 12,
        maxScore: 15,
        title: 'Excellent PDR Candidate',
        description: 'Based on your answers, your dent is an excellent candidate for paintless dent repair.',
        recommendation: 'We recommend getting quotes from certified PDR technicians. Most repairs like yours can be completed in a few hours at 50-70% less than traditional body shop costs.',
        color: 'green' as const,
      },
      {
        minScore: 7,
        maxScore: 11,
        title: 'Good PDR Candidate',
        description: 'Your dent appears to be a good candidate for PDR, though a technician will need to assess it in person.',
        recommendation: 'Schedule a free inspection with a certified PDR technician for an accurate quote.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 6,
        title: 'PDR May Not Be Suitable',
        description: 'Based on your answers, traditional PDR may not be the best solution for your damage.',
        recommendation: 'We still recommend consulting with a PDR specialist - they may have advanced techniques. Also get quotes from body shops for comparison.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'I-CAR', url: 'https://www.i-car.com', description: 'Industry standard for auto body repair training' },
      { name: 'NHTSA', url: 'https://www.nhtsa.gov', description: 'Vehicle safety standards' },
      { name: 'IIHS', url: 'https://www.iihs.org', description: 'Vehicle damage research' },
    ],
    ctaText: 'Get Free PDR Quotes',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'pdr-vs-body-shop': {
    title: 'PDR vs Body Shop Calculator',
    description: 'Repair Method Comparison',
    headerColor: 'from-[#ea580c] to-[#c2410c]',
    questions: [
      {
        id: 'damage-type',
        question: 'What type of damage does your vehicle have?',
        options: [
          { label: 'Dents without paint damage', value: 'dents-only', points: 4 },
          { label: 'Dents with minor scratches', value: 'minor-scratch', points: 3 },
          { label: 'Dents with paint chips or cracks', value: 'paint-damage', points: 1 },
          { label: 'Dents with deep scratches to bare metal', value: 'deep-scratch', points: 0 },
        ],
      },
      {
        id: 'timeline',
        question: 'How quickly do you need the repair completed?',
        options: [
          { label: 'Same day or within 24 hours', value: 'urgent', points: 4 },
          { label: 'Within a few days', value: 'soon', points: 3 },
          { label: 'Within a week or two', value: 'flexible', points: 2 },
          { label: 'No rush', value: 'no-rush', points: 1 },
        ],
      },
      {
        id: 'paint-priority',
        question: 'How important is preserving the original factory paint?',
        options: [
          { label: 'Very important', value: 'very-important', points: 4 },
          { label: 'Somewhat important', value: 'somewhat', points: 3 },
          { label: 'Not a priority', value: 'not-priority', points: 1 },
          { label: 'Car is already repainted', value: 'already-repainted', points: 0 },
        ],
      },
      {
        id: 'budget',
        question: 'What is your budget for this repair?',
        options: [
          { label: 'Looking for the most affordable option', value: 'budget', points: 4 },
          { label: 'Moderate budget - want good value', value: 'moderate', points: 3 },
          { label: 'Flexible budget - quality is priority', value: 'flexible', points: 2 },
          { label: 'Insurance is covering it', value: 'insurance', points: 2 },
        ],
      },
      {
        id: 'vehicle-plans',
        question: 'What are your plans for this vehicle?',
        options: [
          { label: 'Keeping it long-term (5+ years)', value: 'keeping', points: 3 },
          { label: 'Planning to sell or trade in soon', value: 'selling', points: 4 },
          { label: 'Lease vehicle - returning to dealer', value: 'lease', points: 4 },
          { label: 'Work/fleet vehicle', value: 'fleet', points: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 15,
        maxScore: 20,
        title: 'PDR Is Your Best Choice',
        description: 'Based on your priorities, paintless dent repair is clearly the better option.',
        recommendation: 'PDR will likely save you 50-70% compared to body shop repair, with same-day service in most cases.',
        color: 'green' as const,
      },
      {
        minScore: 8,
        maxScore: 14,
        title: 'PDR Is Likely the Better Option',
        description: 'For your situation, PDR appears to be the more practical choice.',
        recommendation: 'We recommend getting quotes from both a PDR technician and a body shop to compare.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 7,
        title: 'Body Shop May Be Necessary',
        description: 'Based on your damage type, traditional body shop repair may be the better solution.',
        recommendation: 'If your paint is damaged, body filler or repainting may be necessary.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'Kelley Blue Book', url: 'https://www.kbb.com', description: 'Vehicle valuation' },
      { name: 'FTC', url: 'https://consumer.ftc.gov', description: 'Consumer guide to auto body repair' },
      { name: 'III', url: 'https://www.iii.org', description: 'Insurance claim guidelines' },
    ],
    ctaText: 'Get PDR Quotes',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'hail-damage-assessment': {
    title: 'Hail Damage Severity Assessment',
    description: 'Severity Evaluation',
    headerColor: 'from-blue-600 to-blue-800',
    questions: [
      {
        id: 'dent-count',
        question: 'Approximately how many dents can you count?',
        options: [
          { label: '1-10 dents', value: 'minimal', points: 1 },
          { label: '11-50 dents', value: 'moderate', points: 2 },
          { label: '51-150 dents', value: 'significant', points: 3 },
          { label: 'Over 150 dents', value: 'severe', points: 4 },
        ],
      },
      {
        id: 'panels-affected',
        question: 'How many panels are affected?',
        options: [
          { label: '1-2 panels', value: 'few', points: 1 },
          { label: '3-4 panels', value: 'several', points: 2 },
          { label: '5-7 panels', value: 'many', points: 3 },
          { label: 'Nearly every panel', value: 'all', points: 4 },
        ],
      },
      {
        id: 'dent-size',
        question: 'What is the size of the largest dents?',
        options: [
          { label: 'Pea-sized (1/4 inch or less)', value: 'small', points: 1 },
          { label: 'Marble to dime-sized', value: 'medium', points: 2 },
          { label: 'Quarter to golf ball-sized', value: 'large', points: 3 },
          { label: 'Larger than golf ball', value: 'xlarge', points: 4 },
        ],
      },
      {
        id: 'paint-damage',
        question: 'Is there any paint damage from the hail?',
        options: [
          { label: 'No - paint is intact', value: 'none', points: 4 },
          { label: 'Minor - a few small chips', value: 'minor', points: 3 },
          { label: 'Moderate - multiple chips', value: 'moderate', points: 1 },
          { label: 'Severe - large areas damaged', value: 'severe', points: 0 },
        ],
      },
      {
        id: 'insurance-status',
        question: 'Do you have comprehensive insurance?',
        options: [
          { label: 'Yes, with low deductible ($100-$500)', value: 'yes-low', points: 4 },
          { label: 'Yes, with higher deductible ($500-$1000)', value: 'yes-high', points: 3 },
          { label: 'Yes, but not sure about deductible', value: 'yes-unsure', points: 2 },
          { label: 'No comprehensive coverage', value: 'no', points: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 15,
        maxScore: 20,
        title: 'Minor Hail Damage',
        description: 'Your vehicle has minor hail damage that is an excellent candidate for PDR repair.',
        recommendation: 'Most minor hail repairs cost $500-$1,500 and can be completed in one day.',
        color: 'green' as const,
      },
      {
        minScore: 8,
        maxScore: 14,
        title: 'Moderate Hail Damage',
        description: 'Your vehicle has moderate hail damage that should still be repairable with PDR.',
        recommendation: 'Definitely file an insurance claim - moderate hail repairs typically run $2,000-$5,000.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 7,
        title: 'Severe Hail Damage',
        description: 'Your vehicle has severe hail damage that may approach total loss thresholds.',
        recommendation: 'File your insurance claim immediately and get multiple professional assessments.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'NOAA', url: 'https://www.noaa.gov', description: 'Hail storm data' },
      { name: 'FEMA', url: 'https://www.fema.gov', description: 'Storm damage guidelines' },
      { name: 'III', url: 'https://www.iii.org', description: 'Hail claim guidance' },
    ],
    ctaText: 'Find Hail Repair Specialists',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'technician-qualified': {
    title: 'Is My PDR Technician Qualified?',
    description: 'Professional Standards Evaluation',
    headerColor: 'from-gray-600 to-gray-800',
    questions: [
      {
        id: 'certifications',
        question: 'Does the technician hold any industry certifications?',
        options: [
          { label: 'Yes - I-CAR certified and/or Vale trained', value: 'certified', points: 4 },
          { label: 'Yes - NAPDRT member or manufacturer certified', value: 'member', points: 3 },
          { label: 'Claims to be certified but no proof', value: 'claims', points: 1 },
          { label: 'No certifications', value: 'none', points: 0 },
        ],
      },
      {
        id: 'insurance',
        question: 'Does the business carry liability insurance?',
        options: [
          { label: 'Yes - provided proof', value: 'verified', points: 4 },
          { label: 'Yes - they said they\'re insured', value: 'claimed', points: 2 },
          { label: 'Not sure / Didn\'t ask', value: 'unsure', points: 1 },
          { label: 'No or refused to answer', value: 'no', points: 0 },
        ],
      },
      {
        id: 'warranty',
        question: 'What warranty is offered on the repair?',
        options: [
          { label: 'Lifetime warranty in writing', value: 'lifetime', points: 4 },
          { label: '2-5 year written warranty', value: 'long', points: 3 },
          { label: '90 days to 1 year warranty', value: 'short', points: 2 },
          { label: 'Verbal warranty only or none', value: 'none', points: 0 },
        ],
      },
      {
        id: 'reviews',
        question: 'What do online reviews show?',
        options: [
          { label: '4.5+ stars with 50+ reviews', value: 'excellent', points: 4 },
          { label: '4.0-4.4 stars with good review count', value: 'good', points: 3 },
          { label: 'Mixed reviews or few reviews', value: 'mixed', points: 1 },
          { label: 'Poor reviews or no online presence', value: 'poor', points: 0 },
        ],
      },
      {
        id: 'experience',
        question: 'How many years of PDR experience?',
        options: [
          { label: '10+ years', value: 'expert', points: 4 },
          { label: '5-10 years', value: 'experienced', points: 3 },
          { label: '2-5 years', value: 'developing', points: 2 },
          { label: 'Less than 2 years', value: 'new', points: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 15,
        maxScore: 20,
        title: 'Highly Qualified Technician',
        description: 'This technician appears to be highly qualified and professional.',
        recommendation: 'Proceed with confidence, but always get the warranty in writing.',
        color: 'green' as const,
      },
      {
        minScore: 8,
        maxScore: 14,
        title: 'Acceptable with Some Concerns',
        description: 'This technician shows some positive indicators but also has areas of concern.',
        recommendation: 'Ask more questions and consider getting a second opinion.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 7,
        title: 'Significant Red Flags',
        description: 'Multiple warning signs suggest this may not be a qualified technician.',
        recommendation: 'We strongly recommend getting quotes from other technicians.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'BBB', url: 'https://www.bbb.org', description: 'Business accreditation' },
      { name: 'I-CAR', url: 'https://www.i-car.com', description: 'Technician certification' },
      { name: 'CFPB', url: 'https://www.consumerfinance.gov', description: 'Consumer rights' },
    ],
    ctaText: 'Find Verified Technicians',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'lease-return-calculator': {
    title: 'Lease Return Damage Calculator',
    description: 'Damage Charge Estimation',
    headerColor: 'from-purple-600 to-purple-800',
    questions: [
      {
        id: 'lease-end-timeline',
        question: 'How soon does your lease end?',
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
        options: [
          { label: 'Smaller than a quarter', value: 'small', points: 4 },
          { label: 'Quarter to golf ball sized', value: 'medium', points: 3 },
          { label: 'Larger than golf ball', value: 'large', points: 2 },
          { label: 'Various sizes including large', value: 'mixed', points: 2 },
        ],
      },
      {
        id: 'paint-condition',
        question: 'Is there any paint damage with the dents?',
        options: [
          { label: 'No - paint is intact', value: 'none', points: 4 },
          { label: 'Minor scratches but no chips', value: 'minor', points: 3 },
          { label: 'Some paint chips or scratches', value: 'chips', points: 1 },
          { label: 'Paint damage to bare metal', value: 'severe', points: 0 },
        ],
      },
      {
        id: 'previous-inspection',
        question: 'Have you had a pre-inspection?',
        options: [
          { label: 'Yes - and damage was noted', value: 'noted', points: 2 },
          { label: 'Yes - no major concerns', value: 'clear', points: 4 },
          { label: 'No - haven\'t scheduled one', value: 'no', points: 3 },
          { label: 'Didn\'t know that was available', value: 'unaware', points: 3 },
        ],
      },
    ],
    results: [
      {
        minScore: 16,
        maxScore: 20,
        title: 'Low Risk - Minor Charges Expected',
        description: 'You may face minimal or no lease-end charges.',
        recommendation: 'Get a PDR quote anyway - it\'s often cheaper than lease company charges.',
        color: 'green' as const,
      },
      {
        minScore: 9,
        maxScore: 15,
        title: 'Moderate Risk - $300-$800 in Potential Charges',
        description: 'Your vehicle has damage that will likely result in lease-end charges.',
        recommendation: 'Getting PDR repairs now is strongly recommended.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 8,
        title: 'High Risk - $800+ in Potential Charges',
        description: 'Your vehicle has significant damage that will almost certainly result in substantial charges.',
        recommendation: 'Act now to minimize costs. Get PDR quotes immediately.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'Edmunds', url: 'https://www.edmunds.com', description: 'Lease wear guidelines' },
      { name: 'FTC', url: 'https://consumer.ftc.gov', description: 'Consumer rights in leasing' },
      { name: 'Consumer Reports', url: 'https://www.consumerreports.org', description: 'Lease return best practices' },
    ],
    ctaText: 'Get PDR Quote Before Lease End',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'dent-value-impact': {
    title: 'How Dents Affect Your Car\'s Value',
    description: 'Resale Value Analysis',
    headerColor: 'from-emerald-600 to-emerald-800',
    questions: [
      {
        id: 'vehicle-value',
        question: 'What is your vehicle\'s approximate current value?',
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
        options: [
          { label: 'Hard to see - only in certain light', value: 'subtle', points: 4 },
          { label: 'Visible on close inspection', value: 'noticeable', points: 3 },
          { label: 'Obvious from normal viewing distance', value: 'obvious', points: 2 },
          { label: 'Very noticeable - first thing you see', value: 'prominent', points: 1 },
        ],
      },
      {
        id: 'sale-timeline',
        question: 'When do you plan to sell or trade in?',
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
        options: [
          { label: 'Private sale', value: 'private', points: 4 },
          { label: 'Trade-in at dealership', value: 'trade', points: 3 },
          { label: 'CarMax, Carvana, or similar', value: 'instant', points: 2 },
          { label: 'Not sure yet', value: 'unsure', points: 2 },
        ],
      },
    ],
    results: [
      {
        minScore: 16,
        maxScore: 20,
        title: 'Minor Value Impact - $200-$500',
        description: 'Your dents are having a minor but real impact on your vehicle\'s value.',
        recommendation: 'PDR repair could recover $300-$800 in value for a positive ROI of 50-100%.',
        color: 'green' as const,
      },
      {
        minScore: 9,
        maxScore: 15,
        title: 'Moderate Value Impact - $500-$1,500',
        description: 'The dents are noticeably affecting market value.',
        recommendation: 'Investing $300-$800 in PDR could recover $800-$2,000 in sale price.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 8,
        title: 'Significant Value Impact - $1,500+',
        description: 'Your vehicle\'s dents are causing major value depreciation.',
        recommendation: 'Even with higher repair costs, you could recover $2,000-$4,000+ in sale price.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'Kelley Blue Book', url: 'https://www.kbb.com', description: 'Vehicle valuation' },
      { name: 'NADA Guides', url: 'https://www.nadaguides.com', description: 'Trade-in value guidelines' },
      { name: 'Consumer Reports', url: 'https://www.consumerreports.org', description: 'Used car buying behavior' },
    ],
    ctaText: 'Get PDR Quote',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'diy-or-pro': {
    title: 'DIY or Pro? Dent Repair Decision',
    description: 'Repair Approach Assessment',
    headerColor: 'from-amber-500 to-amber-700',
    questions: [
      {
        id: 'damage-type',
        question: 'What type of dent are you dealing with?',
        options: [
          { label: 'Small door ding (coin-sized, shallow)', value: 'small-ding', points: 4 },
          { label: 'Medium dent without creases', value: 'medium-smooth', points: 3 },
          { label: 'Dent with sharp creases', value: 'creased', points: 1 },
          { label: 'Large dent or multiple dents', value: 'large-multiple', points: 0 },
        ],
      },
      {
        id: 'paint-condition',
        question: 'What is the paint condition?',
        options: [
          { label: 'Paint is perfect', value: 'perfect', points: 4 },
          { label: 'Minor surface scratches', value: 'minor', points: 3 },
          { label: 'Paint chips or cracks visible', value: 'chips', points: 1 },
          { label: 'Paint is cracked or flaking', value: 'damaged', points: 0 },
        ],
      },
      {
        id: 'experience',
        question: 'What is your DIY experience?',
        options: [
          { label: 'Experienced with auto body work', value: 'experienced', points: 4 },
          { label: 'Handy with car maintenance', value: 'handy', points: 3 },
          { label: 'Some DIY experience but not cars', value: 'some', points: 2 },
          { label: 'Little to no DIY experience', value: 'none', points: 0 },
        ],
      },
      {
        id: 'tools',
        question: 'What dent repair tools do you have?',
        options: [
          { label: 'Professional PDR kit', value: 'professional', points: 4 },
          { label: 'Basic dent puller and heat gun', value: 'basic', points: 3 },
          { label: 'Household items only', value: 'household', points: 1 },
          { label: 'No tools', value: 'none', points: 1 },
        ],
      },
      {
        id: 'risk-tolerance',
        question: 'How would you feel if DIY made it worse?',
        options: [
          { label: 'Fine - it\'s a learning experience', value: 'accepting', points: 4 },
          { label: 'Mildly frustrated but accepting', value: 'mild', points: 3 },
          { label: 'Quite upset - don\'t want to risk it', value: 'concerned', points: 1 },
          { label: 'Can\'t afford to make it worse', value: 'cannot-risk', points: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 15,
        maxScore: 20,
        title: 'Good Candidate for DIY Repair',
        description: 'A DIY repair attempt is reasonable for your situation.',
        recommendation: 'Start with the least invasive method. If no improvement after 2-3 attempts, stop and consult a professional.',
        color: 'green' as const,
      },
      {
        minScore: 8,
        maxScore: 14,
        title: 'Consider Professional Help',
        description: 'Your situation has factors both for and against DIY.',
        recommendation: 'Get a professional quote before attempting DIY - you may be surprised how affordable PDR can be.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 7,
        title: 'Professional Repair Recommended',
        description: 'DIY attempts in your situation have a high risk of causing additional damage.',
        recommendation: 'This type of repair requires professional tools and expertise.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'Dept. of Energy', url: 'https://www.energy.gov', description: 'Material science info' },
      { name: 'CFPB', url: 'https://www.consumerfinance.gov', description: 'Consumer guidance' },
      { name: 'FTC', url: 'https://consumer.ftc.gov', description: 'Auto repair guidance' },
    ],
    ctaText: 'Find Professional PDR',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'insurance-claim-navigator': {
    title: 'Insurance Claim Navigator',
    description: 'File or Pay Out-of-Pocket?',
    headerColor: 'from-sky-600 to-sky-800',
    questions: [
      {
        id: 'damage-cause',
        question: 'What caused the dent damage?',
        options: [
          { label: 'Hail storm or falling object', value: 'comprehensive', points: 4 },
          { label: 'Hit-and-run or vandalism', value: 'comp-hit', points: 4 },
          { label: 'Collision with another vehicle', value: 'collision', points: 3 },
          { label: 'Unknown / accumulated door dings', value: 'unknown', points: 1 },
        ],
      },
      {
        id: 'deductible',
        question: 'What is your relevant deductible amount?',
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
        options: [
          { label: 'No claims in 5+ years', value: 'clean', points: 4 },
          { label: 'One claim in the past 3-5 years', value: 'one', points: 3 },
          { label: 'Two claims in the past 3 years', value: 'two', points: 1 },
          { label: 'Three or more recent claims', value: 'multiple', points: 0 },
        ],
      },
      {
        id: 'premium-concern',
        question: 'How concerned are you about premium increases?',
        options: [
          { label: 'Not concerned - damage far exceeds any increase', value: 'not-concerned', points: 4 },
          { label: 'Somewhat concerned', value: 'somewhat', points: 3 },
          { label: 'Very concerned - premiums are already high', value: 'very', points: 1 },
          { label: 'Can\'t afford any premium increase', value: 'critical', points: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 16,
        maxScore: 20,
        title: 'Filing a Claim Makes Sense',
        description: 'Filing an insurance claim appears to be financially beneficial.',
        recommendation: 'Contact your insurance company to file a claim. You have the right to choose your own repair shop.',
        color: 'green' as const,
      },
      {
        minScore: 9,
        maxScore: 15,
        title: 'Weigh the Costs Carefully',
        description: 'The financial benefit may be marginal when considering potential premium increases.',
        recommendation: 'Before filing, ask your insurance agent about the specific premium impact.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 8,
        title: 'Consider Paying Out-of-Pocket',
        description: 'Paying out-of-pocket may be the better financial choice.',
        recommendation: 'PDR is often 50-70% less than body shop repair, making out-of-pocket more feasible.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'NAIC', url: 'https://content.naic.org', description: 'Insurance claims guidance' },
      { name: 'III', url: 'https://www.iii.org', description: 'Insurance industry data' },
      { name: 'Consumer Federation', url: 'https://consumerfed.org', description: 'Insurance research' },
    ],
    ctaText: 'Get Repair Estimates',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'fleet-roi-calculator': {
    title: 'Fleet PDR ROI Calculator',
    description: 'PDR Program Value Analysis',
    headerColor: 'from-indigo-600 to-indigo-800',
    questions: [
      {
        id: 'fleet-size',
        question: 'How many vehicles are in your fleet?',
        options: [
          { label: '50+ vehicles', value: 'large', points: 4 },
          { label: '20-49 vehicles', value: 'medium', points: 3 },
          { label: '5-19 vehicles', value: 'small', points: 2 },
          { label: '1-4 vehicles', value: 'micro', points: 1 },
        ],
      },
      {
        id: 'branding',
        question: 'Do your vehicles have company branding?',
        options: [
          { label: 'Yes - full vehicle wraps', value: 'full-wrap', points: 4 },
          { label: 'Yes - partial branding', value: 'partial', points: 3 },
          { label: 'No branding but company-owned', value: 'unmarked', points: 2 },
          { label: 'Employee personal vehicles', value: 'personal', points: 1 },
        ],
      },
      {
        id: 'turnover',
        question: 'How often do you cycle fleet vehicles?',
        options: [
          { label: 'Every 2-3 years', value: 'frequent', points: 4 },
          { label: 'Every 3-5 years', value: 'moderate', points: 3 },
          { label: 'Every 5-7 years', value: 'longer', points: 2 },
          { label: 'Run until end of life', value: 'full-life', points: 1 },
        ],
      },
      {
        id: 'customer-facing',
        question: 'How often do fleet vehicles interact with customers?',
        options: [
          { label: 'Daily - core to customer experience', value: 'daily', points: 4 },
          { label: 'Frequently - regular customer visits', value: 'frequent', points: 3 },
          { label: 'Sometimes - occasional interaction', value: 'sometimes', points: 2 },
          { label: 'Rarely - internal use only', value: 'rarely', points: 1 },
        ],
      },
      {
        id: 'maintenance-budget',
        question: 'Do you have a dedicated appearance maintenance budget?',
        options: [
          { label: 'Yes - dedicated budget', value: 'dedicated', points: 4 },
          { label: 'Combined with general maintenance', value: 'combined', points: 3 },
          { label: 'Ad-hoc - repairs as needed', value: 'ad-hoc', points: 2 },
          { label: 'No budget for appearance', value: 'none', points: 1 },
        ],
      },
    ],
    results: [
      {
        minScore: 16,
        maxScore: 20,
        title: 'Excellent PDR ROI Potential',
        description: 'Your fleet profile shows strong potential for positive ROI from PDR.',
        recommendation: 'Implement a scheduled PDR maintenance program. Volume contracts can reduce costs by 30-40%.',
        color: 'green' as const,
      },
      {
        minScore: 9,
        maxScore: 15,
        title: 'Good ROI for Targeted PDR',
        description: 'Your fleet would benefit from PDR services, particularly for customer-facing vehicles.',
        recommendation: 'Start with a pilot program on 20% of your fleet to measure actual ROI.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 8,
        title: 'Selective PDR May Be Beneficial',
        description: 'Your fleet profile suggests limited but specific opportunities for PDR value.',
        recommendation: 'Focus on lease returns, vehicles being sold, and customer-visible vehicles.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'FMCSA', url: 'https://www.fmcsa.dot.gov', description: 'Commercial fleet standards' },
      { name: 'NHTSA', url: 'https://www.nhtsa.gov', description: 'Vehicle safety guidelines' },
      { name: 'GSA', url: 'https://www.gsa.gov', description: 'Fleet management best practices' },
    ],
    ctaText: 'Request Fleet Quote',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
  'classic-car-compatibility': {
    title: 'Classic Car PDR Compatibility',
    description: 'PDR Compatibility Evaluation',
    headerColor: 'from-rose-600 to-rose-800',
    questions: [
      {
        id: 'vehicle-age',
        question: 'What era is your classic car from?',
        options: [
          { label: '1980s-1990s (Modern classic)', value: 'modern', points: 4 },
          { label: '1970s (Malaise era)', value: '70s', points: 3 },
          { label: '1960s (Muscle car era)', value: '60s', points: 3 },
          { label: '1950s or earlier (Vintage)', value: 'vintage', points: 1 },
        ],
      },
      {
        id: 'paint-type',
        question: 'What type of paint is on your classic car?',
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
        options: [
          { label: 'Excellent - supple, no checking', value: 'excellent', points: 4 },
          { label: 'Good - minor imperfections', value: 'good', points: 3 },
          { label: 'Fair - some checking or oxidation', value: 'fair', points: 1 },
          { label: 'Poor - cracking or flaking', value: 'poor', points: 0 },
        ],
      },
      {
        id: 'dent-characteristics',
        question: 'Describe the dent damage.',
        options: [
          { label: 'Minor door dings', value: 'minor', points: 4 },
          { label: 'Medium dents without sharp creases', value: 'medium', points: 3 },
          { label: 'Dents with creases or on character lines', value: 'creased', points: 1 },
          { label: 'Large dents or hail damage', value: 'severe', points: 0 },
        ],
      },
      {
        id: 'previous-work',
        question: 'Has the damaged panel had previous body work?',
        options: [
          { label: 'No - original metal', value: 'original', points: 4 },
          { label: 'Minor repairs - no filler in dented area', value: 'minor', points: 3 },
          { label: 'Unknown - bought the car this way', value: 'unknown', points: 2 },
          { label: 'Yes - panel has body filler', value: 'filled', points: 0 },
        ],
      },
    ],
    results: [
      {
        minScore: 15,
        maxScore: 20,
        title: 'Good Candidate for Classic Car PDR',
        description: 'Your classic car appears to be a good candidate for paintless dent repair.',
        recommendation: 'Find a PDR technician with specific classic car experience - this is critical.',
        color: 'green' as const,
      },
      {
        minScore: 8,
        maxScore: 14,
        title: 'Proceed with Caution',
        description: 'Your classic car may be a PDR candidate, but careful evaluation is essential.',
        recommendation: 'Have a classic car PDR specialist perform an in-person evaluation before any work.',
        color: 'yellow' as const,
      },
      {
        minScore: 0,
        maxScore: 7,
        title: 'PDR May Not Be Advisable',
        description: 'PDR carries significant risk for your classic car.',
        recommendation: 'Consider traditional metal finishing followed by repainting the panel.',
        color: 'red' as const,
      },
    ],
    sources: [
      { name: 'Hagerty', url: 'https://www.hagerty.com', description: 'Classic car preservation' },
      { name: 'AACA', url: 'https://www.aaca.org', description: 'Antique vehicle standards' },
      { name: 'CCCA', url: 'https://www.classiccarclub.org', description: 'Classic car maintenance' },
    ],
    ctaText: 'Find Classic Car Specialists',
    ctaLink: 'https://dentadvisor.org/find-technician',
  },
}

export default function EmbedQuizPage() {
  const params = useParams()
  const slug = params.slug as string
  const quiz = quizData[slug]

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Quiz Not Found</h1>
          <p className="text-gray-600">The requested quiz does not exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Header for Embed */}
      <div className={`bg-gradient-to-r ${quiz.headerColor} text-white py-6 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-sm text-white/80">Powered by DentAdvisor.org</p>
        </div>
      </div>

      {/* Quiz */}
      <div className="py-6 px-4">
        <Quiz
          title={quiz.title}
          description={quiz.description}
          questions={quiz.questions}
          results={quiz.results}
          sources={quiz.sources}
          ctaText={quiz.ctaText}
          ctaLink={quiz.ctaLink}
        />
      </div>

      {/* Footer with attribution */}
      <div className="text-center py-4 border-t border-gray-200">
        <a
          href="https://dentadvisor.org/quizzes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          More PDR Quizzes at DentAdvisor.org
        </a>
      </div>
    </div>
  )
}
