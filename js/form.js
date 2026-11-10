document.addEventListener("DOMContentLoaded",()=>{
 const form=document.getElementById("crackdentContactForm");if(!form)return;
 const status=document.getElementById("formStatus"),button=document.getElementById("submitEnquiry");
 form.addEventListener("submit",async e=>{
  e.preventDefault();if(!form.reportValidity())return;
  status.textContent="Sending your enquiry…";status.className="form-status";button.disabled=true;button.textContent="Sending…";
  const payload=Object.fromEntries(new FormData(form).entries());
  try{
   const response=await fetch("/api/send-enquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
   const result=await response.json().catch(()=>({}));
   if(!response.ok)throw new Error(result.error||"We could not send your enquiry. Please try again.");
   form.reset();status.textContent="Thank you! Your enquiry has been sent successfully. Our team will contact you.";status.className="form-status success";
  }catch(err){status.textContent=err.message||"Something went wrong. Please email Support@crackdent.com directly.";status.className="form-status error";}
  finally{button.disabled=false;button.textContent="Submit Enquiry ↗";}
 });
});
