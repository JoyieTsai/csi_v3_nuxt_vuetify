<template>
  <div class="tw-flex tw-items-center bg-primary-light">
    <div class="tw-flex-shrink-0 tw-w-60 tw-hidden xl:tw-block">
      <div
        class="
          tw-flex
          triangle-right
          bg-primary
          tw-text-white tw-text-xl
          xl:tw-text-2xl
          tw-font-semibold tw-text-center tw-items-center
        "
      >
        Core Solutions & Services
      </div>
    </div>

    <div class="tw-flex-grow tw-py-3">
      <div class="tw-grid tw-grid-cols-6 tw-divide-x tw-divide-opacity-25">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          class="
            tw-text-center tw-cursor-pointer tw-opacity-70
            hover:tw-opacity-100
          "
          @click.prevent="routerTo(solution.link)"
        >
          <v-icon
            :class="[
              solution.icon,
              'tw-text-white tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl',
            ]"
          ></v-icon>
          <div
            class="
              tw-text-base
              xl:tw-text-lg
              2xl:tw-text-xl
              tw-text-white tw-hidden
              md:tw-block
              tw-mt-1
            "
          >
            {{ solution.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoreSolutions from '../data/core-solutions.json'

export default {
  data: () => ({
    solutions: CoreSolutions,
  }),
  methods: {
    routerTo(link) {
      this.$router.push({ path: link })
    },
  },
}
</script>
