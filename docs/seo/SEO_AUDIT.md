# Auditoria SEO

## Estado da auditoria
Auditoria viva baseada na codebase atual do projeto em `src/app`, `src/views`, `src/components/layout` e `public`.

## Resolvido na Fase 1

### Técnica
- Metadata específica por rota implementada no Next App Router.
  - Evidência atual: `export const metadata` presente em `src/app/**/page.tsx`.
  - Resultado: as páginas principais e legais deixaram de depender apenas da metadata global.

- Base global de metadata reforçada em `src/app/layout.tsx`.
  - Evidência atual:
    - `metadataBase`
    - `alternates.canonical`
    - `robots`
    - `openGraph`
    - `twitter`
  - Resultado: maior consistência técnica de base para SEO e partilha social.

- Helper reutilizável de metadata criado em `src/lib/seo.ts`.
  - Evidência atual: função `createPageMetadata`.
  - Resultado: redução de inconsistência entre rotas e melhor escalabilidade para futuras páginas.

### On-page
- Titles e meta descriptions passaram a estar alinhados por página com intenção e, quando aplicável, localização.
  - Evidência atual: metadata dedicada nas rotas principais e legais.
  - Resultado: melhoria da relevância semântica por URL e melhor base para CTR orgânico.

## Parcialmente resolvido na Fase 2

### On-page
- A homepage, a página `Serviços` e `Consultoria de Gestão` deixaram de depender de copy excessivamente genérica.
  - Evidência atual: hero, subtítulos, blocos de valor e CTAs revistos em `src/views/Home.tsx`, `src/views/Servicos.tsx` e `src/views/ConsultoriaGestao.tsx`.
  - Resultado: melhor diferenciação semântica entre página-hub, serviço de gestão e proposta comercial da homepage.

- O FAQ passou a incluir ligações contextuais para serviços e contactos.
  - Evidência atual: respostas com `Link` em `src/views/FAQ.tsx`.
  - Resultado: melhor apoio à conversão e preparação para futura evolução semântica.

- `Contactos` passou a funcionar melhor como nó de conversão assistida.
  - Evidência atual: microcopy revista e bloco "Podemos ajudar com" em `src/views/Contactos.tsx`.
  - Resultado: melhor enquadramento para leads orgânicas.

- A página `Blog` passou a funcionar melhor como hub editorial provisório.
  - Evidência atual: introdução revista, limitação explícita e links para serviços relacionados em `src/views/Blog.tsx`.
  - Resultado: melhor coerência estratégica até existir arquitetura de artigos.

## Resolvido na Fase 3

### Técnica
- O blog passou a ter páginas individuais de artigo indexáveis.
  - Evidência atual:
    - `src/app/blog/[slug]/page.tsx`
    - `src/app/blog/[slug]/not-found.tsx`
    - `generateStaticParams` com slugs locais
    - `generateMetadata` por artigo
  - Resultado: o blog deixa de ser apenas uma listagem estática e passa a captar potencial long-tail por URL.

- A arquitetura editorial passou a estar centralizada em fonte de dados local estruturada.
  - Evidência atual: `src/content/blog.ts`.
  - Resultado: expansão futura simplificada, com leitura consistente de datas, tempo de leitura, artigos relacionados e ligação a serviços.

### On-page
- A listagem `/blog` passou a funcionar como hub editorial real.
  - Evidência atual: `src/app/blog/page.tsx` consome `getBlogPostSummaries()` e `src/views/Blog.tsx` liga para rotas reais de artigo.
  - Resultado: melhor coerência entre listagem, metadata, artigos e intenção de pesquisa informacional.

- Foi criada base inicial de internal linking editorial entre artigos, serviços e contactos.
  - Evidência atual:
    - CTA editorial nas páginas de artigo
    - links para serviço principal e `/contactos`
    - bloco de artigos relacionados
  - Resultado: melhor distribuição de autoridade interna e apoio à conversão assistida.

## Resolvido na Fase 4

### Técnica
- Schema global da entidade BCA implementado com `AccountingService`.
  - Evidência atual:
    - `src/app/layout.tsx`
    - `src/lib/structured-data.ts`
    - `src/components/seo/JsonLd.tsx`
  - Resultado: reforço da entidade local e da consistência semântica do negócio na camada técnica.

- O FAQ passou a ter marcação estruturada `FAQPage`.
  - Evidência atual:
    - `src/app/faq/page.tsx`
    - `src/content/faq.tsx`
  - Resultado: base técnica preparada para rich results coerentes com o conteúdo visível.

- Os artigos do blog passaram a ter schema `BlogPosting`.
  - Evidência atual:
    - `src/app/blog/[slug]/page.tsx`
    - `src/lib/structured-data.ts`
  - Resultado: melhor qualificação técnica das páginas editoriais individuais.

- `robots.txt` e `sitemap.xml` passaram a ser gerados nativamente no App Router.
  - Evidência atual:
    - `src/app/robots.ts`
    - `src/app/sitemap.ts`
  - Resultado: menor risco de desatualização manual e inclusão automática dos artigos do blog no sitemap.

## Parcialmente resolvido na Fase 4

### Técnica
- Breadcrumb schema foi implementado apenas nas páginas de artigo do blog.
  - Evidência atual: `src/app/blog/[slug]/page.tsx`.
  - Resultado: a marcação foi aplicada onde a hierarquia está mais clara e estável.
  - Limite atual: os breadcrumbs continuam visuais e implementados manualmente noutras páginas, pelo que não foi feito rollout global.

- As imagens do blog passaram a usar `next/image`.
  - Evidência atual:
    - `src/views/Blog.tsx`
    - `src/app/blog/[slug]/page.tsx`
    - `next.config.ts`
  - Resultado: quick win técnico nas superfícies editoriais com maior potencial SEO.
  - Limite atual: continuam a existir `<img>` noutros templates institucionais e de serviço.

### On-page e linking
- `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento` passaram a ligar de forma contextual para artigos relevantes do blog, FAQ e contactos.
  - Evidência atual:
    - `src/views/Contabilidade.tsx`
    - `src/views/ConsultoriaFiscal.tsx`
    - `src/views/Incentivos.tsx`
  - Resultado: melhor distribuição de autoridade interna e redução de isolamento entre páginas de serviço e cluster editorial.
  - Limite atual: `Consultoria de Gestão` continua sem bloco dedicado para artigo relacionado.

### Normalização técnica da codebase
- O legado confirmado da migração React/Vite foi removido do repositório.
  - Evidência atual:
    - ausência de `src/App.tsx`, `src/main.tsx`, `vite.config.ts`, `index.html`, `tsconfig.app.json` e `tsconfig.node.json`
    - runtime ativo centrado em `src/app/*`
    - documentação técnica em `docs/cleanup/MIGRATION_CLEANUP.md`
  - Resultado: menor ruído operacional e menor risco de decisões baseadas numa arquitetura já descontinuada.

## Ainda em aberto

## Prioridade Alta

### Técnica
- O formulário de contactos é apenas simulado no frontend.
  - Evidência: `handleSubmit` em `src/views/Contactos.tsx` faz apenas `setIsSubmitted(true)` e reset local.
  - Impacto: risco de perda de leads orgânicas, mesmo com melhoria de rankings.

## Prioridade Média

### Técnica
- Persistem imagens de conteúdo com `<img>` remoto fora do cluster editorial.
  - Evidência: múltiplas ocorrências em `src/views/Home.tsx`, `src/views/Sobre.tsx`, `src/views/Contabilidade.tsx`, `src/views/ConsultoriaFiscal.tsx`, `src/views/ConsultoriaGestao.tsx` e `src/views/Incentivos.tsx`.
  - Impacto: potencial margem adicional de melhoria em Core Web Vitals sem urgência crítica nesta fase.

- A integração recomendada do lint com Next continua incompleta.
  - Evidência: o build mantém o aviso `The Next.js plugin was not detected in your ESLint configuration`.
  - Impacto: a codebase compila, mas falta alinhar a configuração de lint com a convenção esperada do ecossistema Next.

### On-page
- A homepage e várias páginas de serviço têm copy funcional, mas genérica para termos de pesquisa de alta intenção.
  - Exemplos com maior margem remanescente: `src/views/Contabilidade.tsx`, `src/views/ConsultoriaFiscal.tsx`, `src/views/Incentivos.tsx`.
  - Impacto: menor diferenciação semântica entre serviços, localização e proposta de valor.

- A página `Serviços` compete semanticamente com as páginas de serviço sem um posicionamento suficientemente distinto.
  - Estado atual: a página foi melhorada como hub, mas a vigilância de canibalização continua relevante.
  - Impacto: risco de canibalização parcial em queries genéricas de serviços contabilísticos.

### Conteúdos
- O blog já tem base editorial funcional, mas a cobertura temática continua curta para os quatro clusters estratégicos.
  - Evidência: `src/content/blog.ts` contém três artigos publicados e a listagem `/blog` depende ainda deste conjunto inicial.
  - Impacto: a arquitetura está resolvida, mas o ganho de autoridade topical depende de expansão editorial consistente.

- Algumas páginas institucionais e legais estão relativamente completas, mas não contribuem para reforçar entidades e sinais locais além do mínimo.
  - Exemplos: `Sobre`, `Contactos`, `Política de Privacidade`.
  - Impacto: há espaço para reforçar E-E-A-T e consistência da entidade local.

## Prioridade Baixa

### Técnica
- Não foi confirmada integração com Google Business Profile, analytics, Search Console ou tag manager.
  - Estado: `Por confirmar`.

- Não foi feito rollout global de breadcrumb schema nas páginas institucionais e de serviço.
  - Estado: adiado conscientemente para evitar marcar templates manuais e potencialmente inconsistentes.

### Arquitetura e linking
- O linking interno existe via header, footer, breadcrumbs e CTAs, mas ainda não segue um plano semântico explícito por cluster.
  - Impacto: oportunidade de reforço, não um bloqueio imediato.

## Sinais positivos confirmados
- Existe navegação principal clara para homepage, sobre, serviços, blog, FAQ e contactos.
- As páginas principais têm um único `h1` visível.
- As páginas de serviço já estão segmentadas por intenção.
- Existem breadcrumbs visuais em várias rotas.
- A morada, telefone, email e horário aparecem de forma consistente em várias páginas.
- O foco local em Vila do Conde está presente na homepage, contactos, FAQ e política de privacidade.
- Existe metadata dedicada nas páginas principais e legais.
- Existe helper reutilizável para metadata, reduzindo risco de incoerência futura.
- Existe schema `AccountingService`, `FAQPage` e `BlogPosting` na camada técnica.
- Existe `robots.txt` e `sitemap.xml` nativos do App Router.

## Por confirmar
- Qual a prioridade comercial entre Vila do Conde, Porto e restante região Norte.
- Se existe stack de CRM ou backend para transformar o formulário em lead real.
- Se a componente blog deverá evoluir para CMS, MDX ou conteúdo estático.
- Se existem landing pages comerciais fora das rotas atualmente visíveis.

## Notas de leitura
- Os pontos resolvidos na Fase 1 são mantidos aqui para contexto histórico, mas não devem ser tratados como problemas ativos.
