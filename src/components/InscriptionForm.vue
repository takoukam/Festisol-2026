<script setup lang="ts">
import { ref } from 'vue'
import { 
  PaperAirplaneIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'

const form = ref({
  organizationName: '',
  legalForm: '',
  responsibleName: '',
  phone: '',
  email: '',
  address: '',
  interventionDomains: [],
  involvementForm: '',
  previousExperience: '',
  previousExperienceDetails: '',
  charteAccepted: false
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error'

const legalForms = [
  { value: '', label: 'Sélectionnez une forme juridique' },
  { value: 'association', label: 'Association' },
  { value: 'ong', label: 'ONG' },
  { value: 'etablissement-scolaire', label: 'Établissement scolaire' },
  { value: 'collectivite', label: 'Collectivité territoriale' },
  { value: 'entreprise-sociale', label: 'Entreprise sociale' },
  { value: 'groupe-citoyen', label: 'Groupe de citoyens' },
  { value: 'structure-socio-culturelle', label: 'Structure socio-culturelle' },
  { value: 'autre', label: 'Autre' }
]

const interventionDomains = [
  { value: 'education-paix', label: 'Éducation à la paix' },
  { value: 'lutte-discriminations', label: 'Lutte contre les discriminations' },
  { value: 'prevention-violences', label: 'Prévention des violences' },
  { value: 'justice-sociale', label: 'Justice sociale' },
  { value: 'ecologie-environnement', label: 'Écologie et environnement' },
  { value: 'inclusion-sociale', label: 'Inclusion sociale' },
  { value: 'sante-publique', label: 'Santé publique' },
  { value: 'culture-tradition', label: 'Culture et tradition' },
  { value: 'economie-solidaire', label: 'Économie solidaire' },
  { value: 'droits-humains', label: 'Droits humains' }
]

const involvementForms = [
  { value: '', label: 'Sélectionnez votre forme d\'implication' },
  { value: 'organisation-evenement', label: 'Organisation d\'événement' },
  { value: 'participation-ateliers', label: 'Participation aux ateliers' },
  { value: 'animation-sensibilisation', label: 'Animation et sensibilisation' },
  { value: 'formation-education', label: 'Formation et éducation' },
  { value: 'communication-medias', label: 'Communication et médias' },
  { value: 'partenariat-logistique', label: 'Partenariat logistique' },
  { value: 'soutien-financier', label: 'Soutien financier' },
  { value: 'expertise-conseil', label: 'Expertise et conseil' },
  { value: 'autre', label: 'Autre (préciser)' }
]

const downloadCharte = () => {
  const link = document.createElement('a')
  link.href = '/charte.pdf'
  link.download = 'Charte_FestiSol_2025.pdf'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const submitForm = async () => {
  // Validation des champs obligatoires
  if (!form.value.organizationName || !form.value.legalForm || !form.value.responsibleName || 
      !form.value.email || !form.value.phone || !form.value.address || 
      form.value.interventionDomains.length === 0 || !form.value.involvementForm || 
      !form.value.previousExperience || !form.value.charteAccepted) {
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
      organizationName: '',
      legalForm: '',
      responsibleName: '',
      phone: '',
      email: '',
      address: '',
      interventionDomains: [],
      involvementForm: '',
      previousExperience: '',
      previousExperienceDetails: '',
      charteAccepted: false
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

const toggleDomain = (domain) => {
  const index = form.value.interventionDomains.indexOf(domain)
  if (index > -1) {
    form.value.interventionDomains.splice(index, 1)
  } else {
    form.value.interventionDomains.push(domain)
  }
}
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-6">
          <UserGroupIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
          <span class="text-festisol-blue font-semibold">Rejoignez le mouvement</span>
        </div>
        
        <h2 class="text-4xl font-bold text-festisol-blue mb-4">
          S'inscrire au FestiSol Cameroun 2025
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Remplissez ce formulaire pour participer activement au Festival des Solidarités. 
          Toute participation implique l'adhésion à la Charte du FestiSol.
        </p>
      </div>

      <!-- Form -->
      <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        <form @submit.prevent="submitForm" class="space-y-8">
          
          <!-- Section 1: Informations de l'organisation -->
          <div class="bg-festisol-cream rounded-2xl p-6">
            <h3 class="text-xl font-bold text-festisol-blue mb-6 flex items-center">
              <DocumentTextIcon class="w-6 h-6 mr-2" />
              Informations de l'organisation
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="md:col-span-2">
                <label for="organizationName" class="block text-sm font-semibold text-gray-700 mb-2">
                  Nom de l'organisation / groupe *
                </label>
                <input
                  id="organizationName"
                  v-model="form.organizationName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                  placeholder="Nom complet de votre organisation"
                />
              </div>

              <div>
                <label for="legalForm" class="block text-sm font-semibold text-gray-700 mb-2">
                  Forme juridique *
                </label>
                <select
                  id="legalForm"
                  v-model="form.legalForm"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                >
                  <option v-for="legalForm in legalForms" :key="legalForm.value" :value="legalForm.value">
                    {{ legalForm.label }}
                  </option>
                </select>
              </div>

              <div>
                <label for="responsibleName" class="block text-sm font-semibold text-gray-700 mb-2">
                  Nom du responsable *
                </label>
                <input
                  id="responsibleName"
                  v-model="form.responsibleName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                  placeholder="Nom et prénom du responsable"
                />
              </div>
            </div>
          </div>

          <!-- Section 2: Coordonnées -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-festisol-blue mb-6">Coordonnées</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                  placeholder="+237 696 34 39 15 / 6 95 61 01 78"
                />
              </div>

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

              <div class="md:col-span-2">
                <label for="address" class="block text-sm font-semibold text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <textarea
                  id="address"
                  v-model="form.address"
                  required
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Adresse complète avec ville et région"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Section 3: Domaines d'intervention -->
          <div class="bg-festisol-cream rounded-2xl p-6">
            <h3 class="text-xl font-bold text-festisol-blue mb-6">Domaines d'intervention *</h3>
            <p class="text-gray-600 mb-4 text-sm">Sélectionnez tous les domaines qui correspondent à vos activités :</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label
                v-for="domain in interventionDomains"
                :key="domain.value"
                class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-festisol-blue cursor-pointer transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  :value="domain.value"
                  @change="toggleDomain(domain.value)"
                  class="w-4 h-4 text-festisol-blue border-gray-300 rounded focus:ring-festisol-blue focus:ring-2"
                />
                <span class="ml-3 text-sm font-medium text-gray-700">{{ domain.label }}</span>
              </label>
            </div>
          </div>

          <!-- Section 4: Forme d'implication -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold text-festisol-blue mb-6">Forme d'implication souhaitée</h3>
            
            <div class="space-y-4">
              <div>
                <label for="involvementForm" class="block text-sm font-semibold text-gray-700 mb-2">
                  Comment souhaitez-vous vous impliquer ? *
                </label>
                <select
                  id="involvementForm"
                  v-model="form.involvementForm"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200"
                >
                  <option v-for="involvement in involvementForms" :key="involvement.value" :value="involvement.value">
                    {{ involvement.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section 5: Expérience précédente -->
          <div class="bg-festisol-cream rounded-2xl p-6">
            <h3 class="text-xl font-bold text-festisol-blue mb-6">Expérience avec le FestiSol</h3>
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-3">
                  Avez-vous déjà participé au FestiSol ? *
                </label>
                <div class="flex space-x-6">
                  <label class="flex items-center">
                    <input
                      type="radio"
                      v-model="form.previousExperience"
                      value="oui"
                      class="w-4 h-4 text-festisol-blue border-gray-300 focus:ring-festisol-blue focus:ring-2"
                    />
                    <span class="ml-2 text-sm font-medium text-gray-700">Oui</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      type="radio"
                      v-model="form.previousExperience"
                      value="non"
                      class="w-4 h-4 text-festisol-blue border-gray-300 focus:ring-festisol-blue focus:ring-2"
                    />
                    <span class="ml-2 text-sm font-medium text-gray-700">Non</span>
                  </label>
                </div>
              </div>

              <div v-if="form.previousExperience === 'oui'">
                <label for="previousExperienceDetails" class="block text-sm font-semibold text-gray-700 mb-2">
                  Précisez votre expérience précédente
                </label>
                <textarea
                  id="previousExperienceDetails"
                  v-model="form.previousExperienceDetails"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-festisol-blue focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Décrivez votre participation précédente au FestiSol..."
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Section 6: Charte FestiSol -->
          <div class="bg-gradient-to-br from-festisol-blue/5 to-festisol-purple/5 rounded-2xl p-6 border-2 border-festisol-blue/20">
            <h3 class="text-xl font-bold text-festisol-blue mb-6 flex items-center">
              <DocumentTextIcon class="w-6 h-6 mr-2" />
              Charte FestiSol
            </h3>
            
            <div class="space-y-6">
              <!-- Téléchargement de la charte -->
              <div class="bg-white rounded-xl p-6 border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <h4 class="font-bold text-gray-900 mb-2">📄 Charte du FestiSol 2025</h4>
                    <p class="text-gray-600 text-sm">
                      Document officiel définissant les valeurs et engagements du festival
                    </p>
                  </div>
                  <button
                    type="button"
                    @click="downloadCharte"
                    class="bg-festisol-yellow hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
                  >
                    <DocumentArrowDownIcon class="w-5 h-5 mr-2" />
                    Télécharger
                  </button>
                </div>
              </div>

              <!-- Case à cocher obligatoire -->
              <div class="bg-white rounded-xl p-6 border-2 border-festisol-red/20">
                <label class="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    v-model="form.charteAccepted"
                    required
                    class="w-5 h-5 text-festisol-blue border-gray-300 rounded focus:ring-festisol-blue focus:ring-2 mt-0.5 flex-shrink-0"
                  />
                  <span class="ml-3 text-sm font-medium text-gray-700 leading-relaxed">
                    <span class="text-festisol-red font-bold">* Obligatoire :</span>
                    J'ai lu et j\'accepte les engagements de la Charte du FestiSol. 
                    Je m'engage à respecter les valeurs de solidarité, d\'inclusion et de justice sociale 
                    dans toutes mes actions liées au festival.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting || !form.charteAccepted"
              :class="[
                'inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 btn-hover-lift',
                (isSubmitting || !form.charteAccepted)
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              ]"
            >
              <PaperAirplaneIcon v-if="!isSubmitting" class="w-6 h-6 mr-2" />
              <div v-else class="w-6 h-6 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande d\'inscription' }}
            </button>
            
            <p v-if="!form.charteAccepted" class="text-festisol-red text-sm mt-2">
              Vous devez accepter la Charte du FestiSol pour continuer
            </p>
          </div>

          <!-- Status Messages -->
          <div v-if="submitStatus" class="text-center">
            <div v-if="submitStatus === 'success'" class="inline-flex items-center px-6 py-4 bg-green-100 text-green-800 rounded-xl border border-green-200">
              <CheckCircleIcon class="w-6 h-6 mr-2" />
              <div class="text-left">
                <div class="font-bold">Inscription envoyée avec succès !</div>
                <div class="text-sm">Notre équipe vous contactera très prochainement.</div>
              </div>
            </div>
            <div v-else-if="submitStatus === 'error'" class="inline-flex items-center px-6 py-4 bg-red-100 text-red-800 rounded-xl border border-red-200">
              <ExclamationTriangleIcon class="w-6 h-6 mr-2" />
              <div class="text-left">
                <div class="font-bold">Erreur lors de l'envoi</div>
                <div class="text-sm">Veuillez vérifier que tous les champs obligatoires sont remplis.</div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="mt-16 text-center">
        <div class="bg-festisol-cream rounded-2xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-4">
            Besoin d'aide pour votre inscription ?
          </h4>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div class="flex items-center">
              <span class="text-2xl mr-2">📧</span>
              <span>plateforme.cameroun@terrafrik.org</span>
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