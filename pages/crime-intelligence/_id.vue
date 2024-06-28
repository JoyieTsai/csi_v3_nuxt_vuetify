<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :brochure="brochure" :btns="btnGroup">
        <template v-slot:icon>
          <img class="tw-w-16 xl:tw-w-20" :src="require('~/assets/duotone/' + icon)" :alt="title" />
        </template>
        <template v-slot:title>
          <div v-html="title"></div>
        </template>
        <template v-slot:subtitle>
          <div v-html="subtitle"></div>
        </template>
        <template v-slot:desc-heading>
          <div v-html="descHeading"></div>
        </template>
        <template v-slot:desc-content>
          <div v-html="descContent"></div>
        </template>
      </Hero>
      <Highlights v-if="highlights" :data="highlights" :video="highlightVideo" :img="highlightImg" class="tw-my-12 xl:tw-my-28" />
      <SysFeatures v-if="sysFeatures" :tagline="sysTitle" :data="sysFeatures" />
      <BenefitsB v-if="benefits" :data="benefits" class="tw-my-12 xl:tw-my-28" />
      <RelatedProducts :data="relatedProducts" />
      <TheTeam :pid="id" :quote="quote" class="tw-my-12 xl:tw-my-28" />
      <RelatedNews :tag="tag" class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Products from '~/data/crime-intelligence.json'

export default {
  data: () => ({
    btnGroup: true,
    category: 'crime-intelligence',
    id: String,
    tag: String,
    title: String,
    subtitle: String,
    icon: String,
    coverimg: String,
    brochure: String,
    descHeading: String,
    descContent: String,
    highlightVideo: String,
    highlightImg: String,
    highlights: Array,
    sysTitle: String,
    sysFeatures: Array,
    benefits: Array,
    relatedProducts: Array,
    quote: String,
  }),
  fetch({ params, redirect }) {
    const product = Products.filter((res) => {
      return res.id === params.id
    })
    if (product.length < 1) {
      redirect(404, '/404')
    }
  },
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
            'https://www.csitech.com/images/covers/crime-intelligence/' +
            this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/crime-intelligence/' + this.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/crime-intelligence/' +
            this.coverimg,
        },
      ],
    }
  },
  created() {
    this.getData(this.$route.params.id)
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
          this.sysTitle = Products[i].sysTitle
          this.sysFeatures = Products[i].sysFeatures
          this.benefits = Products[i].benefits
          this.relatedProducts = Products[i].relatedProducts
          this.quote = Products[i].quote
          return
        }
      }
    },
    downloadFile(file) {
      const url = '../../brochure/' + file
      window.open(url, '_blank')
    },
  },
}
</script>
