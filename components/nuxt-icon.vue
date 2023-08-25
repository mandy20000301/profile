<template>
    <span
        class="i flex"
        :class="[`i-${name}`, { 'i-custom-size': customSize }]"
        v-html="icon"
    />
</template>

<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: () => "",
        },
        customSize: {
            type: Boolean,
            default: () => false,
        },
    });

    const icon = ref("");

    watchEffect(async () => {
        try {
            const iconsImport = import.meta.glob("assets/icons/**/**.svg", {
                as: "raw",
                eager: false,
            });
            const rawIcon = await iconsImport[
                `/assets/icons/${props.name}.svg`
            ]();
            icon.value = rawIcon;
        } catch {
            console.error(
                `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
            );
        }
    });
</script>
<style lang="postcss" scoped>
    .i {
        &.i-custom-size {
            :deep(svg) {
                @apply h-full w-full;
            }
        }
        &:not(.i-custom-size) {
            :deep(svg) {
                @apply h-[1em] w-[1em];
            }
        }
    }
</style>
