<template>
  <div class="is-page-wrapper">
    <div class="container mt-8 flex flex-row flex-wrap">
      <div v-for="(item, index) in items" :key="index" class="w-1/4 p-4">
        <div class="border border-grey-400 p-4">
          <h2 class="text-center text-lg font-semibold mb-4 cities">
            {{ item.cities }} Speakers
          </h2>
          <div class="image-container w-56 h-56 mx-auto flex justify-center items-center mb-4">
            <img :src="item.image" alt="" class="w-full mx-auto rounded-full">
          </div>
          <h1 class="text-center font-bold text-2xl">
            {{ item.name }}
          </h1>
          <h2 class="text-center text-xl">
            {{ item.afiliation }}
          </h2>
          <h3 class="text-center title">
            {{ item.title }}
          </h3>
          <div class="control-container flex flex-row justify-center items-center mt-4">
            <nuxt-link v-if="item.twitter" class="mr-8 inline-block border border-grey-400 w-12 h-12 rounded-full flex justify-center items-center" :to="item.twitter">
              <twitter-icon class="w-1/2 h-auto" />
            </nuxt-link>
            <nuxt-link v-if="item.linkedin" class="inline-block border border-grey-400 w-12 h-12 rounded-full flex justify-center items-center" :to="item.linkedin">
              <linkedin-icon class="w-1/2 h-auto" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterIcon from '~/assets/icons/twitter-black-shape.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin-logo.svg?inline'
export default {
  components: {
    TwitterIcon,
    LinkedinIcon
  },
  async asyncData ({ $content }) {
    const items = await $content('speakers').fetch()
    return {
      items
    }
  }
}
</script>

<style scoped>
.cities {
  height: 3.4rem;
}
.title {
  height: 4rem;
}
</style>
