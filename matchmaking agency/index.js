document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScrollTop) {
            // 下スクロール
            if (!header.classList.contains('off')) {
                header.classList.add('off');
            }
        } else {
            // 上スクロール
            header.classList.remove('off');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // for mobile or negative scrolling
    });
});
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('off');
});

document.querySelector('.mobile-menu .close').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.add('off');
});
