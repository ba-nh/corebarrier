import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Added icons for mobile menu
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionDashboard } from './components/SolutionDashboard';
import { ComparisonTable } from './components/ComparisonTable';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 font-sans selection:bg-brand-500/30">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-dark-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">솔루션</a>
            <a href="#comparison" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">비교 분석</a>
            <a href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">요금제</a>
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
            <button onClick={openModal} className="text-sm font-medium text-slate-300 hover:text-white">
                로그인
            </button>
            <Button size="sm" onClick={openModal}>무료 데모</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <Button size="sm" onClick={openModal}>데모 신청</Button>
             <button 
              onClick={toggleMobileMenu}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-dark-900 border-b border-slate-800 animate-in slide-in-from-top-5 duration-200 shadow-2xl">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="#solution" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                솔루션 기능
              </a>
              <a 
                href="#comparison" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                경쟁사 비교
              </a>
              <a 
                href="#pricing" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                요금제 안내
              </a>
              <div className="border-t border-slate-800 my-2 pt-2">
                 <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="w-full text-left px-4 py-3 text-base font-medium text-brand-400 hover:text-brand-300 hover:bg-slate-800 rounded-lg"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero onCtaClick={openModal} />
        <ProblemSection />
        <SolutionDashboard />
        <div id="comparison">
          <ComparisonTable />
        </div>
        <div id="pricing">
          <Pricing onCtaClick={openModal} />
        </div>
      </main>

      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;