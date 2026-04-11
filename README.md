# BC Accounting

Website institucional da BCA / BC Accounting construído com Next.js 15 e App Router.

## Stack ativa
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- App Router em `src/app/*`

## Estrutura principal
- `src/app`: rotas, metadata, sitemap, robots e entrypoints do App Router
- `src/views`: composição das páginas institucionais e de serviço
- `src/components`: layout e componentes reutilizáveis
- `src/content`: conteúdo estruturado do blog e FAQ
- `src/lib`: helpers de SEO, schema e utilitários
- `docs/seo`: documentação operacional do projeto SEO
- `docs/cleanup`: registo técnico da limpeza pós-migração

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Fluxo de trabalho
1. Ler `docs/seo/README.md`
2. Ler `docs/seo/STATUS.md`
3. Confirmar a implementação em `src/app/*` e `src/views/*`
4. Atualizar documentação relevante após alterações estruturais ou SEO

## Notas
- A arquitetura ativa é exclusivamente Next.js App Router.
- O legado React/Vite foi removido na limpeza pós-migração documentada em `docs/cleanup/MIGRATION_CLEANUP.md`.
