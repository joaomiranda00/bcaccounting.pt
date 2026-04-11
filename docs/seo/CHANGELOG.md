# Changelog SEO

## 2026-04-11

### Refinamento Visual: Timeline do Processo na Homepage
- Atualizado:
  - `src/views/Home.tsx`
  - `docs/seo/STATUS.md`
  - `docs/seo/CHANGELOG.md`
- Motivo:
  - reforçar a clareza visual da secção `O Nosso Processo` sem redesenhar a homepage
  - substituir a grelha linear por uma timeline zig-zag com eixo central em desktop
  - manter responsividade simples e legível em tablet e mobile
- Impacto esperado:
  - leitura mais imediata da sequência do processo
  - melhor ritmo visual na homepage
  - reforço de perceção institucional e profissional sem excesso de ornamento

### Limpeza Técnica Pós-Migração Next.js
- Removidos:
  - ficheiros legados da stack React/Vite: `src/App.tsx`, `src/main.tsx`, `src/App.css`, `vite.config.ts`, `index.html`, `tsconfig.app.json`, `tsconfig.node.json`, `info.md`
  - inventário `src/components/ui/*` sem uso no runtime atual, mantendo apenas `button`, `input`, `label` e `textarea`
  - `src/hooks/use-mobile.ts`, que apenas servia o `sidebar` legado
- Normalizados:
  - `README.md` raiz para refletir Next.js App Router
  - `package.json`, `tsconfig.json`, `tailwind.config.js` e `components.json`
  - documentação técnica de limpeza em `docs/cleanup/MIGRATION_CLEANUP.md`
  - documentação SEO para remover referências desatualizadas ao legado Vite/React Router
- Impacto esperado:
  - arquitetura ativa mais inequívoca para futuras sessões
  - menos ruído estrutural e menos dependências sem uso
  - menor risco de decisões baseadas em ficheiros ou padrões descontinuados
- Validação:
  - `npm run lint` executado com sucesso
  - `npm run build` executado com sucesso
  - manteve-se apenas o aviso não bloqueante sobre a configuração ESLint do Next

### Revisão Final Global
- Validados:
  - metadata global e por rota
  - canonicals e indexação principal
  - schema markup implementado
  - sitemap e robots do App Router
  - coerência entre blog, artigos, FAQ, contactos e documentação
- Corrigidos:
  - links contextuais adicionados em `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento` para artigo relacionado, FAQ e contactos
  - bloco "Podemos ajudar com" em `Contactos` alargado a incentivos ao investimento
  - microcopy comercial ajustada para remover promessas não confirmadas em CTAs
  - documentação sincronizada com o estado final pós-fases 1 a 4
- Pendências assumidas:
  - formulário de contactos real
  - cluster editorial de gestão ainda por abrir
  - revisão legal da política de cookies
  - rollout adicional de `next/image` fora do blog
- Validação:
  - `npm run build` executado com sucesso
  - manteve-se apenas o aviso não bloqueante sobre a configuração ESLint do Next

### Fase 4: Refinamentos Técnicos
- Atualizados:
  - `src/app/layout.tsx`
  - `src/app/faq/page.tsx`
  - `src/app/blog/[slug]/page.tsx`
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
  - `src/views/FAQ.tsx`
  - `src/views/Blog.tsx`
  - `src/content/faq.tsx`
  - `src/lib/structured-data.ts`
  - `src/components/seo/JsonLd.tsx`
  - `next.config.ts`
  - `docs/seo/README.md`
  - `docs/seo/PROJECT_CONTEXT.md`
  - `docs/seo/SEO_AUDIT.md`
  - `docs/seo/PAGE_INVENTORY.md`
  - `docs/seo/STATUS.md`
  - `docs/seo/IMPLEMENTATION_ROADMAP.md`
  - `docs/seo/CHANGELOG.md`
- Removidos:
  - `public/robots.txt`
  - `public/sitemap.xml`
- Motivo:
  - consolidar a base técnica SEO com schema útil e coerente
  - migrar rastreabilidade para soluções nativas do Next App Router
  - reduzir risco de divergência entre conteúdo visível e marcação estruturada
- Impacto esperado:
  - melhor qualificação técnica da entidade local BCA
  - FAQ e artigos preparados para interpretação semântica mais rica
  - sitemap e robots mais sustentáveis para futuras fases editoriais
- Validação:
  - `npm run build` executado com sucesso
  - manteve-se apenas o aviso não bloqueante sobre a configuração ESLint do Next

### Fase 3: Blog e Autoridade
- Atualizados:
  - `src/content/blog.ts`
  - `src/views/Blog.tsx`
  - `src/app/blog/page.tsx`
  - `src/app/blog/[slug]/page.tsx`
  - `src/app/blog/[slug]/not-found.tsx`
  - `docs/seo/README.md`
  - `docs/seo/CONTENT_PLAN.md`
  - `docs/seo/BLOG_PLAN.md`
  - `docs/seo/INTERNAL_LINKING_PLAN.md`
  - `docs/seo/METADATA_PLAN.md`
  - `docs/seo/SEO_AUDIT.md`
  - `docs/seo/PAGE_INVENTORY.md`
  - `docs/seo/STATUS.md`
  - `docs/seo/CHANGELOG.md`
- Motivo:
  - transformar o blog numa base editorial indexável e escalável
  - criar páginas individuais de artigo com metadata própria
  - alinhar a documentação com o estado real pós-implementação da Fase 3
- Impacto esperado:
  - criação de base long-tail para o cluster editorial da BCA
  - melhor ligação entre blog, serviços e contactos
  - maior continuidade operacional para futuras sessões editoriais
- Validação:
  - `npm run build` executado com sucesso após correção de um detalhe sintático no `not-found` do blog
  - manteve-se apenas o aviso não bloqueante sobre a configuração ESLint do Next

### Fase 2: On-page e Conteúdos
- Atualizados:
  - `src/views/Home.tsx`
  - `src/views/Servicos.tsx`
  - `src/views/ConsultoriaGestao.tsx`
  - `src/views/Contactos.tsx`
  - `src/views/FAQ.tsx`
  - `src/views/Blog.tsx`
  - `docs/seo/CONTENT_PLAN.md`
  - `docs/seo/INTERNAL_LINKING_PLAN.md`
  - `docs/seo/SEO_AUDIT.md`
  - `docs/seo/PAGE_INVENTORY.md`
  - `docs/seo/STATUS.md`
  - `docs/seo/CHANGELOG.md`
- Motivo:
  - tornar as páginas prioritárias mais específicas, comerciais e semanticamente diferenciadas
  - melhorar apoio à conversão orgânica sem refactor visual grande
  - implementar internal linking contextual nas páginas prioritárias
- Impacto esperado:
  - melhor clareza on-page para utilizadores e motores de busca
  - melhor diferenciação entre homepage, página-hub e página de gestão
  - reforço do linking interno entre serviços, FAQ, contactos e blog

### Sincronização documental pós-Fase 1
- Atualizados:
  - `docs/seo/README.md`
  - `docs/seo/PROJECT_CONTEXT.md`
  - `docs/seo/SEO_AUDIT.md`
  - `docs/seo/PAGE_INVENTORY.md`
  - `docs/seo/METADATA_PLAN.md`
  - `docs/seo/STATUS.md`
  - `docs/seo/CHANGELOG.md`
- Motivo:
  - alinhar a documentação com o estado real pós-implementação da Fase 1
  - remover contradições entre diagnóstico inicial e estado atual
  - garantir que novos agentes não interpretam metadata por rota como pendência ainda aberta
- Impacto esperado:
  - maior fidelidade documental
  - menos risco de decisões baseadas em estado desatualizado
  - melhor continuidade entre sessões

### Documentação
- Criada e consolidada a pasta `docs/seo/` como fonte única de contexto SEO do projeto.
- Atualizados:
  - `docs/seo/README.md`
  - `docs/seo/PROJECT_CONTEXT.md`
  - `docs/seo/STATUS.md`
- Criados:
  - `docs/seo/SEO_AUDIT.md`
  - `docs/seo/SEO_STRATEGY.md`
  - `docs/seo/PAGE_INVENTORY.md`
  - `docs/seo/METADATA_PLAN.md`
  - `docs/seo/CONTENT_PLAN.md`
  - `docs/seo/BLOG_PLAN.md`
  - `docs/seo/INTERNAL_LINKING_PLAN.md`
  - `docs/seo/IMPLEMENTATION_ROADMAP.md`
- Motivo:
  - preservar contexto entre sessões
  - registar estado real da codebase
  - preparar execução incremental da Fase 1
- Impacto esperado:
  - maior continuidade operacional
  - menos risco de decisões sem contexto
  - base sólida para otimização SEO contínua

### Implementação Fase 1
- Melhorada a metadata global em `src/app/layout.tsx`.
- Criado o helper reutilizável `src/lib/seo.ts` para uniformizar titles, descriptions, canonicals e metadados sociais.
- Aplicada metadata por rota em:
  - `src/app/page.tsx`
  - `src/app/sobre/page.tsx`
  - `src/app/servicos/page.tsx`
  - `src/app/servicos/contabilidade/page.tsx`
  - `src/app/servicos/consultoria-fiscal/page.tsx`
  - `src/app/servicos/consultoria-de-gestao/page.tsx`
  - `src/app/servicos/incentivos-ao-investimento/page.tsx`
  - `src/app/contactos/page.tsx`
  - `src/app/faq/page.tsx`
  - `src/app/blog/page.tsx`
  - `src/app/politica-de-privacidade/page.tsx`
  - `src/app/termos-e-condicoes/page.tsx`
  - `src/app/cookies/page.tsx`
- Motivo:
  - resolver a ausência de metadata por página
  - alinhar titles e descriptions com intenção de pesquisa e localização
  - criar base escalável para otimização contínua
- Impacto esperado:
  - melhoria da relevância on-page por rota
  - melhor CTR orgânico potencial
  - base técnica mais consistente para futuras fases

### Validação
- `npm run build` executado com sucesso após as alterações.
- Nota:
  - o build mostrou um aviso sobre deteção do plugin Next no ESLint, sem bloquear a compilação.
