<script setup lang="ts">
type ILanguage = {
  label: string
  image: string
}

const languages: ILanguage[] = [
  { label: "English", image: "uk.svg" },
  { label: "France", image: "france.svg" },
]
const selectedLanguage = ref(languages[0])

const changeLanguage = (lang: ILanguage) => (selectedLanguage.value = lang)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        size="icon"
        class="rounded-3xl">
        <img
          :src="selectedLanguage.image"
          class="h-6 w-6 rounded-full border"
          :alt="selectedLanguage.label" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        v-for="lang in languages"
        :key="lang.label"
        @click="changeLanguage(lang)">
        <img
          :src="lang.image"
          class="h-6 w-6 rounded-full border"
          alt="language" />
        {{ lang.label }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
