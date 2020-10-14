<template>
  <div class="is-page-wrapper">
    <div class="container">
      <section class="px-4">
        <h2 class="text-3xl text-blue-500 my-4">
          Schedule
        </h2>
        <p class="mb-4">
          Follow code demonstrations by our expert speakers on 5 different tracks. Check out the schedule below and don't forget to mark your calendar so that you don't miss out on any sessions.
        </p>
      </section>
      <section class="px-4">
        <ul class="flex border-b">
          <li class="mr-1" :class="page === 15 ? '-mb-px' : ''">
            <button class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" :class="page === 15 ? 'border-l border-t border-r' : ''" @click="page = 15">
              15 October
            </button>
          </li>
          <li class="mr-1" :class="page === 16 ? '-mb-px' : ''">
            <button class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" :class="page === 16 ? 'border-l border-t border-r' : ''" @click="page = 16">
              16 October
            </button>
          </li>
          <li class="mr-1" :class="page === 17 ? '-mb-px' : ''">
            <button class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" :class="page === 17 ? 'border-l border-t border-r' : ''" @click="page = 17">
              17 October
            </button>
          </li>
          <li class="mr-1 invisible md:visible lg:visible xl:visible" :class="page === 18 ? '-mb-px' : ''">
            <button class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" :class="page === 18 ? 'border-l border-t border-r' : ''" @click="page = 18">
              18 October
            </button>
          </li>
        </ul>
        <ul class="flex border-b visible md:invisible lg:invisible xl:invisible">
          <li class="mr-1" :class="page === 18 ? '-mb-px' : ''">
            <button class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" :class="page === 18 ? 'border-l border-t border-r' : ''" @click="page = 18">
              18 October
            </button>
          </li>
        </ul>
      </section>
      <div class="content mt-8">
        <div v-if="page === 15" class="content-15">
          <schedule-item v-for="(item, index) in schedules.OCT15" :key="index" :start="item.start" :end="item.end" :last="index === schedules.OCT15.length - 1">
            <pre>{{ item.content.$t }}</pre>
          </schedule-item>
        </div>
        <div v-if="page === 16" class="content-16">
          <schedule-item v-for="(item, index) in schedules.OCT16" :key="index" :start="item.start" :end="item.end" :last="index === schedules.OCT16.length - 1">
            <pre>{{ item.content.$t }}</pre>
          </schedule-item>
        </div>
        <div v-if="page === 17" class="content-17">
          <schedule-item v-for="(item, index) in schedules.OCT17" :key="index" :start="item.start" :end="item.end" :last="index === schedules.OCT17.length - 1">
            <pre>{{ item.content.$t }}</pre>
          </schedule-item>
        </div>
        <div v-if="page === 18" class="content-18">
          <schedule-item v-for="(item, index) in schedules.OCT18" :key="index" :start="item.start" :end="item.end" :last="index === schedules.OCT18.length - 1">
            <pre>{{ item.content.$t }}</pre>
          </schedule-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 15
    }
  },
  computed: {
    schedules () {
      return this.$store.state.schedules.collections
    }
  },
  mounted () {
    if (process.browser) {
      this.$store.dispatch('schedules/getCollections')
    }
  }
}
</script>

<style scoped>
pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
