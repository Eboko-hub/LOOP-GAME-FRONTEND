import {state} from './state.js';
import {showToast} from './ui.js';
export function connect(gameId,onMessage){disconnect();const url=new URL(state.settings.apiBase);url.protocol=url.protocol==='https:'?'wss:':'ws:';url.pathname='/ws';url.search=`?gameId=${encodeURIComponent(gameId)}${state.token?`&token=${encodeURIComponent(state.token)}`:''}`;try{state.ws=new WebSocket(url);}catch(e){showToast('WebSocket indisponible');return;}state.ws.onopen=()=>{state.wsConnected=true;};state.ws.onmessage=e=>{try{onMessage(JSON.parse(e.data));}catch{showToast('Message temps réel invalide');}};state.ws.onerror=()=>{state.wsConnected=false;};state.ws.onclose=()=>{state.wsConnected=false;};}
export function disconnect(){if(state.ws){state.ws.close();state.ws=null;}state.wsConnected=false;}
