# Roadmap de Implementação

## Objetivo
Traduzir a estratégia SEO em fases executáveis, incrementais e de baixo risco.

## Fase 1: Quick Wins
- Confirmar e documentar arquitetura ativa do Next App Router.
- Criar metadata específica por página principal.
- Melhorar metadata global do `layout.tsx`.
- Definir `metadataBase`.
- Mapear e registar `h1`/`h2` das páginas principais.
- Confirmar páginas com copy demasiado genérica.
- Atualizar `STATUS.md` e `CHANGELOG.md` após implementação.

## Fase 2: On-page e Conteúdos
- Melhorar hero e copy acima da dobra das páginas principais.
- Diferenciar semanticamente homepage, `Serviços` e páginas de serviço.
- Reforçar copy local e comercial em homepage e contactos.
- Adicionar links contextuais do FAQ para serviços.
- Rever coerência entre `title`, `h1`, subtítulo e CTA.

## Fase 3: Blog e Autoridade
- Definir arquitetura indexável de artigos.
- Implementar páginas individuais de blog.
- Criar primeiros conteúdos prioritários.
- Ligar artigos às páginas de serviço correspondentes.
- Estabelecer processo de atualização editorial.

## Fase 4: Refinamentos Técnicos
- Implementar schema markup:
  - organização/local business
  - FAQ
  - breadcrumb, se fizer sentido
- Rever `robots.txt` e `sitemap.xml` para geração dinâmica.
- Avaliar otimização de imagens e performance.
- Validar consistência legal entre política de cookies e implementação real.
- Rever formulário de contacto para conversão real.

## Estado da Fase 4
- Implementado:
  - schema global `AccountingService`
  - schema `FAQPage`
  - schema `BlogPosting` nas páginas de artigo
  - `BreadcrumbList` nas páginas de artigo, onde a hierarquia é mais estável
  - `robots.txt` dinâmico via App Router
  - `sitemap.xml` dinâmico via App Router com páginas principais e artigos
  - otimização de imagens com `next/image` nas superfícies editoriais do blog
- Ainda em aberto:
  - rollout alargado de `next/image` nas restantes views
  - validação da política de cookies face à implementação real
  - submissão real do formulário de contactos

## Sequência recomendada imediata
1. concluir o on-page das páginas `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`
2. ligar essas páginas aos artigos do blog já publicados
3. validar tratamento real do formulário de contactos e alinhamento legal/cookies
4. avaliar rollout adicional de performance nas views com `<img>` remanescente
