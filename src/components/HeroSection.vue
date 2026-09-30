<script setup lang="ts">
import {
  CalendarDaysIcon,
  MapPinIcon,
  DocumentArrowDownIcon,
} from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';

const events = [
  {
    city: 'DOUALA',
    date: 'BONAPRISO, Rue TOYOTA immeuble JOE PRISE',
    shortDate: 'DIMANCHE 22 JUIN',
    color: 'bg-festisol-red',
  },
  {
    city: 'YAOUNDÉ',
    date: 'BASTOS, Immeuble AIR FRANCE (Salle level UP)',
    shortDate: 'SAMEDI 28 JUIN',
    color: 'bg-festisol-blue',
  },
  {
    city: 'BANDJOUN',
    date: 'BANDJOUN SAMEDI 05 JUILLET',
    shortDate: 'SAMEDI 05 JUIL',
    color: 'bg-green-600',
  },
];

const downloadMagazine = async () => {
  try {
    // Vérifier d'abord si le fichier existe
    const response = await fetch('/MAGAZINE_FESTISOL_2024.pdf', { method: 'HEAD' });
    
    if (response.ok) {
      // Le fichier existe, procéder au téléchargement
      const link = document.createElement('a');
      link.href = '/MAGAZINE_FESTISOL_2024.pdf';
      link.download = 'Magazine_FESTISOL_2024.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Le fichier n'existe pas, afficher un message d'information
      showMagazineInfo();
    }
  } catch (error) {
    // En cas d'erreur, afficher le message d'information
    console.error('Erreur lors de la vérification du fichier:', error);
    showMagazineInfo();
  }
};

const showMagazineInfo = () => {
  // Créer une modal d'information plus élégante
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up">
      <div class="text-center">
        <div class="text-6xl mb-4">📖</div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">Magazine FESTISOL 2024</h3>
        <p class="text-gray-600 mb-6">
          Le magazine sera bientôt disponible en téléchargement. 
          En attendant, contactez-nous pour plus d'informations.
        </p>
        <div class="space-y-3 mb-6">
          <div class="flex items-center justify-center text-gray-600">
            <span class="text-2xl mr-2">📧</span>
            <span>plateforme.cameroun@terrafrik.org</span>
          </div>
          <div class="flex items-center justify-center text-gray-600">
            <span class="text-2xl mr-2">📱</span>
            <span>+237 696 34 39 15 / 6 95 61 01 78</span>
          </div>
        </div>
        <button 
          onclick="this.closest('.fixed').remove()" 
          class="w-full bg-festisol-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
        >
          Fermer
        </button>
      </div>
    </div>
  `;
  
  // Fermer la modal en cliquant à l'extérieur
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  document.body.appendChild(modal);
};
</script>

<template>
  <section
    id="accueil"
    class="min-h-screen bg-gradient-to-br from-festisol-blue via-festisol-purple to-festisol-red flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-festisol-yellow/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-white/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-festisol-yellow/5 to-transparent rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8"
    >
      <!-- Badge -->
      <div
        class="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 animate-fade-in"
      >
        <span class="text-festisol-yellow font-medium text-xs md:text-sm">
          Rencontre Nationale des Acteurs Cameroun
        </span>
      </div>

      <!-- Main Title -->
      <h1
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in px-2"
        style="animation-delay: 0.2s"
      >
        FESTIVAL DE SOLIDARITE 2025
      </h1>

      <!-- Slogan -->
      <p
        class="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-8 md:mb-12 animate-fade-in px-4"
        style="animation-delay: 0.4s"
      >
        "Nous sommes la nature qui se défend"
      </p>

      <!-- Events Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-in px-2"
        style="animation-delay: 0.6s"
      >
        <div
          v-for="(event, index) in events"
          :key="index"
          class="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:transform hover:scale-105"
        >
          <!-- Date Badge -->
          <div
            :class="[
              'inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full text-white font-bold text-xs md:text-sm mb-3 md:mb-4',
              event.color,
            ]"
          >
            <CalendarDaysIcon class="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            {{ event.shortDate }}
          </div>

          <!-- City -->
          <h3
            class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-festisol-yellow transition-colors duration-300"
          >
            {{ event.city }}
          </h3>

          <!-- Full Date -->
          <p
            class="text-white/80 font-medium flex items-center justify-center text-sm md:text-base"
          >
            <MapPinIcon class="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            {{ event.date }}
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 animate-fade-in px-4"
        style="animation-delay: 0.8s"
      >
        <RouterLink
          to="/contact"
          class="group bg-white text-festisol-blue px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-festisol-yellow hover:text-festisol-blue transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span class="flex items-center justify-center">
            Je participe
            <svg
              class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>
        </RouterLink>

        <RouterLink
          to="/programme"
          class="group border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-festisol-blue transition-all duration-300 transform hover:scale-105"
        >
          <span class="flex items-center justify-center">
            Programme complet
            <CalendarDaysIcon
              class="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:scale-110 transition-transform duration-300"
            />
          </span>
        </RouterLink>
      </div>

      <!-- Magazine Download CTA -->
      <div class="mb-8 md:mb-12 animate-fade-in" style="animation-delay: 1s">
        <button
          @click="downloadMagazine"
          class="group bg-festisol-yellow text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span class="flex items-center justify-center">
            <DocumentArrowDownIcon
              class="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
            />
            Magazine FESTISOL 2024
          </span>
        </button>
        <p class="text-white/70 text-xs md:text-sm mt-2">
          📖 Découvrez le bilan de l'édition 2024
        </p>
      </div>

      <!-- Quick Info -->
      <div
        class="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 animate-fade-in max-w-4xl mx-auto"
        style="animation-delay: 1.2s"
      >
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
          <div>
            <div
              class="text-2xl md:text-3xl font-bold text-festisol-yellow mb-1 md:mb-2"
            >
              3
            </div>
            <div class="text-white/80 text-xs md:text-sm">
              Rencontres d'acteurs
            </div>
          </div>
          <div>
            <div
              class="text-2xl md:text-3xl font-bold text-festisol-yellow mb-1 md:mb-2"
            >
              13
            </div>
            <div class="text-white/80 text-xs md:text-sm">
              Villes mobilisées
            </div>
          </div>
          <div>
            <div
              class="text-2xl md:text-3xl font-bold text-festisol-yellow mb-1 md:mb-2"
            >
              13
            </div>
            <div class="text-white/80 text-xs md:text-sm">
              Collectifs mobilisées
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2 animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>