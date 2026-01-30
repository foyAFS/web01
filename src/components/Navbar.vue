<template>
  <Menubar :model="items" class="luxe-navbar">
    <template #start>
      <router-link to="/" class="brand-container">
        <!-- Animated Logo with Geometric Frame -->
        <div class="logo-frame">
          <div class="frame-corner tl"></div>
          <div class="frame-corner tr"></div>
          <div class="frame-corner bl"></div>
          <div class="frame-corner br"></div>
          
          <div class="logo-inner">
            <img 
              src="/logo.svg" 
              alt="H Cabinet & Furniture Logo" 
              class="brand-logo" 
            />
            <div class="logo-glow"></div>
          </div>
        </div>
        
        <!-- Refined Typography -->
        <div class="brand-text">
          <div class="brand-name">
            <span class="serif-part">H CABINET</span>
            <span class="ampersand">&</span>
            <span class="serif-part">FURNITURE</span>
          </div>
          <div class="brand-tagline">
            <span class="tagline-dot"></span>
            <span>BESPOKE INTERIOR ATELIER</span>
            <span class="tagline-dot"></span>
          </div>
        </div>
      </router-link>
    </template>

    <template #end>
      <router-link to="/contact">
        <Button 
          label="Begin Your Project" 
          icon="pi pi-arrow-right"
          iconPos="right"
          class="cta-button" 
        />
      </router-link>
    </template>
  </Menubar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
    class: 'nav-link-item'
  },
  {
    label: 'Portfolio',
    icon: 'pi pi-image',
    command: () => router.push('/portfolio'),
    class: 'nav-link-item'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    command: () => router.push('/about'),
    class: 'nav-link-item'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

/* ============================================
   LUXE NAVBAR - Premium Furniture Design
   ============================================ */

.luxe-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to bottom, 
    rgba(250, 248, 245, 0.98) 0%,
    rgba(250, 248, 245, 0.95) 100%
  ) !important;
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(139, 115, 85, 0.15) !important;
  box-shadow: 
    0 1px 0 0 rgba(255, 255, 255, 0.6) inset,
    0 8px 32px rgba(92, 77, 61, 0.08),
    0 2px 8px rgba(139, 115, 85, 0.05);
  padding: 1rem 2.5rem !important;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  animation: slideDown 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.luxe-navbar:hover {
  box-shadow: 
    0 1px 0 0 rgba(255, 255, 255, 0.8) inset,
    0 12px 48px rgba(92, 77, 61, 0.12),
    0 4px 16px rgba(139, 115, 85, 0.08);
}

/* ============================================
   BRAND CONTAINER
   ============================================ */

.brand-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.brand-container:hover {
  transform: translateX(-4px);
}

/* ============================================
   LOGO FRAME - Geometric Art Deco
   ============================================ */

.logo-frame {
  position: relative;
  width: 72px;
  height: 72px;
  padding: 3px;
}

.frame-corner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #8B7355;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.frame-corner.tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.frame-corner.tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.frame-corner.bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.frame-corner.br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

.brand-container:hover .frame-corner {
  width: 24px;
  height: 24px;
  border-color: #C9A875;
}

.logo-inner {
  position: absolute;
  inset: 8px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(249, 246, 242, 0.9) 100%
  );
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.brand-logo {
  width: 40px;
  height: auto;
  position: relative;
  z-index: 2;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  filter: drop-shadow(0 2px 8px rgba(139, 115, 85, 0.2));
}

.brand-container:hover .brand-logo {
  transform: scale(1.1) rotate(-5deg);
}

.logo-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, 
    rgba(201, 168, 117, 0.15) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.6s ease;
}

.brand-container:hover .logo-glow {
  opacity: 1;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.15; }
}

/* ============================================
   BRAND TYPOGRAPHY
   ============================================ */

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.brand-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  line-height: 1;
  color: #2C2416;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
}

.serif-part {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.brand-container:hover .serif-part {
  color: #8B7355;
  letter-spacing: 0.18em;
}

.ampersand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  color: #C9A875;
  transition: all 0.4s ease;
  position: relative;
  top: -2px;
}

.brand-container:hover .ampersand {
  color: #8B7355;
  transform: scale(1.15);
}

.brand-tagline {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: #8B7355;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-left: 2px;
  opacity: 0.8;
  transition: all 0.4s ease;
}

.brand-container:hover .brand-tagline {
  color: #C9A875;
  letter-spacing: 0.35em;
  opacity: 1;
}

.tagline-dot {
  width: 3px;
  height: 3px;
  background: #C9A875;
  border-radius: 50%;
  transition: all 0.4s ease;
}

.brand-container:hover .tagline-dot {
  background: #8B7355;
  transform: scale(1.3);
}

/* ============================================
   NAVIGATION ITEMS
   ============================================ */

:deep(.nav-link-item) {
  margin: 0 0.25rem;
}

:deep(.nav-link-item .p-menuitem-link) {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5C4D3D !important;
  padding: 0.875rem 1.5rem;
  border-radius: 0;
  position: relative;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  background: transparent;
}

:deep(.nav-link-item .p-menuitem-link::before) {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%,
    #C9A875 50%,
    transparent 100%
  );
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

:deep(.nav-link-item .p-menuitem-link::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%,
    #8B7355 50%,
    transparent 100%
  );
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

:deep(.nav-link-item .p-menuitem-link:hover) {
  color: #C9A875 !important;
  background: linear-gradient(to bottom,
    rgba(201, 168, 117, 0.05) 0%,
    rgba(201, 168, 117, 0.02) 100%
  );
}

:deep(.nav-link-item .p-menuitem-link:hover::before),
:deep(.nav-link-item .p-menuitem-link:hover::after) {
  transform: scaleX(1);
}

:deep(.nav-link-item .p-menuitem-icon) {
  display: none;
}

/* ============================================
   CTA BUTTON - Premium Gold Accent
   ============================================ */

.cta-button {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  
  background: linear-gradient(135deg, 
    #2C2416 0%,
    #3D3123 100%
  ) !important;
  color: #F9F6F2 !important;
  border: 1px solid rgba(201, 168, 117, 0.3) !important;
  border-radius: 0 !important;
  
  padding: 0.875rem 2rem !important;
  position: relative;
  overflow: hidden;
  
  box-shadow: 
    0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
    0 4px 16px rgba(44, 36, 22, 0.3),
    0 1px 4px rgba(139, 115, 85, 0.2);
  
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(201, 168, 117, 0.15) 50%,
    transparent 100%
  );
  transition: left 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.cta-button::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid transparent;
  background: linear-gradient(135deg, #C9A875, #8B7355) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.cta-button:hover {
  background: linear-gradient(135deg, 
    #3D3123 0%,
    #4D4032 100%
  ) !important;
  border-color: rgba(201, 168, 117, 0.6) !important;
  transform: translateY(-2px);
  box-shadow: 
    0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
    0 8px 24px rgba(44, 36, 22, 0.4),
    0 4px 12px rgba(201, 168, 117, 0.3);
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover::after {
  opacity: 1;
}

.cta-button:active {
  transform: translateY(0);
}

:deep(.cta-button .p-button-icon) {
  margin-left: 0.75rem;
  font-size: 0.75rem;
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.cta-button:hover :deep(.p-button-icon) {
  transform: translateX(4px);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 1024px) {
  .luxe-navbar {
    padding: 0.875rem 1.5rem !important;
  }
  
  .brand-name {
    font-size: 1.5rem;
  }
  
  .brand-tagline {
    font-size: 0.55rem;
  }
}

@media (max-width: 768px) {
  .brand-container {
    gap: 1rem;
  }
  
  .logo-frame {
    width: 56px;
    height: 56px;
  }
  
  .brand-logo {
    width: 32px;
  }
  
  .brand-name {
    font-size: 1.25rem;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .ampersand {
    display: none;
  }
  
  .brand-tagline {
    font-size: 0.5rem;
  }
  
  :deep(.nav-link-item .p-menuitem-link) {
    padding: 0.625rem 1rem;
    font-size: 0.8rem;
  }
  
  .cta-button {
    padding: 0.75rem 1.5rem !important;
    font-size: 0.75rem !important;
  }
}

/* ============================================
   ENTRANCE ANIMATION
   ============================================ */

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>