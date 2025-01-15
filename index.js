gsap.registerPlugin(ScrollTrigger);

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('#diver2');
let div3 = document.querySelector('.div3');
let mymain = document.querySelector('.mymain');
let hiddenmenu = document.querySelector('.hiddenmenu');
let hiddenmenunavigation = document.querySelector('.hiddenmenu :nth-child(1)');
let line1 = document.querySelector('.navigationMenu div:nth-child(1)');
let line2 = document.querySelector('.navigationMenu div:nth-child(2)');
let line3 = document.querySelector('.navigationMenu div:nth-child(3)');
let navigationMenu = document.querySelector('.navigationMenu');
let menuItems = document.querySelector('.menu-items');
let closeMenuButton = document.querySelector('#closeMenuButton');

let click = false;

gsap.timeline({
    scrollTrigger: {
        trigger: ".animation",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
    },
})
    .to(div1, {
        scale: 0.3,
        y: "-100%",
        duration: 0.7,
        ease: "power1.inOut",
    })
    .fromTo(
        div2,
        {
            y: "0%",
            scale: 0.3,
        },
        {
            y: "-100%",
            scale: 1,
            duration: 0.7,
            ease: "power1.inOut",
        },
        "<"
    )
    .to(div2, {
        y: "-300%",
        duration: 0.7,
        ease: "power1.inOut",
    })
    .fromTo(
        div3,
        {
            y: "0%",
            scale: 0.3,
        },
        {
            y: "-200%",
            scale: 1,
            duration: 0.7,
            ease: "power1.inOut",
        },
        "<"
    );


let firstdiv = document.querySelector('#firstdiv')
let seconddiv = document.querySelector('#seconddiv')
let thirddiv = document.querySelector('#thirddiv')
let fourthdiv = document.querySelector('#fourthdiv')

gsap.fromTo(".sidebar", 
    { opacity: 0 }, 
    { 
        opacity: 1,    
        scrollTrigger: {
            trigger: ".animation",  
            start: "top center",    
            end: "bottom center",    
            toggleActions: "play none none reverse",  
            markers: false           
        }
    }
);


gsap.registerPlugin(ScrollTrigger);

// Function to remove the 'glow' class from all sidebar links
gsap.registerPlugin(ScrollTrigger);

// Function to remove the 'glow' class from all sidebar links
function removeActiveClass() {
    document.querySelectorAll(".sidebar ul li").forEach((el) => {
      el.classList.remove("glow");
    });
  }
  
  const sections = [
    { trigger: ".div1", target: ".sidebar ul li:nth-child(1)" },
    { trigger: "#diver2", target: ".sidebar ul li:nth-child(2)" }, 
    { trigger: ".div3", target: ".sidebar ul li:nth-child(3)" },  
    { trigger: ".div4", target: ".sidebar ul li:nth-child(4)" }    
  ];
  
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section.trigger,
      start: "top center",    
      end: "bottom center",   
      onEnter: () => {
        removeActiveClass();  
        document.querySelector(section.target).classList.add("glow"); 
      },
      onEnterBack: () => {
        removeActiveClass();   
        document.querySelector(section.target).classList.add("glow"); 
      }
    });
  });

  window.addEventListener('load', () => {
    gsap.from('.frontPageContent h1', {
        y: 200, 
        opacity: 0,
        duration: 2.5,  
        ease: 'power4.out'  
    });
    gsap.from('#myPlane', {
        y: 200, 
        opacity: 0,
        duration: 2.5,  
        ease: 'power4.out'  
    });
});

navigationMenu.addEventListener("click",()=>{
    hiddenmenu.style.top = "0%"
})
closeMenuButton.addEventListener("click",()=>{
    hiddenmenu.style.top = "-100%"
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