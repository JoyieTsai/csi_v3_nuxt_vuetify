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
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="tw-mx-5 tw-text-center"
        >
          <div>
            <v-text-field
              v-model="firstname"
              :rules="[rules.required]"
              solo
              placeholder="First Name"
            />
            <v-text-field
              v-model="lastname"
              :rules="[rules.required]"
              solo
              placeholder="Last Name"
            />
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              solo
              placeholder="Email"
              type="email"
            />
            <v-text-field
              v-model="phone"
              :rules="[rules.phone]"
              mask="(###)###-####"
              solo
              placeholder="Phone"
            />
            <v-text-field
              v-model="agency"
              solo
              placeholder="Agency/Organization"
            />
            <v-textarea
              v-model="message"
              :rules="[rules.required]"
              solo
              placeholder="Message"
              rows="4"
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
    </div>
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
    agency: '',
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
