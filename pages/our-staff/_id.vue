<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section sm"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }"
      >
        <div
          class="main-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row"
        >
          <div class="lg:tw-w-1/3 tw-flex tw-justify-center">
            <div class="staff-cover tw-flex tw-justify-center tw-items-end">
              <div class="hexagon-bg">
                <img :src="'images/team/' + member.cover" alt="member" />
              </div>
            </div>
          </div>
          <div
            class="tw-flex lg:tw-text-white tw-items-center tw-justify-center tw-mt-6 lg:tw-mt-0"
          >
            <div class="tw-text-center lg:tw-text-left">
              <div class="header-1 tw-leading-snug tw-mb-0">
                {{ member.firstname }} {{ member.lastname }}
                <div class="header-3 tw-opacity-70">{{ member.aka }}</div>
              </div>
              <div class="tw-text-2xl">{{ member.title }}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="main-container tw-mx-auto tw-flex tw-items-center tw-justify-center lg:tw-items-start lg:tw-justify-start tw-mt-72 lg:tw-mt-0"
      >
        <div class="lg:tw-w-1/3"></div>
        <div>
          <button
            class="btn btn-block btn-lg btn-primary-dark hover:tw-shadow-xl btn-flex tw-my-10"
            @click.prevent="downloadVCard"
          >
            <div class="tw-flex tw-items-center">
              <span class="material-symbols-outlined tw-mr-2">
                arrow_downward
              </span>
              <div>SAVE CONTACT</div>
            </div>
          </button>

          <ul class="tw-pl-0 tw-mb-16 tw-grid tw-gap-5">
            <li v-if="member.phone">
              <div class="tw-flex">
                <i
                  class="csi-icon-tel_solid text-primary tw-text-3xl tw-mr-4"
                ></i>
                <div class="tw-text-lg tw-opacity-70 tw-whitespace-nowrap">
                  {{ member.phone }}
                </div>
              </div>
            </li>
            <li>
              <div class="tw-flex">
                <div
                  class="tw-flex tw-items-center text-primary tw-mr-4 material-symbols-outlined tw-text-3xl"
                >
                  domain
                </div>
                <div class="tw-text-lg tw-opacity-70 tw-whitespace-nowrap">
                  732-346-0200
                </div>
              </div>
            </li>
            <li v-if="member.email">
              <div class="tw-flex">
                <i
                  class="csi-icon-mail_solid text-primary tw-text-3xl tw-mr-4"
                ></i>
                <div class="tw-text-lg tw-opacity-70 tw-whitespace-nowrap">
                  {{ member.email }}
                </div>
              </div>
            </li>
            <li>
              <div class="tw-flex">
                <div
                  class="tw-flex tw-items-center text-primary tw-mr-4 material-symbols-outlined tw-text-3xl"
                >
                  captive_portal
                </div>
                <div class="tw-text-lg tw-opacity-70 tw-whitespace-nowrap">
                  www.csitech.com
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'simple',
  async fetch() {
    await this.$store.dispatch('getStaffByID', this.$route.params.id)
  },
  data: () => ({
    category: 'page',
    coverimg: 'blue.jpg',
  }),
  computed: {
    ...mapState(['currentStaff']),
    member() {
      return this.currentStaff
    },
  },
  mounted() {
    this.$store.dispatch('getStaffByID', this.$route.params.id)
  },
  methods: {
    async downloadVCard() {
      const m = this.member

      // Basic validation: Ensure core identity fields are present
      if (!m || !m.firstname || !m.lastname) return

      const firstName = m.firstname.trim()
      const lastName = m.lastname.trim()
      const aka = m.aka ? m.aka.trim() : ''

      /**
       * Naming Logic:
       * If 'aka' exists, it REPLACES 'firstname' in the display name (FN).
       * Result: "Aka Lastname"
       * Otherwise: "Firstname Lastname"
       */
      const vCardFN = aka ? `${aka} ${lastName}` : `${firstName} ${lastName}`
      const vCardN = aka ? `${aka}` : `${firstName}`

      // --- Step 1: Handle Profile Photo (Base64 Conversion) ---
      let photoContent = ''
      if (m.cover) {
        try {
          const imageUrl = `images/team/${m.cover}`
          const response = await fetch(imageUrl)
          const blob = await response.blob()

          const base64 = await new Promise((resolve) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result.split(',')[1])
            reader.readAsDataURL(blob)
          })

          // Embed as inline Base64 to ensure the photo works offline
          photoContent = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`
        } catch (err) {
          console.warn(
            'VCard Photo Error: Could not fetch or convert image.',
            err
          )
        }
      }

      // --- Step 2: Define vCard Structure ---
      const companyPhone = '732-346-0200'

      const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN;CHARSET=UTF-8:${vCardFN}`,
        // N field (Structured Name) stays as "Lastname;Firstname" for correct sorting
        `N;CHARSET=UTF-8:${lastName};${vCardN};;;`,
        m.title ? `TITLE;CHARSET=UTF-8:${m.title.trim()}` : '',
        'ORG;CHARSET=UTF-8:CSI Technology Group',

        // Contact Info
        `TEL;TYPE=WORK,VOICE:${companyPhone}`,
        m.phone ? `TEL;TYPE=CELL,VOICE:${m.phone.trim()}` : '',
        m.email ? `EMAIL;TYPE=WORK:${m.email.trim()}` : '',

        'URL:https://www.csitech.com',
        photoContent,
        'END:VCARD',
      ]
        .filter(Boolean)
        .join('\r\n')

      // --- Step 3: Trigger Browser File Download ---
      const blob = new Blob([lines], { type: 'text/vcard;charset=utf-8' })
      const url = URL.createObjectURL(blob)

      const downloadLink = document.createElement('a')
      downloadLink.href = url

      // Use the generated vCardFN for the filename
      const fileName = vCardFN.replace(/[\\/:*?"<>|]/g, '_')
      downloadLink.download = `${fileName}.vcf`

      document.body.appendChild(downloadLink)
      downloadLink.click()

      // Cleanup: Free memory and remove DOM element
      setTimeout(() => {
        document.body.removeChild(downloadLink)
        URL.revokeObjectURL(url)
      }, 100)
    },
  },
}
</script>

<style lang="scss">
.staff-cover {
  width: 425px;
  height: 360px;
  background-image: url('@/assets/vectors/staff-bg.svg');
  background-size: contain;
}
.hexagon-bg {
  height: 290px;
  width: 340px;
  overflow: hidden;
  clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0 50%);
}

.hexagon-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media only screen and (max-width: ($breakpoints-lg - 1px)) {
  .staff-cover {
    width: 300px;
    height: 250px;
  }
  .hexagon-bg {
    height: 80%;
    width: 80%;
  }
}
</style>
