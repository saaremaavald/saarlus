<script setup>
defineProps({
    label:String,
    icon: String
});
</script>

<template>
    <button class="
        flex flex-row gap-2 items-center justify-center
        p-2
        sm:flex-col sm:gap-1
        ">
        <Icon :name="icon" class="icon transition text-xl" />
        <span class="text-xs hidden sm:block">{{label}}</span>
    </button>
</template>

<style scoped>
    button>.icon {
        display: block;
        transform: rotate(0) translateY(0) scale(1);
    }
    button:hover>.icon {
        transform: rotate(-10deg) translateY(-0.25em) scale(1.25);
    }
</style>