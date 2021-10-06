<template>
  <div class="bg-primary-light bg-contact tw-bg-contain xl:tw-bg-auto">
    <div class="main-container tw-mx-auto tw-py-6">
      <div class="tw-grid tw-grid-flow-col lg:tw-grid-cols-2">
        <div
          class="
            tw-flex tw-flex-col tw-py-8
            xl:tw-py-16
            2xl:tw-pl-20
            tw-text-white tw-text-center
            lg:tw-text-left
          "
        >
          <div class="header-2">Get In Touch</div>
          <div class="body-text-1">
            Have more questions? Need more information? <br />We are here to
            help.
          </div>
          <div class="tw-mt-10 lg:tw-mt-16">
            <button
              class="
                btn-lg btn-primary-inverse
                hover:tw-shadow-xl
                tw-mr-3
                md:tw-mr-5
              "
              @click="() => (modalContact = true)"
            >
              Contact Us
            </button>
            <button
              class="btn-lg btn-primary-dark hover:tw-shadow-xl"
              @click="() => (modalBookaDemo = true)"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="modalContact"
      overlay-color="white"
      content-class="bg-contact-full accent tw-p-10"
      @ok="() => (modalContact = false)"
    >
      <ContactForm>
        <div slot="title">Send CSI a Message</div>
        <div slot="content" class="tw-w-3/4 tw-mx-auto">
          We love hearing from you. If you have any questions, feedback or would
          like to schedule a demo, please fill out this form. We will quickly
          get back to you.
        </div>
      </ContactForm>
    </v-dialog>

    <v-dialog
      v-model="modalBookaDemo"
      overlay-color="white"
      content-class="accent tw-p-10"
      @ok="() => (modalBookaDemo = false)"
    >
      <BookDemo />
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    modalContact: false,
    modalBookaDemo: false,
  }),
  methods: {},
}
</script>
