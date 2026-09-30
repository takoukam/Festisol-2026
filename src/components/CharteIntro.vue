<script setup lang="ts">
import { LightBulbIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-festisol-yellow/10 border border-festisol-yellow/20 mb-8">
          <LightBulbIcon class="w-6 h-6 mr-2 text-festisol-yellow" />
          <span class="text-festisol-blue font-semibold">Pourquoi une charte ?</span>
        </div>
        
        <div class="bg-festisol-cream rounded-3xl p-8 md:p-12">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            La Charte du FestiSol définit les valeurs partagées, les engagements attendus, et le cadre commun d'action pour tous les acteurs impliqués. Elle garantit que chaque activité menée dans le cadre du festival respecte des principes éthiques, solidaires et inclusifs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>