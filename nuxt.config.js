import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: '8000', // default: 3000
    host: 'localhost', // default: localhost
  },
  ssr: false,
  generate: {
    dir: 'test-V1.6-10262021',
  },

  /*
   ** Router configuration
   */
  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - CSI Technology Group',
    title: 'CSI Technology Group',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: 'CSI' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/tailwind.scss', lang: 'scss' },
    { src: '@/assets/style.scss', lang: 'scss' },
    '@/assets/fonts/CSI-icon-v2.2/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/myfilter',
    '@/plugins/vue-youtube',
    { src: '@/plugins/vue-carousel', ssr: false },
    { src: '@/plugins/aos', ssr: false },
    { src: '~/plugins/vue-zoom-on-hover.js', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  styleResources: {
    // your settings here
    sass: [],
    scss: [],
    less: [],
    stylus: [],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0d63ba',
          accent: '#317ac4',
          secondary: '#0b539d',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
  },
}
