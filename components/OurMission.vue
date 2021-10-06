<template>
  <div>
    <div class="tw-flex tw-flex-col lg:tw-flex-row">
      <div class="tw-flex-1 bg-mission"></div>
      <div class="tw-flex-1 bg-blue-light">
        <div
          class="
            tw-mt-8 tw-mx-8
            md:tw-mt-16 md:tw-mx-20
            tw-mb-48
            lg:tw-mb-56
            md:tw-w-3/4
          "
        >
          <div class="header-2">{{ data.title }}</div>
          <div class="body-text-2">{{ data.desc }}</div>
        </div>
      </div>
    </div>
    <div class="main-container tw-mx-auto tw--mt-20">
      <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="
            tw-bg-white
            tw-shadow-lg
            tw-relative
            tw-flex
            tw-flex-col
            tw-items-center
            tw-justify-center
            tw-rounded
            tw-p-3
            tw-mb-10
          "
        >
          <div
            class="
              hexagon-primary
              tw-absolute
              tw-text-white
              tw-text-center
              tw-text-6xl
              tw--top-8
              tw-transform
              tw-scale-90
              lg:tw-scale-100
            "
          >
            <i :class="item.icon"></i>
          </div>
          <div class="title tw-my-5 md:tw-my-10">{{ item.title }}</div>
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
