$(function() {

    toggleNav();

    fixedNav();
    workBelt();
    workLoad();
    clientStuff();
    modal();
    smoothScroll(300);
});

function toggleNav(){
  $('.menu').click(function(){
    $('.nav').toggleClass('active');
    $('.menu').toggleClass('active');
  });
}
function smoothScroll(duration) {
    $('a[href^="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function fixedNav() {
  //Calculate the height of <nav>
  //Use outerHeight() instead of height() if have padding
  var navHeight = $('#hero').outerHeight();

  $(window).scroll(function () {

      //if scrolled down more than the header’s height
  if ($(window).scrollTop() > navHeight * 0.75) {

      // if yes, add “fixed” class to the <nav>
      // add padding top to the #content
         // (value is same as the height of the nav)
      $('.nav').addClass('fixed');
  } else {

      // when scroll up or less than aboveHeight,
         // remove the “fixed” class, and the padding-top
      $('.nav').removeClass('fixed');

  }
 });
}

function modal() {
  var blur = document.querySelectorAll('[data-blur]'),
      close = document.querySelector('#close'),
      contactModal = document.querySelectorAll('.openmodal'),
      modal = document.querySelector('#modal'),
      i, j;
  for (i = 0; i < contactModal.length; i++){
    contactModal[i].addEventListener("click", function(e){

        if (e.target.tagName == 'a' || e.target.tagName == 'A') {
          event.preventDefault();
          console.log(e.target.tagName);
        }
        for (j = 0; j < blur.length; j++){
          if (blur[j].id === "featured-services-wrap"){
            blur[j].classList.add("zindex");
          } else {
            blur[j].classList.add('blur');
          }
        }

      modal.classList.add('active');
    });
  }
  close.addEventListener("click", function(){
    event.preventDefault();
    for (j = 0; j < blur.length; j++){
      if (blur[j].id === "featured-services-wrap"){
        blur[j].classList.remove("zindex");
      } else {
        blur[j].classList.remove('blur');
      }
    }
    modal.classList.remove('active');
  });
}

function workBelt() {
    $('.image').click(function() {
        $('.work-belt').css('left', '-100%');
        $('.work-container').show(800);
    });
    $('.work-return').click(function() {
        $('.work-belt').css('left', '0%');
        $('.work-container').hide(800);
    });
}

function workLoad() {
    $.ajaxSetup({
        cache: true
    });
    $('.image').click(function() {
        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newfolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '../work/' + newfolder + '.html';
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });
}

function clientStuff() {
    $('.client-logo, .clients-mobile-nav span').click(function() {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
        $siblings.removeClass('active-client');
        $this.addClass('active-client');
    });
    $('.client-control-next, .client-control-prev').click(function() {
        var $this = $(this),
            curActiveClient = $('.clients-wrap').find('.active-client'),
            position = $('.clients-wrap').children().index(curActiveClient),
            clientNum = $('.client-unit').length;
        if ($this.hasClass('client-control-next')) {
            if (position < clientNum - 1) {
                $('.active-client').removeClass('active-client').next().addClass('active-client');
            } else {
                $('.client-unit').removeClass('active-client').first().addClass('active-client');
                $('.client-logo').removeClass('active-client').first().addClass('active-client');
            }
        } else {
            if (position === 0) {
                $('.client-unit').removeClass('active-client').last().addClass('active-client');
                $('.client-logo').removeClass('active-client').last().addClass('active-client');
            } else {
                $('.active-client').removeClass('active-client').prev().addClass('active-client');
            }
        }
    });
}
