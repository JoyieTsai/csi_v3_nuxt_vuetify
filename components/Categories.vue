<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="bg-categories">
    <div
      class="main-container tw-px-0 md:tw-px-6 tw-mx-auto tw-py-16 xl:tw-py-28"
    >
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="linear"
        data-aos-duration="600"
        class="header-2 tw-text-white tw-text-center tw-mb-12 xl:tw-mb-24"
      >
        Explore our Powerful eProsecution System
      </div>

      <div>
        <v-tabs
          v-model="tabIndex"
          background-color="transparent"
          fixed-tabs
          :height="tabHeight"
          dark
          hide-slider
          :show-arrows="$vuetify.breakpoint.lgAndDown ? true : false"
        >
          <v-tab
            v-for="(cate, i) in data"
            :key="i"
            :ripple="false"
            class="tab-arrow"
            @click.prevent="resetSubTab()"
          >
            <div class="tw-flex tw-flex-col">
              <span :class="['tabicon', cate.icon]"></span>
              <div
                class="tw-text-sm lg:tw-text-base xl:tw-text-lg 2xl:tw-text-xl tw-font-semibold tw-my-3 tw-capitalize tw-tracking-wide tw-hidden sm:tw-block"
              >
                {{ cate.name }}
              </div>
            </div>
          </v-tab>
        </v-tabs>
        <div
          v-if="$vuetify.breakpoint.mdAndDown"
          class="tw-text-white tw-text-center tw-text-xl tw-mt-6"
        >
          {{ getTabName }}
        </div>
        <v-tabs-items v-model="tabIndex" class="tw-mt-8 lg:tw-mt-16">
          <v-tab-item v-for="(cate, j) in data" :key="j">
            <v-tabs
              v-model="getTabIndex"
              :vertical="$vuetify.breakpoint.smAndDown ? false : true"
              dark
              hide-slider
              background-color="transparent"
              :show-arrows="$vuetify.breakpoint.mdAndDown ? true : false"
            >
              <v-tab
                v-for="(item, k) in cate.items"
                :key="k"
                class="tw-w-max lg:tw-w-72 xl:tw-w-80 2xl:tw-w-96 tab-btn tw-text-sm lg:tw-text-base xl:tw-text-lg tw-normal-case"
                @click="gotoTab(k)"
              >
                {{ item.title }}
              </v-tab>
              <div v-if="cate.link" class="tw-mt-8 tw-hidden lg:tw-block">
                <a
                  :href="cate.link.url"
                  target="blank"
                  class="white-link tw-no-underline tw-text-center"
                >
                  <div :class="[cate.link.icon, 'tw-text-5xl']"></div>
                  <div
                    class="tw-text-base tw-mt-2 hover:tw-underline tw-text-center"
                    v-html="cate.link.title"
                  ></div>
                </a>
              </div>
              <v-tab-item v-for="(item, l) in cate.items" :key="l">
                <div class="tw-mt-5 lg:tw-mt-0 xl:tw-pl-8 2xl:tw-pl-16">
                  <div>
                    <swiper ref="mySwiper" :options="swiperOption">
                      <swiper-slide
                        v-for="(img, index) in item.images"
                        :key="index"
                      >
                        <v-img
                          :lazy-src="'images/eprosecution/1x/' + img"
                          :src="'images/eprosecution/2x/' + img"
                          contain
                          class="tw-mb-12 tw-mx-8 lg:tw-mx-10"
                        >
                        </v-img>
                      </swiper-slide>
                      <!-- Pagination -->
                      <div
                        v-show="item.images.length > 1"
                        slot="pagination"
                        class="swiper-pagination light"
                      ></div>
                      <!-- Arrow buttons -->
                      <div
                        v-show="item.images.length > 1"
                        slot="button-prev"
                        class="swiper-button-prev_1 ipad:tw-hidden"
                      >
                        <v-icon color="white">mdi-arrow-left</v-icon>
                      </div>
                      <div
                        v-show="item.images.length > 1"
                        slot="button-next"
                        class="swiper-button-next_1 ipad:tw-hidden"
                      >
                        <v-icon color="white">mdi-arrow-right</v-icon>
                      </div>
                    </swiper>
                  </div>
                  <div
                    class="tw-mx-8 lg:tw-mx-10 tw-text-white tw-text-sm md:tw-text-base lg:tw-text-lg xl:tw-text-xl"
                    v-html="superscriptTM(item.desc)"
                  ></div>
                  <div v-show="item.link" class="tw-text-center tw-mt-10">
                    <a
                      class="btn-lg btn-primary-inverse hover:tw-shadow-xl tw-inline-block"
                      target="_blank"
                      :href="item.link"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
import { superscriptTM } from '~/plugins/myfilter.js'
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    slider: null,
    tabIndex: 0,
    subtabIndex: 0,
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: false,
      observer: true,
      observerParents: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next_1',
        prevEl: '.swiper-button-prev_1',
      },
      initialSlide: 0,
    },
  }),
  computed: {
    tabHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 65
        case 'sm':
          return 125
        case 'md':
          return 135
        case 'lg':
          return 165
        case 'xl':
          return 165
      }
      return 165
    },
    getTabName() {
      switch (this.tabIndex) {
        case 0:
          return 'Case Management System'
        case 1:
          return 'Content Management & Discovery'
        case 2:
          return 'Investigation & Intelligence'
        case 3:
          return 'Juvenile & DV'
        case 4:
          return 'Special Case Types'
        case 5:
          return 'Victim / Witness'
      }
      return 0
    },
    getTabIndex() {
      return this.subtabIndex
    },
  },
  methods: {
    resetSubTab() {
      this.subtabIndex = 0
    },
    gotoTab(index) {
      for (let i = 0; i < this.$refs.mySwiper.length; i++) {
        this.$refs.mySwiper[i].swiperInstance.slideTo(0)
      }
      this.subtabIndex = index
    },
    routeTo(url) {
      this.$router.push({ path: url })
    },
    superscriptTM,
  },
}
</script>

<style lang="scss">
.tab-arrow {
  align-items: normal;
  padding: 0;
  min-width: 68px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
    opacity: 0.5;
  }

  &::before {
    opacity: 0 !important;
  }
  &:hover {
    color: $white !important;
  }
}

.tab-btn {
  border: 1px solid rgba(white, 0.5);
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  justify-content: left;
  letter-spacing: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: $breakpoints-lg) {
    height: auto;
  }
  @media only screen and (max-width: $breakpoints-lg - 1px) {
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
  }
}

.v-tab--active {
  &.tab-arrow {
    &::after {
      opacity: 1;
    }
  }
  &.tab-btn {
    color: $primary-color !important;
    font-weight: bold;
    background: linear-gradient(0deg, #dfeaf5 0%, #ffffff 100%);
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
