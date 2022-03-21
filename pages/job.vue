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
              <div class="header-1 tw-leading-snug text-dark tw-mb-10">
                {{ title }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-container tw-mx-auto tw-my-10 xl:tw-my-28">
        <v-tabs v-model="tabIndex" vertical>
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
                <v-card-text class="tw-pl-10">
                  <div class="header-5 tw-font-semibold tw-mb-10">
                    Work Location: {{ data.location }}
                  </div>
                  <div v-for="(func, i) in data.functions" :key="i">
                    <div class="header-5 tw-font-semibold tw-mb-4">
                      {{ func.title }}
                    </div>

                    <ul class="tw-list-disc tw-mb-10 tw-text-lg">
                      <li
                        v-for="(item, j) in func.content"
                        :key="j"
                        class="tw-text-lg opacity-1 tw-my-2"
                      >
                        <!-- eslint-disable-next-line vue/no-v-html -->
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
        <div class="tw-my-16 xl:tw-my-28 tw-text-center">
          <div class="header-3 tw-font-semibold tw-mb-12">
            Benefits Upon Completing 3-Month Probationary Period
          </div>
          <div class="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
            <div
              v-for="(benefit, i) in benefits"
              :key="i"
              class="
                tw-bg-white
                shadow-1
                tw-flex tw-flex-col tw-items-center tw-text-center tw-p-5
              "
            >
              <img
                :src="require('~/assets/duotone/' + benefit.icon)"
                alt=""
                class="tw-w-16 xl:tw-w-20"
              />
              <div class="title tw-leading-tight tw-mt-3 tw-mb-2">
                {{ benefit.title }}
              </div>
              <div class="text-base tw-opacity-70">{{ benefit.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-primary-light bg-contact-full">
        <div class="main-container tw-mx-auto tw-py-10 xl:tw-py-20">
          <div class="tw-w-4/5 lg:tw-w-2/3 tw-mx-auto">
            <!-- Form -->
            <div class="header-3 tw-font-semibold tw-text-white tw-text-center">
              Apply for Job
            </div>
            <div class="tw-text-2xl tw-mb-10 tw-text-white tw-text-center">
              Fill in your information and upload your resume here.
            </div>

            <div
              class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5 tw-mt-10"
            >
              <v-text-field solo hide-details="auto" placeholder="First Name" />
              <v-text-field solo hide-details="auto" placeholder="Last Name" />
              <v-text-field solo hide-details="auto" placeholder="Email" />
              <v-text-field solo hide-details="auto" placeholder="Phone" />
              <v-textarea
                solo
                placeholder="Message"
                rows="4"
                class="md:tw-col-span-2"
                hide-details="auto"
              />
              <v-file-input
                v-model="files"
                placeholder="Upload your resume"
                multiple
                solo
                prepend-icon=""
                prepend-inner-icon="mdi-paperclip"
                class="md:tw-col-span-2"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="primary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </div>
            <div class="tw-text-center">
              <button class="btn-lg btn-primary-dark hover:tw-shadow-xl">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Jobs from '../data/jobs.json'

export default {
  data: () => ({
    tabIndex: null,
    category: 'page',
    title: 'Join Our Team',
    coverimg: 'job.jpg',
    fileList: [],
    uploading: false,
    datas: Jobs,
    benefits: [
      {
        icon: 'cost_up.svg',
        title: '401K Retirement Plan',
        desc: 'Eligible after one year of employment',
      },
      {
        icon: 'medical_dental.svg',
        title: 'Medical & Dental',
        desc: 'Full-time employee with 90 days of service',
      },
      {
        icon: 'worker_insurance.svg',
        title: "Worker's Compensation",
        desc: "Worker's compensation coverage",
      },
      {
        icon: 'h1b.svg',
        title: 'H1B Sponsorship',
        desc: 'Company-paid H1B Sponsorship',
      },
      {
        icon: 'emergency_care.svg',
        title: 'Disability Insurance',
        desc: 'Company-paid state short-term disability insurance',
      },
      {
        icon: 'health_care.svg',
        title: 'Life Insurance',
        desc: 'Company-paid life insurance',
      },
      {
        icon: 'money_insurance.svg',
        title: 'AD&D Insurance',
        desc: 'Company-paid accidental death & dismemberment (AD&D) insurance',
      },
      {
        icon: 'id.svg',
        title: 'US Permanent Resident Sponsorship',
        desc: 'Eligible upon the 1st anniversary as H1B employee',
      },
    ],
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
  },
  methods: {
    checkTabIndex(id) {
      this.tabIndex = Number(id)
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false
    },
  },
}
</script>
