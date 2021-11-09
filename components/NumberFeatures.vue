<template>
  <div class="main-container tw-mx-auto">
    <div
      class="
        lg:tw-w-3/4
        tw-mx-auto
        bg-primary-light
        tw-text-white tw-text-center tw-py-8 tw-px-8
        md:tw-px-16
        tw-mb-10
        xl:tw-mb-20
      "
    >
      <div class="header-2">{{ data.title }}</div>
      <div class="tw-text-lg lg:tw-text-xl">{{ data.desc }}</div>
      <div class="tw-text-lg lg:tw-text-xl tw-font-semibold tw-mt-8">
        {{ data.subtitle }}
      </div>
    </div>
    <div
      class="
        lg:tw-w-4/5
        tw-grid tw-grid-cols-1
        md:tw-grid-cols-2
        lg:tw-grid-cols-3
        tw-gap-5
        lg:tw-gap-10
        xl:tw-pl-10
        2xl:tw-pl-24
        tw-ml-5
        lg:tw-mx-auto
      "
    >
      <div
        v-for="(item, index) in data.items"
        :key="index"
        class="tw-flex tw-items-center"
      >
        <div class="tw-relative">
          <i
            v-if="item.num"
            :class="[
              item.icon,
              'tw-text-4xl lg:tw-text-5xl text-primary tw-absolute tw-top-3 tw--left-4',
            ]"
          ></i>
          <i
            v-else
            :class="[item.icon, 'tw-text-5xl lg:tw-text-6xl text-primary']"
          ></i>
          <div
            v-show="item.num"
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
        <div class="tw-text-lg md:tw-text-xl tw-font-semibold tw-ml-5">
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
