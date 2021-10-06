<template>
  <div>
    <div
      class="hero-section md:tw-items-center"
      :style="{
        backgroundImage: `url(images/covers/${category}/${coverimg})`,
      }"
    >
      <div class="main-container tw-mx-auto">
        <div
          class="
            md:tw-w-2/3
            lg:tw-w-1/2
            tw-flex tw-flex-col tw-mt-5
            md:tw-mt-0
            lg:tw-mb-12
          "
        >
          <div>
            <slot name="icon"></slot>
          </div>
          <div class="header-1 tw-leading-snug">
            <slot name="title"></slot>
          </div>
          <div class="body-text-1">
            <slot name="subtitle"></slot>
          </div>
          <div v-if="btns" class="tw-my-8">
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
    </div>
    <!-- Discription -->
    <div class="bg-primary-light">
      <div class="main-container tw-mx-auto tw-pb-10 xl:tw-pb-20 tw-text-white">
        <div class="2xl:w-3/4">
          <div class="header-5 tw-mb-2 tw-font-semibold">
            <slot name="desc-heading"></slot>
          </div>
          <div class="body-text-2">
            <slot name="desc-content"></slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Book a Demo -->
    <v-dialog
      v-model="modalBookaDemo"
      overlay-color="white"
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
