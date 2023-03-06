<script setup>
    const saarlus = storiesData();
    
    const { data } = await useAsyncData('stories', async () => {
        return queryContent('_lood').only(['description','_path', 'tags']).find();
    });
    saarlus.value = data.value;

    const showStories = listOpen();
    const showEx = exOpen();

    const toggleList = () => {
        showStories.value = !showStories.value;
    }
    const toggleEx = () => {
        showEx.value = !showEx.value;
    }

</script>
<template>
    <section class="h-screen sticky top-0 left-0 
        flex flex-col justify-between items-center gap-6
        bg-primary-200 shadow-md
        dark:bg-black
        print:invisible">
        
        <nav class="flex flex-col gap-4 mt-[10vh]">
            <IconButton icon="icon-park-outline:list" label="LOOD" @click="toggleList" />
            <IconButton icon="icon-park-outline:writing-fluently" label="TEOD" @click="toggleEx" />
            <!-- <IconButton icon="icon-park-outline:list" label="ASI" @click="toggleList" /> -->
        </nav>
        <ColorModeSwitch class="mb-[10vh] dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />

    </section>
    <Teleport to="body">
        <div v-if="showStories" class="fixed min-h-screen top-0 left-0 w-full z-50 bg-white" >
            <list-of-stories />
            <div class="fixed right-8 top-4">
                <CloseButton @click="toggleList" />
            </div>
        </div>
        <div v-if="showEx" class="fixed min-h-screen top-0 left-0 w-full z-50 bg-white" >
            <list-of-exercises />
            <div class="fixed right-8 top-4">
                <CloseButton @click="toggleEx" />
            </div>
        </div>
    </Teleport>  
</template>