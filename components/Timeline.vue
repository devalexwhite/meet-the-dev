<template>
    <section class="timeline-container">
        <div 
            class="timeline-year mb-16" 
            v-for="year in years" 
            :key="year"
        >
            <h3 class="text-purple-darker font-bold text-lg mb-4">{{year}}</h3>
            <div class="timeline-month">
                <timeline-entry 
                    v-for="event in getEvents(year)" 
                    :key="event.title"
                    :value="event"
                />
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
    methods: {
        getEvents(year = "") {
            return this.$props.events
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

<style>

</style>
