<template>
  <div class="main-container tw-mx-auto">
    <div
      v-if="title !== 'false'"
      class="tw-text-2xl lg:tw-text-4xl text-dark tw-font-bold tw-text-center"
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
        v-for="(article, i) in getRelatedNews"
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
          class="text-primary tw-text-sm sm:tw-text-base"
        >
          Success Stories
        </div>
        <div
          v-else-if="article.type === 'news'"
          class="text-secondary tw-text-sm sm:tw-text-base"
        >
          News
        </div>
        <div v-else class="text-grey tw-text-sm sm:tw-text-base">Event</div>
        <div class="tw-text-sm sm:tw-text-base lg:tw-text-lg">
          {{ article.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Articles from '~/data/articles.json'

export default {
  props: ['title', 'pid'],
  data: () => ({
    articles: '',
  }),
  computed: {
    ...mapState(['articleList', 'tags', 'currentArticle']),
    getRelatedNews() {
      const arr = this.id
      const resultArr = []

      this.articleList.forEach((item) => {
        if (item.tags) {
          item.tags.forEach((res) => {
            if (res.name === arr) {
              resultArr.push(item)
            }
          })
        }
      })

      const finalArr = resultArr.reduce((acc, current) => {
        const x = acc.find((item) => item.id === current.id)
        if (!x) {
          return acc.concat([current])
        } else {
          return acc
        }
      }, [])

      if (finalArr.length > 5) {
        finalArr.sort((a, b) => {
          if (a.rating === b.rating) {
            if (new Date(a.date) > new Date(b.date)) {
              return 1
            }
          } else if (a.rating > b.rating) {
            return 1
          } else {
            return -1
          }
          return -1
        })
        return finalArr.slice(0, 4)
      } else {
        const latestNews = this.articleList
        return latestNews.slice(0, 4)
      }
    },
  },
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
