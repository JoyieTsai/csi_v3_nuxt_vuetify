<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section lg tw-items-center"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug text-dark">{{ title }}</div>
              <div class="tw-text-2xl text-dark">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto tw-mt-10 xl:tw-mt-20">
        <div class="tw-grid tw-gap-5 lg:tw-gap-10">
          <nuxt-link
            v-for="(data, i) in getJobs"
            :key="i"
            class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-text-white tw-p-4 bg-primary"
            :to="'/job?id=' + data.id"
          >
            <div class="lg:tw-text-xl xl:tw-text-2xl tw-font-semibold">
              {{ data.position }}
            </div>
            <div class="tw-flex tw-items-center">
              <span class="lg:tw-text-xl xl:tw-text-2xl">{{
                data.location
              }}</span>
              <span
                class="icon-location_solid tw-text-2xl lg:tw-text-3xl tw-ml-3"
              ></span>
            </div>
          </nuxt-link>
        </div>

        <!-- Benefit -->
        <div class="tw-my-14 xl:tw-my-28 tw-text-center">
          <div class="header-2 tw-font-semibold tw-mb-12">Benefits</div>
          <CSIBenefits />
        </div>
      </div>

      <div class="bg-primary-light bg-contact-full">
        <div class="main-container tw-mx-auto tw-py-10 xl:tw-py-20">
          <div class="tw-w-4/5 lg:tw-w-2/3 tw-mx-auto">
            <!-- Form -->
            <JobForm>
              <div slot="title">Apply Now</div>
            </JobForm>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    activeKey: 0,
    category: 'page',
    title: 'Careers',
    subtitle: 'Join Our Team. Make a Difference',
    coverimg: 'careers.jpg',
    fileList: [],
    uploading: false,
    files: [],
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },

  computed: {
    ...mapState(['jobList']),
    getJobs() {
      if (this.jobList) {
        return this.jobList.data
      }
      return 0
    },
    tabPosition() {
      const screen = document.body.clientWidth
      if (screen <= 768) {
        return 'top'
      } else {
        return 'left'
      }
    },
  },
  mounted() {
    this.$store.dispatch('getJobs')
  },
}
</script>
