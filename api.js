import {state} from './state.js';
function base(){return state.settings.apiBase.replace(/\/$/,'');}
export async function request(path,options={}){
  const headers={'Content-Type':'application/json',...(options.headers||{})};
  if(state.token)headers.Authorization=`Bearer ${state.token}`;
  const response=await fetch(base()+path,{...options,headers});
  const type=response.headers.get('content-type')||'';
  const data=type.includes('application/json')?await response.json():await response.text();
  if(!response.ok)throw new Error(typeof data==='object'&&data?.error?data.error:`Erreur HTTP ${response.status}`);
  return data;
}
export const api={
  health:()=>request('/api/health'),
  register:(payload)=>request('/api/register',{method:'POST',body:JSON.stringify(payload)}),
  login:(payload)=>request('/api/login',{method:'POST',body:JSON.stringify(payload)}),
  me:()=>request('/api/me'),
  join:(payload)=>request('/api/matchmaking/join',{method:'POST',body:JSON.stringify(payload)}),
  leave:()=>request('/api/matchmaking/leave',{method:'POST'}),
  game:(id)=>request(`/api/games/${encodeURIComponent(id)}`),
  move:(id,point)=>request(`/api/games/${encodeURIComponent(id)}/move`,{method:'POST',body:JSON.stringify({point})}),
  leaderboard:()=>request('/api/leaderboard'),
  finish:(id)=>request(`/api/games/${encodeURIComponent(id)}/finish`,{method:'POST'})
};
