import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calculator,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Clock,
  GitMerge,
  Lightbulb,
  Percent,
  Receipt,
  Scale,
  Search,
  Sparkles,
  Stethoscope,
  Target,
  Timer,
  Wallet,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tax Strategies | MSVV Wealth Partners',
  description:
    'A proactive tax strategy service for high-income professionals earning $150K+. We review your income, compensation, and timing to surface legal tax-reduction moves that fit your situation.',
  robots: 'index, follow',
}

const bookingUrl = 'https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10'

const professionals = [
  { icon: Stethoscope, label: 'Doctors' },
  { icon: Scale, label: 'Attorneys' },
  { icon: Briefcase, label: 'Executives' },
  { icon: Lightbulb, label: 'Consultants' },
  { icon: Target, label: 'Specialists' },
]

const pressurePoints: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wallet,
    title: 'The W-2 assumption',
    description:
      'Many high earners assume there is nothing they can do because their income is W-2 based. That assumption leaves real planning opportunities on the table.',
  },
  {
    icon: Receipt,
    title: 'Compensation is complex',
    description:
      'Salary is only one piece. Equity, bonuses, and the timing of each can change your tax outcome far more than people expect.',
  },
  {
    icon: Timer,
    title: 'Filing is not planning',
    description:
      'Traditional CPAs stay focused on the return in front of them. That is not the same as looking ahead at what is coming and adjusting before year-end.',
  },
]

const reviewStages: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Search,
    step: '01',
    title: 'Income diagnostics',
    description:
      'We audit your compensation structure — salary, bonuses, restricted stock, and any other income — to find the pressure points where taxes are leaking out unnecessarily.',
  },
  {
    icon: Calculator,
    step: '02',
    title: 'Strategic tax planning',
    description:
      'We model deferral opportunities and offset strategies with better timing and coordination. This is where income shifting, election timing, and structure adjustments come into play.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Execution support',
    description:
      'You walk away with a roadmap and documentation, not just a verbal “you should do this.” It is built to be carried forward and coordinated cleanly.',
  },
]

const outcomes: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Percent,
    title: 'Lower tax drag',
    description:
      'Surface legal moves that reduce current and future exposure — not just the standard deduction list.',
  },
  {
    icon: Clock,
    title: 'Clearer planning windows',
    description:
      'See when compensation timing, credits, and deductions matter, before the window closes.',
  },
  {
    icon: Lightbulb,
    title: 'Better decisions',
    description:
      'Evaluate your options with clarity so you are choosing based on fit and timing, not guesswork.',
  },
  {
    icon: Wallet,
    title: 'Faster wealth retention',
    description:
      'Keep more of what you earn available for reinvestment, balance sheet strength, and long-term personal wealth.',
  },
]

const notAFit = [
  'Your income is modest and your tax picture is straightforward.',
  'You are hunting for one-off deduction tips you read about online.',
  'You just want a quick tax return prepared and filed.',
]

export default function TaxStrategies() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section
          className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 bg-slate-50"
          aria-labelledby="tax-hero-heading"
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #1d4ed8)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full blur-3xl opacity-5 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #818cf8, #2563eb)' }}
            aria-hidden="true"
          />

          <div className="container relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to services
            </Link>

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
              <div>
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-5"
                  style={{ background: '#eff6ff', color: '#1d4ed8' }}
                >
                  <Percent className="w-4 h-4" />
                  Proactive tax strategy
                </span>

                <h1 id="tax-hero-heading" className="section-title mb-5">
                  Tax <span className="text-brand-600">Strategies</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-5">
                  A structured tax-reduction review for high-income professionals who have
                  outgrown standard tax prep. We look at your income profile, compensation
                  structure, and timing to identify which legal moves actually apply to your
                  situation — not someone else&apos;s.
                </p>
                <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
                  This is not a one-off tip list or generic advice. It is a forward-looking
                  strategy review built around how you actually earn.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Strategic Diagnostic
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#review" className="btn-secondary">
                    See what the review covers
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-soft">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 mb-5">
                  <Sparkles className="w-4 h-4" />
                  At a glance
                </div>
                <dl className="space-y-5">
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Built for</dt>
                    <dd className="text-base font-medium text-slate-900">
                      High-income professionals with complex compensation
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Income threshold</dt>
                    <dd className="text-base font-medium text-slate-900">
                      $150K+ in combined income
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Typical profiles</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Doctors, attorneys, executives, consultants, specialists
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Deliverable</dt>
                    <dd className="text-base font-medium text-slate-900">
                      A written roadmap you can act on and coordinate
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="what-it-is-heading">
          <div className="container">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  What this is, really
                </span>
                <h2
                  id="what-it-is-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-5"
                >
                  For high earners who have hit a wall
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    You know the pattern. You make good money, your tax bill keeps climbing, and
                    every April your accountant files the return and that is kind of it. No real
                    forward thinking. No strategy conversation. Just &ldquo;here is what you
                    owe.&rdquo;
                  </p>
                  <p>
                    This service is the answer to that gap. It is a structured review that looks at
                    your income profile, your compensation structure, and your timing, then figures
                    out which legal tax-reduction moves actually apply to your situation.
                  </p>
                  <p>
                    Not a generic checklist. Not somebody else&apos;s plan. A strategy built around
                    the way you earn.
                  </p>
                </div>
              </div>

              <aside className="bg-slate-900 rounded-2xl p-7 sm:p-9 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <Receipt className="w-8 h-8 mb-5 text-brand-300" />
                  <h3 className="text-xl font-semibold mb-3">The pattern worth breaking</h3>
                  <p className="text-slate-300 leading-relaxed">
                    You earn more, but the tax drag grows faster than your salary does. Most of the
                    time, nobody is helping you fix that. They are just recording what already
                    happened.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="audience-heading">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Who it is aimed at
                </span>
                <h2
                  id="audience-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  Professionals who have outgrown a standard tax shop
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  This is built for people pulling in $150K or more in combined income, with serious
                  W-2 earnings and equity complications — and who are tired of feeling like they are
                  leaving money on the table.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {professionals.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5"
                  >
                    <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="why-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                The uncomfortable truth
              </span>
              <h2
                id="why-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Why high earners usually pay too much
              </h2>
              <p className="text-slate-600 leading-relaxed">
                It is rarely one bad decision. It is usually a few assumptions that never get
                challenged.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pressurePoints.map((item) => (
                <article
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="review"
          className="section bg-slate-50 scroll-mt-20"
          aria-labelledby="review-heading"
        >
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                What the review actually does
              </span>
              <h2
                id="review-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                A staged review, not a stack of tips
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Instead of jumping straight to strategies, we work through your situation in a
                sequence that keeps the recommendations grounded.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviewStages.map((stage) => (
                <article
                  key={stage.step}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                      <stage.icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-semibold text-slate-200">{stage.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{stage.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{stage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="outcomes-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                What you get out of it
              </span>
              <h2
                id="outcomes-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Not a one-year tax cut
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The goal is to set things up so you are not bleeding cash every year going forward.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {outcomes.map((outcome) => (
                <article
                  key={outcome.title}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <outcome.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{outcome.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="coordination-heading">
          <div className="container">
            <div className="max-w-3xl mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Why coordination matters
              </span>
              <h2
                id="coordination-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Smart ideas are not the same as a strategy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most advisors hand you isolated ideas. Each one might be fine on its own, but they
                rarely talk to each other. The value comes from reviewing your income profile,
                compensation structure, and planning options together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400 mb-5">
                  <XCircle className="w-4 h-4" />
                  Isolated tactics
                </div>
                <ul className="space-y-3 text-slate-600">
                  {[
                    'Do a backdoor Roth',
                    'Max out your 401(k)',
                    'Consider a donor-advised fund',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 leading-relaxed mt-5 pt-5 border-t border-slate-100">
                  Each move is treated in isolation, with no view of how it affects the others or
                  what it locks you into.
                </p>
              </div>

              <div className="bg-brand-600 rounded-2xl p-6 sm:p-7 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-200 mb-5">
                    <GitMerge className="w-4 h-4" />
                    A coordinated plan
                  </div>
                  <ul className="space-y-3 text-brand-50">
                    {[
                      'Income profile reviewed as a whole',
                      'Compensation and equity timing aligned',
                      'Moves identified before you lock in decisions',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-200 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-brand-100 leading-relaxed mt-5 pt-5 border-t border-white/15">
                    The right moves get identified before you lock yourself into decisions that
                    cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="not-fit-heading">
          <div className="container">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  An honest fit check
                </span>
                <h2
                  id="not-fit-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  Who this probably does not fit
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  This service is built for people whose tax complexity has outgrown what a basic
                  CPA relationship handles. If that is not you, that is worth knowing up front.
                </p>
              </div>

              <ul className="space-y-3" role="list">
                {notAFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
                  >
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section pt-0" aria-labelledby="guarantee-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-3xl border border-brand-200 p-8 sm:p-10 overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">
                  <span className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                      One more thing worth knowing
                    </span>
                    <h2
                      id="guarantee-heading"
                      className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mt-2 mb-3"
                    >
                      A savings number in writing
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      Once we have completed a formal evaluation of your documents, we commit to
                      delivering a guaranteed savings amount in writing. That is a fairly bold
                      claim in the tax planning world — most firms will not put a number in
                      writing. If you are skeptical of vague promises, this is the piece that
                      stands out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-0" aria-labelledby="diagnostic-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-brand-600 rounded-3xl p-8 sm:p-12 lg:p-14 text-center overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 55%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/15 text-white border border-white/20">
                    <Sparkles className="w-4 h-4" />
                    The entry point
                  </span>
                  <h2
                    id="diagnostic-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight"
                  >
                    Book a Strategic Diagnostic
                  </h2>
                  <p className="text-brand-100 leading-relaxed max-w-2xl mx-auto mb-8">
                    A focused conversation about where advanced planning might apply, what should
                    be prioritized, and whether deeper implementation work makes sense for your
                    situation. No commitment to anything bigger until both sides see a fit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-700 bg-white rounded-xl hover:bg-brand-50 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule your diagnostic
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href="/#services"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      Explore other services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
