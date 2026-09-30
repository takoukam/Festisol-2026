<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { DocumentTextIcon, HandRaisedIcon, HeartIcon, DocumentArrowDownIcon, CheckCircleIcon, UsersIcon, MegaphoneIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const principles = [
  {
    title: 'Un cadre commun',
    description: 'La Charte permet de rassembler une diversité d\'acteurs autour de principes comme la co-construction, le respect des différences et la pédagogie positive.',
    icon: UsersIcon,
    color: 'bg-festisol-blue',
    textColor: 'text-festisol-blue'
  },
  {
    title: 'Des engagements clairs',
    description: 'Refus du misérabilisme, transparence, ancrage local, non-centré sur la collecte de fonds.',
    icon: HandRaisedIcon,
    color: 'bg-festisol-red',
    textColor: 'text-festisol-red'
  },
  {
    title: 'Des messages positifs',
    description: 'Les activités doivent valoriser les initiatives solidaires et donner envie d\'agir.',
    icon: MegaphoneIcon,
    color: 'bg-green-600',
    textColor: 'text-green-600'
  },
  {
    title: 'Une démarche de progrès',
    description: 'Chaque acteur est invité à s\'améliorer, à dialoguer et à se former.',
    icon: ChartBarIcon,
    color: 'bg-festisol-purple',
    textColor: 'text-festisol-purple'
  }
]

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
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <!-- Hero Section -->
      <section class="min-h-[60vh] bg-gradient-to-br from-festisol-purple via-orange-500 to-festisol-yellow flex items-center justify-center relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-festisol-blue/10 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <DocumentTextIcon class="w-5 h-5 mr-2 text-white" />
            <span class="text-white font-medium text-sm">
              Nos valeurs et engagements
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in" style="animation-delay: 0.2s">
            CHARTE DU FESTIVAL
            <span class="block bg-gradient-to-r from-white to-festisol-yellow bg-clip-text text-transparent">
              DES SOLIDARITÉS
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-white/90 font-medium mb-8 animate-fade-in max-w-3xl mx-auto" style="animation-delay: 0.4s">
            Un socle de valeurs communes pour agir ensemble
          </p>

          <!-- Values Icons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-in" style="animation-delay: 0.6s">
            <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <HandRaisedIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
              <span class="font-medium">Solidarité</span>
            </div>
            <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <HeartIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
              <span class="font-medium">Respect</span>
            </div>
            <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <DocumentTextIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
              <span class="font-medium">Engagement</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Introduction -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-8">
              <DocumentTextIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
              <span class="text-festisol-blue font-semibold">Pourquoi une charte ?</span>
            </div>
            
            <div class="bg-festisol-cream rounded-3xl p-8 md:p-12">
              <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
                La Charte du FestiSol définit les valeurs partagées, les engagements attendus, et le cadre commun d'action pour tous les acteurs impliqués. Elle garantit que chaque activité menée dans le cadre du festival respecte des principes éthiques, solidaires et inclusifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Principles -->
      <section class="py-20 bg-festisol-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-festisol-blue mb-4">
              Les Principes Fondamentaux
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les quatre piliers qui structurent notre engagement commun 
              pour un festival authentique et transformateur.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              v-for="(principle, index) in principles"
              :key="index"
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 border border-gray-100"
            >
              <!-- Icon and Check -->
              <div class="flex items-start mb-6">
                <div :class="[
                  'w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300',
                  principle.color
                ]">
                  <component :is="principle.icon" class="w-8 h-8 text-white" />
                </div>
                
                <CheckCircleIcon :class="[
                  'w-8 h-8 mt-2',
                  principle.textColor
                ]" />
              </div>
              
              <h3 :class="[
                'text-2xl font-bold mb-4 group-hover:scale-105 transition-transform duration-200',
                principle.textColor
              ]">
                {{ principle.title }}
              </h3>
              
              <p class="text-gray-700 leading-relaxed">
                {{ principle.description }}
              </p>
              
              <!-- Hover indicator -->
              <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="w-12 h-1 bg-gradient-to-r from-festisol-yellow to-festisol-red rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- Quote Section -->
          <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <div class="text-6xl mb-6">🤝</div>
            <blockquote class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              "Ensemble, nous construisons un monde plus solidaire"
            </blockquote>
            <p class="text-lg text-gray-600">
              La force du FestiSol réside dans la diversité et l'engagement de ses acteurs
            </p>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
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

          <!-- Contact Info -->
          <div class="mt-16 text-center">
            <div class="bg-festisol-cream rounded-2xl p-8">
              <h4 class="text-xl font-bold text-gray-900 mb-4">
                Questions sur la charte ?
              </h4>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
                <div class="flex items-center">
                  <span class="text-2xl mr-2">📧</span>
                  <span>plateforme.cameroun@terrafrik.org</span>
                </div>
                <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
                <div class="flex items-center">
                  <span class="text-2xl mr-2">📱</span>
                  <span>+237 696 34 39 15 / 6 95 61 01 78</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>