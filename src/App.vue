<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
