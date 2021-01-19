<template>
    <div class="timeline-day ml-4">
        <article class="max-w-lg timeline-entry py-4 mb-6 flex flex-row rounded-lg  bg-white">
            <div class="entry-icon text-3xl text-blue-light -ml-8 pr-8">
                <span class="bg-white py-4">

                {{value.icon}}
                </span>
            </div>
            <div class="entry-content max-w-sm">
                <div class="entry-text mb-6">
                    <header class="mb-1">
                        <h4 class="text-purple-darker font-bold text-lg mb-2">
                            {{formatDate(value.date)}}
                        </h4>   
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
