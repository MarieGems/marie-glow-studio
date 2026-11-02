// Section depth for the inner pages: each section content block leans back as it enters and leaves the screen,
// and cards tilt toward the pointer. Off for reduced motion and on small screens.
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||innerWidth<900)return;
  var fold=[].slice.call(document.querySelectorAll('main > section.band > .inner, main > section.band > .wrap, main > section.band > .builder, main > .builder'));
  var ticking=false;
  function update(){
    ticking=false;
    var vh=innerHeight;
    fold.forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.bottom<-200||r.top>vh+200){return;}
      var c=((r.top+r.height/2)-vh/2)/(vh/2+Math.min(r.height,vh)/2);
      c=Math.max(-1,Math.min(1,c));
      el.style.transformOrigin='50% '+(c>0?'0%':'100%');
      el.style.transform='perspective(1500px) rotateX('+(c*5).toFixed(2)+'deg) translateZ('+(-Math.abs(c)*50).toFixed(0)+'px)';
    });
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(update);}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  update();

  var cards=document.querySelectorAll('.sw,.steps li,.tiles > div,.dd p,.say-row p,.lead > *,.cc,.coll:not(.cf) article,.facts > *,.slipcard,.loyal');
  [].forEach.call(cards,function(c){
    c.addEventListener('pointermove',function(e){
      var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      c.classList.add('tilting');
      c.style.transform='perspective(800px) rotateX('+(-py*12).toFixed(2)+'deg) rotateY('+(px*14).toFixed(2)+'deg) translateZ(18px)';
    });
    c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});
  });
})();
