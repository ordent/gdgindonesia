<template>
  <div class="is-layout-wrapper">
    <div class="header fixed w-full t-0">
      <nav class="flex items-center justify-between flex-wrap bg-white p-6 shadow">
        <div class="flex items-center flex-shrink-0 text-black mr-16">
          <nuxt-link class="block flex flex-row" to="/">
            <img src="~/assets/images/logo.png" class="w-16 h-8 mr-4" alt="">
            <span class=" text-xl tracking-tight">DevFest Indonesia</span>
          </nuxt-link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-600 border-teal-400 hover:text-black hover:border-white" @click="headerActive = !headerActive">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto" :class="headerActive ? 'block' : 'hidden' ">
          <div class="text-sm lg:flex-grow text-right md:text-left lg:text-left xl:text-left">
            <nuxt-link to="/" href="#responsive-header" class="block mt-4 text-md font-semibold lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-400 mr-4">
              Home
            </nuxt-link>
            <nuxt-link to="/schedules" href="#responsive-header" class="block mt-4 text-md font-semibold lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-400 mr-4">
              Schedules
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="pt-20">
      <Nuxt />
    </div>
    <div class="footer bg-gray-300 mt-8">
      <div class="container py-8 px-4">
        <h1 class="text-3xl font-bold mb-4">
          DevFest Indonesia
        </h1>
        <div class="flex flex-col md:flex-row">
          <a class="block mr-8" href="https://developers.google.com/community/gdg">About GDG Program</a>
          <a class="block mr-8" href="https://developers.google.com/community/gdg/organizers#community-guidelines">Code of Conduct</a>
          <a class="block mr-8" href="https://developers.google.com/community-guidelines">Community Guidelines</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerActive: false
    }
  }
}
</script>
