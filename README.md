# Portfolio Miguel Angelo — 100% Python pra rodar (sem Node.js)

Esse projeto tem a cena 3D completa (mesa, computador, cadeira, sons) +
a telinha do monitor (Home/Sobre/Projetos/Contato) — exatamente como o
site original, só que agora você roda tudo com Python, sem precisar
instalar Node.js/npm nunca mais.

## Como rodar (1 comando só)

```bash
pip install -r requirements.txt
python iniciar.py
```

Isso abre o navegador sozinho em `http://localhost:8080/?dev` com a
cena 3D completa, sons e tudo mais — igual ao site original.

Pra fechar, volta no terminal e aperta `Ctrl+C`.

## Por que isso funciona sem Node.js?

A cena 3D (pasta `cena3d/`) precisa ser escrita e "compilada" com
JavaScript/Three.js — isso é uma regra do navegador, não dá pra fugir
disso (WebGL só existe em JavaScript). MAS a compilação (a parte que
precisava de Node.js, npm, TypeScript, e que estava dando os erros)
**já foi feita**. O que está na pasta `cena3d/` são só os arquivos
finais, prontos — HTML, CSS, JS, imagens, vídeos e sons. O Python
(`iniciar.py`) só serve esses arquivos prontos, como se fosse um
"entregador" — ele não precisa entender o que tem dentro.

## Estrutura

```
miguel_site_python/
├── iniciar.py          ← roda tudo (é só isso que você executa)
├── requirements.txt
├── cena3d/              ← a cena 3D já pronta (não mexe aqui)
└── monitor_os/          ← o app Flask da telinha do monitor
    ├── app.py
    ├── content.py       ← AQUI você edita os textos/fotos
    ├── templates/
    └── static/
```

## Como editar o conteúdo da telinha (Home/Sobre/Projetos/Contato)

Edita o arquivo **`monitor_os/content.py`**. Depois de salvar, para o
`iniciar.py` (Ctrl+C) e roda de novo.

## Como editar a cena 3D (mesa, computador, textos que aparecem em cima)

Essa parte, por ser 3D/WebGL, não dá pra editar só com Python — precisa
mexer no código-fonte original (projeto `faasty`, em TypeScript/Three.js)
e gerar um novo build. Se precisar mudar algo aí (tipo texto que aparece
flutuando, cores, modelos 3D), me chama que eu re-gero a pasta `cena3d/`
pra você.
