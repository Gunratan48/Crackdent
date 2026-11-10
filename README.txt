CRACKDENT WEBSITE — UPDATED NETLIFY PACKAGE
==========================================

Contact details
- Phone / WhatsApp: +91 83680 22075
- Email: Support@crackdent.com

Images
- Logo: assets/images/crackdent-logo.png (DP folder)
- Homepage hero: assets/images/hero-cad-3d.jpeg (Cad 3d digital folder)
- Service-specific galleries: assets/images/<service-slug>/
- js/services-data.js maps all 12 requested service categories.
- The uploaded folders with no image files currently are Implant Custom Abutment Model, Inlay & Onlay (folder not supplied), and Bite Splint (Nightgaurd). Their service pages remain available and show a gallery-coming-soon state.
- Denture Design includes the Denture Design folder and the related Partial Denture Framework folder images.

EMAIL DELIVERY — BREVO API (NO NETLIFY EMAIL NOTIFICATION)
The contact form sends a request to a Netlify serverless function, which calls Brevo's transactional email API. Enquiries are sent to Support@crackdent.com. The customer's email is set as Reply-To.
The form will NOT send email until you complete these steps:

1. Create/sign in to a Brevo account and generate a v3 API key.
2. In Brevo, verify the sender email address/domain that you will use as the sender.
   Use an email address you control and that Brevo accepts as a verified sender.
3. Deploy this Crackdent123 folder to Netlify.
4. In Netlify Dashboard → Site configuration → Environment variables, add:
   BREVO_API_KEY = your Brevo v3 API key
   BREVO_SENDER_EMAIL = your verified sender email address
   BREVO_SENDER_NAME = Crackdent
   BREVO_TO_EMAIL = Support@crackdent.com
5. Trigger a fresh deploy after saving the environment variables.
6. Submit a test enquiry from the live website and confirm it reaches Support@crackdent.com (also check Spam/Junk).

Security:
- Never put the Brevo API key in HTML or browser-side JavaScript.
- The API key is read only by the Netlify serverless function.
- Brevo daily free-plan limits and account rules apply. This does not create unlimited sending.
- Sender address must be verified in Brevo. Do not use the customer's email as the From address; it is only Reply-To.

Privacy / DPDP launch checklist
- Replace the legal entity name and postal address in privacy-policy.html with the real business details.
- Confirm the actual data retention period and set a deletion process for enquiries.
- Review Brevo's current data processing terms, data location and cross-border transfer terms.
- Restrict access to Netlify and Brevo dashboards; enable strong authentication.
- Test privacy requests (access, correction, withdrawal and deletion) at Support@crackdent.com.
- Maintain an incident/breach response process and record of consent.
- Do not collect patient-identifiable medical records through this general enquiry form.
- Have the privacy policy and operational practices reviewed by a qualified Indian privacy professional before launch.

Deployment
- Deploy the Crackdent123 folder (not the parent folder containing the photo source archive) to Netlify.
- The website uses plain HTML, CSS and vanilla JavaScript with a Netlify Function.
