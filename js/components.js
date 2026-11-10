/* Shared Crackdent header and footer */
const brandMarkup = `<img class="brand-logo" src="/assets/images/crackdent-logo.png" alt="Crackdent logo"><span class="brand-wordmark">Crack<span class="gradient-text">dent</span></span>`;
const headerHTML = `
<header class="site-header" id="siteHeader"><div class="container nav-container">
<a href="/index.html" class="brand" aria-label="Crackdent home">${brandMarkup}</a>
<button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button>
<nav class="main-nav" id="mainNav" aria-label="Main navigation"><a href="/index.html">Home</a><a href="/about.html">About</a><a href="/services.html">Services</a><a href="/portfolio.html">Portfolio</a><a href="/blog.html">Blog</a><a href="/contact.html" class="nav-cta">Let's Talk ↗</a></nav>
</div></header>`;
const footerHTML = `
<footer class="site-footer"><div class="container"><div class="footer-grid">
<div class="footer-about"><a href="/index.html" class="brand">${brandMarkup}</a><p>Professional digital dental CAD design support for laboratories and dental professionals.</p></div>
<div class="footer-links"><h3>Quick Links</h3><a href="/index.html">Home</a><a href="/about.html">About</a><a href="/services.html">Services</a><a href="/portfolio.html">Portfolio</a></div>
<div class="footer-links"><h3>Explore</h3><a href="/blog.html">Blogs</a><a href="/contact.html">Contact</a><a href="/privacy-policy.html">Privacy Policy</a></div>
<div class="footer-links"><h3>Get In Touch</h3><a href="tel:+918368022075">+91 83680 22075</a><a href="mailto:Support@crackdent.com">Support@crackdent.com</a><a href="https://wa.me/918368022075" target="_blank" rel="noopener">WhatsApp Us</a></div>
</div><div class="footer-bottom"><p>© <span id="currentYear"></span> Crackdent. All Rights Reserved.</p><p>Designed with precision.</p></div></div></footer>`;
function renderSharedComponents(){const h=document.getElementById("header-placeholder"),f=document.getElementById("footer-placeholder");if(h)h.innerHTML=headerHTML;if(f)f.innerHTML=footerHTML;}
renderSharedComponents();
