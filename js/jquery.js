$(document).ready(function(){
	
// сделай чтобы добавлялась только тень, а навигация оставалась по умолчанию
	var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) {
   	if(direction == "down") {
   		$('nav').attr('id', 'sticky-nav');
   	} else {
   		$('nav').removeAttr('id');
   	}
  },
  offset: 60 
})



// плавный скролл с меню навигации и футера по определенным классам
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//animation
var waypoint = new Waypoint({
  element: document.getElementById('restaurant-description'),
  handler: function(direction) {
    $('.anim1').addClass('animated fadeIn');
  },
  offset: 200 
});

var waypoint = new Waypoint({
  element: document.getElementById('cities-section'),
  handler: function(direction) {
    $('.anim2').addClass('animated fadeInRight');
  },
  offset: 200
});

var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {
    $('.anim3').addClass('animated fadeInUp');
  },
  offset: 100
});

//mobile burger nav
$('.mobile-nav-icon').click(function(){

	var icon = $('.mobile-nav-icon i');

	if(icon.hasClass('ion-ios-menu')) {
		icon.removeClass('ion-ios-menu');
		icon.addClass('ion-ios-close');
		$('nav').animate({height: '230px'}, 300);
	} 
	else {
		icon.removeClass('ion-ios-close');
		icon.addClass('ion-ios-menu');
		$('nav').animate({height: '70px'}, 300);
	}

	$('.main-nav').slideToggle(300);
});

});





























