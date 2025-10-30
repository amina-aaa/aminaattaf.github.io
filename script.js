// année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Modal handling using <dialog>
document.addEventListener('click', e=>{
  const card = e.target.closest('.proj-card');
  if(card){
    const id = card.dataset.projid;
    const dlg = document.getElementById(id);
    if(dlg){
      // open dialog (polyfill: dialog is widespread now)
      try{ dlg.showModal(); }
      catch(err){
        // fallback for older browsers
        dlg.style.display = 'block';
        dlg.setAttribute('open','');
      }
      // trap focus if needed (light)
      return;
    }
  }

  // close buttons
  const closeBtn = e.target.closest('[data-close]');
  if(closeBtn){
    const dlg = closeBtn.closest('dialog.proj-modal');
    if(dlg){
      try{ dlg.close(); }
      catch(err){ dlg.removeAttribute('open'); dlg.style.display='none'; }
    }
  }
});

// close modal on ESC
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('dialog.proj-modal').forEach(d=>{
      if(d.open) try{ d.close(); } catch(err){ d.removeAttribute('open'); d.style.display='none'; }
    });
  }
});


