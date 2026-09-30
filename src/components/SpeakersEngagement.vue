<script setup lang="ts">
import { 
  PlusCircleIcon, 
  DocumentArrowDownIcon, 
  EnvelopeIcon,
  ArrowRightIcon,
  UserPlusIcon,
  MicrophoneIcon 
} from '@heroicons/vue/24/outline'

const engagementOptions = [
  {
    title: 'Inviter un intervenant',
    description: 'Vous organisez un événement ? Invitez l\'un de nos experts pour enrichir votre programme.',
    icon: UserPlusIcon,
    color: 'bg-festisol-blue',
    hoverColor: 'hover:bg-blue-800',
    link: '#inviter-intervenant'
  },
  {
    title: 'Télécharger la liste complète',
    description: 'Accédez au répertoire complet de tous nos intervenants avec leurs coordonnées.',
    icon: DocumentArrowDownIcon,
    color: 'bg-festisol-red',
    hoverColor: 'hover:bg-red-700',
    link: '#liste-intervenants'
  },
  {
    title: 'Devenir intervenant',
    description: 'Vous êtes expert dans votre domaine ? Rejoignez notre réseau d\'intervenants engagés.',
    icon: MicrophoneIcon,
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    link: '#devenir-intervenant'
  }
]

const specialties = [
  { name: 'Éducation à la paix', count: 12, icon: '🕊️' },
  { name: 'Environnement', count: 8, icon: '🌱' },
  { name: 'Santé publique', count: 10, icon: '🏥' },
  { name: 'Justice sociale', count: 9, icon: '⚖️' },
  { name: 'Culture & Tradition', count: 7, icon: '🎭' },
  { name: 'Économie solidaire', count: 6, icon: '💼' }
]
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Collaborer avec nos Intervenants
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les différentes façons de collaborer avec notre réseau d'experts 
          et de contribuer à l'impact du FESTISOL au-delà du festival.
        </p>
      </div>

      <!-- Engagement Options -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="(option, index) in engagementOptions"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center hover:transform hover:scale-105"
        >
          <!-- Icon -->
          <div :class="[
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300',
            option.color
          ]">
            <component :is="option.icon" class="w-8 h-8 text-white" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            {{ option.title }}
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ option.description }}
          </p>
          
          <a
            :href="option.link"
            :class="[
              'inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 group-hover:transform group-hover:scale-105',
              option.color,
              option.hoverColor
            ]"
          >
            <span>{{ option.title }}</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      <!-- Specialties Overview -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Domaines d'Expertise
          </h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos intervenants couvrent tous les domaines clés du développement social 
            et de la transformation citoyenne.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="(specialty, index) in specialties"
            :key="index"
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {{ specialty.icon }}
            </div>
            <h4 class="font-bold text-gray-900 mb-1 text-sm">{{ specialty.name }}</h4>
            <p class="text-festisol-blue font-semibold text-lg">{{ specialty.count }}</p>
            <p class="text-gray-500 text-xs">experts</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <EnvelopeIcon class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Une question sur nos intervenants ?
          </h3>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous mettre en relation 
            avec l'expert qui correspond à vos besoins.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-festisol-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 btn-hover-lift">
              Nous contacter
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-festisol-red transition-colors duration-200 btn-hover-lift">
              Voir le programme
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="mt-16 text-center">
        <h4 class="text-xl font-bold text-gray-900 mb-4">
          Coordination des intervenants
        </h4>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
          <div class="flex items-center">
            <span class="text-2xl mr-2">📧</span>
            <span>intervenants@festisol.cm</span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div class="flex items-center">
            <span class="text-2xl mr-2">📱</span>
            <span>+237 696 34 39 15 / 6 95 61 01 78 </span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div class="flex items-center">
            <span class="text-2xl mr-2">👥</span>
            <span>Équipe Relations Publiques</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>