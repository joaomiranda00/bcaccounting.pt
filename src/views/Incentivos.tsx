'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Trophy,
  ArrowRight,
  CheckCircle,
  Euro,
  FileText,
  Search,
  ClipboardCheck,
  TrendingUp,
  Building2,
  Handshake,
  Globe,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Incentivos = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.service-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.content-block',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.service-content',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.feature-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.fund-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.funds-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Identificação de Oportunidades',
      description: 'Análise do perfil da empresa e identificação dos incentivos e fundos mais adequados aos seus projetos.',
    },
    {
      icon: FileText,
      title: 'Análise de Enquadramento',
      description: 'Avaliação detalhada dos requisitos e condições de acesso aos diferentes programas de incentivos.',
    },
    {
      icon: ClipboardCheck,
      title: 'Preparação de Candidaturas',
      description: 'Elaboração e submissão de candidaturas completas e bem fundamentadas para maximizar as hipóteses de aprovação.',
    },
    {
      icon: TrendingUp,
      title: 'Acompanhamento',
      description: 'Seguimento contínuo do processo de avaliação e apoio na resposta a pedidos de esclarecimento.',
    },
    {
      icon: Handshake,
      title: 'Implementação Aprovada',
      description: 'Apoio na execução do projeto aprovado e na preparação da documentação de justificação.',
    },
    {
      icon: Euro,
      title: 'Pedido de Pagamento',
      description: 'Elaboração do pedido de pagamento com toda a documentação de suporte necessária.',
    },
  ];

  const funds = [
    {
      title: 'Portugal 2030',
      description: 'Programa de incentivos comunitários para o período 2021-2027, financiando projetos de inovação, digitalização e sustentabilidade.',
      icon: Globe,
    },
    {
      title: 'PRR - Plano de Recuperação e Resiliência',
      description: 'Agenda para a transição digital e ecológica da economia portuguesa, com apoios significativos para empresas.',
      icon: TrendingUp,
    },
    {
      title: 'Incentivos à Contratação',
      description: 'Apoios à contratação de desempregados, jovens à procura do primeiro emprego e estagiários.',
      icon: Building2,
    },
    {
      title: 'Incentivos à Qualificação',
      description: 'Financiamento para a formação profissional dos trabalhadores e certificação de competências.',
      icon: Trophy,
    },
  ];

  const benefits = [
    'Acesso a financiamento não reembolsável',
    'Redução dos custos de investimento',
    'Melhoria da competitividade empresarial',
    'Apoio à inovação e modernização',
    'Acompanhamento especializado durante todo o processo',
    'Maximização das hipóteses de aprovação',
  ];

  const targetAudience = [
    'Empresas com projetos de investimento',
    'Empresas que pretendem inovar ou digitalizar',
    'Empresas que querem expandir a sua atividade',
    'Empresas em processo de internacionalização',
    'Empresas que pretendem qualificar os seus colaboradores',
    'Startups com projetos inovadores',
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="service-hero py-24 bg-gradient-to-br from-[#C1272D]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <Link href="/servicos" className="hover:text-[#C1272D] transition-colors">Serviços</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Incentivos ao Investimento</span>
            </nav>
            <div className="w-20 h-20 bg-[#C1272D]/10 rounded-2xl flex items-center justify-center mb-6">
              <Trophy className="w-10 h-10 text-[#C1272D]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Incentivos ao <span className="text-[#C1272D]">Investimento</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Ajudamos empresas a candidatarem-se a fundos europeus e incentivos 
              nacionais, acompanhando todo o processo desde a identificação da 
              oportunidade até à aprovação e pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="service-content">
        {/* Services Grid */}
        <section className="content-block py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">Como Podemos Ajudar</h2>
              <p className="section-subtitle">
                Um acompanhamento completo em todas as fases do processo de candidatura
              </p>
            </div>
            <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="feature-card bg-white rounded-xl p-6 border border-[#E0E0E0] card-hover"
                >
                  <div className="w-14 h-14 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[#C1272D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333] mb-2">{service.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funds Section */}
        <section className="funds-section content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">Principais Programas de Incentivos</h2>
              <p className="section-subtitle">
                Conheça alguns dos fundos e incentivos disponíveis para as empresas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {funds.map((fund) => (
                <div
                  key={fund.title}
                  className="fund-card bg-white rounded-xl p-8 border border-[#E0E0E0] card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-xl flex items-center justify-center mb-6">
                    <fund.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333] mb-3">{fund.title}</h3>
                  <p className="text-[#666] leading-relaxed">{fund.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="content-block py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Benefícios dos Incentivos</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  Os incentivos ao investimento representam uma oportunidade única 
                  para as empresas financiarem projetos de crescimento, inovação 
                  e modernização, reduzindo significativamente os custos de investimento 
                  e melhorando a sua competitividade.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C1272D] flex-shrink-0 mt-0.5" />
                      <span className="text-[#333]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop"
                    alt="Incentivos ao Investimento"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#C1272D] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">€M</div>
                  <div className="text-sm opacity-80">Em Incentivos Aprovados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
                    alt="Projetos de Investimento"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-14 h-14 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-[#C1272D]" />
                </div>
                <h2 className="section-title">Para Quem é Destinado</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  Os incentivos ao investimento estão disponíveis para empresas 
                  de todos os setores e dimensões, desde que cumpram os requisitos 
                  específicos de cada programa.
                </p>
                <ul className="space-y-4">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#C1272D] flex-shrink-0 mt-0.5" />
                      <span className="text-[#333]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="content-block py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">O Processo de Candidatura</h2>
              <p className="section-subtitle">
                Acompanhamos todo o processo, desde a identificação até ao pagamento
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Diagnóstico', desc: 'Análise da empresa' },
                { step: '2', title: 'Identificação', desc: 'Oportunidades adequadas' },
                { step: '3', title: 'Candidatura', desc: 'Elaboração e submissão' },
                { step: '4', title: 'Aprovação', desc: 'Acompanhamento do processo' },
                { step: '5', title: 'Pagamento', desc: 'Justificação e receção' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-[#C1272D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-[#333] mb-1">{item.title}</h3>
                  <p className="text-[#666] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-block py-16 bg-[#F5F5F5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#E0E0E0] bg-white p-8">
              <h2 className="text-2xl font-bold text-[#333] mb-4">
                Antes de Avançar para uma Candidatura
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Se está a preparar um projeto de investimento, vale a pena rever
                o artigo introdutório do blog e esclarecer dúvidas iniciais
                antes de enquadrar a candidatura com a BCA.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/blog/como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa"
                  className="text-[#C1272D] hover:underline"
                >
                  Ler artigo sobre preparação de candidatura
                </Link>
                <Link href="/faq" className="text-[#C1272D] hover:underline">
                  Ver perguntas frequentes
                </Link>
                <Link href="/contactos" className="text-[#C1272D] hover:underline">
                  Pedir avaliação inicial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Quer Candidatar-se a Incentivos?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contacte-nos para enquadrar o seu projeto e perceber que tipo de
            apoio pode fazer sentido antes de avançar para candidatura.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white">
              Pedir Avaliação
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:252642059" className="btn-secondary border-white text-white hover:bg-white hover:text-[#C1272D]">
              Ligue-nos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Incentivos;
