gsap.registerPlugin(ScrollTrigger);

let wrapper = document.querySelector('.wrapper');
let videodiv = document.querySelector('.videodiv');
let animatedImageSection = document.querySelector('.animatedImageSection');

// First animation (video div)
gsap.timeline({
    scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
    }
})
.to(videodiv, {
    width: "100vw",
    height: "100vh",
    duration: 0.7,
    ease: "power1.inOut"
})
.to(videodiv, {
    left: "70%",
    duration: 0.7,
    ease: "power1.inOut",
    onComplete: function () {
        console.log('Animation Complete!');
    }
});

// Second animation (animated image section)
gsap.timeline({
    scrollTrigger: {
        trigger: animatedImageSection,
        start: "-30% top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true, // Make sure spacing is applied
    }
})
.to(".animatedImageSection2", {
    width: "100vw",
    height: "100vh",
    duration: 0.7,
    ease: "power1.inOut"
});

// Third animation (car animation)
gsap.timeline({
    scrollTrigger: {
        trigger: ".carAnimation",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
    }
})
.to(".carImage", {
    width: "100vw",
    height: "100vh",
    duration: 0.7,
    ease: "power1.inOut"
});

// Fourth animation (company photo scale)
gsap.timeline({
    scrollTrigger: {
        trigger: ".companyPhoto",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
    }
})
.to(".companyPhoto img", {
    scale: 1.5,
    duration: 0.7,
    force3D: true,
    ease: "power1.inOut"
});
let hiddenmenu = document.querySelector('.hiddenmenu')
let navigationMenu = document.querySelector(".navigationMenu")
let closeMenuButton = document.querySelector('#closeMenuButton')
navigationMenu.addEventListener("click",()=>{
    hiddenmenu.style.top = "0%"
})
closeMenuButton.addEventListener("click",()=>{
    hiddenmenu.style.top = "-200%"
})



const images = {
    1: './images/2.svg',
    2: './images/9.svg',
    3: './images/10.svg',
    4: './images/13.svg'
};

function changeBackgroundImage(imageUrl) {
    
    gsap.to(hiddenmenu, {
        backgroundPosition: "100% 0%", 
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
            hiddenmenu.style.backgroundImage = `url('${imageUrl}')`; 
            hiddenmenu.style.backgroundSize = "cover "; 
            hiddenmenu.style.backgroundRepeat = "no-repeat "; 
        }
    });
}

firstdiv.addEventListener('mouseenter', () => {
    changeBackgroundImage(images[1]);  
});

seconddiv.addEventListener('mouseenter', () => {
    changeBackgroundImage(images[2]);  
});

thirddiv.addEventListener('mouseenter', () => {
    changeBackgroundImage(images[3]);  
});

fourthdiv.addEventListener('mouseenter', () => {
    changeBackgroundImage(images[4]);  
});

[firstdiv, seconddiv, thirddiv, fourthdiv].forEach(div => {
    div.addEventListener('mouseleave', () => {
        gsap.to(hiddenmenu, {
            backgroundPosition: "0% 0%",
            duration: 0.2,
            ease: "power2.inOut",
            onComplete: () => {
                hiddenmenu.style.backgroundImage = 'unset';  
            }
        });
    });
});