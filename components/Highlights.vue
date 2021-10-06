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
            ? '2xl:tw-pr-28 2xl:tw-pl-24 xl:tw-pr-20 xl:tw-pl-16 lg:tw-mb-16'
            : '2xl:tw-pr-24 2xl:tw-pl-28 xl:tw-pr-16 xl:tw-pl-20 lg:tw-mt-16',
          'tw-relative w-full lg:tw-w-1/2 tw-p-10 bg-primary-dark tw-text-white',
        ]"
      >
        <div class="header-2">Highlights</div>
        <ul class="list-highlights tw-mt-8">
          <li v-for="(item, index) in data" :key="index" class="tw-mt-4">
            <div class="body-text-1">{{ item }}</div>
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
  @media (max-width: $breakpoints-md) {
    width: 100%;
  }
}

.list-highlights {
  li {
    display: flex;

    &::before {
      content: '';
      display: block;
      min-width: 12px;
      height: 12px;
      margin-right: 1rem;
      margin-top: 12px;
      background-color: $highlight-color;
    }
  }
}
</style>
