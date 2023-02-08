<script setup>
    defineProps({
        author : {
            type: String
        },
        origin : {
            type: String
        }
    });
</script>

<template>
    <div class="flex items-baseline gap-4 pt-8 my-8 text-saarlus-700 border-t border-t-gray-200 border-dotted
        dark:text-primary-200 dark:border-t-primary-500" >
        <Icon name="icon-park-outline:peoples" class="text-4xl" />
        <div>
            <p v-if="author" class="font-Normal">
                <span class="text-2xl font-bold font-Special tracking-tight">Autor</span> : <span class="italic text-xl">{{author}}</span><br/>
                <span v-if="origin" class="italic">{{origin}}</span>
            </p>
        </div> 
    </div>
</template>