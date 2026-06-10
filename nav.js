// nav.js — inject shared nav + mobile menu + orbs
(function () {
  const page = document.body.dataset.page || '';

  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'skills.html', label: 'Skills' },
    { href: 'cv.html', label: 'CV' },
    { href: 'contact.html', label: 'Contact' },
  ];

  const navHtml = `
    <nav>
      <a href="index.html" class="nav-logo"><img src="logo.png" alt="Zakiya logo"></a>
      <ul class="nav-links">
        ${links.map(l => `<li><a href="${l.href}" class="${page === l.label.toLowerCase() ? 'active' : ''}">${l.label}</a></li>`).join('')}
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
    </div>
    <div class="orb-wrap">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHtml);

  // hamburger
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
