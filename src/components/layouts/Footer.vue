<template>
  <footer class="bg-gray-900 text-gray-200 text-center py-4 text-sm">
    <p>
      {{ t('footer.text', { year: new Date().getFullYear() }) }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
