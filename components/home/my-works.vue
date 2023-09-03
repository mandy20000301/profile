<template>
    <div class="overflow-hidden pb-[120px]">
        <div class="container">
            <h2 class="mb-5">作品集</h2>
        </div>
        <!-- swiper -->
        <div class="container-left">
            <Swiper 
            :slides-per-view="1.2" 
            :space-between="24" 
            :breakpoints="{
                '768': {
                    slidesPerView: 1.8,
                    spaceBetween: 30,
                },
                '1200': {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
            }" 
            :speed="600" 
            :initial-slide="0" 
            :slide-to-clicked-slide="false" 
            @swiper="initSwiper" 
            class="w-[100%]">
                <SwiperSlide v-for="item in works_info" :key="item.id" class="swiper-slide">
                    <HomeWorksCard :info="item" />
                </SwiperSlide>
            </Swiper>
            <div class="flex items-center justify-between w-fit mt-[30px]">
                <button class="btn-i-primary--sm md:btn-i-primary--md mr-3 group" :class="{ 'invisible': isBeginning }"
                    @click="slidePrev">
                    <NuxtIcon name="arr-right" class="text-[white] group-hover:text-primary-03z-[2] relative rotate-180" />
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
const works_info = ref([
    {
        id: 'hopewell',
        title: 'Hopewell Cluster',
        image: '/image/works/hopewell.png',
    },
    {
        id: 'airside',
        title: 'Airside',
        image: '/image/works/airside.png',
    },
    {
        id: 'nft',
        title: 'NF Touch',
        image: '/image/works/nft.png',
    },
    {
        id: 'wynn',
        title: 'Wynn',
        image: '/image/works/wynn.png',
    },
]);
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
</script>