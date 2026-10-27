import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#080C15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Reputação & Confiança</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            O Que Dizem Nossos Clientes em Angola
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Mais de 350 clientes residenciais e corporativos confiam na Double M Tec para guardar seus patrimónios.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="font-heading font-bold text-sm text-white">
                  {t.name}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  {t.role}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
