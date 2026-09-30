<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

const testimonials = [
  {
    quote: "Le FESTISOL incarne parfaitement notre vision d'une éducation inclusive et transformatrice. Nous sommes fiers de soutenir cette initiative remarquable.",
    author: "Dr. Marie Tchinda",
    role: "Directrice Régionale de l'Éducation",
    organization: "Ministère de l'Éducation de Base",
    avatar: "👩‍💼",
    color: "bg-festisol-blue"
  },
  {
    quote: "Grâce au FESTISOL, nous avons pu toucher des milliers de jeunes avec nos messages de prévention. Un partenariat qui porte ses fruits.",
    author: "Pr. Jean-Claude Mbarga",
    role: "Recteur",
    organization: "Université de Yaoundé I",
    avatar: "👨‍🎓",
    color: "bg-green-600"
  },
  {
    quote: "L'approche collaborative du FESTISOL nous permet d'amplifier notre impact social. Ensemble, nous construisons un Cameroun plus solidaire.",
    author: "Sarah Nkomo",
    role: "Présidente",
    organization: "ONG Jeunesse Citoyenne",
    avatar: "👩‍💼",
    color: "bg-festisol-red"
  },
  {
    quote: "MTN est fier de contribuer à cette belle initiative qui utilise la technologie pour éduquer et sensibiliser nos jeunes.",
    author: "Paul Essomba",
    role: "Directeur RSE",
    organization: "MTN Cameroun",
    avatar: "👨‍💼",
    color: "bg-festisol-yellow text-black"
  }
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? testimonials.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
          <ChatBubbleLeftRightIcon class="w-6 h-6 mr-2 text-festisol-blue" />
          <span class="text-festisol-blue font-semibold">Témoignages</span>
        </div>
        
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Ils témoignent de notre impact
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez ce que nos partenaires pensent de leur collaboration 
          avec le FESTISOL et de l'impact de nos actions communes.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative max-w-4xl mx-auto">
        <div class="overflow-hidden rounded-3xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="w-full flex-shrink-0"
            >
              <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                <!-- Quote -->
                <div class="text-center mb-8">
                  <ChatBubbleLeftRightIcon class="w-16 h-16 mx-auto mb-6 text-festisol-blue opacity-20" />
                  <blockquote class="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic">
                    "{{ testimonial.quote }}"
                  </blockquote>
                </div>
                
                <!-- Author Info -->
                <div class="flex items-center justify-center">
                  <div :class="[
                    'w-16 h-16 rounded-full flex items-center justify-center mr-4',
                    testimonial.color
                  ]">
                    <span class="text-2xl">{{ testimonial.avatar }}</span>
                  </div>
                  <div class="text-left">
                    <div class="font-bold text-xl text-gray-900">{{ testimonial.author }}</div>
                    <div class="text-festisol-blue font-semibold">{{ testimonial.role }}</div>
                    <div class="text-gray-600 text-sm">{{ testimonial.organization }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
        >
          <ChevronLeftIcon class="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
        >
          <ChevronRightIcon class="w-6 h-6 text-gray-700" />
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-colors duration-200',
              currentSlide === index ? 'bg-festisol-blue' : 'bg-gray-300'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>