<script setup>
    defineProps({
        summary: {
            default: "Summary",
            type: String
        },
        open: {
            default: true,
            type: Boolean
        },
        icon: {
            type: String,
            default: "icon-park-outline:communication"
        }
    });
</script>

<template>
    <details class="my-4 py-4" :open="open ? true : false">
        <summary class="flex items-baseline gap-4 text-3xl font-Special leading-none tracking-tight text-secondary-800 dark:text-secondary-200">
            <Icon :name="icon" class="text-3xl" />
            {{summary}}  
            <svg class="summary-arrow fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </summary>
        <div class="pl-4 mt-6 leading-normal text-md border-l border-grey dark:border-l-secondary-600">
            <slot></slot>
        </div>
    </details>
</template>



<style scoped>
    
    :slotted(ul){
        margin: 0;
    }
    :slotted(li){
        word-break: break-all;
    }
    :slotted(a){
        word-break: break-all;
    }



details summary { user-select: none; }
details summary .summary-arrow {transform: rotate(0deg);}
details[open] summary .summary-arrow { transform: rotate(-90deg); }
details[open] summary ~ * {	animation: ease-opacity-t-b .5s ease }
summary { cursor: pointer; }
svg { transition: all 0.3s; }
summary::-webkit-details-marker { display: none; }
:focus { outline: none; }


@keyframes ease-opacity-t-b{
	0% {
		opacity: 0;
		transform: translateY(-20px);
    }
	100% {
		opacity: 1;
		transform: translateY(0px);
    }
}

</style>