<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div class="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] lg:grid-cols-[8rem_1fr] print:grid-cols-[0_1fr] transition-all">
    <Html lang="et" />
    <Meta property="og:image" :content="cover" />
    <!-- <Meta name="twitter:card" content="summary_large_image" /> -->
    
    <side-bar class="print:hidden"></side-bar>
    <section class="w-full">
      <AppLoadingBar />
      <slot />
      <AppNavbar class="fixed w-full top-0 z-0 bg-white shadow
        dark:bg-secondary-900
        print:hidden" />
    </section>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-secondary-900;
}
/*.prose a {
  word-break: break-all;
}*/
</style>