<template>
  <div class="tw-pb-5 tw-pt-10 lg:tw-pt-16 footer-line">
    <div class="tw-flex tw-items-stretch tw-flex-col lg:tw-flex-row">
      <!-- Info -->
      <div class="tw-flex tw-flex-col tw-px-12 xl:tw-px-16 2xl:tw-px-20 tw-justify-between tw-mt-5">
        <div>
          <img src="images/csi-logo-vertical.svg" alt="CSI Technology Group" class="tw-mb-8 tw-mx-auto tw-h-20 md:tw-h-28" />
          <!-- Social media -->
          <div class="tw-flex tw-justify-center">
            <a class="btn-circle fb-color" href="https://www.facebook.com/CSITechnologyGroup/?view_public_for=243043239075210" target="_blank">
              <img :src="require('@/assets/icons/icon-fb.svg')" alt="Facebook" />
            </a>
            <a class="tw-ml-3 btn-circle twitter-color" href="https://twitter.com/CSI_InfoShare" target="_blank">
              <img :src="require('@/assets/icons/icon-twitter.svg')" alt="Twitter" />
            </a>
            <a class="tw-ml-3 btn-circle linkedin-color" href="https://www.linkedin.com/company/csi-technology-group/?viewAsMember=true"
              target="_blank">
              <img :src="require('@/assets/icons/icon-linkedin.svg')" alt="Linkedin" />
            </a>
          </div>
          <!-- Address -->
          <div class="tw-text-center tw-mt-10 tw-opacity-70">
            <div class="tw-whitespace-nowrap tw-mb-2">
              330 Mac Lane, Keasbey, NJ 08832
            </div>
            <div>Tel: +1(732)346-0200</div>
          </div>
        </div>
        <!-- VERIFIED Seal -->
        <div class="tw-flex tw-justify-center tw-gap-5 tw-flex-row tw-mt-20 tw-mb-5">
          <a href="//www.dandb.com/verified/business/576765318/" target="_blank">
            <img src="images/verified_logo.png" alt="VERIFIED Seal" class="tw-mx-auto tw-h-20" />
          </a>
          <div>
            <img src="images/soc2_logo.jpg" alt="Soc2" class="tw-mx-auto tw-h-20" />
          </div>
        </div>
      </div>
      <!-- Headings -->
      <div class="tw-flex-auto">
        <div class="tw-hidden 3xl:tw-flex xl:tw-flex-wrap lg:tw-grid 3xl:tw-grid-cols-6 xl:tw-grid-cols-4 lg:tw-grid-cols-3">
          <div v-for="(data, i) in datas" :key="i" class="tw-flex-auto tw-mt-5">
            <div>
              <div class="tw-text-lg xl:tw-text-xl text-primary">
                {{ data.title }}
              </div>
              <div class="divide-primary-light tw-border-t tw-mt-2 tw-mb-4"></div>
              <div v-for="(link, j) in data.links" :key="j">
                <div v-if="link.sub" class="tw-font-semibold tw-mb-3 text-primary-light">
                  {{ link.sub }}
                </div>
                <div v-for="(tab, k) in link.tabs" :key="k" class="item-link tw-pr-5">
                  <nuxt-link v-if="tab.id && tab.id !== 'resource'" :to="'/' + data.category + '/' + tab.id"
                    class="tw-block footer-link tw-text-sm xl:tw-text-base tw-mb-2" v-html="tab.title"></nuxt-link>
                  <a v-else-if="tab.id === 'resource'" class="tw-block footer-link tw-text-sm xl:tw-text-base tw-mb-2"
                    @click="routerToArticle(tab.query)" v-html="tab.title"></a>
                  <nuxt-link v-else :to="'/' + data.category" class="tw-block footer-link tw-text-sm lg:tw-text-base tw-mb-2"
                    v-html="tab.title"></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Copyright -->
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-10 tw-text-center lg:tw-text-left">
          <div class="tw-text-sm tw-opacity-50 tw-order-last lg:tw-order-first md:tw-mr-4">
            © 2024 CSI Technology Group. All Rights Reserved.
          </div>
          <div class="tw-mb-2 lg:tw-mb-0 tw-mr-0 xl:tw-mr-16 sm:tw-mr-8">
            <nuxt-link v-for="(link, i) in footerLinks" :key="i" :to="'/' + link.url"
              class="tw-text-sm xl:tw-text-base text-link tw-opacity-50 tw-mx-2 md:tw-ml-4 hover:tw-opacity-100">{{ link.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Links from '~/data/heading.json'

export default {
  data: () => ({
    datas: Links,
    footerLinks: [
      { title: 'Terms of Use', url: 'terms' },
      { title: 'Privacy Policy', url: 'policy' },
    ],
  }),
  methods: {
    ...mapActions([
      'changeFilteredType',
      'changeFilteredTag',
      'changeCurrentPage',
    ]),
    routerToArticle(query) {
      // Reset tag
      this.changeFilteredTag([])
      this.changeCurrentPage(1)
      this.$router.push({ name: 'resources', query: { id: query } })
    },
  },
}
</script>

<style lang="scss">
.footer-line {
  border-top: 3px solid $primary-light-color !important;
}

.footer-link {
  color: $grey-dark-color !important;
  &:hover {
    color: $primary-color !important;
  }
}
.item-link {
  &:last-child {
    margin-bottom: 1.5rem;
  }
}
</style>
