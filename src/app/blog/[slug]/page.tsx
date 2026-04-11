import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

import JsonLd from '@/components/seo/JsonLd';
import {
  calculateReadingTime,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
  formatBlogDate,
} from '@/content/blog';
import { createPageMetadata } from '@/lib/seo';
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
} from '@/lib/structured-data';

export const dynamicParams = false;

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Blog BCA',
      description: 'O artigo pedido não foi encontrado no blog da BCA.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadata = createPageMetadata({
    title: `${post.title} | Blog BCA`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: 'article',
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      images: [post.coverImage],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 2);
  const readingTime = calculateReadingTime(post);
  const blogPostingSchema = getBlogPostingSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Início', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="pt-20">
        <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
              <Link href="/" className="hover:text-[#C1272D] transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#C1272D] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#C1272D]">{post.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#C1272D]/10 px-4 py-2 text-sm font-medium text-[#C1272D] mb-6">
              <Tag className="w-4 h-4" />
              {post.category}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-[#666] leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#666]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C1272D]" />
                Publicado em {formatBlogDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C1272D]" />
                {readingTime} de leitura
              </span>
              {post.updatedAt && (
                <span>Atualizado em {formatBlogDate(post.updatedAt)}</span>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={630}
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 mb-12">
              {post.content.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg text-[#666] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-12">
              {post.content.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl font-bold text-[#333] mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[#666] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[#333]"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#C1272D] flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-12 space-y-4">
              {post.content.conclusion.map((paragraph) => (
                <p key={paragraph} className="text-[#666] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F5F5F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#C1272D] to-[#8B1A1F] rounded-2xl p-8 lg:p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">{post.content.ctaTitle}</h2>
              <p className="text-white/85 leading-relaxed mb-8">
                {post.content.ctaBody}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={post.serviceLink} className="btn-white">
                  Ver {post.serviceLabel}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contactos"
                  className="btn-secondary border-white text-white hover:bg-white hover:text-[#C1272D]"
                >
                  Contactar a BCA
                </Link>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-[#333] mb-4">
                  Artigos Relacionados
                </h2>
                <p className="text-[#666] leading-relaxed">
                  Continue a explorar temas ligados à contabilidade, fiscalidade,
                  gestão e incentivos ao investimento.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="rounded-2xl border border-[#E0E0E0] overflow-hidden bg-white"
                  >
                    <div className="relative h-52">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[#666] mb-3">
                        <span>{relatedPost.category}</span>
                        <span>{relatedPost.formattedPublishedAt}</span>
                        <span>{relatedPost.readingTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#333] mb-3">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[#666] leading-relaxed mb-5">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-[#C1272D] font-medium"
                      >
                        Ler artigo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
