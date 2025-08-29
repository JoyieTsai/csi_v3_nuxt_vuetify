<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="tw-mx-auto deco-hexagon-1">
    <div class="tw-flex tw-flex-wrap tw-justify-center tw-relative tw-z-10">
      <div class="header-2 lg:tw-w-60 tw-text-right">Featured Article</div>

      <!-- Story -->
      <div class="tw-px-5 md:tw-px-10 lg:tw-w-2/3 xl:tw-w-1/2">
        <div class="tw-shadow-lg bg-primary tw-cursor-pointer" @click.prevent="routerToArticle(getLatestArticles.id)">
          <div>
            <v-img slot="cover" :src="'images/news/' + getLatestArticles.cover" aspect-ratio="2"></v-img>
          </div>
          <div class="tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-text-white tw-px-2 md:tw-px-7 tw-py-2" v-html="getLatestArticles.title"> </div>
        </div>

        <div class="tw-relative tw-shadow-lg tw-bg-white tw-w-full tw-px-5 lg:tw-px-10 tw-pt-10 tw-pb-5">
          <div class="tw-mb-4">
            <img :src="require('~/assets/icons/icon-quotes.svg')" alt="" />
          </div>
          <carousel loop :per-page="perPage" pagination-enabled :navigate-to="currentIndex" pagination-active-color="#0d63ba">
            <slide v-for="(item, i) in getLatestArticles.testimonials" :key="i">
              <div class="tw-flex tw-flex-col tw-self-center">
                <div class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-opacity-70 tw-mt-5 lg:tw-mt-0">
                  {{ item.body }}
                </div>
                <div class="tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5">
                  {{ item.name }}
                </div>
                <div class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60" v-html="item.agency"></div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>

      <!-- Related news -->
      <div class="tw-grid md:tw-grid-cols-3 xl:tw-grid-cols-1 tw-gap-8 tw-pt-10 xl:tw-pt-0 tw-mx-5 xl:tw-mx-0">
        <div v-for="(art, i) in articles" :key="i" class="tw-flex-1 2xl:tw-w-96 xl:tw-w-72 tw-cursor-pointer zoomin"
          @click.prevent="routerToArticle(art.id)">
          <v-img :src="'images/news/' + art.cover" class="tw-shadow-md tw-mb-2" aspect-ratio="1.9"></v-img>
          <div class="tw-text-lg" v-html="art.title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentIndex: 0,
    perPage: 1,
    paginationEnabled: false,
    nextLabel: "<img src='images/chevron-right.svg' />",
    prevLabel: "<img src='images/chevron-left.svg' />",
  }),
  computed: {
    ...mapState(['articleList', 'tags', 'currentArticle']),
    articles() {
      const allNewsNoRating0 = this.articleList.filter(
        (item) => item.rating !== 0
      ) // Remove rating is 0's article

      const sortedNews = allNewsNoRating0.sort((a, b) => {
        return a.rating - b.rating
      })
      return sortedNews.slice(0, 3)
    },
    getLatestArticles() {
      if (this.articleList) {
        const filtered = this.articleList.find((art) => art.rating === 0) // Get the latest story
        return filtered
      }
      return 0
    },
  },
  methods: {
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
