<template>
  <div class="main-container tw-mx-auto">
    <div class="header-2 tw-text-center">Technology Partnerships</div>
    <div class="tw-flex tw-flex-wrap tw-justify-center tw-items-center">
      <div
        v-for="(partner, index) in partners"
        :key="index"
        class="tw-my-5 xl:tw-my-10 tw-max-w-full"
      >
        <v-img
          :src="'images/partnerships/' + partner"
          alt=""
          class="tw-opacity-60 tw-mx-10 2xl:tw-mx-16"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    partners: ['Active911.png', 'RapidSOS.png', 'Esri.png', 'Eagleview.png'],
  }),
}
</script>
