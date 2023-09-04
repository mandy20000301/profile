 <template>
    <div>
        <div class="card  overflow-hidden rounded-[10px] hover:rounded-tl-[60px] transition-[1s]" @click="openPopup">
            <div class="aspect-w-1 aspect-h-1">
                <img :src="info.image" class="object-cover">
            </div>
            <h4 class="opacity-0 absolute top-1/2 -translate-y-1/2 z-[2] w-full text-center">{{ info?.title }}</h4>
        </div>
        <HomeWorksPopUp :is-open="isOpen" @close-popup="isOpen = false" :info="info"/>
    </div>
 </template>
 <script setup>
const props = defineProps({
    info: {
        type: Object,
        default: () => {{}},
    }
})
 const isOpen = ref(false);
const openPopup = ()=>{
    isOpen.value = true;
}
 </script>
 <style lang="postcss" scoped>
    .card{
        @apply relative cursor-pointer;
        &:hover{
            &::after{
                @apply opacity-90 transition-[1s];
            }
            h4{
                @apply opacity-100;
            }
        }
        &::after{
            content:'';
            @apply absolute block w-full h-full top-0 left-0 bg-primary-01 opacity-0 z-[0] transition-[1s];
        }
    }
 </style>