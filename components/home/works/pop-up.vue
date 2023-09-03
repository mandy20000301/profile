<template>
    <Teleport to="body">
        <Transition name="fade">
            <div class="min-h-[100vh] fixed flex  items-center justify-center top-0 left-0 w-full z-[1001] bg-[#00000050]"
                v-show="isOpen">
                <div class="bg-primary-03 p-10 rounded-[10px] w-[98%] md:w-[50%] relative">
                    <button @click="$emit('close-popup')" class="absolute top-[10%] lg:top-[5%] right-[5%]">
                        <NuxtIcon name="cross" class="w-fit cursor-pointer  text-white lg:text-[19px]" />
                    </button>
                    <h3 class="text-center">{{ info?.title }}</h3>
                    <div class="mb-7">
                        <h4 class="mb-2">網站網址: </h4>
                        <p>尚未上架</p>
                    </div>
                    <div class="mb-7">
                        <h4 class="mb-2">網站描述:</h4>
                        <p>本網站客戶為合和實業有限公司，為購物商場網站，呈現店家及活動內容為主。</p>
                    </div>
                    <div class="mb-7">
                        <h4 class="mb-2">負責項目：</h4>
                        <ul>
                            <li class="text-p md:text-p-d" v-for="i in 5" :key="i">About Hopewell Cluster</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: () => true,
    },
    info: {
        type: Object,
        default: () => { { } },
    }
})
// body lock
// const isBodyLock = useBodyLock();
// watch(props.isOpen, (nVal) => {
//     isBodyLock.value = nVal;
// });
</script>
<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}

ul {
    @apply list-disc pl-5;

    @screen lg {
        @apply text-[18px];
    }
}
</style>