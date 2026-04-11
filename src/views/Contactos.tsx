'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const Contactos = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.contact-info-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-form-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Morada',
      content: (
        <>
          Edifício Alameda, Sala 3, 1.º Andar<br />
          Avenida Dr. João Canavarro, n.º 305<br />
          4480-668 Vila do Conde
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: (
        <a href="tel:252642059" className="hover:text-[#C1272D] transition-colors">
          252 642 059
        </a>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <a href="mailto:bca@bcaccounting.pt" className="hover:text-[#C1272D] transition-colors">
          bca@bcaccounting.pt
        </a>
      ),
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 9h - 18h',
    },
  ];

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="contact-hero py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-hero-content max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Contactos</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Contacte a <span className="text-[#C1272D]">BCA</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Entre em contacto connosco para pedidos de informação, propostas ou
              enquadramento de serviços de contabilidade, fiscalidade, gestão e
              incentivos ao investimento. Estamos em Vila do Conde e trabalhamos
              com empresas de diferentes setores e dimensões.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="contact-info-card bg-[#F5F5F5] rounded-xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 bg-[#C1272D]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#C1272D]" />
                </div>
                <h3 className="font-bold text-[#333] mb-2">{info.title}</h3>
                <div className="text-[#666] text-sm">{info.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="contact-form bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#333] mb-2">Envie-nos uma Mensagem</h2>
              <p className="text-[#666] mb-6">
                Use o formulário para pedir informação sobre serviços, esclarecer
                dúvidas ou iniciar uma conversa sobre a realidade da sua empresa.
              </p>

              <div className="bg-[#F5F5F5] rounded-xl p-5 mb-6">
                <h3 className="font-bold text-[#333] mb-3">Podemos ajudar com</h3>
                <ul className="space-y-2 text-sm text-[#666]">
                  <li>
                    <Link href="/servicos/contabilidade" className="text-[#C1272D] hover:underline">
                      Contabilidade para empresas
                    </Link>{' '}
                    e acompanhamento regular de obrigações
                  </li>
                  <li>
                    <Link href="/servicos/consultoria-fiscal" className="text-[#C1272D] hover:underline">
                      Consultoria fiscal
                    </Link>{' '}
                    e enquadramento declarativo
                  </li>
                  <li>
                    <Link href="/servicos/consultoria-de-gestao" className="text-[#C1272D] hover:underline">
                      Apoio à gestão
                    </Link>{' '}
                    e análise para decisão
                  </li>
                  <li>
                    Perguntas frequentes sobre serviços e processo em{' '}
                    <Link href="/faq" className="text-[#C1272D] hover:underline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-700 mb-2">Contacto Registado</h3>
                  <p className="text-green-600">
                    Obrigado pelo seu contacto. A sua mensagem foi registada com sucesso.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="O seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="o.seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="O seu telefone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Assunto da mensagem"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escreva a sua mensagem..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-[#666] text-center">
                    Ao enviar este formulário, concorda com a nossa{' '}
                    <Link href="/politica-de-privacidade" className="text-[#C1272D] hover:underline">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.404307009062!2d-8.7467!3d41.3514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244f0000000000%3A0x0!2zNDHCsDIxJzA1LjAiTiA4wrA0NCc0OC4xIlc!5e0!3m2!1spt-PT!2spt!4v1609459200000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização BCA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social & CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Se preferir começar por explorar os nossos serviços, consulte também
              as páginas de{' '}
              <Link href="/servicos" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Serviços
              </Link>{' '}
              e{' '}
              <Link href="/faq" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                FAQ
              </Link>.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#C1272D]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#C1272D]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactos;
