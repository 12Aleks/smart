$(document).ready(function () {
  const arr = document.querySelectorAll('img.animate');
  const $nav = $('#navigation');
  const $navCol = $('.navbar-collapse');
  const $navIcon = $('#nav-icon');
  const $myDiv = $('.img-room');
  const $button = $("#back-to-top");
  const $window = $(window);
  let maxHeight = 0;
  const $carouselItem =  $('#carouselExampleIndicators .carousel-item');

  function phonesBlockHeight(){
    const heightImg = arr[0].height;
    const container = document.querySelector('div.phone_wrapper');
    container.style.height = heightImg + 180 + 'px';
  }

  phonesBlockHeight();

  function handleScroll() {
    const scrollTop = $window.scrollTop();

    if (scrollTop > 150) {
      $button.css("display", "flex");
    } else {
      $button.css("display", "none");
    }

    if (scrollTop > 400) {
      $nav.addClass('fold-active');
      $navIcon.removeClass('active');
      $navCol.collapse('hide');
    } else if (scrollTop <= 300) {
      $nav.removeClass('fold-active');
      $navIcon.removeClass('active');
      $navCol.collapse('hide');
    }
  }

  // Function to animate scrolling to top
  $button.on('click', function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
  });

  $window.on('load scroll', handleScroll);


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        arr.forEach((img) => img.classList.add('right'));
      }
    });
  }, { root: null, rootMargin: '25px', threshold: 0 });

  arr.forEach((img) => {
    observer.observe(img);
  });

  $window.resize(function () {
    const $myChild = $myDiv.find('> *:first-child');
    $myDiv.animate({
      scrollLeft: ($myChild.width() - $myDiv.width()) / 2,
    }, { duration: 0 });

    phonesBlockHeight();
  });

  $('.navbar-toggler').click(function () {
    $navIcon.toggleClass('active');
  });

  $('#collapsibleNavbar a').click(function (event) {
    event.preventDefault();
    const id = $(this).attr('href');
    const top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('#collapsibleNavbar a.nav-link').on('click', function () {
    $('a.nav-link').removeClass('active');
    $(this).addClass('active');
  });

  $('img.svg').each(function () {
    const $img = $(this);
    const imgID = $img.attr('id');
    const imgClass = $img.attr('class');
    const imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
      let $svg = $(data).find('svg');
      if (imgID !== undefined) {
        $svg = $svg.attr('id', imgID);
      }
      if (imgClass !== undefined) {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);
    });
  });

  $carouselItem.each(function() {
    let itemHeight = $(this).height();
    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });

  $carouselItem.css('min-height', maxHeight + 'px');
});
