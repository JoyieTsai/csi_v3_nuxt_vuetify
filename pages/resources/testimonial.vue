<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section lg tw-items-center"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
          backgroundPosition: `center`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
              <div class="tw-text-2xl">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div class="main-container tw-mx-auto tw-mt-10 xl:tw-mt-20">
        <div class="tw-inline-block">
          <div class="flex-group">
            <div
              v-for="(item, index) in testimonials"
              :key="index"
              class="flex-group-card"
            >
              <div
                v-if="testimonials.length <= 9"
                :class="[
                  index % 2 == 0 ? 'highlight' : '',
                  'tw-mb-10 tw-mx-2 tw-p-5 md:tw-p-8 xl:tw-p-10 quote-card',
                ]"
              >
                <div class="tw-text-sm md:tw-text-base xl:tw-text-lg">
                  {{ item.quote }}
                </div>
                <div class="middle-divider tw-mt-4">
                  <div
                    class="tw-z-10 tw-w-16 tw-h-16 tw-rounded-full tw-bg-no-repeat tw-bg-contain"
                    :style="
                      'background-image: url(images/agency/' + item.logo + ')'
                    "
                  ></div>
                </div>
                <div
                  class="tw-text-center tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5"
                >
                  {{ item.author }}
                </div>
                <div
                  class="tw-text-center tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
                >
                  {{ item.agency }}
                </div>
              </div>
              <div
                v-else
                :class="[
                  item.highlight ? 'highlight' : '',
                  'tw-mb-10 tw-mx-2 tw-p-5 md:tw-p-8 xl:tw-p-10 quote-card',
                ]"
              >
                <div class="tw-text-sm md:tw-text-base xl:tw-text-lg">
                  {{ item.quote }}
                </div>
                <div class="middle-divider tw-mt-4">
                  <div
                    class="tw-z-10 tw-w-16 tw-h-16 tw-rounded-full tw-bg-no-repeat tw-bg-contain"
                    :style="
                      'background-image: url(images/agency/' + item.logo + ')'
                    "
                  ></div>
                </div>
                <div
                  class="tw-text-center tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5"
                >
                  {{ item.author }}
                </div>
                <div
                  class="tw-text-center tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
                >
                  {{ item.agency }}
                </div>
              </div>
            </div>
            <div v-show="showAll" class="tw-h-80"></div>
          </div>
          <div class="tw-text-center">
            <v-btn outlined color="primary" @click="toggleAll()">
              <span v-if="showAll">
                <v-icon>mdi-chevron-up</v-icon> See More
              </span>
              <span v-else> <v-icon>mdi-chevron-down</v-icon> See More </span>
            </v-btn>
          </div>
        </div>
      </div>

      <FeaturedArticle class="tw-mt-14 xl:tw-my-28" />
    </v-main>
  </v-app>
</template>

<script>
import TMS from '~/data/testimonials.json'

export default {
  data: () => ({
    showAll: false,
    activeKey: 0,
    category: 'page',
    title: 'Testimonials',
    subtitle: 'See What Clients Say',
    coverimg: 'testimonial.jpg',
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
  computed: {
    testimonials() {
      const column1 = TMS.slice(0, 8)
      const column1All = TMS
      const column2 = []
      const column2All = []
      const column3 = []
      const column3All = []
      column2.push(
        TMS[0],
        TMS[2],
        TMS[5],
        TMS[6],
        TMS[8],
        TMS[1],
        TMS[3],
        TMS[4],
        TMS[7],
        TMS[9]
      )
      column2All.push(
        TMS[0],
        TMS[2],
        TMS[4],
        TMS[6],
        TMS[8],
        TMS[10],
        TMS[12],
        TMS[14],
        TMS[16],
        TMS[18],
        TMS[1],
        TMS[3],
        TMS[5],
        TMS[7],
        TMS[9],
        TMS[11],
        TMS[13],
        TMS[15],
        TMS[17]
      )
      column3.push(
        TMS[0],
        TMS[3],
        TMS[6],
        TMS[1],
        TMS[4],
        TMS[7],
        TMS[2],
        TMS[5],
        TMS[8]
      )
      column3All.push(
        TMS[0],
        TMS[3],
        TMS[6],
        TMS[9],
        TMS[12],
        TMS[15],
        TMS[1],
        TMS[4],
        TMS[7],
        TMS[10],
        TMS[13],
        TMS[16],
        TMS[18],
        TMS[2],
        TMS[5],
        TMS[8],
        TMS[11],
        TMS[14],
        TMS[17]
      )
      if (this.showAll) {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return column1All
          case 'sm':
            return column2All
          case 'md':
            return column2All
          case 'lg':
            return column3All
          case 'xl':
            return column3All
        }
      } else {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return column1
          case 'sm':
            return column2
          case 'md':
            return column2
          case 'lg':
            return column3
          case 'xl':
            return column3
        }
      }
      return column3
    },
  },
  methods: {
    toggleAll() {
      this.showAll = !this.showAll
    },
  },
}
</script>

<style lang="scss">
.flex-group {
  float: left;
  column-count: 3;
  overflow: visible;

  @media only screen and (max-width: $breakpoints-lg) {
    column-count: 2;
  }
  @media only screen and (max-width: $breakpoints-sm) {
    column-count: 1;
  }

  &-card {
    display: inline-block;
    position: relative;
  }
}
</style>
