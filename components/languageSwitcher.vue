<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const locales = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
]

const selected = ref(locales[0])

watch(selected, (newSelected) => {
  console.log(newSelected)
  locale.value = newSelected.code
})
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="locales"
    option-attribute="name"
  >
    <template #label>
      <UIcon :name="'i-circle-flags:' + selected.code" class="w-5px" />
      <span>{{ selected.name }}</span>
    </template>
    <template #option="{ option: lang }">
      <UIcon :name="'i-circle-flags:' + lang.code" class="w-5px" />
      <span>{{ lang.name }}</span>
    </template>
  </USelectMenu>
</template>
