$(document).ready(function(){
    
            for(var i=1; i<=151; i++){
                var pokeImg = "<img src='https://pokeapi.co/media/img/" + i + ".png' data-pokenum='" + i + "'>";
                $('#container').append(pokeImg);
            }

            function htmlBuilder (data){
                var htmlStr = "<h1>" + data["name"] + "</h1>"
                htmlStr += "<img src='https://pokeapi.co/media/img/" + data['pkdx_id'] + ".png'>";

                // data["name"]
                htmlStr += "<h2>Types</h2>"
                for(var i=0; i<data.types.length; i++){
                    console.log(data.types[i]);
                   htmlStr += "<li>" + data['types'][i].name$ + "</li>"
                }
                // console.log(htmlStr);
                // data["height"]
                htmlStr += "<h2>Height</h2>"
                htmlStr += "<li>" + data['height'] + "</li>"

                // data["weight"]
                htmlStr += "<h2>Weight</h2>"
                htmlStr += "<li>" + data['weight'] + "</li>"
                
                $('.screen').html(htmlStr);
            }

            $('img').click(function(){
                var pokeNum = $(this).data('pokenum');
                var url = "https://pokeapi.co/api/v1/pokemon/" + pokeNum + "/";
            $.get(url, function(response) {
                console.log(response);
                htmlBuilder(response);
            },"json");
    })
})