const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100;  // largura da toupeira
const $imgHeight = 80;  // altura da toupeira
const $imgsTheme = {"defaut": "buraco.gif", "active":"toupeira.gif", "dead":"morreu.gif"}
var $inicialTime = 10;
var $timeGame = $inicialTime; // Tempo de jogabilidade independente da fase
var $idChronoGame; // Ira controlar o setInterval do cronometro
var $idChronoStartGame; // Ira controlar o setInterval do jogo

$(document).ready(function () {
    fillBoard(); // Melhorar
    $("#chrono").text($inicialTime);
    $("#btnPlay").click(function () {
        btnCtrl();
        $idChronoStartGame = setInterval(startGame, 1180);
        $idChronoGame = setInterval(startChronoGame, 1000);
    });
    $("#btnPause").click(function(){});
    $("#btnStop").click(function(){});
    $("#btnExit").click(function(){});
});

function startChronoGame() {
    let $secondsFormat = (--$timeGame).toLocaleString("pt-br", {minimumIntegerDigits: 2});
    ($timeGame >= 0)?$("#chrono").text($secondsFormat):endGame();
}

function endGame() {
    clearInterval($idChronoGame);
    clearInterval($idChronoStartGame);
    alertWifi(`Fim de Jogo. Sua pontuação foi = ${$("#score").text()}`, false, 0, `img/${$imgsTheme.dead}`, "50");
    fillBoard();
    $("#score").text("0");
    $timeGame = $inicialTime;
    $("#score").text($timeGame);
}

function btnCtrl() {
    $("#btnPause").prop('disabled', false);
    $("#btnStop").prop('disabled', false);
    $("#btnExit").prop('disabled', true);
}

// cria a moldura do tabuleiro do jogo conforme o nível de dificuldade
function fillBoard() {
    $level = getLevel();
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({ "width": $boardWidth, "height": $boardHeight });
    placeHolesBoard($level);
}

// insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>");
        $img = $("<img>").attr({ "src":`img/${$imgsTheme.defaut}`, "id": `mole_${$i + 1}` });
        $($img).click(function(){updateScore(this)});
        $($div).append($img);
        $("#board").append($div);
    }
}

function startGame() {
   // fillBoard();
    $level = getLevel();
    $randNumber = getRandNumber(1, Math.pow($level, 2));
    $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.active}`);
    setTimeout(() => { //implementado
        $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.defaut}`)
    }, 1000);
}

// Gera um numero aleatorio entre "min" e "max"
function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

//retorna o nro correspondente ao nivel de dificuldade selecionado pelo usuário
function getLevel() {
    return $levels[$("#level").val()];
}

// atualizar a pontuação do jogo ao clicar sobre uma toupeira
function updateScore($img) {
    if($($img).attr("src").search($imgsTheme.active) != -1) {
        $("#score").text(parseInt($("#score").text()) + 1);
        $($img).attr("src", `img/${$imgsTheme.dead}`);
    }
}