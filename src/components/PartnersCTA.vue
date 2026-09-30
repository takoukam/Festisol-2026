<script setup lang="ts">
import { 
  HandRaisedIcon, 
  DocumentArrowDownIcon, 
  EnvelopeIcon,
  ArrowRightIcon,
  PlusCircleIcon,
  HeartIcon 
} from '@heroicons/vue/24/outline'

const partnershipTypes = [
  {
    title: 'Partenaire Institutionnel',
    description: 'Ministères, collectivités, organismes publics',
    benefits: ['Visibilité officielle', 'Participation aux décisions', 'Accès aux rapports'],
    icon: '🏛️',
    color: 'bg-festisol-blue'
  },
  {
    title: 'Partenaire Éducatif',
    description: 'Établissements scolaires, universités, centres de formation',
    benefits: ['Supports pédagogiques', 'Formation des équipes', 'Certification'],
    icon: '🎓',
    color: 'bg-green-600'
  },
  {
    title: 'Partenaire Associatif',
    description: 'ONG, associations, organisations de la société civile',
    benefits: ['Réseau collaboratif', 'Partage d\'expériences', 'Actions communes'],
    icon: '🤝',
    color: 'bg-festisol-red'
  },
  {
    title: 'Sponsor / Mécène',
    description: 'Entreprises privées, fondations, bailleurs',
    benefits: ['Visibilité commerciale', 'Impact social', 'Responsabilité sociétale'],
    icon: '💼',
    color: 'bg-festisol-purple'
  }
]

const partnershipSteps = [
  {
    step: 1,
    title: 'Premier contact',
    description: 'Contactez-nous pour exprimer votre intérêt',
    icon: EnvelopeIcon
  },
  {
    step: 2,
    title: 'Échange et définition',
    description: 'Nous définissons ensemble les modalités de collaboration',
    icon: HandRaisedIcon
  },
  {
    step: 3,
    title: 'Formalisation',
    description: 'Signature de la convention de partenariat',
    icon: DocumentArrowDownIcon
  },
  {
    step: 4,
    title: 'Collaboration active',
    description: 'Mise en œuvre des actions et suivi régulier',
    icon: HeartIcon
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main CTA Section -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mb-20">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <HandRaisedIcon class="w-16 h-16 mx-auto mb-6" />
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Vous souhaitez soutenir le FESTISOL ?
          </h2>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires engagés et contribuez à transformer 
            la société camerounaise par l'éducation et la solidarité.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-festisol-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 btn-hover-lift flex items-center justify-center">
              <PlusCircleIcon class="w-6 h-6 mr-2" />
              Devenir partenaire
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-festisol-red transition-colors duration-200 btn-hover-lift flex items-center justify-center">
              <DocumentArrowDownIcon class="w-6 h-6 mr-2" />
              Télécharger le dossier
            </button>
          </div>
        </div>
      </div>

      <!-- Partnership Types -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Types de partenariats
          </h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Plusieurs modalités de collaboration selon votre profil et vos objectifs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(type, index) in partnershipTypes"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center group hover:transform hover:scale-105"
          >
            <!-- Icon -->
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ type.icon }}
            </div>
            
            <h4 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-festisol-blue transition-colors duration-200">
              {{ type.title }}
            </h4>
            
            <p class="text-gray-600 text-sm mb-4">{{ type.description }}</p>
            
            <!-- Benefits -->
            <div class="space-y-1">
              <div
                v-for="(benefit, benefitIndex) in type.benefits"
                :key="benefitIndex"
                class="text-xs text-gray-500 flex items-center justify-center"
              >
                <div class="w-1 h-1 bg-festisol-yellow rounded-full mr-2"></div>
                {{ benefit }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Partnership Process -->
      <div class="bg-festisol-cream rounded-3xl p-8 md:p-12 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Comment devenir partenaire ?
          </h3>
          <p class="text-lg text-gray-600">
            Un processus simple et transparent en 4 étapes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in partnershipSteps"
            :key="index"
            class="text-center relative"
          >
            <!-- Step Number -->
            <div class="w-16 h-16 bg-festisol-blue rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <span class="text-white font-bold text-xl">{{ step.step }}</span>
            </div>
            
            <!-- Connector Line (except for last item) -->
            <div 
              v-if="index < partnershipSteps.length - 1"
              class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"
            ></div>
            
            <!-- Icon -->
            <component :is="step.icon" class="w-8 h-8 text-festisol-blue mx-auto mb-3" />
            
            <h4 class="font-bold text-gray-900 mb-2">{{ step.title }}</h4>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="text-center">
        <div class="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h4 class="text-2xl font-bold text-gray-900 mb-4">
            Prêt à nous rejoindre ?
          </h4>
          <p class="text-gray-600 mb-6">
            Contactez notre équipe partenariats pour discuter des opportunités de collaboration
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 mb-6">
            <div class="flex items-center">
              <span class="text-2xl mr-2">📧</span>
              <span>partenariats@festisol.cm</span>
            </div>
            <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div class="flex items-center">
              <span class="text-2xl mr-2">📱</span>
              <span>+237 696 34 39 15 / 6 95 61 01 78</span>
            </div>
          </div>
          
          <button class="bg-festisol-blue hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 btn-hover-lift flex items-center justify-center mx-auto">
            <EnvelopeIcon class="w-5 h-5 mr-2" />
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  </section>
</template>