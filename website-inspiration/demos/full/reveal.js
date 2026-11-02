// Scroll reveals for the inner pages, matching the home page: things rise in as they come into view.
(function(){
  var sets=['.band .inner > *','.band .wrap > div > *','.steps li','.sw','.say-row','.tiles > div','.dd > p','.close > *','.formcard','.builder fieldset','.panel','.slipcard','.calbox','.ticket','.paycard','.loyal','.trackcard','.facts > *','.lead > *'];
  var els=[],seen=new Set();
  sets.forEach(function(s){
    document.querySelectorAll(s).forEach(function(e){
      if(seen.has(e)||e.classList.contains('sidestage')||e.classList.contains('sidetext'))return;
      seen.add(e);e.classList.add('rv');
      var sib=Array.prototype.indexOf.call(e.parentElement.children,e);
      e.style.setProperty('--d',Math.min(sib,6)*90+'ms');
      els.push(e);
    });
  });
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e);});
  window.addEventListener('beforeprint',function(){els.forEach(function(e){e.classList.add('in');});});
})();
