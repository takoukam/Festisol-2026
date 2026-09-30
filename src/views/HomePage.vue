<script setup lang="ts">
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import EngagementSection from '../components/EngagementSection.vue'
import ActivitiesSection from '../components/ActivitiesSection.vue'
import CapsuleSection from '../components/CapsuleSection.vue'
import PartnersSection from '../components/PartnersSection.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <HeroSection />
      <EngagementSection />
      <ActivitiesSection />
      <CapsuleSection />
      <PartnersSection />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}
</style>