let $handBox = $('.hand_box'),
    $nav = $('#navigation'),
    $navCol = $('.navbar-collapse'),
    $navIcon = $('#nav-icon'),
    $myDiv = $(".img-room");
$(window).resize(function () {
    let $myChild = $myDiv.find("> *:first-child");
    $myDiv.animate({
        scrollLeft: ($myChild.width() - $myDiv.width()) / 2
    }, {
        duration: 0
    });
});


$(document).ready(function () {
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

    $myDiv.scroll(function () {
        $handBox.hide(100);
    });

    // let iScrollPos = 0;
    // $(window).scroll(function () {
    //     let iCurScrollPos = $(this).scrollTop();
    //     if (iCurScrollPos > iScrollPos) {
    //         $nav.addClass('fold-active');
    //         $navIcon.removeClass('active');
    //         $navCol.collapse('hide');
    //     } else {
    //         $nav.removeClass('fold-active');
    //         $navIcon.removeClass('active');
    //         $navCol.collapse('hide');
    //     }
    //     iScrollPos = iCurScrollPos;
    // });

    function scroll() {
        if ($(this).scrollTop() > 400) {
            $nav.addClass('fold-active');
            $navIcon.removeClass('active');
            $navCol.collapse('hide');
        } else if ($(this).scrollTop() <= 300) {
            $nav.removeClass('fold-active');
            $navIcon.removeClass('active');
            $navCol.collapse('hide');
        }
    }

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

    $('img.svg').each(function () {
        let $img = $(this);
        let $imgID = $img.attr('id');
        let $imgClass = $img.attr('class');
        let $imgURL = $img.attr('src');
        $.get($imgURL, function (data) {
            let $svg = $(data).find('svg');
            if (typeof $imgID !== 'undefined') {
                $svg = $svg.attr('id', $imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', $imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        });
    });
});
