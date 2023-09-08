<template>
    <div class="overflow-hidden " v-fade:up>
        <SharedTabBox :info="tabList" @update-activeId="updateActiveId($event)" class="mb-7 lg:mb-16" />
        <div>
            <HomeExperienceDesktop :info="expList" v-if="screen === 'desktop' && activeId == 'experience'" />
            <HomeExperienceMobile :info="expList" v-else-if="screen === 'mobile' && activeId == 'experience'" />
            <HomeExperienceSkill :info="info?.skillList" v-else/>
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
const { width: winW } = useWindowSize();
const screen = computed(() =>
    winW.value > 1200 ? 'desktop' : 'mobile'
)
const tabList = computed(()=>props.info?.tabList);
const expList = computed(()=> props.info?.experinceList??[]);

const activeId = ref(null);
const updateActiveId = (val => activeId.value = val)

</script>     