// Depth for every art stage (page hero and section art): the photo, seal and floating notes sit on separate layers
// and tilt with the pointer, a slow idle sway and the scroll position of the stage itself.
(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stages=[].slice.call(document.querySelectorAll('.stage3d'));
  if(!stages.length||reduce)return;
  var px=0,py=0,t0=performance.now(),running=false;
  window.addEventListener('pointermove',function(e){px=(e.clientX/innerWidth-.5)*2;py=(e.clientY/innerHeight-.5)*2;},{passive:true});
  var state=stages.map(function(st,i){
    st.classList.add('on');
    return {el:st,cy:-14,cx:3,visible:false,phase:i*1.7,side:st.closest('.flip')?-1:1};
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){state.forEach(function(s){if(s.el===e.target)s.visible=e.isIntersecting;});});start();});
    state.forEach(function(s){io.observe(s.el);});
  }else{state.forEach(function(s){s.visible=true;});}
  function start(){if(!running){running=true;requestAnimationFrame(tick);}}
  function tick(now){
    var t=(now-t0)/1000,any=false;
    state.forEach(function(s){
      if(!s.visible)return;any=true;
      var r=s.el.getBoundingClientRect(),c=((r.top+r.height/2)-innerHeight/2)/innerHeight;
      var ty=s.side*-14+px*12+Math.sin(t*.8+s.phase)*3+c*18,tx=3-py*8+Math.cos(t*.6+s.phase)*1.5-c*8;
      s.cy+=(ty-s.cy)*.08;s.cx+=(tx-s.cx)*.08;
      s.el.style.transform='rotateX('+s.cx.toFixed(2)+'deg) rotateY('+s.cy.toFixed(2)+'deg)';
    });
    if(any)requestAnimationFrame(tick);else running=false;
  }
  start();
})();
