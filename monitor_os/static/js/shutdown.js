// ============================================================================
// Sequência de "desligar" — easter egg engraçado: o computador nunca
// desliga de verdade, sempre reinicia com uma piada diferente.
// O número de tentativas é salvo no localStorage do navegador.
// ============================================================================

function getNumShutdowns() {
    return parseInt(localStorage.getItem('numShutdowns') || '0', 10);
}

function setNumShutdowns(n) {
    localStorage.setItem('numShutdowns', String(n));
}

const _F = '200';
const _X = '500';
const _S = '1000';
const _M = '2000';
const _L = '5000';

function delayTag(ms) {
    return `>${ms}<`;
}

function getHoraAtual() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function montarMensagens() {
    const NORMAL = `Iniciando sequência de pré-desligamento... ${delayTag(_F)}
Conectando à MAOS01/13:2000.${delayTag(_F)}.${delayTag(_F)}.${delayTag(_F)}
|
Conexão estabelecida com MAOS01/13:2000, tentando transferir dados.
|
${delayTag(_F)}
|Analisando dados... Concluído.| ${delayTag(_F)}
|Empacotando transferência... Concluído.| ${delayTag(_F)}
|Iniciando transferência...| ${delayTag(_F)}
|[${getHoraAtual()} INÍCIO]| .${delayTag(_F)}.....${delayTag(_X)}.|............|.${delayTag(_S)}.|......|.${delayTag(_S)}...........${delayTag(_M)} |[Transferência falhou.]|


|(MAOS01/13:200:60099) [DEP_ANALYTICS_SERVER_ON_AFTER_SETUP_MIDDLEWARE] Formato inválido: opção 'onAnalyticsConversion' recebeu parâmetros inválidos. Entre em contato com um administrador do servidor.|
${delayTag(_F)}
|(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]|
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
(MAOS01/13:200:60099) [SOCKET_FAILED_TO_RESPOND] Conexão recusada: Reconectando... [${getHoraAtual()}]
ERRO FATAL: (MAOS01/13:200:60099) O servidor ficou sem resposta e a transferência falhou. Não foi possível desligar o computador.
|
Abortando sequência de desligamento e reiniciando.




Reiniciando${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}.
`;

    const SHUTDOWN_3 = `
Droga${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}. ${delayTag(_M)} Você realmente quer desligar esse computador, hein?${delayTag(_L)}
Bom, odeio te contar isso,${delayTag(_S)} mas é impossível desligar...${delayTag(_S)} Ele sempre vai reiniciar.
${delayTag(_L)}
|Até mais!|
${delayTag(_M)}


Reiniciando${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}.
`;

    const SHUTDOWN_4 = `
Você não leu a última mensagem?${delayTag(_S)} Esse computador vai S${delayTag(_F)}E${delayTag(_F)}M${delayTag(_F)}P${delayTag(_F)}R${delayTag(_F)}E reiniciar, a sequência de desligamento é só de enfeite. Não faz nada de verdade.
${delayTag(_M)}
Eu literalmente passei meses nesse site pra te dar outras coisas pra fazer.
Você pode jogar Doom, Wolfenstein, Digger, Scrabble... mas tudo que você quer é desligar o computador.
${delayTag(_L)}
|Até mais, de novo!|
${delayTag(_M)}

Reiniciando${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}.
`;

    const SHUTDOWN_5 = `
Sério${delayTag(_X)}?${delayTag(_X)}?${delayTag(_X)}?
${delayTag(_M)}
O que eu fiz pra merecer isso? ${delayTag(_M)}O que você quer de mim????
${delayTag(_L)}

Reiniciando${delayTag(_F)}.${delayTag(_F)}.${delayTag(_F)}.
`;

    const SHUTDOWN_6 = `
${delayTag(_M)}>${delayTag(_M)}:${delayTag(_M)}(${delayTag(_M)}


Reiniciando${delayTag(_F)}.${delayTag(_F)}.${delayTag(_F)}.
`;

    const SHUTDOWN_7 = `
7ª tentativa de desligar... número da sorte! ${delayTag(_M)}

Pra comemorar esse marco GIGANTE, deixa eu tentar te entreter! ${delayTag(_M)}Contando um por um até o meu número favorito de todos os tempos:
${delayTag(_L)}
7${delayTag(_M)},212${delayTag(_M)},313
${delayTag(_M)} Se segura! ${delayTag(_S)} | [Tempo restante: aproximadamente 4.000 horas (0,5 números/segundo)]|

1${delayTag(_M)},2${delayTag(_M)},3${delayTag(_M)},4${delayTag(_M)},5${delayTag(_M)},6${delayTag(_M)},7${delayTag(_M)},8${delayTag(_M)},9${delayTag(_M)},10${delayTag(_M)},11${delayTag(_M)},12${delayTag(_M)},13${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}.

Ok, já cansei...
${delayTag(_M)}


Reiniciando${delayTag(_F)}.${delayTag(_F)}.${delayTag(_F)}.
`;

    const SHUTDOWN_8 = `
Sua persistência é admirável,${delayTag(_S)} de verdade. ${delayTag(_M)}E mesmo eu não querendo que você desligue meu computador muito legal e épico, ${delayTag(_M)} acho que tô pronto pra ceder. ${delayTag(_M)}

${delayTag(_L)}
|PEGADINHA!|


Reiniciando${delayTag(_F)}.${delayTag(_F)}.${delayTag(_F)}.
`;

    const SHUTDOWN_10 = `
Tá bom, tá bom${delayTag(_M)}. A mensagem ficou clara. Você quer desligar o computador. ${delayTag(_M)}

Você venceu${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)}.${delayTag(_S)} com todas as letras ${delayTag(_M)}

Sinceramente eu não consigo mais escrever essas mensagens...${delayTag(_M)} e se o mundo que você quer viver é um mundo sem mim (ou meu computador épico e muito legal), ${delayTag(_M)}que assim seja.

${delayTag(_L)}
Eu não vou te esquecer...
${delayTag(_L)}


Desligando${delayTag(_M)}${delayTag(_M)}.${delayTag(_M)}.
`;

    return [
        NORMAL,
        NORMAL,
        NORMAL,
        SHUTDOWN_3,
        SHUTDOWN_4,
        SHUTDOWN_5,
        SHUTDOWN_6,
        SHUTDOWN_7,
        SHUTDOWN_8,
        '',
        SHUTDOWN_10,
    ];
}

function tocarSequenciaDeDesligamento() {
    const numShutdowns = Math.min(getNumShutdowns(), 10);
    const mensagens = montarMensagens();
    const texto = mensagens[numShutdowns];

    // Cria o overlay de tela cheia
    const overlay = document.createElement('div');
    overlay.id = 'shutdown-overlay';
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: #1d2e2f; color: #fff;
        font-family: monospace; white-space: pre-line;
        padding: 64px; box-sizing: border-box; overflow: auto;
        display: flex; align-items: center; justify-content: center;
    `;
    const textEl = document.createElement('p');
    textEl.style.cssText = 'white-space: pre-line; align-self: flex-start;';
    overlay.appendChild(textEl);
    document.body.appendChild(overlay);

    if (numShutdowns === 9) {
        // Décima tentativa é "silenciosa" (loading infinito e volta)
        setTimeout(() => {
            overlay.remove();
            setNumShutdowns(numShutdowns + 1);
        }, 6000);
        return;
    }

    // "Digita" o texto aos poucos, respeitando as tags de delay >NNN<
    let i = 0;
    let curText = '';

    function typeNext() {
        if (i >= texto.length) {
            const finalNum = numShutdowns + 1;
            setNumShutdowns(finalNum);
            setTimeout(() => {
                if (finalNum === 11) {
                    // Depois da 11ª (índice 10), mostra a imagem de vitória
                    overlay.innerHTML = '';
                    overlay.style.display = 'flex';
                    overlay.style.alignItems = 'center';
                    overlay.style.justifyContent = 'center';
                    const img = document.createElement('img');
                    img.src = '/static/images/neverGiveUp.jpg';
                    img.style.maxWidth = '90%';
                    img.style.maxHeight = '90%';
                    overlay.appendChild(img);
                    setTimeout(() => overlay.remove(), 6000);
                } else {
                    overlay.remove();
                }
            }, 1500);
            return;
        }

        if (texto[i] === '|') {
            let dump = '';
            let j = i + 1;
            while (j < texto.length && texto[j] !== '|') {
                dump += texto[j];
                j++;
            }
            i = j + 1;
            curText += dump;
            textEl.innerText = curText;
            typeNext();
            return;
        }

        if (texto[i] === '>') {
            let delayStr = '';
            let j = i + 1;
            while (j < texto.length && texto[j] !== '<') {
                delayStr += texto[j];
                j++;
            }
            i = j + 1;
            const extraDelay = parseInt(delayStr, 10) || 0;
            setTimeout(typeNext, 20 + extraDelay);
            return;
        }

        curText += texto[i];
        textEl.innerText = curText;
        i++;
        setTimeout(typeNext, 20);
    }

    typeNext();
}
