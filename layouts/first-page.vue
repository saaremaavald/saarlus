<template>
    <div class="py-20 m-auto bg-white dark:bg-secondary-900">
        <main class="px-4 mx-auto sm:px-8 
          prose prose-gray dark:prose-invert">
            <slot>
                <h1 class="text-4xl">
                    Lehte ei leitud
                </h1>
            </slot>
        </main>
    </div>
    <!-- <div class="p-10">
      <ListOfStories />
    </div> -->
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