function buildSidebar() {
  const tools = [
    { name: 'Oracle & Inspiration', icon: '✨', src: 'https://perchance.org/nimble-oracle-basic' },
    { name: 'NPC Dialogue', icon: '🗣️', src: 'https://perchance.org/nimble-npc-dialogues' },
    { name: 'Name Generator', icon: '📛', src: 'https://perchance.org/nimble-names' },
    { name: 'Monster Encounter (Nimble)', icon: '⚔️', src: 'https://perchance.org/nimble-monster-encounters' },
    { name: 'Monster Encounter (Pixel)', icon: '💠', src: 'https://perchance.org/nimbleesque-monster-encounters' },
    { name: 'Treasure', icon: '💎', src: 'https://perchance.org/nimblesque-treasures' },
    { name: 'Luck Table', icon: '🎲', src: null }
  ];

  const luckTableHTML = `
    <div class="luck-table">
      <p><strong>Luck Points</strong> can be spent during play to influence outcomes.</p>
      <table>
        <thead><tr><th>Spend</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td>1 Luck</td><td>Reroll any single die</td></tr>
          <tr><td>1 Luck</td><td>Add or remove a detail from the scene</td></tr>
          <tr><td>2 Luck</td><td>Auto-succeed a check (no roll needed)</td></tr>
          <tr><td>2 Luck</td><td>Escape a deadly situation</td></tr>
          <tr><td>3 Luck</td><td>Introduce a major narrative twist in your favor</td></tr>
        </tbody>
      </table>
      <p style="margin-top:0.5rem; font-size:0.8rem; color:var(--text-tertiary);">Characters start with 3 Luck. Gain 1 Luck when you roll doubles on exploration.</p>
    </div>`;

  let html = '<div class="sidebar-title">Toolkit</div>';

  tools.forEach(tool => {
    const panelContent = tool.src
      ? `<iframe data-src="${tool.src}" data-unloaded="true" title="${tool.name}" loading="lazy"></iframe>`
      : luckTableHTML;

    html += `
      <div class="sidebar-tool">
        <button class="sidebar-tool-btn">
          <span class="tool-icon">${tool.icon}</span>
          <span>${tool.name}</span>
          <span class="tool-chevron">▶</span>
        </button>
        <div class="sidebar-tool-panel">${panelContent}</div>
      </div>`;
  });

  return html;
}

function buildAttribution() {
  return `This tool is free to use for anyone who already owns the content, is trying the system out, or cannot afford to buy it right now. If you enjoy Nimble and are able, please support the game by purchasing the official content at <a href="http://nimblerpg.com/" target="_blank">nimbleRPG.com</a>.`;
}

document.addEventListener('DOMContentLoaded', () => {
  const sidebarEl = document.getElementById('sidebar-mount');
  if (sidebarEl) sidebarEl.innerHTML = buildSidebar();

  document.querySelectorAll('.attribution-bar').forEach(el => {
    if (!el.innerHTML.trim()) el.innerHTML = buildAttribution();
  });
});
