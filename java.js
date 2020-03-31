let $handBox = $('.hand_box'),
     $nav = $('#navigation'),
      $myDiv = $(".img-room");
$(window).resize(function () {
    let $myChild = $myDiv.find("> *:first-child");
    $myDiv.animate({
        scrollLeft: ($myChild.width() - $myDiv.width()) / 2
    }, {
        duration: 0
    });
});
$(window).resize();

$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
    });

    // $('.video-fluid').find('video').each(function () {
    //     this[0].pause();
    // });
    //
    // $('.active').find('video').get(0).currentTime = 0;
    // $('.active').find('video').each(function () {
    //     this.play();
    // });


    // var videos = document.querySelectorAll('video.video-fluid');
    // for(var i = 0; i < videos.length; i++) {
    //     videos[i].pause();
    //     videos[i].currentTime = 0;
    // }





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


    $myDiv.scroll(function() {
        $handBox.hide(100);
    });
    let iScrollPos = 0;
    $(window).scroll(function () {
        let iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            $nav.addClass('fold-active')
        } else {
            $nav.removeClass('fold-active')
        }
        iScrollPos = iCurScrollPos;
    });
    // function scroll() {
    //     if ($(this).scrollTop() > 400) {
    //         $nav.addClass('fold-active')
    //         // $nav.slideUp(2000);
    //         // $navigation.addClass("scroll-nav");
    //     } else if($(this).scrollTop() > 300) {
    //         $nav.removeClass('fold-active')
    //         // $nav.slideDown(2000);
    //         // $nav.removeClass("f-nav");
    //         // $navigation.removeClass("scroll-nav");
    //     }
    // }

    window.addEventListener("load", scroll);
    window.addEventListener("scroll", scroll);


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
