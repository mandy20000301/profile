<template>
    <div class="container pb-[60px] md:pb-[120px]" v-fade:reveal>
        <div class="grid grid-cols-4 gap-8 md:grid-cols-5 md:gap-x-10 md:gap-y-10 w-[80%] lg:w-[60%] mx-auto hidden-content">
            <div class=" flex items-center justify-center" v-for="(i,idx) in skillsArr" :key="`${i}-${idx}`" v-fade:in >
                <img :src="`/image/skills/${i}.png`" :alt="i" class="  " >
            </div>
        </div>
    </div>
</template>
<script setup>
    const logos = ref([
        {
            id:'html',
            title:'html',
            image:'html'
        },
        {
            id:'css',
            title:'css',
            image:'css'
        },
    ]);
    const skillsArr = ref(['html','css1','javascript','rwd','vue','nuxt','php','mysql','pinia','jquery','react','figma','git','github','sourcetree','postman','bitbucket','tailwindcss','sass','bootstrap']);
    const arr = ref([...logos.value,...logos.value,...logos.value,...logos.value])
</script>