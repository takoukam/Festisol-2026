<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('tous')

const categories = [
  { id: 'tous', name: 'Tous nos partenaires', count: 24 },
  { id: 'institutionnels', name: 'Institutionnels', count: 8 },
  { id: 'educatifs', name: 'Éducatifs', count: 6 },
  { id: 'associatifs', name: 'Associatifs', count: 5 },
  { id: 'medias', name: 'Médias', count: 3 },
  { id: 'prives', name: 'Privés', count: 2 }
]

const partners = [
  // Institutionnels
  {
    name: 'Ministère de l\'Éducation de Base',
    category: 'institutionnels',
    logo: '🏛️',
    role: 'Partenaire institutionnel',
    description: 'Soutien officiel aux programmes éducatifs'
  },
  {
    name: 'Ministère de la Jeunesse',
    category: 'institutionnels',
    logo: '👥',
    role: 'Partenaire institutionnel',
    description: 'Coordination des actions jeunesse'
  },
  {
    name: 'Mairie de Yaoundé',
    category: 'institutionnels',
    logo: '🏢',
    role: 'Partenaire territorial',
    description: 'Facilitation logistique et événementielle'
  },
  {
    name: 'Délégation Régionale du Centre',
    category: 'institutionnels',
    logo: '🏛️',
    role: 'Partenaire régional',
    description: 'Coordination régionale des activités'
  },
  {
    name: 'UNICEF Cameroun',
    category: 'institutionnels',
    logo: '🌍',
    role: 'Partenaire international',
    description: 'Protection et éducation des enfants'
  },
  {
    name: 'UNESCO Yaoundé',
    category: 'institutionnels',
    logo: '📚',
    role: 'Partenaire international',
    description: 'Éducation et culture pour tous'
  },
  {
    name: 'Ambassade de France',
    category: 'institutionnels',
    logo: '🇫🇷',
    role: 'Partenaire diplomatique',
    description: 'Coopération éducative et culturelle'
  },
  {
    name: 'Union Européenne',
    category: 'institutionnels',
    logo: '🇪🇺',
    role: 'Bailleur de fonds',
    description: 'Financement des programmes sociaux'
  },

  // Éducatifs
  {
    name: 'Université de Yaoundé I',
    category: 'educatifs',
    logo: '🎓',
    role: 'Partenaire académique',
    description: 'Recherche et formation supérieure'
  },
  {
    name: 'École Normale Supérieure',
    category: 'educatifs',
    logo: '👨‍🏫',
    role: 'Formation des enseignants',
    description: 'Formation pédagogique des éducateurs'
  },
  {
    name: 'Lycée Général Leclerc',
    category: 'educatifs',
    logo: '🏫',
    role: 'Établissement pilote',
    description: 'Expérimentation des programmes'
  },
  {
    name: 'Collège Vogt',
    category: 'educatifs',
    logo: '📖',
    role: 'Partenaire éducatif',
    description: 'Mise en œuvre des capsules'
  },
  {
    name: 'Institut Siantou',
    category: 'educatifs',
    logo: '⚙️',
    role: 'Formation technique',
    description: 'Éducation technique et professionnelle'
  },
  {
    name: 'Université Catholique',
    category: 'educatifs',
    logo: '⛪',
    role: 'Partenaire privé',
    description: 'Recherche en sciences sociales'
  },

  // Associatifs
  {
    name: 'ONG Jeunesse Citoyenne',
    category: 'associatifs',
    logo: '🤝',
    role: 'Partenaire associatif',
    description: 'Éducation civique et citoyenneté'
  },
  {
    name: 'Association Femmes et Développement',
    category: 'associatifs',
    logo: '👩',
    role: 'Partenaire genre',
    description: 'Promotion de l\'égalité des sexes'
  },
  {
    name: 'Green Cameroon',
    category: 'associatifs',
    logo: '🌱',
    role: 'Partenaire environnemental',
    description: 'Protection de l\'environnement'
  },
  {
    name: 'Solidarité Sans Frontières',
    category: 'associatifs',
    logo: '🌍',
    role: 'Partenaire humanitaire',
    description: 'Actions de solidarité internationale'
  },
  {
    name: 'Réseau des Éducateurs',
    category: 'associatifs',
    logo: '📚',
    role: 'Réseau professionnel',
    description: 'Formation continue des éducateurs'
  },

  // Médias
  {
    name: 'Cameroon Radio Television',
    category: 'medias',
    logo: '📺',
    role: 'Média public',
    description: 'Diffusion et couverture médiatique'
  },
  {
    name: 'Canal 2 International',
    category: 'medias',
    logo: '📡',
    role: 'Média privé',
    description: 'Promotion et sensibilisation'
  },
  {
    name: 'Mutations Quotidien',
    category: 'medias',
    logo: '📰',
    role: 'Presse écrite',
    description: 'Information et communication'
  },

  // Privés
  {
    name: 'MTN Cameroun',
    category: 'prives',
    logo: '📱',
    role: 'Sponsor technologique',
    description: 'Solutions de communication'
  },
  {
    name: 'Orange Cameroun',
    category: 'prives',
    logo: '🟠',
    role: 'Partenaire télécoms',
    description: 'Connectivité et innovation'
  }
]

const filteredPartners = computed(() => {
  if (activeCategory.value === 'tous') {
    return partners
  }
  return partners.filter(partner => partner.category === activeCategory.value)
})

const setCategory = (categoryId) => {
  activeCategory.value = categoryId
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Découvrez nos partenaires
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Institutions, associations, entreprises et médias unis pour faire du FESTISOL 
          un événement d'envergure nationale et d'impact durable.
        </p>
      </div>

      <!-- Category Filters -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setCategory(category.id)"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2',
              activeCategory === category.id
                ? 'bg-festisol-blue text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]"
          >
            <span>{{ category.name }}</span>
            <span :class="[
              'text-xs px-2 py-0.5 rounded-full',
              activeCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
            ]">
              {{ category.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="(partner, index) in filteredPartners"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 text-center group hover:transform hover:scale-105"
        >
          <!-- Logo -->
          <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {{ partner.logo }}
          </div>
          
          <!-- Partner Info -->
          <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-festisol-blue transition-colors duration-200">
            {{ partner.name }}
          </h3>
          
          <p class="text-festisol-red font-semibold text-sm mb-2">{{ partner.role }}</p>
          
          <p class="text-gray-600 text-sm leading-relaxed">{{ partner.description }}</p>
          
          <!-- Hover indicator -->
          <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-12 h-1 bg-gradient-to-r from-festisol-yellow to-festisol-red rounded-full mx-auto"></div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-festisol-blue mb-2">50+</div>
          <div class="text-gray-600">Partenaires engagés</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-festisol-red mb-2">8</div>
          <div class="text-gray-600">Institutions publiques</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-green-600 mb-2">15+</div>
          <div class="text-gray-600">Organisations civiles</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-festisol-purple mb-2">100%</div>
          <div class="text-gray-600">Engagement solidaire</div>
        </div>
      </div>
    </div>
  </section>
</template>