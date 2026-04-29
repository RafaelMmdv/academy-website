const TOTAL = 3;
const INTERVAL = 5000;
let cur = 0, timer = null;

const track  = document.getElementById('track');
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('#dots button');
const fills  = [document.getElementById('f0'), document.getElementById('f1'), document.getElementById('f2')];

function stopFill(i) {
  fills[i].style.transition = 'none';
  fills[i].style.width = '0%';
}
function startFill(i) {
  fills[i].getBoundingClientRect(); // reflow
  fills[i].style.transition = `width ${INTERVAL}ms linear`;
  fills[i].style.width = '100%';
}

function goTo(idx) {
  slides[cur].classList.remove('is-active');
  dots[cur].classList.remove('active');
  stopFill(cur);

  cur = (idx + TOTAL) % TOTAL;

  track.style.transform = `translateX(-${cur * 100}%)`;
  slides[cur].classList.add('is-active');
  dots[cur].classList.add('active');
  startFill(cur);

  clearInterval(timer);
  timer = setInterval(() => goTo(cur + 1), INTERVAL);
}

document.getElementById('btnPrev').onclick = () => goTo(cur - 1);
document.getElementById('btnNext').onclick = () => goTo(cur + 1);
dots.forEach(b => b.addEventListener('click', () => goTo(+b.dataset.i)));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  goTo(cur - 1);
  if (e.key === 'ArrowRight') goTo(cur + 1);
});

let tx = 0;
document.getElementById('hero').addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive:true});
document.getElementById('hero').addEventListener('touchend',   e => {
  const d = tx - e.changedTouches[0].clientX;
  if (Math.abs(d) > 40) goTo(d > 0 ? cur + 1 : cur - 1);
});

// init
startFill(0);
timer = setInterval(() => goTo(cur + 1), INTERVAL);

// Mobile menu toggle - shared across all pages
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });

  // Close mobile menu when link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });
}

// Contact page functions
function selectChip(el) {
  document.querySelectorAll('.t-chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
}

function submitForm() {
  const btn = document.querySelector('.submit-btn');
  btn.textContent = '✅ Göndərildi!';
  btn.style.background = '#059669';
  setTimeout(() => {
    btn.textContent = 'Göndər';
    btn.style.background = '#2563eb';
  }, 3000);
}
