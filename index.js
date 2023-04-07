const comingSoon = document.querySelector("#coming-soon");
const stayTuned = document.querySelector("#stay-tuned");
const arrow = document.querySelector("#arrow");

comingSoon.style.display = "none";
stayTuned.style.display = "none";
arrow.style.display = "none";

anime({
  targets: "#logo-svg path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2200,
  delay: 500,
  direction: "alternate",
  loop: false,
  complete: () => {
    anime({
      targets: "path",
      fill: "#ffffff",
      duration: 1500,
      easing: "easeInOutQuad",
      complete: () => {
        comingSoon.style.display = "block";
        stayTuned.style.display = "block";
        arrow.style.display = "block";
        anime({
          targets: comingSoon.querySelectorAll("span"),
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 1500,
          easing: "easeInOutQuad",
        });
        anime({
          targets: stayTuned,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 500,
          delay: 200,
          easing: "easeInOutQuad",
        });
        anime({
          targets: arrow,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 500,
          delay: 400,
          easing: "easeInOutQuad",
        });
      },
    });
  },
});
