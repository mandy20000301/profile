<template>
    <div class="relative pt-[66px] md:pt-0 mb-[60px] md:mb-[100px] xl:mb-[130px]">
        <img src="/image/yellow_bg.svg" class="w-1/2 md:w-1/3 block absolute top-0 left-0 " />
        <img src="/image/black_bg.svg"
            class="w-[15%] md:w-[12%] xl:w-[14%] block absolute bottom-[36%] md:-bottom-[27%] right-0" />
        <div class="container md:flex md:flex-wrap items-center pt-[20px] md:pt-[88px]">
            <div class="w-full mb-[30px] md:mb-0  md:w-1/2">
                <div class="w-[90%] max-w-[300px] md:w-[60%] md:max-w-none mx-auto">
                    <div class="w-full relative">
                        <div class="aspect-w-1 aspect-h-1 overflow-hidden  rounded-full relative shadow-xl">
                            <img :src="info?.image" :alt="info?.imageAlt" class="object-cover" />
                        </div>
                        <img src="/image/ellipse.svg" class="hidden md:block w-[50%] absolute -right-[8%] -top-[8%]" />
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2">
                <h1 class=" mb-3 md:mb-0 text-center md:text-left">{{ info?.name }}<span class="text-h3 md:text-h3-d"> {{ info?.enName }}</span></h1>
                <h2 class="text-primary-01 mb-5  text-center md:text-left">{{info?.jobTitle}}</h2>
                <div class="flex items-center flex-wrap w-fit mx-auto md:w-full">
                    <a :href="`mailto:${info?.mail}`" target="_blank"  class="custom-btn rounded-full bg-primary-02 w-[130px] py-[5px] md:py-[8px] text-primary-03 relative mr-3 hover:bg-primary-01">
                        <span class="icon">
                            <NuxtIcon name="arr-right" class="text-primary-03 text-center block w-fit mx-auto" />
                        </span>
                        <span class="txt">{{ info?.ctaBtn }}</span>
                    </a>
                    <a :href="i.link" target="_blank" class="btn-i-primary--sm md:btn-i-primary--md mr-3 group"
                        v-for="i in info?.contactInfo" :key="i.id">
                        <NuxtIcon :name="i.icon" class="text-[white] group-hover:text-primary-03 z-[2] relative" />
                    </a>
                </div>
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
</script>
<style scoped lang="postcss">
.custom-btn{
    @apply overflow-hidden;
    .txt{
        @apply translate-x-[0%] text-center relative block  opacity-100;
        transition: all .2s ease-out;
    }
    .icon{
       @apply block w-full -translate-x-[100%] absolute top-[50%] -translate-y-1/2  text-center  opacity-0;
       transition: all .2s ease-out;
    }
    &:hover{
        .txt{
            @apply translate-x-[100%]  opacity-0;
            transition: all .2s ease-out;
        }
        .icon{
            @apply translate-x-[0%] opacity-100;
            transition: all .2s ease-out;
        }
    }
}
</style>
