import {esc} from './ui.js';
export function renderBoard(game,onPoint){const rows=game.rows,cols=game.cols,stones=game.stones||{};let html=`<div class="board-frame"><div class="board" style="--rows:${rows};--cols:${cols}">`;
for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const k=`${r},${c}`,v=stones[k]||'';html+=`<button class="point ${v==='BLUE'?'has-blue':''} ${v==='RED'?'has-red':''}" data-r="${r}" data-c="${c}" aria-label="Point ${r+1}, ${c+1}" ${v?'disabled':''}><span class="grid-dot"></span>${v?`<span class="stone ${v==='BLUE'?'blue':'red'}"></span>`:''}</button>`;}html+='</div></div>';return html;}
export function bindBoard(onPoint){document.querySelectorAll('.point:not([disabled])').forEach(b=>b.addEventListener('click',()=>onPoint(Number(b.dataset.r),Number(b.dataset.c))));}
