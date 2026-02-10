import React from 'react';
import { Check, Clock, TrendingUp, Shield } from 'lucide-react';
import { LeadData } from '../types';

interface BookkeepingProps {
  onCtaClick: (data?: LeadData) => void;
}

const Bookkeeping: React.FC<BookkeepingProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#D4DBE2]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3E4B55] mb-6">
            Bookkeeping Services
          </h1>
          <p className="text-xl text-[#6B7C8C] mb-8">
            Monthly bookkeeping for growing businesses. Accurate books, on time, every time.
          </p>
          <div className="flex items-center justify-center gap-4 text-[#C47F2A] font-semibold">
            <span className="text-3xl">$2,000 - $3,500</span>
            <span className="text-lg text-[#6B7C8C]">per month</span>
          </div>
        </div>
      </section>

      {/* Target Client */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-8 text-center">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">$500K - $3M</div>
              <div className="text-[#6B7C8C]">Annual Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">50 - 200</div>
              <div className="text-[#6B7C8C]">Transactions/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">Single Entity</div>
              <div className="text-[#6B7C8C]">Straightforward Ops</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-12 text-center">
            What's Included
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Deliverables */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#3E4B55] mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C47F2A]" />
                Monthly Deliverables
              </h3>
              <ul className="space-y-3">
                {[
                  'Profit & Loss Statement',
                  'Balance Sheet',
                  'Cash Flow Statement',
                  'Bank & credit card reconciliation',
                  'Transaction categorization',
                  'A/P and A/R entry',
                  'Management reports'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#6B7C8C]">
                    <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Tools */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#3E4B55] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C47F2A]" />
                Support & Tools
              </h3>
              <ul className="space-y-3">
                {[
                  'Unlimited email support',
                  'Up to 2 hours/month consultation',
                  'Secure document portal (ShareFile)',
                  'QuickBooks Online optimization',
                  'Automated workflow alerts',
                  'Monthly close meeting (optional)',
                  'Financial statement PDFs'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#6B7C8C]">
                    <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-12 text-center">
            Monthly Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5th
              </div>
              <div className="font-semibold text-[#3E4B55] mb-2">You Submit</div>
              <div className="text-sm text-[#6B7C8C]">Bank statements, receipts, invoices</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                10th
              </div>
              <div className="font-semibold text-[#3E4B55] mb-2">We Complete</div>
              <div className="text-sm text-[#6B7C8C]">Data entry & reconciliation</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                12th
              </div>
              <div className="font-semibold text-[#3E4B55] mb-2">You Review</div>
              <div className="text-sm text-[#6B7C8C]">Answer questions within 2 days</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                15th
              </div>
              <div className="font-semibold text-[#3E4B55] mb-2">Finalized</div>
              <div className="text-sm text-[#6B7C8C]">Books closed, financials delivered</div>
            </div>
          </div>
          <p className="text-center text-sm text-[#6B7C8C] mt-8">
            Late submissions may delay delivery. We'll communicate revised dates within 1 business day.
          </p>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-8 text-center">
            Service Limitations
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-[#6B7C8C] mb-6">
              This tier does <strong>NOT</strong> include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Tax preparation or filing',
                'Payroll processing',
                'AP payment processing',
                'AR collections',
                'Budgeting or forecasting',
                'Multi-entity consolidation',
                'Audit support',
                'Attestation services'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#6B7C8C]">
                  <div className="w-2 h-2 bg-[#C47F2A] rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#C47F2A] font-semibold mt-6">
              Need more? Upgrade to Controller tier →
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#3E4B55]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Clean Up Your Books?
          </h2>
          <p className="text-xl text-[#D4DBE2] mb-8">
            Get accurate financials delivered by the 15th of every month. No long-term contracts.
          </p>
          <button
            onClick={() => onCtaClick({ service: 'Bookkeeping', budget: '$2,000-3,500/month' })}
            className="bg-[#C47F2A] hover:bg-[#A86A1F] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Discovery Call
          </button>
          <p className="text-sm text-[#D4DBE2] mt-4">
            30-minute call • No commitment • Custom quote in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Bookkeeping;
