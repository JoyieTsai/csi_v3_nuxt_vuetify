<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-m-auto">
    <div class="header-2 tw-text-center">Leadership Team</div>
    <div
      class="
        tw-grid tw-grid-cols-2
        md:tw-grid-cols-3
        xl:tw-grid-cols-5
        tw-gap-6 tw-mt-12 tw-mb-20
      "
    >
      <div
        v-for="(dir, i) in directors"
        :key="i"
        class="
          tw-text-center tw-bg-white tw-cursor-pointer tw-shadow-md
          hover:tw-shadow-xl
        "
      >
        <div @click="openModel(dir)">
          <div>
            <img :src="'images/team/' + dir.src" alt="" />
          </div>
          <div class="p-3">
            <div class="body-text-1 tw-font-semibold">{{ dir.name }}</div>
            <div
              class="body-text-3 tw-opacity-70"
              v-html="$options.filters.positionSplit(dir.position)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-2 tw-text-center">Account Management Team</div>
    <div
      class="
        tw-grid tw-grid-cols-2
        md:tw-grid-cols-3
        xl:tw-grid-cols-5
        tw-gap-6 tw-mt-12 tw-mb-20
      "
    >
      <div
        v-for="(am, j) in ams"
        :key="j"
        class="
          tw-text-center tw-bg-white tw-cursor-pointer tw-shadow-md
          hover:tw-shadow-xl
          tw-mb-5
          xl:tw-mb-10
        "
      >
        <div @click="openModel(am)">
          <div>
            <img :src="'images/team/' + am.src" alt="" />
          </div>
          <div class="p-3">
            <div class="body-text-1 tw-font-semibold">{{ am.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-2 tw-text-center">Special Thanks to Our Advisor</div>
    <div
      class="tw-mt-36 tw-mb-10 lg:tw-mb-20 lg:tw-w-4/5 xl:tw-w-3/4 tw-mx-auto"
    >
      <div
        v-for="(adv, k) in advisor"
        :key="k"
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
        <div class="p-8 lg:p-16">
          <div
            class="
              body-text-1
              tw-font-semibold tw-mt-10
              lg:tw-mt-20
              tw-text-center
            "
          >
            {{ adv.name }}
          </div>
          <div
            class="body-text-3 tw-opacity-70 tw-text-center"
            v-html="$options.filters.positionSplit(adv.position)"
          ></div>
          <div class="tw-mt-8" v-html="adv.desc"></div>
        </div>
      </div>
    </div>

    <!-- Show Detail -->
    <v-dialog
      v-model="modalDetail"
      overlay-color="white"
      @ok="() => (modalDetail = false)"
    >
      <div slot="closeIcon">
        <button class="btn-close"></button>
      </div>
      <div class="tw-flex tw-p-8">
        <div class="tw-w-1/4">
          <img
            :src="'images/team/' + popSrc"
            alt=""
            class="tw-w-full tw-pr-10"
          />
        </div>
        <div class="tw-w-3/4">
          <div class="header-3 tw-font-semibold">{{ popName }}</div>
          <div class="body-text-2 tw-opacity-70">{{ popPosition }}</div>
          <div class="border-primary tw-mt-4 tw-mb-8"></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="text-base" v-html="popDesc"></div>
        </div>
      </div>
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
