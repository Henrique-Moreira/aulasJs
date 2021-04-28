$(document).ready(function() {
    $("#btnLogin").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        if($user && $pwd) {
            $.getJSON("json/users.json", function($registros) {
               if ($registros.users.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd).length > 0)
                        window.open("game.html", "_self")
                else alert("Usuário Inválido");
               });
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});