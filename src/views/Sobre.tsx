'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useCountUp } from '../hooks/useScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

const Sobre = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { ref: yearsRef, count: yearsCount } = useCountUp(15, 2000);
  const { ref: clientsRef, count: clientsCount } = useCountUp(200, 2000);
  const { ref: teamRef, count: teamCount } = useCountUp(8, 2000);
  const { ref: satisfactionRef, count: satisfactionCount } = useCountUp(98, 2000);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Section animations
      gsap.fromTo(
        '.about-section',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.about-sections',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Values animation
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicamo-nos integralmente ao sucesso dos nossos clientes, estabelecendo parcerias de confiança a longo prazo.',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Buscamos continuamente a excelência em todos os serviços que prestamos, com rigor e profissionalismo.',
    },
    {
      icon: Users,
      title: 'Proximidade',
      description: 'Valorizamos o contacto direto e personalizado, conhecendo cada cliente e as suas necessidades específicas.',
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Adotamos as melhores práticas e tecnologias para oferecer soluções modernas e eficientes.',
    },
  ];

  const differentials = [
    'Equipa multidisciplinar com formação especializada',
    'Atendimento personalizado e próximo',
    'Soluções adaptadas a cada setor de atividade',
    'Tecnologia de ponta para gestão eficiente',
    'Acompanhamento contínuo e proativo',
    'Transparência em todos os processos',
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="about-hero py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Sobre</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Sobre a <span className="text-[#C1272D]">BCA</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              A BCA - Business Consulting and Accounting é uma empresa dedicada 
              ao acompanhamento empresarial em contabilidade, fiscalidade e 
              consultoria de gestão, com sede em Vila do Conde.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-sections">
        {/* Who We Are */}
        <section className="about-section py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="section-title">Quem Somos</h2>
                <p className="text-[#666] leading-relaxed mb-6">
                  Fundada com o objetivo de proporcionar serviços de excelência 
                  em contabilidade e consultoria, a BCA tem acompanhado o 
                  crescimento de centenas de empresas ao longo dos anos.
                </p>
                <p className="text-[#666] leading-relaxed mb-6">
                  A nossa equipa é composta por profissionais qualificados e 
                  experientes, comprometidos em oferecer soluções personalizadas 
                  que respondam às necessidades específicas de cada cliente.
                </p>
                <p className="text-[#666] leading-relaxed">
                  Acreditamos que o sucesso dos nossos clientes é o nosso sucesso, 
                  pelo que trabalhamos diariamente para garantir um serviço de 
                  excelência, baseado na confiança, rigor e inovação.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                    alt="Equipa BCA"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#C1272D] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">{yearsCount}+</div>
                  <div className="text-sm opacity-80">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div ref={yearsRef} className="stat-item bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#C1272D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#C1272D]" />
                </div>
                <div className="text-4xl font-bold text-[#C1272D] mb-2">{yearsCount}+</div>
                <div className="text-[#666]">Anos de Experiência</div>
              </div>
              <div ref={clientsRef} className="stat-item bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#C1272D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#C1272D]" />
                </div>
                <div className="text-4xl font-bold text-[#C1272D] mb-2">{clientsCount}+</div>
                <div className="text-[#666]">Empresas Acompanhadas</div>
              </div>
              <div ref={teamRef} className="stat-item bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#C1272D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#C1272D]" />
                </div>
                <div className="text-4xl font-bold text-[#C1272D] mb-2">{teamCount}</div>
                <div className="text-[#666]">Colaboradores</div>
              </div>
              <div ref={satisfactionRef} className="stat-item bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#C1272D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#C1272D]" />
                </div>
                <div className="text-4xl font-bold text-[#C1272D] mb-2">{satisfactionCount}%</div>
                <div className="text-[#666]">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-section py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-2xl p-8 text-white">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">A Nossa Missão</h3>
                <p className="text-white/80 leading-relaxed">
                  Proporcionar serviços de contabilidade e consultoria de excelência, 
                  contribuindo para o sucesso e crescimento sustentável dos nossos 
                  clientes, através de soluções personalizadas e um acompanhamento 
                  próximo e profissional.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#C1272D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#333] mb-4">A Nossa Visão</h3>
                <p className="text-[#666] leading-relaxed">
                  Ser reconhecida como referência em serviços de contabilidade e 
                  consultoria de gestão na região, destacando-se pela qualidade, 
                  inovação e relações de confiança estabelecidas com os clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="section-title">Os Nossos Valores</h2>
              <p className="section-subtitle">
                Princípios que guiam o nosso trabalho diário
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="value-card bg-white rounded-xl p-6 border border-[#E0E0E0] card-hover"
                >
                  <div className="w-14 h-14 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-[#C1272D]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#333] mb-2">{value.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="about-section py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                    alt="Consultoria BCA"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="section-title">O Que Nos Diferencia</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  Na BCA, combinamos experiência, conhecimento técnico e um 
                  compromisso genuíno com o sucesso dos nossos clientes. 
                  Conheça os fatores que nos distinguem:
                </p>
                <ul className="space-y-4">
                  {differentials.map((item, index) => (
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

        {/* Location */}
        <section className="about-section py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="section-title">A Nossa Localização</h2>
              <p className="section-subtitle">
                Estamos em Vila do Conde, prontos para o receber
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-[#333] mb-2">Morada</h4>
                  <p className="text-[#666] text-sm">
                    Edifício Alameda, Sala 3, 1.º Andar<br />
                    Avenida Dr. João Canavarro, n.º 305<br />
                    4480-668 Vila do Conde
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-2">Contactos</h4>
                  <p className="text-[#666] text-sm">
                    Tel: 252 642 059<br />
                    Fax: 252 638 767<br />
                    Email: bca@bcaccounting.pt
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#333] mb-2">Horário</h4>
                  <p className="text-[#666] text-sm">
                    Segunda a Sexta<br />
                    9h00 - 18h00<br />
                    <span className="text-[#C1272D]">Atendimento sob marcação</span>
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contactos" className="btn-primary">
                  Contacte-nos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sobre;
