<script setup lang="ts">
import { 
  PlusCircleIcon, 
  DocumentArrowDownIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  CalendarDaysIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main CTA Section -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mb-16">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <CalendarDaysIcon class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Ne manquez aucun événement !
          </h3>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Participez aux événements qui vous intéressent et contribuez à faire du FESTISOL 2025 
            un succès mémorable pour tous les Camerounais.
          </p>
        </div>
      </div>

      <!-- Action Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Proposer une activité -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105">
          <div class="w-16 h-16 bg-festisol-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <PlusCircleIcon class="w-8 h-8 text-white" />
          </div>
          
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            Proposer une activité
          </h4>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Vous avez une idée d'atelier, de conférence ou d'animation ? 
            Partagez-la avec nous et enrichissez le programme !
          </p>
          
          <button class="w-full bg-festisol-blue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
            <span>Proposer maintenant</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <!-- Télécharger le programme -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105">
          <div class="w-16 h-16 bg-festisol-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <DocumentArrowDownIcon class="w-8 h-8 text-white" />
          </div>
          
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            Programme complet PDF
          </h4>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Téléchargez le programme détaillé avec tous les horaires, 
            lieux et informations pratiques.
          </p>
          
          <button class="w-full bg-festisol-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
            <span>Télécharger PDF</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <!-- Participer -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:scale-105">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <UserGroupIcon class="w-8 h-8 text-white" />
          </div>
          
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            Je souhaite participer
          </h4>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Inscrivez-vous pour recevoir toutes les informations 
            et ne manquer aucun événement du festival.
          </p>
          
          <button class="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
            <span>S'inscrire</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h4 class="text-2xl font-bold text-gray-900 mb-4">
            Informations pratiques
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h5 class="font-bold text-gray-900 mb-3">📍 Lieux principaux</h5>
              <ul class="space-y-2 text-gray-600">
                <li>• Palais des Sports de Yaoundé</li>
                <li>• Université de Yaoundé I</li>
                <li>• Lycée Général Leclerc</li>
                <li>• Centre culturel français</li>
                <li>• Musée National du Cameroun</li>
              </ul>
            </div>
            <div>
              <h5 class="font-bold text-gray-900 mb-3">📞 Contact</h5>
              <div class="space-y-2 text-gray-600">
                <div>📧 plateforme.cameroun@terrafrik.org</div>
                <div>📱 +237 696 34 39 15 / 6 95 61 01 78 </div>
                <div>🌐 www.festisol.cm</div>
                <div>📍 Yaoundé, Cameroun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>