// Filters for the gallery. Without JavaScript every card stays visible.
(function(){
  var cards=[].slice.call(document.querySelectorAll('.wi-card'));
  var groups=[].slice.call(document.querySelectorAll('.wi-chips'));
  var count=document.getElementById('wi-count');
  if(!cards.length||!groups.length)return;
  var state={industry:'all',level:'all'};
  function apply(){
    var shown=0;
    cards.forEach(function(c){
      var ok=(state.industry==='all'||c.dataset.industry===state.industry)&&(state.level==='all'||c.dataset.level===state.level);
      c.hidden=!ok;if(ok)shown++;
    });
    if(count)count.textContent='Showing '+shown+' of '+cards.length+' examples.';
  }
  groups.forEach(function(g){
    g.addEventListener('click',function(e){
      var b=e.target.closest('button[data-filter]');if(!b)return;
      state[g.dataset.group]=b.dataset.filter;
      [].forEach.call(g.querySelectorAll('button'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      apply();
    });
  });
  apply();
})();
