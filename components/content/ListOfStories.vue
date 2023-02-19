<script setup>
    const allTags = [];
    const tags = ref();
    const activeTags = ref([]);

    const showAuthors = authorsOpen();
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
        return queryContent('_lood').only(['description','_path','tags','author']).find();
    });

    for (const story of data.value) {
        story.tags.forEach(tag => {
            allTags.push(tag);
        });
    }
    tags.value = [...new Set(allTags)];
    tags.value = sortedTags();


    const showStories = listOpen();

    const closeList = () => {
        showStories.value = false;
    }

</script>

<template>
    <section class="min-h-screen bg-primary-100 bg-[url('/images/bg-map.svg')] bg-[length:640px_640px] p-10 dark:bg-secondary-900">

        <h1 class="mb-4 font-Special text-5xl text-secondary-800 
            dark:text-primary-200">Lugude nimekiri</h1>
        
        <section class="flex gap-4">
            <IconButton icon="icon-park-outline:tag-one" label="SILDID" @click="toggleTagPanel" />
            <IconButton icon="icon-park-outline:peoples" label="AUTORID" @click="showAuthors = !showAuthors" />
        </section>
        
        <div class="flex flex-wrap gap-x-2 gap-y-2 border-solid border-t border-b my-4 overflow-hidden transition-all" :class="tagPanelOpen ? 'h-auto py-6' : 'h-0 py-0'">
            <template v-for="(tag, i) in tags" :key="`tag${i}`">
                <story-tag :label="tag" @click="toggleTag(tag)" />
            </template>
        </div>

        <div class="grid gap-4 mt-10 items-center
            sm:grid-cols-2 
            md:grid-cols-3 md:gap-6
            lg:grid-cols-4 lg:gap-8">
            <template v-for="(story, i) in data" :key="`story${i}`">
                <NuxtLink :to="story._path" 
                    v-show="activeTags.length == 0 || story.tags.some(item => activeTags.includes(item))" @click="closeList">
                    <Card class="bg-white ring-1 ring-secondary-300 shadow-md transition
                    dark:bg-secondary-800 dark:ring-secondary-700
                    hover:shadow-lg dark:hover:ring-secondary-500"
                        :class="path == story._path ? 'bg-yellow-100 dark:bg-primary-400 dark:text-primary-800' : ''"
                        :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                    >
                        <p v-if="showAuthors" class="font-sans font-sm border-b mb-2">{{ story.author }}</p>
                        <p class="font-Special text-2xl leading-tight text-secondary-800 dark:text-secondary-300" 
                        :class="path == story._path ? 'dark:text-primary-900' : ''">
                        {{ story.description }}
                        </p>
                        
                        <!-- <template v-if="tagPanelOpen" >
                            <div class="border-t mt-3 flex justify-start flex-wrap">
                                <span v-for="tag in story.tags" :key="`t-${i}`"
                                class="font-sans font-sm px-1 break-none">
                                    {{ tag }}
                                </span> 
                            </div>
                        </template> -->
                    </Card>
                </NuxtLink>
            </template>
        </div>
    </section>
</template>
