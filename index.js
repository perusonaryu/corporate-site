$(window).on('load', function () {
  setTimeout(function () {
    $.scrollify({
      section: 'section',
      scrollSpeed: 1500,
      easing: 'swing',
      updateHash: false,
      setHeights: false,
    })
    $('#inianimation').addClass('d-n')
    $('#white-back').addClass('d-n')
    $('#green-back').addClass('d-n')
  }, 6500)

  //各セクション遷移のためのクリックイベント定義
  $('#top-list li').each(function (i, ele) {
    $(this).click(function () {
      $.scrollify.move(i + 1)
    })

    $('.section' + (i + 1)).click(function () {
      $.scrollify.move(i)
    })
  })
})

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
