$(document).ready(function () {
    const $mediaCarousel = $("#mediaCarousel");
    const slide = $mediaCarousel.find('.carousel-item');
    const videos = document.querySelectorAll("video.video-fluid");

    $mediaCarousel.carousel({ interval: false });
    const playVideo = (video) => {
        video.play();
    };
    const pauseVideo = (video) => {
        video.pause();
    };
    const resetVideoTime = (video) => {
        video.currentTime = 0;
    };

    videos.forEach((video, index) => {
        if (index !== 0) {
            pauseVideo(video);
        }
        video.addEventListener('ended', () => {
            $mediaCarousel.carousel('next');
        });
    });

    $mediaCarousel.on('slide.bs.carousel', function (event) {
        const from = slide[event.from].querySelector('video');
        const to = slide[event.to].querySelector('video');

        playVideo(to);
        pauseVideo(from);
    });

    $('*[data-target="#mediaCarousel"]').click(function () {
        $mediaCarousel.on('slid.bs.carousel', function (event) {
            const from = slide[event.from].querySelector('video');
            const to = slide[event.to].querySelector('video');

            playVideo(to);
            pauseVideo(from);
        });

        videos.forEach(resetVideoTime);
    });
});