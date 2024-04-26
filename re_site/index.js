luxy.init();

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
});

// GSAP TimeLine
tl = new TimelineMax();
tl.to('.load', 1, { height: '0%', ease: "power2.out" })
    .to('.load', 0, { display: 'none' })
    .fromTo('.bg-wrapper', 1, { height: '0%', scale: '0.8' }, { height: '100%', scale: '1', ease: "power1.out" })
    .from('.g-fade', 1, { y: -50, opacity: 0, ease: Power2.easeOut });



// TweenMax.fromTo('.gsap-fadeLeft', 1, { width: '0%' }, { width: '100%', ease: "power2.out" });

// TweenMax.from('.load', 1, { opacity: '0', ease: Power2.easeOut });