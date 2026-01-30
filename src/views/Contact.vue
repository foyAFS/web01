<template>
  <main class="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 hero-pattern"></div>
      </div>
      
      <!-- Animated Background Shapes -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div class="container mx-auto px-4 py-16 md:py-24 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          <!-- Left Content -->
          <div class="text-center lg:text-left order-2 lg:order-1">
            <div class="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-6 py-3 rounded-full mb-8 animate-fade-in-up">
              <i class="pi pi-map-marker text-amber-400"></i>
              <span class="text-sm font-semibold tracking-wide">Kuala Lumpur, Malaysia</span>
            </div>
            
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up leading-tight" style="animation-delay: 0.1s; font-family: 'Playfair Display', serif;">
              Let's Build Something<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Beautiful Together</span>
            </h1>
            
            <p class="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s;">
              From concept to completion, H Cabinet Furniture brings your vision to life with expert craftsmanship and personalized service.
            </p>
            
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s;">
              <a :href="'https://wa.me/' + contactData.phone.replace(/\D/g, '')"
                 target="_blank"
                 class="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-2xl shadow-lg">
                <i class="pi pi-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
                <span>Start WhatsApp Chat</span>
              </a>
              <a href="#contact-form"
                 class="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
                <i class="pi pi-envelope"></i>
                <span>Send a Message</span>
              </a>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style="animation-delay: 0.4s;">
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-amber-400 mb-1">10+</div>
                <div class="text-sm text-stone-400">Years Experience</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-amber-400 mb-1">500+</div>
                <div class="text-sm text-stone-400">Projects Done</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl md:text-4xl font-bold text-amber-400 mb-1">100%</div>
                <div class="text-sm text-stone-400">Satisfaction</div>
              </div>
            </div>
          </div>

          <!-- Right Image - VCard -->
          <div class="order-1 lg:order-2 animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="relative group">
              <!-- Decorative Elements -->
              <div class="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <!-- VCard Image Container -->
              <div class="relative bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-8 hover:border-amber-500/30 transition-all duration-500 group-hover:scale-105">
                <img 
                  src="/vacard.svg" 
                  alt="H Cabinet Furniture Virtual Business Card"
                  class="w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                <!-- Floating Badge -->
                <div class="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce-slow">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <span class="font-bold text-sm">We're Online!</span>
                  </div>
                </div>
              </div>

              <!-- Decorative Corner Accents -->
              <div class="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl opacity-50"></div>
              <div class="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-amber-500 rounded-br-3xl opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
      
      <!-- Bottom Gradient Fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </section>

    <!-- Quick Contact Strip -->
    <section class="py-8 bg-white border-y border-stone-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <a v-for="(item, index) in quickContactMethods" 
             :key="index"
             :href="item.href"
             :target="item.external ? '_blank' : undefined"
             class="group flex items-center gap-4 p-4 rounded-xl hover:bg-stone-50 transition-all hover:scale-105"
             :class="item.highlight ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' : ''">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                 :style="{ backgroundColor: item.color }">
              <i :class="item.icon + ' text-white text-2xl'"></i>
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-bold text-gray-900 text-sm mb-0.5">{{ item.label }}</p>
              <p class="text-xs text-gray-600 truncate">{{ item.value }}</p>
            </div>
            <i class="pi pi-arrow-right text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Left Column: Contact Form -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Contact Form Card -->
            <div id="contact-form" class="bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden scroll-mt-24">
              <div class="bg-gradient-to-r from-stone-100 to-amber-50 p-8 md:p-10 border-b border-stone-200">
                <div class="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div class="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
                      <i class="pi pi-star-fill text-xs"></i>
                      <span>Free Consultation & Quote</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3" style="font-family: 'Playfair Display', serif;">
                      Tell Us About Your Project
                    </h2>
                    <p class="text-gray-600 text-lg">
                      Share your ideas and we'll respond within 24 hours with expert guidance and a detailed quote.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="p-8 md:p-10">
                <ContactForm />
                
                <!-- Trust Badges -->
                <div class="mt-10 pt-10 border-t border-stone-200">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="(badge, index) in trustBadges" 
                         :key="index"
                         class="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br hover:scale-105 transition-transform"
                         :style="{ background: badge.gradient }">
                      <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <i :class="badge.icon" :style="{ color: badge.color }"></i>
                      </div>
                      <p class="font-bold text-gray-900 mb-1">{{ badge.title }}</p>
                      <p class="text-sm text-gray-600">{{ badge.subtitle }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location & Directions Card -->
            <div class="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
              <div class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <i class="pi pi-map-marker text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900" style="font-family: 'Playfair Display', serif;">Visit Our Showroom</h3>
                    <p class="text-gray-600">See our craftsmanship in person</p>
                  </div>
                </div>
                
                <div class="space-y-4 mb-6">
                  <div class="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                    <i class="pi pi-building text-amber-600 text-xl mt-1"></i>
                    <div>
                      <p class="font-semibold text-gray-900 mb-1">Address</p>
                      <p class="text-gray-700 leading-relaxed">{{ contactData.address }}</p>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                      <i class="pi pi-phone text-green-600 text-xl mt-1"></i>
                      <div>
                        <p class="font-semibold text-gray-900 mb-1">Phone / WhatsApp</p>
                        <a :href="'tel:' + contactData.phone" class="text-gray-700 hover:text-green-600 transition-colors">
                          {{ contactData.phone }}
                        </a>
                      </div>
                    </div>
                    
                    <div class="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                      <i class="pi pi-envelope text-amber-600 text-xl mt-1"></i>
                      <div>
                        <p class="font-semibold text-gray-900 mb-1">Email</p>
                        <a :href="'mailto:' + contactData.email" class="text-gray-700 hover:text-amber-600 transition-colors break-all">
                          {{ contactData.email }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Directions Card - Cleaner Design -->
                <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-2xl">
                  <!-- Decorative Background Pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E');"></div>
                  </div>
                  
                  <div class="relative">
                    <div class="flex items-center gap-4 mb-6">
                      <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                        <i class="pi pi-map-marker text-white text-3xl"></i>
                      </div>
                      <div>
                        <h4 class="text-2xl font-bold mb-1">Get Directions</h4>
                        <p class="text-amber-100">Navigate to our showroom with ease</p>
                      </div>
                    </div>
                    
                    <a :href="googleMapsUrl" 
                       target="_blank"
                       class="group relative block bg-white hover:bg-amber-50 text-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
                      <div class="p-6">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center gap-4">
                            <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <i class="pi pi-directions text-white text-2xl"></i>
                            </div>
                            <div>
                              <p class="font-bold text-xl mb-1">Open in Google Maps</p>
                              <p class="text-sm text-gray-600">One tap to start navigation</p>
                            </div>
                          </div>
                          <i class="pi pi-arrow-right text-amber-600 text-2xl group-hover:translate-x-2 transition-transform"></i>
                        </div>
                      </div>
                      
                      <!-- Hover Gradient Effect -->
                      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </a>
                    
                    <!-- Additional Info -->
                    <div class="mt-6 flex items-center justify-center gap-6 text-sm text-amber-100">
                      <div class="flex items-center gap-2">
                        <i class="pi pi-clock"></i>
                        <span>15 min from KL City</span>
                      </div>
                      <div class="w-1 h-1 bg-amber-300 rounded-full"></div>
                      <div class="flex items-center gap-2">
                        <i class="pi pi-car"></i>
                        <span>Free Parking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="space-y-6">
            
            <!-- WhatsApp Priority Card -->
            <div class="sticky top-6 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-2xl overflow-hidden text-white transform hover:scale-105 transition-all duration-300">
              <div class="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
              <div class="relative p-8">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <i class="pi pi-whatsapp text-4xl"></i>
                </div>
                <h3 class="text-2xl font-bold mb-2">Quick Response</h3>
                <p class="text-green-100 mb-6">Get instant answers to your questions via WhatsApp</p>
                <a :href="'https://wa.me/' + contactData.phone.replace(/\D/g, '')"
                   target="_blank"
                   class="block w-full bg-white hover:bg-green-50 text-green-600 font-bold py-4 px-6 rounded-xl text-center transition-all hover:scale-105 shadow-xl">
                  <i class="pi pi-whatsapp mr-2"></i>
                  Start Chat Now
                </a>
                <p class="text-sm text-green-100 mt-4 text-center">
                  <i class="pi pi-clock mr-2"></i>
                  Usually replies within minutes
                </p>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-white rounded-3xl shadow-xl border border-stone-200 p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <i class="pi pi-clock text-amber-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Opening Hours</h3>
              </div>
              <div class="space-y-3">
                <div v-for="(hours, index) in businessHours" 
                     :key="index"
                     class="flex justify-between items-center py-3 px-4 rounded-xl transition-all"
                     :class="hours.isOpen ? 'bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 font-bold' : 'text-gray-600 hover:bg-stone-50'">
                  <span>{{ hours.day }}</span>
                  <span :class="hours.isOpen ? 'text-amber-700' : ''">{{ hours.time }}</span>
                </div>
              </div>
            </div>

            <!-- Social Connect -->
            <div class="bg-white rounded-3xl shadow-xl border border-stone-200 p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i class="pi pi-share-alt text-blue-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Connect With Us</h3>
              </div>
              <div class="space-y-3">
                <a v-for="social in socialChannels" 
                   :key="social.name"
                   :href="social.url"
                   target="_blank"
                   class="group flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 border-2 border-transparent hover:border-current"
                   :style="{ color: social.color }">
                  <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-md"
                       :style="{ backgroundColor: social.color }">
                    <i :class="social.icon + ' text-white text-2xl'"></i>
                  </div>
                  <div class="flex-1">
                    <p class="font-bold text-gray-900 group-hover:text-current transition-colors">{{ social.name }}</p>
                    <p class="text-sm text-gray-500">{{ social.description }}</p>
                  </div>
                  <i class="pi pi-external-link text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mt-24">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full text-sm font-bold mb-6">
              <i class="pi pi-question-circle"></i>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900" style="font-family: 'Playfair Display', serif;">
              Everything You Need to Know
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers about our services, process, and what makes H Cabinet Furniture special
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div v-for="(faq, index) in faqs" 
                 :key="index"
                 class="group bg-white p-8 rounded-2xl shadow-lg border-2 border-stone-100 hover:border-amber-200 hover:shadow-xl transition-all">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                    {{ faq.question }}
                  </h4>
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Final CTA -->
          <div class="mt-16 text-center bg-gradient-to-r from-stone-100 via-amber-50 to-stone-100 rounded-3xl p-12 border-2 border-amber-200">
            <h3 class="text-3xl font-bold mb-4 text-gray-900" style="font-family: 'Playfair Display', serif;">
              Still Have Questions?
            </h3>
            <p class="text-gray-600 mb-8 max-w-xl mx-auto">
              Our team is ready to help. Reach out via WhatsApp for immediate assistance or send us a message.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a :href="'https://wa.me/' + contactData.phone.replace(/\D/g, '')" 
                 target="_blank"
                 class="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg">
                <i class="pi pi-whatsapp text-xl"></i>
                <span>WhatsApp Us</span>
              </a>
              <a :href="'mailto:' + contactData.email"
                 class="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg border-2 border-amber-200">
                <i class="pi pi-envelope"></i>
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Import Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
  </main>
</template>

<script setup>
import { computed } from 'vue';
import ContactForm from '@/components/contact/ContactForm.vue';

// Contact Data - Centralized for easy maintenance
const contactData = {
  phone: '+601119706733',
  email: 'hcabinetfurnitures@gmail.com',
  facebook: 'https://www.facebook.com/h.cabinetfurniturekualalmpur/',
  address: 'NO 133A BATU 5 JALAN GOMBAK, 53000 KUALA LUMPUR WILAYAH PERSEKUTUN., Kuala Lumpur, Malaysia'
};

// Navigation URL (Google Maps only)
const googleMapsUrl = computed(() => {
  const address = encodeURIComponent(contactData.address);
  return `https://www.google.com/maps/search/?api=1&query=${address}`;
});

// Quick contact methods for top strip
const quickContactMethods = [
  {
    icon: 'pi pi-whatsapp',
    label: 'WhatsApp',
    value: contactData.phone,
    href: `https://wa.me/${contactData.phone.replace(/\D/g, '')}`,
    color: '#25D366',
    external: true,
    highlight: true
  },
  {
    icon: 'pi pi-phone',
    label: 'Call Us',
    value: contactData.phone,
    href: `tel:${contactData.phone}`,
    color: '#f59e0b',
    external: false
  },
  {
    icon: 'pi pi-envelope',
    label: 'Email',
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: '#EA4335',
    external: false
  }
];

// Trust badges
const trustBadges = [
  {
    icon: 'pi pi-clock text-3xl',
    title: '24-Hour Response',
    subtitle: 'Fast and reliable',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
  },
  {
    icon: 'pi pi-verified text-3xl',
    title: 'Expert Craftsmanship',
    subtitle: 'Quality guaranteed',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
  },
  {
    icon: 'pi pi-heart-fill text-3xl',
    title: 'Customer Satisfaction',
    subtitle: 'Your vision realized',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'
  }
];

// Business hours
const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', isOpen: true },
  { day: 'Saturday', time: '9:00 AM - 3:00 PM', isOpen: true },
  { day: 'Sunday', time: 'By Appointment', isOpen: false },
  { day: 'Public Holidays', time: 'Closed', isOpen: false }
];

// Social channels
const socialChannels = [
  {
    name: 'WhatsApp',
    icon: 'pi pi-whatsapp',
    url: `https://wa.me/${contactData.phone.replace(/\D/g, '')}`,
    color: '#25D366',
    description: 'Instant messaging'
  },
  {
    name: 'Facebook',
    icon: 'pi pi-facebook',
    url: contactData.facebook,
    color: '#1877F2',
    description: 'Latest projects & reviews'
  },
  {
    name: 'Email',
    icon: 'pi pi-envelope',
    url: `mailto:${contactData.email}`,
    color: '#EA4335',
    description: 'Detailed inquiries'
  }
];

// FAQs
const faqs = [
  {
    question: 'What types of furniture do you specialize in?',
    answer: 'We specialize in custom cabinet work, kitchen cabinets, wardrobes, TV consoles, built-in storage solutions, and bespoke furniture tailored to your specific space and style preferences.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by project complexity. A standard kitchen cabinet installation takes 3-4 weeks from design approval to installation. We provide detailed timelines during the free consultation.'
  },
  {
    question: 'Do you offer free consultations and quotes?',
    answer: 'Yes! We provide complimentary consultations where we discuss your needs, take measurements, and offer preliminary design concepts with transparent pricing estimates.'
  },
  {
    question: 'What areas do you serve in Kuala Lumpur?',
    answer: 'We primarily serve Kuala Lumpur and surrounding areas including Selangor. Contact us to confirm if we cover your specific location.'
  },
  {
    question: 'Can I see examples of your completed work?',
    answer: 'Absolutely! Visit our Facebook page to browse our portfolio of completed projects, read customer testimonials, and see the quality of our craftsmanship firsthand.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing depends on materials, dimensions, design complexity, and finishing. We provide detailed, itemized quotes with no hidden costs after understanding your specific requirements.'
  },
  {
    question: 'Do you provide warranty on your work?',
    answer: 'Yes, we stand behind our craftsmanship with comprehensive warranties on both materials and workmanship. Specific terms are discussed during consultation.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, cash, and major payment methods. Payment terms include a deposit upon confirmation and final payment upon project completion and your satisfaction.'
  }
];
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f5f5f4;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #d97706 0%, #b45309 100%);
}

/* Link hover effects */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Card hover lift effect */
.group:hover {
  transform: translateY(-2px);
}

/* Hero pattern background */
.hero-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

/* Floating animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(20px) translateX(-10px);
  }
  50% {
    transform: translateY(10px) translateX(10px);
  }
  75% {
    transform: translateY(30px) translateX(-5px);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>