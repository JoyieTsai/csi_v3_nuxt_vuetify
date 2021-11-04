<template>
  <div class="main-container tw-mx-auto">
    <div
      class="
        tw-text-2xl
        lg:tw-text-4xl
        text-dark
        tw-font-semiboldtw-text-center
      "
    >
      Related Articles
    </div>
    <div
      class="
        tw-grid tw-gap-8
        sm:tw-grid-cols-2
        xl:tw-grid-cols-4
        tw-mt-8
        xl:tw-mt-16
      "
    >
      <div
        v-for="(article, i) in articles"
        :key="i"
        class="tw-flex-1 tw-cursor-pointer"
        @click.prevent="routerToArticle(article.id)"
      >
        <v-img
          aspect-ratio="2"
          :src="'images/news/' + article.cover"
          class="
            tw-shadow-md
            tw-mb-2
            tw-transition
            tw-duration-500
            tw-ease-in-out
            tw-transform
            hover:tw-scale-105
          "
        ></v-img>
        <div
          v-if="article.type === 'story'"
          class="text-primary tw-text-base tw-my-1"
        >
          Success Stories
        </div>
        <div
          v-else-if="article.type === 'news'"
          class="text-secondary tw-text-base"
        >
          News
        </div>
        <div v-else class="text-grey tw-text-base">Event</div>
        <div class="tw-text-base lg:tw-text-lg">{{ article.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '~/data/articles.json'

export default {
  props: ['pid'],
  data: () => ({
    articles: '',
  }),
  mounted() {
    this.getLatestArticles()
  },
  methods: {
    getLatestArticles() {
      const sortArr = Articles.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
      this.articles = sortArr.slice(0, 4)
    },
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
