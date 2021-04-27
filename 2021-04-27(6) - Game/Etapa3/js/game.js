const $levels = {"easy": 3, "medium":5, "hard":7};
const $imgWidth = 100;  // largura da toupeira
const $imgHeight = 80;  // altura da toupeira

$(document).ready(function() {
    fillBoard();
});

// cria a moldura do tabuleiro do jogo conforme o nível de dificuldade
function fillBoard() {
    $level = $levels[$("#level").val()];
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({"width": $boardWidth, "height": $boardHeight});
    placeHolesBoard($level);
}

// insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    for($i=0;$i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>"); //.attr("id",`mole_${$i+1}`);
        $img = $("<img>").attr({"src": "img/buraco.gif", "id":`mole_${$i+1}`});
        $($div).append($img);
        $("#board").append($div);
    }
}