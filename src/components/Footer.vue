<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Main Content -->
      <div class="footer__main">
        <!-- Brand Section - Larger & Featured -->
        <div class="footer__brand">
          <h3 class="footer__logo-text">H Cabinet & Furniture</h3>
          <p class="footer__tagline">Bespoke Interior Atelier</p>
          <p class="footer__description">
            Transforming spaces into timeless stories through thoughtful design. 
            Every detail crafted with precision, every project a testament to excellence.
          </p>
          
          <!-- Contact Info -->
          <div class="footer__contact">
            <a href="mailto:hcabinetfurnitures@gmail.com" class="footer__contact-item">
              <i class="pi pi-envelope"></i>
              <span>hcabinetfurnitures@gmail.com</span>
            </a>
            <div class="footer__contact-item">
              <i class="pi pi-map-marker"></i>
              <span>Kuala Lumpur ,  Malaysia</span>
            </div>
          </div>
        </div>

        <!-- Navigation & Social Grid -->
        <div class="footer__sidebar">
          <!-- Quick Links -->
          <div class="footer__section">
            <h4 class="footer__title">Explore</h4>
            <ul class="footer__links">
              <li>
                <router-link to="/" class="footer__link">Home</router-link>
              </li>
              <li>
                <router-link to="/portfolio" class="footer__link">Portfolio</router-link>
              </li>
              <li>
                <router-link to="/about" class="footer__link">About Us</router-link>
              </li>
              <li>
                <router-link to="/contact" class="footer__link">Contact</router-link>
              </li>
            </ul>
          </div>

          <!-- Social & Connect -->
          <div class="footer__section">
            <h4 class="footer__title">Connect</h4>
            <div class="footer__social">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener" 
                class="footer__social-link" 
                aria-label="Instagram"
              >
                <i class="pi pi-instagram"></i>
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener" 
                class="footer__social-link" 
                aria-label="Pinterest"
              >
                <i class="pi pi-pinterest"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener" 
                class="footer__social-link" 
                aria-label="LinkedIn"
              >
                <i class="pi pi-linkedin"></i>
              </a>
              <a 
                href="mailto:hcabinetfurnitures@gmail.com" 
                class="footer__social-link" 
                aria-label="Email"
              >
                <i class="pi pi-envelope"></i>
              </a>
            </div>
            
            <!-- CTA -->
            <router-link to="/contact" class="footer__cta">
              <span>Start Your Project</span>
              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Divider with Decorative Element -->
      <div class="footer__divider">
        <span class="footer__divider-dot"></span>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} H Cabinet & Furniture
        </p>
        <p class="footer__tagline-bottom">
          Designed with care • Crafted with passion
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: linear-gradient(to bottom, #1a1a1a 0%, #0f0f0f 100%);
  color: #a3a3a3;
  padding: 5rem 0 2rem;
  border-top: 1px solid rgba(201, 168, 117, 0.15);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(201, 168, 117, 0.3) 50%, 
    transparent 100%
  );
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main Layout */
.footer__main {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  margin-bottom: 3rem;
}

/* Brand Section - Enhanced */
.footer__brand {
  max-width: 500px;
}

.footer__logo-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.footer__tagline {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C9A875;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.footer__description {
  font-size: 1rem;
  line-height: 1.7;
  color: #8B7355;
  font-family: 'Georgia', serif;
  margin-bottom: 2rem;
}

/* Contact Info */
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #737373;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
}

.footer__contact-item i {
  color: #C9A875;
  font-size: 1rem;
}

.footer__contact-item:hover {
  color: #ffffff;
  transform: translateX(4px);
}

/* Sidebar Layout */
.footer__sidebar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

/* Section Styles */
.footer__section {
  display: flex;
  flex-direction: column;
}

.footer__title {
  font-family: 'Georgia', serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #C9A875 0%, transparent 100%);
}

/* Links */
.footer__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.footer__link {
  color: #8B7355;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  width: fit-content;
  font-family: 'Georgia', serif;
}

.footer__link::before {
  content: '→';
  position: absolute;
  left: -20px;
  opacity: 0;
  transition: all 0.3s ease;
  color: #C9A875;
}

.footer__link:hover {
  color: #ffffff;
  padding-left: 20px;
}

.footer__link:hover::before {
  opacity: 1;
  left: 0;
}

/* Social Links - Refined */
.footer__social {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.footer__social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(201, 168, 117, 0.08);
  border: 1px solid rgba(201, 168, 117, 0.2);
  border-radius: 10px;
  color: #C9A875;
  text-decoration: none;
  font-size: 1.125rem;
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}

.footer__social-link:hover {
  background: #C9A875;
  border-color: #C9A875;
  color: #0f0f0f;
  transform: translateY(-6px) rotate(5deg);
  box-shadow: 0 12px 24px rgba(201, 168, 117, 0.25);
}

/* CTA Button */
.footer__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2C2416 0%, #3D3123 100%);
  color: #F9F6F2;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 8px;
  border: 1px solid rgba(201, 168, 117, 0.3);
  box-shadow: 0 4px 12px rgba(44, 36, 22, 0.3);
  transition: all 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  width: fit-content;
}

.footer__cta:hover {
  background: linear-gradient(135deg, #3D3123 0%, #4D4032 100%);
  border-color: rgba(201, 168, 117, 0.6);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(201, 168, 117, 0.3);
}

.footer__cta i {
  font-size: 0.75rem;
  transition: transform 0.35s ease;
}

.footer__cta:hover i {
  transform: translateX(4px);
}

/* Decorative Divider */
.footer__divider {
  position: relative;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(92, 77, 61, 0.2) 50%, 
    transparent 100%
  );
  margin: 3rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__divider-dot {
  width: 6px;
  height: 6px;
  background: #C9A875;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 12px rgba(201, 168, 117, 0.4);
}

/* Bottom Bar - Refined */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer__copyright {
  font-size: 0.875rem;
  color: #525252;
  font-family: 'Georgia', serif;
}

.footer__tagline-bottom {
  font-size: 0.8rem;
  color: #404040;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer__main {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer__brand {
    max-width: 100%;
  }

  .footer__sidebar {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 3.5rem 0 1.5rem;
  }

  .footer__container {
    padding: 0 1.25rem;
  }

  .footer__main {
    gap: 2.5rem;
  }

  .footer__sidebar {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer__logo-text {
    font-size: 1.75rem;
  }

  .footer__description {
    font-size: 0.95rem;
  }

  .footer__social {
    justify-content: flex-start;
  }

  .footer__bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .footer__cta {
    width: 100%;
    justify-content: center;
  }
}
</style>