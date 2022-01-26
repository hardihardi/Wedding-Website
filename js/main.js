 AOS.init({
 	duration: 1500,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });	

  if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
  }


  $(".music-player").on("click", function(){
	var myAudio = document.getElementById("myAudio");

	if(myAudio.paused){
		$(".music-player").removeClass("opacity-40")
		myAudio.play();
	}else{
		$(".music-player").addClass("opacity-40")
		myAudio.pause()
	}
  })


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.carousel-friends').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 5
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: isMobile ? '100%' : '140%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};
	bgVideo();


	function makeTimer() {

		var endTime = new Date("20 Februari 2022 08:00:00 GMT+07:00");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }

		$("#days").html(days + "<span>Hari</span>");
		$("#hours").html(hours + "<span>Jam</span>");
		$("#minutes").html(minutes + "<span>Menit</span>");
		$("#seconds").html(seconds + "<span>Detik</span>");		

}

	$("#submit-comment").on("click", function(e){
		e.preventDefault()
		let name =  $("#name").val(); 
		let status =  $("#status").val(); 
		let message =  $("#message").val(); 

		let jsondata = {"name": name,"status": status, "comment" : message};

		let settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://comment-0800.restdb.io/rest/comment",
		"method": "POST",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "61e16a0fa0f7d226f9b75e1a",
			"cache-control": "no-cache"
		},
		"processData": false,
		"data": JSON.stringify(jsondata)
		}
		
		Swal.fire(
			'Terima kasih atas ucapannya 😊 ',
		  )
		
		$.ajax(settings).done( (response) => {
			$(this).attr("disabled", "disabled")
		});

	})


	let testimonyComponent = (name, status, message) => {
		let listIcon = ["1.png","6.ico", "7.ico","8.ico","10.ico","11.ico","12.ico","9.jpeg"]
		let icon = listIcon[Math.floor(Math.random()*listIcon.length)];

		return `
		<div class="item">
			<div class="testimony-wrap py-4">
				<div class="text">
					<p class="mb-4">${message}</p>
					<div class="d-flex align-items-center">
						<div class="user-img" style="background-image: url(images/avatar/${icon})"></div>
						<div class="pl-3">
							<p class="name">${name}</p>
							<span class="position">${status}</span>
					</div>
				</div>
			</div>
		</div>`
	}

	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle...
		while (currentIndex != 0) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	  }
	  

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://comment-0800.restdb.io/rest/comment",
		"method": "GET",
		"headers": {
		  "content-type": "application/json",
		  "x-apikey": "61e16a0fa0f7d226f9b75e1a",
		  "cache-control": "no-cache"
		}
	  }
	  
	  let testimonyBody = $("#testimony-body")

	  $.ajax(settings).done(function (response) {
		  let newComponent =[]
		  shuffle(response).forEach(val => {
			newComponent.push( testimonyComponent(val.name, val.status, val.comment))

		  })

		  testimonyBody.append(newComponent);

		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	  });


	const urlParams = new URLSearchParams(window.location.search);
	const untuk = urlParams.get('untuk');

	if(untuk != undefined){
		$("#dear").text(`${untuk}`)
	}

	$("#open-modal").click(function(){
		$('.easytransitions_transition div').each(function(){
			$(this).removeClass(this.className.split(' ').pop());
			setTimeout(function(){
			  $('.easytransitions_transition div ').addClass("split_diamond")
			  setTimeout(function(){
				$(".music-player").css("opacity", "1")
				$(".gift-wrapper").css("opacity", "1")
				$(".home-modal").css("opacity", "0").addClass("hidden")
			  	$("body").removeClass("modal-open")
				  document.getElementById("myAudio").play();
			  }, 100)
			},100)
		})
	})

setInterval(function() { makeTimer(); }, 1000);

})(jQuery);


window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}