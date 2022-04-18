<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto">
    <div class="header-2 tw-text-center">Leadership Team</div>
    <div
      class="
        tw-grid tw-grid-cols-2
        sm:tw-grid-cols-3
        xl:tw-grid-cols-4
        2xl:tw-grid-cols-5
        tw-gap-5
        lg:tw-gap-8
        tw-mt-12 tw-mb-20
      "
    >
      <div
        v-for="(dir, i) in directors"
        :key="i"
        class="
          tw-text-center tw-bg-white tw-cursor-pointer tw-shadow-md
          hover:tw-shadow-xl
          zoomin
          ani-avatar
        "
      >
        <div @click="openModel(dir)">
          <div>
            <v-img
              :src="'images/team/' + dir.src"
              aspect-ratio="1"
              cover
              class="tw-mx-auto team-avatar"
            />
          </div>
          <div class="tw-p-3">
            <div
              class="
                team-title
                tw-text-base
                lg:tw-text-lg
                xl:tw-text-xl
                tw-font-semibold tw-leading-snug tw-mb-1
              "
            >
              {{ dir.name }}
            </div>
            <div
              class="
                team-position
                tw-text-xs
                md:tw-text-sm
                xl:tw-text-base
                tw-opacity-70 tw-leading-tight
                hover:hidden
                xl:tw-h-10
              "
              v-html="$options.filters.positionSplit(dir.position)"
            ></div>
            <div
              class="
                team-desc
                tw-hidden tw-text-sm
                xl:tw-text-base
                tw-leading-snug
                xl:tw-mx-5
              "
            >
              {{ dir.desc | getBrief(145) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-2 tw-text-center">Account Management Team</div>
    <div
      class="
        tw-grid tw-grid-cols-2
        sm:tw-grid-cols-3
        xl:tw-grid-cols-4
        2xl:tw-grid-cols-5
        tw-gap-5
        lg:tw-gap-8
        tw-mt-12 tw-mb-20
      "
    >
      <div
        v-for="(am, j) in ams"
        :key="j"
        class="
          tw-text-center tw-bg-white tw-cursor-pointer tw-shadow-md
          hover:tw-shadow-xl
          tw-relative
          zoomin
          ani-avatar
        "
      >
        <div @click="openModel(am)">
          <div>
            <v-img
              :src="'images/team/' + am.src"
              aspect-ratio="1"
              cover
              class="tw-mx-auto team-avatar"
            />
          </div>
          <div class="tw-p-3">
            <div
              class="
                team-title
                tw-text-base
                lg:tw-text-lg
                xl:tw-text-xl
                tw-font-semibold tw-leading-snug tw-mb-1
              "
            >
              {{ am.name }}
            </div>
            <div
              class="
                team-desc
                tw-hidden tw-text-sm
                xl:tw-text-base
                tw-leading-snug
                xl:tw-mx-5
              "
            >
              {{ am.desc | getBrief(135) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-2 tw-text-center">Special Thanks to Our Advisor</div>
    <div
      class="tw-mt-36 tw-mb-6 lg:tw-mb-12 lg:tw-w-4/5 xl:tw-w-3/4 tw-mx-auto"
      :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-up'"
      data-aos-duration="1500"
    >
      <div v-for="(adv, k) in advisor" :key="k">
        <div
          v-if="$vuetify.breakpoint.mdAndUp"
          class="
            tw-bg-white
            shadow-1
            tw-flex tw-flex-col tw-items-center tw-relative
          "
        >
          <div class="tw-absolute tw--top-28">
            <img
              :src="'images/team/' + adv.src"
              alt=""
              class="tw-w-48 lg:tw-w-64"
            />
          </div>
          <div class="tw-p-8 lg:tw-p-16">
            <div
              class="
                tw-text-lg
                lg:tw-text-xl
                xl:tw-text-2xl
                tw-font-semibold tw-mt-10
                lg:tw-mt-20
                tw-text-center
              "
            >
              {{ adv.name }}
            </div>
            <div
              class="
                tw-text-base
                lg:tw-text-lg
                xl:tw-text-xl
                tw-opacity-70 tw-text-center
              "
              v-html="$options.filters.positionSplit(adv.position)"
            ></div>
            <div
              class="tw-mt-8 tw-text-base lg:tw-text-lg"
              v-html="adv.desc"
            ></div>
          </div>
        </div>

        <!-- Mobile Only -->
        <div
          v-else
          class="
            tw-bg-white
            shadow-1
            tw-flex tw-flex-col tw-items-center tw-relative
          "
          @click="openModel(adv)"
        >
          <div class="tw-absolute tw--top-28">
            <img
              :src="'images/team/' + adv.src"
              alt=""
              class="tw-w-48 lg:tw-w-64"
            />
          </div>
          <div class="tw-p-8 lg:tw-p-16">
            <div
              class="
                tw-text-lg
                lg:tw-text-xl
                xl:tw-text-2xl
                tw-font-semibold tw-mt-10
                lg:tw-mt-20
                tw-text-center
              "
            >
              {{ adv.name }}
            </div>
            <div
              class="
                tw-text-base
                lg:tw-text-lg
                xl:tw-text-xl
                tw-opacity-70 tw-text-center
              "
              v-html="$options.filters.positionSplit(adv.position)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Show Detail -->
    <v-dialog
      v-model="modalDetail"
      content-class="tw-bg-white tw-m-0 tw-overflow-x-hidden"
      @ok="() => (modalDetail = false)"
    >
      <v-toolbar flat color="white">
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="modalDetail = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-sheet id="scrolling-techniques-7" max-height="600">
        <div
          class="tw-flex tw-flex-col sm:tw-flex-row tw-px-5 md:tw-px-8 tw-pb-8"
        >
          <div class="sm:tw-w-1/4">
            <img
              :src="'images/team/' + popSrc"
              alt=""
              class="tw-w-40 md:tw-w-full tw-pr-5 md:tw-pr-10 tw-mb-5"
            />
          </div>
          <div class="sm:tw-w-3/4">
            <div class="header-3 tw-font-semibold">{{ popName }}</div>
            <div class="tw-text-base lg:tw-text-lg xl:tw-text-xl tw-opacity-70">
              {{ popPosition }}
            </div>
            <div class="border-primary tw-mt-4 tw-mb-8"></div>
            <div class="tw-text-sm lg:tw-text-base" v-html="popDesc"></div>
          </div>
        </div>
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
import Leadership from '~/data/leadership.json'

export default {
  data: () => ({
    modalDetail: false,
    popName: String,
    popSrc: String,
    popPosition: String,
    popDesc: String,
  }),
  computed: {
    directors() {
      const dirarr = Leadership.filter((el) => {
        return el.type === 'Director'
      })
      return dirarr
    },
    ams() {
      const amrarr = Leadership.filter((el) => {
        return el.type === 'Account Management'
      })
      return amrarr
    },
    advisor() {
      const advarr = Leadership.filter((el) => {
        return el.type === 'Advisor'
      })
      return advarr
    },
  },
  methods: {
    openModel(arr) {
      this.popName = arr.name
      this.popSrc = arr.src
      this.popPosition = arr.position
      this.popDesc = arr.desc
      this.modalDetail = true
    },
  },
}
</script>
