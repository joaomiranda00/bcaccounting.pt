'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle,
  FileText,
  Shield,
  Scale,
  AlertTriangle,
  Target,
  Clock,
  Building2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ConsultoriaFiscal = () => {
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
      title: 'Planeamento Fiscal',
      description: 'Estratégias fiscalmente eficientes para otimizar a carga fiscal da empresa de forma legal e segura.',
    },
    {
      icon: FileText,
      title: 'Enquadramento Fiscal',
      description: 'Análise e definição do regime fiscal mais adequado às características e atividade da empresa.',
    },
    {
      icon: Clock,
      title: 'Acompanhamento Declarativo',
      description: 'Gestão de todas as obrigações declarativas periódicas e anuais junto das autoridades fiscais.',
    },
    {
      icon: Shield,
      title: 'Redução de Riscos',
      description: 'Identificação e mitigação de riscos fiscais, prevenindo situações de contingência.',
    },
    {
      icon: Scale,
      title: 'Defesa em Inspeções',
      description: 'Acompanhamento e defesa em procedimentos de inspeção tributária e auditorias fiscais.',
    },
    {
      icon: AlertTriangle,
      title: 'Regularização de Situações',
      description: 'Apoio na regularização de situações fiscais pendentes ou em incumprimento.',
    },
  ];

  const benefits = [
    'Otimização legal da carga fiscal',
    'Prevenção de riscos e contingências',
    'Cumprimento atempado de obrigações',
    'Acesso a regimes fiscais favoráveis',
    'Defesa em processos de inspeção',
    'Tranquilidade na gestão fiscal',
  ];

  const targetAudience = [
    'Empresas que querem otimizar a sua fiscalidade',
    'Empresas em processo de reestruturação',
    'Empresas com operações complexas',
    'Empresas em crescimento ou expansão',
    'Empresas que enfrentam inspeções fiscais',
    'Empresários que pretendem planear a sucessão',
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="service-hero py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <Link href="/servicos" className="hover:text-[#C1272D] transition-colors">Serviços</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Consultoria Fiscal</span>
            </nav>
            <div className="w-20 h-20 bg-[#C1272D]/10 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-[#C1272D]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Consultoria <span className="text-[#C1272D]">Fiscal</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Otimização fiscal e cumprimento de obrigações declarativas para 
              minimizar riscos, maximizar eficiência e garantir a conformidade 
              com a legislação em vigor.
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
              <h2 className="section-title">Os Nossos Serviços Fiscais</h2>
              <p className="section-subtitle">
                Soluções completas para a gestão fiscal da sua empresa
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
                <h2 className="section-title">Benefícios da Consultoria Fiscal</h2>
                <p className="text-[#666] leading-relaxed mb-8">
                  Uma gestão fiscal eficiente é fundamental para a saúde financeira 
                  da sua empresa. Com a nossa consultoria, beneficia de estratégias 
                  fiscalmente adequadas que permitem reduzir a carga tributária de 
                  forma legal e segura.
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
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                    alt="Consultoria Fiscal"
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
                  <Image
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                    alt="Planeamento Fiscal"
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
                  A nossa consultoria fiscal destina-se a empresas que pretendem 
                  otimizar a sua gestão fiscal, quer se trate de empresas estabelecidas 
                  ou de novos projetos empresariais.
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

        {/* Importance */}
        <section className="content-block py-24 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Por Que é Importante a Consultoria Fiscal?
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-6">
                    A legislação fiscal está em constante mudança, tornando-se 
                    cada vez mais complexa. Sem um acompanhamento especializado, 
                    as empresas podem estar a pagar mais impostos do que o necessário 
                    ou a incorrer em riscos de não conformidade.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Legislação fiscal complexa e em constante atualização',
                      'Risco de coimas e sanções por incumprimento',
                      'Oportunidades de otimização fiscal por aproveitar',
                      'Necessidade de planeamento estratégico',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Áreas de Atuação</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'IRC - Imposto sobre o Rendimento das Pessoas Coletivas',
                      'IRS - Imposto sobre o Rendimento das Pessoas Singulares',
                      'IVA - Imposto sobre o Valor Acrescentado',
                      'IMI - Imposto Municipal sobre Imóveis',
                      'IMT - Imposto Municipal sobre Transmissões',
                      'Stamp - Imposto do Selo',
                      'Contribuições para a Segurança Social',
                      'Benefícios fiscais e incentivos',
                    ].map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-block py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#E0E0E0] bg-[#F9F9F9] p-8">
              <h2 className="text-2xl font-bold text-[#333] mb-4">
                Apoio Fiscal com Contexto Adicional
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Antes de decidir, pode rever o artigo sobre planeamento fiscal
                para PME e consultar a FAQ para perceber melhor quando faz
                sentido pedir apoio fiscal mais estruturado.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/blog/planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal"
                  className="text-[#C1272D] hover:underline"
                >
                  Ler artigo sobre planeamento fiscal para PME
                </Link>
                <Link href="/faq" className="text-[#C1272D] hover:underline">
                  Consultar perguntas frequentes
                </Link>
                <Link href="/contactos" className="text-[#C1272D] hover:underline">
                  Falar com a BCA
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
            Quer Otimizar a Fiscalidade da Sua Empresa?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contacte-nos para uma consulta fiscal personalizada e descubra 
            como podemos ajudar a reduzir a sua carga tributária.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contactos" className="btn-white">
              Pedir Consulta
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

export default ConsultoriaFiscal;
