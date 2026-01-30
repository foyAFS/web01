export const projects = [
  {
    title: 'Modern Minimalist Loft',
    description: 'A 2,500 sq ft industrial loft transformed into a serene minimalist sanctuary with curated furnishings and natural materials',
    image: '/ab1.svg',
    category: 'Residential',
    location: 'Downtown LA',
    year: '2024',
    size: '2,500 sq ft',
    tags: ['Minimalist', 'Industrial', 'Open Concept']
  },
  {
    title: 'Boutique Hotel Lobby',
    description: 'Luxurious lobby redesign featuring bespoke furniture, custom lighting, and artisanal finishes',
    image: '/ab2.svg',
    category: 'Hospitality',
    location: 'Santa Monica',
    year: '2024',
    size: '3,200 sq ft',
    tags: ['Luxury', 'Custom Furniture', 'Art Deco']
  },
  {
    title: 'Coastal Villa Retreat',
    description: 'Breathtaking oceanfront property blending indoor-outdoor living with sustainable materials',
    image: '/ab3.svg',
    category: 'Residential',
    location: 'Malibu',
    year: '2023',
    size: '4,800 sq ft',
    tags: ['Coastal', 'Sustainable', 'Luxury']
  },
  {
    title: 'Executive Office Suite',
    description: 'Sophisticated corporate headquarters with integrated technology and biophilic design elements',
    image: '/ab4.svg',
    category: 'Commercial',
    location: 'Century City',
    year: '2023',
    size: '6,000 sq ft',
    tags: ['Corporate', 'Modern', 'Tech-Enabled']
  },
  {
    title: 'Artisan Coffee House',
    description: 'Industrial-chic café design with exposed brick, reclaimed wood, and custom lighting',
    image: '/ab5.svg',
    category: 'Hospitality',
    location: 'Silver Lake',
    year: '2024',
    size: '1,800 sq ft',
    tags: ['Industrial', 'Rustic', 'Community Space']
  },
  {
    title: 'Wellness Spa Sanctuary',
    description: 'Tranquil spa environment with natural stone, ambient lighting, and water features',
    image: '/ab1.svg',
    category: 'Hospitality',
    location: 'Beverly Hills',
    year: '2023',
    size: '5,500 sq ft',
    tags: ['Wellness', 'Natural Materials', 'Zen']
  },
  {
    title: 'Contemporary Penthouse',
    description: 'Skyline penthouse with floor-to-ceiling windows, custom millwork, and smart home integration',
    image: '/ab2.svg',
    category: 'Residential',
    location: 'West Hollywood',
    year: '2024',
    size: '3,500 sq ft',
    tags: ['Contemporary', 'Smart Home', 'Views']
  },
  {
    title: 'Farm-to-Table Restaurant',
    description: 'Warm, inviting dining space celebrating local craftsmanship and organic forms',
    image: '/ab3.svg',
    category: 'Hospitality',
    location: 'Pasadena',
    year: '2023',
    size: '2,400 sq ft',
    tags: ['Organic', 'Farm Style', 'Warm Tones']
  },
  {
    title: 'Victorian Townhouse Revival',
    description: 'Historic home restoration preserving period details while adding modern luxury',
    image: '/ab4.svg',
    category: 'Renovation',
    location: 'Hancock Park',
    year: '2024',
    size: '4,200 sq ft',
    tags: ['Historic', 'Restoration', 'Classic']
  },
  {
    title: 'Tech Startup Workspace',
    description: 'Collaborative office with flexible zones, vibrant colors, and creative breakout areas',
    image: '/ab5.svg',
    category: 'Commercial',
    location: 'Culver City',
    year: '2024',
    size: '8,000 sq ft',
    tags: ['Startup', 'Collaborative', 'Colorful']
  },
  {
    title: 'Beachfront Escape',
    description: 'Coastal elegance with ocean-inspired palette, natural textures, and panoramic views',
    image: '/ab1.svg',
    category: 'Residential',
    location: 'Manhattan Beach',
    year: '2023',
    size: '3,800 sq ft',
    tags: ['Beach House', 'Relaxed Luxury', 'Ocean Views']
  },
  {
    title: 'Boutique Retail Space',
    description: 'Curated shopping experience with custom display fixtures and dramatic lighting',
    image: '/ab2.svg',
    category: 'Commercial',
    location: 'Melrose Avenue',
    year: '2024',
    size: '2,000 sq ft',
    tags: ['Retail', 'Boutique', 'Experiential']
  }
];

// Filter options for portfolio
export const categories = [
  'All',
  'Residential', 
  'Commercial',
  'Hospitality',
  'Renovation'
];

// Featured projects for homepage
export const featuredProjects = projects.slice(0, 6);