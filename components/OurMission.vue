<template>
  <div>
    <div
      class="
        bg-mission
        tw-pt-6
        md:tw-pt-12
        xl:tw-pt-20
        tw-pb-28
        md:tw-pb-40
        xl:tw-pb-48
      "
    >
      <div class="lg:tw-w-3/5 tw-ml-16 md:tw-ml-36 xl:tw-ml-56 2xl:tw-ml-80">
        <div class="tw-pt-16 header-2">{{ missions.title }}</div>
        <div
          class="
            tw-text-2xl
            sm:tw-text-3xl
            xl:tw-text-4xl
            2xl:tw-text-5xl
            text-primary
          "
          :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-left'"
          data-aos-duration="1500"
        >
          {{ missions.desc }}
        </div>
      </div>
    </div>
    <div class="tw-flex tw-flex-col xl:tw-flex-row">
      <div
        class="
          xl:tw-flex-shrink-0 xl:tw-w-1/4
          2xl:tw-w-1/3
          tw-flex
          xl:tw-justify-end
        "
      >
        <div
          class="
            tw-mx-auto
            xl:tw-mr-10
            2xl:tw-mr-20
            xl:tw-w-48
            2xl:tw-w-52
            tw-text-center
            xl:tw-text-right xl:tw-pt-12
            tw-pb-5
            header-2
          "
        >
          {{ benefits.title }}
        </div>
      </div>
      <div
        class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2"
        :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-up'"
        data-aos-duration="1500"
      >
        <div v-for="(item, index) in benefits.items" :key="index">
          <div
            :class="[
              index == 0 ? 'bg-gradient-1' : 'bg-gradient-0',
              index == 3 ? 'bg-gradient-2' : 'bg-gradient-0',
              'tw-p-8 lg:tw-p-12 tw-h-full tw-text-white tw-relative zoomin tw-transform hover:tw--translate-y-1 hover:tw-scale-105 hover:tw-shadow-2xl',
            ]"
          >
            <span
              :class="[item.icon, 'tw-text-5xl xl:tw-text-6xl text-highlight']"
            ></span>
            <div class="tw-text-2xl xl:tw-text-2.5xl tw-font-semibold tw-my-2">
              {{ item.title }}
            </div>
            <div class="tw-text-base lg:tw-text-lg tw-leading-sung">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['missions', 'benefits'],
  data: () => ({}),
}
</script>
