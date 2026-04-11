'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Target,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Settings,
  Building2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ConsultoriaGestao = () => {
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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Target,
      title: 'Planeamento Estratégico',
      description: 'Definição de objetivos, estratégias e planos de ação para o crescimento sustentável do negócio.',
    },
    {
      icon: Settings,
      title: 'Organização Empresarial',
      description: 'Otimização de processos, estruturas e fluxos de trabalho para maior eficiência operacional.',
    },
    {
      icon: BarChart3,
      title: 'Controlo de Gestão',
      description: 'Implementação de sistemas de monitorização e avaliação de performance empresarial.',
    },
    {
      icon: PieChart,
      title: 'Análise Financeira',
      description: 'Interpretação de indicadores financeiros para tomada de decisões informadas.',
    },
    {
      icon: TrendingUp,
      title: 'Gestão de Custos',
      description: 'Identificação e otimização de custos para melhorar a rentabilidade do negócio.',
    },
    {
      icon: Users,
      title: 'Gestão de Recursos Humanos',
      description: 'Apoio na gestão da equipa, desde recrutamento até avaliação de performance.',
    },
  ];

  const benefits = [
    'Tomada de decisões baseada em dados concretos',
    'Maior eficiência operacional e redução de desperdícios',
    'Melhoria da rentabilidade e competitividade',
    'Planeamento estratégico alinhado aos objetivos',
    'Identificação de oportunidades de crescimento',
    'Antecipação de problemas e gestão de riscos',
  ];

  const targetAudience = [
    'Empresas em fase de crescimento',
    'Empresas que enfrentam desafios de gestão',
    'Empresários que querem profissionalizar o negócio',
    'Empresas em processo de reestruturação',
    'Startups que precisam de orientação estratégica',
    'Empresas familiares em transição geracional',
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="service-hero py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <Link href="/servicos" className="hover:text-[#C1272D] transition-colors">Serviços</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Consultoria de Gestão</span>
            </nav>
            <div className="w-20 h-20 bg-[#C1272D]/10 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-10 h-10 text-[#C1272D]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Consultoria de <span className="text-[#C1272D]">Gestão</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Apoio estratégico na tomada de decisões, planeamento e controlo 
              para o crescimento sustentável do seu negócio, com soluções 
              personalizadas às necessidades específicas da sua empresa.
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
              <h2 className="section-title">Áreas de Consultoria</h2>
              <p className="section-subtitle">
                Soluções integradas para melhorar a gestão da sua empresa
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

        {/* Benefits */}
        <section className="content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Benefícios da Consultoria de Gestão</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  A consultoria de gestão permite às empresas beneficiar de uma 
                  visão externa e especializada, identificando oportunidades de 
                  melhoria e implementando soluções práticas que geram resultados 
                  mensuráveis.
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                    alt="Consultoria de Gestão"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="content-block py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&h=600&fit=crop"
                    alt="Planeamento Estratégico"
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
                  A nossa consultoria de gestão destina-se a empresas de todos 
                  os setores e dimensões que pretendem melhorar a sua performance, 
                  quer estejam em fase de crescimento, reestruturação ou 
                  profissionalização.
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

        {/* Methodology */}
        <section className="content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">A Nossa Metodologia</h2>
              <p className="section-subtitle">
                Um processo estruturado para garantir resultados efetivos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Diagnóstico',
                  desc: 'Análise aprofundada da situação atual da empresa, identificando pontos fortes e áreas de melhoria.',
                },
                {
                  step: '2',
                  title: 'Planeamento',
                  desc: 'Definição de objetivos claros e desenvolvimento de um plano de ação detalhado.',
                },
                {
                  step: '3',
                  title: 'Implementação',
                  desc: 'Execução das medidas definidas, com acompanhamento e ajustes conforme necessário.',
                },
                {
                  step: '4',
                  title: 'Avaliação',
                  desc: 'Monitorização de resultados e avaliação do impacto das ações implementadas.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 border border-[#E0E0E0]">
                  <div className="w-12 h-12 bg-[#C1272D] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-[#333] mb-2">{item.title}</h3>
                  <p className="text-[#666] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Quer Melhorar a Gestão da Sua Empresa?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contacte-nos para uma reunião de diagnóstico e descubra como 
            podemos ajudar o seu negócio a crescer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white">
              Marcar Reunião
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

export default ConsultoriaGestao;
