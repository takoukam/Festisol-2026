<script setup lang="ts">
import Header from '../components/Header.vue'
import SchoolHero from '../components/SchoolHero.vue'
import CapsuleSection from '../components/CapsuleSection.vue'
import SchoolContestSection from '../components/SchoolContestSection.vue'
import EducationalPartnersSection from '../components/EducationalPartnersSection.vue'
import SchoolEngagementBlock from '../components/SchoolEngagementBlock.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <SchoolHero />
      <CapsuleSection />
      <SchoolContestSection />
      <EducationalPartnersSection />
      <SchoolEngagementBlock />
    </main>
    <Footer />
  </div>
</template>