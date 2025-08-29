<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="product.coverImg" :brochure="product.brochure" :btns="btnGroup">
        <template v-slot:icon>
          <img class="tw-w-16 xl:tw-w-20" :src="require('~/assets/duotone/' + product.icon)" :alt="product.title" />
        </template>
        <template v-slot:title>
          <div v-html="product.title"></div>
        </template>
        <template v-slot:subtitle>
          <div v-html="product.subtitle"></div>
        </template>
        <template v-slot:desc-heading>
          <div v-html="product.descHeading"></div>
        </template>
        <template v-slot:desc-content>
          <div v-html="product.descContent"></div>
        </template>
      </Hero>
      <Highlights v-if="product.highlights" :data="product.highlights" :video="product.highlightVideo" :img="product.highlightImg"
        :capabilities="product.capabilities" class="tw-my-12 xl:tw-my-28" />
      <Capabilities v-if="product.capabilities" :data="product.capabilities" class="tw-my-14 xl:tw-my-28" />
      <SysFeatures v-if="product.sysFeatures" :tagline="product.sysTitle" :data="product.sysFeatures" class="tw-my-14 xl:tw-my-28" />
      <div v-if="product.extending" class="header-2 tw-text-center">
        Extending <span v-if="product.name">{{ product.name }}</span>
      </div>
      <Extendings v-if="product.extending" :data="product.extending" />
      <Partnerships v-if="product.id === 'fire-ems'" class="tw-my-12 xl:tw-my-28" />
      <RelatedProducts :data="product.relatedProducts" />
      <TheTeam :pid="product.id" :quote="product.quote" class="tw-my-12 xl:tw-my-28" />
      <RelatedNews :tag="product.tag" class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Products from '~/data/public-safety.json'

export default {
  data: () => ({
    btnGroup: true,
    category: 'public-safety',
  }),
  fetch({ params, redirect }) {
    const pro = Products.filter((res) => {
      return res.id === params.id
    })
    if (pro.length < 1) {
      redirect(404, '/404')
    }
  },
  head() {
    return {
      titleTemplate: '%s | ' + this.product.title,
      meta: [
        { hid: 'description', name: 'description', content: this.product.subtitle },
        { name: 'keywords', content: this.product.title },
        { property: 'og:title', content: this.product.title },
        { property: 'og:description', content: this.product.subtitle },
        {
          property: 'og:image:secure_url',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            this.product.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/public-safety/' + this.product.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.product.title },
        { property: 'twitter:description', content: this.product.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            this.product.coverimg,
        },
      ],
    }
  },
  computed: {
    ...mapState(['publicSafetyList', 'currentProduct']),
    product() {
      return this.currentProduct
    },
  },
  mounted() {
    this.$store.dispatch('getPublicSafetyByID', this.$route.params.id)
  },
  methods: {
    downloadFile(file) {
      const url = '../../brochure/' + file
      window.open(url, '_blank')
    },
  },
}
</script>
