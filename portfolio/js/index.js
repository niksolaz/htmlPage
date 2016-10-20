$(document).ready(function(){
  $("#target").click(function(){
    $(this).addClass("btn-success").css("border-radius","50%")
    
    $(".targetSend").html("<em><b>Written and Coded by Nicola Solazzo.</b></em>").addClass("animated bounceInRight").css("color","white")
   $(".titleContact").addClass("animated fadeIn").html("<h3>Thank you for your time, I will answer as soon as possible </h3>").css("color","white")
  })
});