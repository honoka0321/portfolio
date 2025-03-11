$(function() {
  $('.hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});

let jsAccordion = document.querySelectorAll('.js-accordion');
jsAccordion.forEach(function(element) {
  element.addEventListener('click', function(e) {
    let eleHeight = element.nextElementSibling;
    if(element.classList.contains('is-accordion--open')){
      eleHeight.style.height = '0';
    } else {
      eleHeight.style.height = eleHeight.scrollHeight + 'px';
    }
    element.classList.toggle('is-accordion--open');
  });
});