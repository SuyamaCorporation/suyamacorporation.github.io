const circleType = new CircleType(
    document.getElementById("rotated")
).radius(50);

window.addEventListener('scroll', function () {
    var offset = window.scrollY;
    offset = offset + 0.4;

    var circularText = document.querySelector('.circular-text');
    circularText.style.transform = "rotate(" + offset + "deg)";
});
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.headline', { delay: 500 });
    gsap.timeline()
        // 1. .text-wrapperクラスが付与された要素のtranslateYを0%に変更
        .to(".text-wrapper", {
            duration: 1,
            y: "0%",
            opacity: 1,
            ease: "power3.out"
        })
        // 2. .image-wrapperクラスが付与された要素のopacityを1に変更
        .to(".image-wrapper", {
            duration: 0.5,
            opacity: 1,
            ease: "power1.inOut"
        }) // 0.5秒遅延して開始

        // 3. headerをやや上からフェードインする形で表示
        .to("header", {
            duration: 0.5,
            y: "0",
            opacity: 1,
            ease: "power2.out"
        })

        .to(".circular-text", {
            duration: 0.5,
            opacity: 1,
            ease: "power1.inOut"
        });
});