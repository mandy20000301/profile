<template>
    <div class="bg-primary-01 border min-h-screen">
        <div class="mt-[100px] bg-primary-03 py-[30px] px-[10px]">
            <h2 class="text-primary-04 text-center">永利皇宮</h2>
            <p>本網站客戶為永利度假村以及旗下兩家頂級酒店和度假村：永利澳門和永利皇宮。以飯店介紹及訂房服務為主。</p>
            <h3>負責項目：</h3>
            <p>1.art-macao2023 頁面下半頁切版及串接API</p>
            <div class="flex items-center flex-wrap">
                <p class="w-fit mr-2 text-p3 md:text-p3-d text-grey-500" v-for="i in info?.skill" :key="i">#{{ i }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
// const route = useRoute();
// const { data: page } = await useApiFetch(
//     `share/shops/${route.params.slug}`,
// );
const info = ref([{
    skill: ['nuxt', 'nuxt', 'nuxt', 'nuxt',]
}])
</script>