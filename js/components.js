function buildSidebar() {
  const tools = [
    { name: 'Oracle & Inspiration', icon: '✨', src: 'https://null.perchance.org/nimble-oracle-basic' },
    { name: 'NPC Dialogue', icon: '🗣️', src: 'https://null.perchance.org/nimble-npc-dialogues' },
    { name: 'Name Generator', icon: '📛', src: 'https://null.perchance.org/nimble-names' },
    { name: 'Random Event', icon: '🎭', src: 'https://null.perchance.org/nimble-random-events' },
    { name: 'Consequence', icon: '⚡', src: 'https://null.perchance.org/nimble-consequences' },
    { name: 'Monster Encounter (Nimble)', icon: '⚔️', src: 'https://null.perchance.org/nimble-monster-encounters' },
    { name: 'Monster Encounter (Pixel)', icon: '💠', src: 'https://null.perchance.org/nimbleesque-monster-encounters' },
    { name: 'Treasure', icon: '💎', src: 'https://null.perchance.org/nimblesque-treasures' },
    { name: 'Luck Table', icon: '🎲', src: null }
  ];

  const luckTableHTML = `
    <div class="luck-table">
      <p>+1 Luck on a miss or failed save. Max 5. Earning a 6th resets to 1d4. Reset to 0 on rest.</p>
      <table>
        <thead><tr><th>Cost</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Companion: +1 Extra Action</td></tr>
          <tr><td>2</td><td>Hero: +1 Extra Action</td></tr>
          <tr><td>3</td><td>Reroll any d20</td></tr>
          <tr><td>4</td><td>Turn any hit into a crit</td></tr>
          <tr><td>5</td><td>Recover 1 Hit Die</td></tr>
        </tbody>
      </table>
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

function buildFlowNav() {
  const a = '<span class="flow-nav-arrow">▶</span>';
  return `
    <span class="flow-nav-node dead info-node">Create Characters</span>${a}<a href="settlement.html" class="flow-nav-node clickable settlement-node">Settlement</a>${a}<a href="quest.html" class="flow-nav-node clickable quest-node">Quest</a>${a}<a href="wilderness.html" class="flow-nav-node clickable wilderness-node">Wilderness</a>${a}<a href="dungeon.html" class="flow-nav-node clickable dungeon-node">Dungeon</a>${a}<span class="flow-nav-node dead info-node">Complete Objective</span>${a}<span class="flow-nav-node dead return-node">Return to Settlement</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const sidebarEl = document.getElementById('sidebar-mount');
  if (sidebarEl) sidebarEl.innerHTML = buildSidebar();

  const flowNavEl = document.getElementById('flow-nav-mount');
  if (flowNavEl) flowNavEl.innerHTML = buildFlowNav();

  document.querySelectorAll('.attribution-bar').forEach(el => {
    if (!el.innerHTML.trim()) el.innerHTML = buildAttribution();
  });
});
