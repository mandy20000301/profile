<template>
    <div class="bg-primary-01 rounded-t-[30px] reveal overflow-hidden" v-fade:reveal>
        <div class="container-left rounded-t-[30px] pt-[50px] pb-[100px] lg:pt-[130px] lg:pb-[200px] relative hidden-content">
            <Swiper 
            :slides-per-view="1.2" 
            :space-between="24" 
            :speed="600"
            :breakpoints="{
                '768': {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                '1200': {
                    slidesPerView: 3.3,
                    spaceBetween: 30,
                },
            }" 
            :initial-slide="0"
            :centeredSlides="false"
            :slide-to-clicked-slide="true" 
            @swiper="initSwiper"
            class="w-full lg:!pt-[40px]">
                <SwiperSlide v-for="item in info" :key="item.id" class="swiper-slide">
                    <SharedExpCard :info="item" :key="item.id" />
                </SwiperSlide>
            </Swiper>
            <div class="flex items-center justify-between w-fit mt-[30px]">
                <button class="btn-i-secondary--sm md:btn-i-secondary--md mr-3 group" :class="{'invisible': isBeginning}"  @click="slidePrev">
                    <NuxtIcon name="arr-right" class="text-[white] group-hover:text-primary-02 z-[2] relative rotate-180" />
                </button>
                <button class="btn-i-secondary--sm md:btn-i-secondary--md group" :class="{'invisible': isEnd}" @click="slideNext">
                    <NuxtIcon name="arr-right" class="text-[white] group-hover:text-primary-02 z-[2] relative" />
                </button>
            </div>
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

const slidePrev = () => {
  mySwiper.value.slidePrev();
};
const slideNext = () => {
  mySwiper.value.slideNext();
};

const isBeginning = computed(()=>
    mySwiper?.value?.isBeginning?? null
)
const isEnd = computed(()=>
    mySwiper?.value?.isEnd?? null
)
</script>