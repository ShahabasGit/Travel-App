

$(document).ready(function(){
    // ====== Get Place ====== \\

    $.ajax({
        type: 'get',
        url: 'https://traveller.talrop.works/api/v1/places/',

        success: function(Response) {
            var place_data = ""
            
            Response.data.forEach(place => {
                place_data += `<div class="item">
                                <a href="#">
                                    <div class="top">
                                        <img src="${place.image}"/>
                                    </div>
                                    <div class="middle"><h3>${place.location}</h3></div>
                                    <div class="bottom">
                                        <img src="images/place.svg"/>
                                        <span>${place.name}</span>
                                    </div>
                                </a>
                            </div>`
            });

            $('.items').html(place_data)
        },

        error: function(error){},
    });

    // ====== Get Categories ====== \\

    $.ajax({
        type: 'get',
        url: 'https://traveller.talrop.works/api/v1/places/categories/',

        success: function(Response) {
            var Categories_data = ""
            
            Response.data.forEach(catgs => {
                Categories_data += `<li>
                                        <a href="#">
                                            <img
                                                class="rest"
                                                src="${catgs.image}"
                                            />
                                            <span>${catgs.name}</span>
                                        </a>
                                    </li>`
            });

            $('ul').html(Categories_data);
        },

        error: function(error){},
    });


});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function() {
        console.log('Service Worker Registered: ');
    })
}