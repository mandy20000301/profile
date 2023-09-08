<template>
    <div class="text-center container mb-[30px] md:mb-20" id="about" v-fade:up>
        <h2 class="mb-6">{{ info?.title }}</h2>
        <p class="text-grey-700">{{ info?.description }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => {{}},
    },
});
</script>
