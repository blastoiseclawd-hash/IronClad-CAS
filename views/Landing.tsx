import React from 'react';
import { 
  ArrowRight, 
  TrendingDown, 
  AlertTriangle, 
  Hammer, 
  PieChart, 
  X, 
  CheckCircle2, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import Button from '../components/Button';
import ProfitLeakDetector from '../components/ProfitLeakDetector';
import Contact from '../components/Contact';

interface LandingProps {
  onCtaClick: () => void;
}

const Hero: React.FC<LandingProps> = ({ onCtaClick }) => (
  <div id="top" className="relative bg-[#D4DBE2] overflow-hidden min-h-[90vh] flex items-center border-b border-[#0B1F3A]/20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
        className="w-full h-full object-cover" 
        alt="Modern Office" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4DBE2]/95 via-[#D4DBE2]/85 to-[#D4DBE2]/50"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F3A] border border-[#C47F2A]/30 text-[#C47F2A] text-xs md:text-sm font-semibold uppercase tracking-wider shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#C47F2A] animate-pulse"></span> For Growing SMBs
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1F3A] leading-[1.1]">
            Financial Clarity for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] to-[#254673]">
              Growing Businesses.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0B1F3A]/90 font-medium max-w-lg">
            Turn your data into <strong className="text-[#C47F2A]">decisions</strong>. We provide the financial infrastructure that allows businesses to scale without the chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={onCtaClick} variant="primary">
              Schedule Strategy Meeting <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('symptoms')?.scrollIntoView({ behavior: 'smooth'})} 
              className="bg-white/50"
            >
              Why are we stalling?
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Symptoms = () => (
  <div id="symptoms" className="bg-[#0B1F3A] py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Does this sound like your month-end?</h2>
        <p className="text-[#D4DBE2] text-lg">Most business owners are flying blind, making decisions based on bank balances rather than data.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {icon: TrendingDown, title: "The Cash Paradox", text: "Profit on the P&L, but no cash for payroll or expansion?"},
          {icon: AlertTriangle, title: "The Growth Ceiling", text: "Stuck at current revenue because your back-office can't handle more?"},
          {icon: Hammer, title: "The Leaky Bucket", text: "Suspect you are overspending on software, subs, and overhead?"},
          {icon: PieChart, title: "Margin Erosion", text: "Revenue is up, but net profit is somehow going down."}
        ].map((item, i) => (
          <div key={i} className="bg-[#D4DBE2] p-8 rounded-xl border border-[#C47F2A]/20 hover:border-[#C47F2A] group shadow-lg transition-all duration-300">
            <div className="bg-[#0B1F3A] w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-[#D4DBE2]/20 shadow-md">
              <item.icon className="text-[#C47F2A] h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
            <p className="text-[#0B1F3A]/80 italic border-l-2 border-[#C47F2A] pl-4">"{item.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Relief = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <div id="solution" className="bg-[#D4DBE2] py-24 relative">
    <div className="absolute inset-0 bg-[#0B1F3A]/5"></div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">The Antidote to Chaos.</h2>
        <p className="text-xl text-[#0B1F3A]/80">We don't sell spreadsheets. We sell confidence.</p>
      </div>
      <div className="space-y-4">
        {[
          {title: "Financial Visibility", old: "Waiting 45 days for monthly reports.", new: "Real-time dashboards and Unit Economics."},
          {title: "Integrated Systems", old: "Manual entry from CRM to QuickBooks.", new: "Seamless tech stack integration."},
          {title: "Strategic Forecasting", old: "Decisions based on gut feel.", new: "13-Week Cash Flow Forecasts & Budgets."}
        ].map((item, i) => (
          <div key={i} className="grid md:grid-cols-12 gap-6 items-center border-b border-[#0B1F3A]/10 py-12 last:border-0 hover:bg-white/30 transition-colors p-4 rounded-lg">
            <div className="md:col-span-4"><h3 className="text-2xl font-bold text-[#0B1F3A]">{item.title}</h3></div>
            <div className="md:col-span-4 p-6 bg-[#0B1F3A] rounded-lg text-white/80 shadow-inner">
                <X size={16} className="inline text-red-300 mr-2"/>"{item.old}"
            </div>
            <div className="md:col-span-4 p-6 bg-white rounded-lg border-l-4 border-[#C47F2A] text-[#0B1F3A] font-bold shadow-xl">
                <CheckCircle2 size={16} className="inline text-[#C47F2A] mr-2"/>"{item.new}"
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button onClick={onCtaClick} variant="primary" className="mx-auto text-lg px-12 py-5">Schedule Strategy Meeting</Button>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ title, target, items, popular, onCtaClick }: any) => (
  <div className={`relative bg-[#102A4C] rounded-2xl p-8 border ${popular ? 'border-[#C47F2A] shadow-2xl shadow-[#C47F2A]/10 transform md:-translate-y-4' : 'border-[#D4DBE2]/10'} flex flex-col h-full transition-all duration-300 hover:shadow-xl`}>
    {popular && (
        <div className="absolute top-0 right-0 bg-[#C47F2A] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Most Popular</div>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-[#D4DBE2] text-sm mt-1 pb-6 border-b border-[#D4DBE2]/20 mb-6">{target}</p>
    <ul className="space-y-4 mb-8 flex-grow">
      {items.map((item: string, idx: number) => (
        <li key={idx} className="flex gap-3 text-slate-300 text-sm">
          <Check className="text-[#C47F2A] h-5 w-5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <Button onClick={onCtaClick} variant={popular ? 'primary' : 'secondary'} className="w-full text-sm py-3">Start {title}</Button>
  </div>
);

const Services = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <div id="services" className="bg-[#051120] py-24 border-y border-[#D4DBE2]/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Services.</h2>
        <p className="text-[#D4DBE2] text-lg">Scalable financial solutions for every stage of business.</p>
      </div>
      <div className="grid lg:grid-cols-4 gap-6 mb-12 items-start">
        <ServiceCard 
          title="Diagnostic"
          target="Step 1: Identify the issues."
          onCtaClick={onCtaClick}
          items={[
            "Deep Dive Financial Review",
            "Process & Tech Stack Audit",
            "Profitability Analysis",
            "60-90 Day Action Plan"
          ]}
        />
        <ServiceCard 
          title="Bookkeeping"
          target="Essential compliance."
          onCtaClick={onCtaClick}
          items={[
            "Cash Basis Accounting",
            "15-Day Monthly Close",
            "Monthly Financial Package",
            "Bank Reconciliations"
          ]}
        />
        <ServiceCard 
          title="Controller"
          target="For growth controls."
          popular={true}
          onCtaClick={onCtaClick}
          items={[
            "10-Day Monthly Close",
            "Cash or Accrual Basis",
            "Quarterly Advisory Meeting",
            "KPI Dashboarding",
            "Budget vs. Actuals"
          ]}
        />
        <ServiceCard 
          title="Outsourced CFO"
          target="Strategic leadership."
          onCtaClick={onCtaClick}
          items={[
            "Financial Planning & Analysis",
            "13-Week Cash Flow Forecast",
            "Strategic Growth Planning",
            "Capital Allocation",
            "Fundraising Support"
          ]}
        />
      </div>
      
      <div className="bg-[#102A4C] rounded-2xl border border-[#D4DBE2]/30 p-8 md:p-12 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Tax Services & Strategy</h3>
            <p className="text-[#D4DBE2] text-lg mb-6">Don't wait until April. We provide proactive tax planning to minimize liability and avoid surprises.</p>
            <Button onClick={onCtaClick} variant="outline" className="text-white border-white hover:bg-white hover:text-[#0B1F3A]">Discuss Tax Planning</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Quarterly Advisory", "Estimate Prep", "Tax Strategy", "Tax Preparation"].map((t, i) => (
              <div key={i} className="bg-[#0B1F3A] p-4 rounded-lg border border-[#D4DBE2]/10 text-white font-bold flex items-center justify-center text-center">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Niche = () => (
  <div id="proof" className="bg-[#0B1F3A] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-[#D4DBE2] text-xs font-bold uppercase tracking-[0.2em] mb-8">We stay in our lane so you can dominate yours</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-right border-r border-[#D4DBE2]/20 pr-12 hidden md:block">
          <p className="text-2xl text-[#D4DBE2] font-light">We <span className="text-white font-bold">specialize in working with</span> growing SMBs.</p>
        </div>
        <div className="text-left">
          <p className="text-2xl text-white font-bold mb-4">We partner with businesses ready to scale.</p>
          <div className="flex flex-wrap gap-3">
            {["Service Based", "eCommerce", "Professional Services", "Technology", "Healthcare", "Retail"].map(t => (
                <span key={t} className="bg-[#102A4C] text-[#D4DBE2] border border-[#D4DBE2]/30 px-4 py-2 rounded-full text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gatekeeper = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <div className="bg-[#C47F2A] py-24 relative overflow-hidden">
     <div className="absolute inset-0 bg-[#000000]/10"></div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <ShieldCheck className="w-16 h-16 text-white/90 mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See if your business qualifies for IronClad CAS.</h2>
      <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">We are selective about our partners. We look for owners who are tired of guessing and ready to build a transferable asset.</p>
      <button onClick={onCtaClick} className="bg-[#0B1F3A] hover:bg-[#102A4C] text-white font-bold py-6 px-12 rounded-lg text-xl shadow-2xl transition-all transform hover:scale-105">
        Schedule Strategy Meeting
      </button>
    </div>
  </div>
);

const Landing: React.FC<LandingProps> = ({ onCtaClick }) => {
  return (
    <>
      <Hero onCtaClick={onCtaClick} />
      <Symptoms />
      <ProfitLeakDetector />
      <Relief onCtaClick={onCtaClick} />
      <Services onCtaClick={onCtaClick} />
      <Niche />
      <Contact />
      <Gatekeeper onCtaClick={onCtaClick} />
    </>
  );
};

export default Landing;