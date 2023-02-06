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
    <div class="flex gap-4 pt-4 my-8 text-saarlus-700 border-t border-t-gray-200 border-dotted
        dark:text-primary-200 dark:border-t-primary-500" >
        <Icon name="icon-park-outline:peoples" class="text-2xl" />
        <div>
            <p v-if="author" class="text-xl"><span class="font-bold font-Special tracking-tight">Autor:</span> <span class="italic">{{author}}</span><br/>
            <span v-if="origin">{{origin}}</span></p>
        </div> 
    </div>
</template>