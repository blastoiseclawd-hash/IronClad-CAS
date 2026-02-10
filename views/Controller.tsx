import React from 'react';
import { Check, Clock, TrendingUp, Shield, Zap, LineChart } from 'lucide-react';
import { LeadData } from '../types';

interface ControllerProps {
  onCtaClick: (data?: LeadData) => void;
}

const Controller: React.FC<ControllerProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#D4DBE2]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3E4B55] mb-6">
            Controller Services
          </h1>
          <p className="text-xl text-[#6B7C8C] mb-8">
            Outsourced Controller for growing businesses. Strategic financial management + robust reporting.
          </p>
          <div className="flex items-center justify-center gap-4 text-[#C47F2A] font-semibold">
            <span className="text-3xl">$4,000 - $7,000</span>
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
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">$3M - $15M</div>
              <div className="text-[#6B7C8C]">Annual Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">200 - 500</div>
              <div className="text-[#6B7C8C]">Transactions/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">Multi-Entity</div>
              <div className="text-[#6B7C8C]">Growing Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-12 text-center">
            Everything in Bookkeeping, Plus:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Strategic Reporting */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Strategic Reporting
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Budget vs. Actual analysis</li>
                <li>• KPI dashboard (custom metrics)</li>
                <li>• Department/location P&L</li>
                <li>• Board-ready presentations</li>
              </ul>
            </div>

            {/* Cash Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Cash Management
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• 13-week cash flow forecast</li>
                <li>• AP aging & payment planning</li>
                <li>• AR aging & collections support</li>
                <li>• Working capital optimization</li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Compliance
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Sales tax filing (up to 3 states)</li>
                <li>• 1099 prep & e-filing</li>
                <li>• Annual budget creation</li>
                <li>• Tax accountant coordination</li>
              </ul>
            </div>
          </div>

          {/* Full Feature List */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#3E4B55] mb-6">Complete Service Includes:</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                'All Bookkeeping tier services',
                'Multi-entity consolidation',
                'Monthly financial review call (60 min)',
                'Quarterly business review (90 min)',
                'Up to 5 hours/month consultation',
                'Accrual accounting & revenue recognition',
                'Fixed asset tracking & depreciation',
                'Loan covenant compliance monitoring',
                'Process documentation',
                'QuickBooks optimization',
                'Unlimited email/Slack support',
                'Annual budget creation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[#6B7C8C]">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
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
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                5th
              </div>
              <div className="font-semibold text-[#3E4B55] text-sm mb-1">Submit</div>
              <div className="text-xs text-[#6B7C8C]">Documents</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                7th
              </div>
              <div className="font-semibold text-[#3E4B55] text-sm mb-1">Review</div>
              <div className="text-xs text-[#6B7C8C]">Preliminary</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                10th
              </div>
              <div className="font-semibold text-[#3E4B55] text-sm mb-1">Answer</div>
              <div className="text-xs text-[#6B7C8C]">Questions</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                12th
              </div>
              <div className="font-semibold text-[#3E4B55] text-sm mb-1">Deliver</div>
              <div className="text-xs text-[#6B7C8C]">Financials</div>
            </div>
            <div className="text-center">
              <div className="bg-[#C47F2A] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                15th
              </div>
              <div className="font-semibold text-[#3E4B55] text-sm mb-1">Review</div>
              <div className="text-xs text-[#6B7C8C]">Call</div>
            </div>
          </div>
          <div className="mt-8 p-4 bg-[#F5F7FA] rounded-lg">
            <p className="text-sm text-[#6B7C8C] text-center">
              <strong className="text-[#C47F2A]">Accelerated close available:</strong> Financials by 8th for an additional $500/month
            </p>
          </div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#3E4B55] mb-4">Service Limitations</h3>
            <p className="text-[#6B7C8C] mb-4">
              This tier does <strong>NOT</strong> include:
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                'Tax preparation or planning',
                'Payroll processing',
                'CFO-level strategic planning',
                'Audit services or attestation',
                'Legal or M&A due diligence',
                'Fundraising support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#6B7C8C]">
                  <div className="w-2 h-2 bg-[#C47F2A] rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#C47F2A] font-semibold">
              Need CFO-level strategy? Upgrade to CFO tier →
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-12 px-6 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6B7C8C]">
            <strong className="text-[#3E4B55]">Initial commitment:</strong> 6 months minimum
            <span className="block text-sm mt-2">(Month-to-month after initial term • Ensures ROI on onboarding investment)</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#3E4B55]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Controller-Level Support?
          </h2>
          <p className="text-xl text-[#D4DBE2] mb-8">
            Strategic financial management. Robust reporting. Operational oversight.
          </p>
          <button
            onClick={() => onCtaClick({ service: 'Controller', budget: '$4,000-7,000/month' })}
            className="bg-[#C47F2A] hover:bg-[#A86A1F] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Discovery Call
          </button>
          <p className="text-sm text-[#D4DBE2] mt-4">
            60-minute strategy session • No commitment • Custom proposal in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Controller;
