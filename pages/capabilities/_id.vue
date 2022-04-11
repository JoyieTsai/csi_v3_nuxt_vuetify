<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template v-slot:icon>
          <img
            class="tw-w-16 xl:tw-w-20 tw-mb-5"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:subtitle>{{ subtitle }}</template>
        <template v-slot:desc-heading>{{ descHeading }}</template>
        <template v-slot:desc-content>
          <div v-html="descContent"></div>
        </template>
      </Hero>
      <DiagramCard
        v-if="diagram"
        :data="diagram"
        class="tw-my-12 xl:tw-my-28"
      />
      <TableList v-if="lists" :data="lists" class="tw-py-5" />
      <BenefitsC
        v-if="benefits"
        :data="benefits"
        class="tw-my-12 xl:tw-my-28"
      />
      <Steps v-if="steps" :id="id" :data="steps" class="tw-my-12 xl:tw-my-28" />
      <NumberFeatures
        v-if="features"
        :data="features"
        class="tw-my-16 xl:tw-my-28"
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
import Products from '~/data/capabilities.json'

export default {
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
    benefits: Object,
    steps: Object,
    features: Object,
    extending: Object,
    relatedCapabilities: Object,
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
    this.getData(this.$route.params.id)
  },
  methods: {
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
