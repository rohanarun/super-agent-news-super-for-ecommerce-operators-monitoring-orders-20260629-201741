(function(){
  // Guarded GSAP animations
  function initAnimations(){
    if(!window.gsap){return;}
    gsap.from('.hero h1', {opacity:0, y:30, duration:1});
    gsap.from('.hero-sub', {opacity:0, y:20, duration:0.8, delay:0.2});
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();