'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
  answerText: string;
  category: string;
};

const FAQ = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.faq-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const faqs: FaqItem[] = [
    {
      id: 'contabilidade-servicos',
      question: 'Que serviços de contabilidade prestam?',
      answerText:
        'Prestamos um serviço completo de contabilidade que inclui organização contabilística, elaboração de declarações fiscais, processamento de salários, relatórios de gestão, cumprimento de obrigações legais e apoio contínuo ao cliente.',
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
        'Sim, temos uma área especializada em incentivos ao investimento. Ajudamos empresas a identificar oportunidades de financiamento, preparar candidaturas a fundos europeus e incentivos nacionais, acompanhando todo o processo desde a identificação até ao pagamento.',
      answer: (
        <>
          Sim, temos uma área especializada em{' '}
          <Link href="/servicos/incentivos-ao-investimento" className="text-[#C1272D] hover:underline">
            incentivos ao investimento
          </Link>.
          Ajudamos empresas a identificar oportunidades de financiamento,
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
        'Estamos localizados em Vila do Conde, no Edifício Alameda, Sala 3, 1.º Andar, Avenida Dr. João Canavarro, n.º 305, 4480-668 Vila do Conde. O nosso horário de atendimento é de segunda a sexta, das 9h às 18h.',
      answer: (
        <>
          Estamos localizados em Vila do Conde, no Edifício Alameda, Sala 3,
          1.º Andar, Avenida Dr. João Canavarro, n.º 305, 4480-668 Vila do
          Conde. Pode consultar todos os detalhes na página de{' '}
          <Link href="/contactos" className="text-[#C1272D] hover:underline">
            Contactos
          </Link>.
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
        'O prazo para entrega da declaração de IRS varia todos os anos, mas geralmente é entre abril e junho. Aconselhamos a entrega atempada para evitar coimas. A BCA acompanha todos os prazos e alerta os clientes com antecedência.',
      answer:
        'O prazo para entrega da declaração de IRS varia todos os anos, mas geralmente é entre abril e junho. Aconselhamos a entrega atempada para evitar coimas. A BCA acompanha todos os prazos e alerta os clientes com antecedência.',
      category: 'Fiscalidade',
    },
    {
      id: 'mudar-de-contabilista',
      question: 'Como posso mudar de contabilista?',
      answerText:
        'Mudar de contabilista é um processo simples. Basta contactar-nos e nós tratamos de toda a transição, incluindo a comunicação às finanças e a transferência da documentação necessária. Garantimos uma mudança suave sem interrupções no serviço.',
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
        'Os nossos valores dependem do volume de trabalho, dimensão da empresa e serviços contratados. Fazemos orçamentos personalizados sem compromisso. Contacte-nos para uma avaliação das suas necessidades e receba uma proposta adequada.',
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
        'Sim, além dos serviços contabilísticos e fiscais, oferecemos consultoria de gestão que inclui planeamento estratégico, organização empresarial, controlo de gestão, análise financeira, gestão de custos e apoio na tomada de decisões.',
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

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answerText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Contabilidade', 'Fiscalidade', 'Gestão', 'Incentivos', 'Contactos', 'Geral'];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="faq-hero py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="faq-hero-content max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#C1272D]">FAQ</span>
            </nav>
            <div className="w-20 h-20 bg-[#C1272D]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#C1272D]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Perguntas <span className="text-[#C1272D]">Frequentes</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed mb-8">
              Encontre respostas para as dúvidas mais frequentes sobre
              contabilidade, fiscalidade, apoio à gestão, incentivos ao
              investimento e contacto com a BCA.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              <input
                type="text"
                placeholder="Pesquisar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1272D] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-list py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#666] leading-relaxed mb-8">
            As perguntas estão agrupadas por tema para facilitar a navegação e
            preparar esta página para futura estruturação semântica adicional.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSearchTerm('')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                searchTerm === ''
                  ? 'bg-[#C1272D] text-white'
                  : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  searchTerm === category
                    ? 'bg-[#C1272D] text-white'
                    : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="faq-item bg-[#F5F5F5] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-[#333] pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C1272D] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === faq.id ? 'max-h-[32rem]' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-[#666] text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[#666]">Nenhuma pergunta encontrada.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-[#C1272D] hover:underline mt-2"
                >
                  Ver todas as perguntas
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ainda tem Dúvidas?</h2>
          <p className="text-xl text-white/80 mb-8">
            Se não encontrou a resposta que procurava, não hesite em contactar-nos.
          </p>
          <Link
            href="/contactos"
            className="btn-white inline-flex items-center"
          >
            Contacte-nos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
