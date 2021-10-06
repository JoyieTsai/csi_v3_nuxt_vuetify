<template>
  <div class="main-container tw-mx-auto">
    <!-- Partners -->
    <div class="header-2 tw-text-center">Our Partners</div>
    <div
      class="
        tw-flex tw-flex-wrap tw-justify-center
        2xl:tw-mt-12
        lg:tw-mt-10
        2xl:tw-mb-10
        tw-mb-6
      "
    >
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="tw-flex tw-items-center tw-mx-10 tw-mb-8"
      >
        <img :src="'images/partner/' + partner" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    partners: [
      'henrylee.png',
      'microsoft.png',
      'azure.png',
      'aws.png',
      'insight.png',
      'dell.png',
    ],
  }),
}
</script>
