
  (()=>{
    const root=document.getElementById('mp-invitation');const q=s=>root.querySelector(s);let ctx=null,timer=null,playing=false,opening=false;
    const melody=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,659.25,783.99,1046.5,783.99,587.33,659.25,523.25,0];
    function phrase(){if(!ctx||!playing)return;const now=ctx.currentTime;melody.forEach((f,i)=>{if(!f)return;const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sine';osc.frequency.value=f;gain.gain.setValueAtTime(0,now+i*.65);gain.gain.linearRampToValueAtTime(.055,now+i*.65+.025);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.65+1.6);osc.connect(gain);gain.connect(ctx.destination);osc.start(now+i*.65);osc.stop(now+i*.65+1.65)});timer=setTimeout(phrase,melody.length*650)}
    function soundLabel(){q('#mp-music').textContent=playing?'♫ Silenciar música':'♫ Activar música';q('#mp-music').setAttribute('aria-pressed',String(playing))}
    async function startMusic(){try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;ctx=ctx||new AC();await ctx.resume();playing=true;phrase();soundLabel()}catch(e){playing=false;soundLabel()}}
    function stopMusic(){playing=false;clearTimeout(timer);if(ctx)ctx.suspend().catch(()=>{});soundLabel()}
    q('#mp-open').addEventListener('click',()=>{if(opening)return;opening=true;q('#mp-open').disabled=true;if(q('#mp-audio-choice').checked)startMusic();q('#mp-envelope').classList.add('mp-opening');setTimeout(()=>{q('#mp-cover').hidden=true;q('#mp-content').hidden=false;q('#mp-content').classList.add('mp-reveal');opening=false;q('#mp-open').disabled=false},1100)});
    q('#mp-envelope').addEventListener('click',()=>q('#mp-open').click());
    q('#mp-music').addEventListener('click',()=>playing?stopMusic():startMusic());
    q('#mp-close').addEventListener('click',()=>{stopMusic();q('#mp-content').hidden=true;q('#mp-cover').hidden=false;q('#mp-envelope').classList.remove('mp-opening')});
    function countdown(){let left=Math.max(0,Math.floor((new Date('2026-12-06T15:00:00-05:00').getTime()-Date.now())/1000));const days=Math.floor(left/86400);left%=86400;const hours=Math.floor(left/3600);left%=3600;const minutes=Math.floor(left/60),seconds=left%60;[['days',days],['hours',hours],['minutes',minutes],['seconds',seconds]].forEach(([k,v])=>q('#mp-'+k).textContent=String(v).padStart(2,'0'))}countdown();setInterval(countdown,1000);
    q('#mp-hearts').addEventListener('click',event=>{const b=event.target.closest('button[data-wish]');if(!b)return;b.textContent='♥';b.setAttribute('aria-pressed','true');q('#mp-wish-text').textContent=b.dataset.wish});
    q('#mp-calendar').addEventListener('click',()=>{const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Maria Paz//Baby Shower//ES','BEGIN:VEVENT','UID:maria-paz-babyshower-20261206','DTSTAMP:20261026T000000Z','DTSTART:20261206T200000Z','SUMMARY:Baby shower de María Paz','LOCATION:Caseta Comunal Santa Isabel\\, Dosquebradas\\, Risaralda','DESCRIPTION:Con Stefania y Juan Pablo. Ubicación: https://maps.app.goo.gl/dVxvytgC6hWUxA5A6','END:VEVENT','END:VCALENDAR'].join('\r\n');const url=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='baby-shower-maria-paz.ics';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)});
  })();
  
if(window.lucide)lucide.createIcons();
