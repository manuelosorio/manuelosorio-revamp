$(function() {
    toggleNav();
    smoothScroll(300);
    fixedNav();
    workBelt();
    workLoad();
    clientStuff();
    modal();
    $("header h1").fitText(1, {
        minFontSize: '20px',
        maxFontSize: '72px'
    });
    $(".biglink").fitText(1.5);
    $('textarea').autosize();
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
  var modal =document.querySelector('#modal');
  var button =document.querySelector('#openmodal');
  var close = document.querySelector('#close');
  var nav = document.querySelector(".nav");
  var hero = document.querySelector("#about");
  var about = document.querySelector("#hero");
  var title= document.querySelector("#services-title");
  var services = document.querySelector("#services");
  var featServices = document.querySelector("#featured-services-wrap");
  var footer = document.querySelector("footer");
  button.addEventListener("click", openModal);
  close.addEventListener("click", closeModal);
  function openModal() {
    featServices.classList.add("zindex");
    if (featServices.classList.contains("zindex")) {
      modal.classList.add("active");
    }
    if (modal.classList.contains("active")){
      nav.classList.add("blur");
      hero.classList.add("blur");
      about.classList.add("blur");
      title.classList.add("blur");
      services.classList.add("blur");
      footer.classList.add("blur");
    }
  }
  function closeModal() {
    featServices.classList.remove("zindex");
    modal.classList.remove("active");
    nav.classList.remove("blur");
    hero.classList.remove("blur");
    about.classList.remove("blur");
    title.classList.remove("blur");
    services.classList.remove("blur");
    footer.classList.remove("blur");
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
            newHTML = '/work/' + newfolder + '.html';
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
(function($) {
    $.fn.fitText = function(kompressor, options) {
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);
        return this.each(function() {
            var $this = $(this);
            var resizer = function() {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };
            resizer();
            $(window).on('resize.fittext orientationchange.fittext', resizer);
        });
    };
})(jQuery);
(function($) {
    var
        defaults = {
            className: 'autosizejs',
            id: 'autosizejs',
            append: '\n',
            callback: false,
            resizeDelay: 10,
            placeholder: true
        },
        copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
        typographyStyles = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'letterSpacing', 'textTransform', 'wordSpacing', 'textIndent', 'whiteSpace'],
        mirrored, mirror = $(copy).data('autosize', true)[0];
    mirror.style.lineHeight = '99px';
    if ($(mirror).css('lineHeight') === '99px') {
        typographyStyles.push('lineHeight');
    }
    mirror.style.lineHeight = '';
    $.fn.autosize = function(options) {
        if (!this.length) {
            return this;
        }
        options = $.extend({}, defaults, options || {});
        if (mirror.parentNode !== document.body) {
            $(document.body).append(mirror);
        }
        return this.each(function() {
            var
                ta = this,
                $ta = $(ta),
                maxHeight, minHeight, boxOffset = 0,
                callback = $.isFunction(options.callback),
                originalStyles = {
                    height: ta.style.height,
                    overflow: ta.style.overflow,
                    overflowY: ta.style.overflowY,
                    wordWrap: ta.style.wordWrap,
                    resize: ta.style.resize
                },
                timeout, width = $ta.width(),
                taResize = $ta.css('resize');
            if ($ta.data('autosize')) {
                return;
            }
            $ta.data('autosize', true);
            if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box') {
                boxOffset = $ta.outerHeight() - $ta.height();
            }
            minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());
            $ta.css({
                overflow: 'hidden',
                overflowY: 'hidden',
                wordWrap: 'break-word'
            });
            if (taResize === 'vertical') {
                $ta.css('resize', 'none');
            } else if (taResize === 'both') {
                $ta.css('resize', 'horizontal');
            }

            function setWidth() {
                var width;
                var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : false;
                if (style) {
                    width = ta.getBoundingClientRect().width;
                    if (width === 0 || typeof width !== 'number') {
                        width = parseInt(style.width, 10);
                    }
                    $.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function(i, val) {
                        width -= parseInt(style[val], 10);
                    });
                } else {
                    width = $ta.width();
                }
                mirror.style.width = Math.max(width, 0) + 'px';
            }

            function initMirror() {
                var styles = {};
                mirrored = ta;
                mirror.className = options.className;
                mirror.id = options.id;
                maxHeight = parseInt($ta.css('maxHeight'), 10);
                $.each(typographyStyles, function(i, val) {
                    styles[val] = $ta.css(val);
                });
                $(mirror).css(styles).attr('wrap', $ta.attr('wrap'));
                setWidth();
                if (window.chrome) {
                    var width = ta.style.width;
                    ta.style.width = '0px';
                    var ignore = ta.offsetWidth;
                    ta.style.width = width;
                }
            }

            function adjust() {
                var height, original;
                if (mirrored !== ta) {
                    initMirror();
                } else {
                    setWidth();
                }
                if (!ta.value && options.placeholder) {
                    mirror.value = ($ta.attr("placeholder") || '') + options.append;
                } else {
                    mirror.value = ta.value + options.append;
                }
                mirror.style.overflowY = ta.style.overflowY;
                original = parseInt(ta.style.height, 10);
                mirror.scrollTop = 0;
                mirror.scrollTop = 9e4;
                height = mirror.scrollTop;
                if (maxHeight && height > maxHeight) {
                    ta.style.overflowY = 'scroll';
                    height = maxHeight;
                } else {
                    ta.style.overflowY = 'hidden';
                    if (height < minHeight) {
                        height = minHeight;
                    }
                }
                height += boxOffset;
                if (original !== height) {
                    ta.style.height = height + 'px';
                    if (callback) {
                        options.callback.call(ta, ta);
                    }
                    $ta.trigger('autosize.resized');
                }
            }

            function resize() {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    var newWidth = $ta.width();
                    if (newWidth !== width) {
                        width = newWidth;
                        adjust();
                    }
                }, parseInt(options.resizeDelay, 10));
            }
            if ('onpropertychange' in ta) {
                if ('oninput' in ta) {
                    $ta.on('input.autosize keyup.autosize', adjust);
                } else {
                    $ta.on('propertychange.autosize', function() {
                        if (event.propertyName === 'value') {
                            adjust();
                        }
                    });
                }
            } else {
                $ta.on('input.autosize', adjust);
            }
            if (options.resizeDelay !== false) {
                $(window).on('resize.autosize', resize);
            }
            $ta.on('autosize.resize', adjust);
            $ta.on('autosize.resizeIncludeStyle', function() {
                mirrored = null;
                adjust();
            });
            $ta.on('autosize.destroy', function() {
                mirrored = null;
                clearTimeout(timeout);
                $(window).off('resize', resize);
                $ta.off('autosize').off('.autosize').css(originalStyles).removeData('autosize');
            });
            adjust();
        });
    };
}(jQuery || $));
