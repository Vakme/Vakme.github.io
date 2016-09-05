
$(window).load(function() {
        $(".loader").animate({
            'opacity' : "1"
        }, 1000, function () {
            $("#white").delay(500).animate({
                'marginRight' : "+=50vw" //moves left
            }, 1000, function () {
                $("*:not(.menu)").fadeIn(1000);
            }).mouseenter(function() {
                $( "#white .middle-text" ).fadeOut( 500 );
                $( "#white  .menu" ).fadeIn( 500 );
            }).mouseleave(function() {
                $( "#white .middle-text" ).fadeIn( 500 );
                $( "#white .menu" ).fadeOut( 500 );
            });
            $("#black").delay(500).animate({
                'marginLeft' : "+=50vw" //moves left
            }, 1000, function () {
                $("*:not(.menu)").fadeIn(1000);
            }).mouseenter(function() {
                $( "#black .middle-text" ).fadeOut( 500 );
                $( "#black .menu" ).fadeIn( 500 );
            }).mouseleave(function() {
                $( "#black .middle-text" ).fadeIn( 500 );
                $( "#black .menu" ).fadeOut( 500 );
            });
        });
});

