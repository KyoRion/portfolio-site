<template>
  <section class="bg-gray-50 py-10">
    <div class="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
      <div>
        <h3 class="text-3xl font-bold text-gray-900">6+</h3>
        <p class="text-gray-600 mt-1">{{ t('stats.experience') }}</p>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-gray-900">10+</h3>
        <p class="text-gray-600 mt-1">{{ t('stats.clients') }}</p>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-gray-900">10+</h3>
        <p class="text-gray-600 mt-1">{{ t('stats.projects') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
