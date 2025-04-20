function customCrsr() {
    Shery.mouseFollower({
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
}

function menuClose() {
    const tl = gsap.timeline()
    tl.from(".nav-mob-items", {
        x: 500,
        duration: 0.6,
        delay: 0.3,
        opacity: 0
    })
    tl.from(".nav-mob-items i", {
        x: 10,
        duration: 0.3,
        delay: 0.1,
        opacity: 0,
    })
    tl.from(".nav-mob-items a", {
        x: 200,
        duration: 0.6,
        delay: 0.1,
        opacity: 0,
        stagger: 0.15
    })
    tl.pause()
    document.querySelector(".menu i").addEventListener("click", () => {
        tl.play()
    })
    document.querySelector(".close i").addEventListener("click", () => {
        tl.reverse()
    })
}
menuClose()

function textSplit(selectors) {
    document.querySelectorAll(selectors).forEach((elements) => {
        let clutter = ""
        let h1Text = elements.textContent
        let splitText = h1Text.split("")
        splitText.forEach((elem) => {
            if (elem === " ") {
                clutter += `<span>&nbsp;</span>`;
            } else {
                clutter += `<span class="inline-block overflow-hidden">${elem}</span>`;
            }
        })
        elements.innerHTML = clutter
    });

}

function gsapWebAnimation() {
    const tl = gsap.timeline()
    tl.from("nav a", {
        y: 100,
        duration: 0.6,
        delay: 0.3,
        opacity: 0,
        stagger: 0.15
    })
    tl.from(".top-left, .top-left h3, .top-left p , .top-right h3", {
        y: -30,
        duration: 0.6,
        delay: 0.2,
        opacity: 0,
        stagger: 0.3
    })
    tl.from(".heading .row1 h3", {
        y: 50,
        duration: 0.4,
        opacity: 0,
        stagger: 0.2
    })
    tl.from(".row2 h1 span", {
        y: 100,
        duration: 0.8,
        delay: 0.2,
        opacity: 0,
        stagger: 0.15
    })
    tl.from(".sticky-btn", {
        x: 50,
        opacity: 0,
    })
    tl.to(".marquees", {
        scale: 5,
        rotation: -30,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".marquees",
            scroller: "body",
            start: "top 40%",
            end: "top 0%",
            scrub: 1,
            pin: true
        }
    })
    tl.from(".desc-wrapper .desc-left .top p span", {
        y: 20,
        rotateX: -90,
        opacity: 0,
        duration: 10,
        delay: 2,
        stagger: 4,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
        }
    })
    tl.from(".desc-wrapper .desc-right ul li", {
        x: 500,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 50%",
            end: "top 30%",
            scrub: 3,
        }
    })
    tl.from(".desc-wrapper .desc-left .bottom", {
        y: 600,
        duration: 1,
        opacity: 0,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 20%",
            end: "top -20%",
            scrub: 3,
        }
    })
    tl.from(".desc-wrapper .desc-right img", {
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 100%",
            end: "top 0%",
            scrub: 1,
        }
    })
    tl.from(".about, .about-wrapper-1 h4, .about-wrapper-2 p, .about-wrapper-3", {
        x: 1500,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top 10%",
            end: "top -200%",
            scrub: 3,
            pin: true
        }
    })
    tl.from(".tags .tag h6", {
        x: 1200,
        opacity: 0,
        duration: 5,
        delay: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: ".tags-wrapper",
            scroller: "body",
            start: "top 0%",
            end: "top -200%",
            scrub: 5,
            pin: true,
            x: 1200,

        }
    })
    tl.from(".skills .skills-set h5, .skills-set p , .arrow", {
        y: 200,
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skills",
            scroller: "body",
            start: "top 10%",
            end: "top -300%",
            scrub: 3,
            pin: true
        }
    })
    tl.from(".text h5", {
        rotateX: -90,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".text",
            scroller: "body",
            start: "top 70%",
            end: "top 0%",
            scrub: 1
        }
    })
    tl.from(".project .project-title, .project .items", {
        x: -1200,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".project",
            scroller: "body",
            start: "top 0%",
            end: "top -300%",
            scrub: 3,
            pin: true
        }
    })
}

function gsapMobAnimation() {
    const tl = gsap.timeline()
    tl.from("nav a", {
        y: -30,
        duration: 0.6,
        opacity: 0,
    })
    tl.from(".top-right h3", {
        x: -100,
        duration: 0.5,
        delay: 0.2,
        opacity: 0,
        stagger: 0.3
    })
    tl.from(".top-left, .top-left h3, .top-left p", {
        x: -100,
        duration: 0.5,
        delay: 0.2,
        opacity: 0,
        stagger: 0.3
    })
    tl.from(".sticky-btn", {
        x: 100,
        duration: 0.6,
        delay: 0.2,
        opacity: 0,
    })
    tl.from(".heading .row1 h3", {
        y: 50,
        duration: 0.6,
        opacity: 0,
    })
    tl.from(".row2 h1", {
        x: 500,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".row2",
            scroller: "body",
            start: "top 65%",
            end: "top 30%",
            scrub: 3
        }
    })
    tl.to(".marquees", {
        scale: 6,
        rotation: -30,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".marquees",
            scroller: "body",
            start: "top 40%",
            end: "top 0%",
            scrub: 1.5,
            pin: true
        }
    })
    tl.from(".desc-wrapper .desc-left .top p span", {
        y: 30,
        rotateX: -90,
        opacity: 0,
        duration: 10,
        delay: 2,
        stagger: 6,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
        }
    })
    tl.from(".desc-wrapper .desc-left .bottom", {
        y: 600,
        duration: 1,
        opacity: 0,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 20%",
            end: "top -20%",
            scrub: 3,
        }
    })
    tl.from(".desc-wrapper .desc-right ul li", {
        x: -200,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".description",
            scroller: "body",
            start: "top 20%",
            end: "top -40%",
            scrub: 3,
        }
    })
    tl.from(".about .about-wrapper-3", {
        y: 500,
        scale: 2,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top 10%",
            end: "top -100%",
            scrub: 3,
            pin: true
        }
    })
    tl.from(".about .about-wrapper-1 h4, .about-wrapper-2 p", {
        x: 200,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top -10%",
            end: "top -100%",
            scrub: 3,
            pin: true
        }
    })
    tl.from(".tags .tag h6", {
        x: -600,
        opacity: 0,
        duration: 5,
        delay: 2,
        stagger: 2,
        scrollTrigger: {
            trigger: ".tags-wrapper",
            scroller: "body",
            start: "top 0%",
            end: "top -200%",
            scrub: 5,
            pin: true,
            x: 1200,

        }
    })
    tl.from(".skills .skills-set h5, .skills-set p , .arrow", {
        x: 200,
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skills",
            scroller: "body",
            start: "top 10%",
            end: "top -300%",
            scrub: 3,
            pin: true
        }
    })
    tl.from(".text h5", {
        rotateX: -90,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".text",
            scroller: "body",
            start: "top 40%",
            end: "top 0%",
            scrub: 1
        }
    })
    tl.from(".project .project-title, .project .items", {
        x: -300,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
            trigger: ".project",
            scroller: "body",
            start: "top 30%",
            end: "top -10%",
            scrub: 2,
        }
    })
}

const media = window.innerWidth
if (media >= 1024) {
    textSplit(".heading .row2 h1")
    textSplit(".desc-wrapper .desc-left .top p")
    customCrsr()
    gsapWebAnimation()
} else {
    textSplit(".desc-wrapper .desc-left .top p")
    gsapMobAnimation()
}

function projectImgCrsr() {
    const crsrImg = document.querySelectorAll(".project .items");
    crsrImg.forEach((val) => {
        val.addEventListener("mouseenter", () => {
            val.childNodes[3].style.opacity = 1;
        })
    })
    crsrImg.forEach((val) => {
        val.addEventListener("mouseleave", () => {
            val.childNodes[3].style.opacity = 0;
        })
    })
    crsrImg.forEach((val) => {
        val.addEventListener("mousemove", (dets) => {
            val.childNodes[3].style.left = dets.x + "px";
        })
    })

}
projectImgCrsr()
