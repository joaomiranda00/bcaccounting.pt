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

## Ainda em aberto

## Prioridade Alta

### Técnica
- Não existe schema markup implementado.
  - Evidência: sem ocorrências de `application/ld+json` ou `schema` em `src/`.
  - Impacto: perda de oportunidades de rich results, sobretudo para `LocalBusiness`, `AccountingService` e `FAQPage`.

### On-page
- O blog não tem páginas de artigo individuais indexáveis.
  - Evidência: `src/views/Blog.tsx` renderiza apenas cards locais; o botão "Ler mais" não liga para rota nenhuma.
  - Impacto: o blog não escala autoridade orgânica nem capta tráfego long-tail real.

- O formulário de contactos é apenas simulado no frontend.
  - Evidência: `handleSubmit` em `src/views/Contactos.tsx` faz apenas `setIsSubmitted(true)` e reset local.
  - Impacto: risco de perda de leads orgânicas, mesmo com melhoria de rankings.

## Prioridade Média

### Técnica
- `sitemap.xml` e `robots.txt` são estáticos.
  - Evidência: ficheiros em `public/`.
  - Impacto: manutenção manual, risco de desatualização e ausência de automatização quando surgirem novas páginas.

- O projeto contém código legado de Vite/React Router em paralelo com Next.
  - Evidência: `src/App.tsx`, `src/main.tsx`, `README.md`, `info.md`.
  - Impacto: aumenta ruído operacional e pode gerar decisões erradas em sessões futuras se não for documentado.

- As imagens de conteúdo usam `<img>` remoto sem otimização nativa do Next.
  - Evidência: múltiplas ocorrências em `src/views/*`.
  - Impacto: potencial impacto em Core Web Vitals e performance, com influência indireta em SEO.

### On-page
- A homepage e várias páginas de serviço têm copy funcional, mas genérica para termos de pesquisa de alta intenção.
  - Exemplos com maior margem remanescente: `src/views/Contabilidade.tsx`, `src/views/ConsultoriaFiscal.tsx`, `src/views/Incentivos.tsx`.
  - Impacto: menor diferenciação semântica entre serviços, localização e proposta de valor.

- A página `Serviços` compete semanticamente com as páginas de serviço sem um posicionamento suficientemente distinto.
  - Estado atual: a página foi melhorada como hub, mas a vigilância de canibalização continua relevante.
  - Impacto: risco de canibalização parcial em queries genéricas de serviços contabilísticos.

- O FAQ tem conteúdo útil e já inclui links contextuais, mas continua sem marcação estruturada.
  - Evidência: `src/views/FAQ.tsx`.
  - Impacto: continua a perder oportunidades de rich results.

### Conteúdos
- O blog usa conteúdo hardcoded e editorialmente curto.
  - Evidência: posts embebidos em array em `src/views/Blog.tsx`.
  - Impacto: baixa profundidade temática e ausência de arquitetura editorial escalável.

- Algumas páginas institucionais e legais estão relativamente completas, mas não contribuem para reforçar entidades e sinais locais além do mínimo.
  - Exemplos: `Sobre`, `Contactos`, `Política de Privacidade`.
  - Impacto: há espaço para reforçar E-E-A-T e consistência da entidade local.

## Prioridade Baixa

### Técnica
- Não foi confirmada integração com Google Business Profile, analytics, Search Console ou tag manager.
  - Estado: `Por confirmar`.

- Não foi confirmada geração dinâmica de sitemap ou robots via App Router.
  - Estado: não implementado de forma visível; `Por confirmar` se existir fora do workspace analisado.

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

## Por confirmar
- Qual a prioridade comercial entre Vila do Conde, Porto e restante região Norte.
- Se existe stack de CRM ou backend para transformar o formulário em lead real.
- Se a componente blog deverá evoluir para CMS, MDX ou conteúdo estático.
- Se existem landing pages comerciais fora das rotas atualmente visíveis.

## Notas de leitura
- Os pontos resolvidos na Fase 1 são mantidos aqui para contexto histórico, mas não devem ser tratados como problemas ativos.
