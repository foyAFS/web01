<template>
  <main class="modern-home">
    <!-- Hero Section - Visual First -->
    <section class="hero-section">
      <div class="hero-slideshow">
        <!-- Image Slides -->
        <transition-group name="slide-fade">
          <div 
            v-for="(image, index) in heroImages" 
            :key="image"
            v-show="currentSlide === index"
            class="hero-slide"
          >
            <img 
              :src="image" 
              :alt="`Showcase ${index + 1}`" 
              class="hero-image"
              @error="handleHeroImageError"
            />
            <div class="hero-overlay"></div>
          </div>
        </transition-group>

        <!-- Hero Content -->
        <div class="hero-content">
          <div class="container">
            <h1 class="hero-title">Crafted Excellence</h1>
            <p class="hero-motto">Where Vision Meets Reality</p>
            
            <div class="hero-actions">
              <router-link to="/portfolio" class="modern-btn modern-btn-primary">
                <span>View Portfolio</span>
                <i class="pi pi-arrow-right"></i>
              </router-link>
              <router-link to="/contact" class="modern-btn modern-btn-outline">
                <span>Get Quote</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Slide Navigation -->
        <div class="slide-nav">
          <button 
            v-for="(_, index) in heroImages" 
            :key="index"
            @click="currentSlide = index"
            :class="['nav-dot', { active: currentSlide === index }]"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <!-- Slide Controls -->
        <button @click="prevSlide" class="slide-control prev" aria-label="Previous slide">
          <i class="pi pi-chevron-left"></i>
        </button>
        <button @click="nextSlide" class="slide-control next" aria-label="Next slide">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </section>

    <!-- Services Section - Visual Grid -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-subtitle">Expert craftsmanship for your space</p>
        </div>

        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.title"
            class="service-card"
          >
            <div class="service-image-wrapper">
              <img :src="service.image" :alt="service.title" class="service-image" />
              <div class="service-overlay">
                <i :class="service.icon"></i>
              </div>
            </div>
            <div class="service-info">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Gallery - Dynamic Images -->
    <section class="gallery-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Portfolio</h2>
          <p class="section-subtitle">Explore our completed projects showcasing quality craftsmanship</p>
        </div>

        <div class="gallery-grid">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="index"
            class="gallery-item"
            @click="openLightbox(index)"
          >
            <img 
              :src="image" 
              :alt="`Project ${index + 1}`" 
              class="gallery-image"
              @error="handleImageError"
            />
            <div class="gallery-overlay">
              <i class="pi pi-search-plus"></i>
            </div>
          </div>
        </div>

        <div class="gallery-actions">
          <router-link to="/portfolio" class="modern-btn modern-btn-outline">
            <span>View All Projects</span>
            <i class="pi pi-images"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section - Minimal -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-title">Fifteen Years of Excellence</h2>
            <p class="about-description">
              We transform spaces through exceptional craftsmanship and innovative design. 
              Every project reflects our commitment to quality and attention to detail.
            </p>
            <div class="about-actions">
              <router-link to="/about" class="modern-btn modern-btn-secondary">
                <i class="pi pi-info-circle"></i>
                <span>Our Story</span>
              </router-link>
            </div>
          </div>
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Projects</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Years</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Project?</h2>
          <p class="cta-description">Let's bring your vision to life with exceptional craftsmanship</p>
          <div class="cta-actions">
            <router-link to="/contact" class="modern-btn modern-btn-primary modern-btn-large">
              <span>Get Free Consultation</span>
              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>
          
          <div class="contact-info">
            <div class="info-item">
              <i class="pi pi-phone"></i>
              <span>+601119706733</span>
            </div>
            <div class="info-item">
              <i class="pi pi-envelope"></i>
              <span>hcabinetfurnitures@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close lightbox">
          <i class="pi pi-times"></i>
        </button>
        <img :src="galleryImages[lightboxIndex]" :alt="`Project ${lightboxIndex + 1}`" class="lightbox-image" @click.stop />
        <button @click.stop="prevImage" class="lightbox-nav prev" aria-label="Previous image">
          <i class="pi pi-chevron-left"></i>
        </button>
        <button @click.stop="nextImage" class="lightbox-nav next" aria-label="Next image">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Hero Slideshow - Using working images only
const heroImages = ref([
  '/wp1.svg',
  '/wp2.svg',
  '/wp3.svg',
  '/wp4.svg',
  '/wp6.svg',
  '/wp7.svg',
  '/wp8.svg',
  '/wp9.svg',
  '/wp10.svg',
  '/wp14.svg'  // Adding wp14 back to hero
]);

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroImages.value.length;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? heroImages.value.length - 1 
    : currentSlide.value - 1;
};

const startSlideshow = () => {
  slideInterval = setInterval(nextSlide, 7000); // 7 seconds per slide for better viewing
};

const stopSlideshow = () => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
};

// Services
const services = ref([
  {
    title: 'Custom Cabinetry',
    description: 'Handcrafted cabinets for every space',
    image: '/so.svg',
    icon: 'pi pi-th-large'
  },
  {
    title: 'Furniture Design',
    description: 'Bespoke pieces for your home',
    image: '/so1.svg',
    icon: 'pi pi-building'
  },
  {
    title: 'Interior Solutions',
    description: 'Complete design consultation',
    image: '/so2.svg',
    icon: 'pi pi-palette'
  }
]);

// Gallery - Using all remaining working images (11 images)
const galleryImages = ref([]);

const loadGalleryImages = () => {
  // Use wp11, wp12, wp13, wp15-wp21 (excluding wp5 and wp14 which are in hero)
  const galleryImageNumbers = [11, 12, 13, 15, 16, 17, 18, 19, 20, 21];
  
  galleryImageNumbers.forEach(num => {
    galleryImages.value.push(`/wp${num}.svg`);
  });
};

// Lightbox
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.value.length;
};

const prevImage = () => {
  lightboxIndex.value = lightboxIndex.value === 0 
    ? galleryImages.value.length - 1 
    : lightboxIndex.value - 1;
};

// Handle image loading errors
const handleImageError = (event) => {
  console.warn('Failed to load gallery image:', event.target.src);
  // Hide the parent gallery item if image fails
  const galleryItem = event.target.closest('.gallery-item');
  if (galleryItem) {
    galleryItem.style.display = 'none';
  }
};

// Handle hero image errors
const handleHeroImageError = (event) => {
  console.warn('Failed to load hero image:', event.target.src);
  // Skip to next slide if hero image fails
  nextSlide();
};

// Keyboard navigation for lightbox
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;
  
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  }
};

// Lifecycle
onMounted(() => {
  loadGalleryImages();
  startSlideshow();
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  stopSlideshow();
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

/* ============================================
   BASE STYLES
   ============================================ */

* {
  scroll-behavior: smooth;
}

.modern-home {
  background: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ============================================
   HERO SECTION - SLIDESHOW
   ============================================ */

.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
}

.hero-slideshow {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

.hero-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  z-index: 10;
}

.hero-content .container {
  text-align: center;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-motto {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2.5rem 0;
  letter-spacing: 0.05em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Slide Navigation */
.slide-nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 20;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.nav-dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
}

.nav-dot.active {
  background: #ffffff;
  border-color: #ffffff;
  transform: scale(1.3);
}

/* Slide Controls */
.slide-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;
}

.slide-control:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.slide-control.prev {
  left: 2rem;
}

.slide-control.next {
  right: 2rem;
}

/* Slide Transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 1s ease;
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
}

/* ============================================
   SECTION HEADERS
   ============================================ */

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
  letter-spacing: 0.02em;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
}

/* ============================================
   SERVICES SECTION
   ============================================ */

.services-section {
  padding: 5rem 0;
  background: #ffffff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #c9a875;
}

.service-image-wrapper {
  position: relative;
  height: 260px;
  overflow: hidden;
  background: #f9fafb;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-card:hover .service-image {
  transform: scale(1.08);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17, 24, 39, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-overlay i {
  font-size: 3rem;
  color: #ffffff;
}

.service-info {
  padding: 1.75rem;
}

.service-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
}

.service-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
}

/* ============================================
   GALLERY SECTION
   ============================================ */

.gallery-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: #d1d5db;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(17, 24, 39, 0.75) 0%, rgba(17, 24, 39, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  font-size: 2.5rem;
  color: #ffffff;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.gallery-actions {
  text-align: center;
}

/* ============================================
   ABOUT SECTION
   ============================================ */

.about-section {
  padding: 5rem 0;
  background: #ffffff;
}

.about-content {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  margin-bottom: 3rem;
}

.about-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.5rem 0;
}

.about-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4b5563;
  margin: 0 0 2rem 0;
}

.about-actions {
  display: flex;
  justify-content: center;
}

.about-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 3rem 0;
  border-top: 1px solid #e5e7eb;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6b7280;
}

/* ============================================
   CTA SECTION
   ============================================ */

.cta-section {
  padding: 5rem 0;
  background: #ffffff;
  color: #111827;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
}

.cta-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: #4b5563;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}

.cta-actions {
  margin-bottom: 3rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding-top: 2.5rem;
  border-top: 1px solid #e5e7eb;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  color: #111827;
}

.info-item i {
  font-size: 1.125rem;
  color: #6b7280;
}

/* ============================================
   LIGHTBOX
   ============================================ */

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  backdrop-filter: blur(8px);
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav.prev {
  left: 2rem;
}

.lightbox-nav.next {
  right: 2rem;
}

/* ============================================
   MODERN BUTTON STYLES
   ============================================ */

.modern-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.modern-btn-primary {
  background: #111827;
  color: #ffffff;
  border: 1px solid #111827;
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(0, 0, 0, 0.05) inset;
}

.modern-btn-primary:hover {
  background: #1f2937;
  border-color: #1f2937;
  transform: translateY(-1px);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.05) inset;
}

.modern-btn-secondary {
  background: #f3f4f6;
  color: #111827;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.modern-btn-secondary:hover {
  background: #e5e7eb;
  border-color: #d1d5db;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.modern-btn-outline {
  background: #ffffff;
  color: #111827;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.modern-btn-outline:hover {
  background: #f9fafb;
  border-color: #9ca3af;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.modern-btn-large {
  font-size: 0.9375rem;
  padding: 0.875rem 1.75rem;
}

.modern-btn:hover i {
  transform: translateX(2px);
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 768px) {
  .hero-section {
    height: calc(100vh - 80px);
    min-height: 500px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-motto {
    font-size: 1.125rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .slide-control {
    width: 40px;
    height: 40px;
  }

  .slide-control.prev {
    left: 1rem;
  }

  .slide-control.next {
    right: 1rem;
  }

  .services-section,
  .gallery-section,
  .about-section,
  .cta-section {
    padding: 4rem 0;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .about-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1.5rem;
  }

  .lightbox-nav {
    width: 48px;
    height: 48px;
  }

  .lightbox-nav.prev {
    left: 1rem;
  }

  .lightbox-nav.next {
    right: 1rem;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }

  .slide-nav {
    bottom: 1rem;
  }

  .nav-dot {
    width: 10px;
    height: 10px;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>