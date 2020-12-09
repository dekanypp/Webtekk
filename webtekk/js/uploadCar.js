$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        $.each(data, function(key, value) {
            $("select").append("<option value="+value.name+">"+value.name+"</option>");
        })
    })

    $("form").on('submit', function(e) {
        e.preventDefault();
        var car = {
            name: $("form").find("input[name='name']").val(),
            consumption: $("form").find("input[name='consumption']").val()+"l/100km",
            color: $("form").find("input[name='color']").val(),
            manufacturer: $("form").find("select[name='manufacturer']").val(),
            avaiable: $("form").find("input[name='available']").val(),
            year: $("form").find("input[name='year']").val(),
            horsepower: $("form").find("input[name='horsepower']").val(),
            
        };
        console.log(car);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars',
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(car)
        });
    })
})