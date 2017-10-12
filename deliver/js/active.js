$(document).ready(function(){
  $('.sliders').owlCarousel({
	  items:1,
	  autoplay:false,
	  loop: true,
	  smartSpeed: 900,
      autoplayTimeout:1000,
  });
  
  //var dot = $('.sliders .owl-dot');
//dot.each(function() {
	//var index = $(this).index() + 1;
  //if(index < 10){
  //	$(this).html('0').append(index);
  //}else{
    // $(this).html(index);
  //}
//});

});