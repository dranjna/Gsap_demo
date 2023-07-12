
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
let sections = gsap.utils.toArray(".panel");


let FollowBox = "#Wrap .FollowBox";
gsap.set(FollowBox, {
  xPercent: -50, yPercent: -50, scale: 0,
});

window.addEventListener('mousemove', e => {
  gsap.to(FollowBox, 0.5, {
    x: e.clientX, y: e.clientY, stagger: 0.15, ease: "none",
    scrollTrigger: {
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
    }

  });

  let TL = gsap.timeline({
    defaults: { duration: 0.5, ease: "none", },
  })
  TL.to(FollowBox, {
    scale: 1,
    stagger: { amount: 0.15, from: "start", ease: "none" },
    scrollTrigger: {
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
    }
  })
  TL.to(FollowBox, {
    scale: 0,
    stagger: { amount: 0.15, from: "end", ease: "none" },
    scrollTrigger: {
      trigger: ".smooth-scroll",
      scroller: ".smooth-scroll",
    }
  }, "<+=2.5")
});






gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scroller: ".smooth-scroll",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

// gsap.config({ trialWarn: false });

//     gsap.to("#container", {
//         "--target": "0%",
//         ease: "none",
//         scrollTrigger: {
//             trigger: "#container",
//             markers: {
//                 startColor: "yellow",
//                 endColor: "#42a6e0",
//                 fontSize: "14px"
//             },
//             start: "top top",
//             end: "+=1000",
//              pin: true,
//              pinSpacing:false,
//             scrub: 1
//         }
//     });




const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, { yPercent: 101 })

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")

  ScrollTrigger.create({
    trigger: ".gallery",
    scroller: ".smooth-scroll",
    start: "top top",
    end: "bottom bottom",
    pin: ".right"
  })

  //create scrolltrigger for each details section
  //trigger photo animation when headline of each details section 
  //reaches 80% of window height
  details.forEach((detail, index) => {

    let headline = detail.querySelector("h1")
    let animation = gsap.timeline()
      .to(photos[index], { yPercent: 0 })
      .set(allPhotos[index], { autoAlpha: 0 })
    ScrollTrigger.create({
      trigger: headline,
      scroller: ".smooth-scroll",
      start: "top 80%",
      end: "top 50%",
      animation: animation,
      scrub: true,
      markers: false
    })
  })



  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
    console.log("mobile")
  };
});








const races = document.querySelector(".races");
console.log("window.innerWidth", window.innerWidth)


let racesWidth = races.scrollWidth;
console.log("racesWidth===", racesWidth)
let amountToScroll = racesWidth - window.innerWidth;
console.log("amountToScroll========", -amountToScroll)


gsap.to(races, {
  x: -amountToScroll,
  duration: 3,
  ease: "none",
  scrollTrigger: {
    trigger: ".racesWrapper",
    scroller: ".smooth-scroll",
    start: "top 20%",
    end: "+=" + amountToScroll,
    pin: ".racesWrapper",
    // animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true
  }
});

gsap.set(".scaleup", { scale: 0 })
gsap.to(".scaleup", {
  scale: 1, scrollTrigger: {
    trigger: ".races",
    scroller: ".smooth-scroll",
    scrub: true
  }
}, 0)




let animation = gsap.timeline({ repeat: 20 })


gsap.set(".demo", { autoAlpha: 1 })
animation.from(".demo div", { y: 80, opacity: 0, stagger: 1 })
  .to(".demo div", { y: -80, opacity: 0, stagger: 1 }, 1)



gsap.set(".firstContainer h1", { y: 200, opacity: 0 })
gsap.to(".firstContainer h1 ", {
  y: 80, opacity: 1, ease: "bounce", duration: 3, stagger: {
    each: 1
  }
})
gsap.set(".first-span ", { opacity: 0 })
gsap.to(".first-span ", {
  opacity: 1, ease: "bounce", duration: 3, stagger: {
    each: 1
  }
})


/**************slide text************ */

let tl2 = gsap.timeline();
tl2.to("#scrollingText", {
  x: 1000,
  duration: 50,
  repeat: -1,
  ease: 'linear'
})
let tl = gsap.timeline();
tl.to('#scrollingText', {
  xPercent: 15,
  scrollTrigger: {
    trigger: "#scrollingText",
    scroller: ".smooth-scroll",
    scrub: 1
  }
})




// $(document).scroll(function () {
//   var scroll = $(window).scrollTop();
//   var amount = -160 + (scroll * 0.8);
//   if (amount < 10) {
//     $('.letter').css({ left: amount + "px" });
//   }
// });



let reveal = document.querySelectorAll(".reveal")

reveal.forEach((el) => {
  let headings = el.querySelectorAll("h3, p")
  let btn = el.querySelector(".btn")
  gsap.set(headings, { opacity: 0 })
  gsap.set(btn, { opacity: 0 })
  let article = gsap.timeline()
  article.to(headings, { y: -50, stagger: 1, opacity: 1 })
  // .to(headings, { opacity: 1, y: 0 })
  article.to(btn, { y: -50, opacity: 1 })
  // .to(btn, { opacity: 1, y: 0 })
  ScrollTrigger.create({
    scroller: ".smooth-scroll",
    trigger: el,
    start: "center 100%",
    end: "top 50%",
    markers: true,
    // pin: true,
    // scrub: true,
    toggleActions: "play none none reverse ",
    animation: article
  })
})


/**************GALLERY**************** */
let desktopContentSection = document.querySelectorAll(".desktopContentSection")

desktopContentSection.forEach((el) => {
  let headings = el.querySelectorAll("h1, p")

  gsap.set(headings, { opacity: 0 })
  let desk_time = gsap.timeline()
  desk_time.to(headings, { y: -50, stagger: 1, opacity: 1 })


  ScrollTrigger.create({
    trigger: el,
    scroller: ".smooth-scroll",
    start: "center 100%",
    end: "top 50%",
    markers: true,
    // pin: true,
    // scrub: true,
    toggleActions: "play none none reverse ",
    animation: desk_time
  })
})


/**************paralax*********** */

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray(".paralax").forEach((section, i) => {
  section.bg = section.querySelector(".bg");

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top",
      end: "bottom top",
      scrub: true,
      scroller: ".smooth-scroll",
      invalidateOnRefresh: true // to make it responsive
    }
  });

});

/**************pinned image********* */
const pinnedImages = document.querySelectorAll('.pinned-image');
pinnedImages.forEach(pinnedImage => {
  const container = pinnedImage.querySelector('.pinned-image__container');
  const image = container.querySelector('img');
  const overlay = container.querySelector('.pinned-image__container-overlay');
  const tl = gsap.timeline({ paused: true });
  tl.to(container, {
    scale: 1.1,
  }, 0);
  tl.from(overlay, {
    autoAlpha: 0,
  }, 0);
  const trigger = ScrollTrigger.create({
    animation: tl,
    trigger: pinnedImage,
    start: "top top",
    markers: false,
    pin: true,
    scroller: ".smooth-scroll",
    scrub: true,
  });
});

/*********scale up images******* */
let LandingPageScrollTrigger = gsap.timeline({
  scrollTrigger: {
    trigger: "#ImgWrapper",
    start: "0% 0%",
    end: "100% 0%",
    scroller: ".smooth-scroll",
    pin: "#ImgWrapper",
    scrub: 2.2,
  }
})
LandingPageScrollTrigger
  .to('#ImgWrapper #img7', { transform: 'translateZ(4500px)', }, 0)
  .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)', }, 0)
  .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)', }, 0)
  .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)', }, 0)
  .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)', }, 0)
  .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)', }, 0)
  .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)', }, 0)
  .from('#codeby a', { y: 130, opacity: 0 }, 0.31)



/*************quotes randomly moving */
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();