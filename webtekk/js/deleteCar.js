$(document).ready(function() {
    getCars();

    $("form").on('submit', function(e) {
        e.preventDefault();
        var id = $("form").find("select[name='name']").val();

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/'+id,
            type: "DELETE",
            success: function() {
                getCars();
            }
        })

    })
})

function getCars(){
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        $.each(data, function(key, value)  {
            $("select").append("<option value="+value._id+">"+value.name+"</option>");
        })
    })
}