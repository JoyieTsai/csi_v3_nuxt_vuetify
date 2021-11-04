<template>
  <div class="bg-blue-light">
    <div class="main-container tw-mx-auto tw-py-10 lg:tw-py-20 tw-text-center">
      <div class="header-2">{{ data.title }}</div>
      <div class="header-5">{{ data.desc }}</div>

      <div class="tw-pt-10 tw-pb-8">
        <div
          class="
            tw-grid tw-grid-cols-2
            lg:tw-grid-cols-3
            xl:tw-grid-cols-4
            tw-gap-3
            lg:tw-gap-6
            xl:tw-gap-8
          "
        >
          <div
            v-for="(item, index) in data.items"
            :key="index"
            class="tw-bg-white tw-p-4 tw-flex tw-items-center zoomin"
          >
            <div class="tw-text-4xl xl:tw-text-5xl text-primary-light tw-mr-4">
              <i :class="item.icon"></i>
            </div>
            <div
              class="
                tw-text-lg
                lg:tw-text-xl
                xl:tw-text-2xl
                tw-text-left tw-font-semibold
              "
            >
              {{ item.name }}
            </div>
          </div>
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
