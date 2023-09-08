<template>
    <div class="overflow-hidden py-[60px] md:py-[120px] bg-primary-02" id="works">
        <div class="container">
            <h2 class="mb-5 text-primary-01">{{info?.title}}</h2>
        </div>
        <!-- swiper -->
        <div class="container-left" v-fade:up>
            <Swiper :slides-per-view="1.2" :space-between="24" :breakpoints="{
                '768': {
                    slidesPerView: 1.8,
                    spaceBetween: 30,
                },
                '1200': {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
            }" :speed="600" :initial-slide="0" :slide-to-clicked-slide="false" @swiper="initSwiper" class="w-[100%]">
                <SwiperSlide v-for="item in info?.worksItems" :key="item.id" class="swiper-slide">
                    <!-- <HomeWorksIosCard :info="item"  /> -->
                    <HomeWorksIosCard :info="item" v-if="isSafari" />
                    <HomeWorksCard :info="item" v-else />
                </SwiperSlide>
            </Swiper>
            <div class="flex items-center justify-between w-fit mt-[30px]">
                <button class="btn-i-primary--sm md:btn-i-primary--md mr-3 group" :class="{ 'invisible': isBeginning }"
                    @click="slidePrev">
                    <NuxtIcon name="arr-right" class="text-[white] group-hover:text-primary-03 z-[2] relative rotate-180" />
                </button>
                <button class="btn-i-primary--sm md:btn-i-primary--md group" :class="{ 'invisible': isEnd }"
                    @click="slideNext">
                    <NuxtIcon name="arr-right" class="text-[white] group-hover:text-primary-03 z-[2] relative" />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => {{}},
    },
});
// swiper
const mySwiper = ref(null);
const initSwiper = (swiper) => {
    mySwiper.value = swiper;
};
const slidePrev = () => {
    mySwiper.value.slidePrev();
};
const slideNext = () => {
    mySwiper.value.slideNext();
};
const isBeginning = computed(() =>
    mySwiper?.value?.isBeginning ?? null
);
const isEnd = computed(() =>
    mySwiper?.value?.isEnd ?? null
);
// const isSafari = ref(false);
// onMounted(() => {
//     const userAgent = navigator.userAgent;
//     if (userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1) {
//         isSafari.value = true;
//     }
// });
</script>