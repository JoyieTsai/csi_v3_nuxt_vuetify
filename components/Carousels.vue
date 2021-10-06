<template>
  <div class="main-container tw-mx-auto">
    <carousel loop :per-page="perPage" pagination-enabled>
      <slide v-for="(item, i) in data" :key="i">
        <div class="tw-flex tw-justify-center">
          <v-img
            max-width="1440"
            :src="require('@/assets/images/sysfeatures/1x/' + item.img)"
            aspect-ratio="2.2"
            cover
          ></v-img>
        </div>
      </slide>
    </carousel>

    <div class="tw-mt-16 tw-grid md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5">
      <div
        v-for="(item, j) in data"
        :key="j"
        class="tw-bg-white shadow-1 tw-p-7 deco-vertical"
      >
        <div class="body-text-1 tw-font-semibold text-primary tw-mb-3">
          {{ item.title }}
        </div>
        <div class="tw-opacity-70">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  props: ['data'],
  data: () => ({
    perPage: 1,
    paginationEnabled: false,
  }),
}
</script>

<style lang="scss">
.ant-carousel {
  .slick-slide {
    text-align: center;
    overflow: hidden;
  }
  .slick-dots {
    li button {
      background: $dark-color;
      width: 8px;
      height: 8px;
      margin: 5px;
      border-radius: 50%;
    }

    li.slick-active button {
      background: $dark-color;
      width: 8px;
      height: 8px;
    }
  }

  .h-featureimg {
    max-height: 550px;
  }
}
</style>
