<template>
  <main class="portfolio-page">
    <!-- Hero Section -->
    <section class="portfolio-hero">
      <div class="container">
        <div class="hero-content">
          <span class="hero-label">Portfolio</span>
          <h1 class="hero-title">Transforming Spaces Into Stories</h1>
          <p class="hero-description">
            Every interior is a canvas for creativity and function. Explore our curated collection 
            of residential and commercial spaces that blend aesthetics with purpose.
          </p>
        </div>
        <div class="hero-visual">
          <div class="svg-showcase">
            <img src="/ab1.svg" alt="Interior design excellence" class="showcase-svg svg-1" />
            <img src="/ab5.svg" alt="Creative spaces" class="showcase-svg svg-2" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Work</h2>
          <p class="section-subtitle">Our most impactful projects that define our craft</p>
        </div>

        <div class="featured-grid">
          <div 
            v-for="(project, index) in featuredProjects" 
            :key="project.title"
            class="featured-project"
            :class="`featured-${index + 1}`"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="overlay-content">
                  <span class="project-category">{{ project.category }}</span>
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Showcase with SVGs -->
    <section class="stats-showcase">
      <div class="container">
        <div class="stats-wrapper">
          <div class="stats-visual">
            <img src="/ab2.svg" alt="Design achievements" class="stats-svg" />
          </div>
          <div class="stats-grid">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="stat-item"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-description">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">All Projects</h2>
          <div class="filter-tabs">
            <button 
              v-for="filter in filters" 
              :key="filter"
              @click="activeFilter = filter"
              :class="{ active: activeFilter === filter }"
              class="filter-btn"
            >
              {{ filter }}
            </button>
          </div>
        </div>

        <div class="projects-grid">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.title"
            class="project-card"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            <div class="card-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="card-content">
              <span class="card-category">{{ project.category }}</span>
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-excerpt">{{ project.excerpt }}</p>
              <div class="card-meta">
                <span class="meta-item">{{ project.year }}</span>
                <span class="meta-divider">•</span>
                <span class="meta-item">{{ project.client }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities Section -->
    <section class="capabilities-section">
      <div class="container">
        <div class="capabilities-grid">
          <div class="capabilities-content">
            <span class="section-label">Our Expertise</span>
            <h2 class="section-title">Full-Service Interior Design</h2>
            <p class="capabilities-text">
              From initial concept to final installation, we provide comprehensive interior design 
              services that transform ordinary spaces into extraordinary environments. Our process 
              combines creative vision with practical expertise to deliver interiors that inspire and endure.
            </p>
            <div class="capabilities-list">
              <div 
                v-for="(capability, index) in capabilities" 
                :key="capability.title"
                class="capability-item"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                <div class="capability-number">{{ String(index + 1).padStart(2, '0') }}</div>
                <div class="capability-details">
                  <h4 class="capability-title">{{ capability.title }}</h4>
                  <p class="capability-description">{{ capability.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="capabilities-visual">
            <div class="visual-stack">
              <img src="/ab3.svg" alt="Residential design" class="stack-svg svg-top" />
              <img src="/ab4.svg" alt="Commercial design" class="stack-svg svg-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeFilter = ref('All');

const filters = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation'];

const featuredProjects = [
  {
    title: 'Modern Minimalist Loft',
    category: 'Residential Design',
    description: 'A 2,500 sq ft industrial loft transformed into a serene minimalist sanctuary with curated furnishings and natural materials.',
    tags: ['Residential', 'Minimalist', 'Urban'],
    image: '/ab1.svg'
  },
  {
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality Design',
    description: 'Luxurious lobby redesign featuring bespoke furniture, custom lighting, and artisanal finishes that create an unforgettable first impression.',
    tags: ['Hospitality', 'Luxury', 'Custom'],
    image: '/ab5.svg'
  },
  {
    title: 'Coastal Villa Retreat',
    category: 'Residential Design',
    description: 'A breathtaking oceanfront property blending indoor-outdoor living with sustainable materials and panoramic views.',
    tags: ['Villa', 'Coastal', 'Sustainable'],
    image: '/ab2.svg'
  }
];

const stats = [
  { 
    value: '200+', 
    label: 'Spaces Designed',
    description: 'Residential & commercial projects'
  },
  { 
    value: '98%', 
    label: 'Client Satisfaction',
    description: 'Based on project testimonials'
  },
  { 
    value: '18', 
    label: 'Design Awards',
    description: 'Industry recognition & honors'
  },
  { 
    value: '15+', 
    label: 'Years Experience',
    description: 'Transforming spaces since 2009'
  }
];

const allProjects = [
  {
    title: 'Skyline Penthouse',
    category: 'Residential',
    excerpt: 'Contemporary penthouse with floor-to-ceiling windows and custom millwork',
    year: '2024',
    client: 'Private Client',
    image: '/ab3.svg'
  },
  {
    title: 'Urban Coffee House',
    category: 'Commercial',
    excerpt: 'Industrial-chic café design with exposed brick and artisan details',
    year: '2024',
    client: 'Brew & Co.',
    image: '/ab4.svg'
  },
  {
    title: 'Heritage Home Restoration',
    category: 'Renovation',
    excerpt: 'Preserving historic charm while adding modern luxury amenities',
    year: '2023',
    client: 'The Morrison Estate',
    image: '/ab1.svg'
  },
  {
    title: 'Wellness Spa Sanctuary',
    category: 'Hospitality',
    excerpt: 'Tranquil spa environment with natural materials and ambient lighting',
    year: '2023',
    client: 'Serenity Spa',
    image: '/ab5.svg'
  },
  {
    title: 'Family Suburban Home',
    category: 'Residential',
    excerpt: 'Warm, functional family spaces designed for modern living',
    year: '2023',
    client: 'The Chen Family',
    image: '/ab2.svg'
  },
  {
    title: 'Tech Startup Office',
    category: 'Commercial',
    excerpt: 'Collaborative workspace with flexible zones and biophilic design',
    year: '2024',
    client: 'InnovateTech',
    image: '/ab3.svg'
  },
  {
    title: 'Beachfront Condo',
    category: 'Residential',
    excerpt: 'Coastal elegance with ocean-inspired palette and textures',
    year: '2024',
    client: 'Private Client',
    image: '/ab4.svg'
  },
  {
    title: 'Boutique Restaurant',
    category: 'Hospitality',
    excerpt: 'Intimate dining experience with bespoke furniture and mood lighting',
    year: '2023',
    client: 'La Maison Restaurant',
    image: '/ab1.svg'
  },
  {
    title: 'Victorian Townhouse',
    category: 'Renovation',
    excerpt: 'Complete restoration blending period features with contemporary comfort',
    year: '2024',
    client: 'Private Client',
    image: '/ab5.svg'
  }
];

const capabilities = [
  {
    title: 'Residential Design',
    description: 'Custom home interiors that reflect your lifestyle, from concept to completion with personalized attention to every detail.'
  },
  {
    title: 'Commercial Spaces',
    description: 'Office environments, retail spaces, and hospitality venues designed to enhance brand identity and user experience.'
  },
  {
    title: 'Space Planning & 3D Visualization',
    description: 'Strategic layout optimization and photorealistic renderings to bring your vision to life before construction begins.'
  },
  {
    title: 'Renovation & Restoration',
    description: 'Breathing new life into existing spaces while preserving architectural character and maximizing functionality.'
  }
];

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return allProjects;
  }
  return allProjects.filter(project => project.category === activeFilter.value);
});
</script>

<style scoped>
.portfolio-page {
  background: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.portfolio-hero {
  padding: 8rem 0 6rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  position: relative;
  overflow: hidden;
}

.portfolio-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.portfolio-hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-label {
  display: inline-block;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #dc2626;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4.5rem;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #a3a3a3;
  max-width: 540px;
  font-family: 'Georgia', serif;
}

.svg-showcase {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showcase-svg {
  position: absolute;
  width: 280px;
  height: 280px;
  object-fit: contain;
}

.svg-1 {
  top: 50px;
  left: 0;
  animation: floatSvg1 6s ease-in-out infinite;
}

.svg-2 {
  bottom: 50px;
  right: 0;
  animation: floatSvg2 7s ease-in-out infinite;
}

@keyframes floatSvg1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes floatSvg2 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(20px) rotate(-5deg); }
}

/* Featured Section */
.featured-section {
  padding: 6rem 0;
  background: #0f0f0f;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #737373;
  font-family: 'Georgia', serif;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.featured-project {
  animation: fadeInUp 0.8s ease-out both;
}

.project-image {
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  background: #1a1a1a;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2rem;
  transition: all 0.5s ease;
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.featured-project:hover .project-overlay {
  opacity: 1;
}

.featured-project:hover .project-image img {
  transform: scale(1.05);
}

.overlay-content {
  width: 100%;
}

.project-category {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #dc2626;
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.project-title {
  font-size: 1.75rem;
  color: #ffffff;
  margin: 0.5rem 0 1rem;
  font-weight: 700;
  font-family: 'Playfair Display', Georgia, serif;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #a3a3a3;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 20px;
  font-size: 0.75rem;
  color: #dc2626;
  font-weight: 600;
}

/* Stats Showcase */
.stats-showcase {
  padding: 6rem 0;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
}

.stats-wrapper {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 5rem;
  align-items: center;
}

.stats-visual {
  position: relative;
}

.stats-svg {
  width: 100%;
  height: auto;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.stat-item {
  animation: fadeInRight 0.8s ease-out both;
}

.stat-value {
  font-size: 4rem;
  font-weight: 900;
  color: #dc2626;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-label {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.stat-description {
  font-size: 0.95rem;
  color: #737373;
  line-height: 1.6;
}

/* Projects Section */
.projects-section {
  padding: 6rem 0;
  background: #0f0f0f;
}

.projects-section .section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  text-align: left;
}

.filter-tabs {
  display: flex;
  gap: 1rem;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid #404040;
  border-radius: 30px;
  color: #a3a3a3;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
}

.filter-btn:hover {
  border-color: #dc2626;
  color: #ffffff;
}

.filter-btn.active {
  background: #dc2626;
  border-color: #dc2626;
  color: #ffffff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.project-card {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease-out both;
  border: 1px solid #262626;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.2);
  border-color: #dc2626;
}

.card-image {
  aspect-ratio: 16/10;
  background: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-bottom: 1px solid #262626;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.4s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 2rem;
}

.card-category {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #dc2626;
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.card-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0.75rem 0 1rem;
  font-weight: 700;
  font-family: 'Playfair Display', Georgia, serif;
}

.card-excerpt {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #737373;
  margin-bottom: 1.5rem;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #525252;
  font-family: 'Courier New', monospace;
}

.meta-divider {
  color: #404040;
}

/* Capabilities Section */
.capabilities-section {
  padding: 6rem 0;
  background: #1a1a1a;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.section-label {
  display: inline-block;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #dc2626;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.capabilities-content .section-title {
  text-align: left;
  margin-bottom: 1.5rem;
}

.capabilities-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #a3a3a3;
  margin-bottom: 3rem;
  font-family: 'Georgia', serif;
}

.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.capability-item {
  display: flex;
  gap: 1.5rem;
  animation: fadeInLeft 0.8s ease-out both;
}

.capability-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #dc2626;
  font-family: 'Playfair Display', Georgia, serif;
  line-height: 1;
  opacity: 0.5;
}

.capability-title {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', Georgia, serif;
}

.capability-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #737373;
}

.visual-stack {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stack-svg {
  position: absolute;
  width: 350px;
  height: 350px;
  object-fit: contain;
}

.svg-top {
  top: 0;
  right: 50px;
  opacity: 0.7;
  animation: floatStack1 8s ease-in-out infinite;
}

.svg-bottom {
  bottom: 0;
  left: 50px;
  opacity: 0.9;
  animation: floatStack2 9s ease-in-out infinite;
}

@keyframes floatStack1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-10px, -15px) rotate(3deg); }
}

@keyframes floatStack2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10px, 15px) rotate(-3deg); }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .section-title {
    font-size: 3rem;
  }

  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .portfolio-hero .container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .svg-showcase {
    height: 300px;
  }

  .showcase-svg {
    width: 180px;
    height: 180px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .featured-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .stats-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .visual-stack {
    height: 400px;
  }

  .stack-svg {
    width: 250px;
    height: 250px;
  }

  .projects-section .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .filter-tabs {
    flex-wrap: wrap;
  }

  .stat-value {
    font-size: 3rem;
  }
}
</style>