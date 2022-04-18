<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section md"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) center no-repeat`,
          backgroundSize: `cover`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto tw-my-10 lg:tw-my-20 xl:tw-my-32">
        <div class="tw-flex tw-flex-col lg:tw-flex-row">
          <!-- Benefit -->
          <div class="lg:tw-w-2/5 xl:tw-w-1/2 md:tw-pr-20 deco-hexagon-2">
            <div
              class="
                tw-text-lg
                lg:tw-text-xl
                xl:tw-text-xl
                tw-my-10
                lg:tw-mb-20
              "
            >
              {{ info.title }}
            </div>
            <ul class="tw-pl-0 tw-mb-10">
              <li v-for="(item, k) in info.contact" :key="k" class="tw-my-5">
                <div class="tw-flex">
                  <i
                    :class="[item.icon, 'text-primary tw-text-3xl tw-mr-4']"
                  ></i>
                  <div
                    class="
                      tw-text-base
                      lg:tw-text-lg
                      tw-opacity-70 tw-whitespace-nowrap
                    "
                  >
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Form -->
          <div class="lg:tw-w-3/5 xl:tw-w-1/2">
            <div
              class="
                tw-p-5
                lg:tw-p-10
                tw-mb-5 tw-bg-white tw-shadow-lg tw-relative
              "
            >
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="tw-grid tw-grid-cols-2 tw-gap-x-5">
                  <v-text-field
                    v-model="firstname"
                    :rules="[rules.required, rules.name]"
                    solo
                    placeholder="First Name"
                    class="input-light"
                  />
                  <v-text-field
                    v-model="lastname"
                    :rules="[rules.required, rules.name]"
                    solo
                    placeholder="Last Name"
                    class="input-light"
                  />
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    solo
                    placeholder="Email"
                    class="input-light"
                  />
                  <v-text-field
                    v-model="phone"
                    :rules="[rules.phone]"
                    mask="(###)###-####"
                    solo
                    placeholder="Phone"
                    class="input-light"
                  />
                  <v-text-field
                    v-model="agency"
                    solo
                    placeholder="Agency/Organization"
                    class="tw-col-span-2 input-light"
                  />
                  <v-textarea
                    v-model="message"
                    :rules="[rules.required]"
                    solo
                    placeholder="Message"
                    rows="6"
                    class="tw-col-span-2 input-light"
                  />
                </div>
                <div class="tw-text-center">
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
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    category: 'page',
    title: 'Contact Us',
    coverimg: 'contact.jpg',
    info: {
      title:
        'We love hearing from you. If you have any questions or want to schedule a demo, please feel free to get in touch.',
      contact: [
        { icon: 'icon-tel_solid', content: '+(732) 346-0200' },
        { icon: 'icon-fax_solid', content: '+(732) 346-0209' },
        { icon: 'icon-mail_solid', content: 'sales@csitech.com' },
        {
          icon: 'icon-location_solid',
          content: '330 Mac Lane, Keasbey, NJ 08832',
        },
      ],
    },
    valid: true,
    loader: null,
    loading: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    agency: '',
    message: '',
    rules: {
      required: (v) => !!v || 'Required',
      name: (v) =>
        (v && v.length <= 15) || 'Name must be less than 15 characters',
      email: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      phone: (v) => (v && v.length >= 10) || 'Phone must be valid',
    },
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.title,
      meta: [{ name: 'description', content: this.title }],
    }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.loader = 'loading'
        this.sendMail()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    async sendMail() {
      const url = 'https://genie.csitech.com/AspSoft/ExternalService.ashx'

      const content = await axios
        .post(url, {
          action: 'website_contact_us',
          firstname: this.firstname,
          lastname: this.lastname,
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
