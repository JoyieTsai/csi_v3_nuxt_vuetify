<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section md"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) center`,
          backgroundSize: `cover`,
        }"
      >
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
        <v-tabs
          v-model="tabIndex"
          :vertical="$vuetify.breakpoint.xsOnly ? false : true"
        >
          <v-tab
            v-for="(data, i) in datas"
            :key="i"
            class="
              tw-justify-start
              tw-text-xl
              tw-capitalize
              tw-tracking-normal
              tw-break-word
              tw-whitespace-normal
              tw-my-2
              tw-text-left
            "
          >
            {{ data.position }}
          </v-tab>
          <v-tabs-items v-model="tabIndex">
            <v-tab-item v-for="(data, j) in datas" :key="j">
              <v-card flat>
                <v-card-text class="md:tw-pl-10">
                  <div
                    class="
                      header-5
                      tw-font-semibold tw-mt-10
                      md:tw-mt-0
                      tw-mb-10
                    "
                  >
                    Work Location: {{ data.location }}
                  </div>
                  <div v-for="(func, i) in data.functions" :key="i">
                    <div class="header-5 tw-font-semibold tw-mb-4">
                      {{ func.title }}
                    </div>

                    <ul class="tw-list-disc tw-mb-10 tw-text-lg tw-pl-10">
                      <li
                        v-for="(item, j) in func.content"
                        :key="j"
                        class="tw-text-base lg:tw-text-lg opacity-1 tw-my-2"
                      >
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

      <div class="bg-primary-light bg-contact-full">
        <div class="main-container tw-mx-auto tw-py-10 xl:tw-py-20">
          <div class="tw-w-4/5 lg:tw-w-2/3 tw-mx-auto">
            <!-- Form -->
            <JobForm>
              <div slot="title">Apply for Job</div>
            </JobForm>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const jobs = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/jobs.json'
    )
    return { jobs }
  },
  data: () => ({
    tabIndex: null,
    category: 'page',
    title: 'Join Our Team',
    coverimg: 'job.jpg',
    fileList: [],
    uploading: false,
    datas: [],
    files: [],
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
  computed: {
    tabPosition() {
      const screen = document.body.clientWidth
      if (screen <= 768) {
        return 'top'
      } else {
        return 'left'
      }
    },
  },
  created() {
    this.checkTabIndex(this.$route.query.id)
    this.datas = this.jobs.data
  },
  methods: {
    checkTabIndex(id) {
      this.tabIndex = Number(id)
    },
  },
}
</script>
