luxy.init();
// スクロール位置を監視する関数
function handleScroll() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    // 画面スクロールが100vh分行ったらonクラスを追加
    if (scrollPosition > window.innerHeight) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
}
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
});
// スクロールイベントに関数を紐づける
window.addEventListener('scroll', handleScroll);
