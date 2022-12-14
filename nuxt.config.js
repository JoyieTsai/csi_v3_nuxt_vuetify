import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

const dynamicRoutes = async () => {
  const resArticles = await axios.get(
    'https://csi-web3-resources-default-rtdb.firebaseio.com/articles.json'
  )
  const resPS = await axios.get(
    'https://csi-web3-resources-default-rtdb.firebaseio.com/public-safety.json'
  )
  const resJC = await axios.get(
    'https://csi-web3-resources-default-rtdb.firebaseio.com/justice-courts.json'
  )
  const resCI = await axios.get(
    'https://csi-web3-resources-default-rtdb.firebaseio.com/crime-intelligence.json'
  )
  const resCapabilities = await axios.get(
    'https://csi-web3-resources-default-rtdb.firebaseio.com/capabilities.json'
  )

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

  const routes = routesForArticles.concat(
    routesForPS,
    routesForJC,
    routesForCI,
    routesForCapabilities
  )
  return routes
}

export default {
  server: {
    host: 'localhost', // default: localhost
    port: '8000', // default: 3000
  },
  ssr: false,
  generate: {
    dir: 'CSI-V3.8-12142022',
    routes: dynamicRoutes,
  },

  /*
   ** Router configuration
   */
  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '',
    // base: '/test/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
    // scrollBehavior: async (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition;
    //   }

    //   const findEl = async (hash, x) => {
    //     return (
    //       document.querySelector(hash) ||
    //       new Promise((resolve, reject) => {
    //         if (x > 50) {
    //           return resolve();
    //         }
    //         setTimeout(() => {
    //           resolve(findEl(hash, ++x || 1));
    //         }, 100);
    //       })
    //     );
    //   };

    //   if (to.hash) {
    //     const el = await findEl(to.hash);
    //     if ("scrollBehavior" in document.documentElement.style) {
    //       return window.scrollTo({
    //         top: el.offsetTop,
    //         behavior: "smooth"
    //       });
    //     } else {
    //       return window.scrollTo(0, el.offsetTop);
    //     }
    //   }

    //   return {
    //     x: 0,
    //     y: 0
    //   };
    // }
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
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/tailwind.scss', lang: 'scss' },
    { src: '@/assets/style.scss', lang: 'scss' },
    '@/assets/fonts/CSI-icon-v2.3/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/myfilter',
    { src: '@/plugins/aos', ssr: false },
    { src: '~/plugins/vue-zoom-on-hover.js', ssr: false },
    { src: '~/plugins/vue-swiper.js', ssr: false },
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
  modules: ['vue-social-sharing/nuxt', '@nuxtjs/firebase', '@nuxtjs/sitemap'],
  firebase: {
    config: {
      apiKey: 'AIzaSyAxEz3yuTKF7dmGWNQGHzIz4sieAPFV6GY',
      authDomain: 'csi-web3-resources.firebaseapp.com',
      databaseURL: 'https://csi-web3-resources-default-rtdb.firebaseio.com',
      projectId: 'csi-web3-resources',
      storageBucket: 'csi-web3-resources.appspot.com',
      messagingSenderId: '569732863480',
      appId: '1:569732863480:web:bdfdea53ed5d7afbaaf20d',
      measurementId: 'G-HNE5XD0V2E',
    },
    services: {
      realtimeDb: true, // this is the realtime database service
    },
  },

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
      '/justice-courts/county-prosecution',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
  },
}
