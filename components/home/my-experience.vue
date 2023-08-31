<template>
    <div class="overflow-hidden">
        <SharedTabBox :info="tabList" @update-activeId="updateActiveId($event)" class="mb-7 lg:mb-16" />
        <div>
            <HomeExperienceDesktop :info="expList" v-if="screen === 'desktop' && activeId == 'experience'" />
            <HomeExperienceMobile :info="expList" v-else-if="screen === 'mobile' && activeId == 'experience'" />
            <HomeExperienceSkill v-else/>
        </div>
    </div>
</template>
<script setup>
const { width: winW } = useWindowSize();
const screen = computed(() =>
    winW.value > 1200 ? 'desktop' : 'mobile'
)
const tabList = ref(
    [
        {
            id: 'experience',
            title: '過往經歷'
        },
        {
            id: 'skill',
            title: '專業技能'
        }
    ]);
const activeId = ref(null);
const updateActiveId = (val => activeId.value = val)
const expList = ref([
    {
        id: 'digisalad',
        logo: '/image/digisalad_logo1.png',
        title: '沙拉互動有限公司',
        subTitle: '前端工程師',
        date: '2023/02 - 2023/08',
        desc: '在職期間，主要以Nuxt.js(2和3)進行網站前端開發，與設計師、專案經理及後端工程師互相配合，順利開發及維護了5個專案。內容包含購物商場網站、飯店網站及各式官網。'
    },
    {
        id: 'tibame',
        logo: '/image/tibame_logo.png',
        title: '緯育Tibame',
        subTitle: '前端工程師就業養成班',
        date: '2022/09 - 2023/01',
        desc: '在學期間，學習了網站前後端技術，順利完成了兩項專題'
    },
    {
        id: 'nkuht',
        logo: '/image/nkuht_logo.png',
        title: '國立高雄餐旅大學',
        subTitle: '餐飲管理系',
        date: '2017/09 - 2022/06',
        desc: '大四時，我修了Excel VBA 及 Python 網路爬蟲課程，發現自己對程式語言很有興趣，為了更了解網路爬蟲，我認為要熟悉網頁架構，因此我自學了HTML及CSS，覺得非常有趣，於是我決定畢業後進入緯育Tibame 學習前端工程師所需要的技能。'
    }

])

</script>     