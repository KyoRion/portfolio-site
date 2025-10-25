<template>
  <section class="bg-white py-14">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-2xl font-bold text-center mb-3">{{ sectionTitle }}</h2>
      <p class="text-gray-600 text-center mb-10">{{ sectionDesc }}</p>

      <!-- Filters + Search -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div class="flex flex-wrap items-center gap-3 justify-center md:justify-start">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="px-4 py-2 rounded-md text-sm font-medium transition border"
            :class="activeCategory === cat
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'"
          >
            {{ cat }}
          </button>
        </div>

        <div class="relative mx-auto md:mx-0">
          <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="placeholders.search"
            class="border border-gray-300 rounded-md py-2 px-4 pl-9 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- Projects Grid -->
      <div
        v-if="paginatedProjects.length"
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300"
      >
        <div
          v-for="project in paginatedProjects"
          :key="project.id"
          class="bg-gray-50 border rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
          @click="openProject(project)"
        >
          <img
            :src="project.image"
            :alt="project.translations[locale].title"
            class="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <h3 class="text-lg font-semibold text-gray-800">
            {{ project.translations[locale].title }}
          </h3>
          <p class="text-gray-600 text-sm mt-2">
            {{ project.translations[locale].desc }}
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-md"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center text-gray-500 py-12">
        {{ placeholders.noResults }}
      </div>

      <!-- Pagination -->
      <div class="flex justify-center items-center gap-2 mt-10">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-3 py-1.5 rounded-md border text-sm"
          :class="page === 1
            ? 'text-gray-400 border-gray-200 cursor-not-allowed'
            : 'text-blue-600 border-blue-300 hover:bg-blue-50'"
        >
          {{ placeholders.prev }}
        </button>

        <span class="text-sm text-gray-600">{{ page }} / {{ totalPages }}</span>

        <button
          @click="nextPage"
          :disabled="page === totalPages"
          class="px-3 py-1.5 rounded-md border text-sm"
          :class="page === totalPages
            ? 'text-gray-400 border-gray-200 cursor-not-allowed'
            : 'text-blue-600 border-blue-300 hover:bg-blue-50'"
        >
          {{ placeholders.next }}
        </button>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8"
        @click.self="closeModal"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full relative animate-fadeIn flex flex-col max-h-[90vh]"
        >
          <!-- Header -->
          <div class="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
              {{ selectedProject.translations[locale].title }}
            </h2>
            <button
              class="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center transition"
              @click="closeModal"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          <!-- Scrollable content -->
          <div class="overflow-y-auto px-6 sm:px-8 py-6 flex-1">
            <p class="text-gray-700 leading-relaxed mb-6 text-[15px]">
              {{ selectedProject.translations[locale].desc }}
            </p>

            <!-- Scope -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <i class="fas fa-layer-group text-blue-500"></i>
                {{ locale === 'vi' ? 'Phạm vi dự án' : 'Project Scope' }}
              </h3>
              <p class="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                {{ formatMultiline(selectedProject.translations[locale].scope) }}
              </p>
            </div>

            <!-- Responsibilities -->
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <i class="fas fa-user-cog text-blue-500"></i>
                {{ locale === 'vi' ? 'Trách nhiệm cá nhân' : 'My Responsibilities' }}
              </h3>
              <p class="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                {{ formatMultiline(selectedProject.translations[locale].responsibility) }}
              </p>
            </div>

            <!-- Gallery -->
            <div v-if="selectedProject.screenshots?.length" class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-envelope-open-text text-blue-500"></i>
                {{ locale === 'vi' ? 'Hình ảnh dự án' : 'Project Gallery' }}
              </h3>
              <div class="flex gap-4 overflow-x-auto pb-3">
                <img
                  v-for="(img, idx) in selectedProject.screenshots"
                  :key="idx"
                  :src="img"
                  class="h-64 rounded-lg shadow-sm hover:shadow-md transition cursor-zoom-in"
                  @click="openFullscreen(img)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Fullscreen Image -->
        <transition name="fade">
          <div
            v-if="fullscreenImage"
            class="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
            @click.self="closeFullscreen"
          >
            <img
              :src="fullscreenImage"
              alt="Fullscreen preview"
              class="max-w-5xl w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              @click="closeFullscreen"
              class="absolute top-5 right-5 bg-white/80 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

interface ProjectTranslation {
  title: string
  desc: string
  scope?: string
  responsibility?: string
}

interface Project {
  id: number
  category: string
  image: string
  tech: string[]
  link?: string
  screenshots?: string[]
  translations: Record<string, ProjectTranslation>
}

const { locale } = useI18n()
const projects = ref<Project[]>([])
const categories = ['All', 'SaaS', 'Email-HTML']
const activeCategory = ref('All')
const searchQuery = ref('')
const page = ref(1)
const perPage = 6
const selectedProject = ref<Project | null>(null)
const fullscreenImage = ref<string | null>(null)

function openFullscreen(img: string) {
  fullscreenImage.value = img
}
function closeFullscreen() {
  fullscreenImage.value = null
}

const placeholders = computed(() => ({
  search: locale.value === 'vi' ? 'Tìm kiếm dự án...' : 'Search projects...',
  prev: locale.value === 'vi' ? 'Trước' : 'Previous',
  next: locale.value === 'vi' ? 'Sau' : 'Next',
  noResults: locale.value === 'vi' ? 'Không tìm thấy dự án nào.' : 'No projects found.'
}))

const sectionTitle = computed(() =>
  locale.value === 'vi' ? 'Dự án tiêu biểu' : 'Featured Projects'
)
const sectionDesc = computed(() =>
  locale.value === 'vi'
    ? 'Xem các dự án nổi bật của tôi trong lĩnh vực phát triển web full-stack.'
    : 'Browse my key full-stack projects and web applications.'
)

onMounted(async () => {
  try {
    const res = await fetch('/data/projects.json')
    if (!res.ok) throw new Error('Failed to load project data')
    projects.value = (await res.json()) as Project[]
  } catch (err) {
    console.error('Error loading projects:', err)
  }
})

const normalize = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]/g, '')

const filteredProjects = computed(() =>
  projects.value.filter((p) => {
    const matchCategory =
      activeCategory.value === 'All' ||
      normalize(p.category) === normalize(activeCategory.value)
    const matchSearch = p.translations[locale.value].title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
    return matchCategory && matchSearch
  })
)

const totalPages = computed(() =>
  Math.ceil(filteredProjects.value.length / perPage)
)
const paginatedProjects = computed(() => {
  const start = (page.value - 1) * perPage
  return filteredProjects.value.slice(start, start + perPage)
})

function nextPage() {
  if (page.value < totalPages.value) page.value++
}
function prevPage() {
  if (page.value > 1) page.value--
}

watch([activeCategory, searchQuery], () => (page.value = 1))

function formatMultiline(text?: string) {
  return text
    ? text.split(';').map(line => line.trim()).filter(Boolean).join('\n')
    : ''
}

function openProject(project: Project) {
  selectedProject.value = project
}
function closeModal() {
  selectedProject.value = null
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
