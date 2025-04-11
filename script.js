function locomotiveScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

locomotiveScrollTrigger();

function loaderAnimation() {
  var tl2 = gsap.timeline();
  tl2.from("#loader h3", {
    duration: 1,
    x: 50,
    stagger: 0.1,
    opacity: 0,
    ease: "power2.inOut",
  });
  tl2.to("#loader", {
    duration: 1,
    opacity: 0,
    display: "none",
    ease: "power2.inOut",
  });
}

loaderAnimation();

function cursorEffect() {
  let page1 = document.querySelector("#page1");
  //   let cursor = document.querySelector("#cursor");

  page1.addEventListener("mousemove", (e) => {
    //   cursor.style.left = e.x + "px";
    //   cursor.style.top = e.y + "px";
    console.log(e.x, e.y);
    gsap.to("#cursor", {
      duration: 0.5,
      left: e.x + "px",
      top: e.y + "px",
      ease: "power1.out",
    });
  });

  page1.addEventListener("mouseenter", (e) => {
    gsap.to("#cursor", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
    });
  });

  page1.addEventListener("mouseleave", (e) => {
    gsap.to("#cursor", {
      duration: 0.5,
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect();

function Page2Animations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#elem",
      scroller: "#main",
      start: "top 50%",
      end: "top 40%",
      scrub: true,
    },
  });

  tl.from("#elem h3", {
    opacity: 0,
    x: 60,
    stagger: 0.2,
    duration: 2,
  });

  tl.from("#elem2 h3", {
    opacity: 0,
    x: 60,
    stagger: 0.2,
    duration: 2,
  });

  tl.from("hr", {
    opacity: 0,
    stagger: 0.2,
    duration: 2,
  });

  gsap.from("#hero h1", {
    opacity: 0,
    y: 120,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#hero h1",
      scroller: "#main",
      start: "top 50%",
      end: "top 40%",
      scrub: true,
    },
  });
}
Page2Animations();

function SwiperJS() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

SwiperJS();

function Page3Animations() {
  var page4 = document.querySelector(" #page4");
  var crsr = document.querySelector(".crsr");

  page4.addEventListener("mousemove", (e) => {
    gsap.to(crsr, {
      duration: 0.5,
      left: e.x + "px",
      top: e.y + 2800 + "px",
      ease: "power1.out",
    });
  });

  page4.addEventListener("mouseenter", (e) => {
    gsap.to("#cursor", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
    });
  });

  page4.addEventListener("mouseleave", (e) => {
    gsap.to("#cursor", {
      duration: 0.5,
      scale: 0,
      opacity: 0,
    });
  });
}

Page3Animations();
