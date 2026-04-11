'use client';

import Link from 'next/link';

const PoliticaPrivacidade = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#C1272D]">Política de Privacidade</span>
          </nav>
          <h1 className="text-4xl font-bold text-[#333]">
            Política de <span className="text-[#C1272D]">Privacidade</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#666] leading-relaxed mb-8">
              A BCA - Business Consulting and Accounting, Lda. compromete-se a 
              proteger a privacidade dos utilizadores do seu website. Esta política 
              de privacidade descreve como recolhemos, utilizamos e protegemos os 
              seus dados pessoais.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">1. Responsável pelo Tratamento</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              O responsável pelo tratamento dos dados pessoais é a BCA - Business 
              Consulting and Accounting, Lda., com sede no Edifício Alameda, Sala 3, 
              1.º Andar, Avenida Dr. João Canavarro, n.º 305, 4480-668 Vila do Conde, 
              Portugal, NIPC 502 755 008.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">2. Dados Pessoais Recolhidos</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              Podemos recolher os seguintes dados pessoais:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>Nome e apelidos</li>
              <li>Endereço de email</li>
              <li>Número de telefone</li>
              <li>Informações sobre a empresa (quando aplicável)</li>
              <li>Dados de navegação no website</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">3. Finalidades do Tratamento</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              Os dados pessoais são tratados para as seguintes finalidades:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>Responder a pedidos de contacto e orçamentos</li>
              <li>Prestar os serviços contratados</li>
              <li>Enviar comunicações e newsletters (com consentimento)</li>
              <li>Melhorar a experiência do utilizador no website</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">4. Base Legal para o Tratamento</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              O tratamento dos dados pessoais baseia-se no consentimento do titular, 
              na execução de um contrato, no cumprimento de obrigações legais e no 
              legítimo interesse do responsável pelo tratamento.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">5. Prazo de Conservação</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Os dados pessoais são conservados pelo período necessário para cumprir 
              as finalidades para que foram recolhidos, ou pelo prazo legalmente 
              estabelecido. Quando deixarem de ser necessários, são eliminados de 
              forma segura.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">6. Direitos dos Titulares</h2>
            <p className="text-[#666] leading-relaxed mb-4">
              Os titulares dos dados têm o direito de:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>Aceder aos seus dados pessoais</li>
              <li>Retificar dados inexatos</li>
              <li>Solicitar a eliminação dos dados</li>
              <li>Opor-se ao tratamento</li>
              <li>Solicitar a limitação do tratamento</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Retirar o consentimento</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">7. Partilha de Dados</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Os dados pessoais não serão partilhados com terceiros, exceto quando 
              necessário para cumprir obrigações legais ou prestar os serviços 
              contratados, e sempre com as garantias adequadas de proteção de dados.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">8. Segurança dos Dados</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA implementa medidas técnicas e organizacionais adequadas para 
              proteger os dados pessoais contra acesso não autorizado, alteração, 
              divulgação ou destruição.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">9. Cookies</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              O nosso website utiliza cookies para melhorar a experiência do utilizador. 
              Para mais informações, consulte a nossa <Link href="/cookies" className="text-[#C1272D] hover:underline">Política de Cookies</Link>.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">10. Contacto</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Para exercer os seus direitos ou esclarecer dúvidas sobre o tratamento 
              dos seus dados pessoais, pode contactar-nos através do email{' '}
              <a href="mailto:bca@bcaccounting.pt" className="text-[#C1272D] hover:underline">
                bca@bcaccounting.pt
              </a>{' '}
              ou por correio para a nossa sede.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">11. Alterações à Política</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA reserva-se o direito de alterar esta política de privacidade a 
              qualquer momento. As alterações serão publicadas nesta página.
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

export default PoliticaPrivacidade;
