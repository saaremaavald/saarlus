<script setup>
    // import {ref, computed, provide} from "vue";
    // import { useStore } from "vuex";

    const props = defineProps({
        src : {     type:String },
        height : {  type:String,    default: "75vh" },
        classes: {  type:String,    default: ""},
        bgSize: {   type:String,    default: "cover"},
        bgRepeat: { type:String,    default: "no-repeat"},
        bgPos: {    type:String,    default: "50% 50%"},
        zoom: {     type:Boolean,   default: false}
    });

    const isOpen = modalOpen();
    const toggleOpen = () => {
        isOpen.value = !isOpen.value;
    }
    
</script>

<template>
    <div class="flex justify-center items-center bg-gradient-to-b from-blue-800 via-green-600 to-blue-700 shadow"
    :style="{
        'background':`url(${props.src})`,
        'background-size' : props.bgSize, 
        'background-repeat' : props.bgRepeat, 
        'background-position' : props.bgPos, 
        'height': props.height, 
        'width':'100%',
        'background-blend-mode': 'overlay'
    }"
    >
        <div class="zoomable flex justify-center items-end w-full h-full cursor-pointer hover:bg-saarlus-700/5 transition" v-if="zoom" @click="toggleOpen">
            <div class="icon flex justify-center items-center w-20 h-20 
                mb-20
                rounded-full bg-primary-800 opacity-0 transition">
                <Icon name="icon-park-outline:zoom-in" class="svg text-white stroke-current text-4xl"  />
            </div>
        </div>
    </div>
    
    <Teleport to="body">
        <div v-if="isOpen">
            <image-modal :image="props.src" :key="props.src" />
        </div>
    </Teleport>
    
</template>

<style scoped>
    .zoomable:hover>.icon {
        opacity: 1;
    }
</style>