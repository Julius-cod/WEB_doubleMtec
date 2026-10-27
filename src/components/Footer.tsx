import React from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Cpu
} from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';
import logoImg from '../assets/logo.asset1.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080F] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/30 p-1 flex items-center justify-center">
                <img src={logoImg} alt="Double M Tec" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-bold text-base text-white tracking-tight">
                  DOUBLE M TEC
                </span>
                <p className="text-[10px] text-blue-400 font-mono tracking-wider uppercase">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empresa angolana especializada em segurança eletrónica, sistemas CCTV IP com inteligência artificial, redes de computadores de alto desempenho e desenvolvimento de softwares sob medida.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-white uppercase text-[11px] tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#cctv-demo" className="hover:text-blue-400 transition-colors">Simulador de Monitor</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#simulador" className="hover:text-blue-400 transition-colors">Simulador de Preço</a></li>
              <li><a href="#projetos" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white uppercase text-[11px] tracking-wider">
              Soluções Principais
            </h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Sistemas CFTV 4K com IA</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Controlo de Acesso & Ponto</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Redes Estruturadas & Fibra</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Softwares de Gestão à Medida</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Websites Institucionais</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Manutenção Preventiva 24/7</a></li>
            </ul>
          </div>

          {/* Direct Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white uppercase text-[11px] tracking-wider">
              Atendimento em Luanda
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{COMPANY.phone}</div>
                  <div className="text-[11px] text-slate-400">Atendimento telefónico e WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{COMPANY.email}</div>
                  <div className="text-[11px] text-slate-400">Envio de plantas e propostas</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Luanda, Angola</div>
                  <div className="text-[11px] text-slate-400">Visitas em toda a província</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Double M Tec. Todos os direitos reservados. {COMPANY.experienceYears} Anos de Excelência Técnica.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              Technology • Security • Innovation
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Voltar ao Topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
