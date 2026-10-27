import React from 'react';
import { 
  ClipboardList, 
  Compass, 
  Wrench, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { getWhatsAppLink } from '../data/companyData';

export const InstallationProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Visita Técnica & Levantamento",
      desc: "Nossa equipa avalia o seu imóvel em Luanda, identificando perímetros vulneráveis, pontos cegos e rotas ideais de cabeamento.",
      icon: Compass,
      tag: "Gratuito"
    },
    {
      num: "02",
      title: "Projeto Sob Medida & Orçamento",
      desc: "Apresentamos o mapa exato com a cobertura de cada lente, tipo de câmeras (dome/bullet/PTZ) e capacidade de gravação em dias.",
      icon: ClipboardList,
      tag: "Sem Compromisso"
    },
    {
      num: "03",
      title: "Instalação Limpa & Homologada",
      desc: "Montagem por técnicos uniformizados, sem fios soltos, com calibração precisa do foco, ângulo e iluminação infravermelha.",
      icon: Wrench,
      tag: "Padrão de Engenharia"
    },
    {
      num: "04",
      title: "App Móvel & Treinamento",
      desc: "Instalamos o aplicativo no seu telemóvel e computador, configuramos notificações inteligentes e ensinamos a rever gravações.",
      icon: Smartphone,
      tag: "Fácil de Usar"
    },
    {
      num: "05",
      title: "Suporte Contínuo & Garantia",
      desc: "Garantia total de fábrica e da mão de obra, com suporte prioritário para qualquer dúvida ou ajuste futuro no sistema.",
      icon: ShieldCheck,
      tag: "Tranquilidade Total"
    }
  ];

  return (
    <section className="py-24 bg-[#090D18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Método de Trabalho</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Como Funciona o Nosso Processo
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Do primeiro contacto à entrega do sistema funcionando na palma da sua mão.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl text-blue-400/80 group-hover:text-blue-400 transition-colors">
                      {s.num}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {s.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-sm text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-indigo-950/70 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-bold text-white text-base">
              Precisa de uma avaliação imediata no seu local?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Agende com um dos nossos consultores técnicos agora mesmo via WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar uma visita técnica gratuita no meu endereço.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shrink-0 transition-colors"
          >
            Agendar Visita Gratuita
          </a>
        </div>

      </div>
    </section>
  );
};
