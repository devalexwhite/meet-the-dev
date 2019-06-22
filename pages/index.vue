<template>
  <div class="max-w-2xl flex flex-col md:flex-row flex-no-wrap mx-auto mt-16">
    <aside class="sidebar text-left w-full md:w-auto md:max-w-sm mr-32 mb-16 md:mb-0">
      <article class="about flex flex-col items-center md:items-start">
        <img class="mb-8" :src="profileImage.source" width="240" height="240" :alt="profileImage.alt"/>
        <h1 class="font-normal text-4xl mb-4 text-purple-darkest">{{ name }}</h1>
        <p class="mb-8 text-lg text-purple-darker leading-normal max-w-xs text-center md:text-left">{{ summary }}</p>
        <ul class="contact list-reset flex flex-row md:flex-col flex-wrap" v-if="links.length">
          <li class="mb-2 mr-4 md:mr-0 justify-center" v-for="link in links" :key="link.href">
            <a class="no-underline text-blue-light text-lg" :href="link.href" target="_blank">{{ link.title }}</a>
          </li>
        </ul>
      </article>
    </aside>
    <section class="content w-full px-6 md:px-0">
      <filters />
      <timeline
        :years="years"
        :events="events"
      />
    </section>
  </div>
</template>

<script>
import Filters from '@/components/Filters';
import Timeline from '@/components/Timeline';
import EventData from "@/assets/json/events.json";
import AboutData from "@/assets/json/about.json";

export default {
  components: {
    Filters,
    Timeline,
  },
  beforeMount: function () {
    const filters = new Set(EventData.map(e => e.category || ""));
    this.$store.commit('setFilters', {filters});

    this.events = EventData.map(e => {
      const { date, ...rest } = e;

      const dateObject = new Date(date);
      return {
        date: dateObject,
        ...rest,
      };
    });

    this.years = [...new Set(this.events.map(e => e.date.getFullYear()))].sort().reverse();
  },
  data: () => ({
    categories: new Set ,
    events: [],
    years: [],
    name: AboutData.name,
    summary: AboutData.summary,
    profileImage: {
      source: AboutData.picture,
      alt: AboutData.picture_alt
    },
    links: AboutData.links || []
  }),
}
</script>

<style>
</style>
