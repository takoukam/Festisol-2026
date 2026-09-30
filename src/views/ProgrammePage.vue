<script setup lang="ts">
import Header from '../components/Header.vue'
import ProgrammeHero from '../components/ProgrammeHero.vue'
import ProgrammeTimeline from '../components/ProgrammeTimeline.vue'
import ProgrammeFilters from '../components/ProgrammeFilters.vue'
import ProgrammeCTA from '../components/ProgrammeCTA.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <ProgrammeHero />
      <ProgrammeFilters />
      <ProgrammeTimeline />
      <ProgrammeCTA />
    </main>
    <Footer />
  </div>
</template>