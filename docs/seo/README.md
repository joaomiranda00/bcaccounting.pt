# Documentação SEO

## Objetivo
Centralizar o contexto estratégico, técnico e operacional da otimização SEO do website `bcaccounting.pt`, garantindo continuidade entre sessões e decisões com baixo risco de regressão.

## Escopo desta documentação
Esta pasta cobre:

- SEO técnico do website institucional
- SEO on-page das páginas principais
- arquitetura de conteúdos e internal linking
- estratégia editorial do blog
- registo de progresso, decisões e alterações

## Ordem de leitura recomendada
1. `PROJECT_CONTEXT.md`
2. `STATUS.md`
3. `SEO_AUDIT.md`
4. `SEO_STRATEGY.md`
5. `IMPLEMENTATION_ROADMAP.md`
6. `PAGE_INVENTORY.md`
7. `METADATA_PLAN.md`
8. `CONTENT_PLAN.md`
9. `BLOG_PLAN.md`
10. `INTERNAL_LINKING_PLAN.md`
11. `CHANGELOG.md`

## Estrutura da pasta
- `PROJECT_CONTEXT.md`: enquadramento do negócio, público e prioridades SEO
- `STATUS.md`: ponto de situação operacional para retoma rápida
- `SEO_AUDIT.md`: auditoria viva do estado atual
- `SEO_STRATEGY.md`: direção estratégica e mapeamento semântico
- `PAGE_INVENTORY.md`: inventário das páginas existentes
- `METADATA_PLAN.md`: plano de titles e meta descriptions
- `CONTENT_PLAN.md`: plano de melhoria de copy e blocos de conteúdo
- `BLOG_PLAN.md`: plano editorial orientado a SEO
- `INTERNAL_LINKING_PLAN.md`: plano de ligações internas
- `IMPLEMENTATION_ROADMAP.md`: fases de execução
- `CHANGELOG.md`: histórico de alterações SEO

## Estado base confirmado nesta sessão
- O runtime ativo é Next.js App Router (`package.json`, `src/app/*`).
- As rotas públicas em `src/app/*` reexportam views de `src/views/*`.
- Existe metadata global em `src/app/layout.tsx`.
- Existe um helper reutilizável de SEO em `src/lib/seo.ts`.
- Existe suporte reutilizável para schema e JSON-LD em `src/lib/structured-data.ts` e `src/components/seo/JsonLd.tsx`.
- Existe metadata específica por rota nas páginas principais e legais em `src/app/**/page.tsx`.
- O blog usa conteúdo estático local estruturado em `src/content/blog.ts`.
- Existem páginas individuais de artigo em `src/app/blog/[slug]/page.tsx`, com metadata própria e fallback dedicado.
- `robots.txt` e `sitemap.xml` são gerados nativamente no App Router em `src/app/robots.ts` e `src/app/sitemap.ts`.
- Existe código legado de Vite/React Router (`src/App.tsx`, `src/main.tsx`, `README.md`, `info.md`) fora do fluxo principal do Next.

## Regras de trabalho
- Trabalhar de forma incremental e reversível.
- Confirmar a codebase antes de propor alterações.
- Registar ambiguidade como `Por confirmar`.
- Atualizar sempre `STATUS.md` e `CHANGELOG.md` após trabalho relevante.
- Antes de alterar código SEO, reler pelo menos:
  - `README.md`
  - `PROJECT_CONTEXT.md`
  - `STATUS.md`
  - `METADATA_PLAN.md`
  - `IMPLEMENTATION_ROADMAP.md`
