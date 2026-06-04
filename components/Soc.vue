<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto">
    <div
      class="tw-flex tw-flex-col lg:tw-flex-row lg:tw-w-5/6 xl:tw-w-3/4 tw-mx-auto tw-text-center lg:tw-text-left"
    >
      <div
        class="tw-flex-none tw-w-40 lg:tw-w-48 tw-mx-auto lg:tw-pr-12 tw-mb-5"
      >
        <img src="images/soc2_logo.jpg" alt="" />
      </div>
      <div>
        <div
          class="tw-mb-6 tw-text-sm lg:tw-text-base xl:tw-text-lg"
          v-html="data.content"
        ></div>
        <a
          class="btn-outlined tw-rounded-full tw-uppercase"
          :href="'doc/' + data.file"
          target="blank"
          >See more</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
}
</script>
