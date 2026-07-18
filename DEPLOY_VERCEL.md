# Como colocar esse projeto no ar usando a Vercel

O projeto tem **duas partes separadas**, então vira **dois projetos separados** na
Vercel:

1. `cena3d/` — a cena 3D (mesa, computador, sons). É só HTML/CSS/JS estático,
   deploy simples, sem configuração nenhuma.
2. `monitor_os/` — o app Flask (Home/Sobre/Projetos/Contato + jogos). Precisa
   de configuração especial porque a Vercel roda Python como "funções que
   respondem sob demanda", não como um servidor ligado o tempo todo.

Depois de publicar os dois, você liga um no outro trocando uma linha de
código (o `iframe.src`).

---

## Parte 1 — Publicar a cena 3D (`cena3d/`)

1. Cria uma conta grátis em **https://vercel.com** (dá pra entrar direto com
   GitHub)
2. Sobe a pasta `cena3d/` pra um repositório novo no GitHub (crie um repo
   vazio, e faça upload/push só do conteúdo dessa pasta)
3. Na Vercel: **Add New → Project → importa esse repositório**
4. A Vercel vai detectar sozinha que é um site estático (não precisa mexer em
   nada nas configurações de build)
5. Clica em **Deploy**
6. Quando terminar, você vai ter uma URL tipo `https://seu-projeto.vercel.app`

Guarda essa URL — não é ela que você vai acessar diretamente, mas vai
precisar dela mais pra frente.

---

## Parte 2 — Publicar o app Flask (`monitor_os/`)

Esse já tem os arquivos de configuração da Vercel prontos dentro da pasta
(`vercel.json` e `.vercelignore`) — não precisa criar nada, só subir.

1. Sobe a pasta `monitor_os/` pra **outro** repositório no GitHub (separado
   do da cena 3D)
2. Na Vercel: **Add New → Project → importa esse repositório**
3. A Vercel vai detectar o `vercel.json` e configurar tudo sozinha
4. Clica em **Deploy**
5. Você vai ter uma segunda URL, tipo `https://seu-monitor.vercel.app`

### Testando antes de seguir

Acessa essa URL nova no navegador — deve aparecer a área de trabalho com os
ícones (Doom, Wolfenstein, etc). Testa se os jogos abrem normalmente. Se
algum jogo não carregar, geralmente é porque o arquivo `.jsdos` dele é grande
demais e a configuração de rotas estáticas precisa de ajuste (me chama que eu
ajudo a debugar com o erro específico).

---

## Parte 3 — Conectar as duas partes

Agora que você tem as duas URLs no ar, precisa avisar a cena 3D pra carregar
o monitor publicado, em vez do `os.henryheffernan.com` (ou do `localhost`).

No projeto `faasty` (código-fonte, não o build), abre o arquivo:
```
src/Application/World/MonitorScreen.ts
```

Procura a linha (perto do topo do método que monta o iframe):
```ts
iframe.src = 'https://os.henryheffernan.com/';
```

Troca pela URL do seu `monitor_os` publicado:
```ts
iframe.src = 'https://seu-monitor.vercel.app/';
```

Depois disso, você precisa **recompilar** o `faasty` (`npm run build`) e
subir o conteúdo novo da pasta `public/` (que é o mesmo que a pasta
`cena3d/` que você já publicou na Parte 1) — substitui os arquivos no
repositório do GitHub da Parte 1, e a Vercel republica sozinha.

Se preferir, me manda as duas URLs depois que publicar e eu já faço essa
edição e recompilação pra você, evitando esse último passo manual.

---

## Resumo do fluxo final

```
Usuário acessa → seu-site.vercel.app (cena 3D)
                        │
                        │ (o computador dentro da cena 3D)
                        ▼
              iframe carrega → seu-monitor.vercel.app (Flask)
```

## Domínio próprio (opcional)

Se você tiver um domínio (tipo `miguelangelo.com`), dá pra apontar ele pra
qualquer um dos dois projetos na Vercel, em **Project → Settings →
Domains**. É de graça, só o registro do domínio em si que custa (geralmente
comprado em outro lugar, tipo Registro.br ou Namecheap).
