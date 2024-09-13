<script setup lang="ts">

</script>

<template>
  <div class="h-screen w-full">
    <div>
      <div
        class="flex items-center justify-between border-b border-primary-300 w-full px-6"
      >
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
