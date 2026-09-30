<script setup lang="ts">
import { 
  DocumentArrowDownIcon,
  DocumentTextIcon,
  CheckBadgeIcon
} from '@heroicons/vue/24/outline'

const downloadCharte = () => {
  // Créer un lien de téléchargement vers le fichier PDF
  const link = document.createElement('a')
  link.href = '/charte.pdf'
  link.download = 'Charte_FestiSol_2025.pdf'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main CTA Section -->
      <div class="bg-gradient-to-br from-festisol-blue via-festisol-purple to-festisol-red rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <DocumentTextIcon class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Télécharger la Charte complète du FestiSol
          </h3>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Accédez au document officiel complet avec tous les détails, 
            engagements et modalités d'application de notre charte.
          </p>
          
          <button 
            @click="downloadCharte"
            class="inline-flex items-center bg-festisol-yellow hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 btn-hover-lift"
          >
            <DocumentArrowDownIcon class="w-6 h-6 mr-2" />
            Télécharger en PDF
          </button>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-festisol-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <DocumentTextIcon class="w-8 h-8 text-festisol-blue" />
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Document officiel</h4>
          <p class="text-gray-600 text-sm">Version 2025 validée par le comité d'organisation</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckBadgeIcon class="w-8 h-8 text-green-600" />
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Engagement qualité</h4>
          <p class="text-gray-600 text-sm">Garantie de respect des valeurs du festival</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-festisol-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <DocumentArrowDownIcon class="w-8 h-8 text-festisol-red" />
          </div>
          <h4 class="font-bold text-gray-900 mb-2">Accès libre</h4>
          <p class="text-gray-600 text-sm">Téléchargement gratuit et partage autorisé</p>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="mt-16 text-center">
        <div class="bg-festisol-cream rounded-2xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            Questions sur la charte ?
          </h4>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div class="flex items-center">
              <span class="text-2xl mr-2">📧</span>
              <span>charte@festisol.cm</span>
            </div>
            <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div class="flex items-center">
              <span class="text-2xl mr-2">📱</span>
              <span>+237 696 34 39 15 / 6 95 61 01 78 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>