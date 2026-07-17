"""
INICIAR.PY — roda o site inteiro (cena 3D + monitor) com um único comando.

Como usar:
    pip install -r requirements.txt
    python iniciar.py

Isso abre o navegador sozinho em http://localhost:8080/?dev

Não precisa de Node.js, npm, nem nada além de Python instalado.
A cena 3D já vem pré-compilada (só HTML/CSS/JS estáticos) — o Python
aqui só está servindo esses arquivos, como um "garçom" entregando
o que já está pronto.
"""
import http.server
import multiprocessing
import os
import socketserver
import subprocess
import sys
import time
import webbrowser

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CENA3D_DIR = os.path.join(BASE_DIR, "cena3d")
MONITOR_DIR = os.path.join(BASE_DIR, "monitor_os")

PORTA_CENA3D = 8080
PORTA_MONITOR = 3000


def rodar_cena3d():
    """Serve os arquivos já compilados da cena 3D (não precisa de Node.js)."""
    os.chdir(CENA3D_DIR)
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.ThreadingTCPServer(("0.0.0.0", PORTA_CENA3D), handler) as httpd:
        httpd.serve_forever()


def rodar_monitor():
    """Roda o app Flask que monta a telinha do monitor (Home/Sobre/Projetos/Contato)."""
    subprocess.run([sys.executable, "app.py"], cwd=MONITOR_DIR)


if __name__ == "__main__":
    print("Iniciando a cena 3D na porta", PORTA_CENA3D, "...")
    p1 = multiprocessing.Process(target=rodar_cena3d)
    p1.start()

    print("Iniciando o monitor (Flask) na porta", PORTA_MONITOR, "...")
    p2 = multiprocessing.Process(target=rodar_monitor)
    p2.start()

    time.sleep(2)
    url = f"http://localhost:{PORTA_CENA3D}/?dev"
    print("\nTudo pronto! Abrindo o navegador em:", url)
    print("(se não abrir sozinho, copia e cola essa URL no navegador)")
    print("\nPra fechar tudo, aperta Ctrl+C aqui nesse terminal.\n")
    webbrowser.open(url)

    try:
        p1.join()
        p2.join()
    except KeyboardInterrupt:
        print("\nFechando os servidores...")
        p1.terminate()
        p2.terminate()
