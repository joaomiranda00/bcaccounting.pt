'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Building2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contabilidade = () => {
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
      icon: FileText,
      title: 'Organização Contabilística',
      description: 'Registo e processamento de todas as operações contabilísticas da sua empresa, garantindo a correta classificação e documentação.',
    },
    {
      icon: Calculator,
      title: 'Elaboração de Declarações',
      description: 'Preparação e submissão de todas as declarações fiscais obrigatórias, incluindo IVA, IRC, IRS e Modelo 22.',
    },
    {
      icon: Users,
      title: 'Processamento de Salários',
      description: 'Cálculo de vencimentos, descontos para a Segurança Social e IRS, elaboração de recibos e declarações trimestrais.',
    },
    {
      icon: TrendingUp,
      title: 'Relatórios de Gestão',
      description: 'Elaboração de relatórios periódicos com análise da situação financeira e indicadores de performance da empresa.',
    },
    {
      icon: Shield,
      title: 'Cumprimento Legal',
      description: 'Garantia de cumprimento de todas as obrigações legais e fiscais, evitando coimas e sanções.',
    },
    {
      icon: Clock,
      title: 'Apoio Contínuo',
      description: 'Acompanhamento permanente com disponibilidade para esclarecer dúvidas e resolver situações pontuais.',
    },
  ];

  const benefits = [
    'Libertação de tempo para se focar no seu negócio',
    'Redução de riscos de erros e coimas fiscais',
    'Acesso a informação financeira atualizada e fiável',
    'Apoio técnico especializado e atualizado',
    'Otimização de processos administrativos',
    'Tranquilidade no cumprimento de obrigações',
  ];

  const targetAudience = [
    'Micro, pequenas e médias empresas',
    'Empresários em nome individual',
    'Sociedades comerciais',
    'Startups e novos projetos empresariais',
    'Profissionais liberais',
    'Organizações sem fins lucrativos',
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="service-hero py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <Link href="/servicos" className="hover:text-[#C1272D] transition-colors">Serviços</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Contabilidade</span>
            </nav>
            <div className="w-20 h-20 bg-[#C1272D]/10 rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="w-10 h-10 text-[#C1272D]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Serviços de <span className="text-[#C1272D]">Contabilidade</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Gestão contabilística completa para empresas, com acompanhamento 
              técnico especializado, organização financeira e cumprimento rigoroso 
              das obrigações legais.
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
              <h2 className="section-title">O Que Incluímos</h2>
              <p className="section-subtitle">
                Um serviço completo que cobre todas as necessidades contabilísticas da sua empresa
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
                <h2 className="section-title">Benefícios do Nosso Serviço</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  Ao escolher a BCA para a gestão da contabilidade da sua empresa, 
                  beneficia de um serviço profissional que lhe permite focar no 
                  que realmente importa: o crescimento do seu negócio.
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
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
                    alt="Serviços de Contabilidade"
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Empresas Acompanhadas"
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
              O nosso serviço de contabilidade destina-se a empresas de todos 
                  os setores e dimensões, desde empreendedores individuais até 
                  empresas estabelecidas.
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
        <section className="content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">Como Funciona</h2>
              <p className="section-subtitle">
                Um processo simples e eficiente para garantir o melhor serviço
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Contacto Inicial', desc: 'Fale connosco sobre as necessidades da sua empresa' },
                { step: '2', title: 'Avaliação', desc: 'Analisamos a situação atual e propomos soluções' },
                { step: '3', title: 'Proposta', desc: 'Apresentamos um plano personalizado e orçamento' },
                { step: '4', title: 'Início', desc: 'Começamos o acompanhamento contabilístico' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-[#C1272D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
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
            Precisa de um Serviço de Contabilidade?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contacte-nos para uma reunião sem compromisso e descubra como 
            podemos ajudar a sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white">
              Pedir Orçamento
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

export default Contabilidade;
