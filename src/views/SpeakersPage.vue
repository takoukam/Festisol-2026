<script setup lang="ts">
import Header from '../components/Header.vue'
import SpeakersHero from '../components/SpeakersHero.vue'
import SpeakersGallery from '../components/SpeakersGallery.vue'
import SpeakersTestimonials from '../components/SpeakersTestimonials.vue'
import SpeakersEngagement from '../components/SpeakersEngagement.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <SpeakersHero />
      <SpeakersGallery />
      <SpeakersTestimonials />
      <SpeakersEngagement />
    </main>
    <Footer />
  </div>
</template>