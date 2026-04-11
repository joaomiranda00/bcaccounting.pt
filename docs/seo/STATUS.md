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
- A codebase deixou de estar híbrida:
  - o legado confirmado de React/Vite foi removido
  - a arquitetura ativa está concentrada em `src/app/*`, `src/views/*`, `src/content/*`, `src/components/*` e `src/lib/*`
  - o inventário UI foi reduzido aos componentes realmente usados
- Continuam em aberto:
  - submissão real do formulário de contactos
  - reforço on-page de profundidade nas páginas de serviço ainda mais genéricas
  - expansão editorial do blog para gestão, fiscalidade complementar e incentivos por programa
  - rollout adicional de `next/image` fora do blog, se o risco visual for aceitável
  - revisão de elementos com ação simulada no blog/newsletter, se a estratégia assim o exigir
  - alinhamento da configuração ESLint com a convenção recomendada do Next

## O que falta fazer
- rever on-page de maior profundidade nas páginas:
  - `/servicos/contabilidade`
  - `/servicos/consultoria-fiscal`
  - `/servicos/incentivos-ao-investimento`
- criar primeiro artigo do cluster de gestão e ligá-lo a `/servicos/consultoria-de-gestao`
- avaliar rollout de `next/image` nas restantes páginas com `<img>`
- validar consistência legal da política de cookies face à implementação real
- validar futuro tratamento do formulário e da newsletter, se forem para produção real

## Próxima tarefa recomendada
Concluir o refinamento on-page das páginas `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`, já com os novos links contextuais ativos, e depois criar o primeiro artigo do cluster de gestão antes de tratar conversão real do formulário e alinhamento legal/cookies.

## Decisões pendentes
- Se a localização secundária a trabalhar além de Vila do Conde será Porto, Grande Porto ou outra.
- Se o blog deverá manter conteúdo estático local no médio prazo ou evoluir mais tarde para CMS/MDX.
- Se a política de cookies reflete a implementação técnica real.
- Se o formulário de contactos terá integração real nesta fase ou numa fase própria de conversão.

## Riscos / notas importantes
- Evitar alterações de copy antes de fechar a intenção principal de cada página.
- Evitar refactors visuais grandes nesta fase.
- Não reintroduzir padrões legados de Vite/React Router; a arquitetura ativa é exclusivamente Next.js App Router.
- Em temas legais e de tracking, usar `Por confirmar` quando a codebase não comprovar a implementação.
- Em conteúdos fiscais e de incentivos, validar sempre relevância temporal antes de publicar novos artigos.
- O rollout de `next/image` foi intencionalmente limitado ao blog para evitar regressões visuais em massa numa fase técnica.
- O build passou, mas ficou registado um aviso de configuração ESLint do Next que pode ser tratado numa fase técnica própria.

## Sessão de limpeza pós-migração
- Removidos:
  - `src/App.tsx`, `src/main.tsx`, `src/App.css`
  - `vite.config.ts`, `index.html`, `tsconfig.app.json`, `tsconfig.node.json`, `info.md`
  - inventário `src/components/ui/*` não usado pelo runtime atual
  - `src/hooks/use-mobile.ts`
- Normalizados:
  - `README.md` raiz
  - `package.json`
  - `tsconfig.json`
  - `tailwind.config.js`
  - `components.json`
- Documentado em:
  - `docs/cleanup/MIGRATION_CLEANUP.md`

## Ajuste visual da homepage
- A secção `O Nosso Processo` na homepage foi redesenhada em `src/views/Home.tsx`.
- O layout passou de uma apresentação linear para uma timeline vertical com eixo central em desktop.
- Em mobile e tablet, a secção mantém coluna única, ordem natural e legibilidade simples.
- Foram feitos microajustes de copy apenas para reforçar clareza e encaixe no novo layout.

## Fecho Operacional
- Estado atual global do projeto SEO:
  - base técnica SEO implementada no App Router
  - metadata, canonicals, schema principal, robots e sitemap validados
  - homepage, hub de serviços, contactos, FAQ e blog em estado funcional e coerente
  - blog preparado para crescimento editorial com páginas indexáveis reais
- O que está concluído:
  - documentação de continuidade
  - metadata por rota
  - base on-page das páginas prioritárias
  - arquitetura editorial do blog
  - schema `AccountingService`, `FAQPage` e `BlogPosting`
  - sitemap e robots dinâmicos
  - linking editorial base entre blog, FAQ, contactos e principais serviços
- O que continua pendente:
  - integração real do formulário de contactos
  - revisão legal/técnica da política de cookies
  - expansão do cluster editorial de gestão
  - maior profundidade de copy nas três páginas de serviço com texto ainda mais homogéneo
  - rollout seletivo de `next/image` fora do blog
- O que é prioridade futura:
  - reforçar `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`
  - criar artigo-base para `Consultoria de Gestão`
  - alinhar conversão real e conformidade legal
- O que pode esperar:
  - a base atual já suporta crescimento SEO incremental sem refactor estrutural
  - novas sessões podem focar-se em conteúdos, conversão e performance adicional
- Próximos passos recomendados:
  1. aprofundar copy e diferenciação das três páginas de serviço ainda mais genéricas
  2. publicar o primeiro artigo do cluster de gestão e ligá-lo à respetiva página de serviço
  3. decidir tratamento real do formulário, newsletter e política de cookies
  4. avaliar otimização adicional de imagens fora do cluster editorial
