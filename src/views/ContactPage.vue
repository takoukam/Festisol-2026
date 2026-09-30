<script setup lang="ts">
import Header from '../components/Header.vue'
import ContactHero from '../components/ContactHero.vue'
import InscriptionForm from '../components/InscriptionForm.vue'
import ContactDetails from '../components/ContactDetails.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <main>
      <ContactHero />
      <InscriptionForm />
      <ContactDetails />
    </main>
    <Footer />
  </div>
</template>