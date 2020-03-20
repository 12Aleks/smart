$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
    });

    $("#video-carousel-example").on('slide.bs.carousel', function () {
           var $default = $(this).find(".carousel-item"),
               $active = $(this).find('.active > video');

        if($default.hasClass('active') ){
            $active[0].play();
        }else if(!$default.hasClass('active')){
            $default.find('video')[0].pause();
        }
    });



    $('.navbar-toggler').click(function () {
        $('#nav-icon').toggleClass('active')
    });
    $("#collapsibleNavbar a").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#collapsibleNavbar a.nav-link").on("click", function () {
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
    });

    var myDiv = $(".img-room");
    $(window).resize(function () {
        var myChild = myDiv.find("> *:first-child");
        myDiv.animate({
            scrollLeft: (myChild.width() - myDiv.width()) / 2
        }, {
            duration: 0
        });
    });
    $(window).resize();

    $(window).on("load resize scroll", function (e) {
        let $windowTop = $(window).scrollTop();
        $("#aplikacja").each(function () {
            let $elementTop = $(this).offset().top;
            let $leftPosition = $windowTop - $elementTop;
            let $maxScroll = -900,
                $minScroll = 150;
            if ($leftPosition >= $maxScroll) $(this).find(".appImgFirst").one().addClass('appFirst');
            if ($leftPosition >= $minScroll) $(this).find(".appImgSecond").one().addClass('appSecond');
        });
    });

//function for adding SVG images in my index.html file
    $('img.svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http:validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        });
    });
});
