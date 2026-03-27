// CAPSYS — Main JavaScript (multilingual edition)

document.addEventListener('DOMContentLoaded', () => {

  // ── Init language engine ──
  CAPSYS_LANG.init();

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── Mobile nav toggle ──
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Hero page body class ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'index.html' || currentPage === '') {
    document.body.classList.add('hero-page');
  }

  // ── Filter buttons ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Type selector (appointments) ──
  document.querySelectorAll('.type-card').forEach(card => {
    card.addEventListener('click', () => {
      card.closest('.type-selector').querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // ── Payment method selector ──
  document.querySelectorAll('.pay-method').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.payment-methods').querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const methodName = btn.querySelector('span')?.textContent.trim() || '';
      const cardFields = document.getElementById('cardFields');
      if (cardFields) {
        cardFields.style.display = (methodName === 'Carte bancaire' || methodName === 'Credit card' || methodName === 'Tarjeta bancaria' || methodName === 'Kat bankè') ? 'block' : 'none';
      }
    });
  });

  // ── Forms ──
  const contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  await fetch("https://formspree.io/f/mreoboke", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  const T = TRANSLATIONS.contact;
  const lang = CAPSYS_LANG.current;

  showModal(
    T.modal_icon,
    T.modal_h[lang],
    T.modal_p[lang],
    T.modal_close[lang],
    () => contactForm.reset()
  );
});

  const apptForm = document.getElementById('apptForm');
  if (apptForm) {
    apptForm.addEventListener('submit', e => {
      e.preventDefault();
      const T = TRANSLATIONS.appt;
      const lang = CAPSYS_LANG.current;
      showModal(T.modal_icon, T.modal_h[lang], T.modal_p[lang], T.modal_close[lang], () => {
        apptForm.reset();
        window.scrollTo(0, 0);
      });
    });
  }

  const donateForm = document.getElementById('donateForm');
  if (donateForm) {
    donateForm.addEventListener('submit', e => {
      e.preventDefault();
      const T = TRANSLATIONS.donate;
      const lang = CAPSYS_LANG.current;
      showModal(T.modal_icon, T.modal_h[lang], T.modal_p[lang], T.modal_close[lang], () => donateForm.reset());
    });
  }

  // ── Donation amount buttons ──
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const wrap = document.getElementById('customAmountWrap');
      if (wrap) {
        if (btn.dataset.amount === 'custom') { wrap.style.display = 'block'; }
        else { wrap.style.display = 'none'; updateImpact(parseInt(btn.dataset.amount)); }
      }
    });
  });

  function updateImpact(amount) {
    const msg = document.getElementById('impactMsg');
    if (!msg) return;
    const lang = CAPSYS_LANG.current;
    const T = TRANSLATIONS.donate;
    if (amount <= 10)       msg.textContent = T.i10[lang] + ' — ' + T.i10s[lang];
    else if (amount <= 25)  msg.textContent = T.i25[lang] + ' — ' + T.i25s[lang];
    else if (amount <= 50)  msg.textContent = T.i50[lang] + ' — ' + T.i50s[lang];
    else if (amount <= 100) msg.textContent = T.i100[lang] + ' — ' + T.i100s[lang];
    else                    msg.textContent = T.i250[lang] + ' — ' + T.i250s[lang];
  }
  window.updateImpact = updateImpact;

  // ── Card number formatting ──
  document.querySelectorAll('input[data-card-num]').forEach(cardNum => {
    cardNum.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
    });
  });
  document.querySelectorAll('input[data-card-exp]').forEach(expiry => {
    expiry.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 3) v = v.substring(0,2) + '/' + v.substring(2);
      e.target.value = v;
    });
  });

  // ── Toast notification ──
  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast); }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
  window.showToast = showToast;

  // ── Modal ──
  function showModal(icon, title, body, closeTxt, onClose) {
    let overlay = document.getElementById('modalOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.id = 'modalOverlay';
      overlay.innerHTML = `<div class="modal-box"><div class="modal-icon" id="modalIcon"></div><h3 id="modalTitle"></h3><p id="modalBody"></p><button class="btn-primary" id="modalClose" style="width:100%;justify-content:center;"></button></div>`;
      document.body.appendChild(overlay);
    }
    document.getElementById('modalIcon').textContent = icon;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').textContent = body;
    document.getElementById('modalClose').textContent = closeTxt || 'Close';
    overlay.classList.add('open');
    document.getElementById('modalClose').onclick = () => {
      overlay.classList.remove('open');
      if (onClose) onClose();
    };
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  }
  window.showModal = showModal;

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.service-card, .activity-card, .testimonial-card, .team-card, .mv-card, .impact-item');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.style.opacity = '1';
          el.target.style.transform = 'translateY(0)';
          obs.unobserve(el.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
      obs.observe(el);
    });
  }
});
