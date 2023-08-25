<template>
  <div>
    <div v-if="password == 2000">
      <HomeBanner />
      <!-- <button type="button" class="btn-i-primary--md">
        <NuxtIcon name="arr-right" />
      </button> -->
    </div>
    <div v-else class="flex items-center justify-center h-screen">
      <div class=" p-20 bg-primary-01 rounded">
        <h4 class="text-center mb-2">enter password:</h4>
        <input type="password" v-model="password" class="border-[2px] p-1 text-[20px] border-primary-02">
      </div>
    </div>
  </div>
</template>
<script setup>
const password = ref();
</script>