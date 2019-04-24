<template>
    <li role="checkbox" :aria-checked="filter.checked" @click="toggle">
        <slot />
    </li>
</template>

<script>
export default {
    computed: {
        filter: {
            get: function() {
                return this.$store.state.filters.find(f=> f.name === this.$props.value.name);
            },
            set: function(value) {
                this.$store.commit('setChecked', { name: value.name, checked: value.checked })
            },
        },
    },
    methods: {
        toggle: function() {
            const { checked, ...rest } = this.filter;
            this.filter = {
                ...rest,
                checked: !checked,
            };
        },
    },
    props: {
        value: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="postcss" scoped>
    li {
        @apply rounded-lg mr-4 px-4 py-2 cursor-pointer;
    }

    li {
        @apply bg-white border-grey-light text-grey-dark border mb-2;
    }
    
    li[aria-checked="true"] {
        @apply bg-blue-light text-white;
    }

</style>
