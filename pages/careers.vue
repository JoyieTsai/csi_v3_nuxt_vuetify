<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div class="hero-section lg tw-items-center" :style="{
        backgroundImage: `url(images/covers/${category}/${coverimg})`,
      }">
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug text-dark">{{ title }}</div>
              <div class="tw-text-2xl text-dark">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto">
        <div class="tw-flex-col">
          <div v-if="$vuetify.breakpoint.mobile"
            class="tw-text-sm tw-border-dotted tw-border-2 tw-p-2 tw-mb-5 tw-text-orange-400">
            <!-- <img src="images/desktop.svg" alt="" class="tw-mb-5" /> -->
            Note: The application form does not support mobile devices, please
            access this page from desktop.

            <div class="tw-mt-3 btn-lg btn-primary tw-opacity-40 tw-text-center">
              <img src="images/arrow.svg" alt="" class="tw-inline tw-mr-2 tw-w-4" />
              Click to Apply
            </div>
          </div>
          <div v-else class="tw-mb-16">
            <a class="tw-w-80 btn-xl btn-primary tw-shadow-xl tw-mx-auto"
              href="https://genie.csitech.com/Include/External/EmploymentApplication.aspx" target="_blank">
              <img src="images/arrow.svg" alt="" class="tw-inline tw-mr-2" />
              Click to Apply
            </a>
          </div>
        </div>
        <div class="tw-grid tw-gap-4 lg:tw-gap-8">
          <div v-if="getJobs === null" class="tw-w-5/6 mx-auto tw-p-6 tw-border-l-4 tw-border-blue-500 bg-light">
            <div class="tw-text-xl tw-mb-3">
              Thank you for your interest in joining CSI.
            </div>
            <div>At this time, we do not have any current openings available.<br>
              However, we encourage you to utilize the <b>CLICK TO APPLY</b> button to
              submit
              your resume for future consideration.<br>
              We are always on the lookout for talented individuals, and your
              application
              will
              be carefully reviewed when a suitable opportunity arises.<br>
              We appreciate your interest in becoming part of our team.</div>
          </div>

          <nuxt-link v-for="(data, i) in getJobs" :key="i"
            class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-text-primary tw-py-3 tw-px-5 bg-primary btn-primary-inverse hover:tw-bg-slate-100"
            :to="'/job?id=' + data.id">
            <div class="lg:tw-text-xl xl:tw-text-2xl tw-font-semibold">
              {{ data.position }}
            </div>
            <div class="tw-flex tw-items-center">
              <span class="lg:tw-text-lg xl:tw-text-xl">{{
                data.location
                }}</span>
              <span class="csi-icon-location_solid tw-text-2xl lg:tw-text-3xl tw-ml-3"></span>
            </div>
          </nuxt-link>
        </div>

        <!-- Benefit -->
        <div class="tw-my-14 xl:tw-my-28 tw-text-center">
          <div class="header-2 tw-font-semibold tw-mb-12">Benefits</div>
          <CSIBenefits />
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
      titleTemplate: '%s | ' + this.title,
      meta: [{ name: 'description', content: this.subtitle }],
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
      if (!process.client) return 'left'
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
