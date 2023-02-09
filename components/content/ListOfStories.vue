<script setup>
    const allTags = [];
    const tags = ref();
    const activeTags = ref([]);


    const tagPanelOpen = tagsOpen();
    const toggleTagPanel = () => {
        tagPanelOpen.value = !tagPanelOpen.value;
    }
    
    const toggleTag = (tag) => {
        if(activeTags.value.find(item => item === tag)){
            const newArr = activeTags.value.filter(item => item != tag);
            activeTags.value = newArr;
        } else {
            activeTags.value.push(tag);
        }
    };


    const { path } = useRoute();

    const sortedTags = () => {
        return [...tags.value].sort( (a, b) => {
            return a.localeCompare(b);
        });
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
        <h1 class="mb-4 font-Special text-6xl text-secondary-800 font-bold
            dark:text-primary-200">Lugude nimekiri</h1>
        
        <IconButton icon="icon-park-outline:tag-one" label="SILDID" @click="toggleTagPanel" />
        
        <div class="flex flex-wrap gap-x-2 gap-y-2 border-solid border-t border-b my-4 overflow-hidden transition-all" :class="tagPanelOpen ? 'h-auto py-6' : 'h-0 py-0'">
            <template v-for="(tag, i) in tags" :key="`tag${i}`">
                <story-tag :label="tag" @click="toggleTag(tag)" />
            </template>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            <template v-for="(story, i) in data" :key="`story${i}`">
                <NuxtLink :to="story._path" 
                    v-show="activeTags.length == 0 || story.tags.some(item => activeTags.includes(item))">
                    <Card class="bg-white ring-1 ring-secondary-300 shadow-md transition
                    dark:bg-secondary-800 dark:ring-secondary-700
                    hover:shadow-xl dark:hover:shadow-xl dark:hover:ring-secondary-600"
                        :class="path == story._path ? 'bg-yellow-100 dark:bg-primary-400' : ''"
                        :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                    >
                        <p class="font-Special text-xl leading-tight text-secondary-800 dark:text-secondary-300">
                            {{ story.description }}
                        </p>
                    </Card>
                </NuxtLink>
            </template>
        </div>
    </section>
</template>
