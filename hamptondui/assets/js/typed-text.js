(function($)
{
	$(document).ready(function()
	{
        // Typed text
        $('.typed-text').typed({
            strings: ["Woo Jai Kim, Defense Attorney", "Welcome to my website"],
            typeSpeed: 40,
            backDelay: 5000,
            loop: true,
        });

        // If not a mobile device
        if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {

            // Parallax
            $.stellar({
                positionProperty: 'transform',
            });

        	// Inview animations
    		$('.slide-in-left, .slide-in-right, .fade-in').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    			if (isInView)
    			    $(this).addClass('animate');
    		});

            // Wistia autoplay videos
            var elements = document.getElementsByClassName("wistia_embed");
            var length = elements.length;
            for (var i = 0; i < length; i++)
            {
                var id = elements[i].id;
                var elementExists = document.getElementById(id);
                if (elementExists)
                {
                    var wistiaEmbed = document.getElementById(id).wistiaApi;
                    $('#'+id).bind('inview', function(event, isInView, visiblePartX, visiblePartY) 
                    {
                        if (isInView) {
                            wistiaEmbed.play();
                        } 
                        else {
                            wistiaEmbed.pause();
                        }
                    });
                }
            }

    		// Arrow button
    		$('.logo-button a').click(function(e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: $('header').height() }, 500);
            });

            // Slider
            $('.slider').owlCarousel({
                autoPlay: 6000,
                items: 1,
                singleItem: true,
                pagination: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
            });

            // Carousel
            $('.carousel').owlCarousel({
                autoPlay: false,
                items: 3,
                itemsDesktop: [1199,3],
                itemsDesktopSmall: [979,2],
                itemsTablet: [768,1],
                itemsMobile: [479,1],
                pagination: false,
                navigation: true,
                navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
            });

            // Scroll events
            $(window).on('scroll', function(){
                var fromTop = $(window).scrollTop();

                // Fade logo out on scroll
                //$('.logo').css('opacity', 1-(fromTop/$('header').height()));

                // Sticky header
                if (fromTop > $('header').height()-600)
                	$('.navbar').addClass('alternate');
                else
                	$('.navbar').removeClass('alternate');
            });

        }

        // It's a mobile device
        else
        {

        }

        $(window).scroll;

	});
})(jQuery);