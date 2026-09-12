const defaults={apiBase:window.location.origin,board:'13x13',sound:true,vibrate:true,theme:'dark'};
function read(key,fallback){try{const v=localStorage.getItem(key);return v===null?fallback:JSON.parse(v);}catch{return fallback;}}
export const state={screen:'splash',token:localStorage.getItem('loop_token')||'',user:read('loop_user',null),settings:{...defaults,...read('loop_settings',{})},game:null,ws:null,wsConnected:false,remainingMs:600000,timerId:null,queueId:null};
export function persist(){localStorage.setItem('loop_token',state.token);localStorage.setItem('loop_user',JSON.stringify(state.user));localStorage.setItem('loop_settings',JSON.stringify(state.settings));}
export function logoutState(){state.token='';state.user=null;state.game=null;state.queueId=null;state.ws?.close();state.ws=null;persist();}
export function setScreen(name){state.screen=name;}
