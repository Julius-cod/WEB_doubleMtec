import React from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Smartphone, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Activity, 
  Lock, 
  CheckCircle2, 
  Eye, 
  Zap,
  Play
} from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';
import techWomanImg from '../assets/images/cctv_technician_woman_1793108531398.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Dynamic Cyber Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[500px] h-[350px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-semibold text-blue-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{COMPANY.experienceYears} Anos de Inovação & Segurança Eletrónica em Angola</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Segurança Inteligente e <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Soluções Tecnológicas
              </span> <br />
              para o seu Negócio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Proteja o seu património com sistemas CCTV de alta definição, controlo de acessos, redes estruturadas e impulsione a sua empresa com websites e softwares de gestão sob medida.
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instalação Limpa & Sem Fios Aparentes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>App no Telemóvel Sem Mensalidade</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Garantia & Assistência Técnica</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cctv-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/80 hover:border-blue-500/50 transition-all"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                <span>Testar Monitor CCTV Interativo</span>
              </a>
            </div>

            {/* Metrics Counter Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-center lg:text-left">
                <div className="font-heading font-bold text-2xl lg:text-3xl text-white">
                  {COMPANY.experienceYears} <span className="text-blue-400 text-lg">Anos</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">De Inovação Técnica</div>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-center lg:text-left">
                <div className="font-heading font-bold text-2xl lg:text-3xl text-cyan-400">
                  {COMPANY.completedProjects}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Projetos Concluídos</div>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 text-center lg:text-left">
                <div className="font-heading font-bold text-2xl lg:text-3xl text-emerald-400">
                  {COMPANY.uptimeRate}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Uptime & Confiança</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Technician in Uniform */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Border Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-slate-800/50 to-transparent border border-blue-500/20 shadow-2xl overflow-hidden">
                
                {/* Main Hero Image: Technician in Uniform */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={techWomanImg}
                    alt="Técnica especializada Double M Tec em serviço de CCTV"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C15] via-transparent to-transparent opacity-80" />
                  
                  {/* Live Security System Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                      CCTV FEED ATIVO
                    </span>
                  </div>

                  {/* Camera AI Telemetry Overlay (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/60">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-blue-400" />
                        Diagnóstico & Instalação
                      </span>
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 font-mono px-2 py-0.5 rounded border border-blue-500/30">
                        HD 4K IP
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Técnicos certificados com equipamentos de precisão digital para calibração de câmeras e redes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Alertas em Tempo Real */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse-glow">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Vigilância 24/7</div>
                  <div className="text-[10px] text-slate-400">Acesso via Smartphone</div>
                </div>
              </div>

              {/* Floating Widget 2: Deteção Inteligente IA */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 p-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">IA Anti-Intrusão</div>
                  <div className="text-[10px] text-cyan-300 font-mono">Filtro de Falsos Alarmes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
