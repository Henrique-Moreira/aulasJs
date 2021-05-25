$(document).ready(function () {
    var file = "users.json";

    $("#btn").click(function () {
        var $level = $("#levels").val();
        $("#tbodyValues").empty();
        loadUsers($level);
    });

    function loadUsers(level) {
        fetch(file)
            .then(file => file.json())
            .then(content => {
                var $usersPerDificult = content.users.filter($user => $user.level == level).sort((a, b) => b.score - a.score);
                $usersPerDificult.forEach($user => {
                    $("#tbodyValues").append($('<tr>')
                        .append($('<td>').text($user.userName))
                        .append($('<td>').text($user.score)));
                });
            })
            .catch(err => console.log(err))
    }

});