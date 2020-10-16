<template>
  <div class="flex border-gray-400" :class="last ? '' : 'border-b'">
    <div class="w-1/4 md:w-1/5 border-r border-gray-400 flex flex-col p-4">
      <span class="text-xl font-semibold text-right md:text-2xl">{{ st }}</span>
      <span class="text-xl text-right">{{ ed }}</span>
      <span class="text-right">{{ tz }}</span>
    </div>
    <div class="w-3/4 md:w-4/5 p-4">
      <!-- <h2 class="text-2xl"> -->
      <slot />
      <!-- </h2> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    last: {
      type: Boolean,
      default () {
        return false
      }
    },
    start: {
      type: String,
      default () {
        return '00:00'
      }
    },
    end: {
      type: String,
      default () {
        return '00:01'
      }
    }
  },
  computed: {
    tz () {
      return Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    st () {
      const date = new Date(Date.parse(this.convertTimezone(this.start)))
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
      // return ''
    },
    ed () {
      const date = new Date(Date.parse(this.convertTimezone(this.end)))
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`

      // return ''
    }
  },
  methods: {
    convertTimezone (date) {
      return new Date(Date.parse(date)).toLocaleString('en-US', { timeZone: this.getTimezone })
    }
  }
}
</script>
