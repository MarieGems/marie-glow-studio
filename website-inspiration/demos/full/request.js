// Shows the cake chosen in the builder, read from the address. Nothing is sent anywhere.
(function(){
  var box=document.getElementById('build'),C=window.CAKE;
  if(!box||!C)return;
  var q=new URLSearchParams(location.search),titles={size:'Size',flavor:'Flavor',filling:'Filling',icing:'Icing',color:'Icing color',deco:'Finish',deliv:'Pickup'},total=0,html='',ok=0,keys=Object.keys(titles);
  keys.forEach(function(k){
    var v=q.get(k),o=C[k]&&C[k][v];
    if(!o)return;
    ok++;total+=o[1];
    html+='<div><span>'+titles[k]+': '+o[0]+'</span><b>'+(o[1]?'$'+o[1]:'')+'</b></div>';
  });
  if(ok!==keys.length)return;
  box.querySelector('.sum').innerHTML=html+'<div class="t"><span>Estimate</span><b id="req-total">$'+total+'</b></div>';
  box.hidden=false;
})();
