<script setup>
// import {ref} from "vue";
    const props = defineProps({
        label: String,
        isActive: {
            type: Boolean,
            default: false
        }
    });
    const amActive = ref(props.isActive);
</script>

<template>
    <button @click="amActive = !amActive"
        class="flex items-center px-2 text-xs rounded-lg ring-1"
        :class="amActive ? 'bg-primary-600 text-primary-50 ring-primary-700 dark:bg-primary-300 dark:ring-primary-500 dark:text-primary-900' : 'bg-white ring-secondary-300 text-secondary-900 dark:bg-secondary-800 dark:ring-secondary-800 dark:text-primary-50'"
    >
        {{ label.toUpperCase() }}
    </button>
</template>