import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: '8080', // default: 3000
    host: 'localhost', // default: localhost
  },
  ssr: false,
  generate: {
    dir: 'test-V1.7.9-03162022',
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
      { hid: 'description', name: 'description', content: 'CSI provides complete technology solutions to all types of public sector agencies. From the state courts and state police to municipal parking authorities.' },
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
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/tailwind.scss', lang: 'scss' },
    { src: '@/assets/style.scss', lang: 'scss' },
    '@/assets/fonts/CSI-icon-v2.3/style.css',
    '@/assets/swiper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/myfilter',
    { src: "@/plugins/aos", ssr: false },
    { src: '~/plugins/vue-zoom-on-hover.js', ssr: false },
    { src: '~/plugins/vue-swiper.js', ssr: false },
    { src: "~plugins/ga.js", mode: "client" }
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

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-social-sharing/nuxt',
    '@nuxtjs/firebase',
    '@nuxtjs/sitemap',
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyBz0Gcowcc7RBRL_cU2nGK2AlcIabDOk1A",
      authDomain: "csi-website-70421.firebaseapp.com",
      databaseURL: "https://csi-website-70421.firebaseio.com",
      projectId: "csi-website-70421",
      storageBucket: "csi-website-70421.appspot.com",
      messagingSenderId: "891913750521",
      appId: "1:891913750521:web:4c3ebf32efceaa8908df28"
    },
    services: {
      realtimeDb: true // this is the realtime database service
    }
  },

  /*
   ** Axios module configuration
   */
   axios: {
    proxy: true
  },
  proxy: {
    "/api": {
      target: "https://www.csitech.com",
      pathRewrite: {
        "^/api": "/"
      },
      changeOrigin: true
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.csitech.com',
    gzip: true,
    generate: true,
    exclude: [
      '/sweepstakes',
      '/sweepstakes-rules',
    ],
    routes: [
      '/about/',
      '/products/public-safety/cad/',
      '/products/public-safety/rms/',
      '/products/public-safety/fire-ems/',
      '/products/public-safety/mobile-operations/',
      '/products/public-safety/citation-management/',
      '/products/public-safety/evidence/',
      '/products/public-safety/internal-affairs/',
      '/products/public-safety/municipal-portal/',
      '/products/public-safety/municipal-system/',
      '/products/public-safety/personnel-scheduling/',
      '/products/justice-courts/attorney-ethics/',
      '/products/justice-courts/courts/',
      '/products/justice-courts/courts-efiling/',
      '/products/justice-courts/ediscovery-with-portal/',
      '/products/justice-courts/interview-recording/',
      '/products/justice-courts/online-transcription-service/',
      '/products/justice-courts/prosecutor/',
      '/products/justice-courts/vw-portal/',
      '/products/crime-intelligence/alpr/',
      '/products/crime-intelligence/analytics/',
      '/products/crime-intelligence/csi/',
      '/products/crime-intelligence/fusion-center/',
      '/products/crime-intelligence/global-search/',
      '/products/crime-intelligence/intelligence/',
      '/products/crime-intelligence/investigation/',
      '/products/crime-intelligence/major-incident-management/',
      '/products/crime-intelligence/sar/',
      '/resources/',
      '/contact/',
      '/jobs/',
    ]
  },

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
