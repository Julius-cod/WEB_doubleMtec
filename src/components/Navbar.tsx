import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  Calculator
} from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';
import logoImg from '../assets/logo.asset1.png';

interface NavbarProps {
  onOpenCalculator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Monitor CCTV', href: '#cctv-demo' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'A Empresa', href: '#sobre' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080C15]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900/90 border border-blue-500/30 p-1 shadow-lg group-hover:border-blue-400 transition-colors">
              <img 
                src={logoImg} 
                alt="Double M Tec Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if png has any loading issue
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  DOUBLE M TEC
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase bg-blue-500/20 text-blue-400 rounded border border-blue-500/30">
                  {COMPANY.experienceYears} ANOS
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                Security • Technology • Innovation
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-blue-400" />
              Simular Orçamento
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 rounded-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080C15]/98 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-lg"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Conversar no WhatsApp
            </a>
            <a
              href={`tel:+${COMPANY.whatsappNumber}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-800/90 text-slate-300 hover:text-white font-medium text-sm rounded-xl border border-slate-700/80"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
