<template>
    <div class="relative border border-[blue] mb-[60px] md:mb-[100px] xl:mb-[130px]">
        <img src="/image/yellow_bg.svg" class="w-1/2 md:w-1/3 block absolute top-0 left-0 z-[-1]" />
        <img src="/image/black_bg.svg" class="w-[20%] md:w-[12%] xl:w-[14%] block absolute bottom-[30%] md:-bottom-[27%] right-0 z-[-1]" />
        <div class="container md:flex md:flex-wrap items-center pt-[20px] md:pt-[88px]">
            <div class="w-full mb-[30px] md:mb-0  md:w-1/2">
                <div class="w-[90%] max-w-[300px] md:w-[60%] md:max-w-none mx-auto">
                    <div class="w-fit h-fit relative">
                        <div class="aspect-square overflow-hidden  rounded-full relative">
                            <img src="/image/mandy.png" class="object-cover" />
                        </div>
                        <img src="/image/ellipse.svg" class="hidden md:block w-[50%] absolute -right-[8%] -top-[8%]  " />
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2">
                <h1 class=" mb-3 md:mb-0">李欣恬<span class="text-h3 md:text-h3-d"> Mandy</span></h1>
                <h2 class="text-primary-01 mb-5">前端工程師</h2>
                <div class="flex items-center flex-wrap">
                    <button type="button" class="btn-i-primary--sm md:btn-i-primary--md mr-1 md:mr-2" v-for="i in 2" :key="i">
                        <NuxtIcon name="arr-right" />
                    </button>
                    <button type="button" class="btn-primary--sm md:btn-primary--md">
                        <span>Contact Me</span> <NuxtIcon name="arr-right"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
