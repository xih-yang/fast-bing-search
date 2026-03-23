let wallpapers = [
  "https://s41.ax1x.com/2026/03/23/peuzm6O.jpg",
  "https://s41.ax1x.com/2026/03/23/peuztc8.png"
];

let currentBg = localStorage.getItem('bg') || wallpapers[0];

if (currentBg) {
  document.body.style.backgroundImage = `url(${currentBg})`;
}

function renderThumbs() {
  const list = document.getElementById('thumbList');
  list.innerHTML = '';
  wallpapers.forEach(url => {
    const img = new Image();
    img.src = url;
    img.className = 'thumb';
    if (url === currentBg) img.classList.add('active');
    img.onclick = () => setBackground(url);
    list.appendChild(img);
  });
}

function setBackground(url) {
  currentBg = url;
  document.body.style.backgroundImage = `url(${url})`;
  localStorage.setItem('bg', url);
  renderThumbs();
}

function addImageLink() {
  let link = prompt("请输入图片链接：");
  if (link && link.trim()) {
    wallpapers.unshift(link.trim());
    localStorage.setItem('wallpapers', JSON.stringify(wallpapers));
    setBackground(link);
  }
}

document.getElementById('changeBg').addEventListener('click', function(){
  const panel = document.getElementById('bgPanel');
  panel.classList.toggle('show');
  renderThumbs();
});

document.getElementById('addBtn').addEventListener('click', addImageLink);

const inp = document.querySelector('input');
document.querySelector('form').addEventListener('submit', function(e){
  let v = inp.value.trim();
  if (/^https?:\/\//.test(v) || /\.\w+$/.test(v)) {
    e.preventDefault();
    window.open(v);
  }
});

renderThumbs();