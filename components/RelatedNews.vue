<template>
  <div class="main-container tw-mx-auto">
    <div
      v-if="title !== 'false'"
      class="tw-text-2xl lg:tw-text-4xl text-dark tw-font-bold tw-text-center"
    >
      Related Articles
    </div>
    <div
      class="tw-grid tw-gap-4 md:tw-gap-8 tw-grid-cols-2 xl:tw-grid-cols-4 tw-mt-8 xl:tw-mt-16"
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
          class="tw-shadow-md tw-mb-2 tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105"
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
        <div class="tw-text-sm sm:tw-text-base lg:tw-text-lg tw-font-medium">
          {{ article.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['title', 'tag', 'aid'],
  data: () => ({}),
  computed: {
    ...mapState(['articleList', 'tags', 'currentArticle']),
    article() {
      return this.currentArticle
    },
    getRelatedNews() {
      const arr = this.article.tags // Get current article's tags
      const resultArr = []
      const allNews = this.articleList.filter((art) => art.rating >= 0) // All article
      const sortedNews = allNews.sort((a, b) => {
        return a.rating - b.rating
      })

      const allNewsNoRating0 = this.articleList.filter(
        (item) => item.rating !== 0
      )
      const sortedNewsNoRating0 = allNewsNoRating0.sort((a, b) => {
        return a.rating - b.rating
      })

      // sort by a product, tag is from the product
      if (this.tag) {
        const filtered = allNews.filter((art) => art.tags)

        filtered.forEach((item) => {
          item.tags.forEach((res) => {
            if (res.name === this.tag) {
              resultArr.push(item)
            }
          })
        })
        const finalArr = [...new Set(resultArr)]

        finalArr.sort((a, b) => {
          return a.rating - b.rating
        })

        if (finalArr.length >= 4) {
          return finalArr.slice(0, 4)
        } else {
          return finalArr.concat(sortedNews.slice(0, 4 - finalArr.length))
        }
      } else if (this.aid) {
        // sort by a article
        const filtered = allNews.filter((art) => art.tags) // get all articles with tags
        const filteredDupliicate = filtered.filter(
          (item) => item.id !== this.article.id
        ) // remove duplicate article

        if (arr) {
          // If have tags
          arr.forEach((tag) => {
            filteredDupliicate.forEach((item) => {
              if (item.id !== this.article.id) {
                item.tags.forEach((res) => {
                  if (res.name === tag.name) {
                    resultArr.push(item)
                  }
                })
              }
            })
          })
          const finalArr = [...new Set(resultArr)]

          finalArr.sort((a, b) => {
            return a.rating - b.rating
          })

          if (finalArr.length >= 4) {
            return finalArr.slice(0, 4)
          } else {
            const mixArr = [...new Set(finalArr.concat(sortedNews))]
            return mixArr.slice(0, 4)
          }
        } else {
          // No tags, show the latest articles without rating 0
          return sortedNews.slice(0, 4)
        }
      } else {
        // sort by rating and date but no rating 0's article
        return sortedNewsNoRating0.slice(0, 4)
      }
    },
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
