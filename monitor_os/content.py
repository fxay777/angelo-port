# ==============================================================================
#  CONTEÚDO DO SITE
#  Edite os textos abaixo à vontade. Esse é o ÚNICO arquivo que você precisa
#  mexer no dia a dia — todas as páginas (Sobre, Experiência, Projetos e
#  Contato) puxam o conteúdo daqui.
# ==============================================================================

NOME = "Miguel Angelo"
CARGO = "Produtor Audiovisual"
ANO_SHOWCASE = "2026"

EMAIL = "miguelacbergmann@gmail.com"

# Arquivo do currículo (fica em static/files/)
CURRICULO = "curriculo-miguel-angelo.pdf"

# --- Página Sobre (é a primeira página que abre) ---
HOME = {
    "titulo_janela": f"{NOME} - Showcase {ANO_SHOWCASE}",
    "saudacao": "Olá",
    "subtitulo": f"Eu sou o {NOME}",
    "paragrafo_1": (
        "Sou Produtor Audiovisual e trabalho principalmente com edição de "
        "vídeo. Me formei em Produção Audiovisual pela Universidade Estácio "
        "de Sá em julho de 2026."
    ),
    "paragrafo_2_intro": (
        "Obrigado por visitar meu portfólio! Espero que você goste de "
        "explorá-lo tanto quanto eu gostei de construí-lo. Se tiver dúvidas "
        "ou quiser bater um papo, fale comigo pelo"
    ),
    "link_formulario_texto": "formulário de contato",
    "paragrafo_2_fim": "ou mande um e-mail para",
}

SOBRE = {
    "titulo": "Sobre Mim",
    # Cada item da lista vira um parágrafo separado
    "paragrafos": [
        (
            "Desde pequeno sempre tive curiosidade sobre como os filmes "
            "funcionam e como as histórias são contadas. Essa paixão me levou "
            "naturalmente ao cinema e à produção audiovisual."
        ),
        (
            "Durante a graduação na Estácio, desenvolvi habilidades técnicas e "
            "criativas em softwares de edição como Adobe Premiere, DaVinci "
            "Resolve e Vegas Pro, além de ferramentas de design como Photoshop "
            "e Canva."
        ),
        (
            "Um marco importante aconteceu ainda na infância: fascinado pela "
            "série britânica Doctor Who, decidi aprender inglês rápido para "
            "acompanhar a série e conhecer os atores. Esse esforço resultou no "
            "certificado de proficiência em inglês de Cambridge aos 12 anos, "
            "em 2014 — conquista que chegou a ser destacada pela imprensa na "
            "época."
        ),
        (
            "Hoje uso esse domínio do idioma no mercado profissional, fazendo "
            "edição de vídeo como freelancer para clientes internacionais, com "
            "foco em entregas de qualidade."
        ),
    ],
    "foto": "foto-infancia.jpg",
    "alt_foto": "Miguel Angelo quando criança",
    "legenda_foto": "Figura 1: Eu, quando criança",
}

# --- Hobbies (aparece no final da página Sobre) ---
HOBBIES = {
    "titulo": "Hobbies e Interesses",
    "paragrafo_1": (
        "Além do trabalho com edição, tenho vários hobbies que gosto de "
        "praticar no tempo livre. Meus projetos pessoais mais concretos hoje "
        "são a produção de filmes independentes e projetos de Marketing "
        "Digital — você encontra alguns deles na aba \"Projetos\". Fora isso, "
        "curto musculação, cozinhar e, claro, jogar videogame."
    ),
    "paragrafo_2": (
        "Durante a graduação participei ativamente da vida acadêmica na "
        "Estácio. Conheci muitas pessoas incríveis nessa jornada e valorizo "
        "muito a comunidade que construí ao longo da faculdade."
    ),
    "foto": "foto-atual.jpg",
    "alt_foto": f"Miguel Angelo em {ANO_SHOWCASE}",
    "legenda_foto": f"Figura 2: Eu, {ANO_SHOWCASE}",
    "paragrafo_3": (
        "Obrigado por ler um pouco sobre mim! Aproveite para explorar o resto "
        "do portfólio — e se encontrar algum \"easter egg\" escondido por "
        "aqui, me avisa!"
    ),
    "paragrafo_4_intro": (
        "Se tiver alguma dúvida ou comentário, vou adorar ouvir você. É só "
        "usar a"
    ),
    "link_contato_texto": "página de contato",
    "paragrafo_4_fim": "ou mandar um e-mail direto para",
}

# --- Menu lateral ---
MENU = [
    {"label": "SOBRE", "rota": "sobre"},
    {"label": "EXPERIÊNCIA", "rota": "experiencia"},
    {"label": "PROJETOS", "rota": "projetos"},
    {"label": "CONTATO", "rota": "contato"},
]

# --- Experiência ---
EXPERIENCIA = {
    "titulo": "Experiência",
    "area": "Produção Audiovisual, Edição e Marketing Digital",
    "resumo": (
        "Trabalho com criação de narrativas visuais, edição de vídeo, direção "
        "de conteúdo e gestão de redes sociais para marcas do varejo e "
        "comunidades online. Uno a formação em Produção Audiovisual pela "
        "Universidade Estácio de Sá com técnicas de ritmo, storytelling e "
        "engajamento de público."
    ),
    # Adicione um bloco novo por trabalho/cliente (copie o formato abaixo)
    "trabalhos": [
        {
            "nome": "Armarinho Casa Machado",
            "funcao": "Social media e produção de vídeo",
            "periodo": "",  # ex: "2024 — atual"
            "descricao": (
                "Gestão das redes sociais, produção de conteúdo institucional "
                "e identidade visual para o varejo, com vídeos curtos para "
                "Instagram e TikTok."
            ),
            "links": [
                {"texto": "Instagram", "url": "https://www.instagram.com/armarinho_casamachado"},
                {"texto": "TikTok", "url": "https://www.tiktok.com/@armarinho_casamachado"},
            ],
        },
        {
            "nome": "Freelancer",
            "funcao": "Editor de vídeo para clientes internacionais",
            "periodo": "",
            "descricao": (
                "Edição de vídeos para clientes de fora do Brasil, com "
                "comunicação e entregas em inglês."
            ),
            "links": [],
        },
    ],
    "habilidades": [
        ("Edição e pós-produção",
         "Adobe Premiere, DaVinci Resolve, Vegas Pro, CapCut e Filmora — "
         "cortes dinâmicos e tratamento de cor."),
        ("Roteiro e storyboard",
         "Estruturação de narrativas pensadas para prender o espectador "
         "desde os primeiros segundos."),
        ("Acessibilidade",
         "Práticas inclusivas (Libras, legendagem e audiodescrição) alinhadas "
         "aos projetos do Instituto Benjamin Constant (IBC)."),
        ("Gestão de comunidades",
         "Conteúdo para engajamento em comunidades de games e Discord e "
         "crescimento de presença digital de marcas."),
        ("Design",
         "Photoshop e Canva para thumbnails, posts e identidade visual."),
        ("Idiomas",
         "Inglês fluente — certificado de proficiência de Cambridge."),
    ],
}

# --- Projetos ---
# Cada categoria vira um botão na página de Projetos. Para adicionar um vídeo,
# copie um bloco {"yt": ..., "titulo": ..., "texto": ...} e troque o "yt" pelo
# código do vídeo no YouTube (a parte depois de "youtu.be/" ou "v=").
PROJETOS = [
    {
        "id": "audiovisual",
        "icone": "🎬",
        "nome": "Audiovisual",
        "legenda": "FILMES, DOCUMENTÁRIOS E EDIÇÃO",
        "videos": [
            {
                "yt": "m7TOXgqO92s",
                "titulo": "O Peso da Amarelinha",
                "texto": (
                    "Documentário feito em grupo em 2026 que explora o "
                    "período da Copa do Mundo e por que ela não tem mais o "
                    "mesmo brilho de antes. Fui responsável pela introdução "
                    "do documentário."
                ),
            },
            {
                "yt": "iF5JU_N1ldc",
                "titulo": "Showreel de edição",
                "texto": (
                    "Uma amostra dos meus trabalhos de edição, produção e "
                    "direção visual — com foco em transições fluidas, "
                    "tratamento de cor e uma narrativa dinâmica que prende "
                    "a atenção."
                ),
            },
        ],
    },
    {
        "id": "games",
        "icone": "🎮",
        "nome": "Games e Comunidades",
        "legenda": "VÍDEOS PARA COMUNIDADES ONLINE",
        "videos": [
            {
                "yt": "tFOAZsP0evQ",
                "titulo": "A Volta do BattleBits",
                "texto": "Vídeo sobre a volta do servidor BattleBits.",
            },
        ],
    },
    {
        "id": "social",
        "icone": "📱",
        "nome": "Redes Sociais",
        "legenda": "INSTAGRAM E TIKTOK",
        "links": [
            {
                "titulo": "Armarinho Casa Machado — Instagram",
                "texto": "Conteúdo em vídeo e posts produzidos para o Instagram da loja.",
                "url": "https://www.instagram.com/armarinho_casamachado",
            },
            {
                "titulo": "Armarinho Casa Machado — TikTok",
                "texto": "Vídeos curtos produzidos para o TikTok da loja.",
                "url": "https://www.tiktok.com/@armarinho_casamachado",
            },
        ],
    },
]

# --- Contato ---
CONTATO = {
    "titulo": "Contato",
    "texto": (
        "Quer conversar sobre um projeto, uma vaga ou só dar um oi? Preencha "
        "o formulário abaixo ou me chame direto no e-mail:"
    ),
}

# --- Rodapé ---
COPYRIGHT = f"© {ANO_SHOWCASE} {NOME}"
