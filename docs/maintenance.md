# Portfolio Maintenance Guide

## Estrutura principal

- `app/layout.tsx`
  Define metadata global e o fundo/base visual do app.
- `app/page.tsx`
  Ponto de entrada da home. Apenas renderiza o componente principal.
- `components/portfolio/portfolio-app.tsx`
  Orquestra locale, scroll dos capítulos e composição geral da página.
- `components/portfolio/hero-section.tsx`
  Hero principal.
- `components/portfolio/logo-marquee.tsx`
  Faixa animada de logos com tooltip e pausa no hover.
- `components/portfolio/chapter-section.tsx`
  Capítulos sticky com cena + painel lateral.
- `components/portfolio/footer-cta.tsx`
  Bloco final de contato e posicionamento.
- `components/portfolio/language-switcher.tsx`
  Alternador de idiomas.
- `lib/portfolio-content.ts`
  Fonte única de conteúdo: idiomas, textos, capítulos, logos, stack e contatos.

## Onde editar conteúdo

Tudo que é texto ou dado principal está em `lib/portfolio-content.ts`.

### Hero

- `intro`
- `heroCards`

### Logos

- `clientLogos`
- os arquivos de imagem ficam em `public/clients`

### Capítulos

- `sections`
- cada item do capítulo tem `title`, `meta` e `body`
- as imagens das cenas ficam em `public/scenarios`

### Footer

- `footerCopy`
- `contactLinks`

## Idiomas suportados

Os idiomas vivem em `locales` dentro de `lib/portfolio-content.ts`.

Atualmente:

- `pt`
- `en`
- `es`
- `fr`
- `it`

Para adicionar um novo idioma:

1. Adicione o código em `locales`
2. Atualize o tipo `LocalizedText`
3. Preencha o novo idioma em todos os objetos traduzíveis
4. Adicione o rótulo do idioma em `components/portfolio/language-switcher.tsx`

## Como manter as logos

- Logos ficam em `public/clients`
- O marquee usa os arquivos diretamente
- Se uma logo ficar pequena por causa de canvas/viewBox, ajuste o SVG na origem
- Prefira corrigir o `viewBox` do arquivo em vez de compensar no componente

## Como manter as cenas

- As cenas são imagens estáticas em `public/scenarios`
- O componente `ChapterSection` só exibe a imagem, não faz tratamento especial por arquivo
- Se quiser trocar a cena, mantenha uma proporção parecida para preservar o enquadramento

## Styling

- O projeto foi migrado para utilitários Tailwind diretamente no JSX
- `app/globals.css` ficou só com `@import "tailwindcss"`
- Evite recriar classes globais; prefira utilitários e valores arbitrários

## Scroll e capítulos

- O capítulo ativo é controlado em `components/portfolio/portfolio-app.tsx`
- A função `getActiveItemIndex` define qual item lateral está ativo com base no progresso do scroll
- O capítulo visível é decidido pelo threshold de viewport dentro do `useEffect`

## Sugestão prática para futuras mudanças

Se você for alterar o site no futuro, a ordem mais segura é:

1. ajustar textos e dados em `lib/portfolio-content.ts`
2. revisar layout do componente específico em `components/portfolio/...`
3. validar com `npm run lint`
4. validar com `npm run build`
