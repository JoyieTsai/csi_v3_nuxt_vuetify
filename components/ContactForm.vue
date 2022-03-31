<template>
  <div>
    <div class="header-2 tw-text-white tw-text-center">
      <slot name="title"></slot>
    </div>
    <div class="tw-text-xl tw-text-white tw-text-center">
      <slot name="content"></slot>
    </div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="tw-text-center lg:tw-mx-5"
    >
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-5 tw-mt-8">
        <v-text-field
          solo
          v-model="firstname"
          :rules="[rules.required]"
          placeholder="First Name"
        />
        <v-text-field
          solo
          v-model="lastname"
          :rules="[rules.required]"
          placeholder="Last Name"
        />
        <v-text-field
          solo
          v-model="email"
          :rules="[rules.required, rules.email]"
          placeholder="Email"
        />
        <v-text-field
          solo
          v-model="phone"
          :rules="[rules.phone]"
          mask="(###)###-####"
          placeholder="Phone"
        />
        <v-textarea
          v-model="message"
          :rules="[rules.required]"
          solo
          placeholder="Message"
          :rows="4"
          class="md:tw-col-span-2"
        />
      </div>
      <button
        class="btn-lg btn-primary-dark hover:tw-shadow-xl"
        @click="validate"
      >
        Send
      </button>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    rules: {
      required: (v) => !!v || 'Required',
      email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      phone: (v) => (v && v.length >= 10) || 'Phone must be valid',
    },
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendMail()
      } else {
        event.preventDefault()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async sendMail() {
      const url = ''

      const content = await axios
        .post(url, {
          action: 'website_contact_us',
          firstname: this.firstname,
          lasttname: this.lasttname,
          email: this.email,
          phone: this.phone,
          agency: this.agency,
          message: this.message,
        })
        .then((response) => {
          alert(
            'Your message has been successfully sent. We will contact you very soon! Thank you for contacting us.'
          )
          this.reset(response)
        })
        .catch((error) => {
          console.log(error)
        })
      return {
        content,
      }
    },
  },
}
</script>
