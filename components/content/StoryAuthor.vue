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
    <div class="flex items-baseline gap-4 pt-8 my-8 text-secondary-800 border-t border-t-secondary-200 border-dotted
        dark:text-secondary-200 dark:border-t-secondary-600" >
        <Icon name="icon-park-outline:peoples" class="text-3xl flex-none" />
        <div class="flex-initial">
            <p v-if="author" class="font-Normal">
                <span class="text-3xl font-Special tracking-tight">Autor</span> : <span class="italic text-xl">{{author}}</span>
                <br/>
                <span v-if="origin" class="italic">{{origin}}</span>
            </p>
        </div> 
    </div>
</template>