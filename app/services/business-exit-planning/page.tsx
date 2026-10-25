import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileSearch,
  Handshake,
  Layers,
  ListChecks,
  Rocket,
  Search,
  Sparkles,
  Target,
  UserCheck,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Exit Planning | MSVV Wealth Partners',
  description:
    'A pre-sale readiness engagement for owners planning to sell, transition, recapitalize, or step away within 2–3 years. Clean up the business before buyer scrutiny begins.',
  robots: 'index, follow',
}

const bookingUrl = 'https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10'

const audience: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: 'A 2–3 year horizon',
    description:
      'You may sell, transition, recapitalize, or step away from the business within the next two to three years.',
  },
  {
    icon: FileSearch,
    title: 'Books under scrutiny',
    description:
      'Your books or reporting probably would not survive serious buyer scrutiny in their current state.',
  },
  {
    icon: Layers,
    title: 'Unresolved structure gaps',
    description:
      'There are structural gaps or owner-planning decisions that have been sitting around unresolved.',
  },
  {
    icon: Target,
    title: 'Readiness before market',
    description:
      'You want stronger footing before you ever enter a formal sale or transition process.',
  },
]

const notAFit = [
  'Routine compliance or bookkeeping-only needs.',
  'Owners with no real transition horizon who are just exploring vaguely.',
  'Last-minute tax tactics right before closing — by then, it is mostly too late.',
]

const focusAreas: { icon: LucideIcon; title: string; description: string; detail: string }[] = [
  {
    icon: ClipboardCheck,
    title: 'Pre-sale readiness',
    description:
      'Get the books, reporting, and compliance cleaned up before buyer scrutiny exposes problems under pressure.',
    detail:
      'Once a buyer is looking at your numbers, you have lost the chance to fix anything quietly.',
  },
  {
    icon: FileSearch,
    title: 'Diligence preparation',
    description:
      'Surface risks early, reduce surprises, and improve how the business shows up in a formal process.',
    detail:
      'Buyers get nervous when they find issues. They do not get nervous when those issues were already disclosed and addressed.',
  },
  {
    icon: UserCheck,
    title: 'Owner transition planning',
    description:
      'Sequence the personal, financial, and proceeds-planning decisions before the transaction timeline gets compressed.',
    detail:
      'This is the side most advisors ignore — what happens to you and your money after the deal closes.',
  },
]

const processSteps: { icon: LucideIcon; step: string; title: string; description: string }[] = [
  {
    icon: Search,
    step: '01',
    title: 'Assess readiness',
    description:
      'We look at your reporting quality, compliance posture, structure, and owner goals. The goal is to identify the issues most likely to affect timing and value before anyone else sees them.',
  },
  {
    icon: ListChecks,
    step: '02',
    title: 'Clean up and sequence',
    description:
      'We prioritize the work that should happen before market — financial cleanup, structural fixes, and better decision sequencing. Not everything happens at once. Some things matter more than others, and order matters.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Prepare for market',
    description:
      'We coordinate the right advisors and readiness steps so the business enters a sale or transition process from a stronger position. This is where the legal, tax, and wealth conversations all need to point at the same objective.',
  },
]

const outcomes = [
  'Stronger sale readiness — cleaner reporting, better documentation, fewer unresolved issues before buyers show up',
  'Less diligence friction — fewer surprises, less rework, fewer credibility concerns slowing the deal down',
  'Better decision sequencing — addressing structural, tax, and owner-planning decisions in the right order while there is still time',
  'More confident transition — clearer priorities, stronger advisor alignment, more confidence in the path forward',
]

const connectionSteps: {
  name: string
  description: string
  href?: string
  current?: boolean
}[] = [
  {
    name: 'Core',
    description: 'Year-round accounting and tax coordination keeps the business running clean.',
  },
  {
    name: 'Crown',
    description: 'Advanced tax architecture for owners, built around the broader picture.',
  },
  {
    name: 'Business Exit Planning',
    description: 'Readiness, cleanup, and sequencing before the business goes to market.',
    current: true,
  },
  {
    name: 'Capital Gains Mitigation',
    description: 'The strategy that kicks in during the actual sale event.',
    href: '/services/capital-gains-mitigation',
  },
  {
    name: 'Roth Excelerator',
    description: 'Post-sale proceeds positioned for retirement and long-term tax efficiency.',
    href: '/services/roth-excelerator',
  },
]

const caseStudies = [
  {
    label: 'Dental practice sale',
    stat: '$550K',
    statLabel: 'potential tax loss avoided',
    description:
      'A $2M practice that would have lost $550K to taxes. Through pre-close structuring, the owner received $1.86M at closing — 30% more than an unplanned exit.',
  },
  {
    label: '$3.3M business exit',
    stat: '$1M+',
    statLabel: 'tax exposure eliminated',
    description:
      'We modeled two distinct paths before closing — full deferral versus full elimination with a Wealth Replacement Trust — and eliminated more than $1M in tax exposure.',
  },
  {
    label: '$20M art sale',
    stat: '$20M',
    statLabel: 'planned capital gains outcome',
    description:
      'A tech entrepreneur avoided reactive capital gains exposure while redeploying proceeds into real estate.',
  },
]

export default function BusinessExitPlanning() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section
          className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 bg-slate-50"
          aria-labelledby="exit-hero-heading"
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #14b8a6, #0f766e)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full blur-3xl opacity-5 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #5eead4, #0d9488)' }}
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
                  style={{ background: '#f0fdfa', color: '#0f766e' }}
                >
                  <Handshake className="w-4 h-4" />
                  Exit readiness
                </span>

                <h1 id="exit-hero-heading" className="section-title mb-5">
                  Business <span className="text-brand-600">Exit Planning</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-5">
                  A readiness engagement for owners who are thinking about selling, transitioning,
                  recapitalizing, or stepping away from their company — likely within the next two
                  to three years.
                </p>
                <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
                  This is not a tax tactic, and it is not a last-minute rescue. It is the work that
                  happens before you ever go to market, so the business and the owner are both
                  actually ready when the time comes.
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
                    <dt className="text-sm text-slate-500 mb-1">Planning horizon</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Likely exit in 2–3 years
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Core focus</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Pre-sale readiness, diligence preparation, owner transition
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Engagement</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Three structured stages before market
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Best fit</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Owners who want leverage before buyer scrutiny
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
                  The work before the deal
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Most owners assume they can sell first and clean things up later. That almost
                    never works. By the time a deal starts moving, the timeline compresses, buyers
                    get nosy, and the easy fixes are no longer available.
                  </p>
                  <p>
                    This service exists to do that work upfront, while you still have leverage.
                    It is a structured readiness engagement — not a tax tactic and not a
                    last-minute rescue.
                  </p>
                  <p>
                    The business needs to be ready. The owner needs to be ready. And both need to
                    be ready before the market starts asking questions.
                  </p>
                </div>
              </div>

              <aside className="bg-slate-900 rounded-2xl p-7 sm:p-9 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <Clock className="w-8 h-8 mb-5 text-brand-300" />
                  <h3 className="text-xl font-semibold mb-3">Leverage disappears fast</h3>
                  <p className="text-slate-300 leading-relaxed">
                    By the time a deal starts moving, buyers are already looking closely. The
                    cleanup you could have done quietly becomes a negotiation point.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="audience-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Who it is for
              </span>
              <h2
                id="audience-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Owners with a real transition horizon
              </h2>
              <p className="text-slate-600 leading-relaxed">
                If a sale, transition, recapitalization, or step-away is on the horizon, the work
                starts well before the process does.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {audience.map((item) => (
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
                  Worth being upfront about this. If any of these describe you, a different
                  conversation probably makes more sense.
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

        <section className="section bg-slate-50" aria-labelledby="problem-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                    The core problem
                  </span>
                  <h2
                    id="problem-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-3 mb-5"
                  >
                    Waiting too long is expensive
                  </h2>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Many owners wait too long. The result is predictable: books need cleanup,
                      reporting is not ready for scrutiny, compliance issues and structure gaps stay
                      unresolved, and personal planning decisions get pushed aside.
                    </p>
                    <p>
                      Then a transaction starts moving. Timing compresses, diligence gets harder,
                      and avoidable friction chips away at leverage, confidence, and the value the
                      owner actually walks away with.
                    </p>
                  </div>

                  <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200 leading-relaxed">
                      That does not have to happen — but only if you start well before the deal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="focus-heading">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                The focus areas
              </span>
              <h2
                id="focus-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                Three sides of exit readiness
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The business side and the owner side both matter. Ignoring either one creates
                friction when the deal starts moving.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-700" />
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
                A three-stage structured engagement
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The point is not to do everything at once. The point is to do the right things, in
                the right order, before the deal sets the timetable.
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
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  What you walk away with
                </span>
                <h2
                  id="outcomes-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  More than a higher sale price
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  A cleaner process and a more confident owner matter just as much as the number at
                  the end. Usually, they help produce it.
                </p>
              </div>

              <ul className="space-y-4" role="list">
                {outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4 sm:p-5"
                  >
                    <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-slate-700 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                Where exit planning fits
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Business Exit Planning sits inside a broader solutions portfolio. The natural flow
                runs from keeping the business clean, to preparing it for market, to handling the
                sale event and the proceeds that follow.
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
              Exit planning prepares you for market. Capital gains mitigation handles the close.
              Roth Excelerator positions the proceeds afterward.
            </p>
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
                What planning before close changes
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Three engagements that point to the same idea: planning before close is what changes
                the math. After close, options disappear.
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
                    We assess readiness, identify friction points, and determine what should be
                    addressed before the company enters a formal process. No commitment beyond that
                    conversation.
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
