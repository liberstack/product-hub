# LiberStack — Product Hub

Landing page única para os produtos digitais da LiberStack: o e-book **Markdown Workflow** e o template **Vanilla Boilerplate**.

Projeto estático, sem framework e sem etapa de build. Basta abrir `index.html` no navegador.

## Estrutura

```
.
├── index.html               # Página principal (hub de produtos)
├── privacidade-termos.html  # Política de privacidade e termos de uso
├── style.css                # Estilos (fundo whitesmoke, tipografia IBM Plex)
├── script.js                # Interações (menu mobile, nav ativa, copiar comando)
├── sitemap.xml               # Sitemap para indexação
└── robots.txt                # Diretivas para crawlers
```

## Stack

- HTML, CSS e JavaScript puros (vanilla), sem bundler e sem dependências instaladas
- Fontes carregadas via CDN (Google Fonts): IBM Plex Sans e IBM Plex Mono
- Sem bibliotecas de terceiros

## Como visualizar localmente

Não é necessário servidor. Basta abrir o arquivo diretamente:

```
open index.html
```

ou, se preferir servir localmente:

```
npx serve .
```

## Deploy

Compatível com qualquer hospedagem de arquivos estáticos, como GitHub Pages ou Cloudflare Pages. Não há passo de build — os arquivos da raiz do repositório já são o site final.

## Checklist antes de publicar

- [ ] Atualizar os preços dos produtos em `index.html`
- [ ] Apontar os botões de compra (`.cta`) para o link de checkout real
- [ ] Substituir `SEU-DOMINIO.com` em `sitemap.xml` e `robots.txt` pelo domínio final
- [ ] Substituir `contato@SEU-DOMINIO.com` em `privacidade-termos.html` pelo e-mail de contato real
- [ ] Confirmar o link do GitHub na navegação (`github.com/liberstack`)
- [ ] Revisar `privacidade-termos.html` com um profissional antes de publicar — o conteúdo atual é um modelo de referência, não um documento jurídico validado

## Licença

Uso interno / privado. Sem licença de redistribuição definida.