$(document).ready(function(){
  $('.item > img').click(function(){
    $(this).parent().find('.block').toggle(500);
    // $('.block').toggle(500);
  });
});
