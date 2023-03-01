<script setup lang="ts">
const { prev, next } = useContent()
</script>
<template>
  <div class="p-4 bg-red-400">
    <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
  </div>
</template>