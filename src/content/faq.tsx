import type { ReactNode } from 'react';
import Link from 'next/link';

export type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
  answerText: string;
  category: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 'contabilidade-servicos',
    question: 'Que serviços de contabilidade prestam?',
    answerText:
      'Prestamos um serviço completo de contabilidade que inclui organização contabilística, elaboração de declarações fiscais (IVA, IRC, IRS, Modelo 22), processamento de salários, relatórios de gestão, cumprimento de obrigações legais e apoio contínuo ao cliente.',
    answer: (
      <>
        Prestamos um serviço completo de{' '}
        <Link href="/servicos/contabilidade" className="text-[#C1272D] hover:underline">
          contabilidade
        </Link>{' '}
        que inclui organização contabilística, elaboração de declarações fiscais
        (IVA, IRC, IRS, Modelo 22), processamento de salários, relatórios de
        gestão, cumprimento de obrigações legais e apoio contínuo ao cliente.
      </>
    ),
    category: 'Contabilidade',
  },
  {
    id: 'trabalham-apenas-com-empresas',
    question: 'Trabalham apenas com empresas?',
    answerText:
      'Sim, a BCA trabalha principalmente com empresas de todos os setores e dimensões. Acompanhamos micro, pequenas e médias empresas, sociedades comerciais, empresários em nome individual e profissionais liberais.',
    answer:
      'Sim, a BCA trabalha principalmente com empresas de todos os setores e dimensões. Acompanhamos micro, pequenas e médias empresas, sociedades comerciais, empresários em nome individual e profissionais liberais.',
    category: 'Geral',
  },
  {
    id: 'fundos-europeus',
    question: 'Apoiam candidaturas a fundos europeus?',
    answerText:
      'Sim, temos uma área especializada em incentivos ao investimento. Ajudamos empresas a identificar oportunidades de financiamento, preparar candidaturas a fundos europeus, incluindo Portugal 2030 e PRR, e incentivos nacionais, acompanhando todo o processo desde a identificação até ao pagamento.',
    answer: (
      <>
        Sim, temos uma área especializada em{' '}
        <Link href="/servicos/incentivos-ao-investimento" className="text-[#C1272D] hover:underline">
          incentivos ao investimento
        </Link>
        . Ajudamos empresas a identificar oportunidades de financiamento,
        preparar candidaturas a fundos europeus (Portugal 2030, PRR) e
        incentivos nacionais, acompanhando todo o processo desde a
        identificação até ao pagamento.
      </>
    ),
    category: 'Incentivos',
  },
  {
    id: 'apoio-fiscal-continuo',
    question: 'A BCA presta apoio fiscal contínuo?',
    answerText:
      'Sim, oferecemos consultoria fiscal contínua que inclui planeamento fiscal, enquadramento fiscal adequado, acompanhamento declarativo, redução de riscos fiscais, defesa em inspeções tributárias e regularização de situações pendentes.',
    answer: (
      <>
        Sim, oferecemos{' '}
        <Link href="/servicos/consultoria-fiscal" className="text-[#C1272D] hover:underline">
          consultoria fiscal
        </Link>{' '}
        contínua que inclui planeamento fiscal, enquadramento fiscal adequado,
        acompanhamento declarativo, redução de riscos fiscais, defesa em
        inspeções tributárias e regularização de situações pendentes.
      </>
    ),
    category: 'Fiscalidade',
  },
  {
    id: 'onde-estao-localizados',
    question: 'Onde estão localizados?',
    answerText:
      'Estamos localizados em Vila do Conde, no Edifício Alameda, Sala 3, 1.º Andar, Avenida Dr. João Canavarro, n.º 305, 4480-668 Vila do Conde. Pode consultar todos os detalhes na página de Contactos.',
    answer: (
      <>
        Estamos localizados em Vila do Conde, no Edifício Alameda, Sala 3,
        1.º Andar, Avenida Dr. João Canavarro, n.º 305, 4480-668 Vila do
        Conde. Pode consultar todos os detalhes na página de{' '}
        <Link href="/contactos" className="text-[#C1272D] hover:underline">
          Contactos
        </Link>
        .
      </>
    ),
    category: 'Contactos',
  },
  {
    id: 'empresas-fora-vila-do-conde',
    question: 'Trabalham com empresas fora de Vila do Conde?',
    answerText:
      'Sim, embora a nossa sede seja em Vila do Conde, trabalhamos com empresas de toda a região do Porto e de outras zonas do país. Graças às tecnologias de comunicação, podemos prestar um serviço de excelência independentemente da localização geográfica.',
    answer:
      'Sim, embora a nossa sede seja em Vila do Conde, trabalhamos com empresas de toda a região do Porto e de outras zonas do país. Graças às tecnologias de comunicação, podemos prestar um serviço de excelência independentemente da localização geográfica.',
    category: 'Geral',
  },
  {
    id: 'prazo-irs',
    question: 'Qual é o prazo para entregar a declaração de IRS?',
    answerText:
      'O prazo para entrega da declaração de IRS deve ser confirmado todos os anos, porque pode sofrer ajustes. A campanha decorre dentro do período anual definido pela Autoridade Tributária. A BCA acompanha os prazos aplicáveis e ajuda os clientes a cumprir atempadamente.',
    answer:
      'O prazo para entrega da declaração de IRS deve ser confirmado todos os anos, porque pode sofrer ajustes. A campanha decorre dentro do período anual definido pela Autoridade Tributária. A BCA acompanha os prazos aplicáveis e ajuda os clientes a cumprir atempadamente.',
    category: 'Fiscalidade',
  },
  {
    id: 'mudar-de-contabilista',
    question: 'Como posso mudar de contabilista?',
    answerText:
      'Mudar de contabilista é um processo simples. Basta contactar-nos e nós tratamos da transição, incluindo a comunicação às finanças e a transferência da documentação necessária.',
    answer: (
      <>
        Mudar de contabilista é um processo simples. Basta{' '}
        <Link href="/contactos" className="text-[#C1272D] hover:underline">
          contactar-nos
        </Link>{' '}
        e nós tratamos da transição, incluindo a comunicação às finanças e a
        transferência da documentação necessária.
      </>
    ),
    category: 'Geral',
  },
  {
    id: 'valores-servico',
    question: 'Quais são os vossos valores de serviço?',
    answerText:
      'Os nossos valores dependem do volume de trabalho, dimensão da empresa e serviços contratados. Fazemos orçamentos personalizados. Use a página de Contactos para nos enviar o seu pedido e receber um enquadramento adequado.',
    answer: (
      <>
        Os nossos valores dependem do volume de trabalho, dimensão da empresa
        e serviços contratados. Fazemos orçamentos personalizados. Use a
        página de{' '}
        <Link href="/contactos" className="text-[#C1272D] hover:underline">
          Contactos
        </Link>{' '}
        para nos enviar o seu pedido e receber um enquadramento adequado.
      </>
    ),
    category: 'Geral',
  },
  {
    id: 'consultoria-gestao',
    question: 'Oferecem serviços de consultoria de gestão?',
    answerText:
      'Sim, além dos serviços contabilísticos e fiscais, oferecemos consultoria de gestão com foco em planeamento estratégico, organização empresarial, controlo de gestão, análise financeira, gestão de custos e apoio à decisão.',
    answer: (
      <>
        Sim, além dos serviços contabilísticos e fiscais, oferecemos{' '}
        <Link href="/servicos/consultoria-de-gestao" className="text-[#C1272D] hover:underline">
          consultoria de gestão
        </Link>{' '}
        com foco em planeamento estratégico, organização empresarial,
        controlo de gestão, análise financeira, gestão de custos e apoio à
        decisão.
      </>
    ),
    category: 'Gestão',
  },
];
