$(document).ready(function () {

    gsap.registerPlugin(ScrollTrigger);
    // set values
    gsap.set(".dev-img img", { scale: 0.8 })
    // loading page

    var tl = gsap.timeline(
        {
        // scrollTrigger: {
        //     trigger: "#wrap",
        //     toggleActions: "play reverse play reverse",
        //     // onToggle: ({ animation }) => {
        //     //     let timeScale = animation.reversed() ? -7 : 1;
        //     //     animation.timeScale(timeScale);
        //     // },
        //     // onToggle: self => self.animation.timeScale(self.isActive ? 1 : -7),
        //     start: "50% 100%",
        //     end: "50% 40%",
        //     // markers: "true"
        // }
    });

    // gsap.fromTo(".loading", { yPercent: 0, opacity: 1 }, {
    //     // display: "none",
    //     yPercent: 100,
    //     opacity: 0,
    //     duration: 3,
    //     delay: 3
    // });
    // tl.from(".loading", { yPercent: -100, opacity: 0 })
    // tl.fromTo(".loading span", { yPercent: -100, duration: 1, opacity: 0 }, {
    //     yPercent: 0, opacity: 1, ease: "back", stagger: {
    //         each: 0.1,
    //     }
    // })

    tl.from(
        ".fname span",
        {
            opacity: 0,
            y: "-100%",
            duration: 1,
            ease: "linear",
            stagger: 0.5
        });
    tl.from(
        ".lname span",
        {
            opacity: 0,
            y: "-100%",
            duration: 1,
            ease: "linear",
            stagger: 0.5
        }
    )
        .to(".dev-img img", {
            yPercent: -200,
            scale: 5, transformOrigin: 'top right', scrollTrigger: {
                trigger: ".dev-img img",
                scrub: 1,
                start: "top 50%",
                // markers: true,
                pin: true,
                pinSpacing: false
            }
        })
        // .to(".fname span:not([data-char='.'])", { duration: 1, yPercent: 110 })
        // .to(".lname span:not([data-char='.'])", { duration: 1, yPercent: 110 })
        .to(".menu", { xPercent: -120, opacity: 1 })
        .from(".bio", {
            opacity: 0, yPercent: -20, duration: 3,
            scrollTrigger: {
                trigger: ".biographie",
                scrub: true,
                start: "top 30%",
                //  markers: true,
                ease: "linear",
                pin: true
                // pinSpacing: true
            }
        })
        .to(".biographie", {
            opacity: 0, yPercent: -20, duration: 3,
            scrollTrigger: {
                trigger: ".biographie",
                scrub: true,
                start: "top 50%",
                markers: true,
                ease: "linear",
                pin: true
                // pinSpacing: true
            }
        })
        .to(".section-3 ", {
            scrollTrigger: {
                trigger: ".section-3 ",
                pin: true,
                scrub: true,
                duration: 3
            }
        })
        .to(".effet4", {
            opacity: 0, scrollTrigger: {
                trigger: ".effet1",
                // scrub: 3, 
                // start: "top 40%",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true
                // pin:true,
                // pinSpacing:false
            }
        })
        .to(".effet2", {
            opacity: 0, scrollTrigger: {
                trigger: ".effet2",
                scrub: 3, ease: "linear",
                // markers: true,
                start: "top 45%",
                // stagger:0.5,
                scrub: true
                // pin:true,
                // pinSpacing:false
            }
        })
        .to(".effet1", {
            opacity: 0, scrollTrigger: {
                trigger: ".effet3",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true,
                start: "top 50%"
                //  pin:true,
                //  pinSpacing:false
            }
        })
        .to(".effet3", {
            opacity: 0, scrollTrigger: {
                trigger: ".effet4",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true,
                start: "top 60%"
                //  pin:true
                //  pinSpacing:false
            }
        })

        .to(".section-4 .content1", {
            scrollTrigger: {
                trigger: ".section-4 .content1",
                pin: true,
                scrub: true,
                duration: 3
            }
        })
        .to(".effect4", {
            opacity: 0, scrollTrigger: {
                trigger: ".effect1",
                // scrub: 3, 
                // start: "top 40%",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true
                // pin:true,
                // pinSpacing:false
            }
        })
        .to(".effect2", {
            opacity: 0, scrollTrigger: {
                trigger: ".effect2",
                scrub: 3, ease: "linear",
                // markers: true,
                start: "top 45%",
                // stagger:0.5,
                scrub: true
                // pin:true,
                // pinSpacing:false
            }
        })
        .to(".effect1", {
            opacity: 0, scrollTrigger: {
                trigger: ".effect3",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true,
                start: "top 50%"
                //  pin:true,
                //  pinSpacing:false
            }
        })
        .to(".effect3", {
            opacity: 0, scrollTrigger: {
                trigger: ".effect4",
                ease: "linear",
                // markers: true,
                // stagger:0.5,
                scrub: true,
                start: "top 60%"
                //  pin:true
                //  pinSpacing:false
            }
        })

    var sliders = gsap.utils.toArray('.horizontal-slider');

    sliders.forEach((slider) => {

        gsap.to(slider, {
            scrollTrigger: {
                trigger: slider,
                start: 'top top',
                end: () => slider.scrollWidth > window.innerWidth ? '+=' + slider.scrollWidth : "+=" + 0,
                pin: true,
                scrub: true,
                invalidateOnRefresh: true
            },
            x: () => { return -(slider.scrollWidth - document.documentElement.clientWidth) },
            ease: 'none'
        });

    });


   

    tl.to("#container", {
        "--target": "0%",
        ease: "none",
        scrollTrigger: {
            trigger: "#container",
            markers: {
                startColor: "yellow",
                endColor: "#42a6e0",
                fontSize: "14px"
            },
            start: "top top",
            end: "+=1000",
             pin: true,
             pinSpacing:false,
            scrub: 1
        }
    });
})

//scroller time animation

