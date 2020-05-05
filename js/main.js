$(function(){

$('.about_sliderVideos').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><span class="icon-chevron-left"></span></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><span class="icon-chevron-right"></span></button>',
	responsive: [
	  {
	    breakpoint: 655,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false,
	      variableWidth: true,
	    }
	  },
	]
})

$('.reviews_slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	responsive: [
	  {
	    breakpoint: 879,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1,
	    }
	  },
	]
})

$('.price_slider').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><span class="icon-chevron-left"></span></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><span class="icon-chevron-right"></span></button>',
	centerMode: true,
	waitForAnimate: false,
	responsive: [
	  {
	    breakpoint: 1200,
	    settings: {
	      slidesToShow: 4,
	    }
	  },
	  {
	    breakpoint: 992,
	    settings: {
	      slidesToShow: 3,
	    }
	  },
	  {
	    breakpoint: 768,
	    settings: {
	      slidesToShow: 2,
	    }
	  },
	  {
	    breakpoint: 576,
	    settings: {
	      slidesToShow: 1,
	      arrows: false,
	    }
	  },
	]
})

let sliderVideosItem = document.querySelector('.about_sliderVideos');
console.log(sliderVideosItem)

sliderVideosItem.onclick = (event) => {
	if(event.target.dataset.url) {
		let video = document.querySelector('.about_mainVideo > iframe');
		console.log(video.src)
		video.src = `https://www.youtube.com/embed/${event.target.dataset.url}`;
	}
}
});

$('.burger').click(function() {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});


$('.burger').click(function() {
	let elem = document.querySelector('.header_mobileNav');
	elem.classList.toggle('movileNav-active');
});

