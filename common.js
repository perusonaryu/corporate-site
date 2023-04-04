//ハンバーガーボタンクリックイベント
$('.openbtn1').click(function () {
  $(this).toggleClass('active')
  if ($('#menu').hasClass('d-n')) {
    $('#menu').removeClass('d-n')
    $('#menu').addClass('menu-fadein')
  } else {
    $('#menu').toggleClass('menu-fadein menu-fadeout')
  }
})
