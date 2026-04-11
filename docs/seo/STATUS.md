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

## Estado atual
- A documentação base SEO existe e está operacional para continuidade entre sessões.
- As principais páginas e páginas legais já têm metadata dedicada.
- O estado técnico pós-Fase 1 está refletido no código em:
  - `src/app/layout.tsx`
  - `src/lib/seo.ts`
  - `src/app/**/page.tsx`
- A Fase 2 foi iniciada nas páginas prioritárias:
  - `/`
  - `/servicos`
  - `/servicos/consultoria-de-gestao`
  - `/contactos`
  - `/faq`
  - `/blog`
- Melhorias implementadas nesta sessão:
  - hero e proposta de valor mais específicos na homepage
  - reposicionamento de `Serviços` como hub geral
  - copy mais operacional em `Consultoria de Gestão`
  - microcopy de conversão e links úteis em `Contactos`
  - links contextuais nas respostas do FAQ
  - blog assumido como hub editorial provisório com ligação a serviços
- Continuam em aberto:
  - schema markup
  - blog com páginas de artigo indexáveis
  - submissão real do formulário de contactos
  - reforço on-page nas páginas de serviço não revistas nesta sessão
  - revisão de elementos com ação simulada no blog/newsletter, se a estratégia assim o exigir
  - copy mais diferenciada em páginas com linguagem genérica

## O que falta fazer
- decidir arquitetura real do blog antes de produção editorial
- planear schema markup para entidade local e FAQ
- avaliar automatização futura de sitemap e robots
- rever on-page das páginas de serviço ainda não intervencionadas:
  - `/servicos/contabilidade`
  - `/servicos/consultoria-fiscal`
  - `/servicos/incentivos-ao-investimento`
- validar futuro tratamento do formulário e da newsletter, se forem para produção real

## Próxima tarefa recomendada
Concluir a Fase 2 nas páginas de serviço ainda não revistas, começando por `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`, e depois preparar a transição para a fase editorial do blog.

## Decisões pendentes
- Se a localização secundária a trabalhar além de Vila do Conde será Porto, Grande Porto ou outra.
- Se o blog deverá evoluir para CMS, MDX ou conteúdo estático simples.
- Se a política de cookies reflete a implementação técnica real.
- Se o formulário de contactos terá integração real nesta fase ou numa fase própria de conversão.

## Riscos / notas importantes
- Evitar alterações de copy antes de fechar a intenção principal de cada página.
- Evitar refactors visuais grandes nesta fase.
- Não interpretar o código legado de Vite como arquitetura ativa do website.
- Em temas legais e de tracking, usar `Por confirmar` quando a codebase não comprovar a implementação.
- O build passou, mas ficou registado um aviso de configuração ESLint do Next que pode ser tratado numa fase técnica própria.
