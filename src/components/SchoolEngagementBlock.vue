<script setup lang="ts">
import { 
  PlusCircleIcon, 
  BuildingOffice2Icon, 
  DocumentArrowDownIcon,
  ArrowRightIcon,
  UserGroupIcon,
  AcademicCapIcon 
} from '@heroicons/vue/24/outline'

const engagementOptions = [
  {
    title: 'Proposer une animation',
    description: 'Vous êtes enseignant, éducateur ou expert ? Proposez une intervention dans votre domaine.',
    icon: PlusCircleIcon,
    color: 'bg-festisol-blue',
    hoverColor: 'hover:bg-blue-800',
    target: 'Enseignants & Experts',
    link: '#proposer-animation'
  },
  {
    title: 'Inscrire mon établissement',
    description: 'Rejoignez le réseau FESTISOL et bénéficiez de tous nos supports pédagogiques.',
    icon: BuildingOffice2Icon,
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
    target: 'Directeurs & Responsables',
    link: '#inscrire-etablissement'
  },
  {
    title: 'Télécharger le kit pédagogique',
    description: 'Accédez gratuitement à toutes nos ressources : guides, vidéos, exercices.',
    icon: DocumentArrowDownIcon,
    color: 'bg-festisol-red',
    hoverColor: 'hover:bg-red-700',
    target: 'Tous les éducateurs',
    link: '#kit-pedagogique'
  }
]

const testimonials = [
  {
    name: 'Marie Nkomo',
    role: 'Directrice, Lycée de Ngoa-Ekellé',
    message: 'Les capsules FESTISOL ont transformé notre approche de l\'éducation civique. Nos élèves sont plus engagés que jamais.',
    avatar: '👩‍💼'
  },
  {
    name: 'Jean-Paul Mballa',
    role: 'Enseignant, Collège Vogt',
    message: 'Un programme exceptionnel qui donne du sens à notre mission éducative. Les outils sont parfaitement adaptés.',
    avatar: '👨‍🏫'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-6">
          <UserGroupIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
          <span class="text-festisol-blue font-semibold">Rejoignez le mouvement</span>
        </div>
        
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Engagez-vous avec nous
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Que vous soyez enseignant, directeur d'établissement ou éducateur, 
          il existe plusieurs façons de participer à cette belle aventure éducative.
        </p>
      </div>

      <!-- Engagement Options -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="(option, index) in engagementOptions"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center hover:transform hover:scale-105"
        >
          <!-- Icon -->
          <div :class="[
            'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300',
            option.color
          ]">
            <component :is="option.icon" class="w-8 h-8 text-white" />
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ option.title }}
          </h3>
          
          <p class="text-gray-600 mb-4 leading-relaxed">
            {{ option.description }}
          </p>
          
          <div class="text-sm text-festisol-blue font-semibold mb-6">
            👥 {{ option.target }}
          </div>
          
          <a
            :href="option.link"
            :class="[
              'inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 group-hover:transform group-hover:scale-105',
              option.color,
              option.hoverColor
            ]"
          >
            <span>{{ option.title }}</span>
            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="bg-festisol-cream rounded-3xl p-8 md:p-12 mb-16">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Ils nous font confiance
          </h3>
          <p class="text-lg text-gray-600">
            Découvrez les témoignages de nos partenaires éducatifs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div class="flex items-start mb-4">
              <div class="text-4xl mr-4">{{ testimonial.avatar }}</div>
              <div>
                <h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-festisol-blue text-sm">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "{{ testimonial.message }}"
            </p>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <!-- Background decorations -->
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <AcademicCapIcon class="w-16 h-16 mx-auto mb-6" />
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Prêts à transformer l'éducation ?
          </h3>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'éducateurs qui font déjà la différence 
            dans la vie de milliers d'élèves camerounais.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-festisol-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 btn-hover-lift">
              Commencer maintenant
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-festisol-red transition-colors duration-200 btn-hover-lift">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="mt-16 text-center">
        <h4 class="text-xl font-bold text-gray-900 mb-4">
          Une question sur nos activités scolaires ?
        </h4>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
          <div class="flex items-center">
            <span class="text-2xl mr-2">📧</span>
            <span>education@festisol.cm</span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div class="flex items-center">
            <span class="text-2xl mr-2">📱</span>
            <span>+237 696 34 39 15 / 6 95 61 01 78 </span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-300"></div>
          <div class="flex items-center">
            <span class="text-2xl mr-2">👥</span>
            <span>Équipe pédagogique FESTISOL</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>