<template>
  <div>
    <TheHeder />
    <HomeBanner />
    <HomeAbout />
    <HomeMyExperience />
    <HomeMyWorks />
  </div>
</template>
<script setup>
const seo = ref({
  title: "李欣恬 | 前端工程師",
  description: '前端工程師-李欣恬 Mandy Li 的個人網站',
  image: 'https://mandy2000.com/image/mandy_logo.png',
})
useMetaHead({
  ...seo.value,
});
</script>