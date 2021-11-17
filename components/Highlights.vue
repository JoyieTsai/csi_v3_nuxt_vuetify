<template>
  <div class="main-container tw-mx-auto">
    <div
      :class="[
        capabilities ? 'tw-justify-start' : 'tw-justify-end',
        'tw-relative tw-flex tw-flex-col lg:tw-flex-row',
      ]"
    >
      <div
        :class="[
          capabilities ? 'tw-right-0 tw-bottom-0' : 'tw-left-0 tw-top-0',
          'lg:tw-absolute bg-grey-light w-videos tw-z-10',
        ]"
      >
        <video
          v-if="video"
          id="video-container"
          slot="media"
          :poster="'videos/' + img"
          autoplay
          loop
          muted
          playsinline
          class=""
          width="100%"
          :src="'videos/' + video"
        ></video>
        <img v-else-if="img" :src="'videos/' + img" alt="" />
      </div>
      <!-- Highlights -->
      <div
        :class="[
          capabilities
            ? 'xl:tw-pr-20 xl:tw-pl-16 md:tw-pr-16 md:tw-pl-12 xl:tw-mb-16 lg:tw-mb-8'
            : 'xl:tw-pr-16 xl:tw-pl-20 md:tw-pr-12 md:tw-pl-16 xl:tw-mt-16 lg:tw-mt-8',
          'tw-relative w-full lg:tw-w-1/2 lg:tw-py-8 xl:tw-py-10 tw-p-5 bg-primary-dark tw-text-white',
        ]"
      >
        <div class="header-2">Highlights</div>
        <ul class="list-highlights tw-mt-5 tw-mb-2">
          <li
            v-for="(item, index) in data"
            :key="index"
            class="tw-mt-1 xl:tw-mt-2 2xl:tw-mt-4"
          >
            <div class="tw-text-base xl:tw-text-lg 2xl:tw-text-xl">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    capabilities: { type: Array, required: false },
    video: { type: String, required: false },
    img: { type: String, required: false },
    data: { type: Array, required: false },
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.w-videos {
  width: 53%;
  @media only screen and (max-width: $breakpoints-lg - 1) {
    width: 100%;
  }
}
</style>
