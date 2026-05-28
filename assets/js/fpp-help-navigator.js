(function($){
const scenarios=[
'Я стал жертвой мошенничества','Я потерпевший по уголовному делу','Мне отказали в возбуждении дела','Пострадал ребёнок','Я свидетель по делу','Я хочу помочь родственнику','Мне пришло уведомление о присяжных','Другая ситуация'];
const dynamic={
'Я стал жертвой мошенничества':['Сумма ущерба','Дата события','Способ мошенничества'],
'Мне отказали в возбуждении дела':['Когда подавали заявление','В какой орган подавали заявление','Номер КУСП'],
'Пострадал ребёнок':['Кем заявитель приходится ребёнку','Возраст ребёнка'],
'Я хочу помочь родственнику':['Кем вы приходитесь пострадавшему','Есть ли согласие пострадавшего'],
'Я свидетель по делу':['По какому делу вы проходите свидетелем','Есть ли повестка'],
'Мне пришло уведомление о присяжных':['Какой суд указан','Дата явки']
};
$(function(){
 const root=$('#fpp-hn-root'); if(!root.length)return;
 const s=fppHN.settings||{};
 root.find('[data-step="1"]').html('<h3>Что случилось?</h3>'+scenarios.map((t,i)=>`<button type="button" class="fpp-scn" data-i="${i}">${t}</button>`).join(''));
 root.on('click','.fpp-scn',function(){ const cat=scenarios[$(this).data('i')]; sessionStorage.setItem('fpp_hn_category',cat); $('[name="category"]').val(cat); $('#fpp-hn-form').show(); root.find('.fpp-hn-progress span').css('width','100%'); const arr=dynamic[cat]||[]; $('#fpp-hn-dynamic-fields').html(arr.map((f,idx)=>`<input name="extra_${idx}" placeholder="${f}">`).join('')); window.scrollTo({top:$('#fpp-hn-form').offset().top,behavior:'smooth'});});
 root.on('click','.fpp-hn-quick-exit',()=>window.location.href=s.quick_exit_url||'https://www.google.com');
 let esc=0; $(document).on('keydown',function(e){if(e.key==='Escape'){esc++; setTimeout(()=>esc=0,450); if(esc>=2) window.location.href=s.quick_exit_url||'https://www.google.com';}});
 $('#fpp-hn-form').on('submit',function(e){e.preventDefault(); const fd=new FormData(this); fd.append('action','fpp_hn_submit'); fd.append('nonce',fppHN.nonce); $.ajax({url:fppHN.ajax,type:'POST',data:fd,contentType:false,processData:false}).done(r=>$('#fpp-hn-result').text(r.data.message||'')).fail(()=>$('#fpp-hn-result').text('Ошибка отправки'));});
});
})(jQuery);
