import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GitMerge,
  Handshake,
  Landmark,
  ListChecks,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Capital Gains Mitigation | MSVV Wealth Partners',
  description:
    'Planning for business sales, asset sales, and liquidity events. We evaluate mitigation paths before the tax result locks in — and identify what can still be done after a gain is realized.',
  robots: 'index, follow',
}

const bookingUrl = 'https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10'

const notAFit = [
  'Unprofitable businesses with no gain to mitigate.',
  'Low-value asset sales where the planning cost would outweigh the benefit.',
  'General CPA services — this is not filing help.',
]

const focusAreas: { icon: LucideIcon; title: string; description: string; detail: string }[] = [
  {
    icon: CalendarClock,
    title: 'Advance planning',
    description:
      'The strongest mitigation options exist before deal terms, timing, and entity decisions become fixed.',
    detail: 'After that, you are working with what is left. The earlier the work starts, the more optionality you keep.',
  },
  {
    icon: ShieldCheck,
    title: 'Proceeds protection',
    description:
      'Reduce tax drag so more of the value you actually created stays in your hands after the transaction.',
    detail:
      'This is not about dodging tax. It is about not losing money you did not have to lose.',
  },
  {
    icon: GitMerge,
    title: 'Coordinated execution',
    description:
      'Align tax strategy with your legal, wealth, and transaction advisors so the plan survives the path to close.',
    detail:
      'A lot of good plans die in execution because nobody is talking to each other.',
  },
]

const processSteps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Search,
    step: '01',
    title: 'Exposure analysis',
    description:
      'We look at your deal terms, ownership structure, and timing to surface the precise impact of the transaction. No guesswork — actual numbers.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Strategic structure design',
    description:
      'Working with your legal and wealth advisors, we craft coordinated entity and transaction structures. This is where QSBS exclusions, installment sales, charitable trusts, opportunity zones, and other mitigation tools get evaluated.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Execution oversight',
    description:
      'We coordinate your team through closing to make sure strategies actually get implemented as designed. A plan that falls apart at closing is worse than no plan at all.',
  },
]

const outcomes: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingUp,
    title: 'Higher net proceeds',
    description:
      'Advance planning can materially improve how much capital stays in your pocket versus disappearing into taxes.',
  },
  {
    icon: Clock,
    title: 'Better transaction timing',
    description:
      'See the planning windows before signatures, transfers, and closing steps reduce flexibility.',
  },
  {
    icon: ListChecks,
    title: 'More strategic options',
    description:
      'See which mitigation paths fit your goals, liquidity needs, and broader picture before committing to one.',
  },
  {
    icon: Users,
    title: 'Cleaner advisor alignment',
    description:
      'Keep legal, tax, and wealth conversations pointed at the same objective so execution stays coordinated under pressure.',
  },
]

const situationTypes: { icon: LucideIcon; label: string }[] = [
  { icon: Briefcase, label: 'Business owners' },
  { icon: Users, label: 'High-income W-2 professionals' },
  { icon: Landmark, label: 'Liquidity and capital events' },
  { icon: Handshake, label: 'CPA and advisor partners' },
]

const connectionSteps: {
  name: string
  description: string
  href?: string
  current?: boolean
}[] = [
  {
    name: 'Core',
    description: 'Year-round accounting and tax coordination keeps the business clean.',
  },
  {
    name: 'Crown',
    description: 'The broader tax architecture around the owner and the business.',
  },
  {
    name: 'Business Exit Planning',
    description: 'Readiness and cleanup in the two to three years before a sale.',
    href: '/services/business-exit-planning',
  },
  {
    name: 'Capital Gains Mitigation',
    description: 'The planning and structuring that happens during the actual sale event.',
    current: true,
  },
  {
    name: 'Roth Excelerator',
    description: 'Post-sale proceeds positioned for retirement and long-term tax efficiency.',
    href: '/services/roth-excelerator',
  },
]

const caseStudies = [
  {
    label: 'The $20M art sale',
    stat: '$4M+',
    statLabel: 'capital preserved',
    description:
      'A tech entrepreneur was about to liquidate a $20M modern art portfolio. Without structuring, capital gains exposure would have eaten heavily into investable capital. We mapped tax exposure scenarios before the sale finalized and structured reinvestment pathways — preserving $4M+ in capital and redirecting proceeds into coordinated real estate investments.',
  },
  {
    label: 'The $3.3M business sale',
    stat: '$1M+',
    statLabel: 'projected tax liability',
    description:
      'A business owner was facing $1M+ in projected tax liability on a $3.3M sale. We modeled two paths — full deferral, preserving $3M+ at closing, and full elimination while setting up a Wealth Replacement Trust for the family. Both were modeled before any documents were signed, so the client chose with full visibility into the after-tax outcome of each option.',
  },
  {
    label: 'The $1.1B Rhode sale',
    stat: '$1.1B',
    statLabel: 'liquidity event',
    description:
      'In our insights, we looked at the Hailey Bieber / Rhode sale to e.l.f. Beauty. Large, sudden, celebrity-driven deals are exactly when capital gains planning matters most. Section 1202 QSBS exclusions (up to $10M excluded), Section 453 rollovers, and Qualified Opportunity Funds are tools that only work if they were planned in advance.',
  },
]

export default function CapitalGainsMitigation() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section
          className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 bg-slate-50"
          aria-labelledby="cgt-hero-heading"
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #f59e0b, #b45309)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full blur-3xl opacity-5 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #fbbf24, #d97706)' }}
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
                  style={{ background: '#fffbeb', color: '#b45309' }}
                >
                  <TrendingUp className="w-4 h-4" />
                  Liquidity event planning
                </span>

                <h1 id="cgt-hero-heading" className="section-title mb-5">
                  Capital Gains <span className="text-brand-600">Mitigation</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-5">
                  A planning process for people staring down a meaningful gain — a business sale,
                  asset sale, recapitalization, or any liquidity event where the tax bill could be
                  substantial.
                </p>
                <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
                  The point is to figure out, before everything locks in, which mitigation paths
                  actually exist and which ones fit your situation.
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
                  <a href="#process" className="btn-secondary">
                    See the process
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
                      Owners, investors, and families facing a meaningful gain
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Potential exposure</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Six or seven figures without planning
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Timing</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Before signing — and limited options after
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Core focus</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Tax-aware structuring, proceeds protection, coordinated execution
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
                  What it actually is
                </span>
                <h2
                  id="what-it-is-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-5"
                >
                  Getting ahead of a meaningful gain
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Too many sellers leave millions on the table for the IRS because of
                    uncoordinated, last-minute advice. They wait too long to plan, the timing
                    compresses, and the options shrink. By the time the deal is moving, most of the
                    smart moves are gone.
                  </p>
                  <p>
                    This service is built to change that sequence. We identify the mitigation paths
                    that actually exist for your situation and evaluate them while the deal terms,
                    structure, and ownership decisions are still flexible.
                  </p>
                  <p>
                    And if the sale has already happened? It is not hopeless. Some options close
                    after a gain is realized, but not all of them do. We can work both before and
                    after the event — you lose flexibility after the fact, but you do not lose
                    everything.
                  </p>
                </div>
              </div>

              <aside className="bg-slate-900 rounded-2xl p-7 sm:p-9 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <TrendingUp className="w-8 h-8 mb-5 text-brand-300" />
                  <h3 className="text-xl font-semibold mb-3">The result locks in fast</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Once the deal is signed, the tax outcome is mostly fixed. The real work happens
                    while timing, structure, and ownership decisions are still open.
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
                  Who it is for
                </span>
                <h2
                  id="audience-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  A gain large enough to plan around
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Owners, investors, and families facing a meaningful gain — the kind of situation
                  where the tax bill could be six or seven figures if no planning happens.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {situationTypes.map((item) => (
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
                  When it is not the right fit
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Not every transaction or asset sale needs this level of planning. Being clear
                  about that saves everyone time.
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

        <section className="section bg-slate-50" aria-labelledby="core-idea-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                    The honest core idea
                  </span>
                  <h2
                    id="core-idea-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-3 mb-6"
                  >
                    Timing is the whole variable
                  </h2>
                  <blockquote className="border-l-2 border-amber-400 pl-5 sm:pl-6">
                    <p className="text-lg sm:text-xl text-slate-100 leading-relaxed">
                      &ldquo;A liquidity event is not the moment to begin planning — it&apos;s the
                      moment planning either pays off or doesn&apos;t.&rdquo;
                    </p>
                  </blockquote>
                  <p className="text-slate-300 leading-relaxed mt-6">
                    That is the whole pitch in one sentence. Once the deal is signed, the tax result
                    is basically locked. The work has to happen before — when timing, structure, and
                    ownership decisions are still flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="focus-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                The three focus areas
              </span>
              <h2
                id="focus-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Where the leverage actually lives
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The strategy only works when planning, protection, and execution are treated as one
                connected effort.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-700" />
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{area.description}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{area.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="section bg-slate-50 scroll-mt-20"
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                How the process works
              </span>
              <h2
                id="process-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                A three-step structured engagement
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Every stage is designed to keep the options open for as long as possible, then make
                sure the chosen path actually gets implemented.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <article
                  key={step.step}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-semibold text-slate-200">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="outcomes-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                What you walk away with
              </span>
              <h2
                id="outcomes-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Not generic investment advice
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The deliverable is specific to your transaction, your ownership structure, and your
                timing — not a standard playbook.
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

        <section className="section bg-slate-50" aria-labelledby="timing-heading">
          <div className="container">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Why timing matters
                </span>
                <h2
                  id="timing-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  The earlier the alignment, the more optionality you keep
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Capital gains mitigation is not generic investment advice. It depends entirely on
                  deal timing, ownership structure, legal design, and coordinated execution.
                </p>
                <p>
                  The earlier the right advisors are aligned, the more optionality you can preserve.
                  Once those decisions become fixed, the math becomes fixed too.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cases-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Case examples
              </span>
              <h2
                id="cases-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                What changes when the planning comes first
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Different assets, different structures, same pattern: the value came from modeling
                the outcome before the decision was locked in.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <article
                  key={study.label}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    {study.label}
                  </span>
                  <div className="text-3xl font-semibold text-brand-600 mb-1">{study.stat}</div>
                  <div className="text-sm font-medium text-slate-500 mb-4">{study.statLabel}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{study.description}</p>
                </article>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-400 leading-relaxed">
              Examples are illustrative. Outcomes depend on individual circumstances and are not a
              guarantee of future results.
            </p>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="connections-heading">
          <div className="container">
            <div className="max-w-3xl mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                How it connects
              </span>
              <h2
                id="connections-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Where capital gains planning fits
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Capital Gains Mitigation sits in the middle of the planning journey — after the
                business is ready and before the proceeds are repositioned for retirement.
              </p>
            </div>

            <ol className="space-y-3" role="list">
              {connectionSteps.map((step, index) => (
                <li
                  key={step.name}
                  className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-xl border p-4 sm:p-5 ${
                    step.current
                      ? 'border-brand-300 bg-white shadow-soft'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                      step.current
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    {step.href ? (
                      <Link
                        href={step.href}
                        className="font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        {step.name}
                      </Link>
                    ) : (
                      <span className="font-semibold text-slate-900">{step.name}</span>
                    )}
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {step.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600">
                      <CheckCircle2 className="w-4 h-4" />
                      You are here
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm text-slate-500">
              Preparing the business for market comes first. Capital gains mitigation handles the
              sale event. Roth Excelerator positions the proceeds afterward.
            </p>
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
                    We assess timing, potential exposure, and whether meaningful planning
                    opportunities still exist before the transaction advances any further.
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
                  <p className="text-sm text-brand-200 leading-relaxed mt-8 max-w-2xl mx-auto">
                    If a sale, recapitalization, or major appreciated asset event is on your
                    horizon, the most valuable conversation happens before any paperwork is signed.
                  </p>
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
