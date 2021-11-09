<template>
  <div>
    <div
      class="hero-section md:tw-items-center"
      :style="{
        backgroundImage: `url(images/covers/${category}/${coverimg})`,
      }"
    >
      <div class="main-container tw-mx-auto tw-flex tw-flex-col sm:tw-flex-row">
        <div
          class="
            tw-flex-1
            sm:tw-flex-auto
            tw-w-full
            sm:tw-mr-10
            lg:tw-mr-0
            sm:tw-w-2/3
            lg:tw-flex-1
            tw-flex tw-items-center
          "
        >
          <div class="lg:tw-mb-10">
            <div>
              <slot name="icon"></slot>
            </div>
            <div
              class="
                tw-text-2.5xl
                sm:tw-text-3xl
                lg:tw-text-4xl
                xl:tw-text-5xl
                tw-font-semibold tw-leading-snug tw-my-2
                lg:tw-my-4
              "
            >
              <slot name="title"></slot>
            </div>
            <div class="tw-text-xl lg:tw-text-2xl xl:tw-mr-20">
              <slot name="subtitle"></slot>
            </div>
            <div v-if="btns" class="tw-mt-4 md:tw-mt-8 sm:tw-mb-16">
              <button
                class="btn-lg btn-primary hover:shadow-xl tw-mr-3 md:tw-mr-5"
                @click="() => (modalBookaDemo = true)"
              >
                Book a Demo
              </button>
              <button
                v-if="brochure"
                class="btn-lg btn-primary-inverse hover:tw-shadow-xl"
                @click.prevent="downloadFile(brochure)"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        <div
          class="tw-flex-1 sm:tw-flex-auto tw-w-full sm:tw-w-1/3 lg:tw-flex-1"
        ></div>
      </div>
    </div>
    <!-- Discription -->
    <div class="bg-primary-light">
      <div class="main-container tw-mx-auto tw-pb-10 xl:tw-pb-20 tw-text-white">
        <div class="2xl:tw-w-3/4">
          <div
            class="
              tw-text-lg
              sm:tw-text-xl
              lg:tw-text-2xl
              tw-mb-2 tw-font-semibold
            "
          >
            <slot name="desc-heading"></slot>
          </div>
          <div class="tw-text-sm sm:tw-text-base lg:tw-text-lg">
            <slot name="desc-content"></slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Book a Demo -->
    <v-dialog
      v-model="modalBookaDemo"
      overlay-color="white"
      content-class="accent tw-p-5 lg:tw-p-10"
      @ok="() => (modalBookaDemo = false)"
    >
      <BookDemo />
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: String, required: true },
    coverimg: { type: String, required: true },
    brochure: { type: String, required: false },
    btns: { type: Boolean },
  },
  data: () => ({
    modalBookaDemo: false,
  }),
  methods: {
    downloadFile(file) {
      const url = 'brochure/' + file
      window.open(url, '_blank')
    },
  },
}
</script>
