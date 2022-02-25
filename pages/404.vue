<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section lg"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) center no-repeat`,
          backgroundSize: `cover`,
        }"
      >
        <div
          class="
            main-container
            tw-mx-auto tw-flex tw-items-end tw-justify-center
          "
        >
          <div
            class="
              tw-text-2xl
              md:tw-text-3xl
              xl:tw-text-4xl
              tw-text-center tw-text-white tw-mb-28
              xl:tw-mb-32
              md:tw-w-1/2
              lg:tw-w-1/3
            "
          >
            PAGE NOT FOUND
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto">
        <div class="tw-text-center">
          <button
            class="btn-lg btn-primary hover:tw-shadow-xl"
            @click.prevent="routerTo('/')"
          >
            <div class="tw-flex tw-items-center">
              <img
                :src="require('~/assets/icons/icon-back.svg')"
                alt="back"
                class="tw-mr-3"
              />
              <div>Go back to homepage</div>
            </div>
          </button>
        </div>
        <!-- Promotion -->
        <div class="tw-my-10 lg:tw-my-20 xl:tw-my-32">
          <div class="tw-flex tw-flex-col xl:tw-mb-5 2xl:tw-mb-10">
            <div class="header-3 text-dark tw-font-semibold">{{ title }}</div>
            <div class="border-primary tw-mt-4 tw-mb-8"></div>
          </div>
          <div class="tw-grid lg:tw-grid-cols-3 tw-gap-5">
            <div
              v-for="(item, index) in data"
              :key="index"
              class="tw-flex tw-flex-row tw-items-center"
            >
              <div class="tw-flex-none tw-rounded tw-bg-white shadow-1">
                <img
                  class="tw-m-6 xl:tw-m-10 tw-w-12 xl:tw-w-16"
                  :src="require('~/assets/duotone/' + item.icon)"
                  alt=""
                />
              </div>
              <div class="tw-px-3 xl:tw-px-6">
                <div
                  class="
                    tw-text-sm
                    md:tw-text-base
                    xl:tw-text-lg
                    tw-font-semibold
                  "
                >
                  <nuxt-link
                    :to="item.link"
                    class="text-primary hover:tw-underline"
                    >{{ item.title }}</nuxt-link
                  >
                </div>
                <div
                  class="
                    tw-text-xs
                    sm:tw-text-sm
                    xl:tw-text-base
                    tw-opacity-70 tw-mt-2
                  "
                >
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  // asyncData({ redirect }) {
  //   return redirect('/')
  // },
  data: () => ({
    category: 'page',
    title: 'Popular Products',
    coverimg: '404.jpg',
    data: [
      {
        title: 'Computer Aided Dispatch (CAD)',
        desc: 'Advanced Public Safety Communication and Response',
        icon: 'cad.svg',
        link: 'public-safety/cad',
      },
      {
        title: 'Law Enforcement Records Management (RMS)',
        desc: 'Revolutionize Public Safety Data Collection, Management, and Reporting',
        icon: 'rms.svg',
        link: 'public-safety/rms',
      },
      {
        title: 'Cloud Integration',
        desc: 'Mature hybrid cloud-ready applications for simplicity, speed, and security',
        icon: 'prosecution.svg',
        link: 'justice-courts/county-prosecution',
      },
    ],
  }),
  methods: {
    routerTo(name) {
      this.$router.push({ path: name })
    },
  },
}
</script>
