const comingSoon = document.querySelector("#coming-soon");
const stayTuned = document.querySelector("#stay-tuned");
const arrow = document.querySelector(".arrow");
const logo = document.querySelector("#logo-svg path");

comingSoon.style.opacity = "0";
stayTuned.style.opacity = "0";
arrow.style.opacity = "0";

anime({
  targets: logo,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2200,
  delay: 500,
  direction: "alternate",
  loop: false,
  complete: () => {
    anime({
      targets: "#logo-svg path",
      fill: "#ffffff",
      duration: 1500,
      easing: "easeInOutQuad",
      complete: () => {
        anime({
          targets: comingSoon,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 1500,
          easing: "easeInOutQuad",
        });
        anime({
          targets: stayTuned,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 1500,
          delay: 1200,
          easing: "easeInOutQuad",
        });
        anime({
          targets: arrow,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 500,
          delay: 2400,
          easing: "easeInOutQuad",
        });
      },
    });
  },
});

// Tried to make it rerun animation onclick

// anime({
//   targets: "#logo-svg path",
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "easeInOutSine",
//   duration: 2200,
//   delay: 500,
//   direction: "alternate",
//   loop: false,
//   complete: () => {
//     anime({
//       targets: "path",
//       fill: "#ffffff",
//       duration: 1500,
//       easing: "easeInOutQuad",
//     });
//   },
// });

// const logo = document.querySelector("#logo-svg path");

// function runAnimation() {
//   logo.style.fill = "none";
//   anime({
//     targets: "#logo-svg",
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: "easeInOutSine",
//     duration: 2200,
//     delay: 500,
//     direction: "alternate",
//     loop: false,
//     complete: () => {
//       anime({
//         targets: "path",
//         fill: "#ffffff",
//         duration: 1500,
//         easing: "easeInOutQuad",
//       });
//     },
//   });
// }

// logo.addEventListener("click", runAnimation);

// SCROLL ONCLICK ARROW

arrow.addEventListener("click", scrollToBottom);

function scrollToBottom() {
  console.log("scrolling");
  window.scrollTo(
    0,
    document.documentElement.scrollHeight || document.body.scrollHeight
  );
}

// SCROLL page

// window.addEventListener("scroll", scrollPage);

// function scrollPage() {
//   const scrollPosition = window.scrollY;

//   console.log(scrollPosition);
// }
