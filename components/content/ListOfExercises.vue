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
    <section class="p-10">

        <h1 class="mb-4 font-Special text-5xl text-secondary-800 
            dark:text-primary-200">
            Teod
        </h1>
        

        <section 
        class="flex flex-col text-lg bg-white rounded p-2
            font-Normal prose prose-gray 
            lg:flex-row gap-4 p-4
            dark:prose-invert dark:bg-secondary-900">
            <div class="p-4 max-w-xl xl:max-w-2xl">
                <p>
                    “Saarluse kompassi” lugude lõpus on küsimusi, mille üle omaette või rühmas arutleda. Siin on ülesanded, saarluse uurimise teod, mille põhimõte on: märka, mõtesta, märgi üles, mängi mõttemänge. Saarluse teod kutsuvad loovalt mõtlema, kujutlusvõimet lendu laskma, teisisõnu vaimselt ja füüsiliselt uitama ehk ennast ja ümbritsevat jälgima, infot koguma, sortima, (läbi) kirjutama, sirgeldama. Tegude tulemusi saab esitleda, võrrelda ja üldistada paari- või rühmaaruteludes, väitlusringis, kasutada intervjuudes, et mängida mõttemänge, milline võiks tegutseja enda või Saaremaa elu olla tulevikus: mida hoida, mida muuta, mida uut tuua.
                </p>
                <p>
                    Joonistamisoskus pole oluline, tähtis on arusaadavus. Tegude tulemused tulevad just nii huvitavad ja kõnekad, kui palju neisse panustada. Nagu koolis, tööl, elus tervikuna. Tähelepanelikku silma ja head sirgeldamist!
                </p>
            </div>
            <div class="p-4">
                <h3 class="mb-4 font-bold text-secondary-800 dark:text-primary-200">Vaata lisaks:</h3>
                <ul class="list-disc ml-5">
                    <li>
                        <a href="https://www.youtube.com/watch?v=rZikhQ5w5Ck" target="_blank"
                        class="underline">
                            Mis on visuaalne mõtlemine ja milleks hea? (inglise keeles) 1 min 55 s
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=IvTHDbUbdHY" target="_blank"
                        class="underline">
                            Miks sirgeldada? (inglise keeles) 2 min 32 s
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=eLgTPDaholU" target="_blank"
                        class="underline">Sirgeldamise 5 põhitõde (inglise keeles, sisaldab reklaami) 10 min 29 s</a>
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
                        dark:bg-secondary-900 dark:ring-secondary-700
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
