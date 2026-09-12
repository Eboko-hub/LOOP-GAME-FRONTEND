import {state} from './state.js';
import {screens} from './screens.js';
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
window.addEventListener('error',event=>{console.error(event.error||event.message);});
window.addEventListener('unhandledrejection',event=>{console.error(event.reason);});
screens.splash();
