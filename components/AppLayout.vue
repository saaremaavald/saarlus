<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div class="grid grid-cols-[6rem_1fr]">
    <Html lang="et" />
    <Meta property="og:image" :content="cover" />
    <!-- <Meta name="twitter:card" content="summary_large_image" /> -->
    
    <side-bar></side-bar>
    <section class="w-full">
      <AppLoadingBar />
      <slot />
      <AppNavbar class="fixed w-full top-0 z-0 bg-white shadow
        dark:bg-secondary-900" />
    </section>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-secondary-900;
}
</style>