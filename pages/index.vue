<template>
  <div class="is-page-wrapper">
    <div class="container">
      <section class="featured flex justify-between flex-col mb-8 md:flex-row items-center ">
        <div class="section-left px-4 order-last w-full md:w-2/5">
          <h1 class="text-3xl font-bold">
            DevFest Indonesia 2020
          </h1>
          <h2 class="text-xl my-4">
            <calendar-icon class="w-4" /> October 15-18, 2020 |  <online-icon class="w-4" /> Online
          </h2>
          <p class="mb-4">
            The world is changing and with it our developer ecosystem. Are you ready for DevFest ID 2020?
          </p>
          <p class="mb-4">
            DevFest 2020 brings together thousands of developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Google technologies on Oct 15-18. The magic of DevFest has always come from the people involved - developers from all different backgrounds and skill levels. For DevFest 2020, Google Developer Groups are coming together in a whole new way - virtually over one weekend. This global moment empowers developers to teach, learn, and connect when they may need it the most.
          </p>
          <button class="btn bg-blue-600 text-white py-2 px-8 border-none rounded">
            Register
          </button>
        </div>
        <div class="section-right-and-top px-4 w-full md:order-last md:w-3/5 ">
          <img src="https://developers.google.com/community/gdg/images/stories/devfest-logo_1440.jpg" alt="" class="w-full">
        </div>
      </section>
      <section class="flex flex-col items-center justify-between mb-4 md:flex-row">
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
      <!-- <section class=" mb-4 flex flex-col justify-between md:flex-row">
        <section class="w-full md:w-1/5 p-4">
          <h2 class="text-2xl mb-4">
            Explore Tracks
          </h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellat sed magni vel, aspernatur eveniet consequatur inventore nobis quis quos beatae quisquam voluptates quod dolores, officia et, nihil sapiente deserunt!</p>
        </section>
        <section class="w-full md:w-4/5 p-4 flex">
          <div class="border border-gray-500 rounded p-4 m-4 w-1/2">
            <icon />
            <h3 class="text-2xl">
              Title
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut veritatis nobis, earum hic inventore minus officiis repellendus ipsa, error quisquam accusantium harum! Doloremque corporis veniam hic, sunt voluptatibus tenetur?</p>
          </div>
          <div class="border border-gray-500 rounded p-4 my-4 w-1/2">
            <icon />
            <h3 class="text-2xl">
              Title
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aut veritatis nobis, earum hic inventore minus officiis repellendus ipsa, error quisquam accusantium harum! Doloremque corporis veniam hic, sunt voluptatibus tenetur?</p>
          </div>
        </section>
      </section>
      <section class="flex">
        <div class="w-1/4 flex flex-col justify-center items-center p-4">
          <span class="text-blue-700 text-5xl">20k+</span> Registrations
        </div>
        <div class="w-1/4 flex flex-col justify-center items-center p-4">
          <span class="text-blue-700 text-5xl">20k+</span> Registrations
        </div>
        <div class="w-1/4 flex flex-col justify-center items-center p-4">
          <span class="text-blue-700 text-5xl">20k+</span> Registrations
        </div>
        <div class="w-1/4 flex flex-col justify-center items-center p-4">
          <span class="text-blue-700 text-5xl">20k+</span> Registrations
        </div>
      </section> -->
      <!-- <section class="flex flex-col md:flex-row">
        <div class="w-1/5 p-4">
          <h1 class="text-2xl mb-4">
            DevFest Moments
          </h1>
          <p>The DevFest is powered by a shared belief that when developers come together to exchange ideas, amazing things can happen! And here are our community trails having tons of amazing people, sessions, knowledge and just that spirit.</p>
        </div>
        <div class="w-4/5 p-4">
          picture
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
