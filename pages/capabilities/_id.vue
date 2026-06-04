<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template #icon>
          <img
            class="tw-w-16 xl:tw-w-20 tw-mb-5"
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
      <DiagramCard
        v-if="diagram"
        :data="diagram"
        class="tw-my-12 xl:tw-my-28"
      />
      <TableList v-if="lists" :data="lists" class="tw-py-5" />
      <Soc v-if="soc" :data="soc" class="tw-my-12 xl:tw-my-28" />
      <BenefitsC
        v-if="benefits"
        :data="benefits"
        class="tw-my-12 xl:tw-my-28"
      />
      <Steps v-if="steps" :id="id" :data="steps" class="tw-my-12 xl:tw-my-28" />
      <NumberFeatures
        v-if="features"
        :data="features"
        class="tw-my-14 xl:tw-my-28"
      />
      <div v-if="extending" class="header-2 tw-text-center">
        Featured Interfaces
      </div>
      <Extendings v-if="extending" :data="extending" />
      <RelatedCapabilities
        v-if="relatedCapabilities"
        :data="relatedCapabilities"
        class="tw-my-12 xl:tw-my-28"
      />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import Products from '~/data/capabilities.json'
import { API } from '~/config/api'
import { superscriptTM } from '~/plugins/myfilter.js'

const normalizeProduct = (product) => ({
  id: product.id,
  title: product.title,
  subtitle: product.subtitle,
  icon: product.icon,
  coverimg: product.coverImg,
  descHeading: product.descHeading,
  descContent: product.descContent,
  diagram: product.diagram,
  lists: product.lists,
  soc: product.soc,
  benefits: product.benefits,
  steps: product.steps,
  features: product.features,
  extending: product.extending,
  relatedCapabilities: product.relatedCapabilities,
})

const findLocalProduct = (id) => Products.find((product) => product.id === id)

const fetchProduct = async (id) => {
  try {
    const api = await axios.get(API.capabilities)
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
    category: 'capabilities',
    id: String,
    title: String,
    subtitle: String,
    icon: String,
    coverimg: String,
    descHeading: String,
    descContent: String,
    diagram: Object,
    lists: Object,
    soc: Object,
    benefits: Object,
    steps: Object,
    features: Object,
    extending: Object,
    relatedCapabilities: Object,
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
            'https://www.csitech.com/images/covers/capabilities/' +
            this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/capabilities/' + this.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/capabilities/' +
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
    superscriptTM,
    getData(id) {
      for (let i = 0; i < Products.length; i++) {
        if (id && id === Products[i].id) {
          this.id = Products[i].id
          this.title = Products[i].title
          this.subtitle = Products[i].subtitle
          this.icon = Products[i].icon
          this.coverimg = Products[i].coverImg
          this.descHeading = Products[i].descHeading
          this.descContent = Products[i].descContent
          this.diagram = Products[i].diagram
          this.lists = Products[i].lists
          this.soc = Products[i].soc
          this.benefits = Products[i].benefits
          this.steps = Products[i].steps
          this.features = Products[i].features
          this.extending = Products[i].extending
          this.relatedCapabilities = Products[i].relatedCapabilities
          return
        }
      }
    },
  },
}
</script>
