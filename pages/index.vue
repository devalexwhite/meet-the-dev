<template>
  <div class="max-w-2xl flex flex-col md:flex-row flex-no-wrap mx-auto mt-16">
    <aside class="sidebar text-left w-full md:w-auto md:max-w-sm mr-32 mb-16 md:mb-0">
      <article class="about flex flex-col items-center md:items-start">
        <img class="mb-8" src="profile.png" width="240" height="240" alt="Picture of Alex White"/>
        <h1 class="font-normal text-4xl mb-4 text-purple-darkest">Alex White</h1>
        <p class="mb-8 text-lg text-purple-darker leading-normal max-w-xs text-center md:text-left">Hi! I’m a Senior UX Developer and product maker from Columbus Ohio.</p>
        <ul class="contact list-reset flex flex-row md:flex-col flex-wrap">
          <li class="mb-2 mr-4 md:mr-0 justify-center">
            <a class="no-underline text-blue-light text-lg" href="https://twitter.com/AlexWhiteDev" target="_blank">@AlexWhiteDev</a>
          </li>
          <li class="mb-2 mr-4 md:mr-0">
            <a class="no-underline text-blue-light text-lg" href="mailto:devalexwhite@pm.me">devalexwhite@pm.me</a>
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
  }),
}
</script>

<style>
</style>
