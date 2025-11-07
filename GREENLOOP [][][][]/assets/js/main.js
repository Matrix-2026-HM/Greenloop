// main interactions for GreenLoop homepage
document.addEventListener('DOMContentLoaded', ()=>{

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menuToggle && menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // reveal on scroll
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=> {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('show');
    });
  }, {threshold: 0.12});
  els.forEach(el => io.observe(el));

  // back-to-top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 350) toTop.style.display = 'block';
    else toTop.style.display = 'none';
  });
  toTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

});
