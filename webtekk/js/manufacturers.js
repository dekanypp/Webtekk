$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        $.each(data, function(key, value) {
            $(".data").append(createCard(value));
        })
    })
})

function createCard(manufacturer){
    return `<tr>
                <td>`+manufacturer.name+`</td>
                <td>`+manufacturer.country+`</td>
                <td>`+manufacturer.founded+`</td>
            </tr>`;
}
