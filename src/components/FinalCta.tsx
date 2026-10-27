import React from 'react';
import { ShieldCheck, Phone, MessageCircle, ArrowRight, Clock, MapPin } from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 bg-[#080C15] relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Proteja o seu Património Hoje Mesmo</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Pronto para Elevar a Segurança e a <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Tecnologia da sua Empresa?
          </span>
        </h2>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Agende uma visita técnica presencial em Luanda sem qualquer custo ou receba uma estimativa detalhada no WhatsApp em minutos.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com um especialista da Double M Tec e agendar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:+${COMPANY.whatsappNumber}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/80 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Ligar: {COMPANY.phone}</span>
          </a>
        </div>

        {/* Reassurance points */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Atendimento Rápido e Orçamento em 24h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Toda a Província de Luanda e Regiões Vizinhas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{COMPANY.experienceYears} Anos de Rigor e Garantia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
