import {state} from './state.js';
const app=document.querySelector('#app');
export const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function showToast(message){const t=document.querySelector('#toast');t.textContent=message;t.hidden=false;clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.hidden=true,2800);}
export function setView(html,{nav=true}={}){app.innerHTML=`<div class="app-shell"><header class="topbar"><button class="icon-btn" id="menuBtn" aria-label="Menu">☰</button><div class="brand">LOOP<span>GAME</span></div><div class="status-dot ${state.wsConnected?'online':''}" title="Connexion"></div></header><main class="content">${html}</main>${nav?navBar():''}</div>`;document.querySelector('#menuBtn')?.addEventListener('click',()=>document.querySelector('.drawer')?.classList.toggle('open'));}
function navBar(){return `<nav class="bottom-nav"><button data-route="home">⌂<small>Accueil</small></button><button data-route="profile">◉<small>Profil</small></button><button data-route="stats">▣<small>Stats</small></button><button data-route="leaderboard">★<small>Classement</small></button></nav>`;}
export function bindNav(handler){document.querySelectorAll('[data-route]').forEach(b=>b.addEventListener('click',()=>handler(b.dataset.route)));}
export function loading(title='Chargement…'){setView(`<section class="center loading"><div class="spinner"></div><h2>${esc(title)}</h2></section>`,{nav:false});}
export function field(label,id,type='text',extra=''){return `<label class="field"><span>${esc(label)}</span><input id="${id}" type="${type}" ${extra}></label>`;}
export function formatTime(ms){const total=Math.max(0,Math.ceil(ms/1000));return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;}
