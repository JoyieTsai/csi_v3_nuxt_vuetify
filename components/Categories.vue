<template>
  <div class="bg-categories">
    <div
      class="main-container tw-px-0 md:tw-px-6 tw-mx-auto tw-py-16 xl:tw-py-28"
    >
      <div class="header-2 tw-text-white tw-text-center tw-mb-12 xl:tw-mb-24">
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
                class="
                  tw-text-base
                  xl:tw-text-lg
                  2xl:tw-text-xl
                  tw-font-semibold
                  tw-my-3
                  tw-capitalize
                  tw-tracking-wide
                  tw-hidden
                  sm:tw-block
                "
              >
                {{ cate.name }}
              </div>
            </div>
          </v-tab>
        </v-tabs>
        <div
          v-if="$vuetify.breakpoint.xsOnly"
          class="tw-text-white tw-text-center tw-text-xl tw-mt-6"
        >
          {{ getTabName }}
        </div>
        <v-tabs-items v-model="tabIndex" class="tw-mt-8 lg:tw-mt-16">
          <v-tab-item v-for="(cate, j) in data" :key="j">
            <v-tabs
              v-model="getTabIndex"
              :vertical="$vuetify.breakpoint.xsOnly ? false : true"
              dark
              hide-slider
              background-color="transparent"
              :show-arrows="$vuetify.breakpoint.xsOnly ? true : false"
            >
              <v-tab
                v-for="(item, k) in cate.items"
                :key="k"
                class="
                  tw-w-max
                  md:tw-w-64
                  lg:tw-w-72
                  xl:tw-w-80
                  2xl:tw-w-96
                  tab-btn
                  tw-text-base
                  xl:tw-text-lg
                  tw-normal-case
                "
                @click="gotoTab(k)"
              >
                {{ item.title }}
              </v-tab>
              <div v-if="cate.link" class="tw-mt-8">
                <a
                  :href="cate.link.url"
                  target="blank"
                  class="white-link tw-no-underline tw-text-center"
                >
                  <div :class="[cate.link.icon, 'tw-text-5xl']"></div>
                  <div class="tw-text-base tw-mt-2 hover:tw-underline">
                    {{ cate.link.title }}
                  </div>
                </a>
              </div>
              <v-tab-item v-for="(item, l) in cate.items" :key="l">
                <div class="tw-mt-5 sm:tw-mt-0 xl:tw-pl-8 2xl:tw-pl-16">
                  <div>
                    <carousel
                      loop
                      per-page="1"
                      pagination-enabled
                      pagination-padding="6"
                      pagination-color="#617d9e"
                      pagination-active-color="#ffffff"
                    >
                      <slide v-for="(img, index) in item.images" :key="index">
                        <div class="tw-flex tw-justify-center">
                          <v-img
                            v-if="
                              cate.id === 4 || cate.id === 5 || cate.id === 6
                            "
                            :lazy-src="'images/eprosecution/1x/' + img"
                            :src="'images/eprosecution/2x/' + img"
                            aspect-ratio="2"
                            contain
                          >
                          </v-img>
                          <v-img
                            v-else
                            :src="require('@/assets/images/diagram/temp.jpg')"
                            aspect-ratio="2"
                            contain
                          ></v-img>
                        </div>
                      </slide>
                    </carousel>
                  </div>
                  <div
                    class="
                      tw-mt-6 tw-mx-6
                      sm:tw-mx-10
                      tw-text-white tw-text-base
                      lg:tw-text-lg
                      xl:tw-text-xl
                    "
                  >
                    {{ item.desc }}
                  </div>
                  <div v-show="item.link" class="tw-text-center tw-mt-10">
                    <button
                      class="btn-lg btn-primary-inverse hover:tw-shadow-xl"
                      html-type="submit"
                      @click.prevent="routeTo(item.link)"
                    >
                      Learn more
                    </button>
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
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  props: ['data'],
  data: () => ({
    tabIndex: 0,
    subtabIndex: 0,
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
          return 'Case Management'
        case 1:
          return 'Content Management & Discovery'
        case 2:
          return 'Investigation & Intelligence'
        case 3:
          return 'Juvenile & DV'
        case 4:
          return 'Special Case Types (Units)'
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
      this.subtabIndex = index
    },
    routeTo(url) {
      this.$router.push({ path: url })
    },
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
  @media only screen and (max-width: $breakpoints-sm) {
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
    color: $primary-color;
    font-weight: bold;
    background: linear-gradient(0deg, #dfeaf5 0%, #ffffff 100%);
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
