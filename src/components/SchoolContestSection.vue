<script setup lang="ts">
import {
  TrophyIcon,
  GiftIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline';

const prizes = [
  {
    position: '1er Prix',
    reward: 'Ordinateur portable + Certificat',
    icon: '🥇',
    color: 'bg-yellow-500',
  },
  {
    position: '2ème Prix',
    reward: 'Tablette + Livres éducatifs',
    icon: '🥈',
    color: 'bg-gray-400',
  },
  {
    position: '3ème Prix',
    reward: 'Kit scolaire complet',
    icon: '🥉',
    color: 'bg-orange-600',
  },
];

const contestRules = [
  'Ouvert à tous les élèves du secondaire',
  'Participation individuelle ou en groupe (max 4 élèves)',
  'Thème libre parmi les 6 thématiques FESTISOL',
  'Format : présentation, vidéo, affiche ou essai',
  'Date limite : 25 novembre 2025',
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-6"
        >
          <TrophyIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
          <span class="text-festisol-blue font-semibold"
            >Concours national</span
          >
        </div>

        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Grand Concours FESTISOL 2025
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Participez au concours national et montrez votre engagement pour un
          Cameroun plus solidaire. De nombreux prix à gagner pour récompenser
          votre créativité !
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <!-- Contest Info -->
        <div class="mb-12 lg:mb-0">
          <div
            class="bg-gradient-sunset rounded-3xl p-8 text-white mb-8 relative overflow-hidden"
          >
            <div class="absolute inset-0 bg-black/10"></div>
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            ></div>

            <div class="relative z-10">
              <div class="text-6xl mb-4">🎯</div>
              <h3 class="text-2xl font-bold mb-4">Comment participer ?</h3>
              <div class="space-y-3">
                <div
                  v-for="(rule, index) in contestRules"
                  :key="index"
                  class="flex items-start"
                >
                  <div
                    class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"
                  >
                    <span class="text-xs font-bold">{{ index + 1 }}</span>
                  </div>
                  <p class="text-sm opacity-90">{{ rule }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button
              class="bg-festisol-yellow hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 btn-hover-lift"
            >
              Je participe au concours
            </button>
          </div>
        </div>

        <!-- Prizes -->
        <div>
          <h3 class="text-2xl font-bold text-festisol-blue mb-8 text-center">
            Prix à gagner
          </h3>

          <div class="space-y-6 mb-8">
            <div
              v-for="(prize, index) in prizes"
              :key="index"
              class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105"
            >
              <div class="flex items-center">
                <div
                  :class="[
                    'w-16 h-16 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300',
                    prize.color,
                  ]"
                >
                  <span class="text-2xl">{{ prize.icon }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-gray-900 mb-1">
                    {{ prize.position }}
                  </h4>
                  <p class="text-gray-600">{{ prize.reward }}</p>
                </div>
                <ArrowRightIcon
                  class="w-6 h-6 text-gray-400 group-hover:text-festisol-blue group-hover:translate-x-1 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          <!-- Special Mentions -->
          <div class="bg-festisol-cream rounded-2xl p-6 text-center">
            <GiftIcon class="w-12 h-12 text-festisol-blue mx-auto mb-4" />
            <h4 class="text-lg font-bold text-gray-900 mb-2">Prix spéciaux</h4>
            <p class="text-gray-600 text-sm">
              Prix de l'originalité, prix du public, prix de l'engagement
              citoyen
            </p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="mt-20 bg-gray-50 rounded-3xl p-8">
        <h3 class="text-2xl font-bold text-festisol-blue mb-8 text-center">
          Calendrier du concours
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-festisol-blue rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <span class="text-white font-bold">1</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">Inscription</h4>
            <p class="text-sm text-gray-600">Jusqu'au 15 nov</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-festisol-purple rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <span class="text-white font-bold">2</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">Création</h4>
            <p class="text-sm text-gray-600">15 - 25 nov</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-festisol-red rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <span class="text-white font-bold">3</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">Évaluation</h4>
            <p class="text-sm text-gray-600">26 - 30 nov</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-festisol-yellow rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <span class="text-white font-bold">4</span>
            </div>
            <h4 class="font-bold text-gray-900 mb-2">Remise des prix</h4>
            <p class="text-sm text-gray-600">1er décembre</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
