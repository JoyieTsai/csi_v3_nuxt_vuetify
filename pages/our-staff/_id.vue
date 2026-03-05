<!-- eslint-disable vue/no-v-html -->
<template>
  <v-app>
    <v-main style="height: 400px">
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
                {{ member.name }}
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
          <ul class="tw-pl-0 tw-mb-10 tw-mt-10 tw-mb-16 tw-grid tw-gap-5">
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
          <button
            class="btn-lg btn-primary hover:tw-shadow-xl btn-block btn-flex"
            @click.prevent="downloadVCard"
          >
            <div class="tw-flex tw-items-center">
              <span class="material-symbols-outlined tw-mr-2">
                arrow_downward
              </span>
              <div>Download</div>
            </div>
          </button>
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
    downloadVCard() {
      const m = this.member
      if (!m || !m.name) return

      // 優化姓名處理
      const name = m.name.trim()
      const nameParts = name.split(/\s+/)
      let firstName = ''
      let lastName = name

      if (nameParts.length > 1) {
        lastName = nameParts.pop()
        firstName = nameParts.join(' ')
      }

      // 構建 vCard 內容
      // 加上 CHARSET=UTF-8 確保中文不亂碼
      const companyPhone = '732-346-0200' // 公司電話

      const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN;CHARSET=UTF-8:${name}`,
        `N;CHARSET=UTF-8:${lastName};${firstName};;;`,
        m.title ? `TITLE;CHARSET=UTF-8:${m.title.trim()}` : '',
        'ORG;CHARSET=UTF-8:CSI Technology Group',

        // 1. 公司電話 (Work)
        `TEL;TYPE=WORK,VOICE:${companyPhone}`,

        // 2. 手機 (Cell / Mobile) - 判斷 m.phone 是否存在
        m.phone ? `TEL;TYPE=CELL,VOICE:${m.phone.trim()}` : '',

        // 3. 電子郵件 (Email) - 判斷 m.email 是否存在
        m.email ? `EMAIL;TYPE=WORK:${m.email.trim()}` : '',
        'URL:https://www.csitech.com',
        'END:VCARD',
      ]
        .filter(Boolean)
        .join('\r\n')

      const blob = new Blob([lines], { type: 'text/vcard;charset=utf-8' })
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      // 移除檔名中的特殊字元，避免存檔失敗
      const safeFileName = name.replace(/[\\/:*?"<>|]/g, '_')
      a.download = `${safeFileName}.vcf`

      document.body.appendChild(a) // 確保在 DOM 中
      a.click()

      // 稍微延遲銷毀，確保下載啟動
      setTimeout(() => {
        document.body.removeChild(a)
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
