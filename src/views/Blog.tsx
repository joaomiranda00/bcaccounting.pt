'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.blog-hero-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.blog-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.blog-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.blog-grid',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const categories = ['Todos', 'Contabilidade', 'Fiscalidade', 'Gestão', 'Incentivos'];

  const posts = [
    {
      id: 1,
      title: 'Como Escolher um Contabilista para a Sua Empresa',
      excerpt: 'Critérios práticos para avaliar acompanhamento, proximidade, cumprimento e capacidade de leitura financeira no apoio à empresa.',
      category: 'Contabilidade',
      date: '15 Jan 2025',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      supportPage: '/servicos/contabilidade',
      supportLabel: 'Serviços de Contabilidade',
    },
    {
      id: 2,
      title: 'O Que uma Empresa Deve Preparar para uma Candidatura a Fundos Europeus',
      excerpt: 'Guia introdutório sobre informação, enquadramento e documentação útil antes de avançar para uma candidatura.',
      category: 'Incentivos',
      date: '10 Jan 2025',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=400&fit=crop',
      supportPage: '/servicos/incentivos-ao-investimento',
      supportLabel: 'Incentivos ao Investimento',
    },
    {
      id: 3,
      title: 'Diferença Entre Contabilidade e Consultoria de Gestão',
      excerpt: 'Explicação simples sobre quando a empresa precisa de cumprimento contabilístico e quando precisa de apoio à decisão e controlo.',
      category: 'Gestão',
      date: '5 Jan 2025',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      supportPage: '/servicos/consultoria-de-gestao',
      supportLabel: 'Consultoria de Gestão',
    },
    {
      id: 4,
      title: 'Erros Fiscais Mais Comuns nas PME',
      excerpt: 'Sinais de risco fiscal frequentes nas PME e formas de reduzir exposição através de acompanhamento adequado.',
      category: 'Fiscalidade',
      date: '28 Dez 2024',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      supportPage: '/servicos/consultoria-fiscal',
      supportLabel: 'Consultoria Fiscal',
    },
    {
      id: 5,
      title: 'Como Saber Se a Sua Empresa Pode Beneficiar de Incentivos ao Investimento',
      excerpt: 'Perguntas de enquadramento inicial para perceber se o projeto, a empresa e o investimento justificam avançar.',
      category: 'Incentivos',
      date: '20 Dez 2024',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
      supportPage: '/servicos/incentivos-ao-investimento',
      supportLabel: 'Incentivos ao Investimento',
    },
    {
      id: 6,
      title: 'Guia Prático do IVA para Empresas',
      excerpt: 'Resumo introdutório para empresas que precisam de compreender obrigações, prazos e impacto do IVA na operação.',
      category: 'Fiscalidade',
      date: '15 Dez 2024',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop',
      supportPage: '/servicos/consultoria-fiscal',
      supportLabel: 'Consultoria Fiscal',
    },
  ];

  const filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <div ref={pageRef} className="pt-20">
      {/* Hero Section */}
      <section className="blog-hero py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blog-hero-content max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#C1272D]">Blog</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              Blog <span className="text-[#C1272D]">BCA</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Este espaço reúne temas editoriais ligados à contabilidade,
              fiscalidade, gestão e incentivos ao investimento, pensados para
              apoiar empresas em fase de decisão e esclarecimento.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#C1272D] text-white'
                    : 'bg-[#F5F5F5] text-[#666] hover:bg-[#E0E0E0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12 rounded-2xl border border-[#E0E0E0] bg-[#F9F9F9] p-6 text-center">
            <h2 className="text-2xl font-bold text-[#333] mb-3">Hub editorial em evolução</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              A listagem atual funciona como base editorial para os clusters
              estratégicos da BCA. Enquanto as páginas individuais de artigo não
              estão publicadas, use estes temas para explorar os serviços
              relacionados e perceber onde cada conteúdo se enquadra.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/servicos/contabilidade" className="text-[#C1272D] hover:underline">
                Contabilidade
              </Link>
              <Link href="/servicos/consultoria-fiscal" className="text-[#C1272D] hover:underline">
                Consultoria Fiscal
              </Link>
              <Link href="/servicos/consultoria-de-gestao" className="text-[#C1272D] hover:underline">
                Consultoria de Gestão
              </Link>
              <Link href="/servicos/incentivos-ao-investimento" className="text-[#C1272D] hover:underline">
                Incentivos ao Investimento
              </Link>
              <Link href="/contactos" className="text-[#C1272D] hover:underline">
                Contactos
              </Link>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card bg-white rounded-xl overflow-hidden border border-[#E0E0E0] card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#C1272D] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#666] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#333] mb-2 group-hover:text-[#C1272D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[#666] mb-4">
                    Artigo completo em preparação.
                  </p>
                  <Link
                    href={post.supportPage}
                    className="inline-flex items-center text-[#C1272D] text-sm font-medium"
                  >
                    Ver serviço relacionado: {post.supportLabel}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 text-sm text-[#666]">
            A arquitetura de artigos individuais continua por implementar e fica
            documentada para a fase editorial seguinte.
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-2xl p-8 lg:p-12 text-center text-white">
            <Tag className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Subscreva a Nossa Newsletter</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Receba as últimas notícias, artigos e dicas sobre contabilidade, 
              fiscalidade e gestão diretamente no seu email.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-4 py-3 rounded-lg text-[#333] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#C1272D] font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
