<script setup>
    // import { inject } from "vue";
    // import { useStore } from "vuex";
    // import IconButton from "./IconButton.vue";

    const props = defineProps({
        image:String
    });

    const isOpen = modalOpen();
    const toggleOpen = () => {
        isOpen.value = !isOpen.value;
    }

    //const store = useStore();
    //const modalOpen = ref(computed(() => store.getters.modalOpen));
    //const toggleModal = () => {store.commit("toggleModal", modalOpen.value)};
    // const { amOpen, toggleModal } = inject('open');
</script>

<template>

<div class="fixed h-screen w-screen z-110 inset-0 overflow-y-auto" v-if="isOpen" >
    <div class="absolute w-full h-full inset-0 bg-black opacity-75" @click="toggleOpen"></div>
    <div class="flex items-center justify-center min-h-screen py-4 px-4 ">
        <div class=" overflow-hidden transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="rounded-sm p-2 bg-white shadow">
                
                <img 
                    :src="`${props.image}`" 
                    class="max-w-full sm:max-h-[95vh]"
                />
            </div>  
        </div>
        
        <div class="absolute right-8 top-4">
            <button class="bg-white border-transparent p-2 rounded-full shadow dark:text-primary-800" @click="toggleOpen">
                <Icon name="icon-park-outline:close-one" size="40" />
            </button>
        </div>
    </div>
</div>

</template>