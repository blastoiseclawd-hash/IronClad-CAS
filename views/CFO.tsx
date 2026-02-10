import React from 'react';
import { Check, TrendingUp, Target, Users, Briefcase, LineChart, DollarSign } from 'lucide-react';
import { LeadData } from '../types';

interface CFOProps {
  onCtaClick: (data?: LeadData) => void;
}

const CFO: React.FC<CFOProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#D4DBE2]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3E4B55] mb-6">
            CFO Services
          </h1>
          <p className="text-xl text-[#6B7C8C] mb-8">
            Fractional CFO for high-growth companies. Executive financial strategy, leadership, and operational oversight.
          </p>
          <div className="flex items-center justify-center gap-4 text-[#C47F2A] font-semibold">
            <span className="text-3xl">$8,000 - $15,000+</span>
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
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">$10M - $100M+</div>
              <div className="text-[#6B7C8C]">Annual Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">500+</div>
              <div className="text-[#6B7C8C]">Transactions/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C47F2A] mb-2">High-Growth</div>
              <div className="text-[#6B7C8C]">Investors / Transaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-12 text-center">
            Everything in Controller, Plus CFO-Level Strategy:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Financial Strategy */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Financial Strategy
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• 3-5 year financial modeling</li>
                <li>• Annual operating plan</li>
                <li>• Capital allocation strategy</li>
                <li>• Profitability optimization</li>
              </ul>
            </div>

            {/* Executive Reporting */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Executive Reporting
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Board-ready presentations</li>
                <li>• Executive KPI dashboards</li>
                <li>• Scenario & sensitivity modeling</li>
                <li>• Cohort & LTV analysis</li>
              </ul>
            </div>

            {/* Capital Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Capital Management
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Treasury strategy</li>
                <li>• Debt refinancing analysis</li>
                <li>• Capital raise preparation</li>
                <li>• Investor relations (financial)</li>
              </ul>
            </div>

            {/* Operational Finance */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Operational Finance
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Pricing strategy & margin analysis</li>
                <li>• Cost structure optimization</li>
                <li>• Department P&L accountability</li>
                <li>• Headcount planning & ROI</li>
              </ul>
            </div>

            {/* Risk & Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Risk & Compliance
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Financial controls design</li>
                <li>• Audit management</li>
                <li>• SOX compliance readiness</li>
                <li>• Fraud risk assessment</li>
              </ul>
            </div>

            {/* Executive Participation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C47F2A] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#3E4B55] mb-3">
                Executive Participation
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7C8C]">
                <li>• Monthly CFO review (90-120 min)</li>
                <li>• Quarterly board attendance</li>
                <li>• Executive team meetings</li>
                <li>• 15 hours/month consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project-Based Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-8 text-center">
            Additional Project-Based Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-[#C47F2A] rounded-lg">
              <h3 className="font-bold text-[#3E4B55] mb-2">M&A Due Diligence</h3>
              <p className="text-sm text-[#6B7C8C] mb-3">Buy-side or sell-side financial analysis</p>
              <p className="text-[#C47F2A] font-semibold">$10K - $75K</p>
            </div>
            <div className="p-6 border-2 border-[#C47F2A] rounded-lg">
              <h3 className="font-bold text-[#3E4B55] mb-2">Fundraising Support</h3>
              <p className="text-sm text-[#6B7C8C] mb-3">Financial model, deck, data room</p>
              <p className="text-[#C47F2A] font-semibold">$15K - $50K</p>
            </div>
            <div className="p-6 border-2 border-[#C47F2A] rounded-lg">
              <h3 className="font-bold text-[#3E4B55] mb-2">IPO Readiness</h3>
              <p className="text-sm text-[#6B7C8C] mb-3">Assessment and preparation</p>
              <p className="text-[#C47F2A] font-semibold">$25K - $100K</p>
            </div>
            <div className="p-6 border-2 border-[#C47F2A] rounded-lg">
              <h3 className="font-bold text-[#3E4B55] mb-2">Interim Full-Time CFO</h3>
              <p className="text-sm text-[#6B7C8C] mb-3">3-6 month engagement</p>
              <p className="text-[#C47F2A] font-semibold">$20K - $30K/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Cadence */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3E4B55] mb-12 text-center">
            Executive Communication Cadence
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-[#3E4B55] mb-4">Monthly</h3>
              <ul className="space-y-3 text-[#6B7C8C]">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>CFO Review (90-120 min with CEO/COO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>Executive financial package (PDF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>KPI dashboard (live, refreshes daily)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>Cash flow forecast (updated weekly)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-[#3E4B55] mb-4">Quarterly & Annual</h3>
              <ul className="space-y-3 text-[#6B7C8C]">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>Board presentation deck</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>Rolling forecast update</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>Annual operating plan & budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#C47F2A] flex-shrink-0 mt-0.5" />
                  <span>3-5 year strategic model</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-12 px-6 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6B7C8C]">
            <strong className="text-[#3E4B55]">Initial commitment:</strong> 12 months
            <span className="block text-sm mt-2">(Ensures full-cycle planning & execution • Renewable annually)</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#3E4B55]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Executive-Level Financial Leadership?
          </h2>
          <p className="text-xl text-[#D4DBE2] mb-8">
            Strategic planning. Investor relations. Transaction support. Board participation.
          </p>
          <button
            onClick={() => onCtaClick({ service: 'CFO', budget: '$8,000-15,000+/month' })}
            className="bg-[#C47F2A] hover:bg-[#A86A1F] text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Executive Briefing
          </button>
          <p className="text-sm text-[#D4DBE2] mt-4">
            90-minute strategy session • No commitment • Custom proposal in 48 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default CFO;
