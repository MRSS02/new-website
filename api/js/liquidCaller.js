document.addEventListener("DOMContentLoaded", () => {
    glassEffect = liquidGL({
	  snapshot: "body", // The area used for refraction, <body> recommended and default
      target: ".liquidGL", // CSS selector for the element(s) to glass-ify
      resolution: 2.0, // The quality of the snapshot
      refraction: 0.92, // Base refraction strength (0–1)
      bevelDepth: 0.6, // Intensity of the edge bevel (0–1)
      bevelWidth: 0.32, // Width of the bevel as a proportion of the element (0–1)
      frost: 4, // Subtle blur radius in px. 0 = crystal clear
      shadow: false, // Adds a soft drop-shadow under the pane
      specular: false, // Animated light highlights (slightly more GPU)
      reveal: "none", // Reveal animation
      tilt: false, // Whether tilt on hover is enabled
      tiltFactor: 5, // If tilt is enabled, how much tilt
      magnify: 1.4, // Magnification of lens content
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
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 500);

const intervalId2 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 1500);

const intervalId3 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 3000);


const intervalId4 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 4000);

const intervalId5 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 5000);

const intervalId6 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 6000);

const intervalId7 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 7000);

const intervalId8 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 8000);

const intervalId9 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 9000);

const intervalId10 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 10000);

const intervalId11 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 12000);


const intervalId12 = setTimeout(() => {
    liquidGL.registerDynamic(".bg-navbar");
    liquidGL.syncWith();
}, 12000);


