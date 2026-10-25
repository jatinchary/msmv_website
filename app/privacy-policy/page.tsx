import { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | MSVV Wealth Partners',
  description: 'MSVV Wealth Partners Privacy Policy - How we collect, use, and protect your personal information.',
  robots: 'index, follow',
}

const lastUpdated = 'October 8, 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="section bg-slate-50" aria-labelledby="privacy-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>

              <div className="text-center mb-12">
                <h1 id="privacy-heading" className="section-title mb-4">
                  Privacy <span className="text-brand-600">policy</span>
                </h1>
                <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
              </div>

              <div className="space-y-8">
                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    MSVV Wealth Partners ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or communicate with us.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    We are a registered investment adviser with the SEC. Our privacy practices are designed to comply with applicable federal and state privacy laws, including Regulation S-P, the Gramm-Leach-Bliley Act (GLBA), and state privacy statutes.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">2. Information we collect</h2>
                  <h3 className="font-medium text-brand-600 mb-3">Personal information</h3>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside mb-6">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Financial information (assets, income, tax returns, investment holdings)</li>
                    <li>Tax identification numbers and entity structures</li>
                    <li>Beneficiary and family information for estate planning</li>
                    <li>Professional advisor contact information (CPA, attorney, insurance agent)</li>
                  </ul>

                  <h3 className="font-medium text-brand-600 mb-3">Automatically collected information</h3>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside">
                    <li>IP address, browser type, operating system</li>
                    <li>Pages visited, time spent, referring website</li>
                    <li>Cookies and similar tracking technologies (see Section 7)</li>
                  </ul>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">3. How we use your information</h2>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Provide integrated wealth and tax strategy services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Coordinate with your CPA, tax attorney, and other professional advisors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Comply with legal and regulatory obligations (SEC, FINRA, state regulators)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Communicate about your account, services, and regulatory updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Improve our website, services, and client experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" />
                      <span>Prevent fraud and ensure security</span>
                    </li>
                  </ul>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Information sharing & disclosure</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We do not sell your personal information. We share information only as described below:
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li><strong>With your consent:</strong> To your CPA, tax attorney, insurance agent, and other advisors you authorize.</li>
                    <li><strong>Service providers:</strong> Third-party vendors who perform services on our behalf (cloud hosting, CRM, document management) under strict confidentiality agreements.</li>
                    <li><strong>Legal requirements:</strong> When required by law, regulation, subpoena, or court order.</li>
                    <li><strong>Regulatory bodies:</strong> SEC, FINRA, state securities regulators as required for examinations and compliance.</li>
                    <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice).</li>
                  </ul>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Data security</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We implement industry-standard administrative, technical, and physical safeguards to protect your information:
                  </p>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside">
                    <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                    <li>Multi-factor authentication for all system access</li>
                    <li>Regular penetration testing and vulnerability assessments</li>
                    <li>Employee background checks and ongoing security training</li>
                    <li>Incident response plan with 72-hour breach notification procedures</li>
                    <li>SOC 2 Type II compliant infrastructure providers</li>
                  </ul>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Data retention</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside">
                    <li>Provide ongoing advisory services</li>
                    <li>Comply with SEC recordkeeping rules (generally 6 years post-termination)</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Meet legal and regulatory obligations</li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    After the retention period, we securely destroy or anonymize your data.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Cookies & tracking technologies</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Our website uses cookies and similar technologies to:
                  </p>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside mb-4">
                    <li>Enable essential website functionality</li>
                    <li>Analyze site usage and performance (Google Analytics)</li>
                    <li>Remember your preferences</li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed">
                    You can control cookies through your browser settings. Disabling essential cookies may impair website functionality.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Your rights</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Depending on your jurisdiction, you may have the right to:
                  </p>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside">
                    <li>Access and obtain a copy of your personal information</li>
                    <li>Request correction of inaccurate or incomplete data</li>
                    <li>Request deletion (subject to regulatory retention requirements)</li>
                    <li>Restrict or object to certain processing</li>
                    <li>Data portability</li>
                    <li>Opt-out of marketing communications</li>
                    <li>File a complaint with a supervisory authority</li>
                  </ul>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    To exercise these rights, contact us at <a href="mailto:privacy@msvvwealth.com" className="text-brand-600 hover:underline">privacy@msvvwealth.com</a>.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">9. State-specific rights</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Residents of certain states have additional rights:
                  </p>
                  <ul className="space-y-3 text-slate-600">
                    <li><strong>California (CCPA/CPRA):</strong> Right to know, delete, opt-out of sale/share, limit sensitive data use, non-discrimination.</li>
                    <li><strong>Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA):</strong> Similar access, deletion, portability, and opt-out rights.</li>
                    <li><strong>New York (SHIELD Act):</strong> Enhanced data security requirements and breach notification.</li>
                  </ul>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Children&apos;s privacy</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our services are not directed to individuals under 18. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">11. International data transfers</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Your information may be processed in the United States. If you are located outside the U.S., your data will be transferred to the U.S., which may have different data protection laws than your jurisdiction. By using our services, you consent to this transfer.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">12. Changes to this policy</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the updated policy on this page with a revised "Last updated" date. Material changes will be communicated via email or prominent website notice.
                  </p>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">13. Contact us</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our privacy practices, please contact:
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <p><strong>MSVV Wealth Partners</strong></p>
                    <p>Attn: Privacy Officer</p>
                    <p>100 Financial District, New York, NY 10005</p>
                    <p>Email: <a href="mailto:privacy@msvvwealth.com" className="text-brand-600 hover:underline">privacy@msvvwealth.com</a></p>
                    <p>Phone: <a href="tel:+15551234567" className="text-brand-600 hover:underline">(555) 123-4567</a></p>
                  </div>
                </article>

                <article className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 border-brand-200">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">14. SEC Form CRS & regulatory disclosures</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    As an SEC-registered investment adviser, we provide our Form CRS (Client Relationship Summary) and Form ADV Part 2A (Firm Brochure) which contain important information about our services, fees, conflicts of interest, and disciplinary history.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    You can access these documents at <a href="https://adviserinfo.sec.gov" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">adviserinfo.sec.gov</a> (CRD #XXXXXX) or request copies from us directly.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    This Privacy Policy supplements, but does not replace, the privacy notices provided in our Form ADV Part 2A and Form CRS.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}