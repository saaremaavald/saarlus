<script setup>
       
    const { path } = useRoute();
    const { data } = await useAsyncData('exercises', async () => {
        return queryContent('_teod').only(['description','_path','title']).find();
    });

    

    const showEx = exOpen();

    const closeEx = () => {
        showEx.value = false;
    }

</script>

<template>
    <section class="h-screen overflow-auto bg-primary-50 p-10 dark:bg-secondary-900">

        <h1 class="mb-4 font-Special text-5xl text-secondary-800 
            dark:text-primary-200">
            Teod
        </h1>
        

        <section 
        class="flex flex-col lg:flex-row gap-4 
        text-lg 
            font-Normal prose prose-gray dark:prose-invert">
            <div class="bg-white p-4 max-w-2xl">
                <p>
                    Saarluse kodulehel leiad sa lood Saaremaaga seotud inimestelt. Sinu teha on teod, väiksemad ja suuremad. Ja et uued inimesed saaksid näha teie tegusid ja luua uusi, oma lugusid või teha tegusid, siis avalikuks: virtuaalnäitus sotsiaalmeediasse, kooli seintele ja miks mitte ka kaugemale.
                </p>
                <p>
                    Võib ka teha nii, et kõigepealt teed teo, siis vaatad, milliseid lugusid siin on, ja siis teed uuesti, kasutades uusi teadmisi, mõtteid, tundeid, mis tekkisid pärast lugusid.
                </p>
            </div>
            <div class=" p-4">
                <h3 class="mb-4 font-bold text-secondary-800 dark:text-primary-200">Vaata lisaks:</h3>
                <ul class="list-disc ml-5">
                    <li>
                        <a href="https://www.youtube.com/watch?v=rZikhQ5w5Ck" target="_blank"
                        class="underline">
                            Mis on visuaalne mõtlemine? 81 min 55) 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=IvTHDbUbdHY" target="_blank"
                        class="underline">
                            Miks sirgeldada?
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=eLgTPDaholU" target="_blank"
                        class="underline">Sirgeldamise 5 põhitõde</a>
                    </li>
                </ul>
            </div>
        </section>


        <section class="flex gap-4 mt-10">
        

            <!-- List of stories -->
            <div class="grid gap-4 mt-10 items-center
                sm:grid-cols-2 
                md:grid-cols-3 md:gap-6
                lg:grid-cols-4 lg:gap-8">
                
                <NuxtLink v-for="(ex, i) in data" 
                    :to="ex._path"
                    @click="closeEx" :key="`ex${i}`">
                    <Card class="bg-white ring-1 ring-secondary-300 shadow transition
                        dark:bg-secondary-800 dark:ring-secondary-700
                        hover:shadow-lg dark:hover:ring-secondary-500"
                        :class="path == ex._path ? 'bg-yellow-100 dark:bg-primary-400 dark:text-primary-800' : ''"
                        :style="`transform:rotate(${-3+Math.random()*6}deg)`"
                        >
                        <p class="font-Special text-2xl leading-tight text-secondary-800 dark:text-secondary-300"
                        :class="path == ex._path ? 'dark:text-primary-900' : ''">
                        {{ ex.title }} nr {{ i+1 }}:<br />{{ ex.description }}
                        </p>
                    </Card>
                </NuxtLink>
            </div>
        </section>
    </section>
</template>
