<script setup lang="ts">
import Footer from "~/components/footer/Footer.vue"
import Header from "~/components/header/Header.vue"
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="mx-auto w-full min-h-[600px] max-w-[1217px] flex-grow px-4 pt-24">
      <slot />
    </main>
    <Footer />
  </div>
</template>
