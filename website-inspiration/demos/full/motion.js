// "Is my date workable?" checker. It compares a date to the lead-time table. It never claims real availability.
(function(){
  var forms=document.querySelectorAll('[data-datecheck]');
  Array.prototype.forEach.call(forms,function(f){
    var out=f.querySelector('.result');
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var sel=f.elements.occ,date=f.elements.date.value,lead=Number(sel.value),name=sel.options[sel.selectedIndex].getAttribute('data-name');
      if(!date){out.textContent='Pick a date first.';return;}
      var p=date.split('-'),target=new Date(Number(p[0]),Number(p[1])-1,Number(p[2])),now=new Date(),today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
      var days=Math.round((target-today)/86400000);
      if(days<0){out.textContent='That date has passed. Pick a date in the future.';return;}
      if(days===0){out.textContent='That is today. We cannot promise a cake for today. You can still send a request and we will say yes or no in writing.';return;}
      var away='Your date is '+days+(days===1?' day':' days')+' away. ';
      out.textContent=days>=lead
        ?away+'That is enough lead time for '+name+'. Send a request and we will confirm in writing within two business days.'
        :away+name.charAt(0).toUpperCase()+name.slice(1)+' usually need at least '+lead+' days. You can still send the request. We will say yes or no in writing within two business days.';
    });
  });
})();
