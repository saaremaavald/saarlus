<template>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <template v-for="(story, i) in data" :key="`story${i}`">
            <NuxtLink :to="story._path">
                <Card class="bg-white dark:bg-primary-800"
                    :class="path == story._path ? 'bg-yellow-200 dark:bg-teal-900' : ''"
                    :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                >
                    <p class="font-Special text-xl leading-tight text-saarlus-800 dark:text-primary-300">
                        {{ story.description }}
                    </p>
                </Card>
            </NuxtLink>
        </template>
    </div>
</template>

<script setup>
    const { path } = useRoute();
    const { data } = await useAsyncData('stories', () => queryContent('_lood').only(['description','_path']).find());
</script>