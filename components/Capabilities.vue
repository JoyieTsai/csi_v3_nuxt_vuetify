<template>
  <div class="main-container tw-m-auto">
    <v-card flat :class="$vuetify.breakpoint.smAndDown ? 'tw-pa-0' : ''">
      <v-tabs
        v-model="tabIndex"
        background-color="transparent"
        fixed-tabs
        :height="$vuetify.breakpoint.xsOnly ? 65 : 110"
        show-arrows
      >
        <v-tab v-for="(item, i) in data" :key="i">
          <div class="tw-flex tw-flex-col tw-items-center">
            <span :class="['tabicon', item.icon]"></span>
            <div
              class="
                tw-text-lg
                xl:tw-text-xl
                tw-font-semibold
                tw-my-3
                tw-capitalize
                tw-tracking-wide
                tw-hidden
                lg:tw-block
              "
            >
              {{ item.title }}
            </div>
          </div>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabIndex">
        <v-tab-item v-for="(item, j) in data" :key="j">
          <div class="tw-mt-8">
            <v-row>
              <v-col
                xs="12"
                sm="6"
                cols="12"
                class="tw-flex tw-items-center tw-justify-center"
              >
                <div
                  class="
                    sm:tw-p-5
                    xl:tw-p-10
                    tw-flex tw-flex-col tw-text-xl tw-opacity-2
                  "
                >
                  <div class="tw-text-2xl lg:tw-text-4xl tw-font-semibold">
                    {{ item.title }}
                  </div>
                  <div class="border-primary tw-my-3 lg:tw-my-5"></div>
                  <div
                    class="
                      tw-text-sm
                      sm:tw-text-base
                      lg:tw-text-lg
                      xl:tw-text-xl xl:tw-mr-10
                    "
                    v-html="item.desc"
                  ></div>
                </div>
              </v-col>
              <v-col xs="12" sm="6" cols="12" class="tw-flex tw-items-center">
                <div class="tw-w-full img-shadow zoomin tw-overflow-hidden">
                  <v-img
                    :src="require('@/assets/images/capabilities/' + item.img)"
                    :lazy-src="
                      require('@/assets/images/capabilities/lazy/' + item.img)
                    "
                    :alt="item.title"
                    aspect-ratio="1.5"
                    center
                    cover
                    class="slow-zoom"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    tabIndex: 0,
  }),
}
</script>

<style lang="scss">
.tabicon {
  color: inherit;
  font-size: 3rem;
  @media only screen and (max-width: $breakpoints-sm) {
    font-size: 2.2rem;
  }
}
.h-capabilities {
  height: 500px;
  @media (max-width: $breakpoints-2xl) {
    height: 450px;
  }
  @media (max-width: $breakpoints-xl) {
    height: 375px;
  }
  @media (max-width: $breakpoints-md) {
    height: 425px;
  }
  @media (max-width: $breakpoints-sm) {
    height: 265px;
  }
}
</style>
