<script lang="ts" setup>
const { navigation } = useContent()
// console.log("navigation",navigation)
// const appConfig = useAppConfig()
</script>

<template>
  <!-- <div class="flex justify-between px-4 py-4 sm:px-8"> -->
    <!-- Navigation -->
    <div class="flex items-center justify-between gap-6 px-8 py-4 text-primary-700 
    dark:text-primary-400">
      <div>
        <NuxtLink to="/" class="flex gap-1 text-2xl">
          <Icon name="eos-icons:compass" /> <span class="font-Special tracking-tight leading-none">SAARLUS</span>
        </NuxtLink>
      </div>
      <nav class="flex gap-6 print:hidden">
        <NuxtLink to="/teejuht">Teejuht</NuxtLink>
        <NuxtLink to="/taust">Taust</NuxtLink>
        <!-- <NuxtLink to="/lood" class="text-white/0 absolute">.</NuxtLink> -->
        <!-- <NuxtLink to="/teod" class="text-white/0 absolute">.</NuxtLink> -->
        <!-- <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
        >
          {{ link.title }}
        </NuxtLink> -->
      </nav>
    </div>
  <!-- </div> -->
</template>