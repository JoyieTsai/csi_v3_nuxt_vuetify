<template>
  <v-app>
    <v-app-bar
      app
      flat
      fixed
      color="white"
      elevate-on-scroll
      :height="$vuetify.breakpoint.mdAndDown ? '72' : '100'"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </v-app-bar>
    <Nuxt />
    <!-- Footer -->
    <div class="tw-flex tw-py-5 md:tw-py-10 footer-line tw-mt-12 lg:tw-mt-32">
      <div
        class="main-container tw-mx-auto tw-flex tw-flex-col tw-items-center tw-justify-center"
      >
        <div class="tw-mb-3">
          <img src="images/logo-horizontal.svg" class="tw-mx-auto tw-h-6" />
        </div>
        <div class="tw-text-xs tw-opacity-50">
          © CSI Technology Group. All Rights Reserved.
        </div>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss">
.footer-line {
  border-top: 3px solid $primary-light-color !important;
}
</style>
