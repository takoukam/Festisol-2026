<script setup lang="ts">
import { 
  BuildingOffice2Icon, 
  AcademicCapIcon, 
  HeartIcon,
  BriefcaseIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

const acteurs = [
  {
    title: 'Associations',
    description: 'Organisations de la société civile engagées dans l\'action solidaire',
    icon: HeartIcon,
    color: 'bg-festisol-red',
    examples: ['ONG locales', 'Associations communautaires', 'Groupes de femmes']
  },
  {
    title: 'ONGs',
    description: 'Organisations non gouvernementales nationales et internationales',
    icon: GlobeAltIcon,
    color: 'bg-green-600',
    examples: ['ONG internationales', 'Organisations humanitaires', 'Réseaux de développement']
  },
  {
    title: 'Acteurs privés',
    description: 'Entreprises et fondations engagées dans la responsabilité sociale',
    icon: BriefcaseIcon,
    color: 'bg-festisol-purple',
    examples: ['Entreprises sociales', 'Fondations privées', 'Coopératives']
  },
  {
    title: 'Secteur scolaire',
    description: 'Établissements d\'enseignement et structures éducatives',
    icon: AcademicCapIcon,
    color: 'bg-festisol-blue',
    examples: ['Écoles primaires', 'Lycées et collèges', 'Universités']
  },
  {
    title: 'Institutions publiques',
    description: 'Organismes gouvernementaux et collectivités territoriales',
    icon: BuildingOffice2Icon,
    color: 'bg-orange-600',
    examples: ['Ministères', 'Mairies', 'Délégations régionales']
  },
  {
    title: 'Citoyens engagés',
    description: 'Groupes de citoyens et initiatives communautaires',
    icon: UserGroupIcon,
    color: 'bg-festisol-yellow text-black',
    examples: ['Groupes de jeunes', 'Comités de quartier', 'Initiatives citoyennes']
  }
]

const animations = [
  { type: 'Projections de films', icon: '🎬', description: 'Films documentaires et sensibilisation' },
  { type: 'Conférences', icon: '🎤', description: 'Débats et échanges d\'experts' },
  { type: 'Ateliers', icon: '🛠️', description: 'Formations pratiques et participatives' },
  { type: 'Concerts', icon: '🎵', description: 'Spectacles et animations culturelles' },
  { type: 'Actions de terrain', icon: '🌱', description: 'Activités concrètes et solidaires' }
]
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Le Forum des Associations
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          L'apogée du FESTISOL : un espace de rencontre unique qui réunit tous les acteurs 
          engagés pour informer, promouvoir et sensibiliser aux valeurs de solidarité.
        </p>
      </div>

      <!-- Objectifs du Forum -->
      <div class="bg-gradient-sunset rounded-3xl p-8 md:p-12 text-white text-center mb-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-40 h-40 bg-festisol-yellow/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10">
          <div class="text-6xl mb-6">🎯</div>
          <h3 class="text-3xl font-bold mb-6">Ambition du Forum</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div class="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 class="font-bold mb-3">📢 Informer</h4>
              <p class="text-sm opacity-90">
                Faire connaître les actions menées par chaque acteur sur le terrain
              </p>
            </div>
            <div class="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 class="font-bold mb-3">🤝 Promouvoir</h4>
              <p class="text-sm opacity-90">
                Valoriser les valeurs de solidarité et de coopération
              </p>
            </div>
            <div class="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 class="font-bold mb-3">🌱 Sensibiliser</h4>
              <p class="text-sm opacity-90">
                Éveiller les consciences à la citoyenneté et au développement durable
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Types d'acteurs -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-festisol-blue mb-8 text-center">
          Qui participe au Forum ?
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(acteur, index) in acteurs"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105"
          >
            <div :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300',
              acteur.color
            ]">
              <component :is="acteur.icon" class="w-8 h-8 text-white" />
            </div>
            
            <h4 class="text-xl font-bold text-gray-900 mb-3">{{ acteur.title }}</h4>
            <p class="text-gray-600 mb-4 text-sm">{{ acteur.description }}</p>
            
            <div class="space-y-1">
              <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Exemples :</p>
              <ul class="space-y-1">
                <li
                  v-for="(example, exIndex) in acteur.examples"
                  :key="exIndex"
                  class="text-xs text-gray-600 flex items-center"
                >
                  <div class="w-1 h-1 bg-festisol-yellow rounded-full mr-2"></div>
                  {{ example }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Types d'animations -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <h3 class="text-3xl font-bold text-festisol-blue mb-8 text-center">
          Multiples Animations
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div
            v-for="(animation, index) in animations"
            :key="index"
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {{ animation.icon }}
            </div>
            <h4 class="font-bold text-gray-900 mb-2 text-sm">{{ animation.type }}</h4>
            <p class="text-gray-600 text-xs">{{ animation.description }}</p>
          </div>
        </div>

        <!-- Citation inspirante -->
        <div class="bg-festisol-cream rounded-2xl p-8 text-center">
          <div class="text-4xl mb-4">💫</div>
          <blockquote class="text-xl font-bold text-gray-900 mb-4">
            "L'événement permet aux acteurs Festisol d'aller à la rencontre des citoyen.ne.s, 
            pour réfléchir ensemble et les inviter à devenir, elles eux aussi, 
            actrices et acteurs d'un monde plus juste, solidaire et durable."
          </blockquote>
          <p class="text-festisol-blue font-semibold">Mission du FESTISOL</p>
        </div>
      </div>
    </div>
  </section>
</template>