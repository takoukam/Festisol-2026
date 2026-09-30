<script setup lang="ts">
import { 
  PlusCircleIcon, 
  UserGroupIcon, 
  DocumentArrowDownIcon,
  ArrowRightIcon 
} from '@heroicons/vue/24/outline'

const actions = [
  {
    title: 'Proposer une activité',
    description: 'Vous avez une idée d\'atelier, de conférence ou d\'animation ? Partagez-la avec nous !',
    icon: PlusCircleIcon,
    color: 'bg-festisol-blue',
    hoverColor: 'hover:bg-blue-800',
    link: '#proposer'
  },
  {
    title: 'Rejoindre le mouvement',
    description: 'Inscrivez-vous pour participer aux événements et recevoir toutes les informations.',
    icon: UserGroupIcon,
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    link: '#inscription'
  },
  {
    title: 'Télécharger la présentation',
    description: 'Accédez au dossier complet du FESTISOL avec tous les détails du programme.',
    icon: DocumentArrowDownIcon,
    color: 'bg-festisol-red',
    hoverColor: 'hover:bg-red-700',
    link: '#download'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Rejoignez l'Aventure FESTISOL
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Plusieurs façons de participer à ce mouvement de transformation sociale. 
          Choisissez celle qui vous correspond le mieux !
        </p>
      </div>

      <!-- CTA Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(action, index) in actions"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center"
        >
          <!-- Icon -->
          <div :class="[
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300',
            action.color
          ]">
            <component :is="action.icon" class="w-8 h-8 text-white" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ action.title }}
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ action.description }}
          </p>
          
          <a
            :href="action.link"
            :class="[
              'inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 group-hover:transform group-hover:scale-105',
              action.color,
              action.hoverColor
            ]"
          >
            <span>{{ action.title }}</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      <!-- Main CTA Section -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <div class="text-6xl mb-6">🚀</div>
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Prêt à faire la différence ?
          </h3>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Le changement commence par un premier pas. Rejoignez-nous dans cette aventure 
            extraordinaire pour construire un Cameroun plus solidaire et plus juste.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-festisol-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 btn-hover-lift">
              Je m'engage maintenant
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-festisol-red transition-colors duration-200 btn-hover-lift">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="mt-16 text-center">
        <h4 class="text-xl font-bold text-gray-900 mb-4">
          Une question ? Contactez-nous !
        </h4>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
          <div class="flex items-center">
            <span class="text-2xl mr-2">📧</span>
            <span>plateforme.cameroun@terrafrik.org</span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div class="flex items-center">
            <span class="text-2xl mr-2">📱</span>
            <span>+237 696 34 39 15 / 6 95 61 01 78 </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>