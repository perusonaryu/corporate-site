$(function () {
  setTimeout(function () {
    $.scrollify({
      section: 'section',
      scrollSpeed: 2000,
      easing: 'swing',
      updateHash: false,
      setHeights: false,
    });
  }, 1000);
});

$('.openbtn1').click(function () {
  $(this).toggleClass('active');
  $('#fadeout').toggleClass('animation');
});

$('.slide-items').slick({
  arrows: true, // 矢印
  // dots: true, // インジケーター
  prevArrow: `<svg
    class="arrow-svg arrow-prev"
    viewBox="0 0 100 100"
    width="20"
    height="20"
  >
    <path d="M 20,50 L 65,90 L 70,85 L 30,50  L 70,15 L 65,10 Z"></path>
  </svg>`,
  nextArrow: `<svg
    class="arrow-svg arrow-next"
    viewBox="0 0 100 100"
    width="20"
    height="20"
  >
  <path d="M 20,50 L 65,90 L 70,85 L 30,50  L 70,15 L 65,10 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path>
  </svg>`,
});

// // eachTextAnimeにappeartextというクラス名を付ける定義
// function EachTextAnimeControl() {
//   $('.eachTextAnime').each(function () {
//     var elemPos = $(this).offset().top - 50;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight) {
//       $(this).addClass('appeartext');
//     } else {
//       $(this).removeClass('appeartext');
//     }
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
// }); // ここまで画面をスクロールをしたら動かしたい場合の記述

// // 画面が読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
//   //spanタグを追加する
//   var element = $('.eachTextAnime');
//   element.each(function () {
//     console.log(this);
//     var text = $(this).text();
//     var textbox = '';
//     text.split('').forEach(function (t, i) {
//       if (t !== ' ') {
//         if (i < 10) {
//           textbox +=
//             '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
//         } else {
//           var n = i / 10;
//           textbox +=
//             '<span style="animation-delay:' + n + 's;">' + t + '</span>';
//         }
//       } else {
//         textbox += t;
//       }
//     });
//     $(this).html(textbox);
//   });

//   EachTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
// }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
