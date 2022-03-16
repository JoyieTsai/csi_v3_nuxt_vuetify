<template>
  <div
    class="main-container tw-m-auto tw-mt-16 xl:tw-mt-24 tw-mb-16 xl:tw-mb-28"
  >
    <div class="tw-flex tw-flex-col xl:tw-flex-row">
      <div class="w-full xl:tw-w-1/3 tw-flex tw-items-center">
        <div class="tw-flex tw-flex-col xl:tw-mr-6">
          <div class="tw-text-2xl lg:tw-text-4xl text-dark tw-font-semibold">
            {{ title }}
          </div>
          <div class="border-primary tw-my-2 lg:tw-my-5"></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="
              tw-text-sm
              md:tw-text-base
              lg:tw-text-lg
              tw-leading-relaxed
              lg:tw-pr-10
              tw-mb-5
            "
            v-html="desc"
          ></div>
        </div>
      </div>
      <div>
        <div class="relproduct">
          <div v-for="(item, index) in data" :key="index" class="badge">
            <nuxt-link
              v-if="item.link"
              :to="'/' + item.link"
              class="
                tw-relative tw-z-10 tw-pt-5
                2xl:tw-pt-7
                tw-flex
                tw-flex-col
                tw-items-center
                tw-justify-center
                tw-text-white
                hover:tw-text-white
                tw-w-full
              "
            >
              <div
                class="
                  tw-text-4xl
                  md:tw-text-5xl
                  xl:tw-text-6xl
                  tw-leading-tight
                "
              >
                <i :class="item.icon"></i>
              </div>
              <div class="tw-text-sm lg:tw-text-base tw-leading-tight">
                {{ item.title }}
              </div>
            </nuxt-link>
            <div
              v-else
              class="
                tw-relative tw-z-10 tw-pt-5
                2xl:tw-pt-7
                tw-flex
                tw-flex-col
                tw-items-center
                tw-justify-center
                tw-text-white
                hover:tw-text-white
                tw-w-full
              "
            >
              <div
                class="
                  tw-text-4xl
                  md:tw-text-5xl
                  xl:tw-text-6xl
                  tw-leading-tight
                "
              >
                <i :class="item.icon"></i>
              </div>
              <div class="tw-text-sm lg:tw-text-base tw-leading-tight">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    title: 'Related Products',
    desc: 'Fully integrated solutions and services installed on the <a href="/capabilities/infoShare-engine" class="primary-link">InfoShare Engine®</a>. Designed to be easily deployed to meet each agency or office’s unique requirements.',
  }),
  methods: {},
}
</script>

<style lang="scss">
$badgeWidth: 100px;
$badgeHeight: 175px;

.relproduct {
  width: 100%;
  position: relative;
  text-align: center;
  min-height: 320px;
  margin: auto;

  &::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 33px;
    width: 100%;
    height: 100%;
    background: url('../assets/vectors/line.svg') no-repeat left center;
    background-size: contain;

    @media only screen and (max-width: $breakpoints-2xl) {
      top: 0;
      left: 26px;
    }
    @media only screen and (max-width: $breakpoints-lg) {
      top: -16px;
      left: 26px;
      transform: scale(0.7);
    }
    @media only screen and (max-width: $breakpoints-md) {
      display: none;
    }
  }

  & > *:nth-child(odd) {
    top: 0;
  }
  & > *:nth-child(even) {
    top: 90px;
  }

  @media only screen and (max-width: $breakpoints-sm) {
    max-width: 380px;
    & > *:nth-child(4) {
      top: 180px;
      transform: translateX(-480px);
    }
    & > *:nth-child(5) {
      top: -45px;
      transform: translateX(80px);
    }
  }
  @media only screen and (max-width: $breakpoints-xs) {
    & > *:nth-child(4) {
      top: 34px;
      transform: translateX(-49px);
    }
    & > *:nth-child(5) {
      top: 34px;
      transform: translateX(49px);
    }
  }
}
// Hexagon
.badge {
  position: relative;
  margin: 50px;
  width: $badgeWidth;
  height: $badgeHeight;
  display: inline-block;
  top: 0;
  transition: all 0.2s ease;
  background: linear-gradient(to bottom right, #317ac4 0%, #0d63ba 100%);
  color: #0b539d;
  cursor: pointer;

  @media only screen and (max-width: $breakpoints-2xl) {
    margin: 35px;
    width: ceil($badgeWidth * 0.9);
    height: ceil($badgeHeight * 0.9);
  }
  @media only screen and (max-width: $breakpoints-lg) {
    margin: 28px;
    width: ceil($badgeWidth * 0.8);
    height: ceil($badgeHeight * 0.8);
  }
  @media only screen and (max-width: $breakpoints-xs) {
    margin: 16px;
    width: ceil($badgeWidth * 0.7);
    height: ceil($badgeHeight * 0.7);
  }

  &:before,
  &:after {
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: inherit;
    content: '';
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:before {
    transform: rotate(60deg);
  }
  &:after {
    transform: rotate(-60deg);
  }
  &:hover {
    transform: translateY(-10px);
  }
}
</style>
