# Cia da Terra — Guia de marca

Apresentação da identidade visual da Cia da Terra. O guia reúne fundamentos da marca, logotipos, cores, tipografia e aplicações digitais e impressas.

## Rodar localmente

```sh
npm ci
npm run dev
```

Abra [o guia em localhost](http://127.0.0.1:3000). Use `npm run check` para a checagem de tipos e `npm run build` para gerar a versão estática em `out/`.

## Vercel

Importe o repositório `idvciadaterra` com o preset Next.js e o diretório raiz do repositório. A branch `main` publica o guia na URL principal do projeto. O build usa `npm run build` e não requer variáveis de ambiente.

O conteúdo do guia fica em `app/guia-da-marca/`. As fontes e imagens são carregadas de `public/`.
