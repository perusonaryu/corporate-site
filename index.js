$(function () {
  setTimeout(function () {
    $.scrollify({
      section: 'section',
      scrollSpeed: 1000,
      easing: 'swing',
      updateHash: false,
      setHeights: false,
    });
    $('#inianimation').addClass('d-n');
    $('#white-back').addClass('d-n');
    $('#green-back').addClass('d-n');
  }, 6500);
});

$('.openbtn1').click(function () {
  $(this).toggleClass('active');
  $('#fadeout').toggleClass('animation');
});
