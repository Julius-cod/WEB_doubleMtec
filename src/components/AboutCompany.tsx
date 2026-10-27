import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';
import techWomanImg from '../assets/images/cctv_technician_woman_1793108531398.jpg';
import techInstallImg from '../assets/images/cctv_install_brunette_1793108546060.jpg';

export const AboutCompany: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#080C15] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid Showcase with Technician in Uniform */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: Main Portrait with Uniform */}
              <div className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[3/4] bg-slate-900 group">
                <img
                  src={techWomanImg}
                  alt="Técnica da Double M Tec com uniforme e equipamento de diagnóstico"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700/50">
                  <div className="font-bold flex items-center gap-1.5 text-cyan-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Técnicos Certificados
                  </div>
                  <div className="text-[10px] text-slate-300">Treino rigoroso em CCTV & Redes</div>
                </div>
              </div>

              {/* Image 2: Action Installation on Facade */}
              <div className="col-span-2 sm:col-span-1 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[3/4] bg-slate-900 group">
                <img
                  src={techInstallImg}
                  alt="Instalação externa de câmera de segurança com precisão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700/50">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Padrão de Acabamento
                  </div>
                  <div className="text-[10px] text-slate-300">Sem cabos aparentes nem danos à fachada</div>
                </div>
              </div>

            </div>

            {/* Badge floating on corner */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-slate-900/95 border border-blue-500/40 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-heading font-black text-xl">
                {COMPANY.experienceYears}
              </div>
              <div>
                <div className="text-sm font-bold text-white">Anos de Excelência</div>
                <div className="text-[11px] text-blue-300">Operação em Luanda, Angola</div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400">
              <Award className="w-3.5 h-3.5" />
              <span>Sobre a Double M Tec</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Engenharia Rigorosa, Tecnologia de Ponta e Confiança Absoluta
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com <strong>{COMPANY.experienceYears} anos de atividade sólida</strong>, a <strong>Double M Tec</strong> nasceu para preencher a lacuna de empresas técnicas altamente capacitadas em Angola. Atuamos unindo a proteção física e patrimonial de sistemas de segurança eletrónica com o desenvolvimento de software e infraestruturas digitais modernas.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Trabalhamos com marcas mundiais consagradas, assegurando que condomínios, residências, indústrias e empresas contem com monitoramento contínuo, estabilidade de rede e ferramentas digitais que aumentam a produtividade.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Target className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="font-heading font-semibold text-sm text-white">Missão</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Proteger vidas e patrimónios através de soluções inteligentes e acessíveis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="font-heading font-semibold text-sm text-white">Visão</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Ser referência nacional em integração de segurança e inovação digital.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-heading font-semibold text-sm text-white">Valores</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                  Ética, acabamento impecável, transparência e suporte pós-venda garantido.
                </p>
              </div>
            </div>

            {/* Quick Contact & Details */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Atendimento & Suporte Rápido</span>
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppLink("Olá! Gostaria de conversar com a direção técnica da Double M Tec.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
              >
                <span>Falar Connosco Diretamente</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
