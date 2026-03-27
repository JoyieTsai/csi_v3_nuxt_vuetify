<template>
  <div class="main-container tw-mx-auto tw-text-center">
    <div class="header-2">Benefits & Features</div>

    <div
      class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 xl:tw-gap-8 lg:tw-p-10 tw-py-5"
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        class="tw-flex tw-items-center zoomin"
      >
        <div
          class="tw-flex-shrink-0 tw-h-24 xl:tw-h-28 tw-w-24 xl:tw-w-28 tw-text-4xl tw-flex tw-items-center tw-justify-center xl:tw-text-5xl text-primary-light tw-mr-4 bg-light tw-rounded"
        >
          <img
            class="tw-w-12 xl:tw-w-16"
            :src="require('~/assets/duotone/' + item.icon)"
            alt=""
          />
        </div>
        <div
          class="tw-text-base xl:tw-text-lg 2xl:tw-text-xl tw-text-left tw-font-semibold"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({}),
}
</script>
