"""Redesenha a folha de papel em cima da mesa (textura baked_decor) como uma
"Ordem do Dia" de produção, mantendo a sombra/iluminação pintada do papel."""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ENTRADA, SAIDA = sys.argv[1], sys.argv[2]
G = '/usr/share/fonts/truetype/google-fonts/ofl/'
MONO = G + 'anonymouspro/AnonymousPro-Regular.ttf'
MONO_B = G + 'anonymouspro/AnonymousPro-Bold.ttf'
TIT = G + 'archivoblack/ArchivoBlack-Regular.ttf'

im = Image.open(ENTRADA).convert('RGB')
X0, Y0, X1, Y1 = 56, 133, 1978, 2827   # retângulo da folha na textura (UV do mesh "paper")
reg = im.crop((X0, Y0, X1, Y1))

# Apaga o texto antigo mantendo a sombra do papel: "dilata" o claro e borra
# pega o tom mais claro de cada bloco (o papel) e interpola suave: some com o texto, fica a sombra
_bw, _bh = 20, 28
_peq = reg.filter(ImageFilter.MaxFilter(31)).resize((_bw, _bh), Image.BOX)
limpo = _peq.resize(reg.size, Image.BICUBIC).filter(ImageFilter.GaussianBlur(30))
W, H = limpo.size

camada = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(camada)
TINTA = (38, 38, 42, 235)
CINZA = (95, 95, 100, 225)
VERM = (170, 30, 30, 235)

def f(caminho, tam):
    return ImageFont.truetype(caminho, tam)

def centro(y, txt, fonte, cor=TINTA):
    w = d.textlength(txt, font=fonte)
    d.text(((W - w) / 2, y), txt, font=fonte, fill=cor)

M = 150                      # margem lateral
y = 150
centro(y, 'MIGUEL ANGELO', f(TIT, 96)); y += 120
centro(y, 'PRODUÇÃO AUDIOVISUAL', f(MONO_B, 52), CINZA); y += 110
d.line([(M, y), (W - M, y)], fill=TINTA, width=6); y += 50
centro(y, 'ORDEM DO DIA  Nº 26', f(TIT, 84)); y += 140

fm = f(MONO, 50)
fb = f(MONO_B, 50)
for rot, val in [('PROJETO', 'Portfólio Showcase 2026'), ('LOCAL', 'Ilha de edição (aqui!)'), ('CHAMADA', '07:00 — com café')]:
    d.text((M, y), rot + ':', font=fb, fill=TINTA)
    d.text((M + 330, y), val, font=fm, fill=TINTA)
    y += 78
y += 50
d.line([(M, y), (W - M, y)], fill=CINZA, width=3); y += 50

d.text((M, y), 'CHECKLIST DE EDIÇÃO', font=f(TIT, 60), fill=TINTA); y += 110
itens = [
    (True, 'Decupagem do material bruto'),
    (True, 'Montagem e ritmo'),
    (True, 'Correção de cor'),
    (True, 'Mixagem de áudio'),
    (True, 'Legendas sincronizadas'),
    (False, 'Render final (travou em 99%)'),
]
for feito, txt in itens:
    d.rectangle([M, y + 6, M + 44, y + 50], outline=TINTA, width=5)
    if feito:
        d.line([(M + 8, y + 28), (M + 20, y + 42), (M + 52, y - 4)], fill=VERM, width=8)
    d.text((M + 80, y), txt, font=fm, fill=TINTA)
    y += 84
y += 40
d.line([(M, y), (W - M, y)], fill=CINZA, width=3); y += 50

d.text((M, y), 'EQUIPE', font=f(TIT, 60), fill=TINTA); y += 110
for func, nome in [('Direção e edição', 'Miguel Angelo'), ('Cor e finalização', 'Miguel Angelo'), ('Café', 'Sempre')]:
    pontos = '.' * max(3, 34 - len(func) - len(nome))
    d.text((M, y), f'{func} {pontos} {nome}', font=fm, fill=TINTA)
    y += 76
y += 40
d.line([(M, y), (W - M, y)], fill=CINZA, width=3); y += 50

fp = f(MONO, 40)
for linha in ['Cena 3D original: Henry Heffernan', 'Computador: Mickael Boitte', 'Ambiente: Sean Nicolas']:
    d.text((M, y), linha, font=fp, fill=CINZA)
    y += 58
y += 40
# carimbo
cx, cy = W - M - 230, y + 80
d.ellipse([cx - 250, cy - 105, cx + 250, cy + 105], outline=(170, 30, 30, 170), width=10)
centro_c = f(TIT, 62)
w = d.textlength('APROVADO', font=centro_c)
d.text((cx - w / 2, cy - 42), 'APROVADO', font=centro_c, fill=(170, 30, 30, 170))
d.text((M, y + 40), 'Assinatura:', font=fm, fill=TINTA)
d.line([(M, y + 140), (M + 600, y + 140)], fill=TINTA, width=3)
d.text((M + 40, y + 70), 'M. Angelo', font=f(G + 'crimsontext/CrimsonText-Italic.ttf', 80), fill=(30, 40, 120, 220))
assert y + 200 < H, y

# a tinta acompanha a sombra do papel (multiplica pelo papel limpo)
papel = limpo.convert('RGBA')
papel.alpha_composite(camada)
final = Image.blend(papel.convert('RGB'), limpo, 0.0)
# um leve desfoque, porque a textura original também é suave
final = final.filter(ImageFilter.GaussianBlur(0.8))
im.paste(final, (X0, Y0))
im.save(SAIDA, quality=92)
im.crop((X0, Y0, X1, Y1)).resize((W // 3, H // 3)).save('/tmp/shots/folha_preview.png')
print('ok', W, H, y)
