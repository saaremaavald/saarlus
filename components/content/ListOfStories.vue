<template>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-center">
        <template v-for="(story, i) in data" :key="`story${i}`">
            <NuxtLink :to="story._path">
                <Card 
                    :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                >
                    <p class="font-Special text-xl leading-tight text-saarlus-800">
                        {{ story.description }}
                    </p>
                </Card>
            </NuxtLink>
        </template>
    </div>
</template>

<script setup>
    const data = storiesData();
//     const { data } = await useAsyncData(`content-${path}`, () => {
//   return queryContent().where({ _path: path }).only(['title']).findOne()
// })
    // const { data } = await useAsyncData('stories', () => queryContent('lood').only(['description','_path']).find())
</script>