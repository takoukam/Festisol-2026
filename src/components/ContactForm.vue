<script setup lang="ts">
import { ref } from 'vue'
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error'

const subjects = [
  { value: '', label: 'Sélectionnez un objet' },
  { value: 'informations', label: 'Informations générales' },
  { value: 'participation', label: 'Participation au festival' },
  { value: 'partenariat', label: 'Partenariat' },
  { value: 'education', label: 'Activités scolaires' },
  { value: 'media', label: 'Presse et médias' },
  { value: 'autre', label: 'Autre' }
]

const submitForm = async () => {
  if (!form.value.firstName || !form.value.lastName || !form.value.email || !form.value.subject || !form.value.message) {
    submitStatus.value = 'error'
    return
  }

  isSubmitting.value = true
  
  try {
    // Simulation d'envoi - remplacer par votre service d'email
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    submitStatus.value = 'success'
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Reset status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          Envoyez-nous un message
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      <!-- Form -->
      <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-2">
                Nom *
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                placeholder="Votre nom"
              />
            </div>
          </div>

          <!-- Contact Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Téléphone
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                placeholder="+237 696 34 39 15 / 6 95 61 01 78"
              />
            </div>
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
              Objet *
            </label>
            <select
              id="subject"
              v-model="form.subject"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
            >
              <option v-for="subject in subjects" :key="subject.value" :value="subject.value">
                {{ subject.label }}
              </option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200 resize-vertical"
              placeholder="Décrivez votre demande, question ou suggestion..."
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 btn-hover-lift',
                isSubmitting 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-festisol-yellow hover:bg-yellow-500 text-gray-900'
              ]"
            >
              <PaperAirplaneIcon v-if="!isSubmitting" class="w-6 h-6 mr-2" />
              <div v-else class="w-6 h-6 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message' }}
            </button>
          </div>

          <!-- Status Messages -->
          <div v-if="submitStatus" class="text-center">
            <div v-if="submitStatus === 'success'" class="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-lg">
              <CheckCircleIcon class="w-6 h-6 mr-2" />
              <span class="font-semibold">Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
            </div>
            <div v-else-if="submitStatus === 'error'" class="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 rounded-lg">
              <ExclamationTriangleIcon class="w-6 h-6 mr-2" />
              <span class="font-semibold">Erreur lors de l'envoi. Veuillez vérifier vos informations.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>