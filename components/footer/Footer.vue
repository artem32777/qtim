<script setup lang="ts">
import IconTelegram from "~/components/ui/icons/IconTelegram.vue"
import FooterSocials from "~/components/footer/FooterSocials.vue"
</script>

<template>
  <footer class="bg-violet overflow-hidden px-28 pb-7 pt-32">
    <div class="flex gap-40">
      <section class="grow">
        <p class="mb-14">Is there a project?</p>
        <h2 class="w-[450px] text-[100px] underline underline-offset-8">
          Let’s work together
        </h2>
      </section>
      <section class="mr-44 grid max-w-52 gap-9">
        <div>
          <p class="mb-3">For all questions</p>
          <a
            href="tel:79202780068"
            class="hover:underline">
            +7 (920) 278—00—68
          </a>
          <a
            href="mailto:qtim@agency.com"
            class="hover:underline">
            qtim@agency.com
          </a>
        </div>
        <div>
          <p class="mb-3">Office in Russia</p>
          <p class="mb-2">139 Ruben Station Lake Drew, NM 52678</p>
          <a
            href=""
            class="inline-block">
            <IconTelegram class="hover:invert" />
          </a>
        </div>
        <div>
          <p class="mb-3">Office in Dubai</p>
          <a
            href="tel:79202780068"
            class="hover:underline">
            +7 (920) 278—00—68 139
          </a>
          <p class="mb-2">Ruben Station Lake Drew NM 52678</p>
          <a
            href=""
            class="inline-block">
            <IconTelegram class="hover:invert" />
          </a>
        </div>
      </section>
    </div>
    <FooterSocials />
  </footer>
</template>
