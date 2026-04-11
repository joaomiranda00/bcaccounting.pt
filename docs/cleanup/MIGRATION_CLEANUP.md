# Limpeza Pós-Migração para Next.js

## 1. Objetivo da limpeza
Remover legado técnico confirmado da stack React/Vite, reduzir ruído operacional, normalizar a estrutura do projeto em torno do Next.js App Router e deixar a codebase mais previsível para desenvolvimento e manutenção futuros.

## 2. Arquitetura ativa confirmada
- Runtime principal: Next.js 15
- Arquitetura de rotas: App Router em `src/app/*`
- Camada de composição de páginas: `src/views/*`
- Componentes reutilizáveis ativos: `src/components/*`
- Conteúdo estruturado: `src/content/*`
- Helpers e utilitários: `src/lib/*`
- Documentação operacional: `docs/seo/*`
- Documentação técnica de limpeza: `docs/cleanup/*`

## 3. Classificação da auditoria

### Ativo e correto
- `src/app/*` como fonte real da aplicação
- `src/views/*` como camada principal das páginas institucionais e de serviço
- `src/components/layout/*` e `src/components/seo/*`
- `src/components/ui/button.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`
- `src/content/blog.ts` e `src/content/faq.tsx`
- `src/lib/seo.ts`, `src/lib/structured-data.ts`, `src/lib/utils.ts`
- `next.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.js`, `eslint.config.js`

### Legado confirmado
- `src/App.tsx`
- `src/main.tsx`
- `src/App.css`
- `vite.config.ts`
- `index.html`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `info.md`
- inventário `src/components/ui/*` não usado pelo runtime atual além de `button`, `input`, `label` e `textarea`
- `src/hooks/use-mobile.ts`, apenas referenciado pelo `sidebar` legado removido

### Duplicado ou inconsistente
- `README.md` raiz ainda descrevia um template React + Vite
- `tailwind.config.js` ainda apontava para `./app/**/*` em vez de `./src/app/**/*`
- `components.json` ainda descrevia um setup híbrido pouco fiel ao App Router
- `package.json` mantinha nome genérico e script `preview` redundante
- `tsconfig.json` ainda incluía padrões residuais de estrutura antiga

### Por confirmar
- integração recomendada do lint com Next via `eslint-config-next`
- rollout adicional de `next/image` fora do cluster editorial
- conformidade entre política de cookies e implementação técnica real
- submissão real do formulário de contactos

## 4. Itens removidos
- ficheiros de bootstrap e router antigos da stack React/Vite
- config de Vite e respetivos ficheiros TypeScript auxiliares
- README e documentação legada contraditória
- componentes `shadcn/radix` não usados pelo runtime atual
- hook `use-mobile` que só servia o inventário `ui` legado

## 5. Itens normalizados
- `README.md` raiz reescrito para refletir a arquitetura real do projeto
- `package.json` simplificado para scripts do fluxo atual do Next
- `tsconfig.json` limpo de padrões herdados da estrutura anterior
- `tailwind.config.js` alinhado com `src/app/*` e sem extensões ligadas ao inventário UI removido
- `components.json` alinhado com RSC/App Router e com o ficheiro de config correto do Tailwind

## 6. Itens mantidos por precaução
- `components.json`, porque ainda existem componentes `ui` ativos e a configuração continua útil para consistência futura
- `eslint.config.js` atual, apesar de não integrar ainda a config recomendada do Next
- views e componentes ativos mesmo quando ainda existe margem de refactor, por estarem no fluxo real do website

## 7. Dependências removidas
- todo o bloco de dependências ligado ao inventário UI morto, incluindo Radix packages não usados, `react-hook-form`, `zod`, `recharts`, `cmdk`, `vaul`, `sonner`, `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`, `tailwindcss-animate` e `tw-animate-css`
- `@gsap/react`, que não era usado pelo runtime atual

## 8. Configs ajustadas
- `package.json`
- `tsconfig.json`
- `tailwind.config.js`
- `components.json`
- `README.md`

## 9. Pendências
- o build do Next continua a sinalizar ausência da integração recomendada do plugin/config ESLint do Next
- não foi feita remoção agressiva de imagens remotas fora do blog para evitar regressões visuais
- a camada de contacto continua sem submissão real

## 10. Recomendações para futuras sessões
1. Tratar a integração recomendada do lint com Next assim que a dependência/config adequada estiver disponível no ambiente.
2. Só reintroduzir componentes `ui` quando houver uso real confirmado na interface.
3. Manter `src/app/*` como única camada de entrada e evitar duplicação com routers paralelos.
4. Atualizar `docs/cleanup/MIGRATION_CLEANUP.md` sempre que houver nova ronda de normalização estrutural.
