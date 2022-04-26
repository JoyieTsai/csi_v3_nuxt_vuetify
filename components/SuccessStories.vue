<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="tw-mx-auto deco-hexagon-1">
    <div class="tw-flex tw-flex-wrap tw-justify-center tw-relative tw-z-10">
      <div class="header-2 lg:tw-w-60 tw-text-right">Success Stories</div>

      <!-- Story -->
      <div class="tw-px-5 md:tw-px-10 lg:tw-w-2/3 xl:tw-w-1/2">
        <div
          class="tw-shadow-lg bg-primary tw-cursor-pointer"
          @click.prevent="routerToArticle(getLatestArticles.id)"
        >
          <div>
            <v-img
              slot="cover"
              :src="'images/news/' + getLatestArticles.cover"
              aspect-ratio="2"
            ></v-img>
          </div>
          <div
            class="
              tw-text-lg
              md:tw-text-xl
              lg:tw-text-2xl
              tw-text-white tw-px-2
              md:tw-px-7
              tw-py-2
            "
          >
            {{ getLatestArticles.title }}
          </div>
        </div>

        <div
          class="
            tw-relative tw-shadow-lg tw-bg-white tw-w-full tw-p-6
            md:tw-p-10
          "
        >
          <div class="tw-mb-4">
            <img :src="require('~/assets/icons/icon-quotes.svg')" alt="" />
          </div>
          <div>
            <div v-for="(item, i) in getLatestArticles.testimonials" :key="i">
              <div class="lg:tw-text-xl">
                {{ item.body }}
              </div>
              <div class="lg:tw-text-lg text-primary tw-mt-5">
                {{ item.name }}
              </div>
              <div
                class="lg:tw-text-lg tw-opacity-60"
                v-html="item.agency"
              ></div>
            </div>
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
          tw-mx-5
          xl:tw-mx-0
        "
      >
        <div
          v-for="(art, i) in articles"
          :key="i"
          class="tw-flex-1 2xl:tw-w-96 xl:tw-w-72 tw-cursor-pointer zoomin"
          @click.prevent="routerToArticle(art.id)"
        >
          <v-img
            :src="'images/news/' + art.cover"
            class="tw-shadow-md tw-mb-2"
            aspect-ratio="1.9"
          ></v-img>
          <div class="tw-text-lg">{{ art.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapState(['articleList', 'tags', 'currentArticle']),
    articles() {
      return this.articleList.slice(0, 3)
    },
    getLatestArticles() {
      if (this.articleList.length > 0) {
        const filtered = this.articleList.filter((art) => art.type === 'story') // Get all story articles
        const finalArr = []
        filtered.forEach((element) => {
          if (element.testimonials) {
            finalArr.push(element)
          }
          return 0
        }) // Filtered has testimonial story
        return finalArr[0]
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
