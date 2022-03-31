<template>
  <div class="main-container tw-mx-auto">
    <carousel
      loop
      :per-page="perPage"
      pagination-enabled
      :navigateTo="currentIndex"
      paginationActiveColor="#0d63ba"
    >
      <slide v-for="(item, i) in data" :key="i">
        <div class="tw-flex tw-justify-center">
          <v-img
            max-width="1280"
            :src="'images/sysfeatures/1x/' + item.img"
            aspect-ratio="2"
            cover
          ></v-img>
        </div>
      </slide>
    </carousel>

    <div class="tw-mt-16 tw-grid md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5">
      <div v-for="(item, j) in data" :key="j">
        <v-card
          tile
          class="
            tw-h-full tw-px-3
            deco-vertical
            zoomin
            tw-cursor-pointer tw-shadow-lg
          "
          @mouseover="changeIndex(j)"
        >
          <v-card-text class="tw-h-full">
            <div
              class="
                tw-text-xl
                xl:tw-text-2xl
                tw-font-semibold
                text-primary
                tw-mb-3
              "
            >
              {{ item.title }}
            </div>
            <div>{{ item.desc }}</div>
          </v-card-text>
        </v-card>
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
  data() {
    return {
      currentIndex: 0,
      perPage: 1,
      paginationEnabled: false,
      nextLabel: "<img src='images/chevron-right.svg' />",
      prevLabel: "<img src='images/chevron-left.svg' />",
    }
  },
  methods: {
    changeIndex(num) {
      this.currentIndex = num
    },
  },
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
