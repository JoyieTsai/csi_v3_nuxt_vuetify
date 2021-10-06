<template>
  <div class="bg-solution tw-overflow-hidden">
    <div class="main-container tw-mx-auto tw-py-24 tw-relative">
      <img
        class="solution-line line-1"
        :src="require('~/assets/vectors/t-line-1.svg')"
      />
      <img
        class="solution-line line-2"
        :src="require('~/assets/vectors/t-line-2.svg')"
      />
      <img
        class="solution-line line-3"
        :src="require('~/assets/vectors/t-line-3.svg')"
      />
      <!-- Header -->
      <div class="tw-flex">
        <div>
          <img
            :src="require('~/assets/vectors/solution-logo.svg')"
            alt="Infoshae"
            class="tw-ml-44 tw-mr-28 tw-mt-6"
          />
        </div>
        <div class="tw-w-2/5 tw-text-white">
          <div class="header-2 tw-mt-28">Complete Solution</div>
          <div class="body-text-1">
            CSI solutions are powered by the
            <span class="tw-underline">InfoShare Engine®</span>, a low-code
            development platform for government ERP application. Our complete
            solution provides seamless integration, scalability, and
            adaptability across all product lines.
          </div>
        </div>
      </div>
      <!-- Body -->
      <div>
        <div class="tw-flex tw-justify-end">
          <ul class="solution-tabs tw-items-center tw-mt-10 tw-mr-32">
            <li><i class="icon-rms_solid"></i> RMS</li>
            <li class="active"><i class="icon-cad_solid"></i> CAD</li>
            <li><i class="icon-fire_ems_solid"></i> Fire / EMS</li>
          </ul>
        </div>
        <div class="tw-grid tw-grid-cols-4">
          <div class="tw-col-start-1 tw-col-span-3">
            <div class="tw-flex tw-justify-end">
              <div>
                <ul
                  v-for="(sol, i) in solutions"
                  :key="i"
                  class="hexagon-grid-container"
                >
                  <li
                    v-for="(item, index) in sol.items"
                    :key="index"
                    class="hexagon-s"
                  >
                    <div class="hexagon-s-inner">{{ item }}</div>
                  </li>
                </ul>
              </div>
              <div
                class="
                  tw-flex tw-flex-col tw-items-center
                  bg-hud-vertical
                  tw-p-12 tw-py-12 tw-mr-55
                "
              >
                <div v-for="(sol, j) in solutions" :key="j" class="hexagon">
                  {{ sol.type }}
                </div>
              </div>
            </div>
          </div>
          <div class="tw-flex tw-items-center">
            <div class="header-3 tw-font-semibold tw-text-white tw-w-60">
              Computer Aided Dispatch
            </div>
          </div>
        </div>
        <!-- Interface -->
        <div>
          <div class="tw-flex tw-justify-center tw-mt-52">
            <div class="solution-tab">
              <i class="icon-interfaces_solid"></i> Interface
            </div>
            <div
              class="
                tw-flex tw-flex-wrap tw-items-center tw-justify-center
                bg-hud-horizontal
                tw-w-1/2 tw-mt-36
              "
            >
              <div
                v-for="(inter, k) in interfaces"
                :key="k"
                class="hexagon vertical"
              >
                {{ inter }}
              </div>
            </div>
          </div>
        </div>
        <!-- Interface end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solutions: { type: Array, required: true },
    interfaces: { type: Array, required: true },
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.mr-55 {
  margin-right: 55px;
}

.solution {
  &-line {
    position: absolute;

    &.line {
      &-1 {
        top: 490px;
        left: 450px;
      }
      &-2 {
        top: 925px;
        left: 1210px;
      }
      &-3 {
        top: 1350px;
        left: 598px;
      }
    }
  }
  &-tabs {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      margin: 3rem 3rem 0;
      font-size: 1.2rem;
      color: $white;
      background: url('../assets/vectors/circle-base.svg') center no-repeat;
      background-size: contain;

      i {
        font-size: 2.7rem;
      }

      &.active {
        position: relative;
        width: 278px;
        height: 278px;
        font-size: 1.6rem;

        i {
          font-size: 4rem;
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 324px;
          height: 324px;
          background: url('../assets/vectors/circle-focus.svg') center no-repeat;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 278px;
    height: 278px;
    margin: 3rem 0 0;
    font-size: 1.6rem;
    color: $white;
    background: url('../assets/vectors/circle-base.svg') center no-repeat;
    background-size: contain;

    i {
      font-size: 4rem;
    }
  }
}
</style>
