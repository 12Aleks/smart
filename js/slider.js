$(document).ready(function () {
    //slider and dots

    const $mediaCarousel = $("#mediaCarousel");
    $mediaCarousel.carousel({interval: false});
    let slide = $mediaCarousel.find('.carousel-item');
    let videos = document.querySelectorAll("video.video-fluid");

    videos.forEach((video, index) => {
        if (index !== 0) {
            video.pause();
        }
        video.addEventListener('ended', () => {
            $mediaCarousel.carousel('next');
        });
    });


    $mediaCarousel.on('slide.bs.carousel', function (event) {
        let from = slide[event.from].querySelectorAll('video')[0];
        let to = slide[event.to].querySelectorAll('video')[0];
        let isPlaying = to.currentTime > 0 && to.readyState > 2;

        to.play();

        if (isPlaying) {
            from.pause();

        }
    });


    $('*[data-target="#mediaCarousel"]').click(function () {
        $mediaCarousel.on('slid.bs.carousel', function (event) {
            let from = slide[event.from].querySelectorAll('video')[0];
            let to = slide[event.to].querySelectorAll('video')[0];
            let isPlaying = to.currentTime > 0 && to.readyState > 2;

            to.play();

            if (isPlaying) {
                from.pause();
            }
        });

        videos.forEach( video => {
            video.currentTime = 0
        })

    });


});
