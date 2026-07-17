// ============================================================================
// Tetris — implementação simples em JS puro, sem dependências externas.
// ============================================================================

const TETRIS_COLS = 10;
const TETRIS_ROWS = 20;
const TETRIS_CELL = 24;

const TETROMINOS = {
    I: { shape: [[1, 1, 1, 1]], color: '#00CFCF' },
    J: { shape: [[1, 0, 0], [1, 1, 1]], color: '#3060E0' },
    L: { shape: [[0, 0, 1], [1, 1, 1]], color: '#E0A030' },
    O: { shape: [[1, 1], [1, 1]], color: '#E0D030' },
    S: { shape: [[0, 1, 1], [1, 1, 0]], color: '#40C040' },
    T: { shape: [[0, 1, 0], [1, 1, 1]], color: '#A030C0' },
    Z: { shape: [[1, 1, 0], [0, 1, 1]], color: '#E03030' },
};

function initTetris(canvas, scoreEl, nextCanvas, onGameOver) {
    const ctx = canvas.getContext('2d');
    const nextCtx = nextCanvas ? nextCanvas.getContext('2d') : null;

    canvas.width = TETRIS_COLS * TETRIS_CELL;
    canvas.height = TETRIS_ROWS * TETRIS_CELL;

    let board = Array.from({ length: TETRIS_ROWS }, () => Array(TETRIS_COLS).fill(null));
    let score = 0;
    let gameOver = false;
    let dropCounter = 0;
    let dropInterval = 700;
    let lastTime = 0;
    let animationId = null;

    function randomPiece() {
        const keys = Object.keys(TETROMINOS);
        const key = keys[Math.floor(Math.random() * keys.length)];
        const def = TETROMINOS[key];
        return {
            shape: def.shape.map((row) => row.slice()),
            color: def.color,
            row: 0,
            col: Math.floor(TETRIS_COLS / 2) - Math.ceil(def.shape[0].length / 2),
        };
    }

    let current = randomPiece();
    let next = randomPiece();

    function collides(piece, offsetRow, offsetCol, shape) {
        const s = shape || piece.shape;
        for (let r = 0; r < s.length; r++) {
            for (let c = 0; c < s[r].length; c++) {
                if (!s[r][c]) continue;
                const boardRow = piece.row + r + offsetRow;
                const boardCol = piece.col + c + offsetCol;
                if (boardCol < 0 || boardCol >= TETRIS_COLS || boardRow >= TETRIS_ROWS) {
                    return true;
                }
                if (boardRow >= 0 && board[boardRow][boardCol]) {
                    return true;
                }
            }
        }
        return false;
    }

    function merge() {
        current.shape.forEach((row, r) => {
            row.forEach((val, c) => {
                if (val) {
                    const br = current.row + r;
                    const bc = current.col + c;
                    if (br >= 0) board[br][bc] = current.color;
                }
            });
        });
    }

    function clearLines() {
        let cleared = 0;
        board = board.filter((row) => {
            const full = row.every((cell) => cell);
            if (full) cleared++;
            return !full;
        });
        while (board.length < TETRIS_ROWS) {
            board.unshift(Array(TETRIS_COLS).fill(null));
        }
        if (cleared > 0) {
            score += [0, 100, 300, 500, 800][cleared] || cleared * 200;
            if (scoreEl) scoreEl.innerText = 'Score: ' + score;
        }
    }

    function rotate(shape) {
        const rows = shape.length;
        const cols = shape[0].length;
        const rotated = Array.from({ length: cols }, () => Array(rows).fill(0));
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                rotated[c][rows - 1 - r] = shape[r][c];
            }
        }
        return rotated;
    }

    function spawnNext() {
        current = next;
        current.row = 0;
        current.col = Math.floor(TETRIS_COLS / 2) - Math.ceil(current.shape[0].length / 2);
        next = randomPiece();
        if (collides(current, 0, 0)) {
            gameOver = true;
            if (onGameOver) onGameOver(score);
        }
    }

    function drop() {
        if (!collides(current, 1, 0)) {
            current.row++;
        } else {
            merge();
            clearLines();
            spawnNext();
        }
        dropCounter = 0;
    }

    function hardDrop() {
        while (!collides(current, 1, 0)) {
            current.row++;
        }
        drop();
    }

    function move(dir) {
        if (!collides(current, 0, dir)) {
            current.col += dir;
        }
    }

    function tryRotate() {
        const rotated = rotate(current.shape);
        if (!collides(current, 0, 0, rotated)) {
            current.shape = rotated;
        }
    }

    function drawCell(context, r, c, color) {
        context.fillStyle = color;
        context.fillRect(c * TETRIS_CELL, r * TETRIS_CELL, TETRIS_CELL - 1, TETRIS_CELL - 1);
        context.strokeStyle = 'rgba(255,255,255,0.15)';
        context.strokeRect(c * TETRIS_CELL, r * TETRIS_CELL, TETRIS_CELL - 1, TETRIS_CELL - 1);
    }

    function draw() {
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        board.forEach((row, r) => {
            row.forEach((color, c) => {
                if (color) drawCell(ctx, r, c, color);
            });
        });

        current.shape.forEach((row, r) => {
            row.forEach((val, c) => {
                if (val && current.row + r >= 0) {
                    drawCell(ctx, current.row + r, current.col + c, current.color);
                }
            });
        });

        if (nextCtx) {
            nextCtx.fillStyle = '#111';
            nextCtx.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
            next.shape.forEach((row, r) => {
                row.forEach((val, c) => {
                    if (val) {
                        nextCtx.fillStyle = next.color;
                        nextCtx.fillRect(c * 20 + 10, r * 20 + 10, 18, 18);
                    }
                });
            });
        }

        if (gameOver) {
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
            ctx.fillStyle = '#fff';
            ctx.font = '20px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 + 7);
        }
    }

    function loop(time) {
        if (gameOver) {
            draw();
            return;
        }
        const delta = time - lastTime;
        lastTime = time;
        dropCounter += delta;
        if (dropCounter > dropInterval) {
            drop();
        }
        draw();
        animationId = requestAnimationFrame(loop);
    }

    function handleKey(e) {
        if (gameOver) return;
        switch (e.key) {
            case 'ArrowLeft':
                move(-1);
                break;
            case 'ArrowRight':
                move(1);
                break;
            case 'ArrowDown':
                drop();
                break;
            case 'ArrowUp':
                tryRotate();
                break;
            case ' ':
                hardDrop();
                e.preventDefault();
                break;
        }
        draw();
    }

    document.addEventListener('keydown', handleKey);
    animationId = requestAnimationFrame(loop);

    // Retorna uma função de limpeza, pra quando a janela for fechada
    return function cleanup() {
        document.removeEventListener('keydown', handleKey);
        if (animationId) cancelAnimationFrame(animationId);
    };
}
