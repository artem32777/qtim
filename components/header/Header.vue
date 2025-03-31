<script setup>
import HeaderLanguage from "~/components/header/HeaderLanguage.vue"
import HeaderMenu from "~/components/header/HeaderMenu.vue"
import LetsWorkModal from "~/components/LetsWorkModal.vue"
</script>

<template>
  <header class="flex items-center justify-between gap-24 bg-white px-10 py-9">
    <NuxtLink
      to="/"
      class="text-xl font-bold"
      title="logo">
      QTIM
    </NuxtLink>
    <HeaderMenu />
    <div class="flex items-center gap-4">
      <HeaderLanguage />
      <LetsWorkModal>
        <Button
          title="Let's work"
          class="rounded-3xl">
          Let's work
        </Button>
      </LetsWorkModal>
    </div>
  </header>
</template>
