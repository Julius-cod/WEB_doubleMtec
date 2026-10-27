import React, { useState } from 'react';
import { 
  FolderGit2, 
  Eye, 
  X, 
  ExternalLink, 
  MapPin, 
  CheckCircle2, 
  MessageCircle,
  Camera
} from 'lucide-react';
import { getWhatsAppLink } from '../data/companyData';

// Assets
import techInstallImg from '../assets/images/cctv_install_brunette_1793108546060.jpg';
import techWomanImg from '../assets/images/cctv_technician_woman_1793108531398.jpg';
import controlRoomImg from '../assets/gallery-control-room.jpg';
import networkImg from '../assets/gallery-network.jpg';
import websiteImg from '../assets/gallery-website.jpg';
import dashboardImg from '../assets/gallery-dashboard.jpg';
import cameraInstallImg from '../assets/gallery-camera-install.jpg';
import heroCameraImg from '../assets/hero-camera.jpg';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  stats: string;
}

export const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Instalação Perimetral IP 4K em Condomínio",
      category: "cctv",
      categoryLabel: "CCTV & Vigilância",
      image: techInstallImg,
      location: "Talatona, Luanda",
      description: "Fixação e alinhamento milimétrico de câmeras bullet com sensor Starlight e infravermelho de 50 metros para vigilância contínua sem pontos cegos.",
      stats: "24 Câmeras • 0 Fios Visíveis • App Ativo"
    },
    {
      id: 2,
      title: "Diagnóstico e Calibração de Sistema CCTV",
      category: "cctv",
      categoryLabel: "CCTV & Vigilância",
      image: techWomanImg,
      location: "Maianga, Luanda",
      description: "Teste de sinal de vídeo digital, medição de ruído eletromagnético e integração com NVR corporativo de 32 canais.",
      stats: "98% Precisão • Teste com Multímetro Fluke"
    },
    {
      id: 3,
      title: "Centro de Operações de Segurança 24/7",
      category: "control",
      categoryLabel: "Salas de Controlo",
      image: controlRoomImg,
      location: "Viana, Luanda",
      description: "Montagem de video wall com múltiplos monitores industriais para visualização simultânea de mais de 60 câmeras em tempo real.",
      stats: "Video Wall 6 Telas • NVR redundante"
    },
    {
      id: 4,
      title: "Infraestrutura de Rede Estruturada & Racks",
      category: "network",
      categoryLabel: "Redes & Fibra",
      image: networkImg,
      location: "Luanda Sul, Angola",
      description: "Organização completa de rack com patch panels Cat6A, switches gerenciáveis PoE e interligação por fibra óptica monomodo.",
      stats: "48 Portas PoE • Certificação Fluke"
    },
    {
      id: 5,
      title: "Dashboard de Gestão & Controlo de Incidentes",
      category: "software",
      categoryLabel: "Sistemas & Software",
      image: dashboardImg,
      location: "Empresa Corporativa, Luanda",
      description: "Software sob medida desenvolvido pela Double M Tec para acompanhamento de chamados de segurança, inventário e logs de acesso.",
      stats: "Plataforma Web • Acesso Multiusuário"
    },
    {
      id: 6,
      title: "Website Corporativo & Portal de Clientes",
      category: "software",
      categoryLabel: "Sistemas & Software",
      image: websiteImg,
      location: "Setor Empresarial, Angola",
      description: "Desenvolvimento de site institucional com foco em alta velocidade, catálogo de serviços e captação de leads via WhatsApp.",
      stats: "100% Responsivo • Otimizado para SEO"
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'cctv', label: 'CCTV & Vigilância' },
    { id: 'control', label: 'Salas de Controlo' },
    { id: 'network', label: 'Redes & Racks' },
    { id: 'software', label: 'Sistemas & Web' },
  ];

  const filtered = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-24 bg-[#080C15] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfólio em Execução</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Trabalhos Recentes da Double M Tec
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Conheça algumas das soluções entregues em Luanda — de instalações de segurança a sistemas e redes corporativas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalProject(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-lg hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/11] overflow-hidden bg-slate-950 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/60 text-[10px] font-mono font-semibold text-blue-300">
                  {item.categoryLabel}
                </div>

                {/* Hover Eye indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-950/40 backdrop-blur-[2px]">
                  <div className="bg-blue-600 text-white p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-cyan-400 font-mono font-medium">{item.stats}</span>
                  <span className="text-blue-400 font-semibold group-hover:underline flex items-center gap-1">
                    Ver detalhes &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-black relative">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-1">
                  <span>{activeModalProject.categoryLabel}</span>
                  <span>•</span>
                  <span>{activeModalProject.location}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  {activeModalProject.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
                <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-cyan-300 font-mono">
                  {activeModalProject.stats}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={getWhatsAppLink(`Olá Double M Tec! Vi o projeto "${activeModalProject.title}" e gostaria de algo semelhante.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar Projeto Similar</span>
                  </a>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2.5 text-xs text-slate-400 hover:text-white"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
