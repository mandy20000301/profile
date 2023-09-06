<template>
    <div class=" w-full fixed top-0 left-0 z-[1000] py-5" :class="isScrolling? 'bg-primary-03/80':''">
        <div class="container">
            <div class="flex item-center flex-wrap w-fit ml-auto">
                <button class="w-fit mr-6 last-of-type:mr-0 text-p-b md:text-h5" v-for="i in headerdata" :key="i.id" @click="scrollToId(i.id)">{{ i.title }}</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const headerdata = ref([
    {
        id:'about',
        title:'關於我',
    },
    {
        id:'works',
        title:'作品集',
    }
])
// scroll
const winScrollY = ref(0);
onMounted(() => {
    useEventListener(window, "scroll", () => {
        winScrollY.value = window.scrollY;
    });
});

const isScrolling = computed(() => winScrollY.value > 10);

const scrollToId = (val) => {
  const el = document.querySelector(`#${val}`);
  if (!el) return;
  const { y } = useWindowScroll();
  const { top } = useElementBounding(el);
  window.scrollTo({
    top: y.value + top.value - 65,
    behavior: "smooth",
  });
};
</script>