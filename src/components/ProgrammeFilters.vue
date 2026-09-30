<script setup lang="ts">
import { ref } from 'vue'
import { FunnelIcon } from '@heroicons/vue/24/outline'

const activeFilter = ref('tous')

const filters = [
  { id: 'tous', name: 'Tous les événements', count: 50 },
  { id: 'education', name: 'Éducation', count: 15 },
  { id: 'ecologie', name: 'Écologie', count: 12 },
  { id: 'inclusion', name: 'Inclusion', count: 10 },
  { id: 'sante', name: 'Santé', count: 8 },
  { id: 'culture', name: 'Culture', count: 5 }
]

const publics = [
  { id: 'tous-publics', name: 'Tous publics' },
  { id: 'eleves', name: 'Élèves' },
  { id: 'enseignants', name: 'Enseignants' },
  { id: 'familles', name: 'Familles' },
  { id: 'professionnels', name: 'Professionnels' }
]

const setFilter = (filterId: string) => {
  activeFilter.value = filterId
}
</script>

<template>
  <section class="py-12 bg-festisol-cream border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center">
          <FunnelIcon class="w-6 h-6 text-festisol-blue mr-3" />
          <h2 class="text-2xl font-bold text-festisol-blue">Filtrer le programme</h2>
        </div>
        <div class="text-sm text-gray-600">
          <span class="font-medium">50 événements</span> au total
        </div>
      </div>

      <!-- Thematic Filters -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Par thématique</h3>
        <div class="flex flex-wrap gap-3">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="setFilter(filter.id)"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center space-x-2',
              activeFilter === filter.id
                ? 'bg-festisol-blue text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            ]"
          >
            <span>{{ filter.name }}</span>
            <span :class="[
              'text-xs px-2 py-0.5 rounded-full',
              activeFilter === filter.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
            ]">
              {{ filter.count }}
            </span>
          </button>
        </div>
      </div>

      <!-- Public Filters -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Par public</h3>
        <div class="flex flex-wrap gap-3">
          <button
            v-for="publicType in publics"
            :key="publicType.id"
            class="px-4 py-2 rounded-full font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-festisol-yellow hover:text-gray-900 border border-gray-200"
          >
            {{ publicType.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>