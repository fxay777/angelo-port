"""Cartaz de cinema original para o cavalete da sala 3D (1024x1536)."""
import math
import random
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SAIDA = sys.argv[1]
G = '/usr/share/fonts/truetype/google-fonts/ofl/'
ANTON = G + 'anton/Anton-Regular.ttf'
MONT = G + 'montserrat/Montserrat[wght].ttf'
W, H = 1024, 1536
random.seed(26)

def fonte(caminho, tam, peso=None):
    f = ImageFont.truetype(caminho, tam)
    if peso:
        try:
            f.set_variation_by_axes([peso])
        except Exception:
            pass
    return f

# ---------- fundo: noite azul-petróleo com feixe de projetor ----------
img = Image.new('RGB', (W, H), (8, 14, 24))
grad = Image.new('RGB', (1, H))
for y in range(H):
    t = y / H
    grad.putpixel((0, y), (int(10 + 20 * t), int(22 + 18 * (1 - t)), int(38 + 10 * (1 - t))))
img = grad.resize((W, H))

luz = Image.new('L', (W, H), 0)
dl = ImageDraw.Draw(luz)
fonte_luz = (W * 0.5, 240)
dl.polygon([fonte_luz, (-200, H * 0.92), (W + 200, H * 0.92)], fill=120)
luz = luz.filter(ImageFilter.GaussianBlur(70))
amarelo = Image.new('RGB', (W, H), (255, 214, 120))
img = Image.composite(amarelo, img, luz.point(lambda v: int(v * 0.55)))

# poeira no feixe
d = ImageDraw.Draw(img, 'RGBA')
for _ in range(260):
    x = random.uniform(0, W)
    y = random.uniform(260, H * 0.85)
    if abs(x - W / 2) < (y - 240) * 0.75:
        r = random.choice([1, 1, 2])
        d.ellipse([x - r, y - r, x + r, y + r], fill=(255, 240, 200, random.randint(60, 160)))

# lente do projetor (ponto de luz)
for r, a in [(90, 30), (55, 70), (30, 150), (14, 255)]:
    d.ellipse([fonte_luz[0] - r, fonte_luz[1] - r, fonte_luz[0] + r, fonte_luz[1] + r], fill=(255, 236, 190, a))

# ---------- película de filme atravessando o cartaz ----------
def pelicula(base, cy, angulo, cor_quadro):
    faixa = Image.new('RGBA', (W * 2, 170), (0, 0, 0, 0))
    fd = ImageDraw.Draw(faixa)
    fd.rectangle([0, 0, W * 2, 170], fill=(18, 18, 20, 245))
    for x in range(10, W * 2, 44):
        fd.rounded_rectangle([x, 12, x + 24, 34], 4, fill=(230, 225, 210, 255))
        fd.rounded_rectangle([x, 136, x + 24, 158], 4, fill=(230, 225, 210, 255))
    for i, x in enumerate(range(20, W * 2, 190)):
        c = cor_quadro[i % len(cor_quadro)]
        fd.rectangle([x, 46, x + 170, 124], fill=c)
        fd.rectangle([x, 46, x + 170, 124], outline=(0, 0, 0, 255), width=3)
    faixa = faixa.rotate(angulo, resample=Image.BICUBIC, expand=True)
    base.alpha_composite(faixa, (int(W / 2 - faixa.width / 2), int(cy - faixa.height / 2)))

rgba = img.convert('RGBA')
pelicula(rgba, 1105, -6, [(214, 160, 60, 255), (60, 110, 160, 255), (180, 70, 60, 255), (90, 150, 110, 255), (230, 210, 150, 255)])
img = rgba.convert('RGB')
d = ImageDraw.Draw(img, 'RGBA')

# ---------- textos ----------
def centro(y, txt, f, cor, sombra=True, esp=0):
    if esp:
        larg = sum(d.textlength(c, font=f) for c in txt) + esp * (len(txt) - 1)
        x = (W - larg) / 2
        for c in txt:
            if sombra:
                d.text((x + 4, y + 4), c, font=f, fill=(0, 0, 0, 160))
            d.text((x, y), c, font=f, fill=cor)
            x += d.textlength(c, font=f) + esp
        return
    w = d.textlength(txt, font=f)
    if sombra:
        d.text(((W - w) / 2 + 5, y + 5), txt, font=f, fill=(0, 0, 0, 170))
    d.text(((W - w) / 2, y), txt, font=f, fill=cor)

centro(70, 'MIGUEL ANGELO APRESENTA', fonte(MONT, 34, 700), (240, 230, 210, 255), esp=6)
ft = fonte(ANTON, 270)
def altura(txt, f):
    b = d.textbbox((0, 0), txt, font=f)
    return b[1], b[3]
y = 330
for palavra in ['SHOW', 'REEL']:
    topo, base = altura(palavra, ft)
    centro(y - topo, palavra, ft, (255, 214, 90, 255))
    y += (base - topo) + 22
f26 = fonte(ANTON, 80)
topo, base = altura('2026', f26)
centro(y + 6 - topo, '2026', f26, (255, 255, 255, 255), esp=30)
assert y + (base - topo) < 1040, y

centro(1262, 'TODA HISTÓRIA MERECE UM BOM CORTE.', fonte(MONT, 38, 800), (255, 255, 255, 255), esp=1)

# bloco de créditos (billing block)
fb = fonte(ANTON, 30)
fbb = fonte(MONT, 22, 600)
linhas = [
    'DIREÇÃO E EDIÇÃO  MIGUEL ANGELO',
    'COR E FINALIZAÇÃO  MIGUEL ANGELO   MONTAGEM  MIGUEL ANGELO',
    'PRODUÇÃO  MIGUEL ANGELO AUDIOVISUAL   UMA PRODUÇÃO DO PORTFÓLIO 2026',
]
y = 1330
for i, l in enumerate(linhas):
    f = fb if i == 0 else fbb
    w = d.textlength(l, font=f)
    if w > W - 80:
        f = fonte(MONT, int(22 * (W - 80) / w), 600)
    centro(y, l, f, (225, 220, 205, 255), sombra=False)
    y += 46 if i == 0 else 34

centro(1440, 'EM CARTAZ NESTE COMPUTADOR', fonte(ANTON, 44), (255, 214, 90, 255), esp=4)

# grão e vinheta
grao = Image.effect_noise((W, H), 28).convert('RGB')
img = Image.blend(img, grao, 0.05)
vin = Image.new('L', (W, H), 0)
ImageDraw.Draw(vin).ellipse([-W * 0.25, -H * 0.15, W * 1.25, H * 1.15], fill=255)
vin = vin.filter(ImageFilter.GaussianBlur(120))
img = Image.composite(img, Image.new('RGB', (W, H), (0, 0, 0)), vin)

# borda branca de cartaz
fin = Image.new('RGB', (W, H), (238, 234, 224))
fin.paste(img.resize((W - 48, H - 48)), (24, 24))
fin.save(SAIDA, quality=90)
fin.resize((W // 3, H // 3)).save('/tmp/shots/cartaz_preview.png')
print('ok')
