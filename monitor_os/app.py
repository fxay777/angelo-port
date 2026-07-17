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
    }


@app.route("/")
def desktop():
    return render_template("desktop.html")


@app.route("/showcase")
def home():
    return render_template(
        "home.html",
        home=content.HOME,
        email=content.EMAIL,
        pagina_ativa="home",
    )


@app.route("/showcase/sobre")
def sobre():
    return render_template(
        "sobre.html",
        sobre=content.SOBRE,
        hobbies=content.HOBBIES,
        email=content.EMAIL,
        pagina_ativa="sobre",
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
        email=content.EMAIL,
        pagina_ativa="contato",
    )


@app.route("/creditos")
def creditos():
    return render_template("creditos.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
