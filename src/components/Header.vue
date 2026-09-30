<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Programme', href: '/programme' },
  { name: 'Activités scolaires', href: '/activites-scolaires' },
  { name: 'Charte', href: '/charte' },
  { name: 'Contact', href: '/contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 md:py-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center" @click="closeMenu">
          <div class="flex items-center space-x-2 md:space-x-3">
            <div
              class="w-20 h-21 md:w-32 md:h-32s flex items-center justify-center"
            >
              <img
                src="/Logo_FestisolFichier.png"
                alt="FESTISOL Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1
                :class="[
                  'text-base md:text-lg font-bold transition-colors duration-300',
                  isScrolled ? 'text-festisol-blue' : 'text-white',
                ]"
              ></h1>
              <p
                :class="[
                  'text-xs transition-colors duration-300',
                  isScrolled ? 'text-gray-600' : 'text-white/80',
                ]"
              ></p>
            </div>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-6 xl:space-x-8">
          <template v-for="item in navItems" :key="item.name">
            <RouterLink
              v-if="!item.href.includes('#')"
              :to="item.href"
              :class="[
                'font-medium transition-colors duration-300 text-sm hover:text-festisol-yellow',
                isScrolled ? 'text-gray-700' : 'text-white/90',
              ]"
            >
              {{ item.name }}
            </RouterLink>
            <a
              v-else
              :href="item.href"
              :class="[
                'font-medium transition-colors duration-300 text-sm hover:text-festisol-yellow',
                isScrolled ? 'text-gray-700' : 'text-white/90',
              ]"
            >
              {{ item.name }}
            </a>
          </template>
        </nav>

        <!-- Mobile menu button -->
        <button
          @click="toggleMenu"
          :class="[
            'lg:hidden p-2 rounded-md transition-colors duration-300',
            isScrolled
              ? 'text-gray-700 hover:text-festisol-blue hover:bg-gray-100'
              : 'text-white/90 hover:text-white hover:bg-white/10',
          ]"
        >
          <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      :class="[
        'lg:hidden backdrop-blur-md transition-colors duration-300 border-t',
        isScrolled
          ? 'bg-white/95 border-gray-200'
          : 'bg-white/10 border-white/20',
      ]"
    >
      <nav class="px-4 py-4 space-y-2">
        <template v-for="item in navItems" :key="item.name">
          <RouterLink
            v-if="!item.href.includes('#')"
            :to="item.href"
            @click="closeMenu"
            :class="[
              'block py-3 px-2 font-medium transition-colors duration-300 rounded-lg',
              isScrolled
                ? 'text-gray-700 hover:text-festisol-blue hover:bg-gray-50'
                : 'text-white/90 hover:text-white hover:bg-white/10',
            ]"
          >
            {{ item.name }}
          </RouterLink>
          <a
            v-else
            :href="item.href"
            @click="closeMenu"
            :class="[
              'block py-3 px-2 font-medium transition-colors duration-300 rounded-lg',
              isScrolled
                ? 'text-gray-700 hover:text-festisol-blue hover:bg-gray-50'
                : 'text-white/90 hover:text-white hover:bg-white/10',
            ]"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>
    </div>
  </header>
</template>
