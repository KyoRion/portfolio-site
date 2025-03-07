<script setup lang="ts">
import Information from "@/views/components/Information.vue";
import About from "@/views/components/About.vue";
import Statistic from "@/views/components/Statistic.vue";
import { Analytics } from '@vercel/analytics/vue';

const socialLinks = [
  { icon: "linkedin", url: "https://www.linkedin.com/in/hangkhoa2611/" },
  { icon: "facebook", url: "https://www.facebook.com/khoahang2611" },
  { icon: "github", url: "https://github.com/KyoRion" },
  { icon: "whatsapp", url: "https://wa.me/84971952611" },
];
</script>

<template>
  <!-- About -->
  <div class="flex flex-col gap-10 p-6 rounded-lg items-center max-w-full mx-auto">
    <Information></Information>
    <About></About>
    <Statistic></Statistic>
    <Analytics></Analytics>
  </div>
</template>

<style scoped>
/* Ensure FontAwesome icons are loaded */
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
</style>
