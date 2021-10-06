<template>
  <div class="main-container tw-mx-auto">
    <div
      class="
        sm:tw-w-3/4
        tw-mx-auto
        bg-primary-light
        tw-text-white tw-text-center tw-py-8 tw-px-8
        md:tw-px-16
        tw-mb-10
        xl:tw-mb-20
      "
    >
      <div class="header-2">{{ data.title }}</div>
      <div class="body-text-2">{{ data.desc }}</div>
      <div class="title tw-mt-8">{{ data.subtitle }}</div>
    </div>
    <div
      class="
        lg:tw-w-4/5
        tw-mx-auto tw-grid tw-grid-cols-2
        md:tw-grid-cols-3
        tw-gap-10
        xl:tw-pl-10
        2xl:tw-pl-24
      "
    >
      <div
        v-for="(item, index) in data.items"
        :key="index"
        class="tw-flex tw-items-center"
      >
        <div class="tw-relative">
          <i
            :class="[
              item.icon,
              'tw-text-4xl tw-text-primary tw-absolute tw--top-1 tw--left-1',
            ]"
          ></i>
          <div
            class="
              tw-text-5xl
              md:tw-text-6xl
              lg:tw-text-7xl
              text-grey-light
              tw-font-bold
            "
          >
            0{{ index + 1 }}
          </div>
        </div>
        <div class="body-text-2 md:title tw-font-semibold tw-ml-5 tw-w-40">
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
