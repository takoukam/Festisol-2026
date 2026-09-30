<script setup lang="ts">
import { UserGroupIcon, MicrophoneIcon, StarIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="min-h-[70vh] bg-gradient-to-br from-festisol-blue via-festisol-purple to-festisol-red flex items-center justify-center relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-festisol-yellow/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-festisol-yellow/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-8">
      <!-- Badge -->
      <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
        <MicrophoneIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
        <span class="text-festisol-yellow font-medium text-sm">
          Des voix engagées pour un monde solidaire
        </span>
      </div>

      <!-- Main Title -->
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in" style="animation-delay: 0.2s">
        LES INTERVENANTS
        <span class="block bg-gradient-to-r from-festisol-yellow to-white bg-clip-text text-transparent">
          DU FESTISOL
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-white/90 font-medium mb-8 animate-fade-in max-w-3xl mx-auto" style="animation-delay: 0.4s">
        Rencontrez les experts, leaders et personnalités qui portent le message de solidarité et de transformation sociale
      </p>

      <!-- Stats -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-in" style="animation-delay: 0.6s">
        <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <UserGroupIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
          <span class="font-medium">50+ Intervenants</span>
        </div>
        <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <StarIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
          <span class="font-medium">6 Thématiques</span>
        </div>
        <div class="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <MicrophoneIcon class="w-5 h-5 mr-2 text-festisol-yellow" />
          <span class="font-medium">Experts reconnus</span>
        </div>
      </div>

      <!-- Speaker Icons -->
      <div class="flex justify-center space-x-8 text-6xl mb-8 animate-fade-in" style="animation-delay: 0.8s">
        <div class="animate-float" style="animation-delay: 0s">👨‍🏫</div>
        <div class="animate-float" style="animation-delay: 0.5s">👩‍⚕️</div>
        <div class="animate-float" style="animation-delay: 1s">👨‍💼</div>
        <div class="animate-float" style="animation-delay: 1.5s">👩‍🎓</div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>