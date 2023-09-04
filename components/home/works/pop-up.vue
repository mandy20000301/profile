<template>
    <Teleport to="body">
        <Transition name="fade">
            <div class="min-h-[100vh] fixed flex  items-center justify-center top-0 left-0 w-full z-[1001] bg-primary-01"
                v-show="isOpen">
                <p v-if="!info?.url"
                    class="bg-primary-02 w-fit px-3 py-1 text-center text-[14px] absolute left-0 top-[10%] text-primary-03 z-[100]">
                    即將上架</p>
                <div class="bg-primary-03 p-10  w-[100%] relative  min-h-fit max-h-[90vh]  overflow-y-auto scroll-bar">
                    <button @click="$emit('close-popup')" class="absolute top-[10%] lg:top-[5%] right-[5%]">
                        <NuxtIcon name="cross" class="w-fit cursor-pointer  text-white lg:text-[19px]" />
                    </button>

                    <div class="relative z-[10]">
                        <h3 class="text-center mb-5 text-primary-04">{{ info?.title }}</h3>
                        <p class="mb-4 text-p2-d">{{ info?.description }}</p>
                    </div>
                    <div class="flex items-center flex-wrap">
                        <p class="w-fit mr-2 text-p3-d text-grey-500" v-for="i in info?.skill" :key="i">#{{ i }}
                        </p>
                    </div>
                    <div class="w-fit ml-auto mt-2" v-if="info?.url">
                        <SharedSquareBtn text="VIEW MORE" :link="info?.url"/>
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


.scroll-bar::-webkit-scrollbar {
    width: 6px;
    background-color: #CFD7E0;
}

/* Track */
.scroll-bar::-webkit-scrollbar-track {
    background-color: #F5F6F7;
}
</style>