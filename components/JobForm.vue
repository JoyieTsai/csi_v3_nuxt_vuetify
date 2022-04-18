<template>
  <div>
    <div class="header-2 tw-font-semibold tw-text-white tw-text-center">
      <slot name="title"></slot>
    </div>
    <div
      class="lg:tw-text-xl xl:tw-text-2xl tw-mb-10 tw-text-white tw-text-center"
    >
      Fill in your information and upload your resume here.
    </div>
    <v-form
      ref="jobform"
      v-model="valid"
      lazy-validation
      class="tw-text-center"
    >
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-x-5 tw-mt-10">
        <v-text-field
          v-model="firstname"
          :rules="[rules.required, rules.name]"
          solo
          placeholder="First Name"
        />
        <v-text-field
          v-model="lastname"
          :rules="[rules.required, rules.name]"
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
        <!-- <v-file-input
          v-model="file"
          placeholder="Upload your resume"
          multiple
          solo
          prepend-icon=""
          prepend-inner-icon="mdi-paperclip"
          class="md:tw-col-span-2"
        >
        </v-file-input> -->
        <div class="md:tw-col-span-2 tw-text-left tw-mb-8">
          <div class="tw-text-white tw-mb-3 tw-text-lg xl:tw-text-xl">
            Upload Resume <small>( pdf, docx, jpg )</small>
          </div>
          <input
            id="uploadFile"
            ref="resume"
            type="file"
            accept=".pdf,.docx,.jpg"
          />
        </div>
      </div>
      <v-btn
        :loading="loading"
        :disabled="loading"
        color="secondary"
        large
        class="hover:tw-shadow-xl tw-w-48"
        @click.prevent="validate"
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
    loader: null,
    loading: false,
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
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 4000)

      this.loader = null
    },
  },
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
      if (this.$refs.jobform.validate()) {
        this.loader = 'loading'
        this.sendMail()
      }
    },
    reset() {
      this.$refs.jobform.reset()
      document.getElementById('uploadFile').value = ''
    },
    resetValidation() {
      this.$refs.jobform.resetValidation()
    },
    async sendMail() {
      const url = 'https://genie.csitech.com/AspSoft/ExternalService.ashx'
      const resume = this.$refs.resume.files[0]
      const formData = new FormData()
      formData.append('action', 'website_apply_job')
      formData.append('firstname', this.firstname)
      formData.append('lastname', this.lastname)
      formData.append('email', this.email)
      formData.append('phone', this.phone)
      formData.append('message', this.message)
      formData.append('resume', resume)

      const content = await axios
        .post(url, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
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
