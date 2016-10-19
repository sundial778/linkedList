$(document).ready(function() {



     var windowWidth = $(window).width();
    var desktopMode = false;
    var mobileMode = false;
    
    $(window).resize(function() {
  
   location.reload();
   windowWidth = $(window).width()
});
    
    if (windowWidth > 990) {

        desktopMode = true;
        mobileMode = false;
    } else {
        mobileMode = true;
        desktopMode = false;
    }

    function showText(id)

    {
        if (mobileMode) {

            $(id).find("p").slideToggle()
        } else {
            return mobileMode
        }
    }

    $('#projects').click(function() {

        showText("#projects");
    });


    $('#life').click(function() {

        showText("#life");
    });
    $('#work').click(function() {

        showText("#work");
    });
    $('#play').click(function() {

        showText("#play");
    });

    function fadeIn(id) {
        if (desktopMode) {
            $('#contentChanger.inner').replaceWith($(id))
            $('#contentChanger').css('background-color', 'rgba(0,0,0,.5');
            $('#projects').hide()
            $('#play').hide()
            $('#work').hide()
            $('#life').hide()
            $(id).appendTo($('#contentChanger'));

            $(id).stop(true, true).animate({
                right: '=600',
                opacity: 'show'
            }, 1000);
        } else {
            return desktopMode;
        }
    }
    $('#plink').click(function() {

        fadeIn("#projects");
    });
    $('#playLink').click(function() {

        fadeIn("#play");
    });
    $('#wlink').click(function() {

        fadeIn("#work");
    });
    $('#llink').click(function() {

        fadeIn("#life");
    });
});