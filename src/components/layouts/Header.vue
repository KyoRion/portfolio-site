<template>
  <header
    class="sticky top-0 left-0 w-full bg-white shadow-md h-16 flex items-center justify-between px-4 z-50"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img
        src="/logo_text.png"
        alt="Logo"
        class="h-24 w-48 object-cover max-w-full"
      />
    </div>

    <!-- Right Section -->
    <div class="flex items-center gap-3">
      <!-- Language Switcher -->
      <div class="flex items-center">
        <select
          v-model="locale"
          class="border border-gray-300 text-sm rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="en">English 🇬🇧</option>
          <option value="vi">Tiếng Việt 🇻🇳</option>
        </select>
      </div>

      <!-- Download CV Button -->
      <button
        @click="downloadCV"
        class="flex items-center gap-2 bg-blue-400 text-white font-medium py-3 px-5 rounded-lg hover:bg-blue-500 transition"
      >
        {{ btn.download }}
      </button>

      <!-- Email contact -->
      <a
        href="mailto:hangkhoa2611@gmail.com"
        class="flex items-center justify-center w-10 h-10 bg-white rounded-lg border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition"
      >
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'

const { locale } = useI18n()

const btn = computed(() => ({
  download: locale.value === 'vi' ? 'Tải CV' : 'Download CV',
}))

// Optional: save language preference
watch(locale, (newLocale) => {
  localStorage.setItem('lang', newLocale)
})

// Load saved language on mount
const savedLang = localStorage.getItem('lang')
if (savedLang) locale.value = savedLang

const downloadCV = () => {
  const cvPath = '/cv.pdf'
  const link = document.createElement('a')
  link.href = cvPath
  link.download = 'KhoaCV.pdf'
  link.click()
}
</script>

<style scoped>
/* optional subtle fade on hover for buttons */
button,
a {
  transition: all 0.2s ease-in-out;
}
</style>
