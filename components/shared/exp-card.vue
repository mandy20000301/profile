<template>
    <div class="bg-[white] rounded-[10px] px-6 pt-[73px] pb-6 text-center relative mt-10 lg:mt-0 xl:max-w-[350px]">
        <div class="aspect-square w-[80px] overflow-hidden rounded-full absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-0 shadow-md">
            <img :src="info.logo" class="object-cover" :alt="info.title"/>
        </div>
        <h3 class="mb-2">{{ info.title }}</h3>
        <h4 class="text-primary-01 mb-2">{{ info.subTitle }}</h4>
        <h5 class="mb-2">{{ info.date }}</h5>
        <p class="text-grey-700">{{ info.desc }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => { { } },
    },
});
</script>