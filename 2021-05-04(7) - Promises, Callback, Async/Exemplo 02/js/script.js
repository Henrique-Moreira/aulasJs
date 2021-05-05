// $(document).ready(function () {
//     $("#btnView").click(function () {
//         add();
//     });
// });

// function add() {
//   //  var a = b = 10;
//   var a = "Henrique";
//   var b = 10;

//     if (!isNaN(a) && !isNaN(b))
//         resolve(a+b);
//     else reject("Erro");
// }

// function resolve(nro) {
//     console.log(nro);
// }

// function reject(msg) {
//     console.log(msg);
// }


$(document).ready(function () {
    $("#btnView").click(function () {
        var $obj = new Promise((resolve, reject) => {
            var a = b = 10;
            (!isNaN(a) && !isNaN(b))?resolve(a + b):reject("Deu erro!");
        });
        $obj
            .then((value) => console.log(`Soma = ${value}`))
            .catch((msgDeErro) => console.log(msgDeErro));
    });
});

function add() {
    //  var a = b = 10;
    var a = "Henrique";
    var b = 10;

    if (!isNaN(a) && !isNaN(b))
        resolve(a + b);
    else reject("Erro");
}

function resolve(nro) {
    console.log(nro);
}

function reject(msg) {
    console.log(msg);
}
