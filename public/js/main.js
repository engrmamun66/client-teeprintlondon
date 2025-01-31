// header fixed js
$(document).on("scroll", function() {
    if ($(document).scrollTop() >= 50) {
        $(".teeprint-menu-header").addClass("shrink");
    } else {
        $(".teeprint-menu-header").removeClass("shrink");
    }
});
/*-- active menu js --*/
$(document).ready(function() {
    $('.teeprint-nav-manu ul li a').click(function() {
        $('li a').removeClass("teeprint-active-menu");
        $(this).addClass("teeprint-active-menu");
    });
});
// toogle js 
$(document).ready(function() {
    $(".teeprint-mobile-menubar").click(function() {
        $(".teeprint-nav-manu ").slideToggle(200);
    });

});
// slider js 
$(document).ready(function() {
    $('#teeprint-owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        lazyLoad: true,
        loop: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});

// feature product js
$(document).ready(function() {
    $('#rm-camping-fp-owlcarousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            576: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
            },
            993: {
                items: 4,
                nav: true,
                loop: false,
                margin: 20
            },
            1200: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
            }
        }
    })
});

// right sidebar js 
$(function() {

    $('.rm-sidebar-menu').click(function() {
        $('.teeprint-rightsidebar-overlay').addClass('is-open');
        return false;
    });

    $('.teeprint-rightsidebar-close, .teeprint-rightsidebar-overlay').click(function() {
        $('.teeprint-rightsidebar-overlay').removeClass('is-open');
    });
    $('.teeprint-rightsidebar-content').on('click', function(e) {
        e.stopPropagation();
    });

});

// toogle js 
$(document).ready(function() {
    $(".rm-search-bar, .teeprint-search-closebar").click(function() {
        $(".teeprint-search-body").slideToggle(200);
    });
    $(document).click(function() {
        $(".teeprint-search-body").slideUp(200);
    });
    $('.rm-search-bar, .teeprint-search-body').on('click', function(e) {
        e.stopPropagation();
    });
});

// trusted by js
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 8,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay')
    })
  })

// tab js 


$(document).ready(function() {
    $(".pd-tab_content").hide();
$(".pd-tab_content:first").show();

$(".pd-tab_tab-head li").click(function() {

  $(".pd-tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
  $(".pd-tab_tab-head li").removeClass("active");
  $(this).addClass("active");
});
});

// cart sidebar js 
$(function() {

    $('.teeprint-cartbar-launcher').click(function() {
        $('.teeprint-cartsidebar-overlay').addClass('is-open');
        return false;
    });

    $('.teeprint-cart-modalclose').click(function() {
        $('.teeprint-cartsidebar-overlay').removeClass('is-open');
    });

});

