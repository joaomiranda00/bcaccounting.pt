# Changelog SEO

## 2026-04-11

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
