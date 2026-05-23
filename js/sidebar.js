document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar-tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.closest('.sidebar-tool');
      const wasOpen = tool.classList.contains('open');

      document.querySelectorAll('.sidebar-tool.open').forEach(t => {
        t.classList.remove('open');
        const iframe = t.querySelector('iframe');
        if (iframe && t !== tool) {
          iframe.removeAttribute('src');
          iframe.dataset.unloaded = 'true';
        }
      });

      if (!wasOpen) {
        tool.classList.add('open');
        const iframe = tool.querySelector('iframe');
        if (iframe && iframe.dataset.unloaded) {
          iframe.src = iframe.dataset.src;
          delete iframe.dataset.unloaded;
        }
      }
    });
  });

  const toggle = document.querySelector('.sidebar-mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
    });

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
  }
});
