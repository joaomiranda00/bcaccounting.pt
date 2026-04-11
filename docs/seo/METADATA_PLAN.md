# Plano de Metadata

## Notas de implementação
- Estado inicial identificado:
  - existia apenas metadata global em `src/app/layout.tsx`
- Estratégia recomendada para Fase 1:
  - criar metadata por página nos ficheiros `src/app/**/page.tsx`
  - manter `title.template` e defaults no `layout.tsx`
  - definir `metadataBase`
  - introduzir `alternates.canonical` por rota principal
- Estado após implementação de 2026-04-11:
  - metadata global melhorada em `src/app/layout.tsx`
  - metadata específica aplicada nas rotas principais e legais em `src/app/**/page.tsx`
  - helper reutilizável criado em `src/lib/seo.ts`
  - build validado com sucesso após implementação

## Homepage `/`
- Title atual: `BCA - Business Consulting and Accounting`
- Title proposto: `Contabilidade em Vila do Conde para Empresas | BCA`
- Meta atual: `Serviços profissionais de contabilidade, consultoria fiscal e apoio à gestão em Vila do Conde.`
- Meta proposta: `Serviços de contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento em Vila do Conde. Conheça a BCA e fale connosco.`
- Notas:
  - reforçar intenção comercial local
  - evitar título demasiado genérico em inglês

## Sobre `/sobre`
- Title atual: herdado do global
- Title proposto: `Sobre a BCA | Contabilidade e Consultoria em Vila do Conde`
- Meta atual: herdada do global
- Meta proposta: `Conheça a BCA, empresa de contabilidade, fiscalidade e consultoria de gestão em Vila do Conde, focada no apoio próximo a empresas.`
- Notas:
  - foco em confiança, posicionamento e localização

## Serviços `/servicos`
- Title atual: herdado do global
- Title proposto: `Serviços de Contabilidade e Consultoria para Empresas | BCA`
- Meta atual: herdada do global
- Meta proposta: `Explore os serviços da BCA: contabilidade, consultoria fiscal, consultoria de gestão e incentivos ao investimento para empresas em Portugal.`
- Notas:
  - página-hub; não competir em excesso com páginas filhas

## Contabilidade `/servicos/contabilidade`
- Title atual: herdado do global
- Title proposto: `Serviços de Contabilidade para Empresas | BCA Vila do Conde`
- Meta atual: herdada do global
- Meta proposta: `Serviço de contabilidade para empresas com acompanhamento técnico, cumprimento legal e informação de gestão. Contacte a BCA em Vila do Conde.`
- Notas:
  - boa oportunidade de captar intenção comercial direta

## Consultoria Fiscal `/servicos/consultoria-fiscal`
- Title atual: herdado do global
- Title proposto: `Consultoria Fiscal para Empresas | BCA Vila do Conde`
- Meta atual: herdada do global
- Meta proposta: `Consultoria fiscal para empresas com planeamento fiscal, apoio declarativo e redução de risco. Fale com a BCA em Vila do Conde.`
- Notas:
  - manter linguagem profissional e não promocional em excesso

## Consultoria de Gestão `/servicos/consultoria-de-gestao`
- Title atual: herdado do global
- Title proposto: `Consultoria de Gestão para Empresas | BCA`
- Meta atual: herdada do global
- Meta proposta: `Apoio à gestão, planeamento, controlo e análise para empresas que querem crescer com mais informação e melhor decisão.`
- Notas:
  - título pode ganhar localização numa iteração seguinte se necessário

## Incentivos ao Investimento `/servicos/incentivos-ao-investimento`
- Title atual: herdado do global
- Title proposto: `Incentivos ao Investimento e Fundos para Empresas | BCA`
- Meta atual: herdada do global
- Meta proposta: `Apoio na identificação de incentivos, preparação de candidaturas e acompanhamento de fundos para empresas, incluindo Portugal 2030 e PRR.`
- Notas:
  - equilibrar intenção comercial e informacional

## Contactos `/contactos`
- Title atual: herdado do global
- Title proposto: `Contactos BCA | Contabilidade em Vila do Conde`
- Meta atual: herdada do global
- Meta proposta: `Entre em contacto com a BCA em Vila do Conde. Consulte morada, telefone, email e envie o seu pedido sobre contabilidade ou consultoria.`
- Notas:
  - importante para queries de marca e locais

## FAQ `/faq`
- Title atual: herdado do global
- Title proposto: `FAQ | Perguntas Frequentes sobre Contabilidade e Consultoria`
- Meta atual: herdada do global
- Meta proposta: `Veja respostas às perguntas frequentes sobre contabilidade, fiscalidade, consultoria de gestão e incentivos ao investimento na BCA.`
- Notas:
  - preparar mais tarde suporte a schema `FAQPage`

## Blog `/blog`
- Title atual: herdado do global
- Title proposto: `Blog BCA | Contabilidade, Fiscalidade e Gestão`
- Meta atual: herdada do global
- Meta proposta: `Artigos e conteúdos da BCA sobre contabilidade, fiscalidade, gestão empresarial e incentivos ao investimento para empresas.`
- Notas:
  - serve para a listagem; arquitetura de artigos individuais é fase posterior

## Política de Privacidade `/politica-de-privacidade`
- Title atual: herdado do global
- Title proposto: `Política de Privacidade | BCA`
- Meta atual: herdada do global
- Meta proposta: `Consulte a política de privacidade da BCA e saiba como tratamos os dados pessoais recolhidos através do website.`
- Notas:
  - metadata legal básica

## Termos e Condições `/termos-e-condicoes`
- Title atual: herdado do global
- Title proposto: `Termos e Condições | BCA`
- Meta atual: herdada do global
- Meta proposta: `Leia os termos e condições de utilização do website da BCA - Business Consulting and Accounting, Lda.`
- Notas:
  - metadata legal básica

## Cookies `/cookies`
- Title atual: herdado do global
- Title proposto: `Política de Cookies | BCA`
- Meta atual: herdada do global
- Meta proposta: `Consulte a política de cookies da BCA e saiba como o website utiliza cookies e preferências de navegação.`
- Notas:
  - validar alinhamento legal com a implementação real numa fase posterior
