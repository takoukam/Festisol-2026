<script setup lang="ts">
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline';

const contactInfo = [
  {
    title: 'Email principal',
    value: 'plateforme.cameroun@terrafrik.org',
    icon: EnvelopeIcon,
    color: 'bg-festisol-blue',
    link: 'mailto:plateforme.cameroun@terrafrik.org',
  },
  {
    title: 'Téléphone',
    value: '+237 696 34 39 15 / 6 95 61 01 78',
    icon: PhoneIcon,
    color: 'bg-green-600',
    link: 'tel:+2376XXXXXXX',
  },
  {
    title: 'Adresses',
    value:
      'Siège Terrafrik Cameroun – DOUALA | BONAPRISO Rue TOYOTA , Immeuble JOE PRISE',
    icon: MapPinIcon,
    color: 'bg-festisol-red',
    link: null,
  },
  {
    title: 'Horaires',
    value: 'Lun-Ven: 8h-17h',
    icon: ClockIcon,
    color: 'bg-festisol-purple',
    link: null,
  },
];

const socialMedia = [
  { name: 'Facebook', icon: '📘', link: '#', color: 'hover:bg-blue-600' },
  { name: 'Instagram', icon: '📷', link: '#', color: 'hover:bg-pink-600' },
  { name: 'Twitter', icon: '🐦', link: '#', color: 'hover:bg-blue-400' },
  { name: 'YouTube', icon: '📺', link: '#', color: 'hover:bg-red-600' },
  { name: 'LinkedIn', icon: '💼', link: '#', color: 'hover:bg-blue-700' },
];

const departments = [
  {
    name: 'Coordination générale',
    email: 'coordination@festisol.cm',
    description: 'Questions générales et coordination',
  },
  {
    name: 'Activités scolaires',
    email: 'education@festisol.cm',
    description: 'Programmes éducatifs et partenariats scolaires',
  },
  {
    name: 'Partenariats',
    email: 'partenariats@festisol.cm',
    description: 'Collaborations et sponsoring',
  },
  {
    name: 'Presse et médias',
    email: 'presse@festisol.cm',
    description: 'Relations presse et communication',
  },
];
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Nos Coordonnées
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Plusieurs moyens de nous joindre selon vos besoins. Nous nous
          engageons à vous répondre rapidement.
        </p>
      </div>

      <!-- Contact Info Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          v-for="(info, index) in contactInfo"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105"
        >
          <div
            :class="[
              'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300',
              info.color,
            ]"
          >
            <component :is="info.icon" class="w-8 h-8 text-white" />
          </div>

          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ info.title }}</h3>

          <a
            v-if="info.link"
            :href="info.link"
            class="text-gray-600 hover:text-festisol-blue transition-colors duration-200 font-medium"
          >
            {{ info.value }}
          </a>
          <p v-else class="text-gray-600 font-medium">{{ info.value }}</p>
        </div>
      </div>

      <!-- Social Media -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-festisol-blue mb-8">
          Suivez-nous sur les réseaux sociaux
        </h3>

        <div class="flex justify-center space-x-4 mb-8">
          <a
            v-for="(social, index) in socialMedia"
            :key="index"
            :href="social.link"
            :class="[
              'w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:transform hover:scale-110',
              social.color,
            ]"
            :title="social.name"
          >
            <span class="text-2xl">{{ social.icon }}</span>
          </a>
        </div>

        <!-- Newsletter Signup -->
        <div
          class="bg-gradient-sunset rounded-2xl p-8 text-white text-center max-w-2xl mx-auto"
        >
          <h4 class="text-xl font-bold mb-4">📧 Newsletter FESTISOL</h4>
          <p class="mb-6 opacity-90">
            Restez informé de toutes nos actualités et événements
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              class="bg-white text-festisol-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
