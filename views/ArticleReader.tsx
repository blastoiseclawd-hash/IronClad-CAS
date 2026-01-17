import React from 'react';
import { ChevronLeft, Calendar, User } from 'lucide-react';
import { Article } from '../types';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
}

const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack }) => {
  return (
    <div className="bg-[#D4DBE2] min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-[#0B1F3A] font-semibold mb-8 hover:text-[#C47F2A] transition-colors"
        >
          <ChevronLeft size={20} /> Back to Insights
        </button>
        <article className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-[#0B1F3A] p-12 text-white">
            <div className="flex items-center gap-4 text-[#D4DBE2] text-sm mb-4">
                <span className="flex items-center gap-1"><Calendar size={14}/> {article.date}</span>
                <span className="flex items-center gap-1"><User size={14}/> IronClad Team</span>
                <span className="text-[#C47F2A] font-bold px-2 py-0.5 bg-[#C47F2A]/10 rounded border border-[#C47F2A]/30 uppercase text-xs">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
          </div>
          <div className="p-12">
             <div 
                className="prose prose-lg text-[#0B1F3A]/80 prose-headings:text-[#0B1F3A] prose-strong:text-[#0B1F3A] max-w-none" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
             />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleReader;