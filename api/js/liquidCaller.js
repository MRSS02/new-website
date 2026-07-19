let glassEfect;
let resizeTimeout = false;

document.addEventListener("DOMContentLoaded", () => {
    glassEffect = liquidGL({
	  snapshot: "body", // The area used for refraction, <body> recommended and default
      target: ".liquidGL", // CSS selector for the element(s) to glass-ify
      resolution: 2.0, // The quality of the snapshot
      refraction: 0.64, // Base refraction strength (0–1)
      bevelDepth: 0.48, // Intensity of the edge bevel (0–1)
      bevelWidth: 0.0985, // Width of the bevel as a proportion of the element (0–1)
      frost: 4, // Subtle blur radius in px. 0 = crystal clear
      shadow: true, // Adds a soft drop-shadow under the pane
      specular: true, // Animated light highlights (slightly more GPU)
      reveal: "fade", // Reveal animation
      tilt: false, // Whether tilt on hover is enabled
      tiltFactor: 5, // If tilt is enabled, how much tilt
      magnify: 1.0182, // Magnification of lens content
      on: {
        init(instance) {
          // The `init` callback fires once liquidGL has taken its snapshot
          // and rendered the first frame. It's the ideal place to hide or
          // prepare elements for reveal animations (e.g. with GSAP, ScrollTrigger)
          // because it ensures the content is visible to the snapshot before
          // you hide it from the user.
          console.log("liquidGL ready!", instance);
        },
      },
    });
	// Register an element by its CSS selector
    //liquidGL.registerDynamic(".navbar-header");

});

const intervalId = setTimeout(() => {
    liquidGL.registerDynamic(".nav-item-gl");
    liquidGL.registerDynamic(".img");
    liquidGL.syncWith();
}, 1000);

const intervalId = setTimeout(() => {
    liquidGL.registerDynamic(".nav-item-gl");
    liquidGL.registerDynamic(".img");
    liquidGL.syncWith();
}, 3000);

function syncLiquid() {
    if (resizeTimeout) {
        return;
    }
    resizeTimeout = true;
    let myTimeout = setTimeout(() => {
        liquidGL.registerDynamic(".img");
        liquidGL.syncWith();
        resizeTimeout = false;
    }, 250);
}

window.addEventListener("resize", syncLiquid);
