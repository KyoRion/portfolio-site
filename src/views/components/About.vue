<template>
  <section
    class="bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-8 p-8 transition hover:shadow-lg"
  >
    <article class="prose prose-lg prose-gray max-w-none">
      <h2 class="text-center">{{ t('about.title') }}</h2>

      <p>{{ t('about.intro') }}</p>

      <p>{{ t('about.skills') }}</p>

      <p>{{ t('about.goal') }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
/* Optional custom enhancements */
.prose :where(p):not(:first-child) {
  margin-top: 1rem; /* add gentle spacing between paragraphs */
}
</style>
