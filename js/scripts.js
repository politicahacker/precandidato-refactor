// Empty JS for your own code to be here
var $root = $('html, body');
var $header = $('#menu');

$().ready(function () {
	$("#video-img").click(function (){
   	var div = '<div id="video-embed"><iframe src="https://www.youtube.com/embed/oliAYl6853w?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
	  $(div).insertAfter(this);
		$(this).fadeOut("slow");
  });
  
  $('a[href*=#]').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $header.height()
    }, 500);
    return false;
  });
})
