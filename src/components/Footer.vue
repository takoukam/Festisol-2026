<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <footer id="contact" class="bg-festisol-blue text-white py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <!-- Logo and Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
            <div
              class="w-50 h-12 md:w-14 md:h-14 flex items-center justify-center"
            >
              <img
                src="/Logo_FestisolFichier.png"
                alt="FESTISOL Logo"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <p class="text-gray-300 mb-4 md:mb-6 max-w-md text-sm md:text-base">
            Le Festival des Solidarités Cameroun est un événement annuel qui
            rassemble les acteurs du changement social pour construire un avenir
            plus solidaire.
          </p>

          <!-- Social Media -->
          <div class="flex space-x-3 md:space-x-4">
            <a
              href="#"
              class="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            >
              <span class="text-base md:text-lg">📘</span>
            </a>
            <a
              href="#"
              class="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            >
              <span class="text-base md:text-lg">📷</span>
            </a>
            <a
              href="#"
              class="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            >
              <span class="text-base md:text-lg">🐦</span>
            </a>
            <a
              href="#"
              class="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
            >
              <span class="text-base md:text-lg">📺</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-base md:text-lg font-bold mb-3 md:mb-4">
            Liens rapides
          </h3>
          <ul class="space-y-1 md:space-y-2">
            <li>
              <a
                href="#accueil"
                class="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >Accueil</a
              >
            </li>
            <li>
              <a
                href="#programme"
                class="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >Programme</a
              >
            </li>
            <li>
              <a
                href="#activites"
                class="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >Activités</a
              >
            </li>
            <li>
              <a
                href="#partenaires"
                class="text-gray-300 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >Partenaires</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-base md:text-lg font-bold mb-3 md:mb-4">Contact</h3>
          <div class="space-y-2 md:space-y-3">
            <div class="flex items-center">
              <EnvelopeIcon
                class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-festisol-yellow"
              />
              <span class="text-gray-300 text-sm md:text-base"
                >plateforme.cameroun@terrafrik.org</span
              >
            </div>
            <div class="flex items-center">
              <PhoneIcon
                class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-festisol-yellow"
              />
              <span class="text-gray-300 text-sm md:text-base"
                >+237 696343915/ 695610178
              </span>
            </div>
            <div class="flex items-center">
              <MapPinIcon
                class="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-festisol-yellow"
              />
              <span class="text-gray-300 text-sm md:text-base"
                >Yaoundé, Douala Cameroun</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <div class="text-gray-300 text-xs md:text-sm mb-3 md:mb-0">
          © 2025 FESTISOL Cameroun. Tous droits réservés.
        </div>
        <div
          class="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm"
        >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            >Mentions légales</a
          >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            >Politique de confidentialité</a
          >
          <a
            href="#"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            >CGU</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
