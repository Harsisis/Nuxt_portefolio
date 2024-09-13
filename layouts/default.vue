<script setup lang="ts">
const showNav = ref(false)
let screenWidth = ref(0).value

screenWidth = window.innerWidth

window.addEventListener('resize', () => {
  screenWidth = window.innerWidth
})
</script>

<template>
  <div class="text-black bg-slate-50 h-screen w-full">
    <div
      v-if="screenWidth < 768"
      class="flex items-center justify-between border-b border-gray-300 w-full px-4"
    >
      <div class="w-1/3 flex items-center">
        <fa-icon
          :icon="['fas', 'bars']"
          class="text-2xl"
          @click="showNav = !showNav"
        />
      </div>
      <div class="w-1/3 flex justify-center">
        <NuxtLink to="/">
          <img src="~/assets/logo.png" alt="logo" class="h-10 m-5" />
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <div
        class="flex items-center justify-between border-b border-gray-300 w-full px-6"
      >
        <div class="w-1/2 flex items-center space-x-6">
          <NuxtLink to="/">
            <img src="~/assets/logo.png" alt="logo" class="h-10 m-5" />
          </NuxtLink>
          <NuxtLink to="/">
            <span>{{ $t('general.home') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-if="!showNav" class="py-6">
      <slot />
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center space-y-6 pt-6 divide-y divide-gray-300 w-full"
    >
      <NuxtLink
        to="/"
        class="flex items-center justify-center space-x-2"
        @click="showNav = false"
      >
        <fa-icon :icon="['fas', 'home']" />
        <span>{{ $t('general.home') }}</span>
      </NuxtLink>
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
