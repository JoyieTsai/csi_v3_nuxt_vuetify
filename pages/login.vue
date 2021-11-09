<template>
  <v-app>
    <v-main>
      <div class="tw-h-full tw-flex">
        <!-- Login -->
        <div
          class="
            tw-w-full
            lg:tw-w-1/2
            xl:tw-w-2/5
            tw-flex tw-flex-col tw-justify-between
          "
        >
          <div class="tw-flex-auto tw-flex tw-items-center tw-justify-center">
            <div class="tw-px-5 tw-w-80 xl:tw-w-96">
              <img
                class="
                  tw-my-10 tw-mx-auto tw-transform tw-scale-90
                  2xl:tw-scale-100
                "
                src="images/infoshare.svg"
                alt=""
              />

              <validation-observer ref="observer" v-slot="{ invalid }">
                <form @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Account"
                    rules="required|email"
                  >
                    <div class="label-text">Account</div>
                    <v-text-field
                      v-model="account"
                      :error-messages="errors"
                      dense
                      outlined
                      prepend-inner-icon="mdi-account"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required"
                  >
                    <div class="label-text">Password</div>
                    <v-text-field
                      v-model="pw"
                      :error-messages="errors"
                      dense
                      outlined
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <v-btn
                    color="primary"
                    type="submit"
                    large
                    block
                    class="tw-mt-2"
                    :disabled="invalid"
                  >
                    LOGIN
                  </v-btn>
                  <div class="tw-text-base tw-text-right tw-my-5">
                    <nuxt-link to="/" class="footer-link">Password?</nuxt-link>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
          <div class="tw-flex-none tw-opacity-50 tw-text-center tw-py-5">
            Copyright © CSI Technology Group.
          </div>
        </div>
        <!-- Right block -->
        <div
          class="
            tw-hidden
            lg:tw-block lg:tw-w-1/2
            xl:tw-w-3/5
            tw-p-5
            lg:tw-p-10
          "
          :style="{
            background: `url(images/covers/${category}/${coverimg}) top center no-repeat`,
            backgroundSize: `cover`,
          }"
        >
          <div class="tw-w-full 2xl:tw-w-3/4 tw-text-white tw-pl-5 tw-pt-5">
            <div class="header-1 tw-leading-snug">
              {{ title }}
            </div>
            <div class="header-3">{{ subtitle }}</div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'empty',
  data: () => ({
    category: 'page',
    title: 'Welcome to the CSI Customer Platform ',
    subtitle: 'Manage project, report and track issues, all in one place.',
    coverimg: 'login.jpg',
    info: {
      title:
        'We love hearing from you. If you have any questions or want to schedule a demo, please feel free to get in touch.',
      contact: [
        { icon: 'icon-tel_solid', content: '+(732) 346-0200' },
        { icon: 'icon-fax_solid', content: '+(732) 346-0209' },
        { icon: 'icon-mail_solid', content: 'sales@csitech.com' },
        {
          icon: 'icon-location_solid',
          content: '330 Mac Lane Keasbey, NJ 08832, U.S.A',
        },
      ],
    },
    account: '',
    pw: '',
  }),

  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.mdAndDown)
  },
  methods: {
    handleSubmit(e) {
      // eslint-disable-next-line no-console
      console.log(this.formInline)
    },
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>
