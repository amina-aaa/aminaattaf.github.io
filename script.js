// année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior: "smooth"});
    }
  });
});

// gestion des modales
document.addEventListener('click', e => {
  const card = e.target.closest('.proj-card');
  if(card){
    const id = card.dataset.projid;
    const modal = document.getElementById(id);
    if(modal) modal.showModal();
  }

  if(e.target.matches('[data-close]')){
    e.target.closest('dialog').close();
  }
});
