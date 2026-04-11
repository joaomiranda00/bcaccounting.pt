'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Calculator,
  TrendingUp,
  Lightbulb,
  Trophy,
  ArrowRight,
  CheckCircle,
  FileText,
  BarChart3,
  Users,
  Building2,
  Briefcase,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Servicos = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.services-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.services-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.service-detail-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.benefit-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.benefits-section',
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
      icon: Calculator,
      title: 'Contabilidade',
      description: 'Gestão contabilística completa para empresas de todos os setores, garantindo o cumprimento de todas as obrigações legais.',
      features: [
        'Organização contabilística',
        'Elaboração de declarações fiscais',
        'Processamento de salários',
        'Relatórios de gestão',
      ],
      path: '/servicos/contabilidade',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Fiscal',
      description: 'Otimização fiscal e cumprimento de obrigações declarativas para minimizar riscos e maximizar eficiência.',
      features: [
        'Planeamento fiscal',
        'Enquadramento fiscal',
        'Acompanhamento declarativo',
        'Redução de riscos fiscais',
      ],
      path: '/servicos/consultoria-fiscal',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Lightbulb,
      title: 'Consultoria de Gestão',
      description: 'Apoio estratégico na tomada de decisões, planeamento e controlo para o crescimento sustentável.',
      features: [
        'Planeamento estratégico',
        'Organização empresarial',
        'Controlo de gestão',
        'Informação para decisão',
      ],
      path: '/servicos/consultoria-de-gestao',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Trophy,
      title: 'Incentivos ao Investimento',
      description: 'Candidaturas a fundos europeus e incentivos nacionais para impulsionar o seu negócio.',
      features: [
        'Identificação de oportunidades',
        'Análise de enquadramento',
        'Preparação de candidaturas',
        'Acompanhamento até aprovação',
      ],
      path: '/servicos/incentivos-ao-investimento',
      color: 'from-[#C1272D] to-[#8B1A1F]',
    },
  ];

  const benefits = [
    {
      icon: FileText,
      title: 'Relatórios Personalizados',
      description: 'Informação clara e objetiva para acompanhar a performance do seu negócio.',
    },
    {
      icon: BarChart3,
      title: 'Análise de Dados',
      description: 'Interpretação de indicadores para tomada de decisões informadas.',
    },
    {
      icon: Users,
      title: 'Atendimento Dedicado',
      description: 'Acompanhamento personalizado por um gestor de conta dedicado.',
    },
    {
      icon: Building2,
      title: 'Conhecimento Setorial',
      description: 'Experiência em diversos setores de atividade económica.',
    },
    {
      icon: Briefcase,
      title: 'Soluções Integradas',
      description: 'Serviços complementares que cobrem todas as necessidades empresariais.',
    },
    {
      icon: CheckCircle,
      title: 'Garantia de Qualidade',
      description: 'Processos certificados e em constante atualização.',
    },
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="services-hero py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="services-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Serviços</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Os Nossos <span className="text-[#C1272D]">Serviços</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Oferecemos um conjunto integrado de serviços de contabilidade, 
              consultoria fiscal e de gestão, adaptados às necessidades específicas 
              de cada empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.path}
                className="service-detail-card group bg-white rounded-2xl border border-[#E0E0E0] overflow-hidden card-hover"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#C1272D]/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#C1272D] group-hover:rotate-[360deg]">
                      <service.icon className="w-8 h-8 text-[#C1272D] transition-colors duration-500 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#333] mb-3 group-hover:text-[#C1272D] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#666] leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-[#666]">
                            <CheckCircle className="w-4 h-4 text-[#C1272D] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-[#C1272D] font-medium">
                        Saber mais
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title">Vantagens de Trabalhar Connosco</h2>
            <p className="section-subtitle">
              Descubra porque somos a escolha certa para o seu negócio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="benefit-item bg-white rounded-xl p-6 border border-[#E0E0E0] card-hover"
              >
                <div className="w-12 h-12 bg-[#C1272D]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#C1272D]" />
                </div>
                <h3 className="text-lg font-bold text-[#333] mb-2">{benefit.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Precisa de Ajuda para Escolher?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contacte-nos para uma consulta gratuita e descubra quais os serviços 
            mais adequados às necessidades da sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white">
              Marque uma Consulta
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

export default Servicos;
