<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <!-- Brand -->
      <router-link to="/" class="brand">
        <div class="logo">
          <img src="/lg.svg" alt="H Cabinet & Furniture" loading="eager" />
        </div>
        <div class="brand-text">
          <h1>H CABINET & FURNITURE</h1>
          <p>Bespoke Interior Atelier</p>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="nav-links">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-link"
          active-class="active"
        >
          {{ item.label }}
        </router-link>
      </div>

      <!-- CTA Button -->
      <router-link to="/contact" class="cta-btn">
        <span>Get Free Quote</span>
        <i class="pi pi-arrow-right"></i>
      </router-link>

      <!-- Mobile Menu Toggle -->
      <button 
        class="menu-toggle" 
        @click="toggleMobileMenu"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="mobileMenuOpen"
      >
        <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="mobile-link"
          active-class="active"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </router-link>
        <router-link 
          to="/contact" 
          class="mobile-link primary"
          @click="closeMobileMenu"
        >
          Get Free Quote
          <i class="pi pi-arrow-right"></i>
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

// Navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' }
];

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow;
}

.navbar.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-bottom-color: #d1d5db;
}

.nav-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* ===== BRAND ===== */
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

.brand:hover {
  opacity: 0.85;
}

.logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f9fafb, #fff);
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.brand:hover .logo {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  border-color: #d1d5db;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand:hover .logo img {
  transform: scale(1.1);
}

.brand-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: 0.02em;
  margin: 0 0 2px 0;
  line-height: 1.2;
  transition: color 0.2s ease;
}

.brand:hover .brand-text h1 {
  color: #374151;
}

.brand-text p {
  font-family: 'Inter', sans-serif;
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0;
  line-height: 1;
  transition: color 0.2s ease;
}

.brand:hover .brand-text p {
  color: #4b5563;
}

/* ===== NAV LINKS (DESKTOP) ===== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: #111827;
  background: #f9fafb;
}

.nav-link.active {
  color: #111827;
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #111827;
  border-radius: 1px;
}

/* ===== CTA BUTTON ===== */
.cta-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background: #111827;
  color: #fff;
  text-decoration: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #111827;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.cta-btn:hover {
  background: #1f2937;
  border-color: #1f2937;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.cta-btn:active {
  transform: translateY(0);
}

.cta-btn i {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.cta-btn:hover i {
  transform: translateX(3px);
}

/* ===== MOBILE MENU TOGGLE ===== */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #111827;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.menu-toggle:hover {
  background: #f9fafb;
}

.menu-toggle:active {
  background: #f3f4f6;
}

/* ===== MOBILE MENU ===== */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid #e5e7eb;
  padding: 1rem;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.mobile-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-link:hover {
  background: #f9fafb;
  color: #111827;
}

.mobile-link.active {
  background: #f9fafb;
  color: #111827;
  font-weight: 600;
}

.mobile-link.primary {
  background: #111827;
  color: #fff;
  font-weight: 600;
  margin-top: 0.5rem;
  justify-content: center;
  gap: 0.5rem;
}

.mobile-link.primary:hover {
  background: #1f2937;
}

.mobile-link.primary i {
  font-size: 0.75rem;
}

/* ===== TRANSITIONS ===== */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .nav-container {
    height: 70px;
    padding: 0 1.25rem;
  }
  
  .logo {
    width: 50px;
    height: 50px;
    padding: 8px;
  }
  
  .brand-text h1 {
    font-size: 0.9375rem;
  }
  
  .brand-text p {
    font-size: 0.5625rem;
  }
  
  .nav-link {
    font-size: 0.8125rem;
    padding: 0.5rem 0.75rem;
  }
  
  .cta-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-links,
  .cta-btn {
    display: none;
  }
  
  .menu-toggle {
    display: block;
  }
  
  .mobile-menu {
    display: flex;
  }
  
  .brand {
    gap: 0.75rem;
  }
  
  .logo {
    width: 48px;
    height: 48px;
  }
  
  .brand-text h1 {
    font-size: 0.875rem;
  }
}

@media (max-width: 640px) {
  .brand-text h1 {
    font-size: 0.8125rem;
  }
  
  .brand-text p {
    display: none;
  }
  
  .logo {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }
}

/* ===== UTILITY ===== */
.navbar + * {
  margin-top: 80px;
}

@media (max-width: 1024px) {
  .navbar + * {
    margin-top: 70px;
  }
}
</style>