<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero
        v-if="product.coverImg"
        :category="category"
        :coverimg="product.coverImg"
        :brochure="product.brochure"
        :btns="btnGroup"
      >
        <template #icon>
          <img
            class="tw-w-16 xl:tw-w-20"
            :src="require('~/assets/duotone/' + product.icon)"
            :alt="product.title"
          />
        </template>
        <template #title>
          <div v-html="superscriptTM(product.title)"></div>
        </template>
        <template #subtitle>
          <div v-html="superscriptTM(product.subtitle)"></div>
        </template>
        <template #desc-heading>
          <div v-html="superscriptTM(product.descHeading)"></div>
        </template>
        <template #desc-content>
          <div v-html="superscriptTM(product.descContent)"></div>
        </template>
        <template #desc-logos>
          <div
            v-for="(logo, i) in product.descLogos"
            :key="i"
            class="d-flex tw-items-center tw-w-32 tw-h-32 tw-mx-2 tw-mt-3"
          >
            <img :src="`images/${logo}`" alt="logo" />
          </div>
        </template>
      </Hero>
      <Highlights
        v-if="product.highlights"
        :data="product.highlights"
        :video="product.highlightVideo"
        :img="product.highlightImg"
        :capabilities="product.capabilities"
        class="tw-my-12 xl:tw-my-28"
      />
      <Capabilities
        v-if="product.capabilities"
        :data="product.capabilities"
        class="tw-my-14 xl:tw-my-28"
      />
      <SysFeatures
        v-if="product.sysFeatures"
        :tagline="product.sysTitle"
        :data="product.sysFeatures"
        class="tw-my-14 xl:tw-my-28"
      />
      <div v-if="product.extending" class="header-2 tw-text-center">
        Extending <span v-if="product.name">{{ product.name }}</span>
      </div>
      <Extendings v-if="product.extending" :data="product.extending" />
      <Partnerships
        v-if="product.id === 'fire-ems'"
        class="tw-my-12 xl:tw-my-28"
      />
      <RelatedProducts :data="product.relatedProducts" />
      <LazyTheTeam
        v-if="product.id"
        :pid="product.id"
        :quote="product.quote"
        class="tw-my-12 xl:tw-my-28"
      />
      <RelatedNews :tag="product.tag" class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Products from '~/data/public-safety.json'
import { superscriptTM } from '~/plugins/myfilter.js'
export default {
  asyncData({ params, redirect, payload }) {
    // Use payload from generate routes if available
    if (payload) {
      return { pageData: payload }
    }

    // Fallback for dev mode - you'll still need the import for this
    const pro = Products.filter((res) => {
      return res.id === params.id
    })
    if (pro.length < 1) {
      redirect(404, '/404')
    }

    return { pageData: pro[0] }
  },
  data: () => ({
    btnGroup: true,
    category: 'public-safety',
  }),
  head() {
    const product = this.pageData || this.currentProduct
    if (!product) {
      return {
        titleTemplate: '%s',
        meta: [],
      }
    }

    return {
      titleTemplate: '%s | ' + product.title,
      meta: [
        { hid: 'description', name: 'description', content: product.subtitle },
        { name: 'keywords', content: product.title },
        { property: 'og:title', content: product.title },
        { property: 'og:description', content: product.subtitle },
        {
          property: 'og:image:secure_url',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            product.coverImg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/public-safety/' + product.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: product.title },
        { property: 'twitter:description', content: product.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            product.coverImg,
        },
      ],
    }
  },
  computed: {
    ...mapState(['publicSafetyList', 'currentProduct']),
    product() {
      return (
        this.pageData ||
        (Array.isArray(this.currentProduct) ? {} : this.currentProduct) ||
        {}
      )
    },
  },
  mounted() {
    this.$store.dispatch('getPublicSafetyByID', this.$route.params.id)
  },
  methods: {
    downloadFile(file) {
      const url = '../../brochure/' + file
      if (process.client) {
        window.open(url, '_blank')
      }
    },
    superscriptTM,
  },
}
</script>
