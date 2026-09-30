<script setup lang="ts">
import { BookOpenIcon, AcademicCapIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/vue/24/outline'

const activities = [
  {
    title: 'Causes de la déviance',
    description: 'Comprendre les facteurs qui mènent à la déviance chez les jeunes',
    icon: ShieldCheckIcon,
    color: 'bg-red-500',
    downloadLink: '#'
  },
  {
    title: 'Prévention des drogues',
    description: 'Sensibilisation aux dangers des substances illicites',
    icon: HeartIcon,
    color: 'bg-green-500',
    downloadLink: '#'
  },
  {
    title: 'Gestion de la violence',
    description: 'Méthodes de résolution pacifique des conflits',
    icon: BookOpenIcon,
    color: 'bg-blue-500',
    downloadLink: '#'
  },
  {
    title: 'Éducation civique',
    description: 'Renforcement des valeurs citoyennes',
    icon: AcademicCapIcon,
    color: 'bg-purple-500',
    downloadLink: '#'
  }
]
</script>

<template>
  <section id="activites" class="py-12 md:py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-festisol-blue mb-4">Activités Scolaires</h2>
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Des capsules de sensibilisation spécialement conçues pour les établissements scolaires. 
          Participez à notre programme éducatif et contribuez à former les citoyens de demain.
        </p>
      </div>

      <!-- Activities Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
        >
          <div :class="[
            'w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300',
            activity.color
          ]">
            <component :is="activity.icon" class="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          
          <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">{{ activity.title }}</h3>
          <p class="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{{ activity.description }}</p>
          
          <a
            :href="activity.downloadLink"
            class="inline-flex items-center text-festisol-blue font-semibold hover:text-blue-800 transition-colors duration-200 text-sm md:text-base"
          >
            <BookOpenIcon class="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Télécharger
          </a>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-gradient-sky rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white">
        <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Participez avec votre établissement</h3>
        <p class="text-base md:text-lg mb-6 md:mb-8 opacity-90 px-4">
          Rejoignez-nous dans cette démarche éducative et inscrivez votre école au concours national.
        </p>
        
        <div class="flex flex-col gap-3 md:gap-4 justify-center">
          <button class="bg-white text-festisol-blue px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Télécharger les supports
          </button>
          <button class="bg-festisol-red text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
            Participer au concours
          </button>
        </div>
      </div>
    </div>
  </section>
</template>