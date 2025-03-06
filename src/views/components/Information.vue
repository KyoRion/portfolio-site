<script setup lang="ts">
const socialLinks = [
  { icon: "linkedin", url: "https://www.linkedin.com/in/hangkhoa2611/" },
  { icon: "facebook", url: "https://www.facebook.com/khoahang2611" },
  { icon: "github", url: "https://github.com/KyoRion" },
  { icon: "whatsapp", url: "https://wa.me/84971952611" },
];
</script>

<template>
  <div class="flex gap-10 p-4 rounded-lg justify-center max-w-full mx-auto">
    <!-- Profile Image -->
    <div class="relative w-40 h-40">
      <img src="/avatar.jpg" alt="Avatar Profile" class="w-full h-full object-cover rounded-full border-4 border-blue-400 p-1" />
    </div>

    <!-- Information -->
    <div>
      <h1 class="text-4xl font-bold text-gray-800 pb-2">
        Hang Dang Khoa <span class="font-italic">(Kyorion)</span>
      </h1>
      <p class="text-gray-800 text-[1.25rem] pb-2">Full-stack Web/App Developer</p>
      <p class="pb-2">Ho Chi Minh, VietNam</p>

      <!-- Social Icons -->
      <div class="flex gap-2 mt-2">
        <a
          v-for="link in socialLinks"
          :key="link.icon"
          :href="link.url"
          target="_blank"
          align="center"
          class="p-2 w-full bg-gray-200 hover:bg-blue-400 hover:text-white transition"
        >
          <i :class="`fab fa-${link.icon}`"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure FontAwesome icons are loaded */
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
</style>
