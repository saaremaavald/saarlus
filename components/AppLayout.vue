<script setup>
  const { cover } = useAppConfig();
  const list = listOpen();
  const ex = exOpen();
  const image = modalOpen();

  const overflow = computed(() => {
    if(list.value == true || ex.value == true || image.value == true) {
      return true;
    } else {
      return false;
    }
  })
</script>

<template>
  <div class="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] lg:grid-cols-[8rem_1fr] print:grid-cols-[0_1fr] transition-all">
    <Html lang="et" :class="overflow ? 'overflow-hidden' : 'overflow-auto'" />
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
</style>