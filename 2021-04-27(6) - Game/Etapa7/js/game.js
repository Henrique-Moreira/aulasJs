const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 100;  // largura da toupeira
const $imgHeight = 80;  // altura da toupeira
const $imgsTheme = {"defaut": "buraco.gif", "active":"toupeira.gif", "dead":"morreu.gif"}

$(document).ready(function () {
    fillBoard(); // Melhorar: trocar apenas a toupeira do tabuleiro pelo 
    $("#btnPlay").click(function () {
        setInterval(startGame, 1180);
    });
});

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
    $(`#mole_${$randNumber}`).attr("src", "img/toupeira.gif");
    setTimeout(() => { //implementado
        $(`#mole_${$randNumber}`).attr("src", "img/buraco.gif")
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