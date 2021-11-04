<template>
  <div>
    <div class="header-2 tw-text-white tw-text-center">
      <slot name="title"></slot>
    </div>
    <div class="tw-text-xl tw-text-white tw-text-center">
      <slot name="content"></slot>
    </div>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-5 tw-my-8">
      <v-text-field solo hide-details="auto" placeholder="First Name" />
      <v-text-field solo hide-details="auto" placeholder="Last Name" />
      <v-text-field solo hide-details="auto" placeholder="Email" />
      <v-text-field solo hide-details="auto" placeholder="Phone" />
      <v-textarea
        solo
        hide-details="auto"
        placeholder="Message"
        :rows="4"
        class="md:tw-col-span-2"
      />
    </div>
    <div class="tw-text-center">
      <button class="btn-lg btn-primary-dark hover:tw-shadow-xl">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
}
</script>
