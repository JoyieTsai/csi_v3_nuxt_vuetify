<template>
  <div class="tw-mx-auto deco-hexagon-1">
    <div class="tw-flex tw-flex-wrap tw-justify-center tw-relative tw-z-10">
      <div class="header-2 lg:tw-w-60 tw-text-right">Success Stories</div>

      <!-- Story -->
      <div class="tw-px-5 md:tw-px-10 lg:tw-w-2/3 xl:tw-w-1/2">
        <div
          class="tw-shadow-lg bg-primary tw-cursor-pointer"
          @click.prevent="routerToArticle(latestStory.id)"
        >
          <div>
            <v-img
              slot="cover"
              :src="'images/news/' + latestStory.cover"
              aspect-ratio="2"
            ></v-img>
          </div>
          <div class="body-text-1 tw-text-white tw-px-2 md:tw-px-7 tw-py-2">
            {{ latestStory.title }}
          </div>
        </div>

        <div class="tw-relative tw-shadow-lg tw-bg-white tw-w-full tw-p-7">
          <div class="tw-mb-4">
            <img :src="require('~/assets/icons/icon-quotes.svg')" alt="" />
          </div>
          <div class="tw-mx-8">
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              height="280"
            >
              <v-carousel-item>
                <div
                  v-for="(item, i) in latestStory.testimonials"
                  :key="i"
                  class="tw-mb-8 tw-text-left"
                >
                  <div class="body-text-2">
                    {{ item.body }}
                  </div>
                  <div class="body-text-3 text-primary tw-mt-5">
                    {{ item.author }}
                  </div>
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div
                    class="body-text-3 tw-opacity-60"
                    v-html="item.position"
                  ></div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>

      <!-- Related news -->
      <div
        class="
          tw-grid
          md:tw-grid-cols-3
          xl:tw-grid-cols-1
          tw-gap-8 tw-pt-10
          xl:tw-pt-0
        "
      >
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="tw-flex-1 2xl:tw-w-96 xl:tw-w-72 tw-cursor-pointer zoomin"
          @click.prevent="routerToArticle(article.id)"
        >
          <v-img
            :src="'images/news/' + article.cover"
            class="tw-shadow-md tw-mb-2"
            aspect-ratio="1.9"
          ></v-img>
          <div class="body-text-3">{{ article.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '~/data/articles.json'
import latestArticle from '~/data/latestArticle.json'

export default {
  data: () => ({
    articles: '',
    latestStory: latestArticle,
  }),
  mounted() {
    this.getLatestArticles()
  },
  methods: {
    getLatestArticles() {
      const sortArr = Articles.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
      const aid = this.latestStory.id
      const filterArr = sortArr.filter(function (item) {
        return item.id !== aid
      })
      this.articles = filterArr.slice(0, 3)
    },
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
