$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header__logo,.header__body,.header__main-container').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(function () {
  $('#phone').mask('+7 (999)–999–99'), {placeholder: "+7(___)___-__-__"};
  $('#tel').mask('+7 (999)–999–99') , {placeholder: "+7(___)___-__-__"};
});

function moveCaretToStart(inputObject)
{
  if (inputObject.createTextRange)
  {
    var r = inputObject.createTextRange();
    r.collapse(true);
    r.select();
  }
}
$('#tel').focus(function() {
  moveCaretToStart(document.getElementById("mytextbox"));
});

$(function() {
  var tab = $('#tabs .tabs-items > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#tabs .tabs__nav a').click(function(){
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs .tabs__nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  // Клики по якорным ссылкам.
  $('.tabs-target').click(function () {
    $('#tabs .tabs__nav a[href=' + $(this).data('id') + ']').click();
  });
});

$(document).ready(function(){
  $('.header__link').click(function () {
    $('.header__burger,.header__menu,.header__logo,.header__body,.header__main-container').addClass('active');
  });
});
