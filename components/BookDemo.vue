<template>
  <div>
    <div class="tw-flex tw-flex-col lg:tw-flex-row">
      <div class="tw-flex-1 tw-text-white">
        <div class="tw-flex tw-flex-row lg:tw-flex-col tw-mb-5 lg:tw-mb-0">
          <div>
            <div class="header-2">Book a Demo</div>
            <div class="tw-text-lg lg:tw-text-xl lg:tw-mr-10">
              Want to learn more about our total solution software?<br />Contact
              us today to schedule a demo with one of our account managers.
            </div>
          </div>
          <div class="tw-hidden sm:tw-block lg:tw-mt-12">
            <img
              src="../assets/vectors/bookademo-vector.svg"
              alt=""
              class="tw-transform tw-scale-90 xl:tw-scale-100 tw-mx-auto"
            />
          </div>
        </div>
      </div>
      <div class="tw-flex-1">
        <v-form class="tw-max-w-lg tw-mx-auto">
          <div class="tw-grid tw-gap-5 tw-mt-4 tw-mb-8">
            <v-text-field solo hide-details="auto" placeholder="First Name" />
            <v-text-field solo hide-details="auto" placeholder="Last Name" />
            <v-text-field
              solo
              hide-details="auto"
              placeholder="Email"
              type="email"
            />
            <v-text-field
              solo
              hide-details="auto"
              placeholder="Phone"
              type="number"
            />
            <v-text-field
              solo
              hide-details="auto"
              placeholder="Agency/Organization"
            />
            <v-textarea
              solo
              hide-details="true"
              placeholder="Message"
              rows="4"
            />
          </div>
          <div class="tw-text-center">
            <button
              class="btn-lg btn-primary-dark hover:tw-shadow-xl"
              html-type="submit"
            >
              Send
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
}
</script>
