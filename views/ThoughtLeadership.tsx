import React from 'react';
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, ChevronRight, Mail } from 'lucide-react';
import { Article } from '../types';
import Button from '../components/Button';

// Data moved here to be the source of truth for Thought Leadership
export const articlesData: Article[] = [
  {
    id: 1,
    title: "Profit vs. Cash: Why Your Bank Account Doesn't Match Your P&L",
    excerpt: "You showed a net profit of $50k last month, but you can't make payroll. Here is the silent killer hiding on your Balance Sheet.",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    category: "Financial Strategy",
    content: `
      <p class="mb-4 text-lg">It’s the most common question we get: "My accountant says I made money. Where is it?"</p>
      <p class="mb-4">For growing SMBs, profit is an accounting opinion, but cash is a fact. If you are growing fast, your cash is likely tied up in accounts receivable (customers who haven't paid) or inventory (cash sitting on shelves).</p>
      <h3 class="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">The Growth Cash Trap</h3>
      <p class="mb-4">We help you bridge the gap by implementing a 13-week cash flow forecast. This moves you from "hoping" payroll clears to knowing exactly what your cash position will be three months from now.</p>
      <p class="mb-4">This isn't about being conservative. It's about having the ammunition to be aggressive when the timing is right.</p>
    `
  },
  {
    id: 2,
    title: "The 'Founder's Trap': Moving from DIY to CEO",
    excerpt: "You are still approving every expense and running payroll yourself. It’s not saving you money; it’s costing you millions in lost strategic focus.",
    date: "Nov 03, 2023",
    readTime: "4 min read",
    category: "Operations",
    content: `
      <p class="mb-4 text-lg">At $2M revenue, the founder touches everything. At $10M, that habit becomes the bottleneck that kills the company.</p>
      <h3 class="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">The Controller Function</h3>
      <p class="mb-4">You need a gatekeeper. Someone who ensures the data is accurate, the bills are verified, and the reports are ready for decision-making—without you lifting a finger.</p> 
      <p class="mb-4">Our Controller services are designed to buy back your time. We install approval workflows, expense management systems, and automated reporting that gives you control without the busy work.</p>
    `
  },
  {
    id: 3,
    title: "Strategic Forecasting: How to Predict Your Next Quarter",
    excerpt: "Most businesses drive using the rearview mirror (last month's P&L). It's time to start looking through the windshield.",
    date: "Dec 15, 2023",
    readTime: "7 min read",
    category: "Advisory",
    content: `
      <p class="mb-4 text-lg">Historical financials tell you what happened. Strategic forecasting tells you what <em>could</em> happen.</p>
      <p class="mb-4">Whether it's modeling a new hire, opening a new location, or cutting a product line, you need a financial model that allows you to test scenarios before you spend the cash.</p>
      <h3 class="text-2xl font-bold text-[#0B1F3A] mt-8 mb-4">Scenario Planning</h3>
      <p class="mb-4">This is the core of our Outsourced CFO service. We build dynamic models that update with your actuals, allowing you to see the future impact of today's decisions.</p>
    `
  }
];

interface ThoughtLeadershipProps {
  onRead: (article: Article) => void;
  onCtaClick: () => void;
}

const ThoughtLeadership: React.FC<ThoughtLeadershipProps> = ({ onRead, onCtaClick }) => {
  const featuredArticle = articlesData[0];
  const secondaryArticles = articlesData.slice(1);

  return (
    <div className="bg-[#F0F4F8] min-h-screen">
      
      {/* Editorial Header */}
      <div className="bg-[#0B1F3A] text-white pt-20 pb-24 border-b-4 border-[#C47F2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#C47F2A] font-bold tracking-widest uppercase text-sm mb-4 block">IronClad Intelligence</span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-6 leading-tight">
              Thought Leadership <br/>
              <span className="text-[#D4DBE2] font-sans font-light text-3xl md:text-4xl">for the Modern Enterprise.</span>
            </h1>
            <p className="text-lg text-[#D4DBE2]/80 leading-relaxed max-w-2xl">
              Deconstructing financial complexity into actionable strategy. Our insights are designed for founders, CFOs, and investors who demand clarity.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-10">
        
        {/* Hero Article Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2 mb-16 group cursor-pointer border border-[#D4DBE2]" onClick={() => onRead(featuredArticle)}>
          <div className="bg-[#102A4C] relative h-64 md:h-auto overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A] to-[#254673] opacity-90"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="text-[#C47F2A] w-24 h-24 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="absolute bottom-6 left-6">
                <span className="bg-[#C47F2A] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">Featured Insight</span>
             </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#C47F2A] text-sm font-bold mb-4">
              <BookOpen size={16} />
              <span>{featuredArticle.readTime}</span>
              <span className="text-gray-300">|</span>
              <span>{featuredArticle.date}</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C47F2A] transition-colors">{featuredArticle.title}</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
            <div className="flex items-center text-[#0B1F3A] font-bold group-hover:translate-x-2 transition-transform">
              Read Full Analysis <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center justify-between border-b-2 border-[#0B1F3A] pb-4 mb-8">
              <h3 className="text-2xl font-bold text-[#0B1F3A]">Latest Perspectives</h3>
            </div>

            {secondaryArticles.map((article) => (
              <div 
                key={article.id} 
                className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-[#D4DBE2] pb-8 last:border-0"
                onClick={() => onRead(article)}
              >
                <div className="md:w-1/3 bg-[#D4DBE2] rounded-lg min-h-[140px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0B1F3A]/10 group-hover:bg-[#0B1F3A]/20 transition-colors"></div>
                    <Lightbulb className="text-[#0B1F3A] w-12 h-12 opacity-50" />
                </div>
                <div className="md:w-2/3">
                  <span className="text-[#C47F2A] font-bold text-xs uppercase tracking-wider mb-2 block">{article.category}</span>
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#C47F2A] transition-colors">{article.title}</h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center text-[#0B1F3A] text-sm font-bold">
                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#C47F2A]">
              <h4 className="font-bold text-[#0B1F3A] mb-4 uppercase tracking-wider text-sm">Topics</h4>
              <ul className="space-y-3">
                {["Financial Strategy", "Operational Efficiency", "Capital Allocation", "Market Analysis", "Leadership"].map(cat => (
                  <li key={cat} className="flex items-center justify-between group cursor-pointer border-b border-gray-100 pb-2 last:border-0">
                    <span className="text-slate-600 group-hover:text-[#C47F2A] transition-colors">{cat}</span>
                    <span className="text-[#D4DBE2] group-hover:text-[#C47F2A] text-xs">→</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-[#0B1F3A] p-8 rounded-lg shadow-xl text-center relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C47F2A] rounded-full opacity-20 blur-2xl"></div>
               <div className="relative z-10">
                  <h4 className="text-white font-bold text-xl mb-2">Need Custom Strategy?</h4>
                  <p className="text-[#D4DBE2] text-sm mb-6">Stop guessing. Start building a financial fortress.</p>
                  <Button onClick={onCtaClick} variant="primary" className="w-full text-sm">
                    Book Consultation
                  </Button>
               </div>
            </div>

            {/* Newsletter */}
             <div className="bg-[#D4DBE2] p-6 rounded-lg border border-[#0B1F3A]/10">
               <div className="flex items-center gap-3 mb-4 text-[#0B1F3A]">
                  <Mail size={20} />
                  <h4 className="font-bold">Intelligence Brief</h4>
               </div>
               <p className="text-sm text-slate-600 mb-4">Join 2,000+ founders receiving our weekly financial teardowns.</p>
               <input type="email" placeholder="Email Address" className="w-full p-2 mb-2 rounded border border-gray-300 text-sm focus:border-[#0B1F3A] outline-none" />
               <button className="w-full bg-[#0B1F3A] text-white text-xs font-bold uppercase py-2 rounded hover:bg-[#102A4C] transition-colors">Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ThoughtLeadership;