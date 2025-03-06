<template>
  <header class="sticky top-0 left-0 w-full bg-white shadow-md h-16 flex items-center justify-between px-4 z-50">
    <div class="flex items-center">
      <img src="/logo_text.png" alt="Logo" class="h-24 w-48 object-cover max-w-full">
    </div>
    <h1 class="text-xl font-bold">My Portfolio</h1>
    <div class="flex gap-2 items-center">
      <!-- Download CV Button -->
      <button @click="downloadCV" class="flex items-center gap-2 bg-blue-400 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-500 transition">
        Download CV
      </button>
      <!-- Email contact -->
      <a href="mailto:hangkhoa2611@gmail.com" class="flex items-center justify-center w-10 h-10 bg-white rounded-lg border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </header>
</template>
<script setup lang="ts">
const downloadCV = () => {
  // Path to the CV file in the public folder
  const cvPath = "/cv.pdf"; // Change this to your actual file path
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "KhoaCV.pdf"; // Name of the downloaded file
  link.click();
}
</script>
<style scoped>
</style>
