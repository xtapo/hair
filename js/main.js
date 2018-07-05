(function ($) {
 "use strict";

	// slicknav
	$('ul#navigation').slicknav({
		prependTo:".responsive-menu-wrap"
	});
	
	/*----------------------------
	wow js active
	------------------------------ */
	new WOW().init();
	// // stickey menu
	$(window).on('scroll',function() {    
		var scroll = $(window).scrollTop();
		if (scroll < 265) {
			$("#sticky-header").removeClass("sticky");
		}else{
			$("#sticky-header").addClass("sticky");
		}
	});
	
	$(".sidebar-menu-btn a").on("click", function(){
		$(".sidebar-menu").toggleClass("active");
	});
	
	// Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });

                if ( window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
	$(window).on("scroll", function() {

		bgParallax();
	});
	
	
	// Animated scroll specific section
	if ($("#scroll").length) {
        $('#scroll').on('click', function(e){     
            e.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, "easeInOutExpo");
            return false;
        });
    }
	
	// slider-active
	 $('.slider-active').owlCarousel({
        margin:0,
		loop:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
	
	// slider-active
	$(".slider-active").on('translate.owl.carousel', function(){
		$('.slider-content h2').removeClass('fadeInDown animated').hide();
		$('.slider-content h3').removeClass('fadeInUp animated').hide();
		$('.slider-content ul').removeClass('fadeInUp animated').hide();
	});	
		
	$(".slider-active").on('translated.owl.carousel', function(){
		$('.owl-item.active .slider-content h2').addClass('fadeInDown animated').show();
		$('.owl-item.active .slider-content h3').addClass('fadeInUp animated').show();
		$('.owl-item.active .slider-content ul').addClass('fadeInUp animated').show();
	});
	
	
	// Testimonial Slick Carousel
	$('.testimonial-text-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		fade: true,
		asNavFor: '.slider-nav'
	});


	// Testimonial Slick Carousel as Nav
	$('.testimonial-image-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.testimonial-text-slider',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '10px',
		responsive: [{
				breakpoint: 450,
				settings: {
					dots: false,
					slidesToShow: 4,
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 420,
				settings: {
					autoplay: true,
					dots: false,
					slidesToShow: 3,
					centerMode: false,
				}
			}
		]
	});
	
	// magnificPopup
	$('.popup').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	
	// magnificPopup
	$('.popup').magnificPopup({
		type: 'iframe',
		gallery:{
			enabled:true
		}
	});
	
	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	// mixitup ////
	$('#Container').mixItUp();
	
	/*---------------------
	 countdown
	--------------------- */
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		});
	});
	
	/*---------------------
	// Ajax Contact Form
	--------------------- */

	$('.cf-msg').hide();
		$('form#cf button#submit').on('click', function() {
			var fname = $('#fname').val();
			var email = $('#email').val();
			var msg = $('#msg').val();
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			if (!regex.test(email)) {
				alert('Please enter valid email');
				return false;
			}

			fname = $.trim(fname);
			email = $.trim(email);
			msg = $.trim(msg);

			if (fname != '' && email != '' && msg != '') {
				var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: values,
					success: function() {
						$('#fname').val('');
						$('#subject').val('');
						$('#email').val('');
						$('#msg').val('');

						$('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
						setTimeout(function() {
							$('.cf-msg').fadeOut('slow');
						}, 4000);
					}
				});
			} else {
				$('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
			}
			return false;
	});
	
	/*--------------------------
	scrollUp
	---------------------------- */	
	$.scrollUp({
		scrollText: '<img src="img/scroll-top.png" />',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	}); 	
 
})(jQuery); 