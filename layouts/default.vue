<script setup lang="ts">
import type { _padding } from '#tailwind-config/theme';

</script>

<template>
  <div class="h-screen w-full">
    <div>
      <div class="flex items-center justify-between border-b border-primary-300 w-full px-6 relative">
        <!--  -->
        <div class="w-1/2 flex items-center space-x-6">
          <NuxtLink to="/">
            <img src="~/assets/logo.png" alt="logo" class="h-10 m-5" />
          </NuxtLink>
          <NuxtLink to="/">
            <span class="text-primary-500 dark:text-primary-400">{{ $t('general.home') }}</span>
          </NuxtLink>
        </div>
        <!--  -->
        <div class="w-1/2 flex items-center space-x-6 justify-end">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <!--  -->
      </div>
      <!--  -->
      <div>
        <slot/>
      </div>
      <!--  -->
      <div class="fixed bottom-2 w-full flex items-center justify-center space-x-6">
        <!--  -->
        <div class="bg-gray-900/20 p-1 rounded-lg flex items-center justify-center space-x-1">
          <UButton size="lg" :ui="{ padding: 'p-5' }" icon="i-material-symbols:home" to="/" color="black"/>
          <!--  -->
          <div class="bg-gray-900/60 p-1 rounded-lg flex items-center justify-center space-x-1">
            <UButton size="md" :label="$t('general.contact')" to="/contact" color="gray"/>
            <UButton size="md" :label="$t('general.github')" icon="i-bxl:github"
            to="https://github.com/Harsisis" target="_blank" color="gray"/>
            <UButton size="md" :label="$t('general.linkedin')" icon="i-bxl:linkedin"
            to="https://www.linkedin.com/in/gauthier-cadet-65a426202" target="_blank" color="gray"/>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.router-link-active {
  @apply font-semibold text-neutral-900 !important;
}
.router-link-active:hover {
  @apply text-neutral-600 !important;
}
</style>
