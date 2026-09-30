<script setup lang="ts">
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  TagIcon,
  PresentationChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
} from '@heroicons/vue/24/outline';

const programmeEvents = [
  {
    date: '',
    fullDate: 'Douala, Yaoundé, Bandjoun',
    location: 'Cameroun',
    events: [
      {
        time: '08h30',
        title: 'Accueil et enregistrement des participants',
        theme: 'Ouverture',
        speaker: "Équipe d'organisation",
        location: "Hall d'accueil",
        type: 'Accueil',
        public: 'Tous participants',
        color: 'bg-festisol-blue',
        description: 'Remise des kits, badges et programme de la journée',
      },
      {
        time: '09h00',
        title: "Mot d'ouverture officiel",
        theme: "Cérémonie d'ouverture",
        speaker: 'Coordination nationale Cameroun & Partenaires',
        location: 'Salle principale',
        type: 'Cérémonie',
        public: 'Tous participants',
        color: 'bg-festisol-red',
        description:
          'Mot de la coordination nationale et des partenaires, responsables collectifs régionaux',
      },
      {
        time: '09h30',
        title: 'Présentation du Festisol : principes, charte et ambition 2025',
        theme: 'Environnement et Droits des Peuples',
        speaker: 'Coordination nationale',
        location: 'Salle principale',
        type: 'Présentation',
        public: 'Tous participants',
        color: 'bg-green-600',
        description:
          'Présentation dynamique du contexte international et camerounais. Focus sur le thème 2025 : Environnement et Droits des Peuples',
      },
      {
        time: '10h30',
        title: 'Ateliers participatifs en collectifs',
        theme: 'Travail en groupes régionaux',
        speaker: 'Collectifs Douala, Dizangue, Edea, Nkapa, Njombe',
        location: "Salles d'ateliers",
        type: 'Atelier',
        public: 'Participants par région',
        color: 'bg-festisol-purple',
        description:
          'Identifier les réalités locales, proposer des activités pertinentes, identifier partenaires et ressources',
      },
      {
        time: '12h00',
        title: 'Restitution rapide des travaux en plénière',
        theme: 'Partage des propositions',
        speaker: 'Représentants des groupes',
        location: 'Salle principale',
        type: 'Restitution',
        public: 'Tous participants',
        color: 'bg-orange-500',
        description:
          'Chaque groupe partage ses propositions clés (5 min max par groupe)',
      },
      {
        time: '13h00',
        title: 'Pause déjeuner conviviale',
        theme: 'Networking',
        speaker: 'Tous les participants',
        location: 'Espace restauration',
        type: 'Pause',
        public: 'Tous participants',
        color: 'bg-festisol-yellow text-black',
        description:
          "Moment d'échange informel et de networking entre participants",
      },
      {
        time: '14h00',
        title: 'Atelier de planification collective',
        theme: 'Organisation calendrier juillet-août',
        speaker: 'Coordination & Collectifs',
        location: 'Salle principale',
        type: 'Planification',
        public: 'Tous participants',
        color: 'bg-blue-600',
        description:
          'Positionner les animations sur le calendrier, créer des synergies, identifier événements phares et besoins logistiques',
      },
      {
        time: '16h00',
        title: 'Présentation des outils Festisol 2025',
        theme: 'Outils et ressources',
        speaker: 'Équipe technique',
        location: 'Salle principale',
        type: 'Formation',
        public: 'Tous participants',
        color: 'bg-indigo-500',
        description:
          'Plateforme numérique, fiches animation, boîte à outils de communication, logos, procédures de suivi',
      },
      {
        time: '16h30',
        title: "Notre vision de l'ECSI",
        theme: 'Éducation à la Citoyenneté et à la Solidarité Internationale',
        speaker: "Panel d'experts",
        location: 'Salle principale',
        type: 'Panel',
        public: 'Tous participants',
        color: 'bg-purple-600',
        description:
          "Panel sur l'Éducation à la Citoyenneté et à la Solidarité Internationale",
      },
      {
        time: '17h30',
        title: 'Mot de clôture & engagements',
        theme: 'Clôture et engagements',
        speaker: 'Coordination nationale',
        location: 'Salle principale',
        type: 'Clôture',
        public: 'Tous participants',
        color: 'bg-festisol-red',
        description:
          'Signature symbolique de la Charte Festisol et photo de famille',
      },
    ],
  },
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Programme Détaillé des Rencontres
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez le programme complet de la Rencontre Nationale des Acteurs
          FESTISOL et des autres événements prévus en 2025.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-festisol-blue via-festisol-purple to-festisol-red"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(day, dayIndex) in programmeEvents"
            :key="dayIndex"
            class="relative"
          >
            <!-- Date marker -->
            <div class="flex items-center mb-8">
              <div
                class="flex-shrink-0 w-16 h-16 bg-white border-4 border-festisol-blue rounded-full flex items-center justify-center shadow-lg relative z-10"
              >
                <div class="text-center">
                  <div class="text-xs font-bold text-festisol-blue">
                    {{ day.date.split(' ')[1] }}
                  </div>
                  <div class="text-xs font-bold text-festisol-blue">
                    {{ day.date.split(' ')[0] }}
                  </div>
                </div>
              </div>
              <div
                class="ml-6 md:ml-0 md:absolute md:left-1/2 md:transform md:translate-x-8"
              >
                <h3 class="text-2xl font-bold text-gray-900">
                  {{ day.fullDate }}
                </h3>
                <p class="text-festisol-red font-semibold text-sm">
                  {{ day.location }}
                </p>
              </div>
            </div>

            <!-- Events for this day -->
            <div class="ml-24 md:ml-0 space-y-6">
              <div
                v-for="(event, eventIndex) in day.events"
                :key="eventIndex"
                :class="[
                  'md:w-1/2 relative',
                  eventIndex % 2 === 0
                    ? 'md:mr-auto md:pr-8'
                    : 'md:ml-auto md:pl-8',
                ]"
              >
                <div
                  class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:transform hover:scale-105"
                >
                  <!-- Event header -->
                  <div
                    :class="[
                      'p-4 text-white relative overflow-hidden',
                      event.color,
                    ]"
                  >
                    <div class="absolute inset-0 bg-black/10"></div>
                    <div
                      class="relative z-10 flex items-center justify-between"
                    >
                      <div class="flex items-center">
                        <ClockIcon class="w-5 h-5 mr-2" />
                        <span class="font-semibold">{{ event.time }}</span>
                      </div>
                      <span class="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {{ event.type }}
                      </span>
                    </div>
                  </div>

                  <!-- Event content -->
                  <div class="p-6">
                    <h4
                      class="text-xl font-bold text-gray-900 mb-2 group-hover:text-festisol-blue transition-colors"
                    >
                      {{ event.title }}
                    </h4>

                    <p class="text-festisol-red font-semibold mb-3">
                      {{ event.theme }}
                    </p>

                    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                      {{ event.description }}
                    </p>

                    <div class="space-y-2 text-sm text-gray-500 mb-4">
                      <div class="flex items-center">
                        <UserGroupIcon
                          class="w-4 h-4 mr-2 text-festisol-blue"
                        />
                        {{ event.speaker }}
                      </div>
                      <div class="flex items-center">
                        <MapPinIcon class="w-4 h-4 mr-2 text-festisol-blue" />
                        {{ event.location }}
                      </div>
                      <div class="flex items-center">
                        <TagIcon class="w-4 h-4 mr-2 text-festisol-blue" />
                        {{ event.public }}
                      </div>
                    </div>

                    <button
                      class="w-full bg-gray-50 hover:bg-festisol-blue hover:text-white text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>

                <!-- Timeline connector -->
                <div
                  :class="[
                    'hidden md:block absolute top-8 w-8 h-0.5 bg-gray-300',
                    eventIndex % 2 === 0 ? 'right-0' : 'left-0',
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations pratiques -->
      <div class="mt-20 bg-festisol-cream rounded-3xl p-8 md:p-12">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Informations Pratiques - Douala 22 Juin
          </h3>
          <p class="text-lg text-gray-600">
            Tout ce que vous devez savoir pour participer à la rencontre de
            Douala
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">📍</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">Lieu</h4>
            <p class="text-gray-600">
              Immeuble Joe Prise<br />Près du Restaurant White House<br />Bonapriso,
              Douala
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">🕘</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">Horaires</h4>
            <p class="text-gray-600">
              08h30 - 18h00<br />Accueil dès 08h30<br />Pause déjeuner :
              13h00-14h00
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">👥</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">Participants</h4>
            <p class="text-gray-600">
              Collectifs régionaux :<br />Douala, Dizangue, Edea,<br />Nkapa,
              Njombe
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">🎯</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">Objectifs</h4>
            <p class="text-gray-600">
              Planification collective<br />Identification des réalités
              locales<br />Création de synergies
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">🌱</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">Thème 2025</h4>
            <p class="text-gray-600">
              Environnement et<br />Droits des Peuples
            </p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="text-4xl mb-4">📋</div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">
              Kit participant
            </h4>
            <p class="text-gray-600">
              Badge, programme,<br />outils de communication,<br />documentation
            </p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-festisol-blue mb-2">10h</div>
          <div class="text-gray-600">de programme</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-festisol-red mb-2">5</div>
          <div class="text-gray-600">collectifs régionaux</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-600 mb-2">8</div>
          <div class="text-gray-600">sessions de travail</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-festisol-purple mb-2">1</div>
          <div class="text-gray-600">charte signée</div>
        </div>
      </div>
    </div>
  </section>
</template>
