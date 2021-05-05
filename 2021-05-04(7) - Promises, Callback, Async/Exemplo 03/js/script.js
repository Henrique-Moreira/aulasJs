// Refatorando o Exemplo 01
$(document).ready(function () {
    $("#btnView").click(function() {
        showMsg()
        .then((value) => console.log(value))
        .catch((err) => {});
    });
});

//quando eu coloco async na frente do function, o retorno dele é um obj do tipo promise.
// function showMsg() {
//     return Promise.resolve("Hello World!")
// }
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
async function showMsg() {
    return "Hello World!";
}

