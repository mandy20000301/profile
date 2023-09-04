<template>
    <!-- https://blog.avada.io/css/card-hover-effects -->
        <div class="card group">
            <div class="image aspect-w-1 aspect-h-1 overflow-hidden">
                <img :src="info.image"
                    class="object-cover transition-[.5s] group-hover:translate-x-[30%] group-hover:opacity-50">
            </div>
            <div class="details">
                <div class="bg-primary-03 relative -translate-y-1/2 top-1/2 pl-5 pr-3 pt-5 flex flex-col max-h-[90%]" :class="info?.url? 'pb-0':'pb-5'">
                    <div class="sticky top-0  right-0 w-full">
                        <h4 class="text-center text-primary-04 mb-2 h-fit ">{{ info?.title }}</h4>
                    </div>
                    <p v-if="!info?.url"
                        class="bg-primary-02 w-fit px-3 py-1 text-center text-[14px] absolute left-0 top-0 -translate-y-1/2  text-primary-03">
                        即將上架</p>
                    <div class="grow min-h-fit h-full  scroll-bar pr-2 overflow-y-auto">
                        <p class="mb-4 text-p2 md:text-p2-d">{{ info?.description }}</p>
                        <div class="flex items-center flex-wrap">
                            <p class="w-fit mr-2 text-p3 md:text-p3-d text-grey-500" v-for="i in info?.skill" :key="i">#{{ i }}
                            </p>
                        </div>
                    </div>
                    <div class="w-fit ml-auto mt-2" v-if="info?.url">
                        <SharedSquareBtn text="VIEW MORE" :link="info?.url"/>
                    </div>
                </div>
            </div>
        </div>
    <!-- </a> -->
</template>
<script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => { { } },
    }
})
</script>
<style lang="postcss" scoped>
.card .details {
    @apply absolute top-0 left-0 w-[70%] h-full bg-primary-01 transition-[.5s];
    transform-origin: left;
    transform: perspective(2000px) rotateY(90deg);

}

.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.scroll-bar::-webkit-scrollbar {
    width: 3px;
    @apply bg-primary-01/30;
}

/* Track */
.scroll-bar::-webkit-scrollbar-track {
     background-color: #F5F6F7;
}

/* Handle */
.scroll-bar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    @apply bg-primary-01/30;
}
</style>