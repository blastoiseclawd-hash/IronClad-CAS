import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { LeadData, ViewState } from '../types';

interface PricingProps {
  onCtaClick: (data?: LeadData) => void;
  setView: (view: ViewState) => void;
}

const Pricing: React.FC<PricingProps> = ({ onCtaClick, setView }) => {
  return (
    <div className="bg-[#D4DBE2] pt-32 pb-16">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3E4B55] mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-[#6B7C8C] mb-4">
            Choose the tier that fits your business. No long-term contracts.
          </p>
          <p className="text-sm text-[#6B7C8C]">
            All plans include unlimited email support, secure document portal, and CPA-led service.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Bookkeeping */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#3E4B55] mb-2">Bookkeeping</h2>
              <p className="text-sm text-[#6B7C8C] mb-4">For growing businesses that need clean, accurate books</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-[#6B7C8C]">Starting at</span>
                <span className="text-4xl font-bold text-[#C47F2A]">$2,000</span>
              </div>
              <p className="text-sm text-[#6B7C8C] mt-1">per month</p>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-[#3E4B55] mb-3">PERFECT FOR:</div>
              <div className="space-y-2 text-sm text-[#6B7C8C]">
                <div>• $500K - $3M revenue</div>
                <div>• 50-200 transactions/month</div>
                <div>• Single entity</div>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <div className="text-sm font-semibold text-[#3E4B55] mb-3">INCLUDES:</div>
              <ul className="space-y-2 text-sm">
                {[
                  'Monthly financial statements',
                  'Bank reconciliation',
                  'Transaction categorization',
                  'A/P and A/R entry',
                  'Unlimited email support',
                  'Up to 2 hours/month consultation',
                  'Secure document portal'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#6B7C8C]">
                    <Check className="w-4 h-4 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onCtaClick({ service: 'Bookkeeping', budget: 'Starting at $2,000/month' })}
                className="w-full bg-[#3E4B55] hover:bg-[#2A3440] text-white py-3 rounded-lg font-semibold transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => setView('bookkeeping')}
                className="w-full border-2 border-[#3E4B55] text-[#3E4B55] hover:bg-[#3E4B55] hover:text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Controller - Featured */}
          <div className="bg-[#C47F2A] rounded-lg shadow-2xl p-8 flex flex-col relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3E4B55] text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Controller</h2>
              <p className="text-sm text-[#F5E6D3] mb-4">For businesses that need strategic financial management</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-[#F5E6D3]">Starting at</span>
                <span className="text-4xl font-bold text-white">$4,000</span>
              </div>
              <p className="text-sm text-[#F5E6D3] mt-1">per month</p>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-white mb-3">PERFECT FOR:</div>
              <div className="space-y-2 text-sm text-[#F5E6D3]">
                <div>• $3M - $15M revenue</div>
                <div>• 200-500 transactions/month</div>
                <div>• Multi-entity operations</div>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <div className="text-sm font-semibold text-white mb-3">EVERYTHING IN BOOKKEEPING, PLUS:</div>
              <ul className="space-y-2 text-sm">
                {[
                  'Budget vs. actual analysis',
                  'KPI dashboard',
                  '13-week cash flow forecast',
                  'Monthly financial review call',
                  'Quarterly business review',
                  'Up to 5 hours/month consultation',
                  'Sales tax filing (3 states)',
                  '1099 preparation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onCtaClick({ service: 'Controller', budget: 'Starting at $4,000/month' })}
                className="w-full bg-white hover:bg-[#F5F7FA] text-[#C47F2A] py-3 rounded-lg font-semibold transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => setView('controller')}
                className="w-full border-2 border-white text-white hover:bg-white hover:text-[#C47F2A] py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CFO */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#3E4B55] mb-2">CFO</h2>
              <p className="text-sm text-[#6B7C8C] mb-4">For high-growth companies needing executive leadership</p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-[#6B7C8C]">Starting at</span>
                <span className="text-4xl font-bold text-[#C47F2A]">$8,000</span>
              </div>
              <p className="text-sm text-[#6B7C8C] mt-1">per month</p>
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-[#3E4B55] mb-3">PERFECT FOR:</div>
              <div className="space-y-2 text-sm text-[#6B7C8C]">
                <div>• $10M - $100M+ revenue</div>
                <div>• 500+ transactions/month</div>
                <div>• Investors / transactions</div>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <div className="text-sm font-semibold text-[#3E4B55] mb-3">EVERYTHING IN CONTROLLER, PLUS:</div>
              <ul className="space-y-2 text-sm">
                {[
                  '3-5 year financial modeling',
                  'Board-ready presentations',
                  'Quarterly board attendance',
                  'Executive team participation',
                  'Capital raise support',
                  'M&A due diligence',
                  'Treasury strategy',
                  '15 hours/month consultation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#6B7C8C]">
                    <Check className="w-4 h-4 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onCtaClick({ service: 'CFO', budget: 'Starting at $8,000/month' })}
                className="w-full bg-[#3E4B55] hover:bg-[#2A3440] text-white py-3 rounded-lg font-semibold transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => setView('cfo')}
                className="w-full border-2 border-[#3E4B55] text-[#3E4B55] hover:bg-[#3E4B55] hover:text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-8 text-center">
            Detailed Comparison
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#3E4B55] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-4 text-center">Bookkeeping</th>
                  <th className="py-4 px-4 text-center bg-[#C47F2A]">Controller</th>
                  <th className="py-4 px-4 text-center">CFO</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Monthly financial statements', book: true, ctrl: true, cfo: true },
                  { feature: 'Bank reconciliation', book: true, ctrl: true, cfo: true },
                  { feature: 'Transaction categorization', book: true, ctrl: true, cfo: true },
                  { feature: 'Budget vs. actual analysis', book: false, ctrl: true, cfo: true },
                  { feature: 'KPI dashboard', book: false, ctrl: true, cfo: true },
                  { feature: 'Cash flow forecasting (13-week)', book: false, ctrl: true, cfo: true },
                  { feature: 'Sales tax filing', book: false, ctrl: true, cfo: true },
                  { feature: 'Board presentations', book: false, ctrl: false, cfo: true },
                  { feature: '3-5 year financial model', book: false, ctrl: false, cfo: true },
                  { feature: 'Capital raise support', book: false, ctrl: false, cfo: true },
                  { feature: 'M&A due diligence', book: false, ctrl: false, cfo: true },
                  { feature: 'Consultation hours/month', book: '2', ctrl: '5', cfo: '15' },
                  { feature: 'Initial commitment', book: 'Month-to-month', ctrl: '6 months', cfo: '12 months' }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}>
                    <td className="py-3 px-6 font-medium text-[#3E4B55]">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.book === 'boolean' ? (
                        row.book ? <Check className="w-5 h-5 text-[#C47F2A] mx-auto" /> : <X className="w-5 h-5 text-[#6B7C8C] mx-auto" />
                      ) : (
                        <span className="text-[#6B7C8C]">{row.book}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.ctrl === 'boolean' ? (
                        row.ctrl ? <Check className="w-5 h-5 text-[#C47F2A] mx-auto" /> : <X className="w-5 h-5 text-[#6B7C8C] mx-auto" />
                      ) : (
                        <span className="text-[#6B7C8C]">{row.ctrl}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.cfo === 'boolean' ? (
                        row.cfo ? <Check className="w-5 h-5 text-[#C47F2A] mx-auto" /> : <X className="w-5 h-5 text-[#6B7C8C] mx-auto" />
                      ) : (
                        <span className="text-[#6B7C8C]">{row.cfo}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-[#3E4B55] mb-6">Common Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-[#3E4B55] mb-2">What if my business is between tiers?</h4>
              <p className="text-[#6B7C8C]">
                We'll customize a package for you. Schedule a discovery call and we'll provide a custom quote based on your specific needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#3E4B55] mb-2">Do you require long-term contracts?</h4>
              <p className="text-[#6B7C8C]">
                Bookkeeping tier is month-to-month. Controller has a 6-month minimum, CFO has 12 months. All tiers auto-renew and can be cancelled with notice.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#3E4B55] mb-2">What if I need to upgrade or downgrade?</h4>
              <p className="text-[#6B7C8C]">
                You can upgrade anytime. Downgrades are allowed after your minimum commitment period.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#3E4B55] mb-2">What technology do you use?</h4>
              <p className="text-[#6B7C8C]">
                QuickBooks Online (required), Microsoft 365, ShareFile document portal, and custom automation workflows. We integrate with your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center bg-[#3E4B55] rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Tier Is Right?
          </h2>
          <p className="text-lg text-[#D4DBE2] mb-8">
            Schedule a 30-minute discovery call. We'll review your needs and recommend the best fit.
          </p>
          <button
            onClick={() => onCtaClick()}
            className="bg-[#C47F2A] hover:bg-[#A86A1F] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Discovery Call
          </button>
          <p className="text-sm text-[#D4DBE2] mt-4">
            Free consultation • No commitment • Custom quote in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
