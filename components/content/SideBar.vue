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
    <section class="w-12 h-screen h-[100dvh] fixed top-0 left-0 
        sm:w-15 md:w-20 xl:w-32
        flex flex-col justify-between items-center gap-6
        bg-primary-200 
        dark:bg-black
        print:invisible">
        
        <nav class="flex flex-col gap-4 mt-[15vh]">
            <!-- <IconButton icon="icon-park-outline:list" label="LOOD" @click="toggleList" />
            <IconButton icon="icon-park-outline:writing-fluently" label="TEOD" @click="toggleEx" /> -->
            <NuxtLink to="/lood">
                <IconButton icon="icon-park-outline:list" label="LOOD" />
            </NuxtLink>
            <NuxtLink to="/teod">
                <IconButton icon="icon-park-outline:writing-fluently" label="TEOD" />
            </NuxtLink>
        </nav>
        <ColorModeSwitch class="mb-[15vh] dark:text-primary-100 
        hover:text-primary-700 dark:hover:text-primary-300" />

    </section>
    <!-- <Teleport to="body">
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
    </Teleport>   -->
</template>