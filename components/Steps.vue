<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-grid lg:tw-grid-cols-2">
      <div
        class="
          bg-primary
          tw-flex tw-flex-col tw-justify-center tw-p-6
          xl:tw-p-12
        "
      >
        <div
          class="
            tw-text-white tw-text-lg
            lg:tw-text-xl
            xl:tw-text-2xl
            tw-text-center tw-mx-5
            lg:tw-mx-10
            tw-mb-5
          "
        >
          {{ data.desc }}
        </div>
        <!-- <img class="tw-mx-auto" :src="'/comp/' + data.clip" /> -->
        <lottie
          v-if="id === 'data-sharing'"
          class="tw-w-full"
          :options="lottieOptions.clipData"
          v-on:animCreated="handleAnimation($event, 'dataAnim')"
        />
        <lottie
          v-else-if="id === 'low-code'"
          class="tw-w-full"
          :options="lottieOptions.clipLowcode"
          v-on:animCreated="handleAnimation($event, 'lowcodeAnim')"
        />
      </div>
      <div class="steps tw-flex tw-flex-col">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="
            tw-px-6
            lg:tw-px-12
            xl:tw-px-24
            tw-py-5 tw-flex-1
            steps-item
            tw-flex tw-flex-col tw-justify-center
          "
        >
          <div class="tw-text-lg xl:tw-text-xl tw-font-medium">
            {{ index + 1 }}. {{ item.title }}
          </div>
          <div
            class="tw-mt-3 tw-text-sm lg:tw-text-base xl:tw-text-lg"
            v-html="item.body"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as DataSharing from '~/assets/lottie/data-sharing.json'
import * as LowCode from '~/assets/lottie/low-code.json'

export default {
  components: {
    lottie,
  },
  props: ['id', 'data'],
  data: () => ({
    anim: {
      dataAnim: null,
      lowcodeAnim: null,
    },
    lottieOptions: {
      clipData: { animationData: DataSharing.default },
      clipLowcode: { animationData: LowCode.default },
    },
  }),
  methods: {
    handleAnimation(anim, type) {
      this.anim[type] = anim
    },
  },
}
</script>

<style lang="scss">
.steps {
  height: 100%;
  &-item:nth-child(even) {
    background-color: rgba($primary-color, 0.1);
  }
}
</style>
