<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-m-auto">
    <div class="tw-flex tw-flex-col tw-mb-10">
      <div class="tw-text-2xl lg:tw-text-4xl text-dark tw-font-semibold">
        {{ title }}
      </div>
      <div class="border-primary tw-my-2 lg:tw-my-5"></div>
      <div class="
          tw-text-sm
          md:tw-text-base
          lg:tw-text-lg
          tw-mt-2 tw-leading-relaxed
        " v-html="desc"></div>
    </div>
    <div class="tw-grid md:tw-grid-cols-3 tw-gap-10 md:tw-gap-5 tw-my-16">
      <div v-for="(item, index) in data" :key="index" class="tw-flex tw-flex-col xl:tw-flex-row tw-items-center effectbg">
        <div :class="['effectbg-' + (index + 1), 'tw-flex-none']" data-aos="flip-down" data-aos-offset="300" :data-aos-delay="index * 200">
          <i :class="[item.icon, 'tw-text-white tw-text-6xl xl:tw-text-7xl']" data-aos="fade-down" data-aos-offset="500"
            :data-aos-delay="index * 200"></i>
        </div>
        <div class="xl:tw-pl-6 tw-text-center xl:tw-text-left tw-mt-5 xl:tw-mt-0">
          <nuxt-link :to="'/capabilities/' + item.link" class="
              tw-text-lg
              lg:tw-text-xl
              xl:tw-text-2xl
              tw-font-semibold
              text-primary
              hover:tw-underline
            " v-html="item.title"></nuxt-link>
          <div class="tw-opacity-70 tw-mt-2">{{ item.desc }}</div>
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
    @media only screen and (max-width: $breakpoints-lg) {
      height: 125px;
      width: 125px;
    }
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
