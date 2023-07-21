// ハンバーガーメニューの表示
$(function(){
    $(".menu-button").click(function() {
        $(this).toggleClass("close-button");
        $(".header .site-menu").toggle();
    });
});

// ページトップへ
$(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {//どの程度スクロールしたらボタンが現れるか
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
  });