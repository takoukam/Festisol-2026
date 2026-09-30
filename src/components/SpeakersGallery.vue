<script setup lang="ts">
import { ref, computed } from 'vue'
import { XMarkIcon, MapPinIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'

const speakers = [
  {
    id: 1,
    name: 'Dr. Marie Nkomo',
    role: 'Environnementaliste',
    institution: 'Université de Yaoundé I',
    speciality: 'Protection de la biodiversité',
    theme: 'Écologie',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Docteure en écologie avec plus de 15 ans d\'expérience en conservation de la biodiversité. Elle dirige plusieurs projets de recherche sur la protection des écosystèmes camerounais.',
    achievements: ['Prix national de l\'environnement 2022', 'Auteure de 25 publications scientifiques', 'Consultante pour l\'ONU Environnement'],
    quote: 'La nature est notre bien commun le plus précieux. Nous devons la protéger pour les générations futures.',
    color: 'bg-green-500'
  },
  {
    id: 2,
    name: 'Pr. Jean Mballa',
    role: 'Sociologue',
    institution: 'École Normale Supérieure',
    speciality: 'Éducation et jeunesse',
    theme: 'Éducation',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Professeur spécialisé dans l\'étude des comportements juvéniles et l\'éducation à la citoyenneté. Expert reconnu en prévention de la délinquance juvénile.',
    achievements: ['Directeur de 50+ thèses de doctorat', 'Conseiller ministériel en éducation', 'Fondateur de l\'ONG Jeunesse Citoyenne'],
    quote: 'L\'éducation est la clé de voûte de toute transformation sociale durable.',
    color: 'bg-festisol-blue'
  },
  {
    id: 3,
    name: 'Dr. Awa Fouda',
    role: 'Médecin psychiatre',
    institution: 'Hôpital Central de Yaoundé',
    speciality: 'Santé mentale et addictions',
    theme: 'Santé',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Spécialiste en psychiatrie et addictologie, elle coordonne le programme national de lutte contre les drogues chez les jeunes.',
    achievements: ['Chef de service psychiatrie', '10 ans d\'expérience en addictologie', 'Formatrice internationale OMS'],
    quote: 'La prévention des addictions commence par l\'écoute et la compréhension.',
    color: 'bg-festisol-red'
  },
  {
    id: 4,
    name: 'Chef Atangana',
    role: 'Autorité traditionnelle',
    institution: 'Chefferie Ewondo',
    speciality: 'Culture et médiation',
    theme: 'Culture',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Gardien des traditions ancestrales et médiateur culturel reconnu. Il œuvre pour la réconciliation et la préservation du patrimoine culturel.',
    achievements: ['Médiateur dans 100+ conflits', 'Gardien de la tradition Ewondo', 'Ambassadeur de la paix'],
    quote: 'Nos traditions sont un trésor de sagesse pour construire l\'avenir.',
    color: 'bg-festisol-yellow text-black'
  },
  {
    id: 5,
    name: 'Me. Sarah Ndongo',
    role: 'Avocate',
    institution: 'Barreau du Cameroun',
    speciality: 'Droits humains',
    theme: 'Justice',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Avocate spécialisée en droits humains et justice sociale. Elle défend les causes des plus vulnérables et milite pour l\'égalité des droits.',
    achievements: ['100+ affaires de droits humains', 'Présidente ONG Justice pour Tous', 'Prix de l\'avocat de l\'année 2023'],
    quote: 'La justice n\'est pas un privilège, c\'est un droit fondamental pour tous.',
    color: 'bg-festisol-purple'
  },
  {
    id: 6,
    name: 'Pr. Paul Essomba',
    role: 'Économiste',
    institution: 'Université de Douala',
    speciality: 'Économie sociale',
    theme: 'Inclusion',
    image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Professeur d\'économie spécialisé dans l\'économie sociale et solidaire. Expert en politiques d\'inclusion et de réduction des inégalités.',
    achievements: ['Conseiller économique gouvernemental', 'Auteur de 5 ouvrages', 'Expert Banque Mondiale'],
    quote: 'Une économie inclusive est la base d\'une société juste et prospère.',
    color: 'bg-orange-500'
  }
]

const selectedSpeaker = ref(null)
const filterTheme = ref('tous')

const themes = [
  { id: 'tous', name: 'Tous les intervenants', count: speakers.length },
  { id: 'Écologie', name: 'Écologie', count: speakers.filter(s => s.theme === 'Écologie').length },
  { id: 'Éducation', name: 'Éducation', count: speakers.filter(s => s.theme === 'Éducation').length },
  { id: 'Santé', name: 'Santé', count: speakers.filter(s => s.theme === 'Santé').length },
  { id: 'Culture', name: 'Culture', count: speakers.filter(s => s.theme === 'Culture').length },
  { id: 'Justice', name: 'Justice', count: speakers.filter(s => s.theme === 'Justice').length },
  { id: 'Inclusion', name: 'Inclusion', count: speakers.filter(s => s.theme === 'Inclusion').length }
]

const filteredSpeakers = computed(() => {
  if (filterTheme.value === 'tous') {
    return speakers
  }
  return speakers.filter(speaker => speaker.theme === filterTheme.value)
})

const openModal = (speaker) => {
  selectedSpeaker.value = speaker
}

const closeModal = () => {
  selectedSpeaker.value = null
}
</script>

<template>
  <section class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Galerie des Intervenants
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les profils exceptionnels des experts qui partageront leurs connaissances 
          et leur passion lors du FESTISOL 2025.
        </p>
      </div>

      <!-- Theme Filters -->
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="theme in themes"
            :key="theme.id"
            @click="filterTheme = theme.id"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2',
              filterTheme === theme.id
                ? 'bg-festisol-blue text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]"
          >
            <span>{{ theme.name }}</span>
            <span :class="[
              'text-xs px-2 py-0.5 rounded-full',
              filterTheme === theme.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
            ]">
              {{ theme.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Speakers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="speaker in filteredSpeakers"
          :key="speaker.id"
          @click="openModal(speaker)"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
        >
          <!-- Image -->
          <div class="relative overflow-hidden h-64">
            <img
              :src="speaker.image"
              :alt="speaker.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Theme Badge -->
            <div :class="[
              'absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold',
              speaker.color
            ]">
              {{ speaker.theme }}
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-festisol-blue transition-colors">
              {{ speaker.name }}
            </h3>
            <p class="text-festisol-red font-semibold mb-2">{{ speaker.role }}</p>
            <p class="text-gray-600 text-sm mb-3">{{ speaker.institution }}</p>
            <p class="text-gray-700 text-sm">{{ speaker.speciality }}</p>
            
            <!-- View Profile Button -->
            <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-full bg-gray-50 hover:bg-festisol-blue hover:text-white text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-center">
                Voir le profil complet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Speaker Modal -->
    <div
      v-if="selectedSpeaker"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="relative">
          <img
            :src="selectedSpeaker.image"
            :alt="selectedSpeaker.name"
            class="w-full h-48 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
          >
            <XMarkIcon class="w-6 h-6 text-white" />
          </button>
          
          <!-- Theme Badge -->
          <div :class="[
            'absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold',
            selectedSpeaker.color
          ]">
            {{ selectedSpeaker.theme }}
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- Speaker Info -->
          <div class="flex items-start mb-6">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ selectedSpeaker.name }}</h3>
              <p class="text-festisol-red font-semibold mb-2">{{ selectedSpeaker.role }}</p>
              
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center">
                  <BriefcaseIcon class="w-4 h-4 mr-2" />
                  {{ selectedSpeaker.institution }}
                </div>
                <div class="flex items-center">
                  <AcademicCapIcon class="w-4 h-4 mr-2" />
                  {{ selectedSpeaker.speciality }}
                </div>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-900 mb-3">Biographie</h4>
            <p class="text-gray-700 leading-relaxed">{{ selectedSpeaker.bio }}</p>
          </div>

          <!-- Quote -->
          <div class="bg-festisol-cream rounded-xl p-4 mb-6">
            <blockquote class="text-gray-700 italic text-center">
              "{{ selectedSpeaker.quote }}"
            </blockquote>
          </div>

          <!-- Achievements -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-900 mb-3">Réalisations</h4>
            <ul class="space-y-2">
              <li
                v-for="(achievement, index) in selectedSpeaker.achievements"
                :key="index"
                class="flex items-start"
              >
                <div class="w-2 h-2 bg-festisol-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-gray-700">{{ achievement }}</span>
              </li>
            </ul>
          </div>

          <!-- Action Button -->
          <button
            @click="closeModal"
            class="w-full bg-festisol-blue hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </section>
</template>