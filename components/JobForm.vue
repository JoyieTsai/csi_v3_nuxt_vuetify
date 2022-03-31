<template>
  <div>
    <div class="header-3 tw-font-semibold tw-text-white tw-text-center">
      <slot name="title"></slot>
    </div>
    <div class="tw-text-2xl tw-mb-10 tw-text-white tw-text-center">
      Fill in your information and upload your resume here.
    </div>
    <v-form ref="form" v-model="valid" lazy-validation class="tw-text-center">
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-5 tw-mt-10">
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
        />
        <v-text-field
          v-model="phone"
          :rules="[rules.phone]"
          solo
          mask="(###)###-####"
          placeholder="Phone"
        />
        <v-textarea
          v-model="message"
          :rules="[rules.required]"
          solo
          placeholder="Message"
          rows="4"
          class="md:tw-col-span-2"
        />
        <v-file-input
          placeholder="Upload your resume"
          multiple
          solo
          prepend-icon=""
          prepend-inner-icon="mdi-paperclip"
          class="md:tw-col-span-2"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">
              {{ text }}
            </v-chip>
          </template>
        </v-file-input>
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
    resume: '',
    rules: {
      required: (v) => !!v || 'Required',
      email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      phone: (v) => (v && v.length >= 10) || 'Phone must be valid',
    },
  }),
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false
    },
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
          message: this.message,
          resume: this.resume,
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
