document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.headline', { delay: 500 });

    gsap.timeline()
        // 1. .text-wrapperクラスが付与された要素のtranslateYを0%に変更
        .to(".text-wrapper", {
            duration: 2,
            y: "0%",
            opacity: 1,
            ease: "power3.out"
        })
        .to("p.sub-text", {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut"
        })
        .to(".top-image", {
            duration: 1,
            y: "0%",
            opacity: 1,
            ease: "power1.inOut"
        })
        .to("header", {
            duration: 0.5,
            y: "0",
            opacity: 1,
            ease: "power2.out"
        });

});