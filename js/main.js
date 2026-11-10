document.addEventListener("DOMContentLoaded",()=>{
  const menuToggle=document.getElementById("menuToggle");
  const mainNav=document.getElementById("mainNav");
  if(menuToggle&&mainNav){
    menuToggle.addEventListener("click",()=>{
      const isOpen=mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active",isOpen);
      menuToggle.setAttribute("aria-expanded",String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
      mainNav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded","false");
    }));
  }
  const currentPage=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".main-nav a").forEach(link=>{
    if(link.getAttribute("href").split("/").pop()===currentPage) link.classList.add("active");
  });
  const year=document.getElementById("currentYear");
  if(year) year.textContent=new Date().getFullYear();
  const header=document.getElementById("siteHeader");
  if(header){
    const updateHeader=()=>header.classList.toggle("scrolled",window.scrollY>30);
    updateHeader();
    window.addEventListener("scroll",updateHeader,{passive:true});
  }
});
