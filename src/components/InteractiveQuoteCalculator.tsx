import React, { useState } from 'react';
import { 
  Calculator, 
  Camera, 
  HardDrive, 
  ShieldCheck, 
  Wifi, 
  Send, 
  ArrowRight, 
  Check, 
  Building, 
  Home, 
  Store, 
  Factory,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { COMPANY, getWhatsAppLink } from '../data/companyData';

export const InteractiveQuoteCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('comercial');
  const [numCameras, setNumCameras] = useState<number>(4);
  const [cameraQuality, setCameraQuality] = useState<string>('4k');
  const [storageDays, setStorageDays] = useState<number>(30);
  const [includeAccessControl, setIncludeAccessControl] = useState<boolean>(false);
  const [includeNetwork, setIncludeNetwork] = useState<boolean>(false);
  const [includeWebSoftware, setIncludeWebSoftware] = useState<boolean>(false);

  const projectTypes = [
    { id: 'residencial', label: 'Residência / Moradia', icon: Home, desc: 'Proteção perimetral e interior para a sua família' },
    { id: 'comercial', label: 'Comércio / Escritório', icon: Store, desc: 'Lojas, consultórios, salas comerciais e armazéns' },
    { id: 'condominio', label: 'Condomínio Residencial', icon: Building, desc: 'Portarias, áreas comuns, garagens e acessos' },
    { id: 'industrial', label: 'Empresas & Indústria', icon: Factory, desc: 'Fábricas, logística, centros de distribuição e galpões' },
  ];

  const qualities = [
    { id: 'fhd', label: '1080p Full HD', desc: 'Resolução nítida para ambientes internos', rec: false },
    { id: '4k', label: '4K Ultra HD + Cor Noturna', desc: 'Identificação de rostos e matrículas dia e noite', rec: true },
    { id: 'ptz', label: 'Câmeras PTZ 360° Zoom', desc: 'Rotação mecânica e patrulha automática de grandes áreas', rec: false },
  ];

  // Build pre-formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    const selectedType = projectTypes.find(p => p.id === projectType)?.label || projectType;
    const selectedQuality = qualities.find(q => q.id === cameraQuality)?.label || cameraQuality;
    
    let msg = `Olá Double M Tec! Simulei um orçamento no vosso site e gostaria de uma proposta formal:\n\n`;
    msg += `📍 *Tipo de Imóvel:* ${selectedType}\n`;
    msg += `📹 *Quantidade de Câmeras:* ${numCameras} câmeras\n`;
    msg += `🔍 *Qualidade Desejada:* ${selectedQuality}\n`;
    msg += `💾 *Gravação:* Armazenamento contínuo para ${storageDays} dias\n`;
    
    const extras: string[] = [];
    if (includeAccessControl) extras.push("Controlo de Acesso Biométrico");
    if (includeNetwork) extras.push("Cabeamento Estruturado & Wi-Fi");
    if (includeWebSoftware) extras.push("Website / Software de Gestão");
    
    if (extras.length > 0) {
      msg += `➕ *Serviços Adicionais:* ${extras.join(", ")}\n`;
    }
    
    msg += `\nPodem agendar uma visita técnica gratuita no meu endereço em Luanda?`;
    return msg;
  };

  return (
    <section id="simulador" className="py-24 bg-[#080C15] relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Simulador de Necessidades</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Monte o Seu Projeto em Poucos Cliques
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Selecione as características do seu espaço e receba um orçamento personalizado diretamente no seu WhatsApp sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Box (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-8">
            
            {/* Step 1: Tipo de Projeto */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center justify-between">
                <span>1. Tipo de Propriedade ou Negócio</span>
                <span className="text-xs text-blue-400 font-normal">Passo 1 de 4</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => {
                  const Icon = pt.icon;
                  const isSelected = projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setProjectType(pt.id)}
                      className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-900/20 ring-1 ring-blue-500/50'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/80 hover:border-slate-600'
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{pt.label}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{pt.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Quantidade de Câmeras */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span>2. Número de Pontos / Câmeras CCTV:</span>
                </label>
                <span className="font-heading font-bold text-xl text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
                  {numCameras} Câmeras
                </span>
              </div>

              {/* Quick Select Buttons */}
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[2, 4, 8, 16, 32].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setNumCameras(n)}
                    className={`py-2 rounded-lg font-semibold text-xs border transition-all ${
                      numCameras === n
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                        : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {n} canais
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="2"
                max="64"
                step="2"
                value={numCameras}
                onChange={(e) => setNumCameras(Number(e.target.value))}
                className="w-full accent-blue-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>2 câmeras (mínimo)</span>
                <span>32 câmeras</span>
                <span>64+ câmeras (enterprise)</span>
              </div>
            </div>

            {/* Step 3: Qualidade das Câmeras */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                3. Tecnologia & Resolução das Câmeras
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {qualities.map((q) => {
                  const isSelected = cameraQuality === q.id;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCameraQuality(q.id)}
                      className={`text-left p-3.5 rounded-xl border relative transition-all ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md ring-1 ring-blue-500/50'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      {q.rec && (
                        <span className="absolute -top-2 right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                          RECOMENDADO
                        </span>
                      )}
                      <div className="font-semibold text-xs">{q.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{q.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Serviços Integrados Adicionais */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                4. Necessita de Outros Serviços Complementares?
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeAccessControl(!includeAccessControl)}
                  className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                    includeAccessControl
                      ? 'bg-indigo-600/25 border-indigo-500 text-white'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                    includeAccessControl ? 'bg-indigo-600 border-indigo-400 text-white' : 'border-slate-600'
                  }`}>
                    {includeAccessControl && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Controlo Biométrico</div>
                    <div className="text-[10px] text-slate-400">Ponto e fechadura IP</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeNetwork(!includeNetwork)}
                  className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                    includeNetwork
                      ? 'bg-indigo-600/25 border-indigo-500 text-white'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                    includeNetwork ? 'bg-indigo-600 border-indigo-400 text-white' : 'border-slate-600'
                  }`}>
                    {includeNetwork && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Redes & Racks TI</div>
                    <div className="text-[10px] text-slate-400">Cat6 e Wi-Fi sem falhas</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeWebSoftware(!includeWebSoftware)}
                  className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                    includeWebSoftware
                      ? 'bg-indigo-600/25 border-indigo-500 text-white'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                    includeWebSoftware ? 'bg-indigo-600 border-indigo-400 text-white' : 'border-slate-600'
                  }`}>
                    {includeWebSoftware && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Site ou Software</div>
                    <div className="text-[10px] text-slate-400">Gestão e presença digital</div>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Proposal Summary (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono">
                  Resumo da Proposta
                </span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded">
                  DOUBLE M TEC
                </span>
              </div>

              <div className="py-4 space-y-3 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Perfil:</span>
                  <span className="font-semibold text-white">
                    {projectTypes.find(p => p.id === projectType)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Câmeras:</span>
                  <span className="font-semibold text-cyan-400">{numCameras} unidades</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Resolução:</span>
                  <span className="font-semibold text-white">
                    {qualities.find(q => q.id === cameraQuality)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Gravação em NVR:</span>
                  <span className="font-semibold text-emerald-400">{storageDays} dias contínuos</span>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-1.5">
                  <span className="text-[11px] text-slate-400 block font-medium">Incluso no Pacote:</span>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Instalação técnica sem cabos visíveis</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Configuração no aplicativo móvel</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Garantia oficial e suporte pós-venda</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={getWhatsAppLink(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </a>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Resposta rápida com visita técnica em Luanda.
                </p>
              </div>

            </div>

            {/* Support guarantee badge */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-400 shrink-0" />
              <div className="text-[11px] text-slate-300 leading-snug">
                <strong className="text-white block font-medium">Compromisso Double M Tec:</strong>
                Garantia em todos os equipamentos e suporte presencial garantido em Luanda.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
