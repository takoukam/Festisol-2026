<script setup lang="ts">
import { ref } from 'vue';

// Liste des logos de partenaires
const partnersLogos = [
  { name: 'AS-HSF', logo: '/partenaires/AS-HSF.png' },
  { name: 'RMJRN', logo: '/partenaires/RMJRN.png' },
  { name: 'Sparte Robotics', logo: '/partenaires/Sparte-robotics.png' },
  { name: 'ACDI', logo: '/partenaires/ACDI.png' },
  { name: 'CMA', logo: '/partenaires/CMA.png' },
  { name: 'Elan Solidarité', logo: '/partenaires/Elan-solidarite.png' },
  { name: 'Baigon Solidarité', logo: '/partenaires/Baigon-solidarite.png' },
  { name: 'Wissumate', logo: '/partenaires/Wissumate.png' },
  { name: 'Podie Centre Baham', logo: '/partenaires/Podie-centre-baham.png' },
  {
    name: 'Festival Alimenterre',
    logo: '/partenaires/festival-alimenterre.png',
  },
  { name: 'Fenarafec', logo: '/partenaires/Fenarafec.png' },
  { name: 'Crid', logo: '/partenaires/Crid.png' },
  { name: 'MEAE', logo: '/partenaires/MEAE.png' },
];

// Diviser les partenaires en deux groupes pour les deux lignes
const firstRowPartners = partnersLogos.slice(
  0,
  Math.ceil(partnersLogos.length / 2)
);
const secondRowPartners = partnersLogos.slice(
  Math.ceil(partnersLogos.length / 2)
);
</script>

<template>
  <section id="partenaires" class="py-12 md:py-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-festisol-blue mb-4">
          Nos Partenaires
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Ils nous font confiance et nous accompagnent dans cette belle aventure
          pour un Cameroun plus solidaire.
        </p>
      </div>

      <!-- Carrousel de logos - Première ligne (défilement vers la droite) -->
      <div class="relative mb-8 overflow-hidden">
        <div class="flex animate-scroll-right">
          <!-- Première série de logos -->
          <div class="flex items-center space-x-10 md:space-x-16">
            <div
              v-for="(partner, index) in firstRowPartners"
              :key="`first-${index}`"
              class="flex-shrink-0 w-40 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex items-center justify-center group hover:scale-110"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Duplication pour un défilement continu -->
          <div
            class="flex items-center space-x-10 md:space-x-16 ml-10 md:ml-16"
          >
            <div
              v-for="(partner, index) in firstRowPartners"
              :key="`first-duplicate-${index}`"
              class="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex items-center justify-center group hover:scale-110"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Carrousel de logos - Deuxième ligne (défilement vers la gauche) -->
      <div class="relative mb-12 md:mb-16 overflow-hidden">
        <div class="flex animate-scroll-left">
          <!-- Première série de logos -->
          <div class="flex items-center space-x-10 md:space-x-16">
            <div
              v-for="(partner, index) in secondRowPartners"
              :key="`second-${index}`"
              class="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex items-center justify-center group hover:scale-110"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Duplication pour un défilement continu -->
          <div
            class="flex items-center space-x-10 md:space-x-16 ml-10 md:ml-16"
          >
            <div
              v-for="(partner, index) in secondRowPartners"
              :key="`second-duplicate-${index}`"
              class="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex items-center justify-center group hover:scale-110"
            >
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Become Partner CTA -->
      <div
        class="bg-gradient-sunset rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white"
      >
        <h3 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Devenez partenaire
        </h3>
        <p
          class="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4"
        >
          Rejoignez notre réseau de partenaires engagés et contribuez à faire du
          FESTISOL un événement mémorable pour tous les Camerounais.
        </p>

        <div class="flex flex-col gap-3 md:gap-4 justify-center">
          <button
            class="bg-white text-festisol-red px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Devenir partenaire
          </button>
          <button
            class="border-2 border-white text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-festisol-red transition-colors duration-200"
          >
            Télécharger le dossier
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation pour le défilement vers la droite */
@keyframes scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}

/* Animation pour le défilement vers la gauche */
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll-right {
  animation: scroll-right 35s linear infinite;
}

.animate-scroll-left {
  animation: scroll-left 35s linear infinite;
}

/* Pause l'animation au survol */
.animate-scroll-right:hover,
.animate-scroll-left:hover {
  animation-play-state: paused;
}
</style>
