<template>
  <div class="is-page-wrapper">
    <div class="container">
      <section class="w-full mb-20 mt-16">
        <div class="container">
          <div class="flex justify-between flex-col lg:flex-row items-center w-full md:w-3/4 mx-auto">
            <div class="section-left px-4 order-last flex-1 event-info">
              <h1 class="text-3xl font-bold">
                <span class="mr-2 bg-red-600 text-white px-2">DevFest</span><span class="text-red-600">Indonesia</span> 2020
              </h1>
              <h2 class="text-xl my-4 flex items-center">
                <calendar-icon class="w-4 inline mr-2" /> October 15-18, 2020 |  <online-icon class="w-4 inline mr-2 text-red-600" /> Online
              </h2>
              <p class="mb-4">
                The world is changing and with it our developer ecosystem. Are you ready for DevFest ID 2020?
              </p>
              <p class="mb-4">
                DevFest 2020 brings together thousands of developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Google technologies on Oct 15-18. The magic of DevFest has always come from the people involved - developers from all different backgrounds and skill levels. For DevFest 2020, Google Developer Groups are coming together in a whole new way - virtually over one weekend. This global moment empowers developers to teach, learn, and connect when they may need it the most.
              </p>
            </div>
            <div class="section-right-and-top px-4 lg:order-last flex-1">
              <img src="https://developers.google.com/community/gdg/images/stories/devfest-logo_1440.jpg" alt="" class="w-full">
            </div>
          </div>
          <div class="container flex justify-center">
            <div class="container-registration-url flex flex-col md:flex-row justify-center items-center">
              <a v-for="(item, index) in registrations" :key="index" :href="item.gdgurl" class="btn py-4 px-8 rounded mr-2 inline-block border border-grey-600 shadow mb-4 md:mb-0">
                <div class="gdg-logo flex flex-row items-center">
                  Register <img src="~/assets/images/logo.png" class="w-8 h-4 mx-2" alt=""><p>{{ item.cities }}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section v-if="player" class="w-full mb-32">
        <div class="container">
          <h1 class="text-3xl font-bold text-center mb-16 md:w-3/4 mx-auto">
            {{ player.name }}
          </h1>
          <iframe
            class="w-full md:w-3/4 mx-auto video-embed"
            :src="`https://www.youtube.com/embed/${player.embed}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <!-- <countdown
            v-else
            :date="`${player.date}`"
          /> -->
        </div>
      </section>
      <section class="flex flex-col items-center justify-between mb-4 md:flex-row mb-32">
        <section class="section px-4 mb-4 w-full md:w-2/3">
          <iframe
            class="w-full"
            height="360px"
            src="https://www.youtube.com/embed/z-Wdaw0VRak"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </section>
        <section class="px-4 w-full md:w-1/3">
          <p class="mb-4">
            Whether it be through technical talks delivered in local languages, a keynote provided by Google Developers, or by simply meeting fellow local developers, DevFest attendees learn about how Google developer products can help them do what they do best - develop. Sessions cover a wide variety of technologies with speakers from Google, Google Developer Groups, Women Techmakers, Google Developer Experts, and more.
          </p>
          <a href="https://gdg.community.dev/devfest" class="inline-block border text-blue-700 border-gray-700 border-solid border-blue-700 px-8 py-2 rounded my-4">
            Learn more about DevFest
          </a>
        </section>
      </section>
      <section class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/5 p-4">
          <h1 class="text-2xl mb-4">
            DevFest Moments
          </h1>
          <p>The DevFest is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen! And here are our community trails having tons of amazing people, sessions, knowledge and just that spirit.</p>
        </div>
        <div class="w-full md:w-4/5 p-4 flex flex-row flex-wrap">
          <iframe
            class="w-full md:w-1/2"
            height="315"
            src="https://www.youtube.com/embed/7BqKlQc6-Qc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            class="w-full md:w-1/2"
            height="315"
            src="https://www.youtube.com/embed/dTwbAhRTl7o"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            class="w-full md:w-1/2"
            height="315"
            src="https://www.youtube.com/embed/behRbX0zJxI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import Countdown from '~/components/Countdown'
import CalendarIcon from '~/assets/icons/solid/calendar.svg?inline'
import OnlineIcon from '~/assets/icons/solid/status-online.svg?inline'
export default {
  components: {
    // Countdown,
    CalendarIcon,
    OnlineIcon
  },
  async asyncData ({ $content }) {
    const players = await $content('channel').fetch()
    const temp = await $content('registration').fetch()
    const registrations = temp.filter((e) => {
      return new Date(e.date).getDate() === new Date().getDate()
    })
    return {
      players,
      registrations
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      today: new Date().getDate()
    }
  },
  computed: {
    player () {
      if (this.players) {
        const item = this.players.find((e) => {
          const date = new Date(e.date)
          return date.getDate() === this.today
        })
        item.embed = item.url.split('v=')[1]
        return item
      }
      return null
    },
    showEmbed () {
      if (this.player) {
        const liveDate = Math.trunc((new Date(this.player.date)).getTime() / 1000)
        const hourMinutes = ((Math.trunc((liveDate - this.now) / 60 / 60) % 24) * 60)
        const minutes = Math.trunc((liveDate - this.now) / 60) % 60
        return hourMinutes + minutes <= 10
      }
      return false
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      this.today = new Date().getDate()
    }, 1000)
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style scoped>
.event-info {
  text-align: justify;
}
.video-embed{
  min-height: 320px;
}
@media(min-width: 767px){
  .video-embed{
    min-height: 640px;
  }
}
</style>
