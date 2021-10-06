<template>
  <div class="main-container tw-m-auto">
    <div class="tw-flex tw-items-start tw-justify-center tw-flex-wrap">
      <div class="w-teambox tw-text-center">
        <img :src="'images/team/' + getMember[0].src" />
        <div class="title tw-font-semibold tw-mt-4 tw-mb-1">
          {{ getMember[0].name }}
        </div>
        <div class="body-text-3 tw-mb-4 tw-opacity-70">
          {{ getMember[0].position }}
        </div>
      </div>

      <div class="w-teambox">
        <div class="bg-primary tw-text-white md:tw-mt-20">
          <div class="tw-p-4 md:tw-p-5 xl:tw-p-10">
            <div class="header-2 tw-leading-none">The Team</div>
            <div class="title">
              Contact our dedicated, experienced account managers
            </div>
          </div>
          <div class="tw-px-4 md:tw-px-5 xl:tw-px-10 tw-pb-7">
            <div class="tw-flex tw-items-center tw-mb-3">
              <img
                :src="require('@/assets/icons/icon-msg.svg')"
                class="tw-w-5 xl:tw-w-7 tw-mr-4"
              />
              <a
                href="mailto:sales@csitech.com"
                class="tw-text-white body-text-2 tw-uppercase"
                >Send a message</a
              >
            </div>
            <div class="tw-flex tw-items-center">
              <img
                :src="require('@/assets/icons/icon-phone.svg')"
                class="tw-w-5 xl:tw-w-7 tw-mr-4"
              />
              <a
                href="tel:732-346-0200"
                class="tw-text-white body-text-2 tw-uppercase"
                >1-732-346-0200</a
              >
            </div>
          </div>
        </div>

        <div v-if="getMember[3]" class="tw-text-center">
          <img :src="'images/team/' + getMember[3].src" />
          <div class="title tw-font-semibold tw-mt-4 tw-mb-1">
            {{ getMember[3].name }}
          </div>
          <div class="body-text-3 tw-mb-4 tw-opacity-70">
            {{ getMember[3].position }}
          </div>
        </div>
      </div>

      <div class="w-teambox">
        <div class="tw-bg-blue-500 tw-bg-opacity-20 w-teambox">
          <div class="tw-p-4 md:tw-p-5 xl:tw-p-10 text-primary">
            <img
              :src="require('@/assets/vectors/quotes.svg')"
              alt=""
              class="tw-mb-5 tw-w-10 xl:tw-w-14"
            />
            <div
              :class="[
                quote.content.length > 40 ? 'slogan-s' : 'slogan',
                'tw-font-semibold tw-leading-snug',
              ]"
            >
              {{ quote.content }}
            </div>
            <div v-if="quote.author" class="tw-mt-3 body-text-3 tw-text-right">
              - {{ quote.author }}
            </div>
          </div>
        </div>

        <div v-if="getMember[2]" class="tw-text-center">
          <img :src="'images/team/' + getMember[2].src" />
          <div class="title tw-font-semibold tw-mt-4 tw-mb-1">
            {{ getMember[2].name }}
          </div>
          <div class="body-text-3 tw-mb-4 tw-opacity-70">
            {{ getMember[2].position }}
          </div>
        </div>
      </div>

      <div class="w-teambox tw-text-center md:tw-mt-20">
        <img :src="'images/team/' + getMember[1].src" />
        <div class="title tw-font-semibold tw-mt-4 tw-mb-1">
          {{ getMember[1].name }}
        </div>
        <div class="body-text-3 tw-mb-4 tw-opacity-70">
          {{ getMember[1].position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Leadership from '~/data/leadership.json'

export default {
  props: {
    pid: { type: String, required: true },
    quote: { type: Object, required: true },
  },
  data: () => ({}),
  computed: {
    getMember() {
      const members = []
      Leadership.forEach((item) => {
        if (item.product) {
          item.product.forEach((res) => {
            if (res === this.pid) {
              members.push(item)
            }
          })
        }
      })
      return members
    },
  },
}
</script>

<style lang="scss">
.w-teambox {
  width: 325px;
  min-height: 265px;

  @media (max-width: $breakpoints-2xl) {
    width: 300px;
  }
  @media (max-width: $breakpoints-lg) {
    width: 235px;
  }
  @media (max-width: $breakpoints-md) {
    width: 250px;
  }
  @media (max-width: $breakpoints-sm) {
    width: 180px;
  }
  @media (max-width: 375px) {
    width: 235px;
  }
}
.slogan {
  font-size: 50px;
  &-s {
    font-size: 35px;
  }
  @media (max-width: $breakpoints-lg) {
    font-size: 40px;
    &-s {
      font-size: 26px;
    }
  }
  @media (max-width: $breakpoints-md) {
    font-size: 35px;
    &-s {
      font-size: 20px;
    }
  }
}
</style>
