<script setup lang="ts">
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/vue/24/outline';

const programmeItems = [
  {
    date: '22 Juin',
    city: 'DOUALA',
    title: 'Rencontre Nationale des Acteurs FESTISOL',
    theme: 'Environnement et Droits des Peuples',
    speaker: 'Collectifs régionaux et coordination nationale',
    time: '08h30 - 18h00',
    location: 'Immeuble Joe Prise, Bonapriso',
    color: 'bg-festisol-red',
    description:
      'Rencontre de planification avec les collectifs de Douala, Dizangue, Edea, Nkapa et Njombe. Ateliers participatifs, présentation des outils 2025 et signature de la charte.',
    highlights: [
      'Ateliers participatifs par collectifs',
      'Planification calendrier juillet-août',
      'Présentation outils Festisol 2025',
      'Panel ECSI',
      'Signature symbolique de la Charte',
    ],
  },
  {
    date: '28 Juin',
    city: 'YAOUNDÉ',
    title: 'Rencontre Nationale Capitale',
    theme: 'Gouvernance et politiques publiques',
    speaker: 'Institutions nationales et partenaires',
    time: '08h00 - 18h00',
    location: 'Palais des Sports de Yaoundé',
    color: 'bg-festisol-blue',
    description:
      "Dialogue national sur les politiques de solidarité et d'inclusion avec les institutions nationales.",
    highlights: [
      'Dialogue avec institutions nationales',
      'Politiques de solidarité',
      "Stratégies d'inclusion",
      'Partenariats institutionnels',
    ],
  },
  {
    date: '05 Juil',
    city: 'BANDJOUN',
    title: 'Rencontre Rurale',
    theme: 'Agriculture durable et environnement',
    speaker: 'Communautés rurales et ONG',
    time: '08h00 - 18h00',
    location: 'Centre communautaire de Bandjoun',
    color: 'bg-green-600',
    description:
      'Valorisation des pratiques agricoles durables et protection environnementale avec les communautés rurales.',
    highlights: [
      'Pratiques agricoles durables',
      'Protection environnementale',
      'Savoirs traditionnels',
      'Développement rural',
    ],
  },
];
</script>

<template>
  <section id="programme" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Programme des Rencontres 2025
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Trois rencontres stratégiques pour mobiliser tous les acteurs
          camerounais autour des enjeux de solidarité et de développement
          durable.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(item, index) in programmeItems"
          :key="index"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 hover:transform hover:scale-105"
        >
          <!-- Header with city and date -->
          <div class="relative">
            <div
              :class="[
                'p-6 text-white text-center relative overflow-hidden',
                item.color,
              ]"
            >
              <div class="absolute inset-0 bg-black/10"></div>
              <div class="relative z-10">
                <div class="text-3xl font-bold mb-2">{{ item.city }}</div>
                <div class="flex items-center justify-center">
                  <CalendarDaysIcon class="w-5 h-5 mr-2" />
                  <span class="font-semibold">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 mb-2 group-hover:text-festisol-blue transition-colors"
            >
              {{ item.title }}
            </h3>
            <p class="text-festisol-red font-semibold mb-3">{{ item.theme }}</p>
            <p class="text-gray-600 mb-4 text-sm">{{ item.description }}</p>

            <div class="space-y-2 text-sm text-gray-500 mb-4">
              <div class="flex items-center">
                <ClockIcon class="w-4 h-4 mr-2" />
                {{ item.time }}
              </div>
              <div class="flex items-center">
                <MapPinIcon class="w-4 h-4 mr-2" />
                {{ item.location }}
              </div>
            </div>

            <!-- Highlights -->
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-2 text-sm">
                Points forts :
              </h4>
              <ul class="space-y-1">
                <li
                  v-for="(highlight, hIndex) in item.highlights"
                  :key="hIndex"
                  class="text-xs text-gray-600 flex items-start"
                >
                  <div
                    class="w-1 h-1 bg-festisol-yellow rounded-full mt-1.5 mr-2 flex-shrink-0"
                  ></div>
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <div class="text-sm text-gray-600">
              <strong>Participants :</strong> {{ item.speaker }}
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div
        class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-black/10"></div>
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        ></div>

        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-4">Participez aux rencontres</h3>
          <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Choisissez la rencontre la plus proche de vous et rejoignez le
            mouvement des acteurs du changement au Cameroun.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-white text-festisol-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              S'inscrire maintenant
            </button>
            <button
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-festisol-red transition-colors duration-200"
            >
              Télécharger le programme détaillé
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
