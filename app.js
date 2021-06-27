document.getElementById('more-toggle-xp').addEventListener('click', function () {
    this.hidden = true;
    document.getElementById('more-content-xp').hidden = false;
  }, { once: true });

  document.getElementById('more-toggle-xp2').addEventListener('click', function () {
    this.hidden = true;
    document.getElementById('more-content-xp2').hidden = false;
  }, { once: true });

  document.getElementById('more-toggle-skill').addEventListener('click', function () {
    this.hidden = true;
    document.getElementById('more-content-skill').hidden = false;
  }, { once: true });

  // animation name

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 900,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 100000
  });