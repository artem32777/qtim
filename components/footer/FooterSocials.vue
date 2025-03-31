<script setup lang="ts">
import FooterSocialItem from "~/components/footer/FooterSocialItem.vue"
</script>
<template>
  <section class="flex items-end justify-between gap-8">
    <FooterSocialItem href="#">Facebook</FooterSocialItem>
    <FooterSocialItem href="#">Instagram</FooterSocialItem>
    <FooterSocialItem href="#">Telegram</FooterSocialItem>
    <div class="relative flex h-[179px] w-[358px] items-end justify-center">
      <LetsWorkModal>
        <button class="peer z-10 text-3xl text-white transition-colors hover:text-black">
          Go
        </button>
      </LetsWorkModal>
      <div
        class="absolute inset-0 h-[358px] w-full translate-y-7 rounded-full bg-black transition-colors peer-hover:bg-white"></div>
    </div>

    <FooterSocialItem href="#">Behance</FooterSocialItem>
    <FooterSocialItem href="#">Linkedn</FooterSocialItem>
    <FooterSocialItem href="#">Privacy Policy</FooterSocialItem>
  </section>
</template>
