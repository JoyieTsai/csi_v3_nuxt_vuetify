<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero
        :category="category"
        :coverimg="coverimg"
        :brochure="brochure"
        :btns="btnGroup"
      >
        <template #icon>
          <img
            class="tw-w-16 xl:tw-w-20"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template #title>
          <div v-html="superscriptTM(title)"></div>
        </template>
        <template #subtitle>
          <div v-html="superscriptTM(subtitle)"></div>
        </template>
        <template #desc-heading>
          <div v-html="superscriptTM(descHeading)"></div>
        </template>
        <template #desc-content>
          <div v-html="superscriptTM(descContent)"></div>
        </template>
      </Hero>
      <Highlights
        v-if="highlights"
        :data="highlights"
        :video="highlightVideo"
        :img="highlightImg"
        :capabilities="capabilities"
        class="tw-my-12 xl:tw-my-28"
      />
      <Capabilities
        v-if="capabilities"
        :data="capabilities"
        class="tw-my-14 xl:tw-my-28"
      />
      <Categories
        v-if="categories"
        :data="categories"
        class="tw-my-14 xl:tw-my-28"
      />
      <SysFeatures v-if="sysFeatures" :tagline="sysTitle" :data="sysFeatures" />
      <Carousels
        v-if="carousels"
        :data="carousels"
        class="tw-my-12 xl:tw-my-28"
      />
      <div v-if="extending" class="header-2 tw-text-center">Interfaces</div>
      <Extendings v-if="extending" :data="extending" />
      <RelatedProducts :data="relatedProducts" />
      <TheTeam :pid="id" :quote="quote" class="tw-my-12 xl:tw-my-28" />
      <RelatedNews :tag="tag" class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import Products from '~/data/justice-courts.json'
import { API } from '~/config/api'
import { superscriptTM } from '~/plugins/myfilter.js'

const normalizeProduct = (product) => ({
  id: product.id,
  tag: product.tag,
  title: product.title,
  subtitle: product.subtitle,
  icon: product.icon,
  coverimg: product.coverImg,
  brochure: product.brochure,
  descHeading: product.descHeading,
  descContent: product.descContent,
  highlightVideo: product.highlightVideo,
  highlightImg: product.highlightImg,
  highlights: product.highlights,
  capabilities: product.capabilities,
  categories: product.categories,
  sysTitle: product.sysTitle,
  sysFeatures: product.sysFeatures,
  carousels: product.carousels,
  extending: product.extending,
  relatedProducts: product.relatedProducts,
  quote: product.quote,
})

const findLocalProduct = (id) => Products.find((product) => product.id === id)

const fetchProduct = async (id) => {
  try {
    const api = await axios.get(API.justiceCourts)
    return api.data.find((product) => product.id === id)
  } catch {
    return null
  }
}

export default {
  async asyncData({ params, redirect, payload }) {
    const product =
      payload || (await fetchProduct(params.id)) || findLocalProduct(params.id)

    if (!product) {
      redirect(404, '/404')
      return {}
    }

    return normalizeProduct(product)
  },
  data: () => ({
    btnGroup: true,
    category: 'justice-courts',
    id: String,
    tag: String,
    title: String,
    subtitle: String,
    icon: String,
    coverimg: String,
    brochure: String,
    descHeading: String,
    descContent: String,
    sysTitle: String,
    highlightVideo: String,
    highlightImg: String,
    highlights: Array,
    capabilities: Array,
    categories: Array,
    sysFeatures: Array,
    carousels: Array,
    extending: Array,
    relatedProducts: Array,
    quote: String,
  }),
  head() {
    return {
      titleTemplate: '%s | ' + this.title,
      meta: [
        { name: 'description', content: this.subtitle },
        { name: 'keywords', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.subtitle },
        {
          property: 'og:image:secure_url',
          content:
            'https://www.csitech.com/images/covers/justice-courts/' +
            this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/justice-courts/' + this.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/justice-courts/' +
            this.coverimg,
        },
      ],
    }
  },
  created() {
    if (!this.id) {
      this.getData(this.$route.params.id)
    }
  },
  methods: {
    getData(id) {
      for (let i = 0; i < Products.length; i++) {
        if (id && id === Products[i].id) {
          this.id = Products[i].id
          this.tag = Products[i].tag
          this.title = Products[i].title
          this.subtitle = Products[i].subtitle
          this.icon = Products[i].icon
          this.coverimg = Products[i].coverImg
          this.brochure = Products[i].brochure
          this.descHeading = Products[i].descHeading
          this.descContent = Products[i].descContent
          this.highlightVideo = Products[i].highlightVideo
          this.highlightImg = Products[i].highlightImg
          this.highlights = Products[i].highlights
          this.capabilities = Products[i].capabilities
          this.categories = Products[i].categories
          this.sysTitle = Products[i].sysTitle
          this.sysFeatures = Products[i].sysFeatures
          this.carousels = Products[i].carousels
          this.extending = Products[i].extending
          this.relatedProducts = Products[i].relatedProducts
          this.quote = Products[i].quote
        }
      }
    },
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
