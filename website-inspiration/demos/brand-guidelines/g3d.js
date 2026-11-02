// Web-only 3D depth for the guideline page: sections tip in from the back as they scroll into view, cards tilt on hover.
// It only adds classes, so the printed PDF is unaffected.
(function(){
  if(!window.matchMedia||matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var pages=[].slice.call(document.querySelectorAll('.page'));
  if(!pages.length)return;
  document.documentElement.classList.add('js3d');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -5% 0px'});
  pages.forEach(function(p){io.observe(p);});
  window.addEventListener('beforeprint',function(){pages.forEach(function(p){p.classList.add('in');});});
  [].forEach.call(document.querySelectorAll('.sw div,.box,.mis div,.do,.dont,.card'),function(c){
    c.addEventListener('pointermove',function(e){
      if(!c.closest('.page.in'))return;
      var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      c.classList.add('tilting');
      c.style.transform='perspective(800px) rotateX('+(-py*10).toFixed(2)+'deg) rotateY('+(px*12).toFixed(2)+'deg) translateZ(16px)';
    });
    c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});
  });
})();
