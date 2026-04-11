import Link from 'next/link';

export default function BlogArticleNotFound() {
  return (
    <section className="pt-28 pb-24 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-[#C1272D] mb-4">Blog BCA</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6">
          Artigo não encontrado
        </h1>
        <p className="text-xl text-[#666] leading-relaxed mb-8">
          O artigo pedido não está disponível. Pode voltar à listagem do blog ou
          entrar em contacto connosco para esclarecer a sua dúvida.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/blog" className="btn-primary">
            Voltar ao Blog
          </Link>
          <Link href="/contactos" className="btn-secondary">
            Contactar a BCA
          </Link>
        </div>
      </div>
    </section>
  );
}
