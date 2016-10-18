$(document).ready(function(){
  $("h1").addClass("text-center").css("color","teal");
  $('#about a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
  $('#portfolio a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
  $('#contact a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
});