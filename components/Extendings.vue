<template>
  <div class="main-container tw-mx-auto">
    <div
      class="
        tw-mt-8
        lg:tw-mt-16
        tw-pb-3 tw-grid tw-grid-cols-2
        lg:tw-grid-cols-4
        2xl:tw-grid-cols-5
        tw-gap-5
      "
    >
      <div
        v-for="(item, index) in data"
        :key="index"
        class="tw-bg-white shadow-1 tw-text-center tw-p-5 xl:tw-p-7 zoomin"
      >
        <img
          class="tw-mx-auto tw-my-3 tw-w-14 xl:tw-w-16 2xl:tw-w-20"
          :src="require('~/assets/duotone/' + item.icon)"
          :alt="item.title"
        />
        <div class="tw-text-lg xl:tw-text-xl tw-font-semibold tw-my-3">
          {{ item.title }}
        </div>
        <div class="tw-opacity-70 tw-text-sm sm:tw-text-base tw-leading-snug">
          {{ item.desc }}
        </div>
        <div class="tw-mt-3">
          <nuxt-link
            v-if="item.link"
            :to="'/' + item.link"
            class="primary-link tw-text-sm sm:tw-text-base no-underline"
            >Learn more</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'data'],
  data: () => ({}),
}
</script>

<style lang="scss"></style>
