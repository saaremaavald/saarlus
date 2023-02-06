<script lang="ts" setup>
const { navigation } = useContent()
// const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between w-full px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="w-full flex items-center justify-between gap-6 text-saarlus-700 dark:text-primary-200">
      <div>
        <NuxtLink to="/">
          <span class="font-Special font-bold text-4xl tracking-tight leading-none">Saarlus</span>
        </NuxtLink>
      </div>
      <div class="flex gap-6">
        <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
        >
          {{ link.title }}
        </NuxtLink>
      </div>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>