// Demo: all data on this page is made up. No payment, no network calls.
(function(){
  var form=document.getElementById('builder'),sum=document.getElementById('sum'),review=document.getElementById('review'),live=document.getElementById('live'),bar=document.getElementById('bar');
  var names=['size','flavor','filling','icing','color','deco','deliv'],titles=['Size','Flavor','Filling','Icing','Icing color','Finish','Pickup'],req=document.getElementById('req');
  var picked=null;
  function pick(n){return form.querySelector('input[name="'+n+'"]:checked');}
  function money(n){return '$'+n;}
  function options(){var f=pick('filling');return {size:pick('size').value,flavor:pick('flavor').dataset.color,filling:f.value==='none'?null:f.dataset.color,icing:pick('color').dataset.color,deco:pick('deco').value};}
  function lines(){
    var t=0,h='';
    names.forEach(function(n,i){var r=pick(n),p=Number(r.dataset.price);t+=p;h+='<div><span>'+titles[i]+': '+r.dataset.label+'</span><b>'+(p&&n!=='size'?'+'+money(p):p?money(p):'')+'</b></div>';});
    return {html:h,total:t};
  }
  function pushViewer(){
    var o=options();
    if(window.CakeViewer&&window.CakeViewer.update)window.CakeViewer.update(o);
    var l='Illustration of a '+pick('size').dataset.label+' cake, '+pick('flavor').dataset.label+', '+(pick('filling').value==='none'?'no filling':pick('filling').dataset.label+' filling')+', '+pick('icing').dataset.label+' in '+pick('color').dataset.label+', '+pick('deco').dataset.label;
    var cv=document.querySelector('#viewer canvas');if(cv)cv.setAttribute('aria-label','3D '+l.replace('Illustration of a ','')+'. Drag or use the arrow keys to turn it.');
  }
  var shown=null,raf=0,reduceM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countTo(el,n){cancelAnimationFrame(raf);if(shown===null||reduceM){shown=n;el.textContent=money(n);return;}var from=shown,t0=null;function step(t){if(t0===null)t0=t;var p=Math.min(1,(t-t0)/350),e=1-Math.pow(1-p,3);shown=Math.round(from+(n-from)*e);var cur=sum.querySelector('.num');if(cur)cur.textContent=money(shown);if(p<1)raf=requestAnimationFrame(step);else{shown=n;}}raf=requestAnimationFrame(step);}
  function dateText(){return picked?picked.long:'Pick a date in step 2';}
  function update(){
    var L=lines();
    sum.innerHTML=L.html+'<div class="t"><span>Estimate</span><b class="num">'+money(shown)+'</b></div>';
    countTo(sum.querySelector('.num'),L.total);
    review.innerHTML=L.html+'<div><span>Date: '+dateText()+'</span><b></b></div><div class="t"><span>Estimate</span><b class="num">'+money(L.total)+'</b></div>';
    var text='Estimate '+money(L.total)+', '+pick('size').dataset.label;
    bar.textContent=text;live.textContent=text+'.';
    var bc=document.getElementById('bkcake');if(bc)bc.textContent=pick('size').dataset.label+', estimate '+money(L.total);
    pushViewer();
    var ps=new URLSearchParams();names.forEach(function(n){ps.set(n,pick(n).value);});
    var qs=ps.toString();if(req)req.setAttribute('href','request.html?'+qs);
    try{history.replaceState(null,'','?'+qs+location.hash);}catch(e){}
  }
  (function(){var q=new URLSearchParams(location.search);names.forEach(function(n){var v=q.get(n);if(!v)return;var r=form.querySelector('input[name="'+n+'"][value="'+v.replace(/[^a-z0-9]/gi,'')+'"]');if(r)r.checked=true;});})();
  form.addEventListener('change',update);
  // Step by step: one question at a time so the form does not start as a wall of options.
  (function(){
    var fs=[].slice.call(form.querySelectorAll('fieldset'));if(fs.length<2)return;
    form.classList.add('wiz');
    var cur=0,dir=1;
    var head=document.createElement('div');head.className='wizhead';
    var count=document.createElement('p');count.className='wizcount';count.setAttribute('aria-live','polite');
    var bar=document.createElement('div');bar.className='wizbar';
    var segs=fs.map(function(f,i){var b=document.createElement('button');b.type='button';b.className='wizseg';
      var name=f.querySelector('legend').textContent.replace(/^\d+\.\s*/,'');b.setAttribute('aria-label','Go to step '+(i+1)+': '+name);b.addEventListener('click',function(){go(i);});bar.appendChild(b);return b;});
    head.appendChild(count);head.appendChild(bar);form.insertBefore(head,form.firstChild);
    var nav=document.createElement('div');nav.className='wiznav';
    var back=document.createElement('button');back.type='button';back.className='btn alt small';back.textContent='Back';
    var nextB=document.createElement('button');nextB.type='button';nextB.className='btn small';
    var done=document.createElement('a');done.className='btn small';done.href='#date';done.textContent='Choose a date';
    nav.appendChild(back);nav.appendChild(nextB);nav.appendChild(done);form.appendChild(nav);
    back.addEventListener('click',function(){go(cur-1);});
    nextB.addEventListener('click',function(){go(cur+1);});
    function go(i,noFocus){
      i=Math.max(0,Math.min(fs.length-1,i));dir=i>=cur?1:-1;cur=i;
      fs.forEach(function(f,k){
        var on=k===cur;f.hidden=!on;f.classList.toggle('cur',on);
        if(on){f.classList.remove('fromL','fromR');void f.offsetWidth;f.classList.add(dir>0?'fromR':'fromL');}
      });
      var name=fs[cur].querySelector('legend').textContent.replace(/^\d+\.\s*/,'');
      count.textContent='Step '+(cur+1)+' of '+fs.length+': '+name;
      segs.forEach(function(s,k){s.classList.toggle('done',k<cur);s.classList.toggle('now',k===cur);s.setAttribute('aria-current',k===cur?'step':'false');});
      back.hidden=cur===0;
      var last=cur===fs.length-1;nextB.hidden=last;done.hidden=!last;
      nextB.textContent='Next: '+fs[Math.min(cur+1,fs.length-1)].querySelector('legend').textContent.replace(/^\d+\.\s*/,'');
      if(!noFocus){var lg=fs[cur].querySelector('legend');lg.tabIndex=-1;lg.focus({preventScroll:true});}
    }
    go(0,true);
  })();

  window.addEventListener('cakeviewer-ready',pushViewer);
  document.getElementById('rl').addEventListener('click',function(){window.CakeViewer&&CakeViewer.rotate(-0.4);});
  document.getElementById('rr').addEventListener('click',function(){window.CakeViewer&&CakeViewer.rotate(0.4);});

  // Calendar with made-up availability
  var today=new Date();today=new Date(today.getFullYear(),today.getMonth(),today.getDate());
  var view=new Date(today.getFullYear(),today.getMonth(),1),base=new Date(view);
  var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function status(d){
    var k=d.getFullYear()*372+d.getMonth()*31+d.getDate(),r=Math.imul(k,2654435761)>>>0;r=r%100;
    if(d.getDay()===0||d.getDay()===6)r-=20;
    return r<25?'booked':r<45?'few':'open';
  }
  function render(anim){
    var calEl=document.getElementById('cal');calEl.classList.remove('anim');if(anim){void calEl.offsetWidth;calEl.classList.add('anim');}
    document.getElementById('mname').textContent=MONTHS[view.getMonth()]+' '+view.getFullYear();
    document.getElementById('prev').disabled=view<=base;
    document.getElementById('next').disabled=(view.getFullYear()-base.getFullYear())*12+view.getMonth()-base.getMonth()>=11;
    var tb=document.querySelector('#cal tbody');tb.innerHTML='';
    var first=new Date(view.getFullYear(),view.getMonth(),1),n=new Date(view.getFullYear(),view.getMonth()+1,0).getDate(),row,i;
    for(i=0;i<first.getDay()+n;i++){
      if(i%7===0){row=document.createElement('tr');tb.appendChild(row);}
      var td=document.createElement('td');row.appendChild(td);
      if(i<first.getDay())continue;
      var d=new Date(view.getFullYear(),view.getMonth(),i-first.getDay()+1),st=d<today?'past':status(d),b=document.createElement('button');
      var long=DAYS[d.getDay()]+', '+MONTHS[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear(),spoken=d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear()+', '+DAYS[d.getDay()];
      b.type='button';b.className='day '+st;b.style.setProperty('--i',i);b.innerHTML=d.getDate()+' <small>'+(st==='booked'?'Full':st==='few'?'Few':'')+'</small>';
      b.setAttribute('aria-label',d.getDate()+(st==='booked'?' Full':st==='few'?' Few':'')+', '+long+', '+(st==='past'?'past':st==='booked'?'full, booked, demo':st==='few'?'few left, demo':'open, demo'));
      if(st==='past'||st==='booked')b.setAttribute('aria-disabled','true');
      b.setAttribute('aria-pressed',picked&&picked.iso===d.toDateString()?'true':'false');
      b.dataset.long=long;b.dataset.st=st;b.dataset.iso=d.toDateString();
      td.appendChild(b);
    }
  }
  document.querySelector('#cal tbody').addEventListener('click',function(e){
    var b=e.target.closest('button.day');if(!b||b.getAttribute('aria-disabled')==='true')return;
    picked={long:b.dataset.long,iso:b.dataset.iso};
    var sc=document.querySelector('.slipcard');if(sc)sc.classList.add('picked');var bd=document.getElementById('bkdate');bd.textContent=b.dataset.long;bd.classList.remove('stamp');void bd.offsetWidth;bd.classList.add('stamp');document.getElementById('picked').textContent='Picked '+b.dataset.long+' ('+(b.dataset.st==='few'?'few left':'open')+', demo). A real calendar would hold it once the deposit is paid.';
    render(false);update();
    var again=document.querySelector('#cal button[data-iso="'+picked.iso+'"]');if(again)again.focus();
  });
  document.getElementById('prev').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()-1,1);render(true);});
  document.getElementById('next').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()+1,1);render(true);});

  // Order tracking and loyalty card (demo)
  var STEPS=['Quote approved','Deposit received','Baking','Decorating','Ready for pickup','Picked up'],at=1;
  function track(){
    var ol=document.getElementById('steps');ol.innerHTML='';
    STEPS.forEach(function(s,i){var li=document.createElement('li');li.className=i<at?'done':i===at?'cur':'';
      if(i===at)li.setAttribute('aria-current','step');
      li.innerHTML='<span class="dot" aria-hidden="true">'+(i<at?'✓':i+1)+'</span><span>'+s+(i<at?' (done)':i===at?' (now)':'')+'</span>';ol.appendChild(li);});
    var done=at>=STEPS.length-1,stamps=3+(done?1:0),st=document.getElementById('stamps');st.innerHTML='';
    for(var i=0;i<5;i++){var e=document.createElement('i');e.textContent=i<stamps?'✓':'';if(i<stamps)e.className='on';st.appendChild(e);}
    document.getElementById('stamptext').textContent=stamps+' of 5 stamps. Demo reward: every 5th cake gets free delivery. Not a real offer.';
    document.getElementById('adv').textContent=done?'Start the demo again':'Advance demo status';
  }
  document.getElementById('adv').addEventListener('click',function(){at=at>=STEPS.length-1?1:at+1;track();live.textContent='Order status: '+STEPS[at]+'.';});
  render(true);track();update();
  // viewer-timeout: if the 3D script never loads, say so instead of leaving a blank box
  setTimeout(function(){if(!window.CakeViewer){var n=document.getElementById('nogl');if(n)n.hidden=false;}},4000);
})();
