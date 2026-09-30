<script setup lang="ts">
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  HandRaisedIcon,
  GlobeAltIcon,
  UsersIcon 
} from '@heroicons/vue/24/outline'

const themes = [
  {
    title: 'Lutte contre les discriminations',
    description: 'Promouvoir l\'égalité et le respect de la diversité',
    icon: HandRaisedIcon,
    color: 'bg-festisol-red',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Éducation à la paix',
    description: 'Construire une culture de dialogue et de non-violence',
    icon: HeartIcon,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Prévention des violences',
    description: 'Sensibiliser aux dangers et proposer des alternatives',
    icon: ShieldCheckIcon,
    color: 'bg-festisol-blue',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Justice sociale',
    description: 'Œuvrer pour une société plus équitable',
    icon: AcademicCapIcon,
    color: 'bg-festisol-purple',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Écologie et environnement',
    description: 'Protéger notre patrimoine naturel commun',
    icon: GlobeAltIcon,
    color: 'bg-green-600',
    gradient: 'from-green-600 to-teal-500'
  },
  {
    title: 'Inclusion sociale',
    description: 'Garantir la participation de tous à la vie sociale',
    icon: UsersIcon,
    color: 'bg-festisol-yellow text-black',
    gradient: 'from-yellow-400 to-orange-400'
  }
]
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Nos Thématiques de Sensibilisation
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Le FESTISOL aborde les grands défis de notre époque à travers six thématiques 
          essentielles pour construire une société plus juste et solidaire.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(theme, index) in themes"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
        >
          <!-- Icon -->
          <div class="relative mb-6">
            <div :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300',
              theme.color
            ]">
              <component :is="theme.icon" class="w-8 h-8 text-white" />
            </div>
            
            <!-- Decorative gradient -->
            <div :class="[
              'absolute -top-2 -left-2 w-20 h-20 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br',
              theme.gradient
            ]"></div>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-festisol-blue transition-colors duration-200">
            {{ theme.title }}
          </h3>
          
          <p class="text-gray-600 leading-relaxed">
            {{ theme.description }}
          </p>
          
          <!-- Hover indicator -->
          <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-12 h-1 bg-gradient-to-r from-festisol-yellow to-festisol-red rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Quote Section -->
      <div class="mt-20 text-center">
        <div class="bg-gradient-sky rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-black/10"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <div class="text-6xl mb-6">💡</div>
            <blockquote class="text-2xl md:text-3xl font-bold mb-4">
              "L'éducation est l'arme la plus puissante pour changer le monde"
            </blockquote>
            <p class="text-lg opacity-90">
              Nelson Mandela - Une inspiration pour notre mission éducative
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>