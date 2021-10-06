<template>
  <div>
    <div
      v-if="tagline"
      class="
        section-tagline
        tw-mx-auto tw-flex tw-items-end tw-justify-end
        lg:tw-mb-10
      "
      :style="{
        background: `url(images/tagline/${tagline.img}) left center no-repeat`,
        backgroundSize: `contain`,
      }"
    >
      <div
        class="main-container tw-mx-auto tw-flex tw-items-end tw-justify-end"
      >
        <div
          class="
            tw-pt-5
            lg:tw-pt-10
            tw-px-5
            lg:tw-px-10 lg:tw-pb-10
            tw-bg-white tw-font-semibold
            lg:w-3/5
          "
        >
          <div class="text-primary header-4">
            {{ tagline.title }}
          </div>
        </div>
      </div>
    </div>

    <div class="bg-sysfeature">
      <div class="main-container tw-mx-auto">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="tw-flex tw-flex-col lg:tw-flex-row"
        >
          <div
            :class="[
              index % 2 == 0
                ? 'tw-order-last'
                : 'tw-order-last lg:tw-order-first',
              'tw-flex-1 tw-flex tw-flex-col tw-justify-center',
            ]"
          >
            <div class="sys-content tw-flex tw-items-center tw-justify-center">
              <div class="tw-w-10/12">
                <div class="header-5 font-semibold">{{ item.title }}</div>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div
                  class="body-text-3 tw-my-2 tw-opacity-90"
                  v-html="item.desc"
                ></div>
                <ul class="dot-list">
                  <li
                    v-for="(list, i) in item.list"
                    :key="i"
                    class="body-text-3 tw-opacity-90"
                  >
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <span v-html="list"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="tw-w-full tw-flex-1 tw-p-5"
            :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <zoom-on-hover
              :img-normal="
                require('@/assets/images/sysfeatures/1x/' + item.img)
              "
              :img-zoom="require('@/assets/images/sysfeatures/2x/' + item.img)"
              :scale="2"
              :disabled="$vuetify.breakpoint.smAndDown ? 'true' : item.zoomoff"
            >
            </zoom-on-hover>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    tagline: { type: Object, required: false },
    data: { type: Array, required: true },
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.section-tagline {
  max-width: 2048px;
  height: 450px;
  @media (max-width: $breakpoints-lg) {
    height: 350px;
  }
  @media (max-width: $breakpoints-md) {
    height: 350px;
  }
  @media (max-width: $breakpoints-sm) {
    height: 200px;
  }
}
</style>
