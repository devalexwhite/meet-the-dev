<template>
    <section class="timeline-container">
        <div 
            class="timeline-year mb-16" 
            v-for="year in years" 
            :key="year"
        >
            <div v-if="getEvents(year).length">
                <h3 class="text-purple-darker font-bold text-lg mb-4">{{year}}</h3>
                <ul>
                    <li
                        v-for="event in getEvents(year)" 
                        class="timeline-list-item"
                        :key="event.title"
                    >
                        <timeline-entry 
                            :value="event"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import TimelineEntry from './TimelineEntry';

export default {
    components: {
        TimelineEntry,
    },
    computed: {
        filteredEvents: function() {
            return this.$props.events
                .filter(e => this.$store.state.filters.some(f => f.checked && f.name === e.category));
        },
    },
    methods: {
        getEvents(year = "") {
            return this.filteredEvents
                .filter(e => e.date.getFullYear().toString() == year)
                .sort((a,b) => b.date - a.date);
        },
    },  
    props: {
        events: {
            type: Array,
            default: () => [],
        },
        years: {
            type: Array,
            default: () => [],
        },
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .timeline-list-item {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        position: relative;
    }
</style>
