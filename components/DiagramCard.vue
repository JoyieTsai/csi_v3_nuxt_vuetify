<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-text-center">
      <div v-if="data.img">
        <img
          class="lg:tw-w-5/6 xl:tw-w-3/4 tw-mx-auto"
          :src="require('~/assets/images/diagram/' + data.img)"
          alt=""
        />
      </div>
      <div
        class="
          tw-text-sm
          lg:tw-text-base
          xl:tw-text-lg
          lg:tw-w-5/6
          xl:tw-w-3/4
          tw-mx-auto tw-mt-6
          xl:tw-mt-12
        "
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
