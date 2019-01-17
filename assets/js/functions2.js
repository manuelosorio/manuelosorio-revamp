$(function() {
    toggleNav();
    smoothScroll(300);
    fixedNav();
    workBelt();
    workLoad();
    clientStuff();
    modal();
});

function toggleNav(){
  $('.menu').click(function(){
    $('.nav').toggleClass('active');
    $('.menu').toggleClass('active');
  });
}
function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function(event) {
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
  var button =document.querySelector('#openmodal');
  var contactNav =document.querySelector('#contact-nav');
  var close = document.querySelector('#close');
  var modal =document.querySelector('#modal');
  // var blur = document.querySelector('[blur]');
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('#about');
  var about = document.querySelector('#hero');
  var services = document.querySelector('#services');
  var featServices = document.querySelector('#featured-services-wrap');
  var footer = document.querySelector('footer');
  
  contactNav.addEventListener("click", openModal);
  button.addEventListener("click", openModal);

  close.addEventListener("click", closeModal);
  function openModal() {
    featServices.classList.add("zindex");
    if (featServices.classList.contains("zindex")) {
      modal.classList.add("active");
    }
    if (modal.classList.contains("active")){
      nav.classList.add('blur');
      hero.classList.add('blur');
      about.classList.add('blur');
      title.classList.add('blur');
      services.classList.add('blur');
      footer.classList.add('blur');
    }
  }
  function closeModal() {
    featServices.classList.remove("zindex");
    modal.classList.remove("active");
    nav.classList.remove('blur');
    hero.classList.remove('blur');
    about.classList.remove('blur');
    title.classList.remove('blur');
    services.classList.remove('blur');
    footer.classList.remove('blur');
  }
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
