document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.util-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.flow-nav-node.clickable').forEach(node => {
    const href = node.getAttribute('href');
    if (href === path) {
      node.classList.add('current');
    }
  });

  const navToggle = document.querySelector('.nav-toggle');
  const utilNav = document.querySelector('.util-nav');
  if (navToggle && utilNav) {
    navToggle.addEventListener('click', () => {
      utilNav.classList.toggle('open');
    });
  }
});
