<script setup>
    const { path } = useRoute();
    const { data } = await useAsyncData(`content-${path}`, () => {
        return queryContent().where({ _path: path }).only(['images']).findOne();
    });
    const isOpen = modalOpen();
    const zoomedImage = activeImage();
</script>

<template>
    <div class="m-auto bg-white dark:bg-secondary-900">
        <section class="flex items-stretch shadow-md">
            <template v-for="(img, i) in data.images" :key="`img${i}`">
                <ImageWrapper
                    :src="img.src" :path="img.path" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" 
                />
            </template>
        </section>
        <main class="py-20 max-w-4xl px-4 mx-auto sm:px-8 prose prose-gray dark:prose-invert">
            <slot>
                <h1 class="text-2xl">
                    Page not found
                </h1>
            </slot>
        </main>
    </div>
    <div class="p-10">
      <!-- <ListOfStories /> -->
    </div>

    <Teleport to="body">
        <div v-if="isOpen">
            <image-modal :image="zoomedImage" />
        </div>
    </Teleport>

</template>
  
<style>

    .prose h1 {
        @apply font-normal;
    }
    .prose h1 a {
        @apply text-secondary-800 dark:text-primary-200;
    }
  .prose h2 a, .prose h3 a {
    @apply no-underline;
  }
  .prose h2 a:hover, .prose h3 a:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
</style>