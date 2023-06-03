document.addEventListener('touchstart', function () {}, { passive: true })
sessionStorage.setItem('currentSectionNumber', 0)

//デバイスの画面の高さ（1vh）を算出する関数
function setHeight() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
//アクセス時に関数を実行
setHeight()
//画面回転（リサイズ時）に関数を実行する
window.addEventListener('resize', setHeight)

$(function () {
  $('html,body').animate({ scrollTop: 0 }, '1')
  //スライドがあるセクション分slick適用
  for (i = 1; i <= 5; i++) {
    const slider = $('.slide-item' + i)
    $('.slide-item' + i)
      .find('li')
      .addClass(function (j, ele) {
        return 'slide' + (j + 1)
      })
    slider.slick({
      arrows: false, // 矢印
      dots: true, // インジケーター
      speed: 2500,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnFocus: false, //フォーカスで一時停止
      pauseOnHover: false, //マウスホバーで一時停止
      pauseOnDotsHover: false, //ドットナビをマウスホバーで一時停止
      // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    })
    slider.on('beforeChange', function (slick, currentSlide) {
      $(currentSlide.$slider[0]).find('.slick-active').find('img').removeClass('active')
    })
    slider.on('afterChange', function (slick, currentSlide) {
      $(currentSlide.$slider[0]).find('.slick-active').find('img').addClass('active')
    })
  }
})
$(window).on('load', function () {
  setTimeout(function () {
    $('main').removeClass('opacity-0')
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
        const prevSecIdx = sessionStorage.getItem('currentSectionNumber')
        const arrowBtn = $.scrollify.current().find('.move-btn')
        const firstSlideImgEle = $.scrollify.current().find('.first-slide')
        const nextSecDesEle = $.scrollify.current().find('.section-description')
        const prevSecDesEle = $(section[prevSecIdx]).find('.section-description')

        const nextDesBtnEle = $.scrollify.current().find('.description-btn')
        const prevDesBtnEle = $(section[prevSecIdx]).find('.description-btn')
        //各セクションの詳細テキスト、toggleボタン表示制御
        prevSecDesEle.addClass('close')
        prevDesBtnEle.removeClass('show')
        if (i == 0) {
          $('#arrows').css('z-index','-1')
          $('#arrow-top').removeClass('active')
          $('#arrow-bottom').removeClass('active')
        } else {
          $('#arrows').css('z-index','30')
          $('.slide-item' + i).slick('slickSetOption', 'autoplay', true, true)
          $('.slide-item' + prevSecIdx).slick('slickSetOption', 'autoplay', false, true)
          //各セクションの詳細テキスト、toggleボタン表示制御
          nextSecDesEle.removeClass('close')
          nextDesBtnEle.addClass('show')

          //セクション移動ボタン表示制御
          arrowBtn.addClass('active')
          $('#arrow-top').addClass('active')
          //初期表示時のみ
          if (firstSlideImgEle.hasClass('done') == false) {
            firstSlideImgEle.addClass('active done')
          }
          if (i == 5) {
            $('#arrow-bottom').removeClass('active')
          } else {
            $('#arrow-bottom').addClass('active')
          }
        }
        //sessionStorageに一つ前のインデックスを保存
        sessionStorage.setItem('currentSectionNumber', i)
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
