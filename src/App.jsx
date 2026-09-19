import React, { useState, useEffect, useCallback } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';
import InquiryModal from './components/InquiryModal';
import NewsModal from './components/NewsModal';
import ThemeSelector from './components/ThemeSelector';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import InstitutionalTicker from './components/InstitutionalTicker';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HistoryPage from './pages/HistoryPage';
import ManagementPage from './pages/ManagementPage';
import StaffPage from './pages/StaffPage';
import CampusPage from './pages/CampusPage';
import WhySmsPage from './pages/WhySmsPage';
import AcademicsPage from './pages/AcademicsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  // Clean up any custom cursor artifacts to guarantee normal cursor
  useEffect(() => {
    document.body.style.cursor = '';
    const el = document.getElementById('custom-cursor-hide');
    if (el) el.remove();
  }, []);

  // Sync with browser URL hash (e.g. #about, #history, #gallery)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((pageId) => {
    if (pageId === currentPage) return;
    setPendingPage(pageId);
    setIsNavigating(true);
  }, [currentPage]);

  const handleTransitionComplete = useCallback(() => {
    if (pendingPage) {
      setCurrentPage(pendingPage);
      window.location.hash = pendingPage;
      window.scrollTo({ top: 0 });
      setPendingPage(null);
    }
    setIsNavigating(false);
  }, [pendingPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'history':
        return <HistoryPage onNavigate={navigateTo} />;
      case 'management':
        return <ManagementPage onNavigate={navigateTo} />;
      case 'staff':
        return <StaffPage onNavigate={navigateTo} />;
      case 'campus':
        return <CampusPage onNavigate={navigateTo} />;
      case 'why-sms':
        return <WhySmsPage onNavigate={navigateTo} />;
      case 'academics':
        return <AcademicsPage onNavigate={navigateTo} onOpenInquiry={() => setIsInquiryOpen(true)} />;
      case 'activities':
        return <ActivitiesPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'news':
        return <NewsPage onNavigate={navigateTo} onSelectNews={(item) => setSelectedNews(item)} />;
      case 'home':
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenInquiry={() => setIsInquiryOpen(true)}
            onSelectNews={(item) => setSelectedNews(item)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] selection:bg-navy-800 selection:text-gold-300 antialiased transition-colors duration-300 relative">
      {/* Luxury Initial Preloader & Page Navigation Wipe */}
      <PageTransition 
        isActive={isNavigating} 
        onComplete={handleTransitionComplete} 
        showInitialLoader={true} 
      />

      {/* 0. Glowing Golden Scroll Progress Line */}
      <ScrollProgress />

      {/* 0. Ambient Living Floating Light Orbs */}
      <AmbientBackground />

      {/* 1. Global Announcement & Direct Info Bar */}
      <TopBar
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* 2. Responsive Multi-Page Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* 2.5. Infinite Luxury Institutional Ticker Banner */}
      <InstitutionalTicker />

      {/* 3. Dedicated Active Page View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 4. Complete Footer with Multi-Page Links & Contact Details */}
      <ContactFooter
        onNavigate={navigateTo}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* 5. Interactive Admission Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* 6. Interactive News Modal */}
      {selectedNews && (
        <NewsModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      )}

      {/* 7. Interactive Theme Switcher Previewer */}
      <ThemeSelector />

      {/* 8. Back to Top Floating Button with Progress Ring */}
      <BackToTop />
    </div>
  );
}
