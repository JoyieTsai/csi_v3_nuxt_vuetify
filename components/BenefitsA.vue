<template>
  <div class="main-container tw-mx-auto tw-text-center">
    <div class="header-2">Benefits & Features</div>

    <div class="tw-mt-10">
      <div
        class="
          tw-grid
          sm:tw-grid-cols-2
          lg:tw-grid-cols-3
          tw-gap-8
          2xl:tw-px-20
        "
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="tw-bg-white tw-shadow-lg tw-p-8 zoomin"
        >
          <img
            class="tw-mx-auto tw-my-3 tw-w-24"
            :src="require('~/assets/duotone/' + item.icon)"
            alt="public_safety"
          />
          <div class="tw-text-xl xl:tw-text-2xl tw-mb-3">{{ item.title }}</div>
          <div class="base-text tw-opacity-70">{{ item.desc }}</div>
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
