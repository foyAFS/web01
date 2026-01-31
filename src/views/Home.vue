<template>
  <main class="modern-home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-slideshow">
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
            />
            <div class="hero-overlay"></div>
          </div>
        </transition-group>

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

        <div class="slide-nav">
          <button 
            v-for="(_, index) in heroImages" 
            :key="index"
            @click="currentSlide = index"
            :class="['nav-dot', { active: currentSlide === index }]"
          ></button>
        </div>

        <button @click="prevSlide" class="slide-control prev">
          <i class="pi pi-chevron-left"></i>
        </button>
        <button @click="nextSlide" class="slide-control next">
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>
    </section>

    <!-- Services Section -->
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
              <img 
                :src="service.image" 
                :alt="service.title" 
                class="service-image"
              />
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

    <!-- Portfolio Gallery -->
    <section class="gallery-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Portfolio</h2>
          <p class="section-subtitle">Explore our completed projects</p>
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

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-title">Fifteen Years of Excellence</h2>
            <p class="about-description">
              We transform spaces through exceptional craftsmanship and innovative design.
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Project?</h2>
          <p class="cta-description">Let's bring your vision to life</p>
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

    <!-- Lightbox -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox">
            <i class="pi pi-times"></i>
          </button>
          <img 
            :src="galleryImages[lightboxIndex]" 
            :alt="`Project ${lightboxIndex + 1}`" 
            class="lightbox-image" 
            @click.stop 
          />
          <button @click.stop="prevImage" class="lightbox-nav prev">
            <i class="pi pi-chevron-left"></i>
          </button>
          <button @click.stop="nextImage" class="lightbox-nav next">
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </transition>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const heroImages = ref([
  '/wp1.svg', '/wp2.svg', '/wp3.svg', '/wp4.svg', '/wp6.svg',
  '/wp7.svg', '/wp8.svg', '/wp9.svg', '/wp10.svg', '/wp14.svg'
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
  slideInterval = setInterval(nextSlide, 5000);
};

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

const galleryImages = ref([
  '/wp11.svg', '/wp12.svg', '/wp13.svg', '/wp15.svg', '/wp16.svg',
  '/wp17.svg', '/wp18.svg', '/wp19.svg', '/wp20.svg', '/wp21.svg'
]);

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

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') prevImage();
  else if (e.key === 'ArrowRight') nextImage();
};

const handleImageError = (event) => {
  const galleryItem = event.target.closest('.gallery-item');
  if (galleryItem) {
    galleryItem.style.display = 'none';
  }
};

onMounted(() => {
  startSlideshow();
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
  document.body.style.overflow = '';
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

.modern-home {
  background: #fff;
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
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
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
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
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-motto {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(255,255,255,0.9);
  margin: 0 0 2rem 0;
  letter-spacing: 0.05em;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

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
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
  border: 2px solid rgba(255,255,255,0.6);
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.nav-dot.active {
  background: #fff;
  transform: scale(1.3);
}

.slide-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 20;
}

.slide-control:hover {
  background: rgba(255,255,255,0.25);
}

.slide-control.prev { left: 1.5rem; }
.slide-control.next { right: 1.5rem; }

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.6s;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}

/* Sections */
.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
}

.section-subtitle {
  font-size: 1rem;
  color: #6b7280;
}

/* Services */
.services-section {
  padding: 3.5rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

.service-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #f9fafb;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.service-card:hover .service-image {
  transform: scale(1.08);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17,24,39,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-overlay i {
  font-size: 2.5rem;
  color: #fff;
}

.service-info {
  padding: 1.5rem;
}

.service-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.375rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.service-description {
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
}

/* Gallery */
.gallery-section {
  padding: 3.5rem 0;
  background: linear-gradient(to bottom, #f9fafb, #fff);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.gallery-item {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
}

.gallery-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(17,24,39,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  font-size: 2rem;
  color: #fff;
}

.gallery-actions {
  text-align: center;
}

/* About */
.about-section {
  padding: 3.5rem 0;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  margin-bottom: 3rem;
}

.about-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  margin: 0 0 1.5rem 0;
}

.about-description {
  font-size: 1.0625rem;
  line-height: 1.7;
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
  gap: 3.5rem;
  padding: 2.5rem 0;
  border-top: 1px solid #e5e7eb;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6b7280;
}

/* CTA */
.cta-section {
  padding: 3.5rem 0;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.cta-description {
  font-size: 1.0625rem;
  color: #4b5563;
  margin: 0 0 2rem 0;
}

.cta-actions {
  margin-bottom: 2.5rem;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9375rem;
}

.info-item i {
  color: #6b7280;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.lightbox-close:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

.lightbox-nav:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox-nav.prev { left: 1.5rem; }
.lightbox-nav.next { right: 1.5rem; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Buttons */
.modern-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid transparent;
}

.modern-btn-primary {
  background: #111827;
  color: #fff;
  border-color: #111827;
}

.modern-btn-primary:hover {
  background: #1f2937;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

.modern-btn-secondary {
  background: #f3f4f6;
  color: #111827;
  border-color: #e5e7eb;
}

.modern-btn-secondary:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

.modern-btn-outline {
  background: #fff;
  color: #111827;
  border-color: #d1d5db;
}

.modern-btn-outline:hover {
  background: #f9fafb;
  border-color: #9ca3af;
  transform: translateY(-1px);
}

.modern-btn-large {
  font-size: 0.9375rem;
  padding: 0.875rem 1.75rem;
}

.modern-btn:hover i {
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }

  .services-section,
  .gallery-section,
  .about-section,
  .cta-section {
    padding: 2.5rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>