<script setup lang="ts">
import { NuxtLink } from "#components"

type Item = {
  label: string
  href: string
}

const items: Item[] = [
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "About",
    href: "/about",
  },
]
</script>

<template>
  <nav class="flex grow items-center justify-end gap-14">
    <NuxtLink
      v-for="item in items"
      :key="item.label"
      :to="item.href"
      class="text-gray-600 hover:underline underline-offset-4 ">
      {{item.label}}
    </NuxtLink>
  </nav>
</template>
