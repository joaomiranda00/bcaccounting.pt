'use client';

import Link from 'next/link';

const TermosCondicoes = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#C1272D]">Termos e Condições</span>
          </nav>
          <h1 className="text-4xl font-bold text-[#333]">
            Termos e <span className="text-[#C1272D]">Condições</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#666] leading-relaxed mb-8">
              Bem-vindo ao website da BCA - Business Consulting and Accounting, Lda. 
              Ao aceder e utilizar este website, concorda em cumprir e ficar vinculado 
              aos seguintes termos e condições de utilização.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Ao aceder a este website, o utilizador declara ter lido, compreendido e 
              aceite estes termos e condições na íntegra. Se não concordar com algum 
              destes termos, não deverá utilizar este website.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">2. Propriedade Intelectual</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Todo o conteúdo presente neste website, incluindo mas não limitado a textos, 
              imagens, logótipos, ícones, áudio, vídeo e software, é propriedade da BCA 
              ou dos seus licenciadores e está protegido por leis de direitos de autor 
              e propriedade industrial.
            </p>
            <p className="text-[#666] leading-relaxed mb-6">
              É proibida a reprodução, distribuição, modificação ou utilização do conteúdo 
              deste website para fins comerciais sem autorização prévia e por escrito da BCA.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">3. Utilização do Website</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              O utilizador compromete-se a utilizar este website de forma responsável e 
              em conformidade com a lei. É expressamente proibido:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>Utilizar o website para fins ilegais ou não autorizados</li>
              <li>Tentar aceder a áreas restritas do website</li>
              <li>Introduzir vírus, malware ou outro código malicioso</li>
              <li>Interferir com o funcionamento normal do website</li>
              <li>Recolher dados de outros utilizadores sem autorização</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">4. Informações e Conteúdos</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA esforça-se por garantir que as informações apresentadas neste website 
              são precisas e atualizadas. No entanto, não garante a exatidão, integridade 
              ou atualidade das informações, não sendo responsável por eventuais erros ou 
              omissões.
            </p>
            <p className="text-[#666] leading-relaxed mb-6">
              As informações contidas neste website são fornecidas apenas para fins 
              informativos e não constituem aconselhamento profissional. Para orientação 
              específica, recomendamos o contacto direto com a nossa equipa.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">5. Links para Terceiros</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Este website pode conter links para websites de terceiros. A BCA não tem 
              controlo sobre o conteúdo desses websites e não assume qualquer responsabilidade 
              pelos mesmos. A inclusão de links não implica endosso ou recomendação.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA não será responsável por quaisquer danos diretos, indiretos, incidentais, 
              consequenciais ou punitivos resultantes do acesso ou utilização deste website, 
              incluindo mas não limitado a perda de dados, lucros cessantes ou interrupção 
              de negócio.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">7. Privacidade e Proteção de Dados</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A utilização deste website está sujeita à nossa{' '}
              <Link href="/politica-de-privacidade" className="text-[#C1272D] hover:underline">
                Política de Privacidade
              </Link>
              , que descreve como recolhemos, utilizamos e protegemos os seus dados pessoais.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">8. Cookies</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Este website utiliza cookies. Para mais informações sobre a utilização de 
              cookies, consulte a nossa{' '}
              <Link href="/cookies" className="text-[#C1272D] hover:underline">
                Política de Cookies
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">9. Alterações aos Termos</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA reserva-se o direito de alterar estes termos e condições a qualquer 
              momento, sem aviso prévio. As alterações entrarão em vigor imediatamente 
              após a sua publicação no website. Recomendamos a consulta periódica desta página.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">10. Lei Aplicável e Foro</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Estes termos e condições são regidos pela legislação portuguesa. Qualquer 
              litígio decorrente da utilização deste website será da competência dos 
              tribunais portugueses, com jurisdição atribuída ao foro do Porto.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">11. Contacto</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Se tiver alguma dúvida sobre estes termos e condições, pode contactar-nos 
              através do email{' '}
              <a href="mailto:bca@bcaccounting.pt" className="text-[#C1272D] hover:underline">
                bca@bcaccounting.pt
              </a>{' '}
              ou através dos contactos disponíveis na página{' '}
              <Link href="/contactos" className="text-[#C1272D] hover:underline">
                Contactos
              </Link>
              .
            </p>

            <p className="text-[#666] text-sm mt-12">
              Última atualização: Janeiro 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosCondicoes;
