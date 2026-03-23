const bgImage = 'cat.jpg';
function setBackground() {
  document.body.style.backgroundImage = `url(${bgImage})`;
}
setBackground();
const inp = document.querySelector('input');
document.querySelector('form').addEventListener('submit', function(e){
  let v = inp.value.trim();
  if (/^https?:\/\//.test(v) || /\.\w+$/.test(v)) {
    e.preventDefault();
    window.open(v);
  }
});