$(document).ready(function(){
  $("h1").addClass("text-center").css("color","teal");
  $(window).stellar({
    scrollProperty:"scroll",
    positionProperty:"position",
    varticalScrolling:true,
    horizontalOffset: 0,
    verticalOffset: 0,
    responsive:false,
    parallaxBackgrounds: false,
    parallaxElements: true,
    hideDistantElements: true,
    hideElement: function($elem) { $elem.hide(); },
    showElement: function($elem) { $elem.show(); }
  });
});