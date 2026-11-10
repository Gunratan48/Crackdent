/* Scroll reveal utility. Add class="reveal" to elements to animate them. */
document.addEventListener("DOMContentLoaded",()=>{
  const items=document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){items.forEach(item=>item.classList.add("active"));return;}
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("active");observer.unobserve(entry.target);}
    });
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
});
