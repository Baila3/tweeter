// character counter
let count = 140
$(document).ready(() => {
 $('textarea').on('keyup', function() {
  $('.counter').text(count - ($(this).val().length));
  const counterElem = $(this).next().children('.counter');
  if (count - ($(this).val().length) < 0) {
    counterElem.addClass("danger");
  } else {
    counterElem.removeClass("danger");
  }
 })
}); 