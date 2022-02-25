<template>
  <div class="main-container tw-mx-auto">
    <div class="2xl:tw-mx-20 tw-relative">
      <div
        class="
          header-2
          tw-w-full
          lg:tw-w-72 lg:tw-ml-24
          xl:tw-ml-52
          2xl:tw-ml-60
          tw-text-center
          lg:tw-text-right
        "
      >
        Featured Article
      </div>
      <!-- Story -->
      <div
        class="
          tw-relative
          lg:tw-absolute
          tw-shadow-lg tw-w-full
          lg:tw-w-7/12
          tw-right-0 tw-top-0 tw-z-0
          bg-primary
          tw-cursor-pointer
        "
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
        @click.prevent="routerToArticle(latestStory.id)"
      >
        <div>
          <img :src="'images/news/' + latestStory.cover" alt="" />
        </div>
        <div
          class="
            tw-pl-4 tw-pr-4
            lg:tw-pl-20
            tw-pt-3 tw-pb-4 tw-font-semibold tw-text-sm
            md:tw-text-lg
            lg:tw-text-xl
            xl:tw-text-2xl
            tw-text-white
          "
        >
          {{ latestStory.title }}
        </div>
      </div>
      <!-- Testimonial -->
      <div
        class="tw-relative tw-shadow-lg tw-bg-white w-quotes tw-p-10 tw-z-10"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="xl:tw-mx-5">
          <div v-for="(item, i) in latestStory.testimonials" :key="i">
            <div class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-opacity-70">
              {{ item.body }}
            </div>
            <div
              class="
                tw-text-sm
                md:tw-text-base
                lg:tw-text-lg
                tw-font-semibold tw-mt-5
              "
            >
              {{ item.author }}
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div
              class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
              v-html="item.position"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- News -->
    <div
      class="
        tw-grid tw-gap-6
        xl:tw-gap-8
        sm:tw-grid-cols-2
        xl:tw-grid-cols-4
        tw-mt-16
      "
    >
      <div
        v-for="(article, i) in articles"
        :key="i"
        class="tw-flex-1 tw-cursor-pointer"
        @click.prevent="routerToArticle(article.id)"
      >
        <v-img
          :src="'images/news/' + article.cover"
          aspect-ratio="2"
          class="
            tw-shadow-md
            tw-mb-2
            tw-transition
            tw-duration-500
            tw-ease-in-out
            tw-transform
            hover:tw-scale-105
            tw-cursor-pointer
          "
        ></v-img>
        <div
          v-if="article.type === 'story'"
          class="text-primary tw-text-sm md:tw-text-base lg:tw-text-lg"
        >
          Success Stories
        </div>
        <div
          v-else-if="article.type === 'news'"
          class="text-secondary tw-text-sm md:tw-text-base lg:tw-text-lg"
        >
          News
        </div>
        <div v-else class="text-grey tw-text-sm md:tw-text-base lg:tw-text-lg">
          Event
        </div>
        <div class="tw-text-sm md:tw-text-base lg:tw-text-lg">
          {{ article.title }}
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
      this.articles = filterArr.slice(0, 4)
    },
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
