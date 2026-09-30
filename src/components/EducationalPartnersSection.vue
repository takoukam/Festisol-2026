<script setup lang="ts">
import { BuildingOffice2Icon, AcademicCapIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'

const partners = [
  {
    name: 'Lycée Général Leclerc',
    type: 'Établissement public',
    logo: '🏫',
    students: '2,500 élèves'
  },
  {
    name: 'Collège Vogt',
    type: 'Établissement privé',
    logo: '🎓',
    students: '1,800 élèves'
  },
  {
    name: 'Lycée de Ngoa-Ekellé',
    type: 'Établissement public',
    logo: '📚',
    students: '3,200 élèves'
  },
  {
    name: 'École Normale Supérieure',
    type: 'Formation des enseignants',
    logo: '👨‍🏫',
    students: '800 étudiants'
  },
  {
    name: 'Université de Yaoundé I',
    type: 'Enseignement supérieur',
    logo: '🎯',
    students: '15,000 étudiants'
  },
  {
    name: 'Institut Siantou',
    type: 'Établissement technique',
    logo: '⚙️',
    students: '1,200 élèves'
  }
]

const benefits = [
  {
    title: 'Supports pédagogiques gratuits',
    description: 'Accès à toutes nos capsules et ressources éducatives',
    icon: '📖'
  },
  {
    title: 'Formation des enseignants',
    description: 'Ateliers de formation aux techniques de sensibilisation',
    icon: '👩‍🏫'
  },
  {
    title: 'Accompagnement personnalisé',
    description: 'Suivi et conseil pour l\'intégration des activités',
    icon: '🤝'
  },
  {
    title: 'Certification de participation',
    description: 'Reconnaissance officielle de votre engagement',
    icon: '🏆'
  }
]
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
          <BuildingOffice2Icon class="w-6 h-6 mr-2 text-festisol-blue" />
          <span class="text-festisol-blue font-semibold">Réseau éducatif</span>
        </div>
        
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Nos Partenaires Éducatifs
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Plus de 100 établissements scolaires et universitaires nous font confiance 
          pour sensibiliser leurs élèves aux enjeux de solidarité et de citoyenneté.
        </p>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105 border border-gray-100"
        >
          <div class="flex items-start">
            <div class="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
              {{ partner.logo }}
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-festisol-blue transition-colors">
                {{ partner.name }}
              </h3>
              <p class="text-festisol-red font-semibold text-sm mb-2">{{ partner.type }}</p>
              <p class="text-gray-600 text-sm">{{ partner.students }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-festisol-blue mb-4">
            Pourquoi devenir partenaire ?
          </h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Rejoignez notre réseau et bénéficiez d'un accompagnement complet 
            pour intégrer l'éducation à la citoyenneté dans votre établissement.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-center group"
          >
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ benefit.icon }}
            </div>
            <h4 class="text-lg font-bold text-gray-900 mb-2">{{ benefit.title }}</h4>
            <p class="text-gray-600 text-sm">{{ benefit.description }}</p>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <button class="bg-festisol-blue hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 btn-hover-lift mr-4">
            Devenir partenaire
          </button>
          <button class="border-2 border-festisol-blue text-festisol-blue hover:bg-festisol-blue hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 btn-hover-lift">
            Télécharger le dossier
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-festisol-blue mb-2">100+</div>
          <div class="text-gray-600">Établissements partenaires</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-festisol-red mb-2">25,000+</div>
          <div class="text-gray-600">Élèves sensibilisés</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-green-600 mb-2">500+</div>
          <div class="text-gray-600">Enseignants formés</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-festisol-purple mb-2">10</div>
          <div class="text-gray-600">Régions couvertes</div>
        </div>
      </div>
    </div>
  </section>
</template>