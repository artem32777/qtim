<script setup lang="ts">
import { type Article } from "~/types/Article"

const apiUrl = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts"
const currentPage = ref(1)
const itemsPerPage = 8
const totalItems = 87

const { data, error, status } = await useFetch<Article[]>(
  () => `${apiUrl}?page=${currentPage.value}&limit=${itemsPerPage}`,
)

const isPending = computed(() => status.value === "pending")

const handlePageChange = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <div class="mb-32">
    <h1 class="mb-8 text-3xl font-bold">Articles</h1>
    <section class="relative">
      <div
        v-if="error"
        class="text-red-500">
        Ошибка загрузки данных
      </div>
      <div
        v-if="!data"
        class="absolute inset-0 top-0 flex items-center justify-center text-3xl">
        Loading...
      </div>
      <div v-else>
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            v-for="article in data.filter((el: Article) => el.id)"
            :key="article.id"
            :to="`/${article.id}`">
            <ArticleCard
              :image="article.image"
              :preview="article.preview"
              :is-pending="isPending" />
          </NuxtLink>
        </div>
        <div
          v-if="isPending"
          class="absolute inset-0 top-0 flex items-center justify-center text-3xl">
          Loading...
        </div>
        <div class="mt-14">
          <ArticlePagination
            :disabled="isPending"
            @update:page="handlePageChange"
            :items-per-page="itemsPerPage"
            :page="currentPage"
            :total="totalItems" />
        </div>
      </div>
    </section>
  </div>
</template>
