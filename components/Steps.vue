<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-grid lg:tw-grid-cols-2">
      <div class="bg-primary tw-p-8 xl:tw-p-16">
        <div class="tw-text-white header-5">{{ data.desc }}</div>
        <img
          class="tw-mx-auto"
          :src="require('~/assets/images/diagram/' + data.clip)"
          alt=""
        />
      </div>
      <div class="steps tw-flex tw-flex-col">
        <div
          v-for="(item, index) in data.items"
          :key="index"
          class="
            tw-px-12
            xl:tw-px-24
            tw-py-5 tw-flex-1
            steps-item
            tw-flex tw-flex-col tw-justify-center
          "
        >
          <div class="title">{{ index + 1 }}. {{ item.title }}</div>
          <div class="tw-mt-3 body-text-3">{{ item.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({}),
}
</script>

<style lang="scss">
.steps {
  height: 100%;
  &-item:nth-child(even) {
    background-color: rgba($primary-color, 0.1);
  }
}
</style>
