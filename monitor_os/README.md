# Portfolio Miguel Angelo — versão Python/Flask

Site simples, leve, sem build, sem npm, sem TypeScript. Só Python.

## Como rodar

```bash
pip install -r requirements.txt
python app.py
```

Depois abre no navegador: **http://localhost:3000**

Toda vez que você editar o `content.py`, é só parar (Ctrl+C) e rodar
`python app.py` de novo (ou deixar `debug=True` fazer isso sozinho,
já está configurado assim).

## Como editar o conteúdo

Abre o arquivo **`content.py`** — é o único arquivo que você precisa mexer
pro dia a dia. Lá dentro tem:

- `NOME`, `CARGO` — nome e profissão que aparecem em vários lugares
- `EMAIL` — seu e-mail de contato
- `HOME` — textos da página inicial
- `SOBRE` — texto "Sobre Mim" + foto
- `HOBBIES` — texto de hobbies + foto
- `MENU` — os links da barra lateral
- `PROJETOS` — lista de projetos (adicione quantos quiser, copiando o formato)
- `CONTATO` — texto da página de contato

## Como trocar as fotos

Coloca o arquivo de imagem novo dentro de `static/images/` e troca o nome
do arquivo no `content.py` (campos `"foto"` dentro de `SOBRE` e `HOBBIES`).

## Como mudar as cores/visual

Tudo isso fica em `static/css/style.css`. Os comentários lá dentro explicam
cada seção (janela, barra lateral, tela inicial, etc).

## Integrando com a cena 3D (projeto `faasty`)

Esse app roda por padrão na porta **3000**, igual ao app em React antigo.
Ou seja, o `faasty` já vai encontrar ele automaticamente quando você acessar
com `?dev` na URL (ex: `http://localhost:8080/?dev`), sem precisar mudar
nada no código do `faasty`.

Quando for colocar em produção (não só localhost), hospeda esse Flask em
qualquer lugar que rode Python (Render, Railway, PythonAnywhere, etc) e troca
o `iframe.src` no `MonitorScreen.ts` do projeto `faasty` pra apontar pra URL
publicada.
