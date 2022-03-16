<template>
  <div>
    <div
      v-if="tagline"
      class="section-tagline tw-mx-auto tw-flex tw-items-end tw-justify-end"
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
            tw-p-5
            lg:tw-p-10
            tw-bg-white tw-font-semibold tw-w-full
            md:tw-w-3/5
          "
        >
          <div class="text-primary header-4">
            {{ tagline.title }}
          </div>
        </div>
      </div>
    </div>

    <div class="bg-sysfeature lg:tw-mt-10 xl:tw-mt-16">
      <div class="main-container tw-mx-auto">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="tw-flex tw-flex-col lg:tw-flex-row tw-pt-5 xl:tw-pt-10"
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
              <div class="xl:tw-w-10/12">
                <div
                  class="
                    tw-text-lg
                    lg:tw-text-xl
                    xl:tw-text-2xl
                    tw-font-semibold
                  "
                  v-html="item.title"
                ></div>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div
                  class="
                    tw-text-sm
                    sm:tw-text-base
                    xl:tw-text-lg
                    tw-my-2 tw-opacity-70
                  "
                  v-html="item.desc"
                ></div>
                <ul class="dot-list">
                  <li
                    v-for="(list, i) in item.list"
                    :key="i"
                    class="
                      tw-text-sm
                      sm:tw-text-base
                      xl:tw-text-lg
                      tw-leading-snug tw-opacity-70
                      lg:tw-mt-1
                    "
                  >
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <span v-html="list"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            v-if="$vuetify.breakpoint.xsOnly"
            class="tw-w-full tw-flex-1 tw-pb-5"
          >
            <zoom-on-hover
              :img-normal="'images/sysfeatures/2x/' + item.img"
              :disabled="$vuetify.breakpoint.smAndDown ? 'true' : item.zoomoff"
            >
            </zoom-on-hover>
          </div>

          <div
            v-else
            class="tw-w-full tw-flex-1 tw-px-5"
            :data-aos="index % 2 == 0 ? 'fade-right' : 'fade-left'"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <zoom-on-hover
              :img-normal="'images/sysfeatures/1x/' + item.img"
              :img-zoom="'images/sysfeatures/2x/' + item.img"
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
    height: 250px;
  }
  @media (max-width: $breakpoints-sm) {
    height: 200px;
  }
}
</style>
