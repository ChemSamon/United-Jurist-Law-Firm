import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { BackToTop } from './components/common/BackToTop';

export const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <SearchProvider>
            <div className="min-h-screen flex flex-col bg-brand-bg dark:bg-dark-bg text-brand-text dark:text-dark-text transition-colors duration-300 font-sans selection:bg-brand-goldSoft selection:text-brand-goldDeep">
              <Header />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <Footer />
              <GlobalSearchModal />
              <BackToTop />
            </div>
          </SearchProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
