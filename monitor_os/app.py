"""
App Flask - Portfolio "OS" do Miguel Angelo

Como rodar:
    pip install flask
    python app.py

Depois abre http://localhost:3000 no navegador.

Pra editar textos, fotos, e-mail, etc: mexe só no arquivo content.py
Não precisa de npm, node, build, nada disso. Só reiniciar o Flask
(Ctrl+C e roda "python app.py" de novo) depois de salvar o content.py.
"""
from flask import Flask, render_template
import content

app = Flask(__name__)


@app.context_processor
def inject_globals():
    """Deixa NOME, CARGO, MENU e COPYRIGHT disponíveis em todos os templates."""
    return {
        "nome": content.NOME,
        "cargo": content.CARGO,
        "menu": content.MENU,
        "copyright": content.COPYRIGHT,
        "titulo_janela": content.HOME["titulo_janela"],
        "email": content.EMAIL,
        "curriculo": content.CURRICULO,
    }


def lista_videos():
    """Junta todos os vídeos de PROJETOS numa lista só (usada no Reprodutor de Mídia)."""
    videos = []
    for cat in content.PROJETOS:
        for v in cat.get("videos", []):
            videos.append({**v, "categoria": cat["nome"]})
    return videos


@app.route("/")
def desktop():
    return render_template("desktop.html", videos=lista_videos())


@app.route("/android")
def android():
    dados = {
        "nome": content.NOME,
        "cargo": content.CARGO,
        "email": content.EMAIL,
        "curriculo": "/static/files/" + content.CURRICULO,
        "sobre": {
            "intro": content.HOME["paragrafo_1"],
            "paragrafos": content.SOBRE["paragrafos"],
            "hobbies": [content.HOBBIES["paragrafo_1"], content.HOBBIES["paragrafo_2"]],
            "fotos": [
                {"src": "/static/images/" + content.SOBRE["foto"], "legenda": content.SOBRE["legenda_foto"]},
                {"src": "/static/images/" + content.HOBBIES["foto"], "legenda": content.HOBBIES["legenda_foto"]},
            ],
        },
        "experiencia": {
            "area": content.EXPERIENCIA["area"],
            "resumo": content.EXPERIENCIA["resumo"],
            "trabalhos": content.EXPERIENCIA["trabalhos"],
            "habilidades": [{"nome": n, "desc": d} for n, d in content.EXPERIENCIA["habilidades"]],
        },
        "videos": lista_videos(),
    }
    return render_template("android.html", dados=dados)


@app.route("/showcase")
@app.route("/showcase/sobre")
def sobre():
    return render_template(
        "sobre.html",
        home=content.HOME,
        sobre=content.SOBRE,
        hobbies=content.HOBBIES,
        pagina_ativa="sobre",
    )


@app.route("/showcase/experiencia")
def experiencia():
    return render_template(
        "experiencia.html",
        experiencia=content.EXPERIENCIA,
        pagina_ativa="experiencia",
    )


@app.route("/showcase/projetos")
def projetos():
    return render_template(
        "projetos.html",
        projetos=content.PROJETOS,
        pagina_ativa="projetos",
    )


@app.route("/showcase/contato")
def contato():
    return render_template(
        "contato.html",
        contato=content.CONTATO,
        pagina_ativa="contato",
    )


@app.route("/creditos")
def creditos():
    return render_template("creditos.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
