<template>
  <main class="services-page">
    <section class="services-hero">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container mx-auto px-4 md:px-8">
          <div class="hero-text-wrapper">
            <div class="hero-badge" data-aos="fade-up">
              <i class="pi pi-star-fill"></i>
              <span>Premium Interior Solutions</span>
            </div>
            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
              Crafting Spaces.<br/>
              <span class="gradient-text">Creating Memories.</span>
            </h1>
            <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
              From bespoke cabinetry to complete home transformations, H Cabinet Furniture delivers exceptional craftsmanship tailored to Malaysian homes.
            </p>
            <div class="hero-cta-group" data-aos="fade-up" data-aos-delay="300">
              <a :href="whatsappLink" target="_blank" class="btn-primary">
                <i class="pi pi-whatsapp"></i>
                <span>WhatsApp Consultation</span>
              </a>
              <a href="#services-grid" class="btn-secondary">
                <span>Explore Services</span>
                <i class="pi pi-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <section class="featured-gallery">
      <div class="container mx-auto px-4 md:px-8">
        <div class="section-header centered" data-aos="fade-up">
          <span class="section-label">Our Portfolio</span>
          <h2 class="section-title">Recent Projects</h2>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item large" data-aos="zoom-in">
            <div class="gallery-placeholder">
              <i class="pi pi-home"></i>
            </div>
            <div class="gallery-overlay">
              <div class="overlay-content">
                <span class="overlay-category">Kitchen</span>
                <h3 class="overlay-title">Modern Kitchen Renovation</h3>
              </div>
            </div>
          </div>
          
          <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
            <div class="gallery-placeholder">
              <i class="pi pi-box"></i>
            </div>
            <div class="gallery-overlay">
              <div class="overlay-content">
                <span class="overlay-category">Bedroom</span>
                <h3 class="overlay-title">Walk-in Closet</h3>
              </div>
            </div>
          </div>
          
          <div class="gallery-item" data-aos="zoom-in" data-aos-delay="200">
            <div class="gallery-placeholder">
              <i class="pi pi-desktop"></i>
            </div>
            <div class="gallery-overlay">
              <div class="overlay-content">
                <span class="overlay-category">Living</span>
                <h3 class="overlay-title">TV Feature Wall</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services-grid" class="services-overview">
      <div class="container mx-auto px-4 md:px-8">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">What We Offer</span>
          <h2 class="section-title">Our Core Services</h2>
          <p class="section-subtitle">
            Comprehensive interior solutions designed for modern Malaysian living
          </p>
        </div>

        <div class="services-grid">
          <div 
            v-for="(service, index) in coreServices" 
            :key="service.id"
            class="service-card"
            :class="{ 'featured': service.featured }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="card-content">
              <div class="card-icon-static">
                <i :class="service.icon"></i>
              </div>
              <span class="card-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-description">{{ service.description }}</p>
              
              <ul class="card-features">
                <li v-for="feature in service.highlights" :key="feature">
                  <i class="pi pi-check-circle"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              
              <div class="card-footer">
                <a :href="whatsappLink" target="_blank" class="card-link">
                  <span>Get Quote</span>
                  <i class="pi pi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="before-after-section">
      <div class="container mx-auto px-4 md:px-8">
        <div class="section-header centered" data-aos="fade-up">
          <span class="section-label light">Transformations</span>
          <h2 class="section-title light">Design Impact</h2>
          <p class="section-subtitle light">Exceptional results through dedicated craftsmanship</p>
        </div>

        <div class="before-after-grid">
          <div class="ba-item" data-aos="fade-right">
            <h3 class="ba-title">Kitchen Makeover</h3>
            <p class="ba-description">Complete transformation with custom cabinets and modern finishes</p>
          </div>

          <div class="ba-item" data-aos="fade-left">
            <h3 class="ba-title">Master Bedroom</h3>
            <p class="ba-description">Built-in wardrobes and elegant interior design</p>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="process-background"></div>
      <div class="container mx-auto px-4 md:px-8">
        <div class="section-header centered light" data-aos="fade-up">
          <span class="section-label light">Our Approach</span>
          <h2 class="section-title light">How We Work</h2>
        </div>

        <div class="process-timeline">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="process-step"
            data-aos="fade-right"
            :data-aos-delay="index * 100"
          >
            <div class="step-number">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="step-content">
              <h4 class="step-title">{{ step.title }}</h4>
              <p class="step-description">{{ step.description }}</p>
              <div class="step-meta">
                <span class="step-duration">
                  <i class="pi pi-clock"></i>
                  {{ step.duration }}
                </span>
              </div>
            </div>
            <div class="step-line" v-if="index !== processSteps.length - 1"></div>
          </div>
        </div>

        <div class="process-cta" data-aos="fade-up">
          <p>Ready to start your project?</p>
          <a :href="whatsappLink" target="_blank" class="btn-outline-light">
            <i class="pi pi-whatsapp"></i>
            <span>Start Your Journey</span>
          </a>
        </div>
      </div>
    </section>

    <section class="why-choose-section">
      <div class="container mx-auto px-4 md:px-8">
        <div class="why-choose-grid">
          <div class="why-choose-content" data-aos="fade-right">
            <span class="section-label">Why H Cabinet</span>
            <h2 class="section-title">
              Experience The<br/>
              <span class="highlight-text">H Cabinet Difference</span>
            </h2>
            <p class="why-description">
              With over 15 years serving Kuala Lumpur and surrounding areas, we've perfected the art of creating functional, beautiful spaces.
            </p>
            
            <div class="advantages-list">
              <div v-for="(advantage, index) in advantages" :key="advantage.title" class="advantage-item" data-aos="fade-up" :data-aos-delay="index * 100">
                <div class="advantage-icon"><i :class="advantage.icon"></i></div>
                <div class="advantage-content">
                  <h4 class="advantage-title">{{ advantage.title }}</h4>
                  <p class="advantage-description">{{ advantage.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="why-choose-visual" data-aos="fade-left">
            <div class="stats-container">
              <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <div class="cta-overlay"></div>
      <div class="container mx-auto px-4 md:px-8 text-center">
        <div class="cta-content" data-aos="zoom-in">
          <h2 class="cta-title">Let's Create Your Dream Space</h2>
          <p class="cta-description">
            Get a free consultation and detailed quote for your project.
          </p>
          <div class="cta-buttons">
            <a :href="whatsappLink" target="_blank" class="btn-cta-primary">
              <i class="pi pi-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </a>
            <a :href="`tel:${phone}`" class="btn-cta-secondary">
              <i class="pi pi-phone"></i>
              <span>{{ phone }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const phone = '+601119706733';
const whatsappLink = computed(() => `https://wa.me/${phone.replace(/\D/g, '')}`);

const coreServices = ref([
  {
    id: 1,
    title: 'Custom Cabinetry',
    icon: 'pi pi-box',
    description: 'Precision-crafted cabinets tailored to your space, from kitchens to wardrobes.',
    highlights: ['Kitchen & pantry cabinets', 'Wardrobe systems', 'TV consoles'],
    featured: false
  },
  {
    id: 2,
    title: 'Complete Renovation',
    icon: 'pi pi-home',
    description: 'Full-scale interior transformations managing every detail from start to finish.',
    highlights: ['Space planning', 'Electrical & plumbing', 'Flooring works'],
    featured: true
  },
  {
    id: 3,
    title: 'Interior Design',
    icon: 'pi pi-palette',
    description: 'Sophisticated design concepts that blend aesthetics with functionality.',
    highlights: ['3D visualization', 'Material selection', 'Lighting design'],
    featured: false
  },
  {
    id: 4,
    title: 'Carpentry Works',
    icon: 'pi pi-wrench',
    description: 'Expert woodwork and joinery for all your custom furniture needs.',
    highlights: ['Built-in furniture', 'Timber flooring', 'Custom doors'],
    featured: false
  }
]);

const processSteps = ref([
  {
    title: 'Free Consultation',
    description: 'Share your ideas, budget, and timeline. We listen and understand your vision.',
    duration: '30-60 mins'
  },
  {
    title: 'Site Visit',
    description: 'Our team visits your space to take accurate measurements and assess requirements.',
    duration: '1-2 hours'
  },
  {
    title: 'Design & Renders',
    description: 'We create detailed designs with 3D renders so you can see your space first.',
    duration: '3-7 days'
  },
  {
    title: 'Installation',
    description: 'Expert installation, final inspection, and official project handover.',
    duration: '1-3 weeks'
  }
]);

const advantages = ref([
  {
    title: 'Malaysian Expertise',
    icon: 'pi pi-map-marker',
    description: 'Deep understanding of local homes and design preferences.'
  },
  {
    title: 'End-to-End Service',
    icon: 'pi pi-shield',
    description: 'From design to installation, we handle everything under one roof.'
  },
  {
    title: 'Quality Craftsmanship',
    icon: 'pi pi-star',
    description: 'Skilled artisans and premium materials for lasting beauty.'
  }
]);

const stats = ref([
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24hr', label: 'Response Time' }
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Libre+Baskerville:wght@400;700&display=swap');

:root {
  --primary: #D4A574;
  --primary-dark: #B8864F;
  --secondary: #2C2416;
  --text: #333333;
  --text-light: #666666;
  --bg: #FFFFFF;
  --bg-secondary: #F8F7F4;
  --bg-dark: #1A1510;
  --border: #E5E5E5;
}

.services-page {
  font-family: 'Outfit', sans-serif;
  color: var(--text);
  background: var(--bg);
}

/* Hero Section */
.services-hero {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: var(--bg-dark);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 21, 16, 0.95) 0%, rgba(44, 36, 22, 0.8) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-title {
  font-family: 'Libre Baskerville', serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  color: #FFFFFF;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.gradient-text {
  color: var(--primary);
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* Gallery Placeholders */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  grid-column: span 4;
  height: 350px;
  background: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-item.large {
  grid-column: span 8;
}

.gallery-placeholder i {
  font-size: 4rem;
  color: var(--primary);
  opacity: 0.2;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  color: #FFFFFF;
}

/* Service Cards */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #FFFFFF;
  padding: 3rem 2rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  position: relative;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.card-icon-static {
  width: 60px;
  height: 60px;
  background: var(--bg-secondary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.card-icon-static i {
  font-size: 1.75rem;
  color: var(--primary);
}

.card-title {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--primary);
  color: #FFFFFF;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  border-radius: 50px;
  text-decoration: none;
}

/* Process Section */
.process-section {
  padding: 6rem 0;
  background: var(--bg-dark);
}

.process-timeline {
  max-width: 800px;
  margin: 4rem auto;
}

.process-step {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  color: #FFFFFF;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
}

/* Sections */
section {
  padding: 8rem 0;
}

.section-label {
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Libre Baskerville', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.section-title.light {
  color: #FFFFFF;
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-item, .gallery-item.large {
    grid-column: span 12;
    height: 250px;
  }
  
  .hero-cta-group {
    flex-direction: column;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>