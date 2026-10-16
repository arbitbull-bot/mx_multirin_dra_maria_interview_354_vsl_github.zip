document.addEventListener('DOMContentLoaded',function(){
 var video=document.getElementById('video');
 var overlay=document.getElementById('play');
 // No donor script: it contains lead forwarding, storage telemetry and anti-devtools.
 if(overlay)overlay.addEventListener('click',function(){
   playVideo();
   overlay.hidden=true;
 });
 if(video){
   video.muted=true;
   var promise=video.play();
   if(promise&&promise.catch)promise.catch(function(){});
   video.addEventListener('ended',function(){
     var section=document.querySelector('.video-block');
     if(section)section.hidden=true;
     document.getElementById('order').style.display='block';
   });
 }
 var timer=document.querySelector('.timer');
 function reflectTimer(){
   var parts=(timer.textContent||'05:00').split(':');
   document.getElementById('timer-hours').textContent='00';
   document.getElementById('timer-minutes').textContent=parts[0];
   document.getElementById('timer-seconds').textContent=parts[1];
 }
 if(timer){reflectTimer();new MutationObserver(reflectTimer).observe(timer,{childList:true,characterData:true,subtree:true});}
});
