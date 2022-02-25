<template>
  <div class="main-container tw-mx-auto">
    <div class="header-2 tw-text-center">Testimonials</div>
    <div
      class="
        tw-mt-8
        lg:tw-mt-16
        tw-flex tw-flex-col
        lg:tw-flex-row
        tw-justify-between
      "
    >
      <!-- Testimonial -->
      <div
        v-for="(item, i) in testimonials"
        :key="i"
        :class="[
          'testimonials tw-shadow-lg tw-p-10',
          'testimonials--' + item.id,
        ]"
      >
        <div class="xl:tw-mx-5">
          <div class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-opacity-70">
            {{ item.body }}
          </div>
          <div
            class="
              tw-text-sm
              md:tw-text-base
              lg:tw-text-lg
              tw-font-semibold tw-mt-5
            "
          >
            {{ item.author }}
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
            v-html="item.position"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Testimonials from '~/data/testimonials.json'

export default {
  data: () => ({
    testimonials: Testimonials,
  }),
}
</script>

<style lang="scss">
.testimonials {
  position: relative;
  width: 550px;

  @media only screen and (max-width: $breakpoints-2xl) {
    width: 440px;
  }
  @media only screen and (max-width: $breakpoints-lg) {
    width: 350px;
  }

  @media only screen and (max-width: $breakpoints-md) {
    width: 100%;
  }

  &::before {
    content: '';
    background: url('../assets/icons/icon-quotes.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: -28px;
    left: -14px;
    width: 65px;
    height: 52px;
    display: block;

    @media only screen and (max-width: $breakpoints-lg) {
      top: -20px;
      width: 52px;
      height: 42px;
    }
    @media only screen and (max-width: $breakpoints-sm) {
      top: -16px;
      left: -8px;
      width: 42px;
      height: 32px;
    }
  }

  &--1 {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: $white;
    z-index: 1;

    @media only screen and (max-width: $breakpoints-md) {
      position: relative;
      left: 0;
      transform: translate(0);
    }

    &::after {
      content: '';
      background: url('../assets/vectors/testimonial-vector.svg') no-repeat;
      background-size: contain;
      position: absolute;
      bottom: -32px;
      right: 0;
      width: 169px;
      height: 173px;
      display: block;
      opacity: 0.1;

      @media only screen and (max-width: $breakpoints-lg) {
        width: 135px;
        height: 138px;
        bottom: -27px;
      }
      @media only screen and (max-width: $breakpoints-sm) {
        width: 120px;
        height: 122px;
        bottom: -24px;
      }
    }
  }

  &--2,
  &--3 {
    margin-top: 4rem;
    background-color: $light-color;
    transform: scale(0.9);

    @media only screen and (max-width: $breakpoints-md) {
      transform: scale(1);
    }
  }
}
</style>
