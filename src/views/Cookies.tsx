'use client';

import Link from 'next/link';

const Cookies = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#666] mb-6">
            <Link href="/" className="hover:text-[#C1272D] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#C1272D]">Política de Cookies</span>
          </nav>
          <h1 className="text-4xl font-bold text-[#333]">
            Política de <span className="text-[#C1272D]">Cookies</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#666] leading-relaxed mb-8">
              Esta política de cookies explica o que são cookies, como os utilizamos 
              no nosso website e como pode gerir as suas preferências de cookies.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">1. O Que São Cookies?</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Cookies são pequenos ficheiros de texto que são armazenados no seu 
              dispositivo (computador, tablet ou telemóvel) quando visita um website. 
              São amplamente utilizados para fazer os websites funcionarem de forma 
              mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">2. Como Utilizamos Cookies</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              O nosso website utiliza cookies para várias finalidades, incluindo:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento 
                básico do website, permitindo navegar e utilizar as suas funcionalidades.
              </li>
              <li>
                <strong>Cookies de Desempenho:</strong> Recolhem informações sobre como 
                os visitantes utilizam o website, ajudando-nos a melhorar o seu funcionamento.
              </li>
              <li>
                <strong>Cookies de Funcionalidade:</strong> Permitem que o website 
                memorize as suas preferências e escolhas para proporcionar uma experiência 
                mais personalizada.
              </li>
              <li>
                <strong>Cookies de Publicidade:</strong> Utilizados para apresentar 
                anúncios mais relevantes aos seus interesses.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">3. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-bold text-[#333] mt-8 mb-3">3.1 Cookies Próprios</h3>
            <p className="text-[#666] leading-relaxed mb-6">
              São cookies definidos pelo nosso website e apenas podem ser lidos por nós. 
              Incluem cookies de sessão e cookies de preferências do utilizador.
            </p>

            <h3 className="text-xl font-bold text-[#333] mt-8 mb-3">3.2 Cookies de Terceiros</h3>
            <p className="text-[#666] leading-relaxed mb-6">
              São cookies definidos por serviços de terceiros que utilizamos no nosso 
              website, como Google Analytics, redes sociais e serviços de publicidade.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">4. Cookies Específicos Utilizados</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#F5F5F5]">
                    <th className="border border-[#E0E0E0] px-4 py-3 text-left text-[#333] font-bold">Cookie</th>
                    <th className="border border-[#E0E0E0] px-4 py-3 text-left text-[#333] font-bold">Tipo</th>
                    <th className="border border-[#E0E0E0] px-4 py-3 text-left text-[#333] font-bold">Finalidade</th>
                    <th className="border border-[#E0E0E0] px-4 py-3 text-left text-[#333] font-bold">Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">session_id</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Essencial</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Manter a sessão do utilizador</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Sessão</td>
                  </tr>
                  <tr className="bg-[#F9F9F9]">
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">cookie_consent</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Essencial</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Memorizar preferências de cookies</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">1 ano</td>
                  </tr>
                  <tr>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">_ga</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Analítico</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Google Analytics - distinguir utilizadores</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">2 anos</td>
                  </tr>
                  <tr className="bg-[#F9F9F9]">
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">_gid</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Analítico</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">Google Analytics - distinguir utilizadores</td>
                    <td className="border border-[#E0E0E0] px-4 py-3 text-[#666]">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">5. Gestão de Cookies</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Pode gerir as suas preferências de cookies de várias formas:
            </p>

            <h3 className="text-xl font-bold text-[#333] mt-8 mb-3">5.1 Através do Nosso Banner de Cookies</h3>
            <p className="text-[#666] leading-relaxed mb-6">
              Ao visitar o nosso website pela primeira vez, será apresentado um banner 
              que lhe permite aceitar ou recusar cookies não essenciais.
            </p>

            <h3 className="text-xl font-bold text-[#333] mt-8 mb-3">5.2 Através das Definições do Browser</h3>
            <p className="text-[#666] leading-relaxed mb-4">
              A maioria dos browsers permite controlar cookies através das suas definições. 
              Pode configurar o seu browser para:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>Aceitar todos os cookies</li>
              <li>Rejeitar todos os cookies</li>
              <li>Ser notificado quando um cookie é definido</li>
              <li>Eliminar cookies existentes</li>
            </ul>
            <p className="text-[#666] leading-relaxed mb-6">
              Para mais informações sobre como gerir cookies no seu browser, consulte 
              a secção de ajuda do mesmo:
            </p>
            <ul className="list-disc list-inside text-[#666] space-y-2 mb-6">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C1272D] hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/pt-PT/kb/cookies-informacao-armazenada-no-computador" target="_blank" rel="noopener noreferrer" className="text-[#C1272D] hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/pt-pt/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#C1272D] hover:underline">
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C1272D] hover:underline">
                  Safari
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">6. Impacto da Desativação de Cookies</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A desativação de cookies essenciais pode afetar o funcionamento do website, 
              impedindo o acesso a determinadas funcionalidades. A desativação de cookies 
              analíticos ou de publicidade não afeta o funcionamento básico do website, 
              mas pode limitar a personalização da sua experiência.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">7. Alterações à Política</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              A BCA reserva-se o direito de alterar esta política de cookies a qualquer 
              momento. As alterações serão publicadas nesta página e, se significativas, 
              ser-lhe-á solicitado um novo consentimento.
            </p>

            <h2 className="text-2xl font-bold text-[#333] mt-12 mb-4">8. Contacto</h2>
            <p className="text-[#666] leading-relaxed mb-6">
              Se tiver alguma dúvida sobre a nossa utilização de cookies, pode contactar-nos 
              através do email{' '}
              <a href="mailto:bca@bcaccounting.pt" className="text-[#C1272D] hover:underline">
                bca@bcaccounting.pt
              </a>
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

export default Cookies;
