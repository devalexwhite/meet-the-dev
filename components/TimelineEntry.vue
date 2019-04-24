<template>
    <div class="timeline-day" v-if="visible">
        <h4 class="text-purple-darker font-normal text-lg mb-2">
            {{formatDate(value.date)}}
        </h4>
        <article class="max-w-lg timeline-entry px-6 py-4 mb-6 flex flex-row rounded-lg border border-grey-light shadow bg-white">
            <div class="entry-icon text-3xl text-blue-light mr-6">
                {{value.icon}}
            </div>
            <div class="entry-content max-w-sm">
                <div class="entry-text mb-6">
                    <header class="mb-1">
                        <h1 class="text-black font-normal text-xl">
                            {{value.title}}
                        </h1>
                    </header>
                    <p class="text-base leading-normal text-grey-darker">
                        {{value.description}}
                    </p>
                </div>
                <div class="entry-actions" v-if="value.action">
                    <a 
                        target="_black" 
                        :href="value.action.link" 
                        class="tracking-wide no-underline text-blue-light uppercase text-lg font-semibold"
                    >
                        {{value.action.title}}
                    </a>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    computed: {
        visible: function() {
            return this.$store.state.filters.some(f => f.checked && f.name === this.$props.value.category);
        },
    },
    methods: {
        formatDate(date = new Date()) {
            return date.toDateString().replace(date.getFullYear().toString(), "");
        },
    },
    props: {
        value: {
            type: Object,
            default: () => ({
                title: "",
                description: "",
                icon: "",
                category: "",
            })
        }
    }
}
</script>
