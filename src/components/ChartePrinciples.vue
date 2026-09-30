<script setup lang="ts">
import { 
  CheckCircleIcon,
  UsersIcon,
  HandRaisedIcon,
  MegaphoneIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

const principles = [
  {
    title: 'Un cadre commun',
    description: 'La Charte permet de rassembler une diversité d\'acteurs autour de principes comme la co-construction, le respect des différences et la pédagogie positive.',
    icon: UsersIcon,
    color: 'bg-festisol-blue',
    textColor: 'text-festisol-blue'
  },
  {
    title: 'Des engagements clairs',
    description: 'Refus du misérabilisme, transparence, ancrage local, non-centré sur la collecte de fonds.',
    icon: HandRaisedIcon,
    color: 'bg-festisol-red',
    textColor: 'text-festisol-red'
  },
  {
    title: 'Des messages positifs',
    description: 'Les activités doivent valoriser les initiatives solidaires et donner envie d\'agir.',
    icon: MegaphoneIcon,
    color: 'bg-green-600',
    textColor: 'text-green-600'
  },
  {
    title: 'Une démarche de progrès',
    description: 'Chaque acteur est invité à s\'améliorer, à dialoguer et à se former.',
    icon: ChartBarIcon,
    color: 'bg-festisol-purple',
    textColor: 'text-festisol-purple'
  }
]
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Les Principes Fondamentaux
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les quatre piliers qui structurent notre engagement commun 
          pour un festival authentique et transformateur.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="(principle, index) in principles"
          :key="index"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 border border-gray-100"
        >
          <!-- Icon and Check -->
          <div class="flex items-start mb-6">
            <div :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300',
              principle.color
            ]">
              <component :is="principle.icon" class="w-8 h-8 text-white" />
            </div>
            
            <CheckCircleIcon :class="[
              'w-8 h-8 mt-2',
              principle.textColor
            ]" />
          </div>
          
          <h3 :class="[
            'text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-200',
            principle.textColor
          ]">
            {{ principle.title }}
          </h3>
          
          <p class="text-gray-700 leading-relaxed">
            {{ principle.description }}
          </p>
          
          <!-- Hover indicator -->
          <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-12 h-1 bg-gradient-to-r from-festisol-yellow to-festisol-red rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Quote Section -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
        <div class="text-6xl mb-6">🤝</div>
        <blockquote class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          "Ensemble, nous construisons un monde plus solidaire"
        </blockquote>
        <p class="text-lg text-gray-600">
          La force du FestiSol réside dans la diversité et l'engagement de ses acteurs
        </p>
      </div>
    </div>
  </section>
</template>