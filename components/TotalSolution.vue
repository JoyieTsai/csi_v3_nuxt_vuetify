<template>
  <div class="bg-solution tw-overflow-hidden">
    <div class="main-container tw-mx-auto tw-py-12 xl:tw-py-24 tw-relative">
      <!-- <img
        class="solution-line"
        :src="require('~/assets/vectors/t-lines.svg')"
      /> -->
      <!-- Header -->
      <div class="tw-flex tw-flex-col md:tw-flex-row">
        <div>
          <v-img
            :src="require('~/assets/vectors/solution-logo.svg')"
            class="
              tw-w-40
              md:tw-w-64
              lg:tw-w-72
              xl:tw-w-96
              lg:tw-ml-10
              xl:tw-ml-24
              2xl:tw-ml-48
              tw-mr-10
              xl:tw-mr-20
            "
          ></v-img>
        </div>
        <div class="tw-text-white">
          <div class="header-2 tw-mt-5 lg:tw-mt-16 xl:tw-mt-24">
            Complete Solution
          </div>
          <div class="lg:tw-text-xl xl:tw-text-2xl">
            CSI solutions are powered by the
            <a href="/capabilities/infoshare-engine" class="white-link"
              >InfoShare Engine®</a
            >, a low-code development platform for government ERP application.
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
            <div class="tab-text tw-mt-2 tw-hidden md:tw-block">
              {{ sol.product }}
            </div>
            <i :class="[sol.icon, 'tab-icon']"></i>
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
                :src="require('~/assets/images/diagram/' + sol.diagram)"
                alt=""
                :class="'solution-diagram-' + j"
              />
            </div>
            <!-- Interface -->
            <div v-if="sol.interfaces" class="tw-mt-20">
              <div class="tw-flex tw-justify-center">
                <div class="solution-interface tw-mr-5">
                  <i class="icon-interfaces_solid tab-icon"></i> Interfaces
                </div>
                <div
                  class="
                    tw-flex tw-flex-wrap tw-items-center tw-justify-center
                    bg-hud-horizontal
                    tw-w-1/2 tw-mt-32
                  "
                >
                  <div
                    v-for="(inter, index) in sol.interfaces"
                    :key="index"
                    class="hexagon vertical"
                  >
                    {{ inter }}
                  </div>
                </div>
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
          return 120
        case 'sm':
          return 250
        case 'md':
          return 250
        case 'lg':
          return 300
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
  &-line {
    position: absolute;
    top: 490px;
    left: 450px;
  }
  &-tabs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 230px;
    margin: auto 1rem;

    .tab-text {
      font-size: 1.1rem;
    }

    .tab-icon {
      font-size: 3rem;
    }

    @media only screen and (max-width: $breakpoints-lg) {
      width: 180px;
      height: 180px;
      .tab-text {
        font-size: 1rem;
      }
    }
    @media only screen and (max-width: $breakpoints-sm) {
      margin: auto 5px;
      width: 80px;
      height: 80px;
      .tab-icon {
        font-size: 1.5rem;
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
        font-size: 1.4rem;
        font-weight: bold;
      }

      .tab-icon {
        font-size: 3.5rem;
      }

      @media only screen and (max-width: $breakpoints-lg) {
        width: 200px;
        height: 200px;
        .tab-text {
          font-size: 1.2rem;
        }

        .tab-icon {
          font-size: 3rem;
        }
      }
      @media only screen and (max-width: $breakpoints-sm) {
        width: 80px;
        height: 80px;
        .tab-icon {
          font-size: 2rem;
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
          width: 225px;
          height: 225px;
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
      margin-right: 3rem;
    }
    &-0,
    &-1,
    &-2 {
      @media only screen and (max-width: $breakpoints-lg) {
        margin: 0;
      }
    }
  }

  &-interface {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 260px;
    margin: auto 0;
    color: white;
    font-size: 1.4rem;
    position: relative;

    .tab-icon {
      font-size: 3.6rem;
    }

    &::before {
      content: '';
      position: absolute;
      background-color: transparent;
      opacity: 1;
      width: 100%;
      height: 100%;
      background: url('../assets/vectors/circle-base.svg') center no-repeat;
      background-size: contain;
    }
  }
}
</style>
