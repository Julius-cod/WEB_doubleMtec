import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Eye, 
  Moon, 
  Sun, 
  Sparkles, 
  Maximize2, 
  ShieldAlert, 
  Video, 
  Radio, 
  Cpu, 
  Wifi, 
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';
import { getWhatsAppLink } from '../data/companyData';

// Assets
import techInstallImg from '../assets/images/cctv_install_brunette_1793108546060.jpg';
import controlRoomImg from '../assets/gallery-control-room.jpg';
import networkImg from '../assets/gallery-network.jpg';
import dashboardImg from '../assets/gallery-dashboard.jpg';

export const LiveSecurityDemo: React.FC = () => {
  const [activeCam, setActiveCam] = useState<number>(1);
  const [isNightVision, setIsNightVision] = useState<boolean>(false);
  const [showAiBoxes, setShowAiBoxes] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [timeString, setTimeString] = useState<string>('');
  const [alertActive, setAlertActive] = useState<boolean>(false);

  // Live real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleDateString('pt-PT') + ' ' + 
        now.toLocaleTimeString('pt-PT', { hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const cameras = [
    {
      id: 1,
      name: "CAM 01: Perímetro Exterior & Fachada",
      location: "Área Perimetral Norte",
      status: "ONLINE",
      fps: "60 FPS",
      bitrate: "4.8 Mbps",
      image: techInstallImg,
      detectedObject: "Técnica em Manutenção • Calibração IP"
    },
    {
      id: 2,
      name: "CAM 02: Centro de Operações & Monitoramento",
      location: "Sala de Controlo 24/7",
      status: "ONLINE",
      fps: "60 FPS",
      bitrate: "6.2 Mbps",
      image: controlRoomImg,
      detectedObject: "Operador Autorizado • Área Segura"
    },
    {
      id: 3,
      name: "CAM 03: Infraestrutura & Racks de TI",
      location: "Data Room & Switchboard",
      status: "ONLINE",
      fps: "30 FPS",
      bitrate: "3.5 Mbps",
      image: networkImg,
      detectedObject: "Rede Cat6A / Fibra Óptica 10G"
    },
    {
      id: 4,
      name: "CAM 04: Dashboard de Gestão & Alertas",
      location: "Painel Central de Incidentes",
      status: "ONLINE",
      fps: "30 FPS",
      bitrate: "2.9 Mbps",
      image: dashboardImg,
      detectedObject: "Sistema Normal • Zero Intrusões"
    }
  ];

  const currentCam = cameras.find(c => c.id === activeCam) || cameras[0];

  const handleSimulateAlert = () => {
    setAlertActive(true);
    setTimeout(() => setAlertActive(false), 3500);
  };

  return (
    <section id="cctv-demo" className="py-20 bg-[#0B101E] border-y border-slate-800/80 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            <span>Simulador de Monitoramento ao Vivo</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Experimente o Controlo Total da sua Segurança
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Alterne entre os canais de vigilância da Double M Tec, ative a visão noturna inteligente e teste o sistema de IA com análise em tempo real.
          </p>
        </div>

        {/* Security Control Room Interface */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden p-3 sm:p-5">
          
          {/* Top Bar of CCTV Terminal */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800/80 text-xs font-mono">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>SYSTEM LIVE</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">REC [NVR-01]</span>
              <span className="text-slate-300 font-semibold">{timeString || 'AO 2026-10-27'}</span>
            </div>

            {/* Interactive Control Toggles */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button
                onClick={() => setIsNightVision(!isNightVision)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isNightVision
                    ? 'bg-emerald-950 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-950'
                    : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                }`}
                title="Ativar/Desativar Infravermelho"
              >
                {isNightVision ? <Moon className="w-3.5 h-3.5 text-emerald-400" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
                <span>{isNightVision ? 'Infravermelho ON' : 'Modo Diurno'}</span>
              </button>

              <button
                onClick={() => setShowAiBoxes(!showAiBoxes)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  showAiBoxes
                    ? 'bg-cyan-950 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Ativar Análise por Inteligência Artificial"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>IA Bounding Boxes</span>
              </button>

              <button
                onClick={handleSimulateAlert}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-red-300 rounded-lg text-xs font-medium transition-all"
                title="Simular disparo de alerta"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span>Testar Alarme</span>
              </button>
            </div>
          </div>

          {/* Main Feed + Camera Switcher Grid */}
          <div className="grid lg:grid-cols-12 gap-4">
            
            {/* Left 9 Cols: Primary Live Video Screen */}
            <div className="lg:col-span-9 relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-black border border-slate-800">
              
              {/* Camera Image Feed */}
              <div 
                className="w-full h-full relative transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={currentCam.image}
                  alt={currentCam.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isNightVision 
                      ? 'filter contrast-150 brightness-90 grayscale sepia hue-rotate-[90deg] saturate-200' 
                      : ''
                  }`}
                />

                {/* Scanlines Effect */}
                <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

                {/* Simulated AI Object Detection Overlay Box */}
                {showAiBoxes && (
                  <div className="absolute top-1/4 left-1/3 sm:left-1/4 w-48 sm:w-64 h-36 sm:h-48 border-2 border-dashed border-cyan-400/90 rounded-lg bg-cyan-500/10 p-2 flex flex-col justify-between pointer-events-none animate-pulse">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold bg-cyan-950/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/40">
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-cyan-400" />
                        IA RECOGNITION
                      </span>
                      <span>98.6%</span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-200 bg-slate-950/90 px-2 py-0.5 rounded border border-cyan-500/30">
                      {currentCam.detectedObject}
                    </div>
                  </div>
                )}
              </div>

              {/* Alert Warning Banner (Simulated) */}
              {alertActive && (
                <div className="absolute inset-x-4 top-4 z-20 bg-red-600/90 text-white p-3 rounded-xl border border-red-400 shadow-2xl flex items-center justify-between animate-bounce">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <ShieldAlert className="w-5 h-5 animate-spin" />
                    <span>ALERTA DE DETEÇÃO INSTANTÂNEA: Movimento verificado no Perímetro!</span>
                  </div>
                  <span className="text-[10px] bg-white text-red-700 font-mono px-2 py-0.5 rounded font-bold uppercase">
                    Notificação Enviada
                  </span>
                </div>
              )}

              {/* On-Screen Display HUD Overlay */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
                <div className="bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span>{currentCam.name}</span>
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
                  {currentCam.location} • {currentCam.fps} • {currentCam.bitrate}
                </div>
              </div>

              {/* Zoom Controls HUD (Bottom Right) */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
                  title="Aproximar Zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 1))}
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded"
                  title="Afastar Zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 text-cyan-400 hover:bg-slate-800 rounded text-[10px] font-mono"
                    title="Redefinir Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Bottom Left Camera Stamp */}
              <div className="absolute bottom-3 left-3 z-10 text-[10px] font-mono text-slate-400 bg-black/60 px-2 py-1 rounded">
                DOUBLE M TEC PROTOCOL // ENCRYPTED TLS 1.3
              </div>
            </div>

            {/* Right 3 Cols: Channels Selection Switcher */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-3">
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-1">
                  Canais Disponíveis (4)
                </div>

                {cameras.map((cam) => {
                  const isActive = cam.id === activeCam;
                  return (
                    <button
                      key={cam.id}
                      onClick={() => {
                        setActiveCam(cam.id);
                        setZoomLevel(1);
                      }}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 ${
                        isActive
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-900/20'
                          : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                      }`}
                    >
                      <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-black shrink-0 border border-slate-700">
                        <img 
                          src={cam.image} 
                          alt={cam.name} 
                          className="w-full h-full object-cover" 
                        />
                        {isActive && (
                          <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold truncate text-slate-200">
                          {cam.name.split(':')[0]}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {cam.location}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick CTA box for Custom Setup */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-xs font-bold text-white mb-1">
                  Quer um sistema assim na sua empresa?
                </div>
                <p className="text-[11px] text-slate-400 mb-2.5">
                  Instalação completa com monitoramento no smartphone sem custos mensais.
                </p>
                <a
                  href={getWhatsAppLink("Olá! Gostei da demonstração do monitor CCTV e gostaria de uma avaliação no meu espaço.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow-md"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Pedir Proposta para Meu Espaço</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
