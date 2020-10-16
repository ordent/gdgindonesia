<template>
  <div class="inline-block text-sm p-2 mr-4 flex">
    <div class="img-container w-16 h-16 flex-shrink-0 mr-4">
      <img :src="item.image" class="w-full h-full rounded-full" alt="">
    </div>
    <div class="info flex-shrink">
      <h4 class="font-semibold">
        {{ item.name }}
      </h4>
      <h5>{{ item.afiliation }}</h5>
      <h6>{{ item.title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
