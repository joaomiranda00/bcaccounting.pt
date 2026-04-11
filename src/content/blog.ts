export type BlogCategory =
  | 'Contabilidade'
  | 'Fiscalidade'
  | 'Gestão'
  | 'Incentivos';

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  cluster: string;
  serviceLink: string;
  serviceLabel: string;
  keywords: string[];
  coverImage: string;
  content: {
    intro: string[];
    sections: BlogSection[];
    conclusion: string[];
    ctaTitle: string;
    ctaBody: string;
  };
  relatedSlugs?: string[];
};

export type BlogPostSummary = Omit<BlogPost, 'content'> & {
  readingTime: string;
  formattedPublishedAt: string;
  formattedUpdatedAt?: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'como-escolher-um-contabilista-para-a-sua-empresa-em-vila-do-conde',
    title: 'Como Escolher um Contabilista para a Sua Empresa em Vila do Conde',
    description:
      'Critérios práticos para escolher um contabilista para a sua empresa, com foco em acompanhamento, cumprimento, proximidade e apoio à decisão.',
    excerpt:
      'Saiba o que avaliar na escolha de um contabilista para a sua empresa e porque a relação vai muito além da entrega de obrigações.',
    publishedAt: '2026-04-11',
    category: 'Contabilidade',
    cluster: 'Contabilidade empresarial',
    serviceLink: '/servicos/contabilidade',
    serviceLabel: 'Serviços de Contabilidade',
    keywords: [
      'como escolher um contabilista',
      'contabilista para empresas',
      'contabilidade Vila do Conde',
      'serviços de contabilidade',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop',
    content: {
      intro: [
        'Escolher um contabilista é uma decisão com impacto direto no dia a dia da empresa. Não está apenas em causa o cumprimento de obrigações: está também a qualidade da informação que chega ao empresário e a capacidade de detetar problemas a tempo.',
        'Para muitas PME, a contabilidade é o ponto de partida para perceber margens, custos, risco fiscal e prioridades de gestão. Por isso, a escolha deve ser feita com critérios claros e não apenas com base no preço ou na proximidade geográfica.',
      ],
      sections: [
        {
          heading: 'Porque é que esta escolha pesa mais do que parece',
          paragraphs: [
            'Um bom acompanhamento contabilístico ajuda a manter a empresa organizada, reduz risco de incumprimento e melhora a qualidade da informação usada na gestão.',
            'Quando a relação com o contabilista é demasiado reativa, a empresa tende a só olhar para os números quando surge um problema. Isso limita a capacidade de planear e decidir com antecedência.',
          ],
          bullets: [
            'Cumprimento regular de obrigações contabilísticas e fiscais',
            'Maior visibilidade sobre custos, margens e tesouraria',
            'Apoio mais rápido quando surgem dúvidas operacionais',
            'Melhor articulação com outras necessidades, como fiscalidade ou gestão',
          ],
        },
        {
          heading: 'O que deve avaliar antes de decidir',
          paragraphs: [
            'Antes de escolher, vale a pena perceber como o serviço é prestado na prática. Nem todas as empresas precisam do mesmo nível de acompanhamento, mas quase todas beneficiam de clareza, consistência e contacto próximo.',
          ],
          bullets: [
            'Se existe acompanhamento regular e não apenas entrega de declarações',
            'Se a informação é explicada de forma clara e útil para decisão',
            'Se há disponibilidade para esclarecer dúvidas do negócio',
            'Se o serviço está ajustado à dimensão e complexidade da empresa',
            'Se existe articulação com temas de fiscalidade, salários e gestão',
          ],
        },
        {
          heading: 'Perguntas úteis a colocar numa reunião inicial',
          paragraphs: [
            'Uma conversa inicial bem conduzida permite perceber se existe método, capacidade de resposta e entendimento do contexto da empresa.',
          ],
          bullets: [
            'Como é feito o acompanhamento mensal ou periódico?',
            'Que tipo de relatórios ou informação de gestão é disponibilizada?',
            'Como funciona a recolha e organização da documentação?',
            'Quem será o ponto de contacto habitual da empresa?',
            'Como é tratada a transição se vier de outro contabilista?',
          ],
        },
        {
          heading: 'Sinais de que pode fazer sentido mudar de contabilista',
          paragraphs: [
            'Nem sempre a necessidade de mudança surge por erro grave. Muitas vezes o problema está na falta de acompanhamento, na ausência de leitura útil dos números ou na dificuldade em obter respostas claras.',
          ],
          bullets: [
            'A empresa entrega documentação, mas raramente recebe enquadramento útil',
            'As dúvidas ficam sem resposta durante demasiado tempo',
            'Os números existem, mas não ajudam a decidir',
            'Há sensação de que a contabilidade está desligada da realidade do negócio',
          ],
        },
        {
          heading: 'Como a BCA enquadra este apoio',
          paragraphs: [
            'Na BCA, o serviço de contabilidade procura combinar cumprimento, organização e leitura prática da informação financeira. O objetivo é que a empresa tenha uma base estável para operar e decidir com mais segurança.',
            'Para conhecer melhor esta abordagem, consulte a página de serviço de contabilidade e use a página de contactos para enquadrar a realidade da sua empresa.',
          ],
        },
      ],
      conclusion: [
        'Escolher um contabilista é escolher um parceiro de acompanhamento. Quanto mais claro for o método de trabalho e o nível de apoio prestado, maior a probabilidade de a contabilidade contribuir de forma útil para a gestão.',
      ],
      ctaTitle: 'Precisa de enquadrar o apoio contabilístico da sua empresa?',
      ctaBody:
        'Veja como a BCA trabalha a contabilidade para empresas e contacte-nos para avaliar a melhor forma de acompanhamento.',
    },
    relatedSlugs: [
      'planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal',
      'como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa',
    ],
  },
  {
    slug: 'planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal',
    title: 'Planeamento Fiscal para PME: o Que Pode Ser Feito de Forma Legal',
    description:
      'Guia introdutório sobre planeamento fiscal para PME, com foco em enquadramento, prevenção de risco e decisões que devem ser analisadas caso a caso.',
    excerpt:
      'Perceba o que é planeamento fiscal, onde pode fazer diferença e porque deve ser trabalhado com prudência, contexto e enquadramento adequado.',
    publishedAt: '2026-04-11',
    category: 'Fiscalidade',
    cluster: 'Fiscalidade e conformidade',
    serviceLink: '/servicos/consultoria-fiscal',
    serviceLabel: 'Consultoria Fiscal',
    keywords: [
      'planeamento fiscal PME',
      'consultoria fiscal para empresas',
      'apoio fiscal para empresas',
      'consultoria fiscal',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop',
    content: {
      intro: [
        'O planeamento fiscal não deve ser visto como uma forma de “forçar” poupanças fiscais. O seu papel é ajudar a empresa a tomar decisões com melhor enquadramento, respeitando a lei e prevenindo riscos desnecessários.',
        'Para uma PME, isto pode significar rever enquadramentos, antecipar impacto de decisões e reduzir situações em que a carga fiscal só é pensada depois do problema aparecer.',
      ],
      sections: [
        {
          heading: 'O que significa, na prática, fazer planeamento fiscal',
          paragraphs: [
            'Planeamento fiscal é analisar decisões empresariais com antecedência para perceber as suas implicações fiscais. Não substitui o cumprimento declarativo, mas complementa-o.',
            'Em vez de atuar apenas no fecho de prazos, permite preparar escolhas com mais informação e menor exposição a contingências.',
          ],
        },
        {
          heading: 'Em que momentos pode fazer diferença',
          paragraphs: [
            'Nem todas as decisões têm o mesmo peso, mas existem momentos em que o impacto fiscal pode ser relevante e merece análise prévia.',
          ],
          bullets: [
            'Mudanças de estrutura ou reorganização da empresa',
            'Investimentos com impacto relevante em custos e financiamento',
            'Escolhas de enquadramento com efeitos continuados',
            'Regularização de situações pendentes ou correção de procedimentos',
            'Preparação para inspeções ou revisão de risco fiscal',
          ],
        },
        {
          heading: 'O que não deve ser confundido com planeamento fiscal',
          paragraphs: [
            'Planeamento fiscal não é procurar atalhos frágeis nem decisões sem substância económica. Sempre que o objetivo é apenas “pagar menos” sem coerência com a realidade do negócio, o risco tende a aumentar.',
            'Por isso, o trabalho deve ser feito caso a caso, com prudência e documentação adequada.',
          ],
        },
        {
          heading: 'Sinais de que a PME pode precisar deste apoio',
          paragraphs: [
            'Muitas empresas só recorrem a consultoria fiscal quando já existe urgência. No entanto, alguns sinais mostram que o tema deve ser tratado mais cedo.',
          ],
          bullets: [
            'A empresa sente dúvidas frequentes sobre enquadramento fiscal',
            'Existem operações menos habituais sem análise prévia',
            'Há receio de risco fiscal ou de inspeção',
            'As decisões são tomadas sem avaliar impacto tributário',
            'O crescimento da empresa tornou a operação mais complexa',
          ],
        },
        {
          heading: 'Como trabalhar este tema de forma útil',
          paragraphs: [
            'O melhor resultado surge quando o planeamento fiscal está ligado à realidade do negócio e não isolado da operação. Isso implica conhecer a empresa, perceber prioridades e cruzar fiscalidade com gestão e contabilidade.',
            'Se procura este tipo de enquadramento, a consultoria fiscal da BCA pode ajudar a analisar decisões, reduzir risco e criar maior previsibilidade.',
          ],
        },
      ],
      conclusion: [
        'Um bom planeamento fiscal não vive de fórmulas rápidas. Vive de análise, enquadramento e decisões consistentes com a realidade da empresa.',
        'As regras aplicáveis podem mudar e devem ser confirmadas no momento da decisão. Este conteúdo é introdutório e não substitui análise concreta do caso.',
      ],
      ctaTitle: 'Precisa de apoio fiscal mais estruturado?',
      ctaBody:
        'Conheça a área de Consultoria Fiscal da BCA e contacte-nos para enquadrar as decisões da sua empresa com maior segurança.',
    },
    relatedSlugs: [
      'como-escolher-um-contabilista-para-a-sua-empresa-em-vila-do-conde',
      'como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa',
    ],
  },
  {
    slug: 'como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa',
    title: 'Como Preparar uma Candidatura a Incentivos para a Sua Empresa',
    description:
      'Passos essenciais para preparar uma candidatura a incentivos com maior consistência, desde o enquadramento inicial até à organização da informação de suporte.',
    excerpt:
      'Veja o que deve ser preparado antes de avançar para uma candidatura a incentivos e porque o enquadramento prévio faz diferença.',
    publishedAt: '2026-04-11',
    category: 'Incentivos',
    cluster: 'Incentivos e financiamento',
    serviceLink: '/servicos/incentivos-ao-investimento',
    serviceLabel: 'Incentivos ao Investimento',
    keywords: [
      'candidatura a incentivos empresas',
      'incentivos ao investimento',
      'fundos europeus para empresas',
      'como preparar candidatura a incentivos',
    ],
    coverImage:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=630&fit=crop',
    content: {
      intro: [
        'Uma candidatura a incentivos não começa no formulário. Começa muito antes, no momento em que a empresa confirma se o projeto faz sentido, se existe enquadramento e se a informação necessária está organizada.',
        'Quando essa preparação falha, a candidatura tende a ficar mais fraca, mais lenta e mais dependente de correções de última hora. Por isso, a fase prévia é decisiva.',
      ],
      sections: [
        {
          heading: 'Começar pelo enquadramento do projeto',
          paragraphs: [
            'Antes de reunir documentos, importa perceber se o projeto da empresa é compatível com o tipo de incentivo disponível. Nem todos os programas servem todas as empresas, setores ou objetivos.',
            'A clareza sobre investimento, objetivos, calendário e impacto esperado ajuda a evitar candidaturas desalinhadas logo à partida.',
          ],
        },
        {
          heading: 'Informação que costuma ser necessária',
          paragraphs: [
            'Os requisitos concretos variam consoante o programa, mas há um conjunto de informação que tende a ser relevante em muitos processos.',
          ],
          bullets: [
            'Identificação clara da empresa e da atividade',
            'Descrição do projeto e dos seus objetivos',
            'Investimentos previstos e respetiva calendarização',
            'Elementos financeiros de suporte e coerência económica',
            'Documentação administrativa e comprovativos exigidos pelo aviso',
          ],
        },
        {
          heading: 'Porque a preparação financeira é tão importante',
          paragraphs: [
            'Não basta descrever o projeto. É necessário mostrar coerência entre o investimento, a capacidade da empresa, os objetivos e a execução prevista.',
            'Quando os números não estão bem organizados, mesmo uma boa ideia pode perder consistência no processo de candidatura.',
          ],
        },
        {
          heading: 'Erros frequentes antes da submissão',
          paragraphs: [
            'Muitas fragilidades surgem ainda antes da candidatura entrar em avaliação. São problemas de preparação e não apenas de redação.',
          ],
          bullets: [
            'Avançar sem confirmar elegibilidade e critérios do aviso',
            'Reunir documentação demasiado tarde',
            'Apresentar objetivos pouco claros ou pouco mensuráveis',
            'Subestimar o esforço de execução e reporte posterior',
            'Tratar o processo como uma tarefa isolada e não como parte da estratégia da empresa',
          ],
        },
        {
          heading: 'Como a BCA pode ajudar neste processo',
          paragraphs: [
            'A BCA apoia empresas na identificação de oportunidades, análise de enquadramento, preparação da candidatura e acompanhamento das etapas seguintes.',
            'O objetivo não é apenas submeter. É ajudar a empresa a chegar à candidatura com uma base mais consistente e com melhor alinhamento entre projeto, documentação e execução.',
          ],
        },
      ],
      conclusion: [
        'Quanto melhor for a preparação inicial, maior tende a ser a consistência do processo. A empresa ganha tempo, reduz fricção e melhora a qualidade da informação apresentada.',
        'Programas, critérios e calendários podem variar ao longo do tempo. Antes de avançar, confirme sempre os requisitos aplicáveis ao aviso em causa.',
      ],
      ctaTitle: 'Vai avançar com um projeto de investimento?',
      ctaBody:
        'Conheça o serviço de Incentivos ao Investimento da BCA e peça enquadramento antes de preparar a candidatura.',
    },
    relatedSlugs: [
      'como-escolher-um-contabilista-para-a-sua-empresa-em-vila-do-conde',
      'planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal',
    ],
  },
];

function getWordCount(post: BlogPost) {
  const textParts = [
    post.title,
    post.description,
    post.excerpt,
    ...post.content.intro,
    ...post.content.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...post.content.conclusion,
    post.content.ctaTitle,
    post.content.ctaBody,
  ];

  return textParts
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function calculateReadingTime(post: BlogPost) {
  const wordsPerMinute = 200;
  const minutes = Math.max(3, Math.ceil(getWordCount(post) / wordsPerMinute));

  return `${minutes} min`;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('pt-PT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getBlogPostSummaries(): BlogPostSummary[] {
  return getAllBlogPosts().map((post) => ({
    ...post,
    readingTime: calculateReadingTime(post),
    formattedPublishedAt: formatBlogDate(post.publishedAt),
    formattedUpdatedAt: post.updatedAt ? formatBlogDate(post.updatedAt) : undefined,
  }));
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return [];
  }

  const relatedCandidates = getAllBlogPosts().filter(
    (item) => item.slug !== slug
  );

  const explicitRelated = (post.relatedSlugs ?? [])
    .map((relatedSlug) =>
      relatedCandidates.find((item) => item.slug === relatedSlug)
    )
    .filter((item): item is BlogPost => Boolean(item));

  const fallbackRelated = relatedCandidates.filter(
    (item) =>
      item.category === post.category || item.serviceLink === post.serviceLink
  );

  const combined = [...explicitRelated, ...fallbackRelated].filter(
    (item, index, array) =>
      array.findIndex((candidate) => candidate.slug === item.slug) === index
  );

  return combined.slice(0, limit).map((item) => ({
    ...item,
    readingTime: calculateReadingTime(item),
    formattedPublishedAt: formatBlogDate(item.publishedAt),
    formattedUpdatedAt: item.updatedAt ? formatBlogDate(item.updatedAt) : undefined,
  }));
}
