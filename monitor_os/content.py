# ==============================================================================
#  CONTEÚDO DO SITE
#  Edite os textos abaixo à vontade. Depois de salvar, só atualizar a página
#  no navegador (não precisa rodar build nem instalar nada de novo).
# ==============================================================================

NOME = "Miguel Angelo"
CARGO = "Produtor Audiovisual"
ANO_SHOWCASE = "2026"

EMAIL = "miguelacbergmann@gmail.com"

# --- Página inicial (Home) ---
HOME = {
    "titulo_janela": f"{NOME} - Showcase {ANO_SHOWCASE}",
    "saudacao": "Olá",
    "subtitulo": f"Eu sou o {NOME}",
    "paragrafo_1": (
        "Eu sou um Produtor Audiovisual que trabalho principalmente com edição "
        "de vídeo, sou formado em Produção Audiovisual pela Universidade Estácio "
        "de Sá na qual em Julho de 2026 eu conclui minha graduação."
    ),
    "paragrafo_2_intro": (
        "Obrigado por visitar meu portfólio. Espero que você goste de explorar "
        "o mesmo tanto quanto eu gostei de construí-lo. Se tiver dúvidas ou "
        "quiser bater um papo, sinta-se à vontade para entrar em contato usando"
    ),
    "link_formulario_texto": "esse formulário",
    "paragrafo_2_fim": "ou mandando um email via",
}

# --- Página Sobre Mim ---
SOBRE = {
    "titulo": "Sobre Mim",
    "paragrafo": (
        "Desde jovem, sempre tive uma forte curiosidade sobre como os filmes "
        "funcionam e como histórias são contadas. Essa paixão naturalmente me "
        "levou ao cinema e à produção audiovisual. Durante minha trajetória "
        "acadêmica na Estácio, foquei em desenvolver habilidades técnicas e "
        "criativas em softwares de edição como Adobe Premiere, DaVinci Resolve "
        "e Vegas Pro, além de ferramentas de design Photoshop, Canva etc. Um "
        "marco importante na minha trajetória ocorreu ainda na infância. "
        "Fascinado pela série britânica Doctor Who, decidi aprender inglês "
        "rapidamente para acompanhar a obra e conhecer seus atores. Esse "
        "esforço resultou na conquista do certificado de proficiência em "
        "inglês da Cambridge aos 12 anos, em 2014, reconhecimento que "
        "inclusive foi destacado pela imprensa na época. Hoje, aplico esse "
        "domínio do idioma no mercado profissional, realizando serviços de "
        "edição de vídeo como freelancer para clientes internacionais, com "
        "foco em entregas de qualidade e monetização em dólar."
    ),
    "foto": "foto-infancia.jpg",
    "legenda_foto": "Figure 1: Uma foto real de mim quando criança",
}

# --- Página Hobbies ---
HOBBIES = {
    "titulo": "Meus Hobbies e Interesses",
    "paragrafo_1": (
        "Além do trabalho com edição de vídeo, tenho diversos hobbies que "
        "gosto de praticar no meu tempo livre. Meus projetos mais tangíveis "
        "atualmente são a Produção de filmes independentes e a criação de "
        "projetos em Marketing Digital — você pode ler mais sobre cada um "
        "deles nas respectivas páginas da aba \"Projetos\". Outros interesses "
        "que ocupam meu dia a dia são a musculação, culinária e, claro, "
        "jogar videogame."
    ),
    "paragrafo_2": (
        "Durante minha graduação, participei ativamente da vida acadêmica na "
        "Estácio. Conheci muitas pessoas incríveis durante essa jornada e "
        "valorizo muito o senso de comunidade que construí ao longo dos anos "
        "de faculdade."
    ),
    "foto": "foto-atual.jpg",
    "legenda_foto": f"Figure 2: Eu, {ANO_SHOWCASE}",
    "paragrafo_3": (
        "Obrigado por ler um pouco sobre mim! Espero que você aproveite para "
        "explorar o restante do meu portfólio. Se encontrar algum \"easter "
        "egg\" escondido por aqui, não deixe de me avisar! Boa sorte e "
        "divirta-se!"
    ),
    "paragrafo_4_intro": (
        "Se tiver alguma dúvida ou comentário, adoraria ouvir você. Você "
        "pode entrar em contato através da minha"
    ),
    "link_contato_texto": "página de contato",
    "paragrafo_4_fim": "ou me enviar um e-mail diretamente para",
}

# --- Menu lateral ---
MENU = [
    {"label": "HOME", "rota": "home"},
    {"label": "SOBRE", "rota": "sobre"},
    {"label": "PROJETOS", "rota": "projetos"},
    {"label": "CONTATO", "rota": "contato"},
]

# --- Projetos (edite/adicione quantos quiser) ---
PROJETOS = [
    {
        "titulo": "Instagram — Armarinho Casa Machado",
        "descricao": "Conteúdo de vídeo e edição produzido para o Instagram do Armarinho Casa Machado.",
        "link": "https://www.instagram.com/armarinho_casamachado",
        "link_texto": "Ver no Instagram",
        "tipo": "link",
    },
    {
        "titulo": "TikTok — Armarinho Casa Machado",
        "descricao": "Conteúdo de vídeo curto produzido para o TikTok do Armarinho Casa Machado.",
        "link": "https://www.tiktok.com/@armarinho_casamachado",
        "link_texto": "Ver no TikTok",
        "tipo": "link",
    },
    {
        "titulo": "Vídeo — Prévia do Projeto",
        "descricao": "Prévia de um dos meus trabalhos de edição de vídeo.",
        "link": "https://youtu.be/iF5JU_N1ldc?is=P82uMrfHBotpwZNN",
        "link_texto": "Assistir no YouTube",
        "tipo": "video",
        "youtube_id": "iF5JU_N1ldc",
    },
]

# --- Contato ---
CONTATO = {
    "titulo": "Contato",
    "texto": "Preencha o formulário abaixo ou me chame direto no e-mail:",
}

# --- Rodapé ---
COPYRIGHT = f"© Copyright {ANO_SHOWCASE} {NOME}"
