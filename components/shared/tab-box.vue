<template>
    <div class="w-fit mx-auto flex items-center flex-wrap">
        <button
            class="mr-[30px] transition  last-of-type:mr-0 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:transition after:duration-300 after:ease-easeOutSine after:content-[''] after:bg-primary-01"
            :class="activeId === i.id ? 'after:scale-x-100 text-h3 lg:text-h3-d' : 'after:scale-x-0 text-h4 lg:text-[24px] text-grey-700'"
            v-for="i in info" :key="i.id" @click="activeId = i.id">{{ i.title }}</button>
    </div>
</template>
<script setup>
const props = defineProps({
    info: {
        type: Array,
        default: () => [],
    },
});
const activeId = ref(null);
const emit = defineEmits(['update-activeId']);
watch(activeId,(nVal)=>{
    emit('update-activeId', nVal);
})
onMounted(() => {
    activeId.value = props.info[0].id;
});


</script>
