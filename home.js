gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".offeringText",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
    }
})
    .to(".animatedOfferImage", {
        width: "100vw",
        height: "100vh",
        duration: 0.7,
        ease: "power1.inOut"
    })
    .to(".animatedOfferImage h1", {
        opacity: 1,
        top: "50%",
        duration: 0.7,
        ease: "power1.inOut"
    })
    .to(".animatedOfferImage p", {
        opacity: 1,
        top: "70%",
        duration: 0.7,
        ease: "power1.inOut"
    })

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}vw)`;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(index);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);


gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".divStacking",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
    }
})
    .to(".container1", {
        width: "100vw",
        height: "100vh",
        duration: 0.7,
        ease: "power1.inOut"
    })
    .to(".container1 h1", {
        top: "40%",
        opacity : "1",
        duration: 0.7,
        ease: "power1.inOut"
    })
    .to(".container1 p", {
        top: "60%",
        opacity : "1",
        duration: 0.7,
        ease: "power1.inOut"
    })