<template>
  <div class="bg-solution tw-overflow-hidden">
    <div class="main-container tw-mx-auto tw-py-24 tw-relative">
      <!-- <img
        class="solution-line"
        :src="require('~/assets/vectors/t-lines.svg')"
      /> -->
      <!-- Header -->
      <div class="tw-flex">
        <div>
          <img
            :src="require('~/assets/vectors/solution-logo.svg')"
            alt="Infoshae"
            class="tw-ml-44 tw-mr-28 tw-mt-6"
          />
        </div>
        <div class="tw-w-1/2 tw-text-white">
          <div class="header-2 tw-mt-24">Complete Solution</div>
          <div class="tw-text-2xl">
            CSI solutions are powered by the
            <span class="tw-underline">InfoShare Engine®</span>, a low-code
            development platform for government ERP application. Our complete
            solution provides seamless integration, scalability, and
            adaptability across all product lines.
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
          height="335"
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
            <div class="tab-text tw-mt-2">{{ sol.product }}</div>
            <i :class="[sol.icon, 'tab-icon']"></i>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="tw--mt-8">
          <v-tab-item
            v-for="(sol, j) in solutions"
            :key="j"
            :value="'tab-' + j"
          >
            <div class="tw-flex tw-justify-center">
              <img
                :src="require('~/assets/images/diagram/' + sol.diagram)"
                alt=""
                height="730"
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
      margin-left: 3rem;
    }
    &-1 {
      margin-right: 6rem;
    }
    &-2 {
      margin-left: 3rem;
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
