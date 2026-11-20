const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("mainNav");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const toTop=document.getElementById("toTop");
window.addEventListener("scroll",()=>toTop.classList.toggle("show",scrollY>500));
toTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const el=document.querySelector(a.getAttribute("href")); if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});}
}));
