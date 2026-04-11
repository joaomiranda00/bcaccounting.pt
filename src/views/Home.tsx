'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calculator,
  TrendingUp,
  Lightbulb,
  Trophy,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

// Hero Section
const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.fromTo(
        '.hero-eyebrow',
        { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.6, delay: 0.4, ease: 'expo.out' }
      );

      gsap.fromTo(
        '.hero-title span',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, delay: 0.5, ease: 'expo.out' }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 0.8, delay: 0.9, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, delay: 1.1, ease: 'back.out(1.7)' }
      );

      // Scroll parallax
      gsap.to('.hero-title', {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-subtitle', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon
                fill="none"
                stroke="#C1272D"
                strokeWidth="0.5"
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-[#C1272D]/5 rounded-full animate-float" />
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-[#C1272D]/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#C1272D]/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />

      <div ref={contentRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="hero-eyebrow inline-block px-4 py-2 bg-[#C1272D]/10 text-[#C1272D] text-sm font-medium rounded-full mb-6">
            BCA - Business Consulting and Accounting
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333] leading-tight mb-6">
            <span className="inline-block">Soluções</span>{' '}
            <span className="inline-block">Contabilísticas</span>{' '}
            <span className="inline-block">e de</span>{' '}
            <span className="inline-block text-[#C1272D]">Gestão</span>{' '}
            <span className="inline-block">para o</span>{' '}
            <span className="inline-block">Sucesso</span>{' '}
            <span className="inline-block">do seu</span>{' '}
            <span className="inline-block">Negócio</span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl text-[#666] mb-10 max-w-2xl leading-relaxed">
            Serviços profissionais de contabilidade, consultoria fiscal e apoio à 
            gestão em Vila do Conde. Acompanhamos o crescimento da sua empresa 
            com soluções personalizadas.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contactos" className="hero-cta btn-primary text-base animate-pulse-soft">
              Fale Connosco
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/servicos" className="hero-cta btn-secondary text-base">
              Conheça os Nossos Serviços
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666]">
        <span className="text-sm">Scroll para explorar</span>
        <div className="w-6 h-10 border-2 border-[#666]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#C1272D] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, rotateY: -30, transformPerspective: 1000 },
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Calculator,
      title: 'Contabilidade',
      description: 'Gestão contabilística completa para empresas, com acompanhamento técnico e cumprimento de obrigações legais.',
      path: '/servicos/contabilidade',
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Fiscal',
      description: 'Otimização fiscal e cumprimento de obrigações declarativas para minimizar riscos e maximizar eficiência.',
      path: '/servicos/consultoria-fiscal',
    },
    {
      icon: Lightbulb,
      title: 'Consultoria de Gestão',
      description: 'Apoio estratégico na tomada de decisões, planeamento e controlo para o crescimento sustentável.',
      path: '/servicos/consultoria-de-gestao',
    },
    {
      icon: Trophy,
      title: 'Incentivos ao Investimento',
      description: 'Candidaturas a fundos europeus e incentivos nacionais para impulsionar o seu negócio.',
      path: '/servicos/incentivos-ao-investimento',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-title">Os Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para o crescimento da sua empresa, 
            com profissionalismo e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.path}
              className="service-card group bg-white rounded-xl p-8 border border-[#E0E0E0] card-hover"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-16 h-16 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#C1272D] group-hover:rotate-[360deg]">
                <service.icon className="w-8 h-8 text-[#C1272D] transition-colors duration-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-3">{service.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed mb-6">{service.description}</p>
              <span className="inline-flex items-center text-[#C1272D] text-sm font-medium">
                Saber mais
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: statsRef, count: yearsCount } = useCountUp(15, 2000);
  const { ref: clientsRef, count: clientsCount } = useCountUp(200, 2000);
  const { ref: satisfactionRef, count: satisfactionCount } = useCountUp(98, 2000);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 80, rotate: (i) => (i % 2 === 0 ? -5 : 5) },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="about-content">
            <h2 className="section-title">Porquê Escolher a BCA?</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Com anos de experiência em contabilidade e consultoria de gestão, 
              a BCA acompanha empresas de todos os setores, oferecendo soluções 
              personalizadas e um atendimento próximo.
            </p>
            <p className="text-[#666] leading-relaxed mb-8">
              A nossa equipa de profissionais qualificados está comprometida em 
              ajudar o seu negócio a crescer, garantindo o cumprimento de todas 
              as obrigações legais e otimizando a gestão financeira.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Equipa experiente e qualificada',
                'Atendimento personalizado',
                'Soluções adaptadas ao seu negócio',
                'Acompanhamento contínuo',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C1272D] flex-shrink-0" />
                  <span className="text-[#333]">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/sobre" className="btn-primary">
              Conheça a Nossa Equipa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <div className="about-image relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Escritório BCA"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#333]/50 to-transparent" />
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-3 gap-4">
              <div ref={statsRef} className="stat-card bg-white rounded-xl p-4 shadow-lg text-center animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-2xl font-bold text-[#C1272D]">{yearsCount}+</div>
                <div className="text-xs text-[#666]">Anos de Experiência</div>
              </div>
              <div ref={clientsRef} className="stat-card bg-white rounded-xl p-4 shadow-lg text-center animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-[#C1272D]">{clientsCount}+</div>
                <div className="text-xs text-[#666]">Empresas Acompanhadas</div>
              </div>
              <div ref={satisfactionRef} className="stat-card bg-white rounded-xl p-4 shadow-lg text-center animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-[#C1272D]">{satisfactionCount}%</div>
                <div className="text-xs text-[#666]">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Incentives Section
const IncentivesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.incentives-content > *',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    'Identificação de oportunidades',
    'Preparação de candidaturas',
    'Acompanhamento até aprovação',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="incentives-content text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Incentivos ao Investimento
            </h2>
            <p className="text-xl text-white/80 mb-4">
              Maximize as oportunidades de financiamento para o seu negócio
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Ajudamos empresas a candidatarem-se a fundos europeus e incentivos 
              nacionais, acompanhando todo o processo desde a identificação da 
              oportunidade até à aprovação.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/servicos/incentivos-ao-investimento"
              className="btn-white"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center animate-pulse-soft">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                  <Trophy className="w-24 h-24 text-white" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-[#C1272D] font-bold text-lg">€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -60 : 60) },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Inicial',
      description: 'Analisamos a situação atual da sua empresa para identificar necessidades e oportunidades.',
      icon: Users,
    },
    {
      number: '02',
      title: 'Proposta Personalizada',
      description: 'Apresentamos soluções adequadas às suas necessidades específicas e objetivos.',
      icon: Award,
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Colocamos em prática as estratégias definidas com profissionalismo e eficiência.',
      icon: Clock,
    },
    {
      number: '04',
      title: 'Acompanhamento Contínuo',
      description: 'Mantemos apoio regular e ajustes necessários para garantir resultados.',
      icon: CheckCircle,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">O Nosso Processo</h2>
          <p className="section-subtitle">
            Um método estruturado para garantir o sucesso do seu projeto
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C1272D] to-transparent origin-top hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`process-step relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#C1272D] rounded-lg flex items-center justify-center animate-pulse-soft">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-[#C1272D]/20">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#333] mb-2">{step.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-[#C1272D] rounded-full border-4 border-white shadow-lg z-10" />
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Location Section
const LocationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.location-info > *',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.location-map',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info */}
          <div className="location-info">
            <h2 className="section-title">Onde Estamos</h2>
            <p className="section-subtitle">
              Visite-nos em Vila do Conde. Estamos aqui para o ajudar.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#C1272D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C1272D]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1">Morada</h4>
                  <p className="text-[#666] text-sm">
                    Edifício Alameda, Sala 3, 1.º Andar<br />
                    Avenida Dr. João Canavarro, n.º 305<br />
                    4480-668 Vila do Conde
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#C1272D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#C1272D]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1">Telefone</h4>
                  <a
                    href="tel:252642059"
                    className="text-[#666] text-sm hover:text-[#C1272D] transition-colors"
                  >
                    252 642 059
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#C1272D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#C1272D]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1">Email</h4>
                  <a
                    href="mailto:bca@bcaccounting.pt"
                    className="text-[#666] text-sm hover:text-[#C1272D] transition-colors"
                  >
                    bca@bcaccounting.pt
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#C1272D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C1272D]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-1">Horário</h4>
                  <p className="text-[#666] text-sm">Segunda a Sexta: 9h - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="location-map rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.404307009062!2d-8.7467!3d41.3514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244f0000000000%3A0x0!2zNDHCsDIxJzA1LjAiTiA4wrA0NCc0OC4xIlc!5e0!3m2!1spt-PT!2spt!4v1609459200000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BCA"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="cta-content text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto a Crescer o Seu Negócio?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Entre em contacto connosco e descubra como podemos ajudar
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white animate-pulse-soft">
              Marque uma Reunião
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="tel:252642059" className="btn-secondary border-white text-white hover:bg-white hover:text-[#C1272D]">
              <Phone className="w-5 h-5 mr-2" />
              Fale Connosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Page
const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IncentivesSection />
      <ProcessSection />
      <LocationSection />
      <CTASection />
    </main>
  );
};

export default Home;
