import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  LineChart,
  PieChart,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingDown,
  Users,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roth Excelerator | MSVV Wealth Partners',
  description:
    'A multi-year Roth conversion planning service for high earners with substantial pre-tax retirement assets. Reduce future RMD pressure and diversify your tax buckets.',
  robots: 'index, follow',
}

const bookingUrl = 'https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10'

const audience = [
  {
    icon: Users,
    title: 'High earners and families',
    description:
      'You have built a substantial retirement balance and want to keep more of it out of the tax system later.',
  },
  {
    icon: Layers,
    title: 'Meaningful pre-tax savings',
    description:
      'Traditional IRAs, old 401(k) rollovers, and other qualified accounts make up a large share of your net worth.',
  },
  {
    icon: LineChart,
    title: 'Long-term thinkers',
    description:
      'You are planning in decades, not months, and would rather make an informed move than chase a quick win.',
  },
]

const focusAreas: { icon: LucideIcon; title: string; description: string; detail: string }[] = [
  {
    icon: PieChart,
    title: 'Diversifying your tax buckets',
    description:
      'Most people hold everything in pre-tax accounts and nothing in tax-free. That leaves fewer options later.',
    detail:
      'We help spread your savings across taxable, tax-deferred, and tax-free buckets so your retirement income is not boxed into one corner.',
  },
  {
    icon: Clock,
    title: 'Getting the timing right',
    description:
      'Converting in a year when income spikes is usually a bad idea. Converting in a low-income year can save a fortune.',
    detail:
      'We look at where you are now, where tax rates may be heading, and when the right conversion window actually opens.',
  },
  {
    icon: TrendingDown,
    title: 'Reducing future RMD pain',
    description:
      'Required Minimum Distributions force withdrawals whether you need the money or not.',
    detail:
      'Those withdrawals can push you into higher brackets, make Social Security taxable, and trigger Medicare surcharges. Converting ahead of time shrinks that future problem.',
  },
]

const processSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Map the exposure',
    description:
      'We start by mapping where your tax exposure sits today and where it is heading based on your income, assets, and retirement timeline.',
  },
  {
    icon: Target,
    step: '02',
    title: 'Build the multi-year plan',
    description:
      'We model conversions year by year and bring your investment advisor and attorney into the loop so everyone is working from the same plan.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    title: 'Execute and monitor',
    description:
      'We help with the paperwork and check in along the way to make sure the plan actually plays out the way it was designed.',
  },
]

const outcomes = [
  'A larger pool of money that comes out tax-free down the road',
  'Less pressure from forced withdrawals later in retirement',
  'A smarter read on when to convert and how much',
  'More flexibility in how you draw income when you retire',
]

const finePrint = [
  'The calculator on our site is an illustration tool, not a promise of what you will actually get.',
  'We partner with Trawick Financial on the insurance side, and MSVV Wealth Partners sells life insurance products.',
  'Nothing on this page counts as official investment advice. It is educational.',
  'If you proceed, you will receive actual prospectus documents before anything becomes official.',
  'The threshold for this service is $500,000 in movable pre-tax qualified assets. It is not designed for smaller legacy accounts.',
]

export default function RothExcelerator() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section
          className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24 bg-slate-50"
          aria-labelledby="roth-hero-heading"
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full blur-3xl opacity-5 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #60a5fa, #2563eb)' }}
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
                  <RefreshCw className="w-4 h-4" />
                  Retirement tax strategy
                </span>

                <h1 id="roth-hero-heading" className="section-title mb-5">
                  Roth <span className="text-brand-600">Excelerator</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-5">
                  A deep-dive planning service for people who have built meaningful balances in
                  pre-tax retirement accounts and want a real answer on whether moving some of that
                  money into a Roth account makes sense.
                </p>
                <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">
                  Instead of guessing, we run the numbers across multiple years so you can see what
                  makes sense before pulling the trigger.
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
                  <a href="#how-it-works" className="btn-secondary">
                    See how it works
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
                      High earners with substantial pre-tax retirement assets
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Minimum threshold</dt>
                    <dd className="text-base font-medium text-slate-900">
                      $500K in movable pre-tax qualified assets
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Planning horizon</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Multi-year, not a single tax season
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 mb-1">Core focus</dt>
                    <dd className="text-base font-medium text-slate-900">
                      Tax-bucket diversification, conversion timing, RMD reduction
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
                  A plan, not a one-time transaction
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Most Roth conversions happen on a whim. Maybe a CPA mentions the idea one year,
                    a random amount gets converted, and that is the end of it. There is no real plan
                    behind the move.
                  </p>
                  <p>
                    Roth Excelerator exists to fix that. It is a planning engagement built around
                    your income, your retirement timeline, and the tax exposure you are likely to
                    face later. Instead of looking at a single tax year, we model the years ahead so
                    you can see the full picture before you move a dollar.
                  </p>
                  <p>
                    This is not a quick win or a product you buy in an afternoon. It is a long game,
                    and it rewards people who are willing to plan accordingly.
                  </p>
                </div>
              </div>

              <aside className="bg-brand-600 rounded-2xl p-7 sm:p-9 text-white relative overflow-hidden">
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                  style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <ShieldAlert className="w-8 h-8 mb-5 text-brand-200" />
                  <h3 className="text-xl font-semibold mb-3">
                    One-year thinking, multi-year consequences
                  </h3>
                  <p className="text-brand-100 leading-relaxed">
                    A conversion that looks smart in April can create a larger tax bill later. The
                    point is to see the whole runway, not just this year&apos;s bracket.
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
                Built for people with real pre-tax exposure
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This service is for high earners, families, and anyone sitting on retirement
                balances who is starting to worry about being hammered by taxes later, especially
                the Required Minimum Distributions that force money out whether you need it or not.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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

            <p className="mt-6 text-sm text-slate-500">
              If you are a short-term thinker or just chasing a quick win, this is not the right
              fit. The value shows up over years, not weeks.
            </p>
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
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3"
              >
                What the plan is built to improve
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <article
                  key={area.title}
                  className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-brand-700" />
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <area.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
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
          id="how-it-works"
          className="section bg-slate-50 scroll-mt-20"
          aria-labelledby="process-heading"
        >
          <div className="container">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                How we work through it
              </span>
              <h2
                id="process-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
              >
                A staged process, not a sales pitch
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We do not jump straight to &ldquo;here is what you should convert.&rdquo; We walk
                through the work in stages so the recommendation is grounded in your actual numbers.
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

        <section className="section" aria-labelledby="one-off-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-12 overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                    An honest look
                  </span>
                  <h2
                    id="one-off-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mt-3 mb-5"
                  >
                    Why random one-off conversions usually miss
                  </h2>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Most Roth conversions happen in a vacuum. Someone converts $50,000 because
                      &ldquo;rates might go up,&rdquo; with no real model behind it. There is no
                      thought about what bracket they will be in at 70, and no plan for how the
                      conversion fits with their other income. It is a guess dressed up as strategy.
                    </p>
                    <p>
                      Without the full picture, you are essentially throwing darts. A real plan has
                      to account for future brackets, retirement income, and RMD pressure together.
                      The tax code rewards precision, not intuition.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mt-8">
                    {[
                      'Future tax brackets',
                      'Retirement income mix',
                      'RMD pressure',
                      'Social Security and Medicare impact',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-slate-50" aria-labelledby="outcomes-heading">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  What you walk away with
                </span>
                <h2
                  id="outcomes-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  More than a tax break this year
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The goal is not simply to save taxes in a single filing season. It is to give you
                  more control over how your wealth is taxed, distributed, and passed on.
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

        <section className="section" aria-labelledby="fine-print-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  The fine print
                </span>
                <h2
                  id="fine-print-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mt-3 mb-4"
                >
                  What is worth knowing up front
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  A few disclosures matter before any conversation about Roth conversion planning.
                </p>
              </div>

              <ul className="space-y-3" role="list">
                {finePrint.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
                  >
                    <FileText className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
                    Start here
                  </span>
                  <h2
                    id="diagnostic-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight"
                  >
                    Book a Strategic Diagnostic
                  </h2>
                  <p className="text-brand-100 leading-relaxed max-w-2xl mx-auto mb-8">
                    A first conversation to see whether conversion planning actually fits your
                    situation. No commitment, no pressure, and no recommendation until we have
                    looked at the numbers.
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
