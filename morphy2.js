// Using GSAP's MorphSVG plugin
document.getElementById('explore-btn').addEventListener('click', function() {
    gsap.to(".home", {duration: 1, morphSVG:".main-content"});
  });
  