<script setup lang="ts">
import {
  CheckCircleIcon,
  CalendarDaysIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline';

const objectives = [
  'Promouvoir et célébrer une solidarité ouverte au monde',
  'Valoriser et sensibiliser autour des actions de solidarité',
  'Réunir tous les acteurs engagés dans un Forum des Associations',
  'Informer les citoyens sur les actions solidaires',
  'Sensibiliser à la citoyenneté et au développement durable',
  "Inviter chacun à devenir acteur d'un monde plus juste",
];

const specialites2025 = [
  {
    periode: 'Juillet - Août 2025',
    description: 'Célébration des solidarités au Cameroun',
    icon: '🌟',
    color: 'bg-festisol-yellow',
  },
  {
    periode: 'Novembre 2025',
    description: 'Rencontre Nationale des Acteurs',
    icon: '🤝',
    color: 'bg-festisol-blue',
  },
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <!-- Text Content -->
        <div class="mb-12 lg:mb-0">
          <h2 class="text-4xl font-bold text-festisol-blue mb-6">
            Présentation du FESTISOL
          </h2>

          <div class="prose prose-lg text-gray-600 mb-8">
            <p class="text-lg leading-relaxed mb-6">
              Le festival des solidarités dit <strong>FESTISOL</strong>, est un
              grand rendez-vous International pour promouvoir et célébrer une
              solidarité ouverte au monde et aux autres.
            </p>

            <p class="text-lg leading-relaxed mb-6">
              Les espaces sont mis à disposition pour permettre aux
              organisations de montrer, valoriser et sensibiliser autour des
              actions de solidarités qu'elles mènent sur leur territoire.
            </p>

            <p class="text-lg leading-relaxed mb-6">
              Au Cameroun, ce sera un événement de plusieurs jours composé de
              multiples animations (projections de film, conférences, ateliers,
              concerts, actions de terrain…) dont l'apogée consiste en un
              <strong>FORUM DES ASSOCIATIONS</strong>.
            </p>
          </div>

          <h3 class="text-2xl font-bold text-festisol-blue mb-6">
            Nos Objectifs
          </h3>

          <div class="space-y-4">
            <div
              v-for="(objective, index) in objectives"
              :key="index"
              class="flex items-start space-x-3 group"
            >
              <CheckCircleIcon
                class="w-6 h-6 text-festisol-yellow flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
              />
              <p class="text-gray-700 font-medium">{{ objective }}</p>
            </div>
          </div>
        </div>

        <!-- Image/Illustration -->
        <div class="relative">
          <div
            class="bg-gradient-sunset rounded-3xl p-8 text-white text-center relative overflow-hidden mb-8"
          >
            <!-- Background decoration -->
            <div class="absolute inset-0 bg-black/10"></div>
            <div
              class="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            ></div>
            <div
              class="absolute bottom-4 left-4 w-24 h-24 bg-festisol-yellow/20 rounded-full blur-xl"
            ></div>

            <div class="relative z-10">
              <div class="text-6xl mb-6">🌍</div>
              <h3 class="text-2xl font-bold mb-4">Forum des Associations</h3>
              <p class="text-lg opacity-90 mb-6">
                Réunir tous les acteurs engagés (associations, ONGs, acteurs
                privés, scolaires et institutions publiques) pour informer,
                promouvoir et sensibiliser.
              </p>

              <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <div class="text-2xl font-bold">🌐</div>
                  <div class="text-sm opacity-90">International</div>
                </div>
                <div class="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                  <div class="text-2xl font-bold">🤝</div>
                  <div class="text-sm opacity-90">Solidarité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
