/**
 * Double M Tec - Master Data & Configuration
 * Technology • Security • Innovation
 */

export const COMPANY = {
  name: "Double M Tec",
  tagline: "Technology • Security • Innovation",
  phone: "+244 943 591 165",
  rawPhone: "943591165",
  whatsappNumber: "244943591165",
  email: "contacto@doublemtec.com",
  location: "Luanda, Angola",
  address: "Luanda, Angola (Atendimento Comercial e Residencial)",
  experienceYears: "3", // Strictly 3 years as requested by the user
  completedProjects: "350+",
  activeCameras: "1.200+",
  uptimeRate: "99.8%",
};

export const getWhatsAppLink = (message?: string) => {
  const defaultText = "Olá Double M Tec! Gostaria de solicitar um orçamento para sistemas de segurança e tecnologia.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
};

export const SERVICES = [
  {
    id: "cctv",
    title: "Sistemas CCTV & Monitoramento IP",
    category: "Segurança",
    iconName: "Camera",
    shortDesc: "Câmeras de alta definição 4K, visão noturna inteligente, reconhecimento facial e acesso seguro no telemóvel.",
    badge: "Mais Procurado",
    features: [
      "Câmeras IP Dome e Bullet 4K com IA",
      "Visão Noturna Colorida (ColorVu / Starlight)",
      "Acesso remoto e notificações em tempo real",
      "Gravação contínua em NVR com backup em nuvem",
      "Deteção inteligente de intrusão e veículos"
    ]
  },
  {
    id: "access",
    title: "Controlo de Acesso & Biometria",
    category: "Segurança",
    iconName: "ShieldCheck",
    shortDesc: "Fechaduras biométricas, torniquetes, reconhecimento facial e controlo de ponto para empresas e condomínios.",
    badge: "Corporativo",
    features: [
      "Terminais biométricos e cartões RFID",
      "Reconhecimento facial sem contacto",
      "Videoporteiros IP integrados ao telemóvel",
      "Relatórios de entradas e saídas em tempo real",
      "Integração com sistemas de alarme de intrusão"
    ]
  },
  {
    id: "network",
    title: "Redes Estruturadas & Fibra Óptica",
    category: "Infraestrutura",
    iconName: "Network",
    shortDesc: "Cabeamento estruturado Cat6/Cat6A, fusão de fibra óptica, racks organizados e Wi-Fi de alta densidade.",
    badge: "Essencial",
    features: [
      "Organização e certificação de Racks de TI",
      "Instalação e fusão de cabos de Fibra Óptica",
      "Sistemas Wi-Fi corporativos sem zonas mortas",
      "Roteadores e Switches gerenciáveis com VLANs",
      "Firewalls e segurança perimetral de rede"
    ]
  },
  {
    id: "software",
    title: "Software de Gestão à Medida",
    category: "Digital",
    iconName: "Cpu",
    shortDesc: "Sistemas web personalizados para controlo de stock, faturação, vendas, finanças e gestão de equipas.",
    badge: "Sob Medida",
    features: [
      "Gestão de inventário e vendas em tempo real",
      "Módulos financeiros e relatórios executivos",
      "Acesso seguro em computadores, tablets e smartphones",
      "Automação de processos internos e fluxos de aprovação",
      "Painéis de indicadores (KPIs) intuitivos"
    ]
  },
  {
    id: "web",
    title: "Websites Corporativos & Portais",
    category: "Digital",
    iconName: "MonitorSmartphone",
    shortDesc: "Sites institucionais de alto impacto, portais corporativos e landing pages otimizadas para conversão.",
    badge: "Presença Digital",
    features: [
      "Design responsivo ultra-rápido para telemóveis",
      "Otimização para motores de busca (SEO)",
      "Painel administrativo simples para atualizar conteúdos",
      "Integração com formulários e WhatsApp direto",
      "Hospedagem segura e certificados SSL inclusos"
    ]
  },
  {
    id: "maintenance",
    title: "Manutenção Preventiva & Suporte 24/7",
    category: "Suporte",
    iconName: "Headphones",
    shortDesc: "Planos de suporte contínuo, limpeza técnica de lentes, testes de gravação e assistência emergencial.",
    badge: "Garantia Total",
    features: [
      "Visitas técnicas preventivas programadas",
      "Substituição imediata de peças e equipamentos",
      "Auditoria de segurança e alinhamento de câmeras",
      "Canal prioritário de emergência 24 horas",
      "Garantia estendida em todos os serviços"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "3 Anos de Inovação Comprovada",
    desc: "Experiência consolidada em segurança eletrónica e infraestrutura técnica em Angola, com mais de 350 instalações bem-sucedidas.",
    icon: "Award"
  },
  {
    title: "Técnicos Certificados & Uniformizados",
    desc: "Nossa equipa é treinada nas mais recentes normas de engenharia e segurança, garantindo pontualidade e acabamento impecável.",
    icon: "Users"
  },
  {
    title: "Equipamentos das Melhores Marcas",
    desc: "Trabalhamos exclusivamente com fabricantes líderes globais (Hikvision, Dahua, Ubiquiti, Mikrotik) com garantia oficial.",
    icon: "ShieldCheck"
  },
  {
    title: "Acesso Total no Telemóvel",
    desc: "Veja todas as suas câmeras ao vivo, retroceda gravações e receba alertas imediatos onde quer que você esteja no mundo.",
    icon: "Smartphone"
  },
  {
    title: "Preços Claros & Sem Surpresas",
    desc: "Orçamentos transparentes, detalhados e ajustados à realidade do seu orçamento residencial ou empresarial.",
    icon: "Wallet"
  },
  {
    title: "Suporte Técnico Ágil em Luanda",
    desc: "Atendimento presencial rápido para manutenção, expansão de pontos ou dúvidas operacionais com suporte contínuo.",
    icon: "Zap"
  }
];

export const TESTIMONIALS = [
  {
    name: "Eng. Alberto Mendes",
    role: "Diretor de Operações, Condomínio Residencial Talatona",
    content: "A Double M Tec transformou a segurança do nosso condomínio. A instalação de 32 câmeras IP e o sistema de controlo de acessos funcionam sem falhas há mais de um ano. Equipa exemplar!",
    rating: 5,
    location: "Talatona, Luanda"
  },
  {
    name: "Dra. Cecília Fernandes",
    role: "Administradora, Clínica Médica Saúde & Vida",
    content: "Excelente trabalho na instalação do CCTV e na organização de todo o rack de rede. Conseguimos acompanhar a clínica pelo telemóvel com nitidez incrível, até mesmo à noite.",
    rating: 5,
    location: "Maianga, Luanda"
  },
  {
    name: "Dr. Mateus Quaresma",
    role: "Proprietário de Rede Comercial",
    content: "Além da segurança física, contratar o software de inventário e o site corporativo com a mesma empresa facilitou tudo. 3 anos de parceria e confiança absoluta.",
    rating: 5,
    location: "Viana, Luanda"
  }
];

export const FAQS = [
  {
    q: "Quanto tempo demora uma instalação de CCTV?",
    a: "Para residências e pequenos escritórios (4 a 8 câmeras), a instalação e configuração completa costumam ser concluídas em 1 dia útil. Em projetos de grande porte ou condomínios, definimos um cronograma ágil sem interromper as operações da sua empresa."
  },
  {
    q: "Consigo ver as câmeras no meu telemóvel quando estiver fora de Angola?",
    a: "Sim, absolutamente! Todas as nossas instalações incluem a configuração da aplicação móvel segura (iOS e Android) com encriptação de ponta a ponta. Você poderá ver imagens ao vivo e reproduzir gravações de qualquer lugar do mundo com internet."
  },
  {
    q: "Vocês trabalham com garantia e contrato de manutenção?",
    a: "Sim. Todos os nossos equipamentos contam com garantia de fábrica de 12 meses, garantia de mão-de-obra e oferecemos planos de manutenção preventiva mensal e trimestral para condomínios e empresas."
  },
  {
    q: "Qual é a área de atendimento da Double M Tec?",
    a: "Atendemos toda a província de Luanda (Talatona, Kilamba, Maianga, Viana, Belas, Ilha, etc.) e províncias vizinhas sob consulta para projetos de grande dimensão."
  },
  {
    q: "A Double M Tec também desenvolve softwares e websites?",
    a: "Sim! Somos uma empresa completa de tecnologia. Desenvolvemos desde websites institucionais e páginas de alta conversão até softwares de gestão sob medida para controlo de stock, vendas e finanças."
  },
  {
    q: "Como solicito uma visita técnica ou orçamento?",
    a: "É muito simples: basta clicar no botão de WhatsApp aqui no site ou preencher nosso simulador de orçamento. Agendamos a visita técnica gratuita para avaliar o seu espaço e apresentar a melhor solução."
  }
];
