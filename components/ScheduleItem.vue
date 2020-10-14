<template>
  <div class="flex border-gray-400" :class="last ? '' : 'border-b'">
    <div class="w-1/3 md:w-1/5 border-r border-gray-400 flex flex-col p-4">
      <span class="text-xl font-semibold text-right md:text-2xl">{{ start }}</span>
      <span class="text-xl text-right">{{ end }}</span>
    </div>
    <div class="w-2/3 md:w-4/5 p-4">
      <h2 class="text-2xl">
        <slot />
      </h2>
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
  }
}
</script>
