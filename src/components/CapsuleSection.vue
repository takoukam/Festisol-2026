<script setup lang="ts">
import { PlayIcon, TrophyIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section id="capsules" class="py-12 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-festisol-blue mb-4">Capsules Vidéo & Jeux Concours</h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Découvrez nos contenus vidéo éducatifs et participez à nos jeux concours 
          pour gagner des prix exceptionnels.
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-start space-y-8 lg:space-y-0">
        <!-- Video Player -->
        <div class="mb-8 lg:mb-0">
          <div class="relative bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <!-- YouTube Video Embed -->
            <div class="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/4kMIqlRA7tw"
                title="Capsule 1: Les dangers de la déviance"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
            
            <!-- Video Info -->
            <div class="p-4 md:p-6 bg-white">
              <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-2">
                Capsule 1: Les dangers de la déviance
              </h3>
              <p class="text-gray-600 text-sm md:text-base">
                Une approche pédagogique pour sensibiliser les jeunes aux risques de la déviance sociale.
              </p>
              
              <!-- Video Stats -->
              <div class="flex items-center mt-3 md:mt-4 space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500">
                <div class="flex items-center">
                  <PlayIcon class="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span>Vidéo éducative</span>
                </div>
                <div class="flex items-center">
                  <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span>FESTISOL 2025</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Video Info -->
          <div class="bg-festisol-cream rounded-xl p-4 md:p-6 mt-6">
            <h4 class="font-bold text-gray-900 mb-3 text-sm md:text-base">📚 Série de capsules éducatives</h4>
            <ul class="space-y-2 text-xs md:text-sm text-gray-700">
              <li class="flex items-center">
                <div class="w-2 h-2 bg-festisol-blue rounded-full mr-3"></div>
                Capsule 1: Les dangers de la déviance (disponible)
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                Capsule 2: Prévention des addictions (bientôt)
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                Capsule 3: Éducation à la paix (bientôt)
              </li>
              <li class="flex items-center">
                <div class="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                Capsule 4: Protection de l'environnement (bientôt)
              </li>
            </ul>
          </div>
        </div>

        <!-- Games Section -->
        <div class="space-y-6 md:space-y-8">
          <div class="bg-gradient-sunset rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
            <TrophyIcon class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
            <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4">Jeux Concours</h3>
            <p class="text-base md:text-lg mb-4 md:mb-6 opacity-90">
              Testez vos connaissances et gagnez des prix incroyables !
            </p>
            <button class="bg-white text-festisol-red px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Je joue maintenant
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div class="bg-festisol-yellow rounded-xl p-4 md:p-6 text-center">
              <h4 class="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Quiz Education</h4>
              <p class="text-xs md:text-sm text-gray-700">10 questions</p>
            </div>
            <div class="bg-festisol-blue rounded-xl p-4 md:p-6 text-center text-white">
              <h4 class="font-bold mb-1 md:mb-2 text-sm md:text-base">Défi Solidarité</h4>
              <p class="text-xs md:text-sm opacity-90">5 challenges</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-12 md:mt-16 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg text-center">
        <h3 class="text-xl md:text-2xl font-bold text-festisol-blue mb-3 md:mb-4">
          Accédez à toutes nos ressources éducatives
        </h3>
        <p class="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base px-4">
          Découvrez l'ensemble de nos capsules vidéo, supports pédagogiques et outils 
          d'animation pour sensibiliser efficacement vos élèves.
        </p>
        <div class="flex flex-col gap-3 md:gap-4 justify-center">
          <button class="bg-festisol-blue hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold transition-colors duration-200">
            Voir toutes les capsules
          </button>
          <button class="border-2 border-festisol-blue text-festisol-blue hover:bg-festisol-blue hover:text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold transition-colors duration-200">
            Télécharger les supports
          </button>
        </div>
      </div>
    </div>
  </section>
</template>