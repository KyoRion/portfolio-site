<template>
  <main>
    <Information />
    <About />
    <StatsSection />
    <PortfolioSection />
  </main>
</template>

<script setup lang="ts">
import StatsSection from './components/StatsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import Footer from '@/components/layouts/Footer.vue'
import Information from '@/views/components/Information.vue'
import About from '@/views/components/About.vue'
</script>
