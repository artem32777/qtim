<script setup lang="ts">
import { cn } from "~/lib/utils"

const { image } = defineProps<{
  image?: string
  preview?: string
  isPending: boolean
}>()

const isLoading = ref(true)
</script>

<template>
  <Card
    :class="
      cn('overflow-hidden transition-transform hover:scale-105', {
        'rounded-lg blur': isPending || isLoading,
      })
    ">
    <NuxtImg
      :src="image"
      placeholder="placeholder.svg"
      class="mb-6 h-[280px] w-[280px] object-cover"
      alt="Article image"
      @error="isLoading = false"
      @load="isLoading = false">
    </NuxtImg>
    <h3 class="text-md relative line-clamp-2">{{ preview }}</h3>
  </Card>
</template>
