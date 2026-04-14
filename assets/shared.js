(()=>{
  const c=document.querySelector('.cursor'),r=document.querySelector('.cursor-ring');
  if(c&&r){
    let mx=0,my=0,rx=0,ry=0;
    window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;c.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`},{passive:true});
    (function loop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;r.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop)})();
    document.querySelectorAll('a,button,[data-hover]').forEach(el=>{
      el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
    });
  }

  const sp=document.querySelector('.scroll-progress');
  if(sp){
    const onScroll=()=>{const h=document.documentElement;const p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;sp.style.setProperty('--p',p+'%');const nav=document.querySelector('nav.top');if(nav)nav.classList.toggle('scrolled',h.scrollTop>20)};
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  }

  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  function tick(){const d=new Date();const p=n=>n.toString().padStart(2,'0');const el=document.getElementById('clk');if(el)el.textContent=`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`}
  setInterval(tick,1000);tick();

  document.querySelectorAll('.btn').forEach(b=>{
    let rect;
    b.addEventListener('mouseenter',()=>{rect=b.getBoundingClientRect()});
    b.addEventListener('mousemove',e=>{if(!rect)return;const x=e.clientX-rect.left-rect.width/2;const y=e.clientY-rect.top-rect.height/2;b.style.transform=`translate(${x*.18}px,${y*.22}px)`});
    b.addEventListener('mouseleave',()=>{b.style.transform=''});
  });
})();
