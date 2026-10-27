import React from 'react';
import { 
  Award, 
  Users, 
  ShieldCheck, 
  Smartphone, 
  Wallet, 
  Zap, 
  CheckCircle2, 
  ThumbsUp,
  Headphones
} from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-cyan-400" />;
      default: return <Zap className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#090D18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Diferenciais Exclusivos</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Por Que Escolher a Double M Tec?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Segurança não admite improvisos. Entregamos soluções completas com acabamento de engenharia e suporte contínuo.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brands Banner */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Equipamentos e Protocolos Compatíveis com os Padrões Globais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400 font-semibold text-sm tracking-wider">
            <span className="hover:text-white transition-colors">HIKVISION</span>
            <span className="hover:text-white transition-colors">DAHUA TECHNOLOGY</span>
            <span className="hover:text-white transition-colors">UBIQUITI UNIFI</span>
            <span className="hover:text-white transition-colors">MIKROTIK</span>
            <span className="hover:text-white transition-colors">SEAGATE SKYHAWK</span>
            <span className="hover:text-white transition-colors">WESTERN DIGITAL PURPLE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
