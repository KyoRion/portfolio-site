<template>
  <div class="max-w-4xl mx-auto flex justify-center gap-50 text-center">
    <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
      <p class="text-3xl font-bold text-gray-900">{{ stat.value }}+</p>
      <p class="text-gray-700">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: 5, label: "Year of Experience" },
  { value: 6, label: "Satisfied Clients" },
  { value: 6, label: "Completed Projects" },
];
</script>
