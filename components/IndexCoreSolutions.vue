<template>
  <div class="tw-flex tw-items-center bg-primary-light">
    <div class="tw-flex-shrink-0 tw-w-60 tw-hidden xl:tw-block">
      <div
        class="
          tw-flex
          triangle-right
          bg-primary
          tw-text-white
          title
          tw-text-center tw-items-center
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
            tw-text-center tw-cursor-pointer tw-opacity-80
            hover:tw-opacity-100
          "
          @click.prevent="routerTo(solution.link)"
        >
          <v-icon
            :class="[
              solution.icon,
              'tw-text-white tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-leading-none',
            ]"
          ></v-icon>
          <div class="body-text-2 tw-text-white tw-hidden md:tw-block">
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
