# Objetos extras da sala 3D

A cena 3D principal (`bundle.*.js`) já vem compilada e tem edições feitas à mão,
então **não é recompilada**. Os objetos novos da sala entram por um script
separado, `sala-extra.js`, que espera a sala carregar e adiciona tudo via
`window.Application` (o mesmo jeito do `celular3d.js`).

| Arquivo | O que é |
|---|---|
| `src/sala.js` | Monta tudo, liga cada objeto à sua ação (claquete, gravar, luzes, modo festa...) |
| `src/objetos.js` | Cavalete com cartaz, câmera no tripé, softbox, claquete, fitas VHS, fone e o Rolinho |
| `src/set.js` | Fundo chroma key, refletor Fresnel, boom, cadeira de diretor, placa GRAVANDO, apple boxes, fitas no chão, fez, gravata, bilhete |
| `src/interacao.js` | Detecta o objeto sob o mouse, mostra a dica e executa o clique |
| `src/gaveta.js` | Gavetas que abrem (deslizam os vértices da frente original da mesa), tralhas e a Multiferramenta Sônica MA-26 |
| `src/cinema.js` | Cena em primeira pessoa: pegar o aparelho, apontar para o PC, zap, glitch e reset |
| `src/util.js` | Material que imita a luz da cena, sombras, sons 8-bit e balão de texto |
| `cartaz.py` | Gera `textures/sala/cartaz.jpg` (o pôster SHOWREEL 2026) |
| `folha.py` | Gera `models/Decor/baked_decor_v2.jpg` (a "Ordem do Dia" em cima da mesa) |

## Editar os objetos

```bash
cd cena3d-fonte
npm install
npm run build      # gera ../sala-extra.js
cp ../sala-extra.js ../cena3d/
```

Depois de mudar, aumente o `?v=` do `sala-extra.js` no `index.html` para os
navegadores baixarem a versão nova.

Unidades da cena: ~34 unidades por centímetro. Chão em `y = -2984`, tampo da mesa em `y = -452`.

## Conversa com o computador

Alguns objetos mandam pedidos para o MiguelOS (dentro do monitor) com
`postMessage({ fonte: 'sala3d', acao: ... })`. O MiguelOS (`monitor_os/static/js/extras.js`)
só aceita mensagens vindas da página que contém o iframe. Ações: `videos`,
`video` (com `yt`), `ficha`, `maiorpordentro`, `sonico` (glitch + tela Oopsie + reinício).
