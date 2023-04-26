<template>
  <v-app>
    <v-main>
      <div>
        <div
          class="header-3 tw-font-semibold text-dark tw-my-10 tw-text-center"
        >
          CSI Employment Application Form
        </div>
        <div v-if="$vuetify.breakpoint.mobile" class="bg-grey-light tw-p-10">
          <img src="images/desktop.svg" alt="" class="tw-mb-10" />
          This form does not support mobile devices, please access this page
          from desktop.
        </div>

        <div v-else>
          <iframe
            src="https://genie.csitech.com/Include/External/EmploymentApplication.aspx"
            frameborder="0"
            class="tw-w-full tw-h-screen"
          ></iframe>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
}
</script>
