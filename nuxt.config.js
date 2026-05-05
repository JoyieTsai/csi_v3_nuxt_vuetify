import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import { API } from './config/api'

const GENERATE_VERSION = 'CSI-V10.1'
const now = new Date()
const mm = String(now.getMonth() + 1).padStart(2, '0')
const dd = String(now.getDate()).padStart(2, '0')
const yyyy = now.getFullYear()
const generateDir = `dist/${GENERATE_VERSION}-${mm}${dd}${yyyy}`

const dynamicRoutes = async () => {
  const resArticles = await axios.get(API.articles)
  const resPS = await axios.get(API.publicSafety)
  const resJC = await axios.get(API.justiceCourts)
  const resCI = await axios.get(API.crimeIntelligence)
  const resCapabilities = await axios.get(API.capabilities)
  const resStaff = await axios.get(API.staff)

  const routesForArticles = resArticles.data.map((art) => {
    return {
      route: `/resources/${art.id}`,
      payload: art,
    }
  })
  const routesForPS = resPS.data.map((pro) => {
    return {
      route: `/public-safety/${pro.id}`,
      payload: pro,
    }
  })
  const routesForJC = resJC.data.map((pro) => {
    return {
      route: `/justice-courts/${pro.id}`,
      payload: pro,
    }
  })
  const routesForCI = resCI.data.map((pro) => {
    return {
      route: `/crime-intelligence/${pro.id}`,
      payload: pro,
    }
  })
  const routesForCapabilities = resCapabilities.data.map((cap) => {
    return {
      route: `/capabilities/${cap.id}`,
      payload: cap,
    }
  })
  const routesForStaff = resStaff.data.map((member) => {
    return {
      route: `/our-staff/${member.uid}`,
      payload: member,
    }
  })

  const routes = routesForArticles.concat(
    routesForPS,
    routesForJC,
    routesForCI,
    routesForCapabilities,
    routesForStaff
  )
  return routes
}

export default {
  server: {
    host: 'localhost', // default: localhost
    port: '8000', // default: 3000
  },
  ssr: false, // Use true mode to generate full meta tags for the live site. But can't get changes from Firebase Realtime Database.
  target: 'static',
  generate: {
    dir: generateDir,
    routes: dynamicRoutes,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
    },
  },

  /*
   ** Router configuration
   */
  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '',
    prefetchLinks: false,
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    productionSourceMap: false,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    extractCSS: true,
    optimizeCSS: true,
    babel: {
      compact: true,
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'CSI Technology Group',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'CSI provides complete technology solutions to all types of public sector agencies. From the state courts and state police to municipal parking authorities.',
      },
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
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/tailwind.scss', lang: 'scss' },
    { src: '@/assets/style.scss', lang: 'scss' },
    '@/assets/fonts/csiicon-v8.2/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/myfilter',
    { src: '@/plugins/aos', mode: 'client' },
    { src: '~/plugins/vue-zoom-on-hover.js', mode: 'client' },
    { src: '~/plugins/vue-swiper.js', mode: 'client' },
    // { src: "~plugins/ga.js", mode: "client" },
    { src: '~plugins/gtag.js', mode: 'client' },
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
  modules: ['vue-social-sharing/nuxt', '@nuxtjs/sitemap'],

  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://www.csitech.com',
      pathRewrite: {
        '^/api': '/',
      },
      changeOrigin: true,
    },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.csitech.com',
    gzip: true,
    generate: true,
    exclude: ['/sweepstakes', '/sweepstakes-rules'],
    routes: [
      '/about',
      '/careers',
      '/contact',
      '/job',
      '/policy',
      '/terms',
      '/public-safety',
      '/public-safety/cad',
      '/public-safety/rms',
      '/public-safety/fire-ems',
      '/public-safety/mobile-operations',
      '/public-safety/citation-management',
      '/public-safety/personnel-scheduling',
      '/public-safety/evidence',
      '/public-safety/internal-affairs',
      '/public-safety/analytics-crime-mapping',
      '/justice-courts/prosecutor-cdms',
      '/justice-courts/courts-efiling',
      '/justice-courts/ediscovery-with-portal',
      '/justice-courts/attorney-ethics',
      '/justice-courts/online-transcription-service',
      '/justice-courts/interview-recording',
      '/justice-courts/vw-portal',
      '/justice-courts/courts',
      '/crime-intelligence/investigation',
      '/crime-intelligence/intelligence',
      '/crime-intelligence/fusion-center',
      '/crime-intelligence/analytics',
      '/crime-intelligence/csi',
      '/crime-intelligence/sar',
      '/crime-intelligence/global-search',
      '/crime-intelligence/major-incident-management',
      '/crime-intelligence/alpr',
      '/capabilities',
      '/capabilities/interfaces',
      '/capabilities/data-analytics',
      '/capabilities/data-mapping',
      '/capabilities/cloud-integration',
      '/capabilities/low-code',
      '/capabilities/vertical-integration',
      '/capabilities/infoshare-engine',
      '/capabilities/doc-template-generation',
      '/capabilities/security',
      '/capabilities/data-sharing',
      '/capabilities/data-migration',
      '/resources',
    ],
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
          error: colors.amber.accent3,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Environment variables (injected at build time via webpack)
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
}
