import React, { useState } from 'react';
import { ReaderProvider, useReader } from './context/ReaderContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ReaderView } from './components/ReaderView';
import { HomeHero } from './components/HomeHero';
import { TableOfContents } from './components/TableOfContents';
import { RoadmapView } from './components/RoadmapView';
import { CodePlayground } from './components/CodePlayground';
import { AuthorModal } from './components/AuthorModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { getThemeClasses } from './utils/themeStyles';

const MainAppContent: React.FC = () => {
  const { theme, activeTab } = useReader();
  const themeClasses = getThemeClasses(theme);

  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${themeClasses.pageBg}`}>
      {/* Top Header Navigation */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content Area based on activeTab */}
      <main className="flex-1">
        {activeTab === 'home' && <HomeHero />}
        {activeTab === 'contents' && <TableOfContents />}
        {activeTab === 'reader' && (
          <div className="flex w-full">
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <div className="flex-1 min-w-0">
              <ReaderView
                onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
              />
            </div>
          </div>
        )}
        {activeTab === 'roadmap' && <RoadmapView />}
        {activeTab === 'playground' && <CodePlayground />}
        {activeTab === 'author' && <AuthorModal />}
      </main>

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Footer (only show on non-reader tabs or at the end) */}
      {activeTab !== 'reader' && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <ReaderProvider>
      <MainAppContent />
    </ReaderProvider>
  );
}
