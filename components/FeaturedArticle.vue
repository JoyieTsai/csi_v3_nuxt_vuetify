<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto">
    <div class="2xl:tw-mx-20 tw-relative">
      <div
        class="header-2 tw-w-full lg:tw-w-72 lg:tw-ml-24 xl:tw-ml-52 2xl:tw-ml-60 tw-text-center lg:tw-text-right"
      >
        Featured Article
      </div>
      <!-- Story -->
      <div
        class="tw-relative lg:tw-absolute tw-shadow-lg tw-w-full lg:tw-w-7/12 tw-right-0 tw-top-0 tw-z-0 bg-primary tw-cursor-pointer"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
        @click.prevent="routerToArticle(getLatestArticles.id)"
      >
        <div>
          <img :src="'images/news/' + getLatestArticles.cover" alt="" />
        </div>
        <div
          class="tw-pl-4 tw-pr-4 lg:tw-pl-20 tw-pt-3 tw-pb-4 tw-font-semibold tw-text-sm md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl tw-text-white"
        >
          {{ getLatestArticles.title }}
        </div>
      </div>
      <!-- Testimonial -->
      <div
        class="tw-relative tw-shadow-lg tw-bg-white w-quotes tw-px-5 lg:tw-px-10 tw-pt-10 tw-pb-5 tw-z-10"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <carousel
          loop
          :per-page="perPage"
          pagination-enabled
          :navigate-to="currentIndex"
          pagination-active-color="#0d63ba"
        >
          <slide
            v-for="(item, i) in getLatestArticles.testimonials"
            :key="i"
            class="tw-self-center"
          >
            <div class="tw-flex tw-flex-col tw-self-center md:tw-mx-5">
              <div
                class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-opacity-70 tw-mt-5 lg:tw-mt-0"
              >
                {{ item.body }}
              </div>
              <div
                class="tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5"
              >
                {{ item.name }}
              </div>
              <div
                class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
                v-html="item.agency"
              ></div>
            </div>
          </slide>
        </carousel>
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
    ...mapState(['articleList']),
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
