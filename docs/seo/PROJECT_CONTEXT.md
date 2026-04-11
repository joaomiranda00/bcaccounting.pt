# Contexto do Projeto

## Marca
- Nome de marca: BCA / BC Accounting
- Nome legal confirmado na codebase: `BCA - Business Consulting and Accounting, Lda.`

## Tipo de negócio
Empresa de contabilidade com oferta complementar de:

- consultoria fiscal
- consultoria de gestão
- apoio a incentivos ao investimento

## Posicionamento atual observado
Com base na copy existente, a BCA posiciona-se como parceiro próximo para empresas, com foco em:

- acompanhamento contabilístico
- conformidade fiscal
- apoio à gestão
- apoio a candidaturas e incentivos

## Localização confirmada
- Local principal referido na codebase: Vila do Conde
- Morada:
  - Edifício Alameda, Sala 3, 1.º Andar
  - Avenida Dr. João Canavarro, n.º 305
  - 4480-668 Vila do Conde
- Telefone: `252 642 059`
- Email: `bca@bcaccounting.pt`

## Público-alvo
- PMEs
- empresários
- sociedades comerciais
- profissionais liberais
- startups e novos projetos empresariais
- empresas interessadas em incentivos e fundos

## Objetivos do website
- captar leads qualificadas
- reforçar credibilidade institucional
- comunicar serviços de forma clara
- melhorar posicionamento orgânico para pesquisas comerciais e locais
- preparar base para crescimento editorial

## Arquitetura técnica relevante para SEO
- Runtime principal: Next.js 15 com App Router
- Rotas públicas em `src/app/*`
- Views reexportadas de `src/views/*`
- Metadata global em `src/app/layout.tsx`
- Metadata por rota em `src/app/**/page.tsx`
- Helper reutilizável de SEO em `src/lib/seo.ts`
- `robots.txt` e `sitemap.xml` estáticos em `public/`
- Código legado de Vite/React Router presente no repositório, mas fora do fluxo principal do Next

## Prioridades SEO
1. SEO on-page
2. SEO local
3. arquitetura semântica
4. consistência de metadata
5. conteúdo de apoio à conversão
6. estratégia editorial
7. internal linking

## Restrições e notas importantes
- Não assumir que o website está mal construído; existe base funcional.
- As métricas com valor zero no frontend não devem ser tratadas como erro SEO sem validação técnica adicional.
- Sempre que existirem dúvidas factuais, registar `Por confirmar`.
- Todo o trabalho deve ser documentado nesta pasta.
- Alterações de maior impacto devem ser precedidas por atualização da documentação de contexto.
