<script setup lang="ts">
import { type Article } from "~/types/Article"

const route = useRoute()
const articleId = route.params.id

const { data, error, status } = await useFetch<Article>(
  () => `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${articleId}`,
)
</script>

<template>
  <section class="mb-20 w-full">
    <div
      v-if="status === 'pending'"
      class="text-center text-2xl">
      Loading...
    </div>
    <div
      v-else-if="error"
      class="text-red-500">
      Ошибка загрузки статьи
    </div>
    <div v-if="data">
      <h1 class="text-5xl">{{ data.title }}</h1>
      <NuxtImg
        :custom="true"
        :src="data.image"
        v-slot="{ src, isLoaded, imgAttrs }">
        <img
          v-if="isLoaded"
          :src="src"
          class="mt-32 h-[700px] w-full"
          v-bind="imgAttrs" />
      </NuxtImg>
      <div class="mb-8 mt-20">About</div>
      <p class="max-w-[700px] text-lg">{{ data.description }}</p>
    </div>
  </section>
</template>
