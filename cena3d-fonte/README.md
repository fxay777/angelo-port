# Objetos extras da sala 3D

A cena 3D principal (`bundle.*.js`) já vem compilada e tem edições feitas à mão,
então **não é recompilada**. Os objetos novos da sala entram por um script
separado, `sala-extra.js`, que espera a sala carregar e adiciona tudo via
`window.Application` (o mesmo jeito do `celular3d.js`).

| Arquivo | O que é |
|---|---|
| `src/sala.js` | Cavalete com cartaz, câmera no tripé, softbox, claquete, fitas VHS, fone e o Rolinho |
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
