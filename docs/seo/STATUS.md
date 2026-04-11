# Estado Atual

## Estado inicial encontrado
- Arquitetura ativa confirmada: Next.js App Router com rotas em `src/app/*` e views em `src/views/*`.
- Existia metadata global em `src/app/layout.tsx`, mas não existia metadata específica por rota.
- Não existia helper central para metadata.
- `robots.txt` e `sitemap.xml` já existiam como ficheiros estáticos em `public/`.
- Existia código legado de Vite/React Router no repositório, fora do runtime principal do Next.
- Permaneciam em aberto:
  - schema markup
  - arquitetura real de blog indexável
  - formulário de contacto com submissão real

## Implementado na Fase 1
- Criados/preenchidos os documentos:
  - `README.md`
  - `PROJECT_CONTEXT.md`
  - `SEO_AUDIT.md`
  - `SEO_STRATEGY.md`
  - `PAGE_INVENTORY.md`
  - `METADATA_PLAN.md`
  - `CONTENT_PLAN.md`
  - `BLOG_PLAN.md`
  - `INTERNAL_LINKING_PLAN.md`
  - `IMPLEMENTATION_ROADMAP.md`
  - `CHANGELOG.md`
- Mapeados `h1` e principais `h2` das páginas nucleares em `PAGE_INVENTORY.md`.
- Melhorada a metadata global em `src/app/layout.tsx`.
- Criado `src/lib/seo.ts` para uniformizar:
  - title
  - description
  - canonical
  - Open Graph
  - Twitter metadata
- Implementada metadata por rota principal e legal em `src/app/**/page.tsx`.
- Validação concluída com `npm run build` sem erros bloqueantes.

## Implementado na Fase 2
- Melhorias de on-page e copy nas páginas:
  - `/`
  - `/servicos`
  - `/servicos/consultoria-de-gestao`
  - `/contactos`
  - `/faq`
  - `/blog`
- Reforçado internal linking contextual entre homepage, serviços, FAQ, contactos e blog.
- O blog passou a funcionar como hub editorial preparatório, antes da arquitetura de artigos.

## Implementado na Fase 3
- Definida arquitetura editorial estática local em `src/content/blog.ts`.
- Confirmadas páginas individuais indexáveis em `/blog/[slug]`.
- Implementados:
  - `generateStaticParams`
  - `generateMetadata` por artigo
  - fallback dedicado para slug inexistente
  - CTA editorial para serviço e contacto
  - artigos relacionados
- Publicados três artigos-base:
  - contabilidade
  - consultoria fiscal
  - incentivos ao investimento
- Atualizada a listagem `/blog` para usar dados estruturados e ligar para rotas reais.
- Validação concluída com `npm run build` sem erros bloqueantes.

## Implementado na Fase 4
- Implementado schema global `AccountingService` com dados confirmados da BCA.
- Implementado schema `FAQPage` com base no conteúdo visível da página `/faq`.
- Implementado schema `BlogPosting` nas páginas individuais do blog.
- Implementado `BreadcrumbList` apenas nas páginas de artigo, onde a hierarquia é estável.
- Migrados `robots.txt` e `sitemap.xml` para geração nativa do Next App Router.
- O sitemap dinâmico passou a incluir:
  - páginas públicas principais
  - páginas legais
  - artigos do blog
- Criada base reutilizável para JSON-LD em:
  - `src/lib/structured-data.ts`
  - `src/components/seo/JsonLd.tsx`
- A FAQ passou a usar fonte de dados partilhada em `src/content/faq.tsx`, reduzindo risco de divergência entre UI e schema.
- Aplicado `next/image` nas superfícies editoriais do blog como quick win técnico de performance.
- Validação concluída com `npm run build` sem erros bloqueantes.

## Estado atual
- A documentação base SEO existe e está operacional para continuidade entre sessões.
- As principais páginas e páginas legais já têm metadata dedicada.
- O estado técnico pós-Fase 1 está refletido no código em:
  - `src/app/layout.tsx`
  - `src/lib/seo.ts`
  - `src/app/**/page.tsx`
- A Fase 2 está parcialmente aplicada nas páginas prioritárias e a Fase 3 ficou funcional no blog.
- O blog já deixou de ser uma listagem estática sem destino:
  - existe arquitetura de conteúdo reutilizável
  - existem páginas individuais indexáveis
  - existe internal linking editorial base
- A base técnica SEO ficou mais sólida:
  - schema principal implementado
  - FAQ com marcação estruturada
  - blog com schema por artigo
  - sitemap e robots dinâmicos
- Continuam em aberto:
  - submissão real do formulário de contactos
  - reforço on-page nas páginas de serviço não revistas nesta sessão
  - expansão editorial do blog para gestão, fiscalidade complementar e incentivos por programa
  - rollout adicional de `next/image` fora do blog, se o risco visual for aceitável
  - revisão de elementos com ação simulada no blog/newsletter, se a estratégia assim o exigir

## O que falta fazer
- rever on-page das páginas de serviço ainda não intervencionadas:
  - `/servicos/contabilidade`
  - `/servicos/consultoria-fiscal`
  - `/servicos/incentivos-ao-investimento`
- ligar essas páginas de serviço aos novos artigos do blog
- avaliar rollout de `next/image` nas restantes páginas com `<img>`
- validar consistência legal da política de cookies face à implementação real
- validar futuro tratamento do formulário e da newsletter, se forem para produção real

## Próxima tarefa recomendada
Concluir o on-page das páginas `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`, ligando-as aos artigos já publicados, e depois tratar conversão real do formulário e alinhamento legal/cookies.

## Decisões pendentes
- Se a localização secundária a trabalhar além de Vila do Conde será Porto, Grande Porto ou outra.
- Se o blog deverá manter conteúdo estático local no médio prazo ou evoluir mais tarde para CMS/MDX.
- Se a política de cookies reflete a implementação técnica real.
- Se o formulário de contactos terá integração real nesta fase ou numa fase própria de conversão.

## Riscos / notas importantes
- Evitar alterações de copy antes de fechar a intenção principal de cada página.
- Evitar refactors visuais grandes nesta fase.
- Não interpretar o código legado de Vite como arquitetura ativa do website.
- Em temas legais e de tracking, usar `Por confirmar` quando a codebase não comprovar a implementação.
- Em conteúdos fiscais e de incentivos, validar sempre relevância temporal antes de publicar novos artigos.
- O rollout de `next/image` foi intencionalmente limitado ao blog para evitar regressões visuais em massa numa fase técnica.
- O build passou, mas ficou registado um aviso de configuração ESLint do Next que pode ser tratado numa fase técnica própria.
