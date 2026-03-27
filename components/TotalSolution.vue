<template>
  <div class="bg-solution tw-overflow-hidden">
    <div
      class="main-container tw-mx-auto tw-py-6 md:tw-py-12 xl:tw-py-24 tw-relative"
    >
      <!-- Header -->
      <div class="tw-flex tw-flex-col sm:tw-flex-row">
        <div>
          <v-img
            :src="require('~/assets/vectors/solution-logo.svg')"
            class="tw-w-44 sm:tw-w-56 md:tw-w-64 lg:tw-w-72 xl:tw-w-96 lg:tw-ml-10 xl:tw-ml-24 2xl:tw-ml-48 tw-mr-10 xl:tw-mr-20"
          ></v-img>
        </div>
        <div class="tw-text-white">
          <div class="header-2 tw-mt-5 md:tw-mt-10 lg:tw-mt-16 xl:tw-mt-24">
            Total Solution
          </div>
          <div class="lg:tw-text-xl xl:tw-text-2xl">
            CSI solutions are powered by the
            <a href="/capabilities/infoshare-engine" class="white-link"
              >InfoShare<sup>®</sup> Engine</a
            >, a low-code development platform for government ERP applications.
            Our complete solution provides seamless integration, scalability,
            and adaptability across all product lines.
          </div>
        </div>
      </div>
      <!-- Body -->
      <div class="tw-mt-8">
        <v-tabs
          v-model="tab"
          icons-and-text
          fixed-tabs
          background-color="transparent"
          dark
          :height="tabHeight"
          hide-slider
        >
          <v-tab
            v-for="(sol, i) in solutions"
            :key="i"
            class="solution-tabs"
            active-class="solution-tabs-active"
            :ripple="false"
            :href="'#tab-' + i"
          >
            <div
              class="tab-text tw-text-xs md:tw-text-base lg:tw-text-lg xl:tw-text-xl tw-mt-2 tw-tracking-normal"
            >
              {{ sol.product }}
            </div>
            <i
              v-show="$vuetify.breakpoint.smAndUp"
              :class="[sol.icon, 'tab-icon']"
            ></i>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="lg:tw--mt-8">
          <v-tab-item
            v-for="(sol, j) in solutions"
            :key="j"
            :value="'tab-' + j"
          >
            <div class="tw-flex tw-justify-center">
              <img
                :src="'images/solutions/' + sol.diagram"
                alt=""
                :class="'solution-diagram-' + j"
              />
            </div>
            <!-- Interface -->
            <div v-if="sol.interfaces" class="tw-mt-5 xl:tw-mt-20">
              <div class="tw-flex tw-justify-center">
                <div class="solution-tabs interface tw-mr-5">
                  <i
                    v-show="$vuetify.breakpoint.smAndUp"
                    class="csi-icon-interfaces_solid tab-icon"
                  ></i>
                  <div
                    class="tab-text tw-text-xs md:tw-text-base lg:tw-text-lg xl:tw-text-xl tw-tracking-normal"
                  >
                    Interfaces
                  </div>
                </div>
                <img
                  :src="'images/solutions/' + sol.interfaces"
                  alt=""
                  class="tw-mt-6 lg:tw-mt-12 tw--ml-5 md:tw--ml-10 tw-h-20 sm:tw-h-40 md:tw-h-44 lg:tw-h-64 xl:tw-h-80"
                />
              </div>
            </div>
            <!-- Interface end-->
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solutions: { type: Array, required: true },
  },
  data: () => ({
    tab: 'tab-1',
  }),
  computed: {
    tabHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 110
        case 'sm':
          return 210
        case 'md':
          return 260
        case 'lg':
          return 320
        case 'xl':
          return 335
      }
      return 0
    },
  },
}
</script>

<style lang="scss">
.solution {
  &-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 235px;
    margin: auto 1rem;
    color: $white;

    .tab-icon {
      font-size: 3rem;
    }

    &.interface {
      position: relative;
      margin: 0;

      &:hover {
        transition: none;
        color: white !important;
      }
    }

    @media only screen and (max-width: $breakpoints-lg) {
      width: 200px;
      height: 200px;
      .tab-icon {
        font-size: 3rem;
      }
    }
    @media only screen and (max-width: ($breakpoints-lg - 1px)) {
      width: 185px;
      height: 185px;
    }
    @media only screen and (max-width: $breakpoints-md) {
      width: 175px;
      height: 175px;
      margin: auto 10px;
    }
    @media only screen and (max-width: ($breakpoints-md - 1px)) {
      width: 150px;
      height: 150px;
      .tab-icon {
        font-size: 2rem;
      }
    }
    @media only screen and (max-width: $breakpoints-sm) {
      width: 90px;
      height: 90px;
      margin: auto 5px;
      .tab-text {
        transform: scale(0.9);
      }
    }
    &::before {
      content: '';
      position: absolute;
      background-color: transparent !important;
      opacity: 0.7 !important;
      width: 100%;
      height: 100%;
      background: url('../assets/vectors/circle-base.svg') center no-repeat;
      background-size: contain;
    }

    &:hover {
      transition: transform 0.5s;
      transform: scale(1.06);
      color: white !important;

      &::before {
        opacity: 1 !important;
      }
    }

    &-active {
      position: relative;
      width: 260px;
      height: 260px;
      transition: all 0.5s cubic-bezier(0.2, 0.4, 0.7, 0.8);

      .tab-text {
        font-weight: bold;
        transform: scale(1.15);
      }

      .tab-icon {
        font-size: 4rem;
      }

      @media only screen and (max-width: $breakpoints-lg) {
        width: 200px;
        height: 200px;

        .tab-icon {
          font-size: 3rem;
        }
      }
      @media only screen and (max-width: ($breakpoints-lg - 1px)) {
        width: 185px;
        height: 185px;
      }
      @media only screen and (max-width: $breakpoints-md) {
        width: 175px;
        height: 175px;
      }
      @media only screen and (max-width: ($breakpoints-md - 1px)) {
        width: 150px;
        height: 150px;
        .tab-icon {
          font-size: 2rem;
        }
      }
      @media only screen and (max-width: $breakpoints-sm) {
        width: 90px;
        height: 90px;
        .tab-text {
          transform: scale(1);
        }
      }

      &::before {
        content: '';
        position: absolute;
        background-color: transparent;
        opacity: 1 !important;
        width: 100%;
        height: 100%;
        background: url('../assets/vectors/circle-base.svg') center no-repeat;
        background-size: contain;
        transition: all 0.5s;
        transform: rotate(180deg);
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 300px;
        height: 300px;
        opacity: 1;
        background: url('../assets/vectors/circle-focus.svg') center no-repeat;
        background-size: contain;
        transition: all 0.5s cubic-bezier(0.2, 0.4, 0.7, 0.8);
        transform: scale(1);
        @media only screen and (max-width: $breakpoints-lg) {
          width: 220px;
          height: 220px;
        }
        @media only screen and (max-width: ($breakpoints-lg - 1px)) {
          width: 210px;
          height: 210px;
        }
        @media only screen and (max-width: $breakpoints-md) {
          width: 200px;
          height: 200px;
        }
        @media only screen and (max-width: ($breakpoints-md - 1px)) {
          width: 175px;
          height: 175px;
        }
        @media only screen and (max-width: $breakpoints-sm) {
          width: 100px;
          height: 100px;
        }
      }

      &:hover {
        transform: scale(1);
        &::before {
          opacity: 1 !important;
        }
      }
    }
  }

  &-diagram {
    &-0 {
      margin-left: 6rem;
    }
    &-1 {
      margin-right: 5rem;
    }
    &-2 {
      margin-right: 5rem;
    }
    &-0,
    &-1,
    &-2 {
      @media only screen and (max-width: $breakpoints-lg) {
        height: 550px;
        margin: 0;
      }
      @media only screen and (max-width: ($breakpoints-lg - 1px)) {
        height: 485px;
      }
      @media only screen and (max-width: $breakpoints-md) {
        height: 450px;
      }
      @media only screen and (max-width: $breakpoints-sm) {
        height: 200px;
      }
    }
  }
}
</style>
