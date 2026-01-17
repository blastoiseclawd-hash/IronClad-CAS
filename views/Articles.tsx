import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';

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

interface ArticlesProps {
  onRead: (article: Article) => void;
}

const Articles: React.FC<ArticlesProps> = ({ onRead }) => {
  return (
    <div className="bg-[#D4DBE2] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0B1F3A]">IronClad Insights.</h2>
            <p className="text-[#0B1F3A]/70 mt-4 text-lg">Straight talk on money, strategy, and growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articlesData.map(article => (
            <div 
                key={article.id} 
                onClick={() => onRead(article)} 
                className="bg-[#0B1F3A] rounded-xl p-8 cursor-pointer hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-[#C47F2A] shadow-xl group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[#C47F2A] text-xs font-bold uppercase tracking-wider mb-2">{article.category}</span>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#C47F2A] transition-colors">{article.title}</h3>
                <p className="text-[#D4DBE2] text-sm leading-relaxed">{article.excerpt}</p>
              </div>
              <div className="flex items-center text-[#C47F2A] font-bold text-sm mt-6">
                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;