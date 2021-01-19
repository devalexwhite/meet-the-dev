<template>
    <ul class="filters list-reset flex flex-row mb-16 md:flex-wrap overflow-x-scroll md:overflow-x-auto whitespace-no-wrap max-w-md">
        <filter-item 
            v-for="(filter, i) in filters"
            :key="i"
            :value="filter">
            {{filter.name}}
        </filter-item> 
    </ul>
</template>

<script>
import FilterItem from './FilterItem';

export default {
    components: {
        FilterItem,
    },
    computed: {
        filters: function() {
            return this.$store.state.filters;
        },
    },
}
</script>

