<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto tw-px-0 sm:tw-px-6">
    <div class="header-2 tw-text-center">Testimonials</div>

    <!-- Testimonial -->
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, i) in testimonials" :key="i">
        <div class="tw-p-6 xl:tw-p-10 testimonials">
          <div class="tw-text-sm xl:tw-text-base tw-opacity-70">
            {{ item.quote }}
          </div>
          <div class="tw-text-sm lg:tw-text-base tw-font-semibold tw-mt-5">
            {{ item.author }}
          </div>
          <div
            class="tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60"
            v-html="item.agency"
          ></div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Testimonials from '~/data/testimonials.json'

export default {
  data: () => ({
    testimonials: Testimonials,
    swiperOption: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoHeight: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    },
  }),
}
</script>

<style lang="scss">
.testimonials {
  position: relative;
  background-color: $light-color;
  margin: 4rem 1rem 3rem;

  @media only screen and (max-width: $breakpoints-sm) {
    margin: 2rem 1rem 3rem;
    background-color: $white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);

    &::after {
      content: '';
      background: url('../assets/vectors/testimonial-vector.svg') no-repeat;
      background-size: contain;
      position: absolute;
      bottom: -24px;
      right: 0;
      width: 120px;
      height: 122px;
      display: block;
      opacity: 0.1;
    }
  }

  &::before {
    content: '';
    background: url('../assets/icons/icon-quotes.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: -22px;
    left: -10px;
    width: 58px;
    height: 46px;
    display: block;

    @media only screen and (max-width: $breakpoints-lg) {
      top: -18px;
      width: 45px;
      height: 40px;
    }
    @media only screen and (max-width: $breakpoints-sm) {
      top: -16px;
      left: -8px;
      width: 42px;
      height: 32px;
    }
  }
}
.swiper-slide {
  &-next {
    .testimonials {
      margin: 4rem 0 3rem;
      position: relative;
      z-index: 2;
      background-color: $white;
      transform: scale(1.15);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);

      @media only screen and (max-width: $breakpoints-md) {
        margin: 2rem 1rem 3rem;
        background-color: $white;
        transform: scale(1);
      }

      &::after {
        content: '';
        background: url('../assets/vectors/testimonial-vector.svg') no-repeat;
        background-size: contain;
        position: absolute;
        bottom: -26px;
        right: 0;
        width: 148px;
        height: 145px;
        display: block;
        opacity: 0.1;

        @media only screen and (max-width: $breakpoints-lg) {
          width: 122px;
          height: 125px;
          bottom: -25px;
        }
        @media only screen and (max-width: $breakpoints-sm) {
          width: 120px;
          height: 122px;
          bottom: -24px;
        }
      }
    }
  }
}
.swiper-pagination-bullet-active {
  background-color: $primary-color !important;
}
</style>
