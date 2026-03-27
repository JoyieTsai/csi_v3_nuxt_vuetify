<template>
  <div class="tw-bg-fixed tw-bg-bottom bg-about">
    <div
      class="main-container tw-mx-auto tw-py-16 xl:tw-py-24 tw-text-center tw-text-white"
    >
      <div
        class="tw-w-full lg:tw-w-2/3 tw-mb-10 xl:tw-mb-20 tw-mx-auto tw-text-sm md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl"
      >
        {{ aboutTitle }}
      </div>
      <div
        class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-5 lg:tw-gap-10"
      >
        <div v-for="(about, i) in aboutArr" :key="i">
          <i :class="[about.icon, 'tw-text-6xl lg:tw-text-8xl']"></i>
          <div class="header-3 tw-font-semibold lg:tw-my-4">
            {{ about.title }}
          </div>
          <div
            class="tw-text-xs md:tw-text-base lg:tw-text-lg xl:tw-text-xl xl:tw-px-5"
          >
            {{ about.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    aboutTitle:
      'CSI designs robust, fully integrated, and configurable software suites to revolutionize state, county, and local government operations.',
    aboutArr: [
      {
        title: '30+ Years',
        desc: 'Experience',
        icon: 'csi-icon-experience_solid',
      },
      {
        title: '35+',
        desc: '35+ Total Solution Products on a Single Platform',
        icon: 'csi-icon-total_solution_solid',
      },
      {
        title: '80%',
        desc: '80% Account Managers with Public Sector Expertise',
        icon: 'csi-icon-am_solid',
      },
      {
        title: '99.5%',
        desc: 'Customer Retention Rate',
        icon: 'csi-icon-customer_rate_solid',
      },
    ],
  }),
}
</script>
