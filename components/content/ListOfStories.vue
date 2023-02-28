<script setup>
    const allPersons = [];
    const persons = ref();
    const activePersons = ref([]);
    
    const personPanelOpen = personOpen();
    // const togglePersonPanel = () => {
    //     personPanelOpen.value = !personPanelOpen.value;
    // }
    const togglePerson = (person) => {
        if(activePersons.value.find(item => item === person)){
            const newArr = activePersons.value.filter(item => item != person);
            activePersons.value = newArr;
        } else {
            activePersons.value.push(person);
        }
    };
    const sortedPersons = () => {
        return [...persons.value].sort( (a, b) => {
            return a.localeCompare(b);
        });
    };

    const allGenres = [];
    const genres = ref();
    const selectedGenres = activeGenres();
    const genrePanelOpen = genreOpen();
    // const toggleGenrePanel = () => {
    //     genrePanelOpen.value = !genrePanelOpen.value;
    // }
    const toggleGenre = (genre) => {
        if(selectedGenres.value.find(item => item === genre)){
            const newArr = selectedGenres.value.filter(item => item != genre);
            selectedGenres.value = newArr;
        } else {
            selectedGenres.value.push(genre);
        }
        // console.log("active genres", activeGenres.value);
    };
    const sortedGenres = () => {
        return [...genres.value].sort( (a, b) => {
            return a.localeCompare(b);
        });
    };
    
    const togglePanels = (panel) => {
        if(panel === "person"){
            personPanelOpen.value = true;
            genrePanelOpen.value = false;
            selectedGenres.value = [];
        } else {
            genrePanelOpen.value = true;
            personPanelOpen.value = false;
            activePersons.value = [];
        }
    }
    
    
    const { path } = useRoute();
    const { data } = await useAsyncData('stories', async () => {
        return queryContent('_lood').only(['description','_path','person','genre']).find();
    });

    for (const story of data.value) {
        story.person.forEach(person => {
            allPersons.push(person);
        });
        story.genre.forEach(genre => {
            allGenres.push(genre);
        });
    }
    persons.value = [...new Set(allPersons)];
    persons.value = sortedPersons();
    genres.value = [...new Set(allGenres)];
    genres.value = sortedGenres();


    const showStories = listOpen();

    const closeList = () => {
        showStories.value = false;
    }

</script>

<template>
    <section class="h-screen overflow-auto bg-primary-50 bg-[url('/images/bg-map.svg')] bg-[length:640px_640px] p-10 dark:bg-secondary-900">

        <h1 class="mb-4 font-Special text-5xl text-secondary-800 
            dark:text-primary-200">Lugude nimekiri</h1>
        
        <section class="flex gap-4 mt-10">
            <IconButton icon="icon-park-outline:peoples" label="ŽANR" @click="togglePanels('genre')" />
            <IconButton icon="icon-park-outline:peoples" label="TEGELASED" @click="togglePanels('person')" />
        </section>
        

        <!-- List of tags -->
        <div class="border-solid border overflow-hidden bg-white py-6 px-4 rounded-xl transition-all
            dark:bg-secondary-900 dark:border-secondary-700">
            <!-- <div class="flex flex-wrap gap-x-2 gap-y-2 " :class="personPanelOpen ? 'h-auto my-6' : 'h-0 my-0'"> -->
            <div v-if="personPanelOpen" class="flex flex-wrap gap-x-2 gap-y-2">
                <template v-for="(person, i) in persons" :key="`person${i}`">
                    <story-tag :label="person" @click="togglePerson(person)" />
                </template>
            </div>
            
            <div v-if="genrePanelOpen" class="flex flex-wrap gap-x-2 gap-y-2">
                <template v-for="(genre, i) in genres" :key="`genre${i}`">
                    <story-tag :label="genre" :isActive="selectedGenres.includes(genre)" @click="toggleGenre(genre)" />
                </template>
            </div>
        </div>

        <!-- List of stories -->
        <div class="grid gap-4 mt-10 items-center
            sm:grid-cols-2 
            md:grid-cols-3 md:gap-6
            lg:grid-cols-4 lg:gap-8">
            <template v-for="(story, i) in data">
                <!-- <div v-if="activeGenres.length == 0 || story.genre.some(genre => activeGenres.includes(genre))"> -->
                    <NuxtLink :to="story._path"
                        v-if="(activePersons.length == 0 || story.person.some(person => activePersons.includes(person))) && (story.genre.some(genre => selectedGenres.includes(genre)) || selectedGenres.length == 0)" @click="closeList" :key="`story${i}`">
                        <Card class="bg-white ring-1 ring-secondary-300 shadow transition
                        dark:bg-secondary-800 dark:ring-secondary-700
                        hover:shadow-lg dark:hover:ring-secondary-500"
                            :class="path == story._path ? 'bg-yellow-100 dark:bg-primary-400 dark:text-primary-800' : ''"
                            :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                        >
                            <p class="font-Special text-xl leading-tight text-secondary-800 dark:text-secondary-300"
                            :class="path == story._path ? 'dark:text-primary-900' : ''">
                            {{ story.description }}
                            </p>
                        </Card>
                    </NuxtLink>
                <!-- </div> -->
            </template>
        </div>
    </section>
</template>
