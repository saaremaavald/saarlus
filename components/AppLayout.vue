<script setup>
  const { cover } = useAppConfig();
  // const list = listOpen();
  // const ex = exOpen();
  const image = modalOpen();

  const overflow = computed(() => {
    if(image.value == true) {
      return true;
    } else {
      return false;
    }
  })
</script>

<template>
  <div class="grid grid-cols-[3rem_1fr] 
  sm:grid-cols-[4rem_1fr] 
  md:grid-cols-[6rem_1fr] md:bg-[length:1200px_720px]
  lg:grid-cols-[8rem_1fr] lg:bg-[length:2400px_1440px]
  print:grid-cols-[0_1fr] 
  transition-all
  bg-white bg-[url('/images/saarlus-bg.webp')] bg-repeat bg-[length:960px_576px]
  dark:bg-secondary-900 dark:bg-[url('/images/saarlus-bg--dark.webp')]"
  :style="`background-position:${Math.random()*100}% ${Math.random()*100}%`"
  >
    <Html lang="et" :class="overflow ? 'overflow-hidden' : 'overflow-auto'" />
    <Meta property="og:image" :content="cover" />
    <!-- <Meta name="twitter:card" content="summary_large_image" /> -->
    
    <div class="relative">
      <side-bar class="print:hidden"></side-bar>
    </div>
    <section>
      <AppLoadingBar />
      <slot />
    </section>
    <AppNavbar class="fixed top-0 left-0 right-0 z-0 bg-white shadow
    dark:bg-secondary-900
    print:absolute" />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-secondary-900;
}
</style>