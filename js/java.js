const arr = document.querySelectorAll('img.animate')
let $handBox = $('.hand_box'),
  $nav = $('#navigation'),
  $navCol = $('.navbar-collapse'),
  $navIcon = $('#nav-icon'),
  $myDiv = $('.img-room')

$(window).resize(function () {
  let $myChild = $myDiv.find('> *:first-child')
  $myDiv.animate( { scrollLeft: ($myChild.width() - $myDiv.width()) / 2,},
    { duration: 0,},)

  //resize and height of the block with animated images on small screens
  let heightImg = arr[0].height;
  let container = document.querySelector('div.col-md-12.col-lg-5.positon-relative');  
  container.style.height = heightImg + 180 + 'px';
})

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('#nav-icon').toggleClass('active')
  })
  $('#collapsibleNavbar a').click(function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1000)
  })
  $('#collapsibleNavbar a.nav-link').on('click', function () {
    $('a.nav-link').removeClass('active')
    $(this).addClass('active')
  })

  $myDiv.scroll(function () {
    $handBox.hide(100)
  })

  function scroll() {
    if ($(this).scrollTop() > 400) {
      $nav.addClass('fold-active')
      $navIcon.removeClass('active')
      $navCol.collapse('hide')
    } else if ($(this).scrollTop() <= 300) {
      $nav.removeClass('fold-active')
      $navIcon.removeClass('active')
      $navCol.collapse('hide')
    }
  }

  window.addEventListener('load', scroll)
  window.addEventListener('scroll', scroll)

  $(window).on('load resize scroll', function (e) {
    let $windowTop = $(window).scrollTop()
    $('#aplikacja').each(function () {
      let $elementTop = $(this).offset().top
      let $leftPosition = $windowTop - $elementTop
      let $maxScroll = -900,
        $minScroll = 150
      if ($leftPosition >= $maxScroll)
        $(this).find('.appImgFirst').one().addClass('appFirst')
      if ($leftPosition >= $minScroll)
        $(this).find('.appImgSecond').one().addClass('appSecond')
    })
  })

  $('img.svg').each(function () {
    let $img = $(this)
    let $imgID = $img.attr('id')
    let $imgClass = $img.attr('class')
    let $imgURL = $img.attr('src')
    $.get($imgURL, function (data) {
      let $svg = $(data).find('svg')
      if (typeof $imgID !== 'undefined') {
        $svg = $svg.attr('id', $imgID)
      }
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', $imgClass + ' replaced-svg')
      }
      $svg = $svg.removeAttr('xmlns:a')
      $img.replaceWith($svg)
    })
  })

  //animation of phone images

  const options = {
    root: null,
    rootMargin: '25px',
    threshold: 0,
  }

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting && arr.forEach((img) =>  img.classList.add('right'))
    })
  }, options)

  arr.forEach((i) => {
    observer.observe(i)
  })

  //height of the block with animated images on small screens

  let heightImg = arr[0].height
  let container = document.querySelector(
    'div.col-md-12.col-lg-5.positon-relative',
  )
  console.log(window.innerWidth)
  
  container.style.height = heightImg + 180 + 'px';
})
