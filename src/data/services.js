export const services = [
  {
    icon: 'pi pi-box',
    title: 'Custom Cabinetry',
    description: 'Precision-crafted cabinets tailored to your space, from kitchens to wardrobes.',
    features: [
      'Kitchen & Pantry Cabinets',
      'Built-in Wardrobes',
      'TV Consoles & Display Units',
      'Study & Storage Solutions'
    ]
  },
  {
    icon: 'pi pi-home',
    title: 'Complete Renovation',
    description: 'Full-scale interior transformations managing every detail from start to finish.',
    features: [
      'Space Planning & Layout',
      'Electrical & Plumbing Works',
      'Flooring & Ceiling Installation',
      'Paint & Finishing'
    ]
  },
  {
    icon: 'pi pi-palette',
    title: 'Interior Design',
    description: 'Sophisticated design concepts that blend aesthetics with functionality.',
    features: [
      '3D Visualization',
      'Material Selection',
      'Lighting Design',
      'Furniture Coordination'
    ]
  },
  {
    icon: 'pi pi-wrench',
    title: 'Carpentry Works',
    description: 'Expert woodwork and joinery for all your custom furniture needs.',
    features: [
      'Built-in Furniture',
      'Timber Flooring',
      'Decorative Wood Panels',
      'Custom Doors & Frames'
    ]
  },
  {
    icon: 'pi pi-bolt',
    title: 'Electrical & Lighting',
    description: 'Professional electrical installations with modern lighting solutions.',
    features: [
      'Electrical Rewiring',
      'Feature Lighting Design',
      'Smart Home Systems',
      'Power Point Installation'
    ]
  },
  {
    icon: 'pi pi-building',
    title: 'Commercial Projects',
    description: 'Transform commercial spaces with professional interior solutions.',
    features: [
      'Office Interior Design',
      'Retail Shop Fitting',
      'Restaurant & Café Design',
      'Reception & Lobby Areas'
    ]
  }
];

// Additional service categories for detailed pages
export const serviceCategories = [
  {
    name: 'Kitchen Solutions',
    icon: 'pi pi-shopping-cart',
    slug: 'kitchen',
    description: 'Complete kitchen transformation from cabinets to countertops',
    items: [
      'Custom Kitchen Cabinets',
      'Island Counters & Breakfast Bars',
      'Pantry Storage Systems',
      'Built-in Appliances Integration',
      'Quartz & Granite Countertops',
      'Backsplash & Tiling',
      'Kitchen Sinks & Taps',
      'Under-Cabinet Lighting'
    ]
  },
  {
    name: 'Bedroom & Wardrobe',
    icon: 'pi pi-home',
    slug: 'bedroom',
    description: 'Maximize your bedroom storage with custom solutions',
    items: [
      'Built-in Wardrobes',
      'Walk-in Closets',
      'Sliding Door Systems',
      'Dressing Tables & Vanities',
      'Bedside Cabinets',
      'Storage Beds',
      'Wardrobe Internal Fittings',
      'Mirror & Lighting Integration'
    ]
  },
  {
    name: 'Living & Entertainment',
    icon: 'pi pi-desktop',
    slug: 'living',
    description: 'Create stunning living spaces with custom furniture',
    items: [
      'TV Feature Walls',
      'Entertainment Units',
      'Display Cabinets',
      'Coffee Tables',
      'Console Tables',
      'Partition Systems',
      'Decorative Panels',
      'Floating Shelves'
    ]
  },
  {
    name: 'Study & Office',
    icon: 'pi pi-briefcase',
    slug: 'study',
    description: 'Productive workspace solutions for home and office',
    items: [
      'Study Tables & Desks',
      'Bookshelves & Display',
      'Filing Cabinets',
      'Office Storage Solutions',
      'Computer Workstations',
      'Meeting Room Furniture',
      'Reception Counters',
      'Office Partitions'
    ]
  },
  {
    name: 'Renovation Works',
    icon: 'pi pi-hammer',
    slug: 'renovation',
    description: 'Comprehensive renovation services for your space',
    items: [
      'Hacking & Demolition',
      'Masonry & Brickwork',
      'Plastering & Skimming',
      'Painting & Decorating',
      'Tiling (Floor & Wall)',
      'Ceiling Works (Plaster, Gypsum)',
      'Partition Walls',
      'Door & Window Installation'
    ]
  },
  {
    name: 'Electrical Services',
    icon: 'pi pi-bolt',
    slug: 'electrical',
    description: 'Professional electrical installations and upgrades',
    items: [
      'Electrical Rewiring',
      'Power Point Installation',
      'Lighting Design & Installation',
      'Ceiling Fans & Fixtures',
      'Smart Home Automation',
      'DB Box Upgrade',
      'Under-Cabinet Lighting',
      'Feature & Mood Lighting'
    ]
  },
  {
    name: 'Plumbing Works',
    icon: 'pi pi-filter',
    slug: 'plumbing',
    description: 'Complete plumbing solutions for kitchens and bathrooms',
    items: [
      'Pipe Installation & Repair',
      'Bathroom Fixtures',
      'Kitchen Sink & Tap Installation',
      'Water Heater Installation',
      'Water Filter Systems',
      'Sewage & Drainage',
      'Wet Area Waterproofing',
      'Sanitary Ware Supply'
    ]
  },
  {
    name: 'Flooring Solutions',
    icon: 'pi pi-th-large',
    slug: 'flooring',
    description: 'Premium flooring options for every space',
    items: [
      'Timber/Laminate Flooring',
      'Vinyl Flooring (SPC/LVT)',
      'Tile Installation',
      'Marble & Granite',
      'Parquet Flooring',
      'Floor Skirting',
      'Underfloor Preparation',
      'Floor Polishing & Restoration'
    ]
  },
  {
    name: 'Specialty Services',
    icon: 'pi pi-star',
    slug: 'specialty',
    description: 'Additional services to complete your interior',
    items: [
      'Glass & Mirror Works',
      'Aluminium Windows & Doors',
      'Grille & Gate Fabrication',
      'Wallpaper Installation',
      'Wall Decals & Vinyl',
      'Curtains & Blinds',
      'Air-Conditioning Installation',
      'False Ceiling & Cornices'
    ]
  },
  {
    name: 'Commercial Projects',
    icon: 'pi pi-building',
    slug: 'commercial',
    description: 'Professional commercial interior solutions',
    items: [
      'Office Interior Design',
      'Retail Shop Fitting',
      'Restaurant & Café Interiors',
      'Hotel & Hospitality',
      'Medical & Clinic Design',
      'Show Units & Sales Galleries',
      'Reception & Lobby Areas',
      'Workspace Planning'
    ]
  }
];

// Process steps for how we work
export const processSteps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'Share your ideas, budget, and timeline. We listen and understand your vision for the perfect space.',
    duration: '30-60 minutes',
    icon: 'pi pi-comments'
  },
  {
    number: 2,
    title: 'Site Visit & Measurement',
    description: 'Our team visits your space to take accurate measurements and assess structural requirements.',
    duration: '1-2 hours',
    icon: 'pi pi-map-marker'
  },
  {
    number: 3,
    title: 'Design & 3D Visualization',
    description: 'We create detailed designs with 3D renders so you can see your space before we build it.',
    duration: '3-7 days',
    icon: 'pi pi-palette'
  },
  {
    number: 4,
    title: 'Quotation & Agreement',
    description: 'Transparent pricing breakdown with detailed scope of work, materials, and project timeline.',
    duration: '1-2 days',
    icon: 'pi pi-file'
  },
  {
    number: 5,
    title: 'Material Procurement',
    description: 'We source premium materials and custom items are fabricated with strict quality control.',
    duration: '2-4 weeks',
    icon: 'pi pi-shopping-cart'
  },
  {
    number: 6,
    title: 'Installation & Completion',
    description: 'Expert installation by skilled craftsmen, final inspection, and official project handover.',
    duration: '1-3 weeks',
    icon: 'pi pi-check-circle'
  }
];

// Why choose us advantages
export const advantages = [
  {
    title: 'Malaysian Expertise',
    icon: 'pi pi-map-marker',
    description: 'Deep understanding of local homes, climate considerations, and Malaysian design preferences.'
  },
  {
    title: 'End-to-End Service',
    icon: 'pi pi-shield',
    description: 'From design to installation, we handle everything under one roof - your single point of contact.'
  },
  {
    title: 'Quality Craftsmanship',
    icon: 'pi pi-star',
    description: 'Skilled artisans and premium materials ensuring lasting beauty and durability for years to come.'
  },
  {
    title: 'Transparent Pricing',
    icon: 'pi pi-dollar',
    description: 'Detailed quotations with no hidden costs - you know exactly what you\'re paying for upfront.'
  },
  {
    title: 'Timely Delivery',
    icon: 'pi pi-clock',
    description: 'Dedicated project management ensuring on-time completion without compromising quality.'
  },
  {
    title: 'After-Sales Support',
    icon: 'pi pi-heart',
    description: 'Comprehensive warranty and responsive customer service for complete peace of mind.'
  }
];

// Statistics
export const stats = [
  { value: '500+', label: 'Projects Completed', icon: 'pi pi-check-circle' },
  { value: '15+', label: 'Years Experience', icon: 'pi pi-calendar' },
  { value: '98%', label: 'Satisfaction Rate', icon: 'pi pi-heart' },
  { value: '24hr', label: 'Response Time', icon: 'pi pi-clock' }
];

// Premium materials
export const materials = [
  {
    name: 'Premium Plywood',
    icon: 'pi pi-box',
    description: 'High-grade plywood resistant to Malaysian humidity and termites'
  },
  {
    name: 'Solid Hardwood',
    icon: 'pi pi-building',
    description: 'Authentic hardwood for luxury finishes and durability'
  },
  {
    name: 'Quartz & Granite',
    icon: 'pi pi-th-large',
    description: 'Durable, stain-resistant countertop materials'
  },
  {
    name: 'Designer Hardware',
    icon: 'pi pi-cog',
    description: 'Blum, Hettich, and other premium fittings'
  },
  {
    name: 'Smart Glass',
    icon: 'pi pi-desktop',
    description: 'Tempered and laminated glass for safety'
  },
  {
    name: 'Eco-Friendly Finishes',
    icon: 'pi pi-heart',
    description: 'Low-VOC paints and sustainable materials'
  }
];

// Testimonials
export const testimonials = [
  {
    name: 'Sarah & Ahmad',
    location: 'Mont Kiara, KL',
    rating: 5,
    text: 'H Cabinet transformed our home beyond expectations. Their attention to detail and professionalism is unmatched!',
    project: 'Full Home Renovation'
  },
  {
    name: 'Jennifer Tan',
    location: 'Bangsar, KL',
    rating: 5,
    text: 'The team was professional, punctual, and delivered exactly what we envisioned. Highly recommend!',
    project: 'Kitchen Renovation'
  },
  {
    name: 'David Lee',
    location: 'TTDI, KL',
    rating: 5,
    text: 'From consultation to completion, the process was smooth. Great craftsmanship and fair pricing.',
    project: 'Wardrobe & Study Room'
  }
];

// FAQ
export const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Kuala Lumpur and surrounding areas including Selangor (Petaling Jaya, Shah Alam, Subang Jaya, etc.). Contact us to confirm if we cover your location.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by project complexity. A standard kitchen cabinet installation takes 3-4 weeks from design approval to completion. Full home renovations may take 2-3 months. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you provide free quotations?',
    answer: 'Yes! We offer free consultations and quotations. Our team will visit your space, take measurements, and provide a detailed breakdown of costs with no obligation.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing depends on materials, dimensions, design complexity, and finishing requirements. We provide detailed, itemized quotes with transparent pricing - no hidden costs.'
  },
  {
    question: 'Do you offer warranty?',
    answer: 'Yes, we provide comprehensive warranty on both materials and workmanship. Specific warranty terms are discussed during consultation and included in our agreement.'
  },
  {
    question: 'Can I see your previous work?',
    answer: 'Absolutely! Visit our Facebook page or contact us on WhatsApp to see our portfolio of completed projects and customer testimonials.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, cash, and major payment methods. Payment terms typically include a deposit upon project confirmation and final payment upon completion.'
  },
  {
    question: 'Do you handle permits and approvals?',
    answer: 'For major renovation works, we can assist with management corporation approvals and necessary permits. This will be discussed during the initial consultation.'
  }
];

// Contact information
export const contactInfo = {
  phone: '+601119706733',
  email: 'hcabinetfurnitures@gmail.com',
  facebook: 'https://www.facebook.com/h.cabinetfurniturekualalmpur/',
  address: 'NO 133A BATU 5 JALAN GOMBAK, 53000 KUALA LUMPUR WILAYAH PERSEKUTUN., Kuala Lumpur, Malaysia',
  whatsapp: 'https://wa.me/601119706733',
  businessHours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 3:00 PM',
    sunday: 'By Appointment'
  }
};