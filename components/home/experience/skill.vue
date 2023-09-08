<template>
    <div class="container pb-[60px] md:pb-[120px]">
        <div class="grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-10 w-[100%] md:w-[80%] mx-auto">
            <div class="flex items-center justify-center" v-for="(i,idx) in info" :key="`${i}-${idx}`" v-fade:in >
                <img :src="`/image/skills/${i}.png`" :alt="i" :title="i" >
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Array,
        default: () =>[],
    },
});
</script>