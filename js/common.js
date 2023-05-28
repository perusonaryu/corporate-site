//ハンバーガーボタンクリックイベント
$('.openbtn1').click(function () {
  //メニュー表示時はメニュー一覧を表示する
  if (!$('.openbtn1').hasClass('active')) {
    $('#philosophy').addClass('d-n')
    $('#contact').addClass('d-n')
    $('#menuList').removeClass('d-n')
  }
  $('.openbtn1').toggleClass('active')
  if ($('#otherScreen').hasClass('d-n')) {
    $('#otherScreen').removeClass('d-n')
    $('#otherScreen').addClass('menu-fadein')
  } else {
    $('#otherScreen').toggleClass('menu-fadein menu-fadeout')
  }
})

//philosophyクリック
$('#philosophyBtn').click(function () {
  $('#menuList').toggleClass('d-n')
  $('#philosophy').toggleClass('d-n')
})
//contactクリック
$('#contactBtn').click(function () {
  $('#menuList').toggleClass('d-n')
  $('#contact').toggleClass('d-n')
})
//menuボタンクリック
$('.menuBtn').click(function () {
  $('#menuList').toggleClass('d-n')
  if (!$('#philosophy').hasClass('d-n')) {
    $('#philosophy').addClass('d-n')
  } else if (!$('#contact').hasClass('d-n')) {
    $('#contact').addClass('d-n')
  }
})
