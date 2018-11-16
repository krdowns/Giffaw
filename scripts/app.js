$(document).ready( function(){
    
    var key = $("input[name=api_key]").val();
    var input = $("input").val();
    
    $("input[type=submit]").on('click', function(e) {
        e.preventDefault();
        $('.gif-gallery').empty();
        $('input[type=q]').val('');
        $.ajax({
            method: "GET",
            url: 'https://api.giphy.com/v1/gifs/search?api_key=' + key + '&q=' + input,
            success: function(response){
                for(var i = 0; i < response.data.length; i++){
                    $('.gif-gallery').append("<img src=" + response.data[i].images.fixed_height.url + ">");
                }
            }
        });
    });
});
