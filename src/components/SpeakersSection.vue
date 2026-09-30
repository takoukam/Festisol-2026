<script setup lang="ts">
import { ref } from 'vue'

const speakers = [
  {
    name: 'Dr. Marie Nkomo',
    role: 'Environnementaliste',
    speciality: 'Protection de la biodiversité',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Docteure en écologie avec plus de 15 ans d\'expérience en conservation.'
  },
  {
    name: 'Pr. Jean Mballa',
    role: 'Sociologue',
    speciality: 'Éducation et jeunesse',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Professeur spécialisé dans l\'étude des comportements juvéniles.'
  },
  {
    name: 'Dr. Awa Fouda',
    role: 'Médecin',
    speciality: 'Santé publique',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Experte en prévention des addictions et santé mentale.'
  },
  {
    name: 'Chef Atangana',
    role: 'Autorité traditionnelle',
    speciality: 'Culture et tradition',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Gardien des traditions ancestrales et médiateur culturel.'
  }
]

const selectedSpeaker = ref(null)

const openModal = (speaker) => {
  selectedSpeaker.value = speaker
}

const closeModal = () => {
  selectedSpeaker.value = null
}
</script>

<template>
  <section id="intervenants" class="py-20 bg-festisol-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">Nos Intervenants</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Rencontrez les experts qui partageront leurs connaissances et expériences 
          lors de ce festival exceptionnel.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(speaker, index) in speakers"
          :key="index"
          @click="openModal(speaker)"
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
        >
          <div class="relative overflow-hidden">
            <img
              :src="speaker.image"
              :alt="speaker.name"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ speaker.name }}</h3>
            <p class="text-festisol-red font-semibold mb-2">{{ speaker.role }}</p>
            <p class="text-gray-600 text-sm">{{ speaker.speciality }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedSpeaker"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up"
        @click.stop
      >
        <div class="flex items-center mb-4">
          <img
            :src="selectedSpeaker.image"
            :alt="selectedSpeaker.name"
            class="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 class="text-xl font-bold text-gray-900">{{ selectedSpeaker.name }}</h3>
            <p class="text-festisol-red font-semibold">{{ selectedSpeaker.role }}</p>
          </div>
        </div>
        
        <p class="text-gray-600 mb-4">{{ selectedSpeaker.speciality }}</p>
        <p class="text-gray-700">{{ selectedSpeaker.bio }}</p>
        
        <button
          @click="closeModal"
          class="mt-6 w-full bg-festisol-blue text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
        >
          Fermer
        </button>
      </div>
    </div>
  </section>
</template>