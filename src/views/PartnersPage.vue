<script setup lang="ts">
import Header from '../components/Header.vue'
import PartnersHero from '../components/PartnersHero.vue'
import PartnersGrid from '../components/PartnersGrid.vue'
import PartnersTestimonials from '../components/PartnersTestimonials.vue'
import PartnersCTA from '../components/PartnersCTA.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <PartnersHero />
      <PartnersGrid />
      <PartnersTestimonials />
      <PartnersCTA />
    </main>
    <Footer />
  </div>
</template>