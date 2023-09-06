<template>
    <div class="bg-primary-01 rounded-t-[30px] overflow-hidden " v-fade:reveal>
        <div class="pt-[100px] pb-[200px] flex items-center justify-between  container relative hidden-content">
            <SharedExpCard v-for="i in info" :info="i" :key="i.id" class="w-[368px]" />
            <!-- deco line -->
            <div class="w-[5px] rounded-full h-[200px] bg-primary-03 absolute bottom-[150px] right-4 hidden xl:block"></div>
            <!-- deco text -->
            <div class="absolute bottom-2 right-4  text-right hidden xl:block hidden-content">
                <p class="text-primary-02 text-[40px] font-bold">MY</p>
                <p class="text-[white] text-[40px] font-bold">EXPERIENCE</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Array,
        default: () => [],
    }
})
</script>