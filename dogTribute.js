/**
 * Created by jesica on 7/3/2017.
 */

$(document).ready( function () {

    // CHANGE ACTIVE NAVBAR WHILE SCROLLING
    $("body").scrollspy({target: "#navbarId"});

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $("#gallery").unitegallery({

        gallery_theme: "tiles"

    });



});