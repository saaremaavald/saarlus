<script setup>

    const estonianCompare = (a, b) => {
        const estonianAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÕÄÖÜ";
        return a.localeCompare(b, 'et', {alphabet: estonianAlphabet});
    };
    
    const allPersons = [];
    const persons = ref();
    const selectedPersons = activePersons();
    const personPanelOpen = personOpen();
    const togglePerson = (person) => {
        if(selectedPersons.value.find(item => item === person)){
            const newArr = selectedPersons.value.filter(item => item != person);
            selectedPersons.value = newArr;
        } else {
            selectedPersons.value.push(person);
        }
    };
    const sortedPersons = () => {
        return [...persons.value].sort(estonianCompare);
    };

    const allGenres = [];
    const genres = ref();
    const selectedGenres = activeGenres();
    const genrePanelOpen = genreOpen();
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
        return [...genres.value].sort(estonianCompare);
    };
    
    const allPlaces = [];
    const places = ref();
    // const selectedPlaces = ref([]);
    const selectedPlaces = activePlaces();
    const placePanelOpen = placeOpen();
    const togglePlace = (place) => {
        if(selectedPlaces.value.find(item => item === place)){
            const newArr = selectedPlaces.value.filter(item => item != place);
            selectedPlaces.value = newArr;
        } else {
            selectedPlaces.value.push(place);
        }
        // console.log("active places", activePlaces.value);
    };
    const sortedPlaces = () => {
        return [...places.value].sort(estonianCompare);
    };
    




    const togglePanels = (panel) => {
        if(panel === "person"){
            personPanelOpen.value = true;
            genrePanelOpen.value = false;
            placePanelOpen.value = false;
            selectedGenres.value = [];
            selectedPlaces.value = [];
        } else if(panel === "genre") {
            genrePanelOpen.value = true;
            personPanelOpen.value = false;
            placePanelOpen.value = false;
            selectedPersons.value = [];
            selectedPlaces.value = [];
        } else {
            placePanelOpen.value = true;
            personPanelOpen.value = false;
            genrePanelOpen.value = false;
            selectedPersons.value = [];
            selectedGenres.value = [];
        }
    }
    
    
    const { path } = useRoute();
    const { data } = await useAsyncData('stories', async () => {
        return queryContent('_lood').only(['description','_path','person','genre','tags']).find();
    });

    for (const story of data.value) {
        story.person.forEach(person => {
            allPersons.push(person);
        });
        story.genre.forEach(genre => {
            allGenres.push(genre);
        });
        story.tags.forEach(place => {
            allPlaces.push(place);
        });
    }
    persons.value = [...new Set(allPersons)];
    persons.value = sortedPersons();
    genres.value = [...new Set(allGenres)];
    genres.value = sortedGenres();
    places.value = [...new Set(allPlaces)];
    places.value = sortedPlaces();


    // const showStories = listOpen();

    // const closeList = () => {
    //     showStories.value = false;
    // }

</script>

<template>
    <!-- <section class="bg-white bg-[url('/images/saarlus-bg.webp')] bg-[length:2400px_1440px] p-10 
    dark:bg-secondary-900 dark:bg-[url('/images/saarlus-bg--dark.webp')]"
    > -->
    <section class="py-10 px-5 md:px-10">

        <h1 class="mb-4 font-Special text-5xl text-secondary-800 
            dark:text-primary-200">Lugude nimekiri</h1>
        
        <section class="flex gap-4 mt-10">
            <IconButton icon="icon-park-outline:triangle-round-rectangle" label="ŽANR" @click="togglePanels('genre')" class="bg-white dark:bg-secondary-900/70" />
            <IconButton icon="icon-park-outline:peoples" label="TEGELASED" @click="togglePanels('person')" class="bg-white dark:bg-secondary-900/70" />
            <IconButton icon="icon-park-outline:globe" label="KOHAD" @click="togglePanels('place')" class="bg-white dark:bg-secondary-900/70" />
        </section>
        

        <!-- List of tags -->
        <div class="border-solid border overflow-hidden bg-white py-6 px-4 rounded-xl transition-all
            dark:bg-secondary-900 dark:border-secondary-700">
            <!-- <div class="flex flex-wrap gap-x-2 gap-y-2 " :class="personPanelOpen ? 'h-auto my-6' : 'h-0 my-0'"> -->
            <div v-if="personPanelOpen" class="flex flex-wrap gap-x-2 gap-y-2">
                <template v-for="(person, i) in persons" :key="`person${i}`">
                    <story-tag :label="person" :isActive="selectedPersons.includes(person)"
                    @click="togglePerson(person)" />
                </template>
            </div>
            <div v-if="placePanelOpen" class="flex flex-wrap gap-x-2 gap-y-2">
                <template v-for="(place, i) in places" :key="`place${i}`">
                    <story-tag :label="place" :isActive="selectedPlaces.includes(place)"
                    @click="togglePlace(place)" />
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
                        v-if="(selectedPersons.length == 0 || story.person.some(person => selectedPersons.includes(person))) && (story.genre.some(genre => selectedGenres.includes(genre)) || selectedGenres.length == 0 && (story.tags.some(place => selectedPlaces.includes(place)) || selectedPlaces.length == 0))" :key="`story${i}`">
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
