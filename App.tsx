import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import Landing from './views/Landing';
import Articles from './views/Articles';
import ArticleReader from './views/ArticleReader';
import About from './views/About';
import { Article, ViewState, LeadData } from './types';
import { trackPageView, trackEvent } from './services/analyticsService';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setView] = useState<ViewState>('landing');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [prefillData, setPrefillData] = useState<LeadData | undefined>(undefined);

  // Track Page Views when currentView changes
  useEffect(() => {
    trackPageView(`/${currentView}`);
  }, [currentView]);

  const handleCtaClick = (data?: LeadData) => {
    // Track the "Attempt to Book" event
    trackEvent('open_booking_modal', {
      source: currentView,
      prefilled: !!data
    });
    
    setPrefillData(data);
    setIsModalOpen(true);
  };

  const handleReadArticle = (article: Article) => {
    trackEvent('read_article', {
      article_title: article.title,
      category: article.category
    });
    setSelectedArticle(article);
    setView('article-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'articles':
        return <Articles onRead={handleReadArticle} />;
      
      case 'article-view':
        return selectedArticle ? (
          <ArticleReader 
            article={selectedArticle} 
            onBack={() => setView('articles')} 
          />
        ) : <Articles onRead={handleReadArticle} />;
        
      case 'about':
        return <About onCtaClick={() => handleCtaClick()} />;
      case 'landing':
      default:
        return <Landing onCtaClick={handleCtaClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#D4DBE2] font-sans selection:bg-[#C47F2A] selection:text-white">
      <Navbar 
        onCtaClick={() => handleCtaClick()} 
        currentView={currentView} 
        setView={setView} 
      />
      
      <main className="min-h-screen">
        {renderContent()}
      </main>

      <Footer />
      <CalendlyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        prefillData={prefillData}
      />
    </div>
  );
};

export default App;