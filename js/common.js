//ハンバーガーボタンクリックイベント
$('.openbtn1,.openbtn2').click(function () {
  console.log('aaa')
  $('.openbtn1').toggleClass('active')
  $('.openbtn2').toggleClass('active')
  if ($('#menu').hasClass('d-n')) {
    $('#menu').removeClass('d-n')
    $('#menu').addClass('menu-fadein')
  } else {
    $('#menu').toggleClass('menu-fadein menu-fadeout')
  }
})
