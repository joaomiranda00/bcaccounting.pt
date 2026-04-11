# Plano Editorial do Blog

## Estado atual
- A página `/blog` funciona como hub editorial alimentado por `src/content/blog.ts`.
- Existem páginas individuais de artigo em `/blog/[slug]`.
- Cada artigo publicado tem metadata dedicada, CTA para serviço relacionado e link para `/contactos`.
- Existe fallback dedicado para slug inexistente em `src/app/blog/[slug]/not-found.tsx`.

## Objetivo do blog
- captar tráfego informacional qualificado
- apoiar páginas de serviço com internal linking semântico
- reforçar autoridade temática da BCA em contabilidade, fiscalidade, gestão e incentivos

## Decisão estrutural
- Arquitetura escolhida: conteúdo estático local com ficheiro de dados estruturado.
- Implementação atual:
  - fonte de dados: `src/content/blog.ts`
  - listagem: `src/app/blog/page.tsx` + `src/views/Blog.tsx`
  - artigos: `src/app/blog/[slug]/page.tsx`
- Motivo da escolha:
  - coerência com a codebase atual
  - simplicidade de manutenção
  - baixo risco técnico
  - expansão futura sem dependência de CMS nesta fase

## Estrutura mínima confirmada por artigo
- `slug`
- `title`
- `description`
- `excerpt`
- `publishedAt`
- `updatedAt` quando aplicável
- `category`
- `cluster`
- `serviceLink`
- `serviceLabel`
- `keywords`
- `coverImage`
- `content`
- `relatedSlugs`
- `readingTime` calculado por helper

## Artigos prioritários

| Título sugerido | Objetivo | Keyword alvo | Intenção | Página a apoiar | Prioridade | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| Como escolher um contabilista para a sua empresa em Vila do Conde | Captar procura comercial assistida | contabilista Vila do Conde | comercial investigativa | `/servicos/contabilidade` | Alta | Criado |
| O que está incluído num serviço de contabilidade para empresas | Clarificar proposta de valor | serviços de contabilidade para empresas | comercial | `/servicos/contabilidade` | Alta | Ideia |
| Planeamento fiscal para PME: o que pode ser feito de forma legal | Apoiar consultoria fiscal | planeamento fiscal PME | comercial informacional | `/servicos/consultoria-fiscal` | Alta | Criado |
| Erros fiscais mais comuns nas PME e como evitá-los | Captar tráfego TOFU/MOFU | erros fiscais PME | informacional | `/servicos/consultoria-fiscal` | Alta | Ideia |
| O que é consultoria de gestão e quando faz sentido para uma PME | Educar e converter | consultoria de gestão para PME | comercial investigativa | `/servicos/consultoria-de-gestao` | Alta | Ideia |
| Indicadores de gestão que toda a PME deve acompanhar | Reforçar autoridade em gestão | indicadores de gestão PME | informacional | `/servicos/consultoria-de-gestao` | Média | Ideia |
| Como preparar uma candidatura a incentivos para a sua empresa | Apoiar intenção mista | candidatura a incentivos empresas | comercial informacional | `/servicos/incentivos-ao-investimento` | Alta | Criado |
| Portugal 2030 para empresas: como perceber se faz sentido | Captar procura temática | Portugal 2030 empresas | informacional | `/servicos/incentivos-ao-investimento` | Alta | Ideia |
| PRR para empresas: documentos e preparação inicial | Captar procura prática | PRR empresas candidatura | informacional | `/servicos/incentivos-ao-investimento` | Média | Ideia |
| Mudar de contabilista: passos, documentos e prazos | Captar intenção de mudança | mudar de contabilista | comercial | `/servicos/contabilidade` | Média | Ideia |

## Artigos publicados nesta fase
- `/blog/como-escolher-um-contabilista-para-a-sua-empresa-em-vila-do-conde`
- `/blog/planeamento-fiscal-para-pme-o-que-pode-ser-feito-de-forma-legal`
- `/blog/como-preparar-uma-candidatura-a-incentivos-para-a-sua-empresa`

## Linhas editoriais
- Conteúdo BOFU:
  - comparações de serviços
  - custos, critérios de escolha, mudança de contabilista
- Conteúdo MOFU:
  - explicação de processos, riscos e obrigações
- Conteúdo cluster local:
  - temas com referência a Vila do Conde apenas quando natural
- Conteúdo de incentivos:
  - precisa de atualização frequente e validação temporal

## Regras editoriais
- Cada artigo deve apoiar pelo menos uma página de serviço.
- Cada artigo deve incluir CTA contextual para contacto.
- Evitar publicar artigos sem rota própria e sem linking interno planeado.
- Atualizar artigo quando houver mudanças legislativas ou programas de incentivos.
- Em temas fiscais e de incentivos, evitar afirmações temporais sem validação contextual.

## Dependências
- arquitetura de posts: `Resolvido em conteúdo estático local`
- CMS ou conteúdo estático: `Resolvido com conteúdo estático local estruturado`
- processo editorial e validação técnica/legal: `Parcialmente definido; revisão humana continua recomendada em temas fiscais e temporais`
