$(document).ready(function () {
    const $mediaCarousel = $("#mediaCarousel");


    $mediaCarousel.carousel({interval: false});
    let videos = document.querySelectorAll("video.video-fluid");
    videos.forEach(function (e) {
        e.addEventListener('ended', myHandler, false);

    });

    $('*[data-target="#mediaCarousel"]').click(function () {
        videos.forEach(function (e) {
            setTimeout(() => {
                e.currentTime = 0;
            }, 100);
        });
        console.log('Click')
    });

    function myHandler() {
        setTimeout(() => {
            this.currentTime = 0;
        }, 1000);

        $mediaCarousel.carousel('next');
    }

});
