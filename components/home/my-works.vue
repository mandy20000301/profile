<template>
    <div class="overflow-hidden mb-[120px]">
        <div class="container">
            <h2 class="mb-5">作品集</h2>
        </div>
        <!-- swiper -->
        <div class="container-left">
            <Swiper :slides-per-view="sliderPerView" :space-between="24" :speed="600"  :initial-slide="0"
          :slide-to-clicked-slide="false" @swiper="initSwiper"
                class="relative h-max w-[100%]">
                <SwiperSlide v-for="item in works_info" :key="item.id" class="swiper-slide">
                    <HomeWorksCard :info="item"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>
<script setup>
const { width: winW } = useWindowSize();
// const screen = computed(() =>
//     winW.value > 1200 ? 'desktop' : 'mobile'
// );
const sliderPerView = computed(()=>{
if(winW.value >768 && winW.value <= 1200) return 2.2
if(winW.value >1200) return 3.3
else return 1.2
    // winW.value > 1200 ? 3.3 : 1.2
}
)
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
</script>