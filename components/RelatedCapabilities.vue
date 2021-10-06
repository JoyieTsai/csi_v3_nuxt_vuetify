<template>
  <div class="main-container m-auto">
    <div class="tw-flex tw-flex-col tw-mb-10">
      <div class="header-3 text-dark tw-font-semibold">{{ title }}</div>
      <div class="border-primary tw-mt-4 tw-mb-8"></div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="body-text-2 tw-mt-2 tw-leading-relaxed" v-html="desc"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-5">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="tw-flex tw-flex-col xl:tw-flex-row tw-items-center effectbg"
      >
        <div :class="['effectbg-' + (index + 1), 'tw-flex-none']">
          <i :class="[item.icon, 'tw-text-white tw-text-7xl']"></i>
        </div>
        <div class="tw-px-6 tw-text-center xl:tw-text-left tw-mt-5 xl:tw-mt-0">
          <div class="title font-semibold">
            <nuxt-link
              :to="item.link"
              class="text-primary hover:tw-underline"
              >{{ item.title }}</nuxt-link
            >
          </div>
          <div class="body-text-3 tw-opacity-70">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    title: 'Related Capabilities',
    desc: 'Core competencies, innovations, and technological services to revolutionize eGovernment operations',
  }),
  methods: {},
}
</script>

<style lang="scss">
.effectbg {
  &-1,
  &-2,
  &-3 {
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-1 {
    background-image: url('../assets/vectors/effectbg_1.svg');
  }
  &-2 {
    background-image: url('../assets/vectors/effectbg_2.svg');
  }
  &-3 {
    background-image: url('../assets/vectors/effectbg_3.svg');
  }
}
</style>
