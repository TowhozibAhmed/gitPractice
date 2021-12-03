(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });



        $(".package-slider").owlCarousel({
            items: 3,
            nav: true,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 1,
                    margin: 7,
                },
                750: {
                    items: 2,
                    margin: 7,
                },
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                    margin: 12,
                },
                1200: {
                    items: 3,
                    margin: 14,
                },
                1360: {
                    items: 3,
                    margin: 20,
                }
            }


        });


	//===== Sticky Menu-Bar Start
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });
    //===== Sticky Menu-Bar End


    //===== Scroll To Top Start
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.scroll-top').fadeIn(200)
        } else {
            $('.scroll-top').fadeOut(200)
        }
    });




		//===== Prealoder Start
		$(window).on('load', function (event) {
			$('.proloader').delay(500).fadeOut(500);
		});
		//===== Prealoder End

        
    });

    jQuery(window).load(function () {


    });
 

}(jQuery));