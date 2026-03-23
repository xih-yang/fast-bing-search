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
  } else {
    // 阻止默认提交
    e.preventDefault();
    // 构造带有去广告参数的搜索URL
    const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(v)}&adlt=strict`;
    window.open(searchUrl);
  }
});
