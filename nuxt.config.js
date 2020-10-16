export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DevFest Indonesia 2020 | GDG Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The world is changing and with it our developer ecosystem. Are you ready for DevFest ID 2020? DevFest 2020 brings together thousands of developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Google technologies on Oct 15-18. The magic of DevFest has always come from the people involved - developers from all different backgrounds and skill levels. For DevFest 2020, Google Developer Groups are coming together in a whole new way - virtually over one weekend. This global moment empowers developers to teach, learn, and connect when they may need it the most.' },
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://developers.google.com/community/gdg/images/stories/devfest-logo_1440.jpg' },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://devfestindonesia.com' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'DevFest Indonesia 2020 | GDG Indonesia' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'DevFest Indonesia 2020 | GDG Indonesia' },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'The world is changing and with it our developer ecosystem. Are you ready for DevFest ID 2020? DevFest 2020 brings together thousands of developers globally for the largest virtual weekend of community-led technical learning and a shared passion for Google technologies on Oct 15-18. The magic of DevFest has always come from the people involved - developers from all different backgrounds and skill levels. For DevFest 2020, Google Developer Groups are coming together in a whole new way - virtually over one weekend. This global moment empowers developers to teach, learn, and connect when they may need it the most.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/filters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/svg',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-5BHF46P'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
