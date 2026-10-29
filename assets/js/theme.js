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