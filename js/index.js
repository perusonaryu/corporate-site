$(function () {
  $('html,body').scrollTop(0)
  //スライドがあるセクション分slick適用
  for (i = 1; i <= 5; i++) {
    $('.slide-item' + i).slick({
      arrows: false, // 矢印
      dots: true, // インジケーター
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnFocus: false, //フォーカスで一時停止
      pauseOnHover: false, //マウスホバーで一時停止
      pauseOnDotsHover: false, //ドットナビをマウスホバーで一時停止
    })
  }
})
$(window).on('load', function () {
  setTimeout(function () {
    $('#green-back').addClass('slideOut')
  }, 5000)
  setTimeout(function () {
    //scrollify設定
    $.scrollify({
      section: 'section',
      scrollSpeed: 1500,
      easing: 'swing',
      updateHash: false,
      setHeights: false,
      after: (i, section) => {
        $('.slide-item' + i).slick('slickSetOption', 'autoplay', true, true)
        const ele = $.scrollify.current().find('.move-btn')
        const slideImgEle = $.scrollify.current().find('.slideImg')
        const nextSecDesEle = $.scrollify.current().children().children().find('.section-description')
        const desBtnEle = $.scrollify.current().children().children().find('.description-btn')
        const isClose = nextSecDesEle.hasClass('close')
        const isDone = nextSecDesEle.hasClass('done')
        //open close ボタン制御
        if (isClose && !isDone) {
          nextSecDesEle.removeClass('close')
          nextSecDesEle.addClass('done')
          desBtnEle.addClass('show')
        }

        if (i == 0) {
          $('#arrow-top').removeClass('active')
          $('#arrow-bottom').removeClass('active')
        } else if (i == 5) {
          $('#arrow-top').addClass('active')
          $('#arrow-bottom').removeClass('active')
          ele.addClass('active')
          slideImgEle.addClass('active')
        } else {
          ele.addClass('active')
          $('#arrow-top').addClass('active')
          $('#arrow-bottom').addClass('active')
          slideImgEle.addClass('active')
        }
      },
    })
    $('#inianimation').addClass('d-n')
    $('#white-back').addClass('d-n')
    $('#green-back').addClass('d-n')
  }, 7500)

  //各セクション遷移のためのクリックイベント定義
  $('section').each(function (i) {
    $('.section' + (i + 1)).click(function () {
      $.scrollify.move(i)
    })
  })
})

//section2~6の詳細テキスト表示、非表示クリックイベント
$('.description-btn').on('click', function () {
  $(this).toggleClass('active').parent().siblings('.section-description').toggleClass('close')
})
