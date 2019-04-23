<template>
    <li role="checkbox" :aria-checked="value">
        <slot />
    </li>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style lang="postcss" scoped>
    li {
        @apply rounded-lg mr-4 px-3 py-1 cursor-pointer;
    }

    li[aria-checked="true"] {
        @apply bg-blue-light text-white;
    }

    li[aria-checked="false"] {
        @apply bg-white border-grey-light text-grey-dark border mb-2;
    }
</style>
