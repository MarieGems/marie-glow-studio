// Collections as a 3D card stack: click, drag, use the buttons or the arrow keys. Without this script the cards stay as a plain list.
(function(){
  var root=document.querySelector('.coll');if(!root)return;
  var cards=[].slice.call(root.children);if(cards.length<2)return;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur=0;
  root.classList.add('cf');
  root.setAttribute('role','group');root.setAttribute('aria-roledescription','carousel');root.setAttribute('aria-label','Cake collections');
  var stage=document.createElement('div');stage.className='cf-stage';stage.tabIndex=0;
  stage.setAttribute('aria-label','Collections. Use the left and right arrow keys to change card.');
  cards.forEach(function(c){stage.appendChild(c);});
  root.appendChild(stage);
  var ui=document.createElement('div');ui.className='cf-ui';
  var prev=document.createElement('button');prev.type='button';prev.className='cf-arrow cf-prev';prev.setAttribute('aria-label','Previous collection');prev.innerHTML='<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6.5 1.5L3 5l3.5 3.5"/></svg>';
  var next=document.createElement('button');next.type='button';next.className='cf-arrow cf-next';next.setAttribute('aria-label','Next collection');next.innerHTML='<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3.5 1.5L7 5 3.5 8.5"/></svg>';
  var dots=document.createElement('div');dots.className='cf-dots';
  var live=document.createElement('p');live.className='sr';live.setAttribute('role','status');live.setAttribute('aria-live','polite');
  var names=cards.map(function(c){var h=c.querySelector('h2');return h?h.textContent:'Collection';});
  var dotEls=names.map(function(n,i){var b=document.createElement('button');b.type='button';b.className='cf-dot';b.setAttribute('aria-label','Show '+n);b.addEventListener('click',function(){go(i);});dots.appendChild(b);return b;});
  ui.appendChild(dots);root.appendChild(ui);stage.appendChild(prev);stage.appendChild(next);root.appendChild(live);
  function size(){var m=0;cards.forEach(function(c){m=Math.max(m,c.offsetHeight);});stage.style.height=(m+40)+'px';}
  function layout(){
    cards.forEach(function(c,i){
      var o=i-cur,a=Math.abs(o);
      c.style.setProperty('--o',o);c.style.setProperty('--a',a);
      c.style.zIndex=10-a;c.style.opacity=a>2?0:(1-a*.28);
      c.classList.toggle('on',a===0);
      c.setAttribute('aria-hidden',a===0?'false':'true');
      c.setAttribute('aria-label',names[i]+', '+(i+1)+' of '+cards.length);
      c.querySelectorAll('a,button').forEach(function(x){x.tabIndex=a===0?0:-1;});
      dotEls[i].setAttribute('aria-current',a===0?'true':'false');
      if(a!==0){c.style.removeProperty('--rx');c.style.removeProperty('--ry');}
    });
    live.textContent=names[cur]+', '+(cur+1)+' of '+cards.length+'.';
    prev.disabled=cur===0;next.disabled=cur===cards.length-1;
  }
  function go(i){cur=Math.max(0,Math.min(cards.length-1,i));layout();}
  prev.addEventListener('click',function(){go(cur-1);});
  next.addEventListener('click',function(){go(cur+1);});
  stage.addEventListener('keydown',function(e){
    if(e.key==='ArrowLeft'){go(cur-1);e.preventDefault();}
    if(e.key==='ArrowRight'){go(cur+1);e.preventDefault();}
  });
  cards.forEach(function(c,i){c.addEventListener('click',function(e){if(i!==cur){e.preventDefault();go(i);}},true);});
  var sx=null,moved=false;
  stage.addEventListener('pointerdown',function(e){sx=e.clientX;moved=false;});
  stage.addEventListener('pointermove',function(e){
    if(sx!==null&&Math.abs(e.clientX-sx)>8)moved=true;
    if(reduce||sx!==null)return;
    var c=cards[cur],r=c.getBoundingClientRect();
    var px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
    if(Math.abs(px)>.9||Math.abs(py)>.9){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');return;}
    c.style.setProperty('--ry',(px*8).toFixed(2)+'deg');c.style.setProperty('--rx',(-py*6).toFixed(2)+'deg');
  });
  stage.addEventListener('pointerleave',function(){var c=cards[cur];c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');});
  window.addEventListener('pointerup',function(e){
    if(sx===null)return;var d=e.clientX-sx;sx=null;
    if(Math.abs(d)>50&&moved){go(cur+(d<0?1:-1));}
  });
  window.addEventListener('resize',size);window.addEventListener('load',size);
  layout();size();setTimeout(size,400);
})();
