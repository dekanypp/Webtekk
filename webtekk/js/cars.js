$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        $.each(data, function(key, value) {
            $(".data").append(createCard(value));
        })
    })
})

function createCard(car){
        return `<tr>
                    <td>`+car.manufacturer+`</td>
                    <td>`+car.name+`</td>
                    <td>`+car.color+`</td>
                    <td>`+car.year+`</td>
                    <td>`+car.horsepower+`</td>
                    <td>`+car.consumption+`</td>
                    <td>`+car.avaiable+`</td>
                </tr>`;
}
