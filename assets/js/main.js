/* RSGimenezIT — scripts compartilhados */
(function(){
  var WA='5512991828781';
  // menu mobile
  var h=document.querySelector('.site-header'),b=h&&h.querySelector('.menu-btn');
  if(b){
    b.addEventListener('click',function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&h.classList.contains('open')){h.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});
  }
  // animação ao rolar
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }else{els.forEach(function(e){e.classList.add('in');});}
  // formulário de contato -> WhatsApp
  var f=document.getElementById('form-contato');
  if(f){
    var p=new URLSearchParams(location.search).get('servico');
    if(p){var s=f.querySelector('[name=servico]');for(var i=0;i<s.options.length;i++){if(s.options[i].value===p){s.selectedIndex=i;}}}
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var d=new FormData(f),t='Olá, vim pelo site da RSGimenezIT.\n\n';
      t+='*Nome:* '+(d.get('nome')||'')+'\n';
      if(d.get('empresa'))t+='*Empresa:* '+d.get('empresa')+'\n';
      t+='*Serviço:* '+(d.get('servico')||'')+'\n';
      if(d.get('cidade'))t+='*Cidade:* '+d.get('cidade')+'\n';
      t+='\n'+(d.get('mensagem')||'');
      window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank','noopener');
    });
  }
  // ano no rodapé
  var y=document.getElementById('ano');if(y)y.textContent=new Date().getFullYear();
})();
