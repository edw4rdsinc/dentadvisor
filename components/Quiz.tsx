'use client'

import { useState } from 'react'
import Link from 'next/link'

export interface QuizQuestion {
  id: string
  question: string
  description?: string
  options: {
    label: string
    value: string
    points?: number
  }[]
}

export interface QuizResult {
  minScore: number
  maxScore: number
  title: string
  description: string
  recommendation: string
  color: 'green' | 'yellow' | 'red'
}

export interface QuizSource {
  name: string
  url: string
  description: string
}

interface QuizProps {
  title: string
  description: string
  questions: QuizQuestion[]
  results: QuizResult[]
  sources: QuizSource[]
  ctaText?: string
  ctaLink?: string
  shareTitle?: string
  shareDescription?: string
}

export default function Quiz({
  title,
  description,
  questions,
  results,
  sources,
  ctaText = 'Find a PDR Technician',
  ctaLink = '/find-technician',
  shareTitle,
  shareDescription,
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [copied, setCopied] = useState(false)

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href
    }
    return ''
  }

  const getShareText = (result: QuizResult) => {
    return shareTitle || `I took the ${title} quiz on DentAdvisor - ${result.title}`
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
  }

  const shareOnTwitter = (result: QuizResult) => {
    const url = encodeURIComponent(getShareUrl())
    const text = encodeURIComponent(getShareText(result))
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400')
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl())
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleAnswer = (questionId: string, value: string, points: number = 0) => {
    setAnswers({ ...answers, [questionId]: value })
    setScore(score + points)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getResult = (): QuizResult => {
    return results.find(r => score >= r.minScore && score <= r.maxScore) || results[0]
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setScore(0)
    setShowResults(false)
    setShowLeadForm(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showLeadForm) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-[var(--steel-900)] mb-4">Get Your Personalized Results</h2>
          <p className="text-[var(--steel-600)] mb-6">
            Enter your information to receive your detailed assessment and connect with certified PDR technicians.
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--steel-700)] mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--steel-700)] mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--steel-700)] mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--steel-700)] mb-1">ZIP Code</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-[var(--steel-300)] focus:border-[var(--dent-500)] focus:ring-2 focus:ring-[var(--dent-500)]/20 outline-none"
                placeholder="12345"
                maxLength={5}
              />
            </div>
            <button type="submit" className="btn-accent w-full">
              Get My Results & Free Quote
            </button>
          </form>
          <button
            onClick={() => setShowLeadForm(false)}
            className="mt-4 text-sm text-[var(--steel-500)] hover:text-[var(--steel-700)] w-full text-center"
          >
            Skip and view results
          </button>
        </div>
      </div>
    )
  }

  if (showResults) {
    const result = getResult()
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card overflow-hidden">
          {/* Result Header */}
          <div className={`p-8 text-white ${
            result.color === 'green' ? 'bg-gradient-to-r from-[var(--dent-600)] to-[var(--dent-700)]' :
            result.color === 'yellow' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
            'bg-gradient-to-r from-red-500 to-red-600'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {result.color === 'green' && (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {result.color === 'yellow' && (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
              {result.color === 'red' && (
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <h2 className="text-2xl font-bold">{result.title}</h2>
            </div>
            <p className="text-white/90">{result.description}</p>
          </div>

          {/* Recommendation */}
          <div className="p-8">
            <h3 className="text-lg font-semibold text-[var(--steel-900)] mb-3">Our Recommendation</h3>
            <p className="text-[var(--steel-700)] mb-6">{result.recommendation}</p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={ctaLink} className="btn-accent flex-1 text-center">
                {ctaText}
              </Link>
              <button onClick={resetQuiz} className="btn-secondary flex-1">
                Retake Quiz
              </button>
            </div>

            {/* Share Buttons */}
            <div className="border-t border-[var(--steel-200)] pt-6 mb-6">
              <h4 className="text-sm font-semibold text-[var(--steel-700)] mb-3">Share This Quiz</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={shareOnFacebook}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => shareOnTwitter(result)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:bg-[#094d92] transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--steel-200)] text-[var(--steel-700)] hover:bg-[var(--steel-300)] transition-colors text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sources */}
            <div className="border-t border-[var(--steel-200)] pt-6">
              <h4 className="text-sm font-semibold text-[var(--steel-700)] mb-3">Sources & References</h4>
              <ul className="space-y-2">
                {sources.map((source, index) => (
                  <li key={index} className="text-sm">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--dent-600)] hover:underline font-medium"
                    >
                      {source.name}
                    </a>
                    <span className="text-[var(--steel-500)]"> - {source.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-[var(--steel-600)] mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-[var(--steel-200)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--dent-500)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card p-8">
        <h2 className="text-xl font-semibold text-[var(--steel-900)] mb-2">{question.question}</h2>
        {question.description && (
          <p className="text-[var(--steel-600)] mb-6">{question.description}</p>
        )}

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(question.id, option.value, option.points || 0)}
              className="w-full text-left p-4 rounded-lg border border-[var(--steel-200)] hover:border-[var(--dent-500)] hover:bg-[var(--dent-50)] transition-colors"
            >
              <span className="font-medium text-[var(--steel-800)]">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
