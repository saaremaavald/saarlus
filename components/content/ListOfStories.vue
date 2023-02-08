<script setup>
    const allTags = [];
    const tags = ref();
    const activeTags = ref([]);

    const tagsOpen = ref(true);

    const { path } = useRoute();

    const sortedTags = () => {
        return [...tags.value].sort( (a, b) => {
            return a.localeCompare(b);
        });
    };
    const toggleTag = (tag) => {
        if(activeTags.value.find(item => item === tag)){
            const newArr = activeTags.value.filter(item => item != tag);
            activeTags.value = newArr;
        } else {
            activeTags.value.push(tag);
        }
    };

    const { data } = await useAsyncData('stories', async () => {
        return queryContent('_lood').only(['description','_path','tags']).find();
    });

    for (const story of data.value) {
        story.tags.forEach(tag => {
            allTags.push(tag);
        });
    }
    tags.value = [...new Set(allTags)];
    tags.value = sortedTags();

</script>

<template>
    <section>
        <div class="flex flex-wrap gap-x-1 gap-y-2 border-solid border-t-2 border-b-2 my-6 overflow-hidden transition-all" :class="tagsOpen ? 'h-auto py-6' : 'h-0 py-0'">
            <template v-for="(tag, i) in tags" :key="`tag${i}`">
                <story-tag :label="tag" @click="toggleTag(tag)" />
            </template>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            <template v-for="(story, i) in data" :key="`story${i}`">
                <NuxtLink :to="story._path" 
                    v-show="activeTags.length == 0 || story.tags.some(item => activeTags.includes(item))">
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
    </section>
</template>
