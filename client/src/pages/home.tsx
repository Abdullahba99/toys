import { useState, useCallback } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { StatsBar } from '@/components/stats-bar';
import { ProductTabs } from '@/components/product-tabs';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('lilia');

  const handleSelectTeam = useCallback((team: 'lilia' | 'adam') => {
    setActiveTab(team);
  }, []);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection onSelectTeam={handleSelectTeam} />
        <StatsBar />
        <ProductTabs activeTab={activeTab} onTabChange={handleTabChange} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
