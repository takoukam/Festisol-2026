<script setup lang="ts">
import Header from '../components/Header.vue'
import AboutHero from '../components/AboutHero.vue'
import FestivalMission from '../components/FestivalMission.vue'
import ForumAssociationsSection from '../components/ForumAssociationsSection.vue'
import ThemesBlock from '../components/ThemesBlock.vue'
import CallToActionsBlock from '../components/CallToActionsBlock.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <AboutHero />
      <FestivalMission />
      <ForumAssociationsSection />
      <ThemesBlock />
      <CallToActionsBlock />
    </main>
    <Footer />
  </div>
</template>