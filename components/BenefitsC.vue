<template>
  <div class="main-container tw-mx-auto tw-text-center">
    <div class="header-2">Benefits</div>

    <div
      class="
        tw-grid
        md:tw-grid-cols-2
        lg:tw-grid-cols-3
        tw-gap-8
        lg:tw-p-10
        tw-py-5
      "
    >
      <div v-for="(item, index) in data" :key="index" class="flex items-center">
        <div class="tw-text-5xl text-primary-light tw-mr-4 bg-light tw-rounded">
          <img
            class="tw-w-16 tw-m-5"
            :src="require('~/assets/duotone/' + item.icon)"
            alt=""
          />
        </div>
        <div class="body-text-1 tw-text-left tw-font-semibold">
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
