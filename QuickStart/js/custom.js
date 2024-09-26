
$(document).ready(function(){
    // navigation 
    $('nav ul li a').click(function(){
        $(this).addClass('active-navigation');
        $(this).parent().siblings().find('a').removeClass('active-navigation');
    });

    // offcanvas 
    $('.toggle').click(function(){
        $('.offcanvas').slideToggle(500);
    });
    $('#close').click(function(){
        $('.offcanvas').slideUp(500);
    });

    // feature 
    $('.feature-tab').click(function(){
        $(this).addClass('active-tab');
        $(this).siblings().removeClass('active-tab');
        $(this).parents('.feature').find('.feature-img').removeClass('opa');
        $('#' + $(this).attr('id') + '-img').addClass('opa');
    });

    // FAQ
    $('.accodion-header').click(function(){
        $(this).next('.accodion-body').slideToggle();
        $(this).parent().siblings().find('.accodion-body').slideUp();
        $(this).children('h2,i').toggleClass('color');
        $(this).parent().siblings().find('h2,i').removeClass('color');
        $(this).children('i').toggleClass('rotate');
        $(this).parent().siblings().find('i').removeClass('rotate');
    });

    // back-to-top 
    $('.back-to-top').click(function(){
        $('html').animate({scrollTop:0});
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('header').addClass('active');
        $('.back-to-top').fadeIn();
    }
    else{
        $('header').removeClass('active');
        $('.back-to-top').fadeOut();
    }
});

  // Highlight the active section in the nav
  $(window).scroll( function() {
      var scrollPos = $(this).scrollTop();
      $('nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr('href'));
          if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
              // $(this).removeClass('active-navigation');
              currLink.addClass('active-navigation');
          }
          else {
              currLink.removeClass('active-navigation');
          }
      });
  });


// loader
$(window).on('load', function(){
    $('.loader').fadeOut(1000);
    $('html').animate({scrollTop:0});
});

// client slider 
$('.responsive').slick({
    dots: false,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// testimonials
$('.center').slick({
  centerMode: true,
  arrows: false,
  dots:true,
  autoplay:true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToScroll: 1,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});