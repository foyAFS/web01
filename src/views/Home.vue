<template>
  <main>
    <!-- Hero Section - Art Deco Luxury -->
    <section id="home" class="hero-section">
      <div class="hero-ornament top-left"></div>
      <div class="hero-ornament top-right"></div>
      <div class="hero-ornament bottom-left"></div>
      <div class="hero-ornament bottom-right"></div>
      
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center min-h-screen py-32">
          <!-- Content Column -->
          <div class="lg:col-span-6 space-y-8 z-10">
            <!-- Decorative Line -->
            <div class="flex items-center gap-4">
              <div class="w-16 h-px bg-gradient-to-r from-transparent via-gold to-gold"></div>
              <span class="text-xs tracking-[0.3em] text-bronze uppercase font-montserrat font-medium">Since 2010</span>
            </div>
            
            <!-- Main Heading -->
            <h1 class="hero-title">
              <span class="title-line">BESPOKE</span>
              <span class="title-line highlight">CRAFTSMANSHIP</span>
              <span class="title-line">FOR YOUR HOME</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="hero-subtitle">
              Where timeless elegance meets modern functionality. Every piece tells a story of meticulous attention to detail and uncompromising quality.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-6 pt-4">
              <Button 
                @click="navigateToSection('services')" 
                label="Our Services" 
                icon="pi pi-compass" 
                class="hero-btn-primary"
              />
              <Button 
                @click="navigateToSection('portfolio')" 
                label="View Gallery" 
                icon="pi pi-arrow-right"
                iconPos="right"
                class="hero-btn-secondary"
              />
            </div>

            <!-- Stats -->
            <div class="flex gap-12 pt-8 border-t border-bronze/20">
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

          <!-- Image Column -->
          <div class="lg:col-span-6 relative">
            <div class="image-container">
              <!-- Geometric Frame -->
              <div class="geo-frame frame-tl"></div>
              <div class="geo-frame frame-tr"></div>
              <div class="geo-frame frame-bl"></div>
              <div class="geo-frame frame-br"></div>
              
              <!-- Main Image -->
              <img 
                src="/Home01.svg"
                alt="H Cabinet & Furniture Showcase"
                class="hero-image"
              />
              
              <!-- Decorative Elements -->
              <div class="accent-square square-1"></div>
              <div class="accent-square square-2"></div>
              <div class="accent-line line-1"></div>
              <div class="accent-line line-2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Pattern -->
      <div class="hero-pattern"></div>
    </section>

    <!-- Services Section - REDESIGNED -->
    <section id="services" class="services-section">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Section Header -->
        <div class="section-header">
          <div class="header-ornament">
            <div class="ornament-line"></div>
            <div class="ornament-diamond"></div>
            <div class="ornament-line"></div>
          </div>
          <h2 class="section-title">WHAT WE DO</h2>
          <p class="section-subtitle">Expert interior decoration services to transform your space</p>
        </div>
        
        <!-- Services Grid with Images -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <!-- Service Card 1 - Custom Cabinetry -->
          <div class="service-card-redesign">
            <!-- Image Container -->
            <div class="service-image-container">
              <div class="image-frame frame-tl"></div>
              <div class="image-frame frame-br"></div>
              <img 
                src="/so.svg"
                alt="Custom Cabinetry"
                class="service-image"
              />
              <div class="image-overlay">
                <i class="pi pi-home overlay-icon"></i>
              </div>
            </div>
            
            <!-- Content -->
            <div class="service-content">
              <h3 class="service-title">Custom Cabinetry</h3>
              <p class="service-description">
                Handcrafted cabinets tailored to your kitchen, bathroom, or storage needs with premium materials.
              </p>
              <ul class="service-list">
                <li><span class="list-dot"></span>Kitchen Cabinets</li>
                <li><span class="list-dot"></span>Bathroom Vanities</li>
                <li><span class="list-dot"></span>Built-in Storage</li>
              </ul>
            </div>
          </div>

          <!-- Service Card 2 - Furniture Design -->
          <div class="service-card-redesign">
            <!-- Image Container -->
            <div class="service-image-container">
              <div class="image-frame frame-tl"></div>
              <div class="image-frame frame-br"></div>
              <img 
                src="/so1.svg"
                alt="Furniture Design"
                class="service-image"
              />
              <div class="image-overlay">
                <i class="pi pi-building overlay-icon"></i>
              </div>
            </div>
            
            <!-- Content -->
            <div class="service-content">
              <h3 class="service-title">Furniture Design</h3>
              <p class="service-description">
                Bespoke furniture pieces that blend style and functionality, crafted to complement your interior.
              </p>
              <ul class="service-list">
                <li><span class="list-dot"></span>Living Room Sets</li>
                <li><span class="list-dot"></span>Bedroom Furniture</li>
                <li><span class="list-dot"></span>Office Solutions</li>
              </ul>
            </div>
          </div>

          <!-- Service Card 3 - Interior Consultation -->
          <div class="service-card-redesign">
            <!-- Image Container -->
            <div class="service-image-container">
              <div class="image-frame frame-tl"></div>
              <div class="image-frame frame-br"></div>
              <img 
                src="/so2.svg"
                alt="Interior Consultation"
                class="service-image"
              />
              <div class="image-overlay">
                <i class="pi pi-pencil overlay-icon"></i>
              </div>
            </div>
            
            <!-- Content -->
            <div class="service-content">
              <h3 class="service-title">Interior Consultation</h3>
              <p class="service-description">
                Professional design guidance to create cohesive, beautiful spaces that reflect your unique style.
              </p>
              <ul class="service-list">
                <li><span class="list-dot"></span>Space Planning</li>
                <li><span class="list-dot"></span>Material Selection</li>
                <li><span class="list-dot"></span>3D Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section">
      <div class="container mx-auto px-6 md:px-12">
        <!-- Section Header -->
        <div class="section-header">
          <div class="header-ornament">
            <div class="ornament-line"></div>
            <div class="ornament-diamond"></div>
            <div class="ornament-line"></div>
          </div>
          <h2 class="section-title">OUR RECENT WORK</h2>
          <p class="section-subtitle">A showcase of beautifully designed interiors</p>
        </div>
        
        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProjectCard v-for="project in projects.slice(0, 3)" :key="project.title" v-bind="project" />
        </div>
        
        <!-- View Gallery Button -->
        <div class="text-center">
          <router-link to="/portfolio">
            <Button 
              label="See Complete Gallery" 
              icon="pi pi-images"
              iconPos="right"
              class="btn-gold-outline"
            />
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="space-y-8">
            <div class="header-ornament">
              <div class="ornament-line"></div>
              <div class="ornament-diamond"></div>
            </div>
            
            <h2 class="about-title">MASTERS OF<br/>FINE INTERIORS</h2>
            
            <div class="space-y-6 text-lg text-warm-gray leading-relaxed">
              <p>
                For over fifteen years, H Cabinet & Furniture has been transforming homes with exceptional interior decoration and custom furniture design.
              </p>
              <p>
                Our team combines traditional craftsmanship with contemporary innovation, ensuring each project reflects your unique vision while standing the test of time.
              </p>
            </div>

            <div class="flex gap-6 pt-4">
              <router-link to="/about">
                <Button 
                  label="Our Story" 
                  icon="pi pi-book"
                  class="btn-dark"
                />
              </router-link>
              <router-link to="/contact">
                <Button 
                  label="Get Free Consultation" 
                  icon="pi pi-calendar"
                  class="btn-gold-outline"
                />
              </router-link>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="about-visual">
            <div class="visual-frame">
              <div class="frame-border border-tl"></div>
              <div class="frame-border border-tr"></div>
              <div class="frame-border border-bl"></div>
              <div class="frame-border border-br"></div>
              
              <div class="visual-content">
                <i class="pi pi-home"></i>
                <div class="visual-text">CRAFTED<br/>WITH CARE</div>
              </div>
            </div>
            
            <div class="visual-accent accent-1"></div>
            <div class="visual-accent accent-2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="contact-overlay"></div>
      
      <div class="container mx-auto px-6 md:px-12 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="header-ornament justify-center">
            <div class="ornament-line"></div>
            <div class="ornament-diamond light"></div>
            <div class="ornament-line"></div>
          </div>
          
          <h2 class="contact-title">
            READY TO TRANSFORM<br/>
            YOUR SPACE?
          </h2>
          
          <p class="contact-subtitle">
            Whether you're planning a complete home makeover or need custom furniture pieces, our expert team is here to bring your vision to life with exceptional craftsmanship.
          </p>

          <router-link to="/contact">
            <Button 
              label="Start Your Project Today" 
              icon="pi pi-arrow-right"
              iconPos="right"
              class="btn-light-premium"
            />
          </router-link>

          <!-- Contact Info -->
          <div class="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/20">
            <div class="contact-info-item">
              <i class="pi pi-phone mb-3"></i>
              <div class="info-label">Call Us</div>
              <div class="info-value">+601119706733</div>
            </div>
            <div class="contact-info-item">
              <i class="pi pi-envelope mb-3"></i>
              <div class="info-label">Email</div>
              <div class="info-value">hcabinetfurnitures@gmail.com</div>
            </div>
            <div class="contact-info-item">
              <i class="pi pi-map-marker mb-3"></i>
              <div class="info-label">Visit Showroom</div>
              <div class="info-value">By Appointment</div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-pattern"></div>
    </section>
  </main>
</template>

<script setup>
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import { projects } from '@/data/projects';

const navigateToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap');

:root {
  --gold: #C9A875;
  --bronze: #8B7355;
  --dark: #2C2416;
  --warm-gray: #5C4D3D;
  --cream: #FAF8F5;
  --white: #FFFFFF;
}

/* ============================================
   HERO SECTION - Art Deco Elegance
   ============================================ */

.hero-section {
  position: relative;
  background: linear-gradient(135deg, 
    #FAF8F5 0%,
    #F5F1EB 50%,
    #EFE9E1 100%
  );
  overflow: hidden;
}

.hero-ornament {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid var(--gold);
  opacity: 0.2;
  z-index: 1;
}

.hero-ornament.top-left {
  top: 100px;
  left: 40px;
  border-right: none;
  border-bottom: none;
}

.hero-ornament.top-right {
  top: 100px;
  right: 40px;
  border-left: none;
  border-bottom: none;
}

.hero-ornament.bottom-left {
  bottom: 100px;
  left: 40px;
  border-right: none;
  border-top: none;
}

.hero-ornament.bottom-right {
  bottom: 100px;
  right: 40px;
  border-left: none;
  border-top: none;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(90deg, 
      transparent, 
      transparent 49px, 
      rgba(139, 115, 85, 0.02) 49px, 
      rgba(139, 115, 85, 0.02) 50px
    ),
    repeating-linear-gradient(0deg, 
      transparent, 
      transparent 49px, 
      rgba(139, 115, 85, 0.02) 49px, 
      rgba(139, 115, 85, 0.02) 50px
    );
  pointer-events: none;
}

/* Hero Typography */
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700;
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--dark);
  margin: 0;
}

.title-line {
  display: block;
  animation: fadeInUp 0.8s ease-out backwards;
}

.title-line:nth-child(1) { animation-delay: 0.2s; }
.title-line:nth-child(2) { animation-delay: 0.4s; }
.title-line:nth-child(3) { animation-delay: 0.6s; }

.title-line.highlight {
  color: var(--gold);
  font-style: italic;
  position: relative;
  padding: 0 0.25em;
}

.title-line.highlight::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0.15em;
  width: 100%;
  height: 0.15em;
  background: var(--bronze);
  transform: scaleX(0);
  transform-origin: left;
  animation: scaleIn 0.8s ease-out 1s forwards;
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--warm-gray);
  max-width: 500px;
  animation: fadeInUp 0.8s ease-out 0.8s backwards;
}

/* Stats */
.stat-item {
  animation: fadeInUp 0.8s ease-out 1s backwards;
}

.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bronze);
  font-weight: 600;
}

/* Image Container */
.image-container {
  position: relative;
  padding: 2rem;
  animation: fadeIn 1.2s ease-out 0.4s backwards;
}

.geo-frame {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 3px solid var(--gold);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 2;
}

.frame-tl {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.frame-tr {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.frame-bl {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.frame-br {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

.image-container:hover .geo-frame {
  width: 80px;
  height: 80px;
}

.hero-image {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 
    0 20px 60px rgba(44, 36, 22, 0.15),
    0 8px 24px rgba(139, 115, 85, 0.1);
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
}

.image-container:hover .hero-image {
  transform: scale(1.02);
}

.accent-square {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 1px solid var(--bronze);
  opacity: 0.3;
  z-index: 0;
}

.square-1 {
  top: -20px;
  right: -20px;
  animation: float 6s ease-in-out infinite;
}

.square-2 {
  bottom: -20px;
  left: -20px;
  animation: float 6s ease-in-out infinite 3s;
}

.accent-line {
  position: absolute;
  background: var(--gold);
  opacity: 0.4;
}

.line-1 {
  width: 2px;
  height: 100px;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
}

.line-2 {
  width: 100px;
  height: 2px;
  bottom: -40px;
  right: 50%;
  transform: translateX(50%);
}

/* ============================================
   BUTTONS
   ============================================ */

.hero-btn-primary {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  
  background: var(--dark) !important;
  color: var(--cream) !important;
  border: 2px solid var(--dark) !important;
  border-radius: 0 !important;
  
  padding: 1rem 2.5rem !important;
  
  box-shadow: 0 4px 16px rgba(44, 36, 22, 0.2);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  animation: fadeInUp 0.8s ease-out 1.2s backwards;
}

.hero-btn-primary:hover {
  background: var(--bronze) !important;
  border-color: var(--bronze) !important;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(139, 115, 85, 0.3);
}

.hero-btn-secondary {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  
  background: transparent !important;
  color: var(--dark) !important;
  border: 2px solid var(--dark) !important;
  border-radius: 0 !important;
  
  padding: 1rem 2.5rem !important;
  
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  animation: fadeInUp 0.8s ease-out 1.4s backwards;
}

.hero-btn-secondary:hover {
  background: var(--dark) !important;
  color: var(--cream) !important;
  transform: translateY(-3px);
}

.btn-gold-outline {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  
  background: transparent !important;
  color: var(--bronze) !important;
  border: 2px solid var(--gold) !important;
  border-radius: 0 !important;
  
  padding: 0.875rem 2rem !important;
  
  transition: all 0.4s ease;
}

.btn-gold-outline:hover {
  background: var(--gold) !important;
  color: var(--dark) !important;
  border-color: var(--gold) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(201, 168, 117, 0.3);
}

.btn-dark {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;
  text-transform: uppercase !important;
  
  background: var(--dark) !important;
  color: var(--cream) !important;
  border: 2px solid var(--dark) !important;
  border-radius: 0 !important;
  
  padding: 0.875rem 2rem !important;
  
  transition: all 0.4s ease;
}

.btn-dark:hover {
  background: var(--bronze) !important;
  border-color: var(--bronze) !important;
  transform: translateY(-2px);
}

.btn-light-premium {
  font-family: 'Montserrat', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;
  
  background: var(--white) !important;
  color: var(--dark) !important;
  border: 2px solid var(--white) !important;
  border-radius: 0 !important;
  
  padding: 1.125rem 3rem !important;
  
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.btn-light-premium:hover {
  background: var(--gold) !important;
  border-color: var(--gold) !important;
  color: var(--dark) !important;
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 40px rgba(201, 168, 117, 0.4);
}

/* ============================================
   SECTIONS
   ============================================ */

.services-section {
  padding: 8rem 0;
  background: var(--white);
  position: relative;
}

.portfolio-section {
  padding: 8rem 0;
  background: var(--cream);
  position: relative;
}

.about-section {
  padding: 8rem 0;
  background: var(--white);
  position: relative;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.header-ornament {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-header .header-ornament {
  justify-content: center;
}

.ornament-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.ornament-diamond {
  width: 12px;
  height: 12px;
  background: var(--gold);
  transform: rotate(45deg);
}

.ornament-diamond.light {
  background: var(--white);
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  color: var(--warm-gray);
  letter-spacing: 0.02em;
}

/* ============================================
   REDESIGNED SERVICE CARDS WITH IMAGES
   ============================================ */

.service-card-redesign {
  background: var(--cream);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  border: 1px solid rgba(139, 115, 85, 0.15);
}

.service-card-redesign::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--bronze));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card-redesign:hover {
  transform: translateY(-12px);
  box-shadow: 
    0 24px 48px rgba(44, 36, 22, 0.12),
    0 12px 24px rgba(139, 115, 85, 0.08);
}

.service-card-redesign:hover::after {
  transform: scaleX(1);
}

/* Service Image Container */
.service-image-container {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(201, 168, 117, 0.08) 0%,
    rgba(139, 115, 85, 0.08) 100%
  );
}

.image-frame {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid var(--gold);
  z-index: 2;
  opacity: 0.6;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.image-frame.frame-tl {
  top: 15px;
  left: 15px;
  border-right: none;
  border-bottom: none;
}

.image-frame.frame-br {
  bottom: 15px;
  right: 15px;
  border-left: none;
  border-top: none;
}

.service-card-redesign:hover .image-frame {
  opacity: 1;
}

.service-card-redesign:hover .image-frame.frame-tl {
  top: 10px;
  left: 10px;
}

.service-card-redesign:hover .image-frame.frame-br {
  bottom: 10px;
  right: 10px;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card-redesign:hover .service-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, 
    transparent 0%,
    rgba(44, 36, 22, 0.4) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card-redesign:hover .image-overlay {
  opacity: 1;
}

.overlay-icon {
  font-size: 3rem;
  color: var(--white);
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.service-card-redesign:hover .overlay-icon {
  transform: translateY(0);
}

/* Service Content */
.service-content {
  padding: 2.5rem 2rem;
  background: var(--white);
}

.service-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
}

.service-card-redesign:hover .service-title {
  color: var(--gold);
}

.service-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--warm-gray);
  margin-bottom: 1.5rem;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: var(--warm-gray);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  transition: color 0.3s ease;
}

.service-card-redesign:hover .service-list li {
  color: var(--dark);
}

.list-dot {
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
}

.list-dot::before {
  content: '';
  position: absolute;
  inset: -3px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  opacity: 0.3;
}

/* ============================================
   ABOUT SECTION
   ============================================ */

.about-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: var(--dark);
}

.about-visual {
  position: relative;
  height: 500px;
}

.visual-frame {
  position: absolute;
  inset: 2rem;
  background: linear-gradient(135deg, 
    rgba(201, 168, 117, 0.05) 0%,
    rgba(139, 115, 85, 0.05) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border: 1px solid var(--bronze);
}

.frame-border {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid var(--gold);
}

.border-tl {
  top: -3px;
  left: -3px;
  border-right: none;
  border-bottom: none;
}

.border-tr {
  top: -3px;
  right: -3px;
  border-left: none;
  border-bottom: none;
}

.border-bl {
  bottom: -3px;
  left: -3px;
  border-right: none;
  border-top: none;
}

.border-br {
  bottom: -3px;
  right: -3px;
  border-left: none;
  border-top: none;
}

.visual-content {
  text-align: center;
}

.visual-content i {
  font-size: 6rem;
  color: var(--gold);
  opacity: 0.6;
  display: block;
  margin-bottom: 1rem;
}

.visual-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--bronze);
  line-height: 1.3;
}

.visual-accent {
  position: absolute;
  background: var(--gold);
  opacity: 0.15;
}

.accent-1 {
  width: 150px;
  height: 2px;
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
}

.accent-2 {
  width: 2px;
  height: 150px;
  top: -80px;
  right: 50%;
  transform: translateX(50%);
}

/* ============================================
   CONTACT SECTION
   ============================================ */

.contact-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, 
    var(--dark) 0%,
    #3D3123 50%,
    var(--dark) 100%
  );
  position: relative;
  overflow: hidden;
}

.contact-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, 
    rgba(201, 168, 117, 0.1) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.contact-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(0deg, 
      transparent, 
      transparent 49px, 
      rgba(201, 168, 117, 0.03) 49px, 
      rgba(201, 168, 117, 0.03) 50px
    );
  pointer-events: none;
}

.contact-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: var(--white);
}

.contact-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
}

.contact-info-item {
  text-align: center;
  color: var(--white);
}

.contact-info-item i {
  font-size: 1.5rem;
  color: var(--gold);
  display: block;
}

.info-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--white);
}

/* ============================================
   ANIMATIONS
   ============================================ */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  .hero-ornament { display: none; }
  
  .stat-item {
    flex: 1;
    min-width: 80px;
  }
  
  .service-image-container {
    height: 240px;
  }
}

@media (max-width: 768px) {
  .services-section,
  .portfolio-section,
  .about-section,
  .contact-section {
    padding: 5rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .service-image-container {
    height: 220px;
  }
  
  .service-content {
    padding: 2rem 1.5rem;
  }
  
  .about-visual {
    height: 400px;
  }
  
  .visual-content i {
    font-size: 4rem;
  }
  
  .visual-text {
    font-size: 1.5rem;
  }
}
</style>