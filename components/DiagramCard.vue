<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-text-center">
      <div
        v-if="data.img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <img
          class="lg:tw-w-5/6 xl:tw-w-3/4 tw-mx-auto"
          :src="require('~/assets/images/diagram/' + data.img)"
          alt=""
        />
      </div>
      <div
        class="tw-text-sm lg:tw-text-base xl:tw-text-lg lg:tw-w-5/6 xl:tw-w-3/4 tw-mx-auto tw-mt-6 xl:tw-mt-12"
        v-html="superscriptTM(data.desc)"
      ></div>
    </div>
  </div>
</template>

<script>
import { superscriptTM } from '~/plugins/myfilter.js'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  methods: {
    superscriptTM,
  },
}
</script>
