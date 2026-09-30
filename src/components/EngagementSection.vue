<script setup lang="ts">
import { 
  UserGroupIcon, 
  HeartIcon, 
  GlobeAltIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'

const engagementCards = [
  {
    title: 'Qui peut devenir acteur ?',
    description: 'Que vous soyez une association, un établissement scolaire, une collectivité, une structure socio-culturelle, une entreprise sociale ou un groupe de citoyen·ne·s, vous pouvez organiser des événements dans le cadre du Festisol. L\'important est de partager les valeurs de solidarité, d\'entraide, de paix et de justice sociale. Être acteur de solidarité, c\'est mener des actions citoyennes pour un monde plus juste et plus humain.',
    icon: UserGroupIcon,
    color: 'bg-festisol-blue',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Un socle de valeurs communes',
    description: 'La Charte du Festisol rassemble une diversité d\'acteurs autour de principes partagés : co-construction, absence de stéréotypes, priorité à l\'éducation plutôt qu\'à la collecte de biens. Les événements doivent porter des messages positifs, sensibiliser avec pédagogie, et encourager à l\'action citoyenne. Les initiatives solidaires locales sont au cœur du festival.',
    icon: HeartIcon,
    color: 'bg-festisol-red',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Focus 2025 : Environnement & Droits des peuples',
    description: 'L\'édition 2025 met l\'accent sur la justice environnementale et les droits des communautés locales. Elle valorise les initiatives de protection de l\'environnement, les luttes pour un accès équitable aux ressources, et l\'engagement des peuples autochtones et ruraux. Festisol sera un espace de dialogue et d\'action pour un avenir durable.',
    icon: GlobeAltIcon,
    color: 'bg-green-600',
    gradient: 'from-green-600 to-emerald-500',
    badge: '🌱 Focus 2025'
  }
]
</script>

<template>
  <section id="engagement" class="py-12 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-festisol-blue mb-4">S'engager avec le FESTISOL</h2>
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Agir ensemble pour la solidarité, l'environnement et les droits humains.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        <div
          v-for="(card, index) in engagementCards"
          :key="index"
          class="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 hover:transform hover:scale-105"
        >
          <!-- Header with icon and badge -->
          <div class="relative">
            <div :class="[
              'p-4 md:p-6 text-white text-center relative overflow-hidden',
              card.color
            ]">
              <div class="absolute inset-0 bg-black/10"></div>
              <div :class="[
                'absolute inset-0 bg-gradient-to-br opacity-20',
                card.gradient
              ]"></div>
              
              <div class="relative z-10">
                <component :is="card.icon" class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3" />
                
                <!-- Badge pour Focus 2025 -->
                <div v-if="card.badge" class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-2">
                  <span class="text-white font-medium text-xs md:text-sm">{{ card.badge }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-festisol-blue transition-colors text-center">
              {{ card.title }}
            </h3>
            
            <p class="text-gray-600 leading-relaxed text-sm md:text-base">
              {{ card.description }}
            </p>
            
            <!-- Hover indicator -->
            <div class="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-12 h-1 bg-gradient-to-r from-festisol-yellow to-festisol-red rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-gradient-sunset rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl"></div>
        
        <div class="relative z-10">
          <div class="flex justify-center space-x-2 md:space-x-4 text-3xl md:text-4xl mb-4 md:mb-6">
            <HandRaisedIcon class="w-8 h-8 md:w-12 md:h-12" />
            <AcademicCapIcon class="w-8 h-8 md:w-12 md:h-12" />
            <ShieldCheckIcon class="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Rejoignez le mouvement</h3>
          <p class="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Ensemble, construisons un Cameroun plus solidaire, plus juste et plus respectueux de l'environnement.
          </p>
          
          <div class="flex flex-col gap-3 md:gap-4 justify-center">
            <RouterLink 
              to="/contact"
              class="bg-white text-festisol-red px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Devenir acteur
            </RouterLink>
            <RouterLink 
              to="/charte"
              class="border-2 border-white text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-festisol-red transition-colors duration-200"
            >
              Découvrir la charte
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>