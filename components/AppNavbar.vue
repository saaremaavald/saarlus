<script lang="ts" setup>
const { navigation } = useContent()
// console.log("navigation",navigation)
// const appConfig = useAppConfig()
</script>

<template>
  <div class="flex justify-between w-full px-4 py-4 mx-auto sm:px-8
    ">
    <!-- Navigation -->
    <div class="flex items-center justify-between gap-6 w-4/5 text-primary-700 dark:text-primary-400">
      <div>
        <NuxtLink to="/" class="flex gap-1 text-2xl ">
          <Icon name="eos-icons:compass" /> <span class="font-Special tracking-tight leading-none">SAARLUS</span>
        </NuxtLink>
      </div>
      <div class="flex gap-6">
        <NuxtLink to="/teejuht">Teejuht</NuxtLink>
        <NuxtLink to="/projektist">Projektist</NuxtLink>
        <NuxtLink to="/lood" class="text-white/0">.</NuxtLink>
        <NuxtLink to="/teod" class="text-white/0">.</NuxtLink>
        <!-- <NuxtLink
          v-for="link of navigation"
          :key="link._path"
          :to="link._path"
          active-class="font-bold"
        >
          {{ link.title }}
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>