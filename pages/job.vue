<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div class="hero-section md" :style="{
          background: `url(images/covers/${category}/${coverimg}) center`,
          backgroundSize: `cover`,
        }">
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug text-dark lg:tw-mb-10">
                {{ title }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto tw-my-10 xl:tw-my-28">
        <v-tabs v-model="tabIndex" :vertical="$vuetify.breakpoint.xsOnly ? false : true">
          <v-tab v-for="(data, i) in getJobs" :key="i"
            class="tw-justify-start tw-text-xl tw-capitalize tw-tracking-normal tw-break-word tw-whitespace-normal tw-my-2 tw-text-left tw-py-3">
            {{ data.position }}
          </v-tab>
          <v-tabs-items v-model="tabIndex">
            <v-tab-item v-for="(data, j) in getJobs" :key="j">
              <v-card flat>
                <v-card-text class="tw-px-0 md:tw-px-10">
                  <div class="header-5 tw-font-semibold tw-mt-10 md:tw-mt-0 tw-mb-10">
                    Position: {{ data.position }}
                  </div>
                  <div class="header-5 tw-font-semibold tw-mt-10 md:tw-mt-0 tw-mb-10">
                    Work Location: {{ data.location }}
                  </div>
                  <div v-for="(func, i) in data.functions" :key="i">
                    <div class="header-5 tw-font-semibold tw-mb-4">
                      {{ func.title }}
                    </div>

                    <ul class="tw-list-disc tw-mb-10 tw-text-lg tw-pl-10">
                      <li v-for="(item, k) in func.content" :key="k" class="tw-text-base lg:tw-text-lg opacity-1 tw-my-2">
                        <span v-html="item"></span>
                      </li>
                    </ul>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>

        <!-- Benefit -->
        <div class="tw-mt-8 tw-mb-14 xl:tw-my-28 tw-text-center">
          <div class="header-3 tw-font-semibold tw-mb-12">
            Benefits Upon Completing 3-Month Probationary Period
          </div>
          <CSIBenefits />
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div v-if="$vuetify.breakpoint.mobile" class="tw-text-sm tw-border-dotted tw-border-2 tw-p-2 tw-mb-5 tw-text-orange-400">
          <!-- <img src="images/desktop.svg" alt="" class="tw-mb-5" /> -->
          Note: The application form does not support mobile devices, please
          access this page from desktop.

          <div class="tw-mt-3 btn-lg btn-primary tw-opacity-40 tw-text-center">
            <img src="images/arrow.svg" alt="" class="tw-inline tw-mr-2 tw-w-4" />
            Click to Apply
          </div>
        </div>
        <div v-else class="tw-mb-16">
          <a class="tw-w-80 btn-xl btn-primary tw-shadow-xl tw-mx-auto" href="https://genie.csitech.com/Include/External/EmploymentApplication.aspx"
            target="_blank">
            <img src="images/arrow.svg" alt="" class="tw-inline tw-mr-2" />
            Click to Apply
          </a>
        </div>
      </div>
      <!-- <div class="bg-primary-light bg-contact-full">
        <div class="main-container tw-mx-auto tw-py-10 xl:tw-py-20">
          <div class="tw-w-4/5 lg:tw-w-2/3 tw-mx-auto">
            <JobForm>
              <div slot="title">Apply for Job</div>
            </JobForm>
          </div>
        </div>
      </div> -->
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    tabIndex: null,
    category: 'page',
    title: 'Join Our Team',
    coverimg: 'job.jpg',
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
  created() {
    this.checkTabIndex(this.$route.query.id)
  },
  methods: {
    checkTabIndex(id) {
      this.tabIndex = Number(id)
    },
  },
}
</script>
