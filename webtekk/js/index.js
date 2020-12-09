$(document).ready(function() {
    $("#content").load("home.html");

    $.each($("a"), function(index, value) {
        $(value).click(function(e) {
            e.preventDefault();
            $('#content').load(value.href);
        })
    })
})