# Plano de Conteúdos

## Objetivo
Melhorar a clareza semântica, a relevância para pesquisas comerciais e a capacidade de conversão orgânica das páginas existentes, sem refactor visual amplo nesta fase.

## Tom de voz
- profissional
- claro
- próximo
- credível
- orientado a empresas
- sem promessas excessivas
- português de Portugal consistente

## Princípios de escrita SEO
- Colocar a intenção principal da página logo no primeiro bloco visível.
- Usar terminologia coerente entre título, `h1`, subtítulo e secções.
- Evitar repetição mecânica de keywords.
- Introduzir contexto local apenas quando natural e suportado pela proposta da página.
- Escrever para conversão assistida: clareza, confiança, próximos passos.

## Homepage

### Estado atual
- Boa estrutura visual e hierarquia de secções.
- Hero revisto na Fase 2 com foco mais comercial e local.
- Links contextuais diretos para serviços principais adicionados acima da dobra.
- Secção "Porquê Escolher a BCA?" tornada mais concreta.
- Referência local mantida de forma natural.

### Melhorias recomendadas
- Avaliar mais tarde se faz sentido introduzir bloco curto de FAQ resumida.
- Considerar evolução futura para prova adicional por setor ou caso de uso.

## Página `Serviços`

### Estado atual
- Reposicionada na Fase 2 como hub orientador.
- Introduzido texto inicial para ajudar o utilizador a perceber quando precisa de cada serviço.
- Reforçados links contextuais para subpáginas antes dos cards.

### Melhorias recomendadas
- Continuar a vigiar risco de canibalização com páginas filhas.
- Considerar, em fase posterior, ligação a conteúdos editoriais por cluster.

## Páginas de serviço

### Estado atual
- Estrutura coerente entre páginas.
- Bom equilíbrio entre secções e CTA.
- Copy informativa, mas relativamente homogénea.
- `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento` passaram a incluir leitura relacionada para blog, FAQ e contacto.

### Melhorias recomendadas por padrão
- Fortalecer o parágrafo inicial com problema + solução + tipo de cliente.
- Introduzir 1 bloco opcional por serviço:
  - sinais de que a empresa precisa deste serviço
  - perguntas frequentes específicas
  - benefícios operacionais concretos
- Diferenciar melhor a linguagem entre:
  - contabilidade
  - fiscalidade
  - gestão
  - incentivos

### Páginas com copy mais genérica
- `/servicos/contabilidade`
- `/servicos/consultoria-fiscal`
- `/servicos/incentivos-ao-investimento`

### Observação pós-Fase 2
- `/`, `/servicos` e `/servicos/consultoria-de-gestao` deixaram de estar entre as páginas mais genéricas do conjunto prioritário desta fase.

## FAQ

### Estado atual
- Conteúdo relevante e útil.
- Boa cobertura inicial de dúvidas.
- Links contextuais adicionados nas respostas para serviços e contactos relevantes.
- Estrutura preparada com IDs estáveis por pergunta, útil para evolução futura.

### Melhorias recomendadas
- Expandir a cobertura de perguntas com foco comercial por serviço.
- Manter alinhamento entre a fonte de dados partilhada da FAQ, a UI e o schema `FAQPage`.

## Blog

### Estado atual
- Funciona como hub editorial com cards ligados a páginas reais de artigo.
- Os conteúdos estão centralizados em `src/content/blog.ts`.
- Existem páginas individuais em `/blog/[slug]` com CTA contextual para serviço e contacto.

### Melhorias recomendadas
- Expandir o volume editorial por cluster mantendo a mesma estrutura local.
- Manter schema `BlogPosting` ao adicionar novos artigos.
- Avaliar evolução futura para listagem de artigos relacionados dentro das páginas de serviço.

## Contactos

### Estado atual
- Boa exposição de dados de contacto e mapa.
- Microcopy de conversão melhorada na Fase 2.
- Adicionado bloco curto "Podemos ajudar com" com links para serviços e FAQ.
- Continua sem submissão real confirmada.

### Melhorias recomendadas
- Só adicionar expectativa de resposta quando houver base operacional confirmada.
- Validar integração real do formulário numa fase própria.

## Novos blocos recomendados

### Homepage
- bloco de FAQs resumidas
- bloco de setores ou tipologias de empresa acompanhadas
- bloco de prova de processo ou metodologia com foco em resultado

### Páginas de serviço
- bloco "Sinais de que precisa deste serviço"
- bloco de FAQs específicas
- bloco de ligação a conteúdos do blog

### FAQ
- agrupamento temático com ligação para páginas comerciais

### Contactos
- bloco "Antes de nos contactar"
- bloco de serviços mais pedidos

## Implementado na Fase 2
- Homepage:
  - hero e proposta de valor revistos
  - links contextuais para serviços principais
  - reforço de confiança com tipologias de empresa
- Página `Serviços`:
  - posicionamento como hub geral
  - orientação textual sobre quando precisa de cada serviço
  - links contextuais adicionais para subpáginas
- `Consultoria de Gestão`:
  - copy mais operacional e distinta de contabilidade/fiscalidade
- `Contactos`:
  - microcopy de conversão revista
  - ligação para serviços e FAQ
- `FAQ`:
  - respostas com links contextuais
  - estrutura preparada para futura evolução semântica
- `Blog`:
  - listagem editorial ligada a páginas reais de artigo
  - conteúdos-base criados para contabilidade, fiscalidade e incentivos
  - CTA editorial contextual para serviços e contactos

## Implementado na Fase 3
- Blog:
  - arquitetura estática local definida em `src/content/blog.ts`
  - páginas individuais em `/blog/[slug]`
  - artigos-base publicados com ligação a serviços principais
  - estrutura preparada para expansão futura sem refactor grande

## Ajustes finais de revisão global
- Páginas `Contabilidade`, `Consultoria Fiscal` e `Incentivos ao Investimento`:
  - links contextuais adicionados para artigo relacionado, FAQ e contacto
  - microcopy comercial ajustada para evitar promessas não confirmadas
- `Contactos`:
  - bloco "Podemos ajudar com" expandido para incluir incentivos ao investimento

## Itens por confirmar antes de copy profunda
- setores prioritários da BCA
- proposta de diferenciação mais forte face à concorrência local
- tipos de clientes com maior valor comercial
- tom institucional preferido da marca em campanhas comerciais
