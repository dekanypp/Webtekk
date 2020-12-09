$(document).ready(function() {
    $("form").on('submit', function(e) {
        e.preventDefault();
        var manufacturer = {
            name: $("form").find("input[name='name']").val(),
            country: $("form").find("input[name='country']").val(),
            founded: $("form").find("input[name='founded']").val(),
        };
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(manufacturer),
        });
    })
})