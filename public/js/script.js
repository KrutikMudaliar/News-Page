const modeToggle = document.getElementById('modeToggle');
const anchors = document.getElementsByClassName('news_card');

modeToggle.addEventListener('change', toggleMode);

function toggleMode() {
  document.body.classList.toggle('body-dark-mode');
  Array.prototype.forEach.call(anchors, function(anchor) {
    anchor.classList.toggle('news_card_dark');
   });
}
