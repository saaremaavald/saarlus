<script setup>
    defineProps({
        terms : {
            type: Array
        },
    });
</script>

<template>
    <div class="my-8">
        <div class="flex items-baseline gap-4 mb-4 text-secondary-800 dark:text-secondary-200">
            <Icon name="icon-park-outline:text-message" class="text-4xl" />
            <h3 class="text-2xl font-Special leading-none tracking-tight font-bold">Sõnaseletused:</h3>
        </div>    
        <div class="pl-4 mt-4 leading-normal text-md border-l border-grey dark:border-l-secondary-600">
            <ul class="list-disc list-inside">
                <li v-for="(term, i) in terms" :key="`term-${i}`"
                class="font-Normal">
                    <span class="italic">{{term[0]}}</span> – {{term[1]}}
                 </li>
            </ul>
        </div>
        
    </div>
</template>