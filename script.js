const TOTAL = 3;
const INTERVAL = 5000;
let cur = 0, timer = null;

// Slider code - only runs on homepage
const track  = document.getElementById('track');
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('#dots button');
const fills  = [document.getElementById('f0'), document.getElementById('f1'), document.getElementById('f2')];

// Only initialize slider if elements exist (homepage only)
if (track && slides.length > 0 && dots.length > 0) {
  function stopFill(i) {
    if (fills[i]) {
      fills[i].style.transition = 'none';
      fills[i].style.width = '0%';
    }
  }
  function startFill(i) {
    if (fills[i]) {
      fills[i].getBoundingClientRect(); // reflow
      fills[i].style.transition = `width ${INTERVAL}ms linear`;
      fills[i].style.width = '100%';
    }
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

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  
  if (btnPrev) btnPrev.onclick = () => goTo(cur - 1);
  if (btnNext) btnNext.onclick = () => goTo(cur + 1);
  
  dots.forEach(b => b.addEventListener('click', () => goTo(+b.dataset.i)));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  goTo(cur - 1);
    if (e.key === 'ArrowRight') goTo(cur + 1);
  });

  let tx = 0;
  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('touchstart', e => tx = e.touches[0].clientX, {passive:true});
    hero.addEventListener('touchend',   e => {
      const d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 40) goTo(d > 0 ? cur + 1 : cur - 1);
    });
  }

  // init
  startFill(0);
  timer = setInterval(() => goTo(cur + 1), INTERVAL);
}

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
// Course storage functions - available on all pages
const DEFAULT_COURSES = [
  { id:1, title:"Full-Stack Web Development", level:"Başlanğıc → Orta", duration:"6 ay", price:"1,200", description:"HTML/CSS, JS, React, Node.js, PostgreSQL. Tam stack developer ol, portfolio hazırla.", emoji:"🌐", badge:"Ən Populyar" },
  { id:2, title:"Python & Data Science", level:"Başlanğıc → İrəli", duration:"5 ay", price:"1,100", description:"Python, Pandas, NumPy, scikit-learn, ML əsasları. Data analyst ya da ML engineer ol.", emoji:"🐍", badge:"" },
  { id:3, title:"Cloud & DevOps", level:"Orta → İrəli", duration:"4 ay", price:"1,300", description:"AWS, Docker, Kubernetes, CI/CD. Bulud infrastrukturu qur, AWS sertifikatı al.", emoji:"☁️", badge:"" },
  { id:4, title:"Mobil Tətbiq (React Native)", level:"Başlanğıc → Orta", duration:"4 ay", price:"950", description:"iOS & Android üçün cross-platform tətbiq inkişaf etdir. App Store-da öz tətbiqin.", emoji:"📱", badge:"" },
  { id:5, title:"Kibertəhlükəsizlik", level:"Başlanğıc → Orta", duration:"5 ay", price:"1,150", description:"Etik hacking, penetrasyon testləri, network security. CompTIA Security+ hazırlığı.", emoji:"🛡️", badge:"" },
  { id:6, title:"Backend & Verilənlər Bazası", level:"Başlanğıc → Orta", duration:"4 ay", price:"1,000", description:"SQL, PostgreSQL, MongoDB, REST API, mikroservislər. Güclü backend mühəndisi ol.", emoji:"🗄️", badge:"" }
];

function getCourses() {
  const s = localStorage.getItem('cn_courses');
  return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_COURSES));
}

function saveCourses(courses) {
  localStorage.setItem('cn_courses', JSON.stringify(courses));
}