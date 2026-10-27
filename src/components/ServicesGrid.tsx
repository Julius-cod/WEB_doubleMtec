import React, { useState } from 'react';
import { 
  Camera, 
  ShieldCheck, 
  Network, 
  Cpu, 
  MonitorSmartphone, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  Layers
} from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/companyData';

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'Segurança', label: 'Segurança & CCTV' },
    { id: 'Infraestrutura', label: 'Redes & Infra' },
    { id: 'Digital', label: 'Software & Web' },
    { id: 'Suporte', label: 'Planos 24/7' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Network': return <Network className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'MonitorSmartphone': return <MonitorSmartphone className="w-6 h-6 text-purple-400" />;
      default: return <Headphones className="w-6 h-6 text-amber-400" />;
    }
  };

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="servicos" className="py-24 bg-[#090D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Soluções Integradas</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Uma Plataforma Completa para Proteger e Modernizar
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Da instalação de câmeras 4K à infraestrutura de servidores e desenvolvimento de softwares sob medida para o mercado angolano.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col justify-between group"
            >
              <div>
                {/* Header row of card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/20">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Bullets */}
                <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Orçamento sem compromisso</span>
                <a
                  href={getWhatsAppLink(`Olá Double M Tec! Gostaria de informações e proposta sobre: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Pedir Proposta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
