// Gives text-only sections a hero-style art side: a photo on a 3D stage with a floating note.
// Text and art slide in from opposite sides, and the side alternates down the page. Runs before reveal.js.
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PHOTOS=['collection-birthday-600.webp','cutaway-layers.webp','collection-wedding-600.webp','finish-flowers.webp','collection-work-600.webp','finish-drip.webp','hero-cake-600.webp','finish-fondant.webp'];
  var SKIP='form,.builder,.calbox,.cf-stage,.coll,.say,.tiles,.dd,.swatches,.steps3,table,.ticket,.paycard,.split,.formcard,.facts,.steps,.lead,details';
  var n=0,bands=[];
  [].forEach.call(document.querySelectorAll('main > section.band, main > section.close'),function(sec){
    var isClose=sec.classList.contains('close');
    var host=isClose?sec:(sec.querySelector(':scope > .inner')||sec.querySelector(':scope > .wrap > div:not(.tag)'));
    if(!host||host.querySelector(SKIP)||sec.querySelector('.builder'))return;
    var tagEl=sec.querySelector('.tag'),tag=tagEl?tagEl.textContent:'Hollis & Rye';
    var img=PHOTOS[n%PHOTOS.length],flip=n%2===1&&!!(isClose||sec.querySelector(':scope > .inner'));n++;
    var text=document.createElement('div');text.className='sidetext';
    while(host.firstChild)text.appendChild(host.firstChild);
    host.appendChild(text);
    var st=document.createElement('div');st.className='sidestage';st.setAttribute('aria-hidden','true');
    st.innerHTML='<div class="stage3d"><figure class="arch"><img src="images/'+img+'" alt="" width="600" height="400" loading="lazy"></figure>'
      +'<div class="fl" style="--z:90px;--r:'+(flip?'6':'-6')+'deg;'+(flip?'right':'left')+':-14%;bottom:8%"><div class="fl-slip"><b>Hollis &amp; Rye</b><strong>'+tag.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</strong></div></div></div>';
    if(isClose){host.appendChild(st);}else{(host.parentElement.classList.contains('wrap')?host.parentElement:host).appendChild(st);}
    sec.classList.add('has-side');if(flip)sec.classList.add('flip');
    bands.push(sec);
  });
  if(!bands.length)return;
  if(reduce||!('IntersectionObserver' in window)){bands.forEach(function(b){b.classList.add('sin');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('sin');io.unobserve(e.target);}});},{threshold:.2});
  bands.forEach(function(b){io.observe(b);});
})();
