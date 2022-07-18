<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section lg tw-items-center"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug text-dark">{{ title }}</div>
              <div class="tw-text-2xl text-dark">{{ subtitle }}</div>
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
                :class="[
                  item.highlight ? 'highlight' : '',
                  'tw-mb-10 tw-mx-2 tw-p-10 quote-card',
                ]"
              >
                <div
                  class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-opacity-70 tw-mt-5 lg:tw-mt-0"
                >
                  {{ item.quote }}
                </div>
                <div
                  class="tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5"
                >
                  {{ item.author }}
                </div>
                <div
                  class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
                >
                  {{ item.agency }}
                </div>
              </div>
            </div>
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
    testimonials: Object,
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
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const arr = []
      arr.push(
        TMS[0],
        TMS[3],
        TMS[6],
        TMS[9],
        TMS[15],
        TMS[1],
        TMS[4],
        TMS[7],
        TMS[10],
        TMS[12],
        TMS[13],
        TMS[2],
        TMS[5],
        TMS[8],
        TMS[11],
        TMS[14]
      )
      this.testimonials = arr
    },
  },
}
</script>

<style lang="scss">
.flex-group {
  float: left;
  column-count: 3;
  overflow: visible;

  &-card {
    display: inline-block;
    position: relative;
  }

  &:nth-child(1) {
    order: 6;
  }
}
.quote-card {
  position: relative;
  background-color: $light-color;

  &::before {
    content: '';
    background: url('../../assets/icons/icon-quotes-grey.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: -20px;
    left: -10px;
    width: 50px;
    height: 36px;
    display: block;

    @media only screen and (max-width: $breakpoints-lg) {
      top: -21px;
      left: -11px;
      width: 48px;
      height: 42px;
    }
  }

  &.highlight {
    background-color: white;
    box-shadow: 0 2px 10px rgb(0 0 0 / 0.15);

    &::before {
      content: '';
      background: url('../../assets/icons/icon-quotes.svg') no-repeat;
      background-size: contain;
    }
  }
}
</style>
