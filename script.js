
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', ()=>{
    const title = card.dataset.title;
    const duration = card.dataset.duration;
    const role = card.dataset.role;
    const desc = card.dataset.desc;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-duration').textContent = duration;
    // show role only inside modal as requested
    document.getElementById('modal-role').textContent = '타악연주자로 참여';
    document.getElementById('modal-desc').textContent = desc || '';
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  });
});

document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', ()=>{
  document.getElementById('modal').classList.remove('show');
  document.getElementById('modal').setAttribute('aria-hidden','true');
}));

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    const modal = document.getElementById('modal');
    if(modal.classList.contains('show')) modal.classList.remove('show');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
