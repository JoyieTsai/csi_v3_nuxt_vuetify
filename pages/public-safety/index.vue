<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template v-slot:icon>
          <img
            class="tw-w-16 xl:tw-w-20"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:subtitle>{{ subtitle }}</template>
        <template v-slot:desc-heading>{{ descHeading }}</template>
        <template v-slot:desc-content>{{ descContent }}</template>
      </Hero>
      <BenefitsA class="tw-my-12 xl:tw-my-28" :data="benefits" />
      <TotalSolution class="tw-my-12 xl:tw-my-28" :solutions="solutions" />
      <SuccessStories class="tw-my-12 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import publicSafety from '~/data/public-safety-overview.json'

export default {
  data: () => ({
    btnGroup: true,
    category: 'public-safety',
    title: String,
    subtitle: String,
    icon: String,
    coverimg: String,
    descHeading: String,
    descContent: String,
    benefits: Object,
    solutions: Object,
  }),
  head() {
    return {
      titleTemplate: '%s | ' + this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.subtitle },
        { name: 'keywords', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.subtitle },
        {
          property: 'og:image:secure_url',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/public-safety',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/public-safety/' +
            this.coverimg,
        },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.title = publicSafety.title
      this.subtitle = publicSafety.subtitle
      this.icon = publicSafety.icon
      this.coverimg = publicSafety.coverImg
      this.descHeading = publicSafety.descHeading
      this.descContent = publicSafety.descContent
      this.benefits = publicSafety.benefits
      this.solutions = publicSafety.solutions
    },
  },
}
</script>
