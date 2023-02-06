<script setup>
    // const dummy = ref('cover.jpg');
    // const stories = storiesData();
    // const images = ref(stories.value[1].images);
    // console.log("Images", images.value);

    const { path } = useRoute();
    const { data } = await useAsyncData(`content-${path}`, () => {
        return queryContent().where({ _path: path }).only(['images']).findOne();
    });
</script>

<template>
    <div class="m-auto bg-white sm:shadow dark:bg-primary-800 sm:rounded">
        <section class="flex items-stretch shadow-md">
            <template v-for="(img, i) in data.images" :key="`img${i}`">
                <ImageWrapper
                    :src="`/images/stories/${img.src}`" :zoom="img.zoom" :bgPos="img.bgPos" :bgSize="img.bgSize" :height="img.height" 
                />
            </template>
        </section>
        <main class="py-20 max-w-4xl px-4 mx-auto prose sm:px-8 prose-gray dark:prose-invert">
            <slot>
                <h1 class="text-2xl">
                    Page not found
                </h1>
            </slot>
        </main>
    </div>
    <div class="p-10">
      <ListOfStories />
    </div>
</template>
  
  <style>
  /* Customize headers to remove default underline */
  .prose h2 a, .prose h3 a {
    @apply no-underline;
  }
  .prose h2 a:hover, .prose h3 a:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
  </style>