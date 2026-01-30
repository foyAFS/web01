<template>
  <main class="about-page">
    
    <!-- ============================================
         LAYOUT OPTION 1: HERO-SPLIT (Currently Active)
         Intimate side-by-side with asymmetric grid
         ============================================ -->
    
    <!-- Hero Section - Asymmetric Split -->
    <section class="hero-split">
      <div class="container-compact">
        <div class="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Text Content - 5 cols -->
          <div class="col-span-12 lg:col-span-5 space-y-6">
            <span class="section-label">About Us</span>
            <h1 class="hero-title">Where Vision Meets Craftsmanship</h1>
            <p class="hero-description">
              For over 15 years, we've been transforming ordinary spaces into extraordinary 
              environments that inspire, comfort, and endure.
            </p>
            
            <!-- Compact Stats Row -->
            <div class="stats-inline">
              <div class="stat-compact">
                <div class="stat-number">500+</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-compact">
                <div class="stat-number">15+</div>
                <div class="stat-label">Years</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-compact">
                <div class="stat-number">98%</div>
                <div class="stat-label">Satisfied</div>
              </div>
            </div>
          </div>
          
          <!-- Image - 7 cols with overflow -->
          <div class="col-span-12 lg:col-span-7 lg:-ml-8 relative z-10">
            <div class="image-frame">
              <div class="image-container aspect-[4/5] overflow-hidden rounded-3xl">
                <img 
                  src="/fp.svg" 
                  alt="Our design philosophy showcasing custom interior work"
                  class="image-zoom"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section - Side by Side with Quote -->
    <section class="story-section">
      <div class="container-compact">
        <div class="grid grid-cols-12 gap-12 items-center">
          <!-- Image Collage - 6 cols -->
          <div class="col-span-12 lg:col-span-6 relative">
            <div class="collage-stack">
              <div class="collage-main aspect-[3/2] overflow-hidden rounded-2xl">
                <img 
                  src="/ab2.svg" 
                  alt="Crafting timeless interiors since 2009"
                  class="image-zoom"
                  loading="lazy"
                />
              </div>
              <div class="collage-overlay aspect-[4/5] overflow-hidden rounded-2xl">
                <img 
                  src="/ab5.svg" 
                  alt="Detailed craftsmanship process"
                  class="image-zoom"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <!-- Content - 6 cols -->
          <div class="col-span-12 lg:col-span-6 space-y-6 lg:-mt-16 relative z-10">
            <span class="section-label">Our Story</span>
            <h2 class="section-title">Crafting Timeless Interiors Since 2009</h2>
            
            <!-- Pull Quote with decorative mark -->
            <div class="pull-quote">
              <span class="quote-mark" aria-hidden="true">"</span>
              <p class="quote-text">
                Founded with a passion for transforming spaces, we began as a boutique interior 
                design studio. Our vision: create interiors that tell stories.
              </p>
            </div>
            
            <div class="prose-compact">
              <p>
                Today, we're a full-service design atelier specializing in residential, commercial, 
                and hospitality projects. From initial concept to final installation, we bring 
                meticulous attention to detail and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Grid - Bento Box Style -->
    <section class="values-section">
      <div class="container-compact">
        <div class="section-header-compact">
          <span class="section-label">Our Values</span>
          <h2 class="section-title">What Defines Our Work</h2>
        </div>
        
        <div class="values-bento">
          <article 
            v-for="(value, index) in values" 
            :key="value.title"
            class="value-card fade-up"
            :class="`delay-${index}`"
          >
            <div class="value-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Approach Section - Compact Steps -->
    <section class="approach-section">
      <div class="container-compact">
        <div class="grid grid-cols-12 gap-12 items-start">
          <!-- Sticky Image - 5 cols -->
          <div class="col-span-12 lg:col-span-5">
            <div class="sticky-container">
              <div class="image-matte aspect-[4/5] overflow-hidden rounded-2xl">
                <img 
                  src="/ab3.svg" 
                  alt="Our collaborative design process"
                  class="image-zoom object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <!-- Content - 7 cols -->
          <div class="col-span-12 lg:col-span-7 space-y-8">
            <div>
              <span class="section-label">Our Approach</span>
              <h2 class="section-title">Built on Trust & Collaboration</h2>
              <p class="approach-intro">
                Every project begins with listening. We take time to understand your vision, 
                lifestyle, and aspirations through collaborative design sessions.
              </p>
            </div>
            
            <div class="steps-compact">
              <div 
                v-for="(step, index) in approachSteps" 
                :key="step.title"
                class="step-card fade-up"
                :class="`delay-${index}`"
              >
                <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
                <div class="step-content">
                  <h4 class="step-title">{{ step.title }}</h4>
                  <p class="step-description">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section - Horizontal Scroll on Mobile -->
    <section class="team-section">
      <div class="container-compact">
        <div class="section-header-compact mb-12">
          <span class="section-label">Our Team</span>
          <h2 class="section-title">Passionate Designers, Exceptional Results</h2>
          <p class="section-intro">
            Our multidisciplinary team brings together interior designers, architects, and 
            artisans united by a shared commitment to creating spaces that inspire.
          </p>
        </div>
        
        <div class="team-highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">✦</div>
            <div class="highlight-text">Award-winning design team</div>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">✦</div>
            <div class="highlight-text">Certified sustainable specialists</div>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">✦</div>
            <div class="highlight-text">Collaborative partnership approach</div>
          </div>
        </div>
        
        <!-- Team Image Showcase -->
        <div class="team-showcase mt-12">
          <figure class="team-figure">
            <div class="image-matte aspect-[3/2] overflow-hidden rounded-2xl">
              <img 
                src="/ab4.svg" 
                alt="Our talented multidisciplinary design team"
                class="image-zoom"
                loading="lazy"
              />
            </div>
            <figcaption class="team-caption">
              United by craftsmanship and creativity
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- CTA Section - Intimate & Warm -->
    <section class="cta-section">
      <div class="container-compact">
        <div class="cta-content">
          <span class="cta-label">Let's Create Together</span>
          <h2 class="cta-title">Ready to Transform Your Space?</h2>
          <p class="cta-description">
            Let's collaborate on creating an interior that reflects your unique story 
            and stands the test of time.
          </p>
          <router-link to="/contact" class="cta-button group">
            <span>Start Your Project</span>
            <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { onMounted } from 'vue';

const values = [
  {
    title: 'Timeless Design',
    description: 'We create interiors that transcend trends, focusing on enduring beauty and functionality.'
  },
  {
    title: 'Meticulous Craftsmanship',
    description: 'Every detail matters. From material selection to final installation, we ensure quality.'
  },
  {
    title: 'Personal Connection',
    description: 'Your space should tell your story. We invest time in understanding your vision.'
  },
  {
    title: 'Sustainable Practice',
    description: 'We prioritize eco-friendly materials that benefit both our clients and the planet.'
  }
];

const approachSteps = [
  {
    title: 'Discovery & Consultation',
    description: 'Understanding your needs, style preferences, and project goals through in-depth consultation.'
  },
  {
    title: 'Concept Development',
    description: 'Creating detailed design concepts with mood boards, 3D renderings, and material selections.'
  },
  {
    title: 'Planning & Coordination',
    description: 'Handling all logistics, from vendor coordination to project timelines.'
  },
  {
    title: 'Installation & Reveal',
    description: 'Carefully installing and styling every element to perfection.'
  }
];

// Scroll reveal animation
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

/* ============================================
   DESIGN TOKENS - Warm & Cozy
   ============================================ */
:root {
  --stone-50: #FAF8F5;
  --stone-100: #F5F2ED;
  --stone-500: #8B7355;
  --stone-600: #5C4D3D;
  --stone-700: #3D3123;
  --stone-800: #2C2416;
  --stone-900: #1C1510;
  --accent: #C9A875;
  --accent-pale: #EBED9E;
}

.about-page {
  background: var(--stone-50);
  min-height: 100vh;
}

/* ============================================
   CONTAINERS - Compact & Cozy
   ============================================ */
.container-compact {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .container-compact {
    padding: 0 3rem;
  }
}

/* ============================================
   TYPOGRAPHY SYSTEM
   ============================================ */
.section-label {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--stone-500);
  margin-bottom: 0.75rem;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--stone-800);
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--stone-800);
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}

.hero-description,
.section-intro {
  font-family: Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.625;
  color: var(--stone-600);
  max-width: 65ch;
}

.prose-compact p {
  font-family: Georgia, serif;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--stone-600);
}

/* ============================================
   HERO SECTION - Asymmetric Split
   ============================================ */
.hero-split {
  padding: 5rem 0 4rem;
  background: linear-gradient(to bottom, var(--stone-100) 0%, var(--stone-50) 100%);
}

/* Compact Stats Row */
.stats-inline {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(139, 115, 85, 0.15);
}

.stat-compact {
  text-align: center;
}

.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--stone-500);
}

.stat-divider {
  width: 1px;
  height: 2rem;
  background: rgba(139, 115, 85, 0.2);
}

/* ============================================
   IMAGE SYSTEM - Optimized & Cozy
   ============================================ */
.image-frame {
  padding: 0.5rem;
  background: var(--stone-800);
  border-radius: 1.75rem;
  box-shadow: 0 20px 60px rgba(28, 21, 16, 0.12);
}

.image-matte {
  padding: 0.5rem;
  background: var(--stone-800);
  border-radius: 1.25rem;
}

.image-container,
.image-matte > img,
.image-zoom {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-zoom {
  transition: transform 700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.image-container:hover .image-zoom,
.image-matte:hover .image-zoom {
  transform: scale(1.05);
}

/* ============================================
   STORY SECTION - Image Collage
   ============================================ */
.story-section {
  padding: 5rem 0;
  background: white;
}

.collage-stack {
  position: relative;
  display: grid;
  gap: 1.5rem;
}

.collage-main {
  padding: 0.5rem;
  background: var(--stone-800);
  border-radius: 1.25rem;
  box-shadow: 0 12px 40px rgba(28, 21, 16, 0.1);
}

.collage-overlay {
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  width: 45%;
  padding: 0.5rem;
  background: var(--stone-800);
  border-radius: 1.25rem;
  box-shadow: 0 16px 48px rgba(28, 21, 16, 0.15);
  z-index: 10;
}

@media (max-width: 1024px) {
  .collage-overlay {
    position: static;
    width: 60%;
    margin-left: auto;
  }
}

/* Pull Quote Styling */
.pull-quote {
  position: relative;
  padding: 1.5rem 0;
  border-left: 3px solid var(--accent);
  padding-left: 2rem;
  margin: 2rem 0;
}

.quote-mark {
  position: absolute;
  left: -1rem;
  top: -1rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 6rem;
  font-weight: 700;
  color: var(--accent-pale);
  opacity: 0.2;
  line-height: 1;
  pointer-events: none;
}

.quote-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  color: var(--stone-700);
  font-style: italic;
}

/* ============================================
   VALUES SECTION - Bento Grid
   ============================================ */
.values-section {
  padding: 5rem 0;
  background: var(--stone-50);
}

.section-header-compact {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.values-bento {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .values-bento {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-bento {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

.value-card {
  padding: 2rem;
  background: rgba(245, 242, 237, 0.5);
  border-radius: 1rem;
  border-left: 3px solid var(--accent);
  transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.value-card:hover {
  background: white;
  box-shadow: 0 8px 32px rgba(28, 21, 16, 0.08);
  transform: translateX(0.5rem);
}

.value-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--accent);
  opacity: 0.25;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.value-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--stone-800);
  margin-bottom: 0.75rem;
}

.value-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--stone-600);
}

/* ============================================
   APPROACH SECTION - Sticky Image
   ============================================ */
.approach-section {
  padding: 5rem 0;
  background: white;
}

.sticky-container {
  position: sticky;
  top: 2rem;
}

.approach-intro {
  font-family: Georgia, serif;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--stone-600);
  margin-top: 1rem;
}

.steps-compact {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--stone-50);
  border-radius: 0.75rem;
  transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.step-card:hover {
  background: var(--stone-100);
  transform: translateX(0.25rem);
}

.step-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  opacity: 0.4;
  line-height: 1;
  flex-shrink: 0;
}

.step-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--stone-800);
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--stone-600);
}

/* ============================================
   TEAM SECTION
   ============================================ */
.team-section {
  padding: 5rem 0;
  background: var(--stone-50);
}

.team-highlights-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .team-highlights-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlight-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 12px rgba(28, 21, 16, 0.04);
}

.highlight-icon {
  color: var(--accent);
  font-size: 1.125rem;
  flex-shrink: 0;
}

.highlight-text {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--stone-700);
}

.team-showcase {
  max-width: 56rem;
  margin: 0 auto;
}

.team-figure {
  text-align: center;
}

.team-caption {
  margin-top: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--stone-500);
}

/* ============================================
   CTA SECTION - Warm Invitation
   ============================================ */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--stone-800) 0%, var(--stone-700) 100%);
  text-align: center;
}

.cta-content {
  max-width: 42rem;
  margin: 0 auto;
}

.cta-label {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

.cta-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 1.5rem;
}

.cta-description {
  font-family: Georgia, serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #000000;
  margin-bottom: 2.5rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.125rem 2.5rem;
  background: var(--accent);
  color: var(--stone-800);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(201, 168, 117, 0.3);
  transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.cta-button:hover {
  background: var(--accent-pale);
  color: var(--stone-900);
  transform: translateY(-0.25rem);
  box-shadow: 0 16px 48px rgba(201, 168, 117, 0.4);
}

/* ============================================
   ANIMATION SYSTEM
   ============================================ */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 800ms cubic-bezier(0.23, 1, 0.32, 1);
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-up.delay-0 { transition-delay: 0ms; }
.fade-up.delay-1 { transition-delay: 120ms; }
.fade-up.delay-2 { transition-delay: 240ms; }
.fade-up.delay-3 { transition-delay: 360ms; }

/* ============================================
   RESPONSIVE REFINEMENTS
   ============================================ */
@media (max-width: 1024px) {
  .hero-split,
  .story-section,
  .values-section,
  .approach-section,
  .team-section {
    padding: 3rem 0;
  }

  .stats-inline {
    flex-wrap: wrap;
    justify-content: center;
  }

  .sticky-container {
    position: static;
  }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 0;
  }

  .collage-overlay {
    bottom: auto;
    right: auto;
  }
}
</style>