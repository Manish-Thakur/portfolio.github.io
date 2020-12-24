//Smooth scrolling with links
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

// Smooth scrolling when the document is loaded and ready
$(document).ready(function(){
  $('html,body').animate({scrollTop:$(location.hash).offset().‌​top}, 500);
});
