<template>
    <ul class="filters list-reset flex flex-row mb-8 md:flex-wrap overflow-x-scroll md:overflow-x-auto whitespace-no-wrap max-w-md">
        <filter-item 
            v-for="(filter, i) in filters"
            :key="i"
            :v-model="filter.checked">
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
        filters: { 
            get: function() {
                return this.$store.state.filters;
            },
            set: function(value) {
                this.$store.commit('setChecked', { name: name, checked: value})
            }
        }
    },
}
</script>

