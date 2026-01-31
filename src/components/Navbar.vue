<template>
  <Menubar :model="items" class="modern-navbar">
    <template #start>
      <router-link to="/" class="brand-container">
        <!-- Enhanced Logo Container -->
        <div class="logo-container">
          <img 
            src="/lg.svg" 
            alt="H Cabinet & Furniture Logo" 
            class="brand-logo" 
          />
        </div>
        
        <!-- Clean Typography -->
        <div class="brand-text">
          <h1 class="brand-name">H CABINET & FURNITURE</h1>
          <p class="brand-tagline">Bespoke Interior Atelier</p>
        </div>
      </router-link>
    </template>

    <template #end>
      <router-link to="/contact" class="cta-link">
        <Button 
          label="Get Free Quote" 
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
    command: () => router.push('/'),
    class: 'nav-item'
  },
  {
    label: 'Portfolio',
    command: () => router.push('/portfolio'),
    class: 'nav-item'
  },
  {
    label: 'About',
    command: () => router.push('/about'),
    class: 'nav-item'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

/* ============================================
   MODERN NAVBAR - Clean & Professional
   ============================================ */

.modern-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff !important;
  border: none !important;
  border-bottom: 1px solid #e5e7eb !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  padding: 0 2.5rem !important;
  height: 100px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.modern-navbar:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;
}

/* ============================================
   BRAND CONTAINER
   ============================================ */

.brand-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  padding: 1rem 0;
  transition: opacity 0.3s ease;
}

.brand-container:hover {
  opacity: 0.85;
}

/* ============================================
   LOGO CONTAINER - Enhanced & Prominent
   ============================================ */

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 16px;
  box-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(0, 0, 0, 0.02) inset;
  transition: all 0.3s ease;
}

.brand-container:hover .logo-container {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 0 0 1px rgba(0, 0, 0, 0.03) inset;
  border-color: #d1d5db;
}

.brand-logo {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  filter: brightness(0.95) contrast(1.1);
  transition: all 0.3s ease;
}

.brand-container:hover .brand-logo {
  transform: scale(1.08);
  filter: brightness(0.9) contrast(1.15);
}

/* ============================================
   BRAND TYPOGRAPHY - Clean & Modern
   ============================================ */

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #111827;
  margin: 0;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.brand-container:hover .brand-name {
  color: #374151;
}

.brand-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0;
  line-height: 1;
  transition: color 0.3s ease;
}

.brand-container:hover .brand-tagline {
  color: #4b5563;
}

/* ============================================
   NAVIGATION ITEMS - Minimal & Clean
   ============================================ */

:deep(.p-menubar-root-list) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

:deep(.nav-item) {
  margin: 0;
}

:deep(.nav-item .p-menuitem-link) {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #4b5563 !important;
  padding: 0.625rem 1rem !important;
  border-radius: 8px;
  background: transparent !important;
  border: none;
  transition: all 0.2s ease;
  position: relative;
}

:deep(.nav-item .p-menuitem-link:hover) {
  color: #111827 !important;
  background: #f9fafb !important;
}

:deep(.nav-item .p-menuitem-link:active) {
  background: #f3f4f6 !important;
}

/* Active state indicator */
:deep(.nav-item .p-menuitem-link::after) {
  content: '';
  position: absolute;
  bottom: 0.375rem;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 24px;
  height: 2px;
  background: #111827;
  border-radius: 1px;
  transition: transform 0.3s ease;
}

:deep(.nav-item .p-menuitem-link:hover::after) {
  transform: translateX(-50%) scaleX(1);
}

/* ============================================
   CTA BUTTON - Modern & Compact
   ============================================ */

.cta-link {
  text-decoration: none;
  display: inline-block;
}

.cta-button {
  font-family: 'Inter', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
  
  background: #111827 !important;
  color: #ffffff !important;
  border: 1px solid #111827 !important;
  border-radius: 8px !important;
  
  padding: 0.625rem 1.25rem !important;
  height: auto !important;
  
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.05) inset !important;
  
  transition: all 0.2s ease !important;
  cursor: pointer;
}

.cta-button:hover {
  background: #1f2937 !important;
  border-color: #1f2937 !important;
  transform: translateY(-1px);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05) inset !important;
}

.cta-button:active {
  transform: translateY(0);
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.05) inset !important;
}

:deep(.cta-button .p-button-label) {
  font-weight: 600;
}

:deep(.cta-button .p-button-icon) {
  font-size: 0.875rem;
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.cta-button:hover :deep(.p-button-icon) {
  transform: translateX(2px);
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 1024px) {
  .modern-navbar {
    padding: 0 2rem !important;
    height: 88px;
  }
  
  .brand-name {
    font-size: 1.125rem;
  }
  
  .brand-tagline {
    font-size: 0.6875rem;
  }
  
  .logo-container {
    width: 80px;
    height: 80px;
    padding: 14px;
  }
  
  .brand-container {
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .modern-navbar {
    padding: 0 1.5rem !important;
    height: 80px;
  }
  
  .brand-container {
    gap: 1rem;
  }
  
  .logo-container {
    width: 68px;
    height: 68px;
    padding: 12px;
    border-radius: 12px;
  }
  
  .brand-name {
    font-size: 1rem;
  }
  
  .brand-tagline {
    font-size: 0.625rem;
  }
  
  :deep(.nav-item .p-menuitem-link) {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem !important;
  }
  
  .cta-button {
    font-size: 0.8125rem !important;
    padding: 0.5rem 1rem !important;
  }
  
  :deep(.p-menubar-root-list) {
    gap: 0.25rem;
  }
}

@media (max-width: 640px) {
  .brand-name {
    font-size: 0.875rem;
  }
  
  .brand-tagline {
    display: none;
  }
  
  :deep(.nav-item .p-menuitem-link) {
    padding: 0.5rem !important;
    font-size: 0.8125rem;
  }
  
  .cta-button {
    padding: 0.5rem 0.875rem !important;
  }
  
  :deep(.cta-button .p-button-label) {
    display: none;
  }
  
  :deep(.cta-button .p-button-icon) {
    margin: 0;
  }
}

/* ============================================
   UTILITY CLASSES
   ============================================ */

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Prevent layout shift */
.modern-navbar + * {
  margin-top: 100px;
}

@media (max-width: 1024px) {
  .modern-navbar + * {
    margin-top: 88px;
  }
}

@media (max-width: 768px) {
  .modern-navbar + * {
    margin-top: 80px;
  }
}
</style>