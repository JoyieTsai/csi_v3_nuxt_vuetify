<template>
  <div v-if="getMember[0]" class="main-container tw-mx-auto tw-px-0 md:tw-px-5">
    <div class="tw-flex tw-items-start tw-justify-center tw-flex-wrap">
      <div class="w-teambox tw-text-center">
        <img :src="'images/team/' + getMember[0].src" />
        <div class="tw-text-lg xl:tw-text-xl tw-font-semibold tw-mt-3 tw-mb-1">
          {{ getMember[0].name }}
        </div>
        <div class="
            tw-text-sm
            sm:tw-text-base
            xl:tw-text-lg
            tw-mb-5 tw-opacity-70 tw-leading-tight
          ">
          {{ getMember[0].position }}
        </div>
      </div>

      <div class="w-teambox">
        <div class="bg-primary tw-text-white md:tw-mt-20 w-teambox">
          <div class="tw-p-4 md:tw-p-5 xl:tw-p-10">
            <div class="header-2 tw-leading-none">The Team</div>
            <div class="
                tw-text-sm
                sm:tw-text-base
                lg:tw-text-lg
                xl:tw-text-xl
                tw-font-semibold
              ">
              Contact our dedicated, experienced account managers
            </div>
            <div class="tw-mt-4">
              <div class="tw-flex tw-items-center">
                <img :src="require('@/assets/icons/icon-msg.svg')" class="tw-w-3 md:tw-w-5 xl:tw-w-7 tw-mr-2 md:tw-mr-4" />
                <a href="mailto:sales@csitech.com" class="
                    tw-text-white tw-text-xs
                    sm:tw-text-sm
                    lg:tw-text-base
                    xl:tw-text-lg
                    tw-uppercase
                  ">Send a message</a>
              </div>
              <div class="tw-flex tw-items-center tw-mt-3">
                <img :src="require('@/assets/icons/icon-phone.svg')" class="tw-w-3 sm:tw-w-5 xl:tw-w-7 tw-mr-2 md:tw-mr-4" />
                <a href="tel:732-346-0200" class="
                    tw-text-white tw-text-xs
                    md:tw-text-sm
                    lg:tw-text-base
                    xl:tw-text-lg
                    tw-uppercase
                  ">1-732-346-0200</a>
              </div>
            </div>
          </div>
        </div>

        <div v-if="getMember[3]" class="tw-text-center">
          <img :src="'images/team/' + getMember[3].src" />
          <div class="tw-text-lg xl:tw-text-xl tw-font-semibold tw-my-3 tw-mb-1">
            {{ getMember[3].name }}
          </div>
          <div class="
              tw-text-sm
              sm:tw-text-base
              xl:tw-text-lg
              tw-mb-5 tw-opacity-70 tw-leading-tight
            ">
            {{ getMember[3].position }}
          </div>
        </div>
      </div>

      <div class="w-teambox">
        <div class="tw-bg-blue-500 tw-bg-opacity-20 w-teambox">
          <div class="tw-p-4 md:tw-p-5 xl:tw-p-10 text-primary">
            <img :src="require('@/assets/vectors/quotes.svg')" alt="" class="tw-mb-5 tw-w-10 xl:tw-w-14" />
            <div :class="[
                quote.content.length > 40 && quote.content.length < 60
                  ? 'slogan-m'
                  : 'slogan',
                quote.content.length > 60 ? 'slogan-s' : 'slogan',
                'tw-font-semibold tw-leading-snug',
              ]">
              {{ quote.content }}
            </div>
            <div v-if="quote.author" class="tw-mt-3 tw-text-base xl:tw-text-lg tw-text-right">
              - {{ quote.author }}
            </div>
          </div>
        </div>

        <div v-if="getMember[2]" class="tw-text-center">
          <img :src="'images/team/' + getMember[2].src" />
          <div class="tw-text-lg xl:tw-text-xl tw-font-semibold tw-mt-3 tw-mb-1">
            {{ getMember[2].name }}
          </div>
          <div class="
              tw-text-sm
              sm:tw-text-base
              xl:tw-text-lg
              tw-mb-5 tw-opacity-70 tw-leading-tight
            ">
            {{ getMember[2].position }}
          </div>
        </div>
      </div>

      <div class="w-teambox tw-text-center md:tw-mt-20">
        <img :src="'images/team/' + getMember[1].src" />
        <div class="tw-text-lg xl:tw-text-xl tw-font-semibold tw-mt-3 tw-mb-1">
          {{ getMember[1].name }}
        </div>
        <div class="
            tw-text-sm
            sm:tw-text-base
            xl:tw-text-lg
            tw-mb-5 tw-opacity-70 tw-leading-tight
          ">
          {{ getMember[1].position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    pid: { type: String, required: true },
    quote: { type: Object, required: true },
  },
  data: () => ({}),
  computed: {
    ...mapState(['ourTeams']),
    getMember() {
      const members = []
      this.ourTeams.forEach((item) => {
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
  min-height: 315px;

  @media (max-width: $breakpoints-2xl) {
    width: 300px;
    min-height: 300px;
  }
  @media (max-width: $breakpoints-lg) {
    width: 235px;
    min-height: 235px;
  }
  @media (max-width: $breakpoints-md) {
    width: 250px;
    min-height: 225px;
  }
  @media (max-width: $breakpoints-sm) {
    width: 160px;
    min-height: 200px;
  }
}
.slogan {
  font-size: 45px;
  &-m {
    font-size: 38px;
  }
  &-s {
    font-size: 32px;
  }
  @media (max-width: $breakpoints-lg) {
    font-size: 36px;
    &-s {
      font-size: 26px;
    }
  }
  @media (max-width: $breakpoints-md) {
    font-size: 28px;
    &-s {
      font-size: 18px;
    }
  }
  @media (max-width: $breakpoints-sm) {
    font-size: 24px;
    &-s {
      font-size: 16px;
    }
  }
}
</style>
