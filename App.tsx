import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import Landing from './views/Landing';
import Articles from './views/Articles';
import ArticleReader from './views/ArticleReader';
import About from './views/About';
import { Article, ViewState } from './types';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setView] = useState<ViewState>('landing');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleReadArticle = (article: Article) => {
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
        return <About onCtaClick={() => setIsModalOpen(true)} />;
      case 'landing':
      default:
        return <Landing onCtaClick={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#D4DBE2] font-sans selection:bg-[#C47F2A] selection:text-white">
      <Navbar 
        onCtaClick={() => setIsModalOpen(true)} 
        currentView={currentView} 
        setView={setView} 
      />
      
      <main className="min-h-screen">
        {renderContent()}
      </main>

      <Footer />
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;