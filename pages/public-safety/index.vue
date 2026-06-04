<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template #icon>
          <img
            class="tw-w-16 xl:tw-w-20"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template #title>{{ title }}</template>
        <template #subtitle>{{ subtitle }}</template>
        <template #desc-heading>{{ descHeading }}</template>
        <template #desc-content>{{ descContent }}</template>
      </Hero>
      <BenefitsA class="tw-my-12 xl:tw-my-28" :data="benefits" />
      <LazyTotalSolution
        v-if="show"
        class="tw-my-12 xl:tw-my-28"
        :solutions="solutions"
      />
      <LazySuccessStories v-if="show" class="tw-my-12 xl:tw-my-28" />
      <LazyContact v-if="show" />
    </v-main>
  </v-app>
</template>

<script>
import publicSafety from '~/data/public-safety-overview.json'

export default {
  data: () => ({
    show: false,
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 10) {
        this.show = true
      }
    },
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
