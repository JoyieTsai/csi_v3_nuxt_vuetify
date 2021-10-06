<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-text-center">
      <div>
        <img
          class="tw-mx-auto"
          :src="require('~/assets/images/diagram/' + data.img)"
          alt=""
        />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div
        class="body-text-3 lg:tw-w-3/4 tw-mx-auto tw-mt-12"
        v-html="data.desc"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({}),
}
</script>
