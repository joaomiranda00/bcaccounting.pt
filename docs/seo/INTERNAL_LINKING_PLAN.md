# Plano de Internal Linking

## Objetivo
Reforçar a relação semântica entre homepage, serviços, FAQ, blog e contactos para melhorar rastreabilidade, distribuição de autoridade interna e conversão orgânica.

## Estado atual confirmado
- Header e footer ligam às páginas principais.
- Homepage liga para serviços, sobre, incentivos e contactos.
- Homepage passou a ligar também, de forma contextual, para os quatro serviços principais acima da dobra.
- Páginas de serviço incluem breadcrumb e CTA para contactos.
- A página `Serviços` ganhou links textuais adicionais para subpáginas, para além dos cards.
- `Consultoria de Gestão` passou a ligar contextualmente para `Contabilidade` e `Consultoria Fiscal`.
- FAQ passou a ligar para serviços e contactos dentro das respostas.
- `Contactos` passou a ligar para serviços principais e FAQ.
- O blog passou a ligar para serviços relacionados a partir dos cards, do bloco introdutório e das páginas individuais de artigo.
- Os artigos do blog ligam ao serviço principal correspondente, a `/contactos` e a artigos relacionados.
- Páginas legais têm algumas ligações internas entre si.

## Lacunas atuais
- A ligação contextual entre páginas de serviço continua parcial e pode ser expandida nas páginas ainda não revistas na Fase 2.
- As páginas de serviço ainda não ligam de forma consistente para os novos artigos do blog.
- O linking entre FAQ e serviços existe, mas pode ser aprofundado com mais perguntas por cluster.

## Relações principais desejadas

### Homepage
- ligar para:
  - `/servicos`
  - `/servicos/contabilidade`
  - `/servicos/consultoria-fiscal`
  - `/servicos/consultoria-de-gestao`
  - `/servicos/incentivos-ao-investimento`
  - `/contactos`
  - `/sobre`

### Página `Serviços`
- ligar para:
  - todas as páginas de serviço
  - `/contactos`
  - futuramente artigos introdutórios por cluster

### Páginas de serviço
- cada página deve ligar para:
  - `/servicos`
  - `/contactos`
  - `/faq`
  - pelo menos 1 artigo do blog relacionado, quando existir

### FAQ
- perguntas de contabilidade:
  - ligar para `/servicos/contabilidade`
- perguntas fiscais:
  - ligar para `/servicos/consultoria-fiscal`
- perguntas de gestão:
  - ligar para `/servicos/consultoria-de-gestao`
- perguntas sobre fundos:
  - ligar para `/servicos/incentivos-ao-investimento`
- perguntas de contacto/localização:
  - ligar para `/contactos`

### Blog
- listagem do blog:
  - ligar para artigos reais
- artigos:
  - ligar para 1 página de serviço principal
  - ligar para `/contactos`
  - ligar para 1 ou 2 conteúdos relacionados

### Sobre
- ligar para:
  - `/servicos`
  - `/contactos`
- usar a página como reforço de confiança

### Contactos
- ligar para:
  - serviços principais
  - FAQ

## Oportunidades de links contextuais
- Homepage:
  - no hero e secção de benefícios
- Páginas de serviço:
  - no final de benefícios
  - em FAQs específicas futuras
- FAQ:
  - links embebidos nas respostas
- Blog:
  - CTA no fim de cada artigo

## Prioridade de implementação
1. preservar header, footer e breadcrumbs existentes
2. reforçar cross-linking entre serviços relacionados nas páginas não intervencionadas
3. ligar páginas de serviço aos novos artigos relevantes do blog
4. expandir ligações contextuais FAQ -> serviço por tema
