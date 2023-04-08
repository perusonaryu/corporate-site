const startTime = performance.now()
$(window).on('load', function () {
  const endTime = performance.now()
  console.log(endTime - startTime)
  setTimeout(function () {
    $('#green-back').addClass('slideOut')
  }, 5000)
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
  }, 7500)

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

//section2~6の詳細テキスト表示、非表示クリックイベント
$('.description-btn').click(function () {
  $(this).toggleClass('active')
  $(this).parent().siblings('.section-description').toggleClass('open close')
})
