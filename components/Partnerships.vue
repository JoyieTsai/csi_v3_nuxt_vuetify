<template>
  <div class="main-container tw-mx-auto">
    <!-- Partners -->
    <div class="header-2 tw-text-center">Technology Partnerships</div>
    <div class="tw-flex tw-justify-center tw-items-center">
      <div v-for="(partner, index) in partners" :key="index" class="tw-my-10">
        <img
          :src="'images/partnerships/' + partner"
          alt=""
          class="tw-opacity-60 tw-mx-10"
        />
      </div>
    </div>
    <!-- <carousel
      :pagination-enabled="false"
      :navigation-enabled="true"
      :per-page-custom="[
        [414, 2],
        [768, 3],
        [1024, 4],
        [1440, 5],
        [1680, 6],
      ]"
    >
      <slide
        v-for="(partner, index) in partners"
        :key="index"
        class="self-center my-10"
      >
        <img
          :src="'images/partnerships/' + partner"
          alt=""
          class="tw-mx-auto opacity-60"
        />
      </slide>
    </carousel> -->
  </div>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'

export default {
  // components: {
  //   Carousel,
  //   Slide,
  // },
  data: () => ({
    partners: [
      'Active911.png',
      'ImageTrend.png',
      'RapidSOS.png',
      'Esri.png',
      'Eagleview.png',
    ],
  }),
}
</script>
