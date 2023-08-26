<template>
    <div>
        <SharedTabBox :info="tabList" @update-activeId="updateActiveId($event)" />

    </div>
</template>
<script setup>
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


</script>     