# Inventário de Páginas

## Notas
- Inventário baseado nas rotas visíveis em `src/app/*`.
- Todas as páginas públicas atuais reexportam componentes de `src/views/*`.
- O campo `estado atual` resume o que foi confirmado na codebase.
- Todas as páginas públicas herdam schema global `AccountingService` via `src/app/layout.tsx`.

## Páginas principais

### `/`
- Objetivo: apresentar a BCA, captar leads e distribuir autoridade para serviços principais.
- Keyword principal: `contabilidade Vila do Conde`
- Keywords secundárias: `empresa de contabilidade Vila do Conde`, `consultoria fiscal Vila do Conde`, `contabilidade para empresas`, `apoio à gestão`
- Intenção de pesquisa: comercial + local
- Estado atual:
  - `h1`: "Soluções Contabilísticas e de Gestão para o Sucesso do seu Negócio"
  - hero e proposta de valor revistos na Fase 2
  - copy com referência a Vila do Conde
  - secções de serviços, prova social, incentivos, processo, localização e CTA
  - metadata dedicada implementada em `src/app/page.tsx`
  - herda schema global `AccountingService`
- Ações recomendadas:
  - avaliar mais tarde se faz sentido complementar com schema específico de página, sem duplicar a entidade global

### `/sobre`
- Objetivo: reforçar credibilidade, equipa, posicionamento e confiança.
- Keyword principal: `sobre a BCA`
- Keywords secundárias: `empresa de contabilidade Vila do Conde`, `consultoria de gestão Vila do Conde`, `equipa de contabilidade`
- Intenção de pesquisa: navegacional + confiança
- Estado atual:
  - `h1`: "Sobre a BCA"
  - boa base institucional com missão, visão, valores e diferenciação
  - referências a Vila do Conde
  - metadata dedicada implementada em `src/app/sobre/page.tsx`
- Ações recomendadas:
  - reforçar ligação contextual a serviços e contactos
  - avaliar inclusão de mais sinais de experiência/equipa, se existirem

### `/servicos`
- Objetivo: página-hub para serviços principais.
- Keyword principal: `serviços de contabilidade para empresas`
- Keywords secundárias: `consultoria fiscal`, `consultoria de gestão`, `incentivos ao investimento`
- Intenção de pesquisa: comercial
- Estado atual:
  - `h1`: "Os Nossos Serviços"
  - página revista na Fase 2 como hub orientador
  - cards para quatro serviços
  - links contextuais adicionais para subpáginas
  - secção de vantagens
  - metadata dedicada implementada em `src/app/servicos/page.tsx`
- Ações recomendadas:
  - evitar conflito com páginas de serviço específicas
  - clarificar melhor o papel da página face às páginas filhas

### `/servicos/contabilidade`
- Objetivo: captar leads para serviço de contabilidade.
- Keyword principal: `serviços de contabilidade`
- Keywords secundárias: `contabilidade para empresas`, `contabilista para empresas`, `contabilidade Vila do Conde`
- Intenção de pesquisa: comercial
- Estado atual:
  - `h1`: "Serviços de Contabilidade"
  - secções: inclusões, benefícios, público-alvo, processo, CTA
  - copy funcional, mas genérica
  - metadata dedicada implementada em `src/app/servicos/contabilidade/page.tsx`
- Ações recomendadas:
  - reforço de diferenciação e casos de uso
  - ligar a FAQ e artigos futuros sobre obrigações contabilísticas

### `/servicos/consultoria-fiscal`
- Objetivo: captar leads para consultoria fiscal.
- Keyword principal: `consultoria fiscal`
- Keywords secundárias: `consultoria fiscal para empresas`, `planeamento fiscal`, `consultoria fiscal Vila do Conde`
- Intenção de pesquisa: comercial
- Estado atual:
  - `h1`: "Consultoria Fiscal"
  - secções: serviços fiscais, benefícios, público-alvo, importância, CTA
  - metadata dedicada implementada em `src/app/servicos/consultoria-fiscal/page.tsx`
- Ações recomendadas:
  - melhorar posicionamento para intenção comercial
  - reforçar linguagem de conformidade, risco e planeamento fiscal
  - ligar a FAQ fiscal e conteúdos sobre IVA/IRC

### `/servicos/consultoria-de-gestao`
- Objetivo: captar leads para consultoria de gestão.
- Keyword principal: `consultoria de gestão`
- Keywords secundárias: `consultoria de gestão para empresas`, `apoio à gestão`, `controlo de gestão`
- Intenção de pesquisa: comercial
- Estado atual:
  - `h1`: "Consultoria de Gestão"
  - proposta de valor revista na Fase 2 com foco mais operacional para PME
  - secções: áreas de consultoria, benefícios, público-alvo, metodologia, CTA
  - metadata dedicada implementada em `src/app/servicos/consultoria-de-gestao/page.tsx`
- Ações recomendadas:
  - reforçar ligação a conteúdos de performance empresarial

### `/servicos/incentivos-ao-investimento`
- Objetivo: captar leads para candidaturas e apoio a incentivos.
- Keyword principal: `incentivos ao investimento`
- Keywords secundárias: `fundos europeus para empresas`, `Portugal 2030`, `PRR`, `candidaturas a incentivos`
- Intenção de pesquisa: comercial + informacional
- Estado atual:
  - `h1`: "Incentivos ao Investimento"
  - secções: apoio, programas, benefícios, público-alvo, processo, CTA
  - metadata dedicada implementada em `src/app/servicos/incentivos-ao-investimento/page.tsx`
- Ações recomendadas:
  - garantir atualização editorial futura por programa
  - preparar cluster editorial próprio

### `/contactos`
- Objetivo: conversão e contacto direto.
- Keyword principal: `contactos BCA`
- Keywords secundárias: `contabilista Vila do Conde`, `empresa de contabilidade Vila do Conde`, `contactar contabilista`
- Intenção de pesquisa: navegacional + transacional
- Estado atual:
  - `h1`: "Contacte a BCA"
  - boa exposição de NAP e mapa
  - microcopy de conversão revista na Fase 2
  - links para serviços e FAQ adicionados
  - formulário com submissão simulada apenas no frontend
  - metadata dedicada implementada em `src/app/contactos/page.tsx`
- Ações recomendadas:
  - validar backend ou integração real do formulário
  - só explicitar expectativa de resposta se houver base confirmada

### `/faq`
- Objetivo: responder a dúvidas recorrentes e reduzir fricção comercial.
- Keyword principal: `perguntas frequentes contabilidade`
- Keywords secundárias: `FAQ contabilidade`, `dúvidas sobre contabilista`, `fundos europeus empresas`
- Intenção de pesquisa: informacional + assistiva à conversão
- Estado atual:
  - `h1`: "Perguntas Frequentes"
  - 10 FAQs em fonte de dados partilhada em `src/content/faq.tsx`
  - links contextuais para serviços e contactos implementados na Fase 2
  - pesquisa interna e categorias
  - schema `FAQPage` implementado em `src/app/faq/page.tsx`
  - metadata dedicada implementada em `src/app/faq/page.tsx`
- Ações recomendadas:
  - expandir cobertura temática por cluster mantendo alinhamento entre UI e JSON-LD

### `/blog`
- Objetivo: captar tráfego informacional e apoiar serviços.
- Keyword principal: `blog de contabilidade`
- Keywords secundárias: `artigos de contabilidade`, `fiscalidade para empresas`, `incentivos ao investimento`
- Intenção de pesquisa: informacional
- Estado atual:
  - `h1`: "Blog BCA"
  - página funciona como hub editorial real
  - artigos carregados a partir de `src/content/blog.ts`
  - cards ligados a rotas reais de artigo e a serviços relacionados
  - metadata dedicada implementada em `src/app/blog/page.tsx`
- Ações recomendadas:
  - expandir cobertura editorial por cluster
  - considerar destaque futuro para artigos por tema ou serviço

### `/blog/[slug]`
- Objetivo: captar tráfego long-tail, responder a intenções informacionais e apoiar páginas de serviço.
- Keyword principal: variável por artigo
- Keywords secundárias: variáveis por tema e cluster
- Intenção de pesquisa: informacional + assistiva à conversão
- Estado atual:
  - rota dinâmica indexável implementada em `src/app/blog/[slug]/page.tsx`
  - `generateStaticParams` e `generateMetadata` a partir de `src/content/blog.ts`
  - canonical e metadata social por artigo
  - schema `BlogPosting` e `BreadcrumbList` implementados nas páginas de artigo
  - fallback dedicado para slug inexistente em `src/app/blog/[slug]/not-found.tsx`
  - CTA editorial para serviço principal e `/contactos`
  - artigos relacionados entre si
- Ações recomendadas:
  - ligar páginas de serviço aos artigos correspondentes

### `/blog/como-escolher-um-contabilista-para-a-sua-empresa-em-vila-do-conde`
- Objetivo: captar intenção comercial assistida em torno da escolha de contabilista.
- Keyword principal: `como escolher um contabilista`
- Keywords secundárias: `contabilista Vila do Conde`, `contabilista para empresas`, `serviços de contabilidade`
- Intenção de pesquisa: comercial investigativa
- Estado atual:
  - artigo publicado
  - apoia `/servicos/contabilidade`
- Ações recomendadas:
  - avaliar futura ligação a FAQ de mudança de contabilista

### `/blog/planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal`
- Objetivo: captar procura informacional qualificada sobre enquadramento fiscal para PME.
- Keyword principal: `planeamento fiscal PME`
- Keywords secundárias: `consultoria fiscal para empresas`, `apoio fiscal para empresas`
- Intenção de pesquisa: informacional + comercial assistiva
- Estado atual:
  - artigo publicado
  - apoia `/servicos/consultoria-fiscal`
- Ações recomendadas:
  - expandir cluster com artigo complementar sobre erros fiscais comuns

### `/blog/como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa`
- Objetivo: captar procura mista sobre preparação de candidaturas a incentivos.
- Keyword principal: `candidatura a incentivos empresas`
- Keywords secundárias: `incentivos ao investimento`, `fundos europeus para empresas`
- Intenção de pesquisa: informacional + comercial assistiva
- Estado atual:
  - artigo publicado
  - apoia `/servicos/incentivos-ao-investimento`
- Ações recomendadas:
  - expandir cluster com conteúdos mais específicos por programa quando houver validação temporal

## Páginas secundárias / legais

### `/politica-de-privacidade`
- Objetivo: conformidade legal e reforço de entidade.
- Keyword principal: `política de privacidade BCA`
- Keywords secundárias: `proteção de dados BCA`
- Intenção de pesquisa: legal + navegacional
- Estado atual:
  - `h1` e `h2` estruturados
  - inclui nome legal, morada e NIPC
  - metadata dedicada implementada em `src/app/politica-de-privacidade/page.tsx`
- Ações recomendadas:
  - manter fora do foco principal da Fase 1, exceto metadata

### `/termos-e-condicoes`
- Objetivo: conformidade legal.
- Keyword principal: `termos e condições BCA`
- Keywords secundárias: `utilização do website BCA`
- Intenção de pesquisa: legal + navegacional
- Estado atual:
  - boa estrutura hierárquica
  - metadata dedicada implementada em `src/app/termos-e-condicoes/page.tsx`
- Ações recomendadas:
  - manter monitorização apenas documental, salvo revisão legal futura

### `/cookies`
- Objetivo: conformidade legal e transparência.
- Keyword principal: `política de cookies BCA`
- Keywords secundárias: `cookies bcaccounting.pt`
- Intenção de pesquisa: legal + navegacional
- Estado atual:
  - conteúdo detalhado
  - menciona banner de cookies e Google Analytics, mas a implementação correspondente não foi confirmada
  - metadata dedicada implementada em `src/app/cookies/page.tsx`
- Ações recomendadas:
  - validar se o conteúdo legal reflete a implementação real

## Itens estruturais fora do inventário principal
- `src/App.tsx` e `src/main.tsx`: código legado de Vite/React Router, fora do runtime principal do Next.
- `src/app/robots.ts` e `src/app/sitemap.ts`: ativos SEO dinâmicos do App Router.
- `src/lib/structured-data.ts` e `src/components/seo/JsonLd.tsx`: base reutilizável para schema e JSON-LD.

## Mapeamento rápido de headings principais

### `/`
- `h1`: Soluções Contabilísticas e de Gestão para o Sucesso do seu Negócio
- `h2` principais:
  - Os Nossos Serviços
  - Porquê Escolher a BCA?
  - Incentivos ao Investimento
  - O Nosso Processo
  - Onde Estamos

### `/sobre`
- `h1`: Sobre a BCA
- `h2` principais:
  - Quem Somos
  - Os Nossos Valores
  - O Que Nos Diferencia
  - A Nossa Localização

### `/servicos`
- `h1`: Os Nossos Serviços
- `h2` principais:
  - Vantagens de Trabalhar Connosco

### `/servicos/contabilidade`
- `h1`: Serviços de Contabilidade
- `h2` principais:
  - O Que Incluímos
  - Benefícios do Nosso Serviço
  - Para Quem é Destinado
  - Como Funciona

### `/servicos/consultoria-fiscal`
- `h1`: Consultoria Fiscal
- `h2` principais:
  - Os Nossos Serviços Fiscais
  - Benefícios da Consultoria Fiscal
  - Para Quem é Destinado

### `/servicos/consultoria-de-gestao`
- `h1`: Consultoria de Gestão
- `h2` principais:
  - Áreas de Consultoria
  - Benefícios da Consultoria de Gestão
  - Para Quem é Destinado
  - A Nossa Metodologia

### `/servicos/incentivos-ao-investimento`
- `h1`: Incentivos ao Investimento
- `h2` principais:
  - Como Podemos Ajudar
  - Principais Programas de Incentivos
  - Benefícios dos Incentivos
  - Para Quem é Destinado
  - O Processo de Candidatura

### `/contactos`
- `h1`: Contacte a BCA
- `h2` principais:
  - Envie-nos uma Mensagem
  - Siga-nos nas Redes Sociais

### `/faq`
- `h1`: Perguntas Frequentes
- `h2` principais:
  - Ainda tem Dúvidas?

### `/blog`
- `h1`: Blog BCA
- `h2` principais:
  - Subscreva a Nossa Newsletter
