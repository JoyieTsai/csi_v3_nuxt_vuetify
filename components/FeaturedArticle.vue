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
  </div>
</template>

<script>
import latestArticle from '~/data/latestArticle.json'

export default {
  data: () => ({
    latestStory: latestArticle,
  }),
  methods: {
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
  },
}
</script>
