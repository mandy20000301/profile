<template>
    <div class="bg-primary-01 rounded-t-[30px] reveal overflow-hidden">
        <div class="container rounded-t-[30px] pt-[50px] pb-[100px] lg:pt-[130px] lg:pb-[200px] relative hidden-content">
            <Swiper :slides-per-view="auto" :space-between="24" :speed="600" :loop="false" :initial-slide="0"
                :slide-to-clicked-slide="true" @swiper="initSwiper"
                class="relative !mx-0 h-max w-[320px] !overflow-visible">
                <SwiperSlide v-for="item in info" :key="item.id" class="swiper-slide">
                    <SharedExpCard :info="item" :key="item.id" />
                </SwiperSlide>
            </Swiper>
            <!-- deco text -->
            <div class="absolute bottom-2 right-4  text-right">
                <p class="text-primary-02 text-[24px] font-bold">MY</p>
                <p class="text-[white] text-[24px] font-bold">EXPERIENCE</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Array,
        default: () => [],
    },
});
// swiper
const mySwiper = ref(null);
const initSwiper = (swiper) => {
    mySwiper.value = swiper;
};
</script>