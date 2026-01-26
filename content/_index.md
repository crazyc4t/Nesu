---
title: " "
description: "Clean. Secure. Reliable."
images:
  - "images/hero/vancouver-night-v2.jpg"
---

<style>
body { padding-top: 96px; }

.prose h1:first-child, article > h1:first-of-type, article > header { display: none !important; margin: 0 !important; padding: 0 !important; }

@media (max-width: 768px) {
  body { padding-top: 68px; }
  .carousel-container { height: 50vh !important; min-height: 300px !important; }
  .carousel-container h1 { font-size: 2em !important; margin-bottom: 20px !important; color: white !important; }
  .carousel-container h2 { font-size: 1.5em !important; margin-bottom: 15px !important; color: white !important; }
  .carousel-container p { font-size: 1em !important; color: white !important; }
  .services-grid { grid-template-columns: 1fr !important; padding: 20px !important; }
  .services-grid h3 { font-size: 1.6em !important; color: white !important; }
  .services-grid p { font-size: 1.1em !important; color: white !important; }
}
</style>

{{< carousel >}}

<h2 style="text-align: center; margin: 60px 0 40px 0; font-size: 3em;">Our Services</h2>

<style>
.service-card {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(80,0,80,0.3);
}
</style>

<div class="services-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 40px 40px; margin: 0;">

<a href="/services/janitorial/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/cleaning2.jpg" alt="Janitorial" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">Janitorial Cleaning</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">Daily cleaning, deep cleans, sanitization. Your building stays spotless, your tenants stay happy.</p>
  </div>
</div>
</a>

<a href="/services/glass-windows/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/windows3.jpg" alt="Glass & Windows" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">Glass & Windows</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">Emergency repair or planned upgrade - we do both. Same-day service available for emergencies.</p>
  </div>
</div>
</a>

<a href="/services/locksmith/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/locksmith.jpg" alt="Locksmith" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">Locksmith</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">Emergency lockouts, lock repairs, smart locks, master key systems. Fast, certified, reliable.</p>
  </div>
</div>
</a>

<a href="/services/access-control/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/fob.png" alt="Access Controls" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">Access Controls</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">Fobs, keycards, biometric systems. We install and maintain access control systems for your facility.</p>
  </div>
</div>
</a>

<a href="/services/cabling/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/electrician.jpg" alt="Electrical" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">Low Voltage Electrical</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">CCTV, intercoms, data cabling, fire alarms. Professional installation and maintenance.</p>
  </div>
</div>
</a>

<a href="/services/cctv/" style="text-decoration: none; color: inherit;">
<div class="service-card">
  <img src="/images/service/cctv.jpg" alt="CCTV" style="width: 100%; height: 100%; object-fit: cover;" />
  <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 85%, rgba(80,0,80,0.85) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; color: white;">
    <h3 style="color: white !important; font-size: 2.4em; margin: 0 0 12px 0; font-weight: 600;">CCTV Security</h3>
    <p style="color: white !important; font-size: 1.4em; margin: 0; opacity: 0.95; line-height: 1.5;">Cameras that actually work. Dome, bullet, 360° - we install and monitor security systems.</p>
  </div>
</div>
</a>

</div>

<div style="text-align: center; padding: 0 40px 60px;">

## Ready to Get Started?

<a href="/contact" style="display: inline-block; background: linear-gradient(135deg, #500050 0%, #700070 100%); color: white; padding: 16px 40px; font-size: 1.2em; font-weight: 600; text-decoration: none; border-radius: 8px; margin-top: 20px; transition: transform 0.2s ease, box-shadow 0.2s ease; box-shadow: 0 4px 15px rgba(80,0,80,0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(80,0,80,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(80,0,80,0.3)';">Contact Us</a>

</div>
