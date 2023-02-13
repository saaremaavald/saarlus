<script setup>
    import { onMounted, watch } from 'vue';
    // import { watch } from 'vue';
    import anime from 'animejs';

    // H E L P E R S
    // Fachwerk functions for building the compass - thanks @KristjanJansen ❤
    // https://fachwerk.dev/
    const seq = (count, step = 1, start = 0) => {
        return Array.from({ length: count })
        .map((_, i) => typeof step === "function" ? step(i + start) : i * step + start);
    }
    const pol2car = (angle, radius) => {
        return [
            Math.cos((angle - 90) * (Math.PI / 180)) * radius, 
            Math.sin((angle - 90) * (Math.PI / 180)) * radius
        ].map((p) => trunc(p));
    }
    const trunc = (value, precision = 8) => {
        return parseFloat(value.toFixed(precision));
    }
    const circlepoints = ( length, r, position = [0, 0] ) => {
        const [px, py] = position;
        return seq(length, (n) => n * (360 / length))
        .map((a) => pol2car(a, r))
        .map(([x, y]) => [x + px, y + py]);
    }
    
    // Arc function from https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
    const makeArc = (x, y, radius, startAngle, endAngle) => {
        const start = pol2car(endAngle, radius);
        const end = pol2car(startAngle, radius);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        const d = [
            "M", start[0], start[1], 
            "A", radius, radius, 0, largeArcFlag, 0, end[0], end[1]
        ].join(" ");
        return d;
    }

    // Fetching the stories data
    // const { path } = useRoute();

    const { data } = await useAsyncData('stories', async () => {
        return queryContent('_lood').only(['description','_path']).find();
    });
    // const saarlus = storiesData();
    // console.log("saarlus",data.value);
    const storiesLength = data.value.length;

    // animation parameters
    const rotationStep = 360/storiesLength;
    const rotationEnd = ref(0);
    const rotationValue = ref(0);
    let currentAngle = 0;
    let activeStory = ref( 0 );

    const myPoints = ref(circlepoints(storiesLength, 47));
    const myArc = ref( makeArc(0, 0, 3, 0, 270) );
    // console.log(myArc);
    let animation;
    
    // animation functions
    const calcAngle = () => {
        // activeStory.value = Math.round( Math.random()*stories.value.length );
        const angle = rotationStep*activeStory.value-rotationValue.value;
        return angle;
    }
    const compassNeedleClick = () => {
        // activeStory.value = Math.round( Math.random()*stories.value.length );
        activeStory.value = Math.round( Math.random()*storiesLength );
    };
    const compassNeedleTurn = () => {
        rotationEnd.value = calcAngle();
        currentAngle = rotationValue.value;
        animation.seek(0);
        animation.pause();
        animation.remove(rotationValue);
        animation.delay = 0;
        animation.duration = 0;
        animation.add({targets: rotationValue, value:[currentAngle, `+=${rotationEnd.value+Math.floor(Math.random()*4)*360}`], duration:1400});
        animation.restart();
    };
    const animatedRotation = computed ( () => {
        return `transform: rotate(${ rotationValue.value }deg)`
    });

    const showStories = listOpen();
    const toggleStories = () => {
        showStories.value = !showStories.value;
    }
    // Vue lifecycle hooks
    onMounted(() => {
        animation = anime.timeline({
            easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
            direction: "normal",
            duration: 2000,
            autoplay: false
        });
        activeStory.value = Math.floor(Math.random()*44);
    });
    watch(activeStory, (n) => {
        compassNeedleTurn();
    })


</script>
<template>
    <section class="mx-auto 
    flex flex-col justify-around 
    min-h-[80vh] gap-0
    lg:flex-row lg:justify-center lg:gap-[5vw] lg:max-w-6xl">
        <div class="flex flex-col justify-center order-2 grow text-center 
        lg:order-1 lg:text-left lg:items-start">
            <h1 class="font-Special font-bold text-primary-700 text-5xl leading-[0.75] tracking-tighter 
            lg:text-[7vw] lg:leading-[0.75]
            dark:text-primary-400">
                Saarluse kompass
            </h1>
            <h2 class="mt-8 font-Special text-secondary-800 text-4xl uppercase
            dark:text-secondary-500">Mis see veel on?</h2>
            <p class="font-Normal mt-2 text-secondary-900
            dark:text-secondary-400">Siit leiad sa hulga materjale, mis aitavad sul saarlust paremini mõista. Alustuseks võid lihtsalt kompassil klikkida või valida <a class="text-primary-600 cursor-pointer dark:text-rimary-400" @click="toggleStories">sobiv lugu nimekirjast</a></p>

        </div>
        
        <div class="relative flex grow-0 justify-center items-center order-1 lg:order-2">
            <svg viewBox="0 0 100 100" 
            class="h-[70vmin] w-[70vmin]
            lg:h-[60vmin] lg:w-[60vmin]">
                <filter id="displacementFilter">
                    <feTurbulence
                    type="turbulence"
                    baseFrequency="0.08"
                    numOctaves="7"
                    result="turbulence" />
                    <feDisplacementMap
                    in2="turbulence"
                    in="SourceGraphic"
                    scale="1.25"
                    xChannelSelector="R"
                    yChannelSelector="B" />
                </filter>
                <!-- filtered container starts -->
                <g style="filter: url(#displacementFilter)">
                <!-- compass needle -->
                <g transform="translate(50,50)" >
                    <g :style="animatedRotation">
                        <circle r="10" stroke-width="0.5" class="fill-none stroke-secondary-500" />
                        <polyline points="0,-46 7,0 0,25 -7,0" class="fill-secondary-800" />
                        <polyline points="0,-35 5,0 -5,0" class="fill-primary-200 dark:fill-primary-600" />
                        <circle r="8" class="fill-secondary-800"></circle>
                        <circle r="6.5" class="fill-secondary-300 dark:fill-primary-600" ></circle>
                        <path d="M 0 -1.5 L 0,1.5 -1.5,0 Z" transform="translate(0,-3)" class="fill-secondary-800" />
                        <path d="M 0 -1.5 L 0,1.5 -1.5,0 Z" transform="translate(-3,0) rotate(90)" class="fill-secondary-800" />
                        <path 
                            :d="myArc" 
                            stroke-width="1" 
                            class="fill-none stroke-secondary-800" 
                        />
                        
                    </g>
                </g>
                <!-- invisible click area -->
                <g transform="translate(50,50)">
                    <circle r="12" @click="compassNeedleClick" style="cursor:pointer" fill="hsla(0,0%,100%,0)" ></circle>
                </g>
                <!-- Story-points, generated for each story -->
                <circle
                    v-for="(point, i) in myPoints"
                    :cx="point[0] + 50"
                    :cy="point[1] + 50"
                    r="1"
                    :data-idx="i"
                    :key="`point+${i}`"
                    @click="activeStory = i"
                    class="compass-story fill-primary-600"
                />
                </g><!-- filtered container ends -->
            </svg>
            <!-- <story-tooltip :storyIdx="activeStory" /> -->
            <NuxtLink :to="data[activeStory]._path" class="absolute top-2/3 left-1/4 w-1/2 -mt-6
            text-lg text-center leading-tight font-Special
            cursor-pointer">
                <p class="p-2 rounded border 
                bg-white/70 text-primary-800 dark:bg-secondary-900 dark:text-primary-200 dark:border-secondary-800">{{ data[activeStory].description }}</p>
                <span class="bg-primary-700 text-primary-50 px-3 py-1 rounded">LOE</span>
        </NuxtLink>
        </div>
    </section>
    
</template>

<style scoped>
    

    /* .compass {
        height: 70vmin;
        width: 70vmin;
    } */
    .compass-story {
        /* fill: var(--saarlus--700); */
        cursor: pointer;
    }
    .compass-needle {
        /* transform-origin:50,50; */
        pointer-events: none;
    }

    
</style>