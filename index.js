const tl = gsap.timeline();

tl.from("#navBar img", {
  y: -30,
  duration: 1,
  delay: 0.1,
  opacity: 0,
  scale: 0,
});
tl.from("#navBar p", {
  y: 30,
  duration: 1.2,
  delay: 0.1,
  opacity: 0,
  scale: 0,
});
tl.from("#navBar button", {
  x: 100,
  duration: 1.5,
  delay: 0.1,
  opacity: 0,
  scale: 0,
  stagger: 0.1,
  ease: "bounce.out",
});

tl.from("#hersoSection p", {
  opacity: 0,
  scale: 0,
  duration: 1,
});

tl.from("#heroimg1", {
  x: -100,
  duration: 1.5,
  opacity: 0,
  ease: "bounce.out",
});
tl.from("#heroimg2", {
  x: 100,
  duration: 1.5,
  opacity: 0,
  ease: "bounce.out",
});
tl.from("#hersobtn button", {
  y: 20,
  duration: 1.5,
  opacity: 0,
});
tl.from("#hersobtn img", {
  opacity: 0,
  rotate: 360,
  duration: 2,
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to("#movingtext1", {
      transform: "translateX(-200%)",
      duration: 20,
      repeat: -1,

      ease: "none",
    });
  } else if (e.deltaY < 0) {
    gsap.to("#movingtext1", {
      transform: "translateX(0%)",
      duration: 20,
      repeat: -1,

      ease: "none",
    });
  }
});
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to("#movingtext2", {
      transform: "translateX(0%)",
      duration: 5,
      repeat: -1,

      ease: "none",
    });
  } else if (e.deltaY < 0) {
    gsap.to("#movingtext2", {
      transform: "translateX(-200%)",
      duration: 20,
      repeat: -1,

      ease: "none",
    });
  }
});

const updowns = document.querySelector("#updown");
const updowns2 = document.querySelector("#updown2");
const updowns3 = document.querySelector("#updown3");

updowns.addEventListener("mouseenter", () => {
  gsap.to("#up", {
    y: -20,
  });
  gsap.to("#down", {
    y: 20,
  });
});
updowns.addEventListener("mouseout", () => {
  gsap.to("#up", {
    y: 0,
    scale: 1,
  });
  gsap.to("#down", {
    y: 0,
    scale: 1,
  });
});
updowns2.addEventListener("mouseenter", () => {
  gsap.to("#up", {
    y: -20,
  });
  gsap.to("#down", {
    y: 20,
  });
});
updowns2.addEventListener("mouseout", () => {
  gsap.to("#up", {
    y: 0,
  });
  gsap.to("#down", {
    y: 0,
  });
});
updowns3.addEventListener("mouseenter", () => {
  gsap.to("#up", {
    y: -20,
  });
  gsap.to("#down", {
    y: 20,
  });
});
updowns3.addEventListener("mouseout", () => {
  gsap.to("#up", {
    y: 0,
  });
  gsap.to("#down", {
    y: 0,
  });
});

gsap.from("#bestsellers", {
  y: 100,

  duration: 2,
  scrollTrigger: "#bestsellers",
});
gsap.from("#bestsellersbtn", {
  y: 100,

  duration: 2,
  scrollTrigger: {
    trigger: "#bestsellersbtn",

    scroller: "body",
    start: "top 80%",

    toggleActions: "restart none none none",
  },
});
gsap.from("#bestsellersproduct", {
  scale: 0,

  duration: 2,

  scrollTrigger: {
    trigger: "#bestsellersproduct",

    scroller: "body",
    start: "top 80%",

    toggleActions: "restart none none none",
  },
});

const rotate = document.querySelector("#rotate img");

rotate.addEventListener("mouseenter", () => {
  gsap.to("#rotate img", {
    rotate: -30,
    scale: 1.2,
    ease: "normal",
  });
});
rotate.addEventListener("mouseout", () => {
  gsap.to("#rotate img", {
    rotate: 0,
    scale: 1,
    ease: "normal",
  });
});
const rotate2 = document.querySelector("#rotate2 img");

rotate2.addEventListener("mouseenter", () => {
  gsap.to("#rotate2 img", {
    rotate: -30,
    scale: 1.2,
    ease: "normal",
  });
});
rotate2.addEventListener("mouseout", () => {
  gsap.to("#rotate2 img", {
    rotate: 0,
    scale: 1,
    ease: "normal",
  });
});
const rotate3 = document.querySelector("#rotate3 img");

rotate3.addEventListener("mouseenter", () => {
  gsap.to("#rotate3 img", {
    rotate: -30,
    scale: 1.2,
    ease: "normal",
  });
});
rotate3.addEventListener("mouseout", () => {
  gsap.to("#rotate3 img", {
    rotate: 0,
    scale: 1,
    ease: "normal",
  });
});
const rotate4 = document.querySelector("#rotate4 img");

rotate4.addEventListener("mouseenter", () => {
  gsap.to("#rotate4 img", {
    rotate: -30,
    scale: 1.2,
    ease: "normal",
  });
});
rotate4.addEventListener("mouseout", () => {
  gsap.to("#rotate4 img", {
    rotate: 0,
    scale: 1,

    ease: "normal",
  });
});

const hoverbtnopen = document.querySelectorAll(".hoverbtnopen");

hoverbtnopen.forEach((btn) => {
  let chngbtn = btn.children[0].querySelector("button");
  let tween = gsap.to(chngbtn, {
    scale: 1.2,
    repeat: -1,
    yoyo: true,
    paused: true,
  });
  btn.addEventListener("mouseenter", () => {
    chngbtn.innerHTML = "Add to cart <i class='fa-solid fa-cart-plus'></i>";
    tween.play();
  });
  btn.addEventListener("mouseleave", (e) => {
    chngbtn.innerHTML = "<i class='fa-solid fa-cart-plus'></i>";
    tween.pause();
  });
});

gsap.from("#reliable", {
  x: -100,
  scrollTrigger: {
    trigger: "#reliable",

    start: "top 80%",
  },
});
gsap.from("#video", {
  x: 100,

  scrollTrigger: {
    trigger: "#video",

    start: "top 80%",
  },
});

gsap.to("#already", {
  transform: "translateX(-200%)",
  duration: 50,
  repeat: -1,

  ease: "none",
});

gsap.from("#categorie", {
  scale: 0,
  stagger: 0.2,

  duration: 2,

  scrollTrigger: {
    trigger: "#categorie",

    scroller: "body",
    start: "top 80%",

    toggleActions: "restart none none none",
  },
});

gsap.from("#productmoment", {
  x: -700,

  scrollTrigger: {
    trigger: "#productmoment",

    start: "top center",
  },
});
gsap.from("#myhand", {
  x: 700,

  scrollTrigger: {
    trigger: "#myhand",

    start: "top center",
  },
});

gsap.from("#advice", {
  x: 300,
  y: 300,

  scrollTrigger: {
    trigger: "#advice",
    start: "top 80%",
  },
});
gsap.from("#homedeliver", {
  x: -300,
  y: 300,

  scrollTrigger: {
    trigger: "#advice",
    start: "top 80%",
  },
});
gsap.from("#productcreated", {
  x: 300,
  y: -300,

  scrollTrigger: {
    trigger: "#productcreated",
    start: "top 80%",
  },
});
gsap.from("#customerservice", {
  x: -300,
  y: -300,

  scrollTrigger: {
    trigger: "#customerservice",
    start: "top 80%",
  },
});
gsap.from("#secureonline", {
  y: -300,

  scrollTrigger: {
    trigger: "#secureonline",
    start: "top 80%",
  },
});
gsap.from("#whoare", {
  y: 200,
  scale: 0,

  scrollTrigger: {
    trigger: "#whoare",
    start: "top 80%",
  },
});
gsap.from("#personpic", {
  scale: 0,

  scrollTrigger: {
    trigger: "#personpic",
    start: "top 80%",
  },
});
