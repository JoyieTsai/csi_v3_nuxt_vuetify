<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto tw-px-0 lg:tw-px-6">
    <div class="header-2 tw-text-center">Testimonials</div>

    <!-- Testimonial -->
    <swiper class="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, i) in testimonials" :key="i">
        <div class="tw-p-8 xl:tw-p-14 testimonials">
          <div class="lg:tw-text-xl xl:tw-text-2xl">
            {{ item.quote }}
          </div>
          <div class="lg:tw-text-lg xl:tw-text-xl tw-font-semibold tw-mt-5">
            {{ item.author }}
          </div>
          <div
            class="tw-text-xs lg:tw-text-lg xl:tw-text-xl tw-opacity-60 tw-relative tw-z-10"
            v-html="item.agency"
          ></div>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
      <div slot="button-prev" class="swiper-button-prev">
        <i class="el-icon-caret-left"></i>
      </div>
      <div slot="button-next" class="swiper-button-next">
        <i class="el-icon-caret-right"></i>
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    testimonials: Object,
    swiperOption: {
      slidesPerView: 1,
      spaceBetween: 20,
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
    },
  }),
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const tms = await axios.get(
        'https://csi-web3-resources-default-rtdb.firebaseio.com/testimonials.json'
      )
      this.testimonials = tms.data
    },
  },
}
</script>

<style lang="scss">
.swiper-wrapper {
  align-items: center;
}

.testimonials {
  position: relative;
  margin: 3rem auto 4rem;
  max-width: 1000px;
  background: url('../assets/vectors/testimonial-bg.svg');
  background-size: cover;
  color: $white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: $breakpoints-lg) {
    max-width: 80%;
  }
  @media only screen and (max-width: $breakpoints-sm) {
    margin: 2rem 0.6rem 4rem;
  }

  &::before {
    content: '';
    background: url('../assets/vectors/testimonial-quotes.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: -28px;
    left: -14px;
    width: 65px;
    height: 52px;
    display: block;

    @media only screen and (max-width: $breakpoints-lg) {
      top: -22px;
      left: -11px;
      width: 55px;
      height: 42px;
    }
    @media only screen and (max-width: $breakpoints-sm) {
      top: -17px;
      left: -8px;
      width: 45px;
      height: 32px;
    }
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

    @media only screen and (max-width: $breakpoints-lg) {
      bottom: -26px;
      width: 130px;
      height: 130px;
    }
    @media only screen and (max-width: $breakpoints-sm) {
      bottom: -24px;
      width: 110px;
      height: 112px;
    }
  }
}
</style>
