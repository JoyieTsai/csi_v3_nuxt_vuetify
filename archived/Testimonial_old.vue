<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto tw-px-0 sm:tw-px-6">
    <div class="header-2 tw-text-center">Testimonials</div>

    <!-- Testimonial -->
    <swiper class="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, i) in testimonials" :key="i">
        <div class="tw-p-6 xl:tw-p-10 testimonials">
          <div class="tw-text-sm xl:tw-text-base">
            {{ item.quote }}
          </div>
          <div class="tw-text-sm lg:tw-text-base tw-font-semibold tw-mt-5">
            {{ item.author }}
          </div>
          <div
            class="
              tw-text-xs
              md:tw-text-sm
              xl:tw-text-base
              tw-opacity-60 tw-relative tw-z-10
            "
            v-html="item.agency"
          ></div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div class="swiper-button-prev" slot="button-prev">
        <i class="el-icon-caret-left"></i>
      </div>
      <div class="swiper-button-next" slot="button-next">
        <i class="el-icon-caret-right"></i>
      </div>
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
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
.swiper-wrapper {
  align-items: center;
}

.testimonials {
  position: relative;
  background-color: $light-color;
  margin: 1rem 6rem;
  min-height: 70px;

  * {
    display: none;
  }

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
    }
  }

  &::before {
    content: '';
    background: url('../assets/vectors/testimonial-quotes.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: -22px;
    left: -12px;
    width: 52px;
    height: 42px;
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

.mySwiper .swiper-slide {
  transform: scale(1);
  transition: 0.6s all ease;

  &-next {
    transform: scale(1.2);

    .testimonials {
      margin: 5rem 0 7rem;
      position: relative;
      z-index: 2;
      background: url('../assets/vectors/testimonial-bg.svg');
      background-size: cover;
      color: $white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);

      * {
        display: block;
      }

      @media only screen and (max-width: $breakpoints-md) {
        margin: 2rem 1rem 3rem;
        background-color: $white;
        // transform: scale(1);
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
</style>
