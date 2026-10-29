(()=>{const root=document.documentElement;let saved;try{saved=localStorage.getItem('jinghua-theme')}catch{}root.dataset.theme=saved==='dark'?'dark':'light';const media=matchMedia('(prefers-color-scheme: dark)');const dark=()=>root.dataset.theme?root.dataset.theme==='dark':media.matches;document.addEventListener('DOMContentLoaded',()=>{const button=document.querySelector('.theme-toggle');if(!button)return;const update=()=>{button.querySelector('span').textContent=dark()?'Light mode':'Dark mode';button.setAttribute('aria-label',dark()?'Switch to light mode':'Switch to dark mode');button.setAttribute('aria-pressed',String(dark()))};update();button.addEventListener('click',()=>{root.dataset.theme=dark()?'light':'dark';try{localStorage.setItem('jinghua-theme',root.dataset.theme)}catch{}update()});media.addEventListener('change',update)})})();
// Replace the initials with theme-aware profile photos.
(() => {
  const scriptUrl = document.currentScript.src;
  const darkPhoto = new URL("../img/avatar-dark.png", scriptUrl).href;
  const lightPhoto = new URL("../img/avatar-light.jpg", scriptUrl).href;

  document.addEventListener("DOMContentLoaded", () => {
    const initials = document.querySelector(".profile .monogram");
    if (!initials) return;

    const avatar = document.createElement("div");
    avatar.className = "profile-avatar";
    avatar.innerHTML = `
      <img class="avatar-light" src="${lightPhoto}" alt="Jinghua Xi">
      <img class="avatar-dark" src="${darkPhoto}" alt="Jinghua Xi">
    `;
    initials.replaceWith(avatar);
  });
})();

// Desktop reading scale; independent of the browser's own zoom setting.
(() => {
  const root = document.documentElement;
  const choices = ['0.8', '0.9', '1', '1.1'];
  let saved;
  try { saved = localStorage.getItem('jinghua-page-scale'); } catch {}
  const initial = choices.includes(saved) ? saved : '0.9';
  root.style.setProperty('--page-scale', initial);

  document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-toggle');
    if (!themeButton) return;
    const controls = document.createElement('div');
    controls.className = 'display-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Display settings');
    const label = document.createElement('label');
    label.className = 'page-scale-control';
    const text = document.createElement('span');
    text.className = 'sr-only';
    text.textContent = 'Page display scale';
    const select = document.createElement('select');
    select.id = 'page-scale';
    for (const value of choices) {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = `${Math.round(Number(value) * 100)}%`;
      select.append(option);
    }
    select.value = initial;
    select.addEventListener('change', () => {
      root.style.setProperty('--page-scale', select.value);
      try { localStorage.setItem('jinghua-page-scale', select.value); } catch {}
    });
    label.append(text, select);
    controls.append(label, themeButton);
    document.body.append(controls);
    if (!CSS.supports('zoom', '0.9')) label.hidden = true;
  });
})();
