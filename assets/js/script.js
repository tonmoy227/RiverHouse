/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.rh-scrollup').fadeIn();
		} else {
			$('.rh-scrollup').fadeOut();
		}
	});
	$('.rh-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	}); 
	$('.marquee-left').marquee({
		gap: 0,
		speed: 20,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 20,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){



			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {

				if($(".rh_hero_title").length) {
					var NXSECTITLE = $(".rh_hero_title");
					if(NXSECTITLE.length == 0) return; gsap.registerPlugin(SplitText); NXSECTITLE.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
								scaleX: 0,
								rotationX: 15,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .05,
							rotationX: 0,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}

				const RHHERO = gsap.timeline();
				RHHERO
				.from(".rh-hero-content .rh-hero-bg2", { opacity:0, rotate: 0,  yPercent: 100, duration: 1, transformOrigin: "center",   ease: "power1.out" })
				.from(".rh-hero-content .rh-hero-shape img", { scale: 1.5,   duration: 2, transformOrigin: "center",   ease: "power1.out" })
				.from(".rh-hero-text p", { opacity:0, rotate: 0,  yPercent: 100, duration: .5, transformOrigin: "center",   ease: "power1.out" },"<= .3")
				.from(".rh-hero-text .rh-btn1", { opacity:0, rotate: 0,  yPercent: 100, duration: .5, transformOrigin: "center",   ease: "power1.out" },"<= .3")
				
			}, 700);
		})		
	});
	
	if($(".rh-properti-slider").length) {
		const swiper = new Swiper(".rh-properti-slider" , {
			speed: 500,
			spaceBetween: 12,
			loop: true,
			// autoplay:  {
			// 	delay: 5000,
			// },
			navigation: {
				nextEl: ".rh-pro-next",
				prevEl: ".rh-pro-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 7,
				},
				1600: {
					slidesPerView: 7,
				},
				1800: {
					slidesPerView: 9,
				},
			},
		})
	}

	// Grid Item Active
	var $grid = $('.grid').imagesLoaded( function() {
		$grid.masonry({
			percentPosition: true,
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer'
		}); 
	});
	var $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows"
	});
	var filterFns = {
		numberGreaterThan50: function() {
			var number = $(this)
			.find(".number")
			.text();
			return parseInt(number, 10) > 50;
		},
		ium: function() {
			var name = $(this)
			.find(".name")
			.text();
			return name.match(/ium$/);
		}
	};
	$(".button-group").on("click", "button", function() {
		var filterValue = $(this).attr("data-filter");
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	$(".button-group").each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "button", function() {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		});
	});
	if (window.innerWidth > 991) {
		if($('.rh-project-sec').length) {
			const fxnoscrollcontent = document.querySelector('.rh-project-sec');
			const fxh5 = document.body;

			fxnoscrollcontent.addEventListener('mouseenter', function() {

				fxh5.classList.add('lenis');
			});
			fxnoscrollcontent.addEventListener('mouseleave', function() {

				fxh5.classList.remove('lenis');

			});
		}


		const target = document.querySelector('.rh-project-sec');
		if (target) {
			const observer = new IntersectionObserver(function (entries) {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						lenis.scrollTo(entry.target, {
							duration: 1,
							easing: (t) => Math.min(1, 1.001 - Math.pow(2, -0 * t)),
						});
					}
				});
			}, { threshold: 0.1 });

			observer.observe(target);
		} 
	}
	var quick_view = new Swiper(".rh-project-thumb", {
		spaceBetween: 8,
		slidesPerView: 5,
		speed: 1000,
		direction: 'vertical',
		mousewheel: true,
		autoplay: {
			enabled: true,
			delay: 5000
		},
		breakpoints: {  
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 5,
			},
			'480': {
				slidesPerView: 5,
			},
			'0': {
				slidesPerView: 5,
			},
		},
	});

	var swiper2 = new Swiper(".rh-project-slider", {
		spaceBetween: 0,
		speed: 1000,
		effect: "fade",
		slidesPerView: 1,
		mousewheel: {
			releaseOnEdges: true,
		},
		thumbs: {
			swiper: quick_view,
		},
	});

	if ($('.rh-sponsor-slider').length > 0 ) {
		var slider = new Swiper('.rh-sponsor-slider', {
			spaceBetween: 100,
			slidesPerView: 6,
			loop: true,
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 6,
				},
				'1200': {
					slidesPerView: 5,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	};

	if (window.matchMedia("(min-width: 1700px)").matches) { 
		var ATWORKPROCESS = gsap.timeline({
			scrollTrigger: {
				trigger: '.rh-testi-sec',
				start: "top 5%",
				end: "bottom top",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		ATWORKPROCESS
		.from( ".rh-testi-item:nth-child(1)" , { opacity: 0, yPercent: 10, xPercent: 195, rotate: -12,   duration: 1, ease: "power2.out"})
		.from( ".rh-testi-item:nth-child(2)" , { opacity: 0, yPercent: 3,  xPercent: 105, rotate: -8,   duration: 1, ease: "power2.out"},"<")
		.from( ".rh-testi-item:nth-child(4)" , { opacity: 0, yPercent: 3,  xPercent: -105, rotate: 8,   duration: 1, ease: "power2.out"},"<")
		.from( ".rh-testi-item:nth-child(5)" , { opacity: 0, yPercent: 10,  xPercent: -195, rotate: 10,   duration: 1, ease: "power2.out"},"<")

	};

	gsap.to(".rh-ab-shape svg circle", {
		transformOrigin: "center center",
		transformBox: "fill-box",
		scale: 1.1,
		repeat: -1,
		yoyo: true,
		duration: 2,
		ease: "sine.inOut",
		stagger: 0.2
	});

	if($('.rh-itm-title').length) {
		var txtheading = $(".rh-itm-title");
		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			if( $(el).hasClass('rh-itm-anim') ){
				gsap.set(el.split.chars, {
					opacity: .3,
					x: "-7",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}

	gsap.utils.toArray(' .top_view_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 50%",
				end: "top 20%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "-300"})
	});

	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 50%",
				start: "top 200%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "300"})
	});
	gsap.utils.toArray(' .top_view_list').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 80%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1, y: "100"})
	});

	gsap.utils.toArray(' .ser_img').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 90%",
				start: "top 110%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1,  yPercent: "100"})
	}); 

	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	}); 

	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});
	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var TVABT = gsap.timeline({
			scrollTrigger: {
				trigger: '.rh-static-sec',
				start: "top 25%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		TVABT
		.from(".rh-static-item1 .rh-static-gallery1 li:nth-child(1)", { opacity: 0, rotate:'0deg', xPercent: 50,  duration: 2,   ease: "elastic.out(1,0.7)" })
		.from(".rh-static-item1 .rh-static-gallery1 li:nth-child(2)", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" },"< = .1")
		.from(".rh-static-item1 .rh-static-gallery1 li:nth-child(3)", { opacity: 0, rotate:'0deg', xPercent: -50, yPercent: 50, duration: 2,   ease: "elastic.out(1,0.7)" },"< = .15")
		.from(".rh-static-item1 .rh-static-gallery1 li:nth-child(4)", { opacity: 0, rotate:'0deg',  xPercent: 50, yPercent: 50, duration: 2,   ease: "elastic.out(1,0.7)" },"< = .2")
		.from(".rh-static-item1 .rh-static-gallery1 li:nth-child(5)", { opacity: 0, rotate:'0deg',  yPercent: 20, xPercent: 50, duration: 2,   ease: "elastic.out(1,0.7)" },"< = .25")

	};

})(jQuery);