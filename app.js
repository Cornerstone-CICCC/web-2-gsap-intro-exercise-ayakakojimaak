// PUT YOUR CODE HERE

document.addEventListener("DOMContentLoaded", () => {
  const fadeInOption = {
    x: "0",
    y: "0",
    ease: "power2.out",
    duration: 0.8,
  };

  const mv = gsap.timeline();
  gsap.set(".red", {
    x: "-100%",
    y: "-100%",
  });
  gsap.set(".green", {
    x: "100%",
    y: "-100%",
  });
  gsap.set(".blue", {
    x: "100%",
    y: "100%",
  });
  gsap.set(".yellow", {
    x: "-100%",
    y: "100%",
  });

  mv.to(".red", fadeInOption)
    .to(".green", fadeInOption)
    .to(".blue", fadeInOption)
    .to(".yellow", fadeInOption)
    .to(".box", {
      borderRadius: "50%",
      duration: 1,
    })
    .to(
      ".red",
      {
        x: "-100%",
        left: "100vw",
        duration: 1,
      },
      "<"
    )
    .to(
      ".green",
      {
        y: "-100%",
        top: "100vh",
        duration: 1,
      },
      "<"
    )
    .to(
      ".blue",
      {
        left: "0",
        duration: 1,
      },
      "<"
    )
    .to(
      ".yellow",
      {
        top: "0",
        duration: 1,
      },
      "<"
    )
    .to(
      ".box",
      {
        backgroundColor: function (index) {
          const array = ["red", "green", "blue", "yellow"];
          return index === 3 ? array[0] : array[index + 1];
        },
      },
      "<"
    )
    .to(".box", {
      x: function (index) {
        if (index === 0) {
          return "0";
        } else if (index === 1) {
          return "100%";
        } else {
          return "-100%";
        }
      },
    });
});
