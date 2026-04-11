'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import type { BlogPostSummary } from '@/content/blog';

gsap.registerPlugin(ScrollTrigger);

type BlogProps = {
  posts: BlogPostSummary[];
};

const Blog = ({ posts }: BlogProps) => {
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

  const categories = [
    'Todos',
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const featuredPost = posts[0];

  const filteredPosts = selectedCategory === 'Todos'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  const gridPosts =
    selectedCategory === 'Todos'
      ? filteredPosts.filter((post) => post.slug !== featuredPost?.slug)
      : filteredPosts;

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
              apoiar empresas em fase de decisão e esclarecimento, com ligação
              direta às áreas de serviço da BCA.
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
            <h2 className="text-2xl font-bold text-[#333] mb-3">Base editorial BCA</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              O blog dispõe agora de artigos indexáveis ligados aos principais
              clusters estratégicos da BCA. Novos conteúdos podem ser adicionados
              a partir desta estrutura local, mantendo consistência editorial,
              metadata e ligação às páginas de serviço.
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

          {featuredPost && selectedCategory === 'Todos' && (
            <article className="blog-card rounded-2xl overflow-hidden border border-[#E0E0E0] bg-white mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#C1272D] mb-4">
                    <Tag className="w-4 h-4" />
                    Artigo em destaque
                  </div>
                  <h2 className="text-3xl font-bold text-[#333] mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#666] leading-relaxed mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#666] mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C1272D]" />
                      {featuredPost.formattedPublishedAt}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C1272D]" />
                      {featuredPost.readingTime}
                    </span>
                    <span>{featuredPost.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="btn-primary">
                      Ler Artigo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link href={featuredPost.serviceLink} className="btn-secondary">
                      Ver {featuredPost.serviceLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Blog Grid */}
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="blog-card bg-white rounded-xl overflow-hidden border border-[#E0E0E0] card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                      {post.formattedPublishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#333] mb-2 group-hover:text-[#C1272D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="space-y-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#C1272D] text-sm font-medium"
                    >
                      Ler artigo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                    <div>
                      <Link
                        href={post.serviceLink}
                        className="text-xs text-[#666] hover:text-[#C1272D] transition-colors"
                      >
                        Serviço relacionado: {post.serviceLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {gridPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#666]">
                Não existem artigos nesta categoria neste momento.
              </p>
            </div>
          )}

          <div className="text-center mt-12 text-sm text-[#666] max-w-3xl mx-auto">
            Novos artigos podem ser adicionados através da estrutura local de
            conteúdo do projeto, mantendo consistência de metadata, leitura e
            ligação às páginas de serviço.
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
              Receba conteúdos sobre contabilidade, fiscalidade, gestão e
              incentivos ao investimento. A integração real deste formulário
              permanece por confirmar.
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
