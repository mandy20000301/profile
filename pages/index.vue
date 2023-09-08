<template>
  <div>
    <TheHeder :info="headerdata"/>
    <HomeBanner :info="bannerInfo"/>
    <HomeAbout :info="aboutInfo"/>
    <HomeMyExperience :info="expAndSkillInfo"/>
    <HomeMyWorks :info="worksInfo"/>
  </div>
</template>
<script setup>
const { data: page } = await useApiFetch("page/homepage");
const seo = computed(()=> page.value.data.seo);
const headerdata = computed(()=> page.value.data.headerInfo.items);
const bannerInfo = computed(()=> page.value.data.bannerInfo);
const aboutInfo = computed(()=> page.value.data.aboutInfo);
const expAndSkillInfo = computed(()=> page.value.data.experienceAndSkill);
const worksInfo = computed(()=> page.value.data.worksInfo);

useMetaHead({
  ...seo.value,
});
</script>