<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'

const testimonials = [
  {
    quote: "Le FESTISOL représente l'espoir d'une jeunesse camerounaise engagée et consciente de ses responsabilités envers la société.",
    author: "Dr. Marie Nkomo",
    role: "Environnementaliste",
    theme: "Écologie",
    color: "bg-green-500"
  },
  {
    quote: "Participer au FESTISOL, c'est contribuer à bâtir une société plus juste où chaque citoyen a sa place et son rôle à jouer.",
    author: "Me. Sarah Ndongo",
    role: "Avocate",
    theme: "Justice",
    color: "bg-festisol-purple"
  },
  {
    quote: "L'éducation à la citoyenneté ne peut se faire sans dialogue intergénérationnel. Le FESTISOL crée cet espace précieux.",
    author: "Pr. Jean Mballa",
    role: "Sociologue",
    theme: "Éducation",
    color: "bg-festisol-blue"
  },
  {
    quote: "Nos traditions nous enseignent que la solidarité est la force qui unit les peuples. Le FESTISOL perpétue cette sagesse.",
    author: "Chef Atangana",
    role: "Autorité traditionnelle",
    theme: "Culture",
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
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-6">
          <ChatBubbleLeftRightIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
          <span class="text-festisol-blue font-semibold">Témoignages</span>
        </div>
        
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Ils s'expriment sur le FESTISOL
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez ce que nos intervenants pensent de cette initiative 
          et de son impact sur la société camerounaise.
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
              <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <!-- Background decorations -->
                <div class="absolute inset-0 bg-black/10"></div>
                <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
                
                <div class="relative z-10">
                  <!-- Quote Icon -->
                  <ChatBubbleLeftRightIcon class="w-16 h-16 mx-auto mb-6 opacity-50" />
                  
                  <!-- Quote -->
                  <blockquote class="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{{ testimonial.quote }}"
                  </blockquote>
                  
                  <!-- Author Info -->
                  <div class="flex items-center justify-center">
                    <div :class="[
                      'w-12 h-12 rounded-full flex items-center justify-center mr-4',
                      testimonial.color
                    ]">
                      <span class="text-white font-bold text-lg">{{ testimonial.author.charAt(0) }}</span>
                    </div>
                    <div class="text-left">
                      <div class="font-bold text-lg">{{ testimonial.author }}</div>
                      <div class="text-sm opacity-90">{{ testimonial.role }} • {{ testimonial.theme }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <ChevronLeftIcon class="w-6 h-6 text-white" />
        </button>
        
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <ChevronRightIcon class="w-6 h-6 text-white" />
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

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <div class="bg-festisol-cream rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-festisol-blue mb-4">
            Vous aussi, rejoignez nos intervenants !
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vous êtes expert dans votre domaine et souhaitez partager votre expérience ? 
            Proposez votre intervention pour enrichir le programme du FESTISOL.
          </p>
          <button class="bg-festisol-blue hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Proposer une intervention
          </button>
        </div>
      </div>
    </div>
  </section>
</template>