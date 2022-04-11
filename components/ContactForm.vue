<template>
  <div>
    <div class="header-2 tw-text-white tw-text-center">
      <slot name="title"></slot>
    </div>
    <div class="tw-text-xl tw-text-white tw-text-center">
      <slot name="content"></slot>
    </div>

    <v-form ref="form" lazy-validation class="tw-text-center lg:tw-mx-5">
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-5 tw-mt-8">
        <v-text-field
          v-model="firstname"
          solo
          :rules="[rules.required, rules.name]"
          placeholder="First Name"
        />
        <v-text-field
          v-model="lastname"
          solo
          :rules="[rules.required, rules.name]"
          placeholder="Last Name"
        />
        <v-text-field
          v-model="email"
          solo
          :rules="[rules.required, rules.email]"
          placeholder="Email"
        />
        <v-text-field
          v-model="phone"
          solo
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
      <v-btn
        color="secondary"
        large
        class="hover:tw-shadow-xl tw-w-48"
        @click="validate"
      >
        Send
      </v-btn>
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
      name: (v) =>
        (v && v.length <= 15) || 'Name must be less than 15 characters',
      email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      phone: (v) => (v && v.length >= 10) || 'Phone must be valid',
    },
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendMail()
      } else {
        return 0
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async sendMail() {
      const url = 'http://10.1.1.102:9001/AspSoft/ExternalService.ashx'

      const content = await axios
        .post(
          url,
          {
            action: 'website_contact_us',
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            agency: this.agency,
            message: this.message,
          },
          {
            crossDomain: true,
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'cache-control': 'no-cache',
            },
          }
        )
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
