<template>
  <div class="tw-pb-5 tw-pt-10 lg:tw-pt-20 footer-line">
    <div class="tw-flex tw-items-stretch tw-flex-col lg:tw-flex-row">
      <!-- Info -->
      <div
        class="
          tw-flex tw-flex-col tw-px-12
          xl:tw-px-20
          tw-w-full
          xl:tw-w-96
          lg:tw-w-72
          tw-justify-between
        "
      >
        <div>
          <img
            src="images/csi-logo-vertical.svg"
            alt="CSI Technology Group"
            class="tw-mb-8 tw-mx-auto tw-h-20 md:tw-h-28"
          />
          <!-- Social media -->
          <div class="tw-flex tw-justify-center">
            <a
              class="btn-circle fb-color"
              href="https://www.facebook.com/CSITechnologyGroup/?view_public_for=243043239075210"
              target="_blank"
            >
              <img
                :src="require('@/assets/icons/icon-fb.svg')"
                alt="Facebook"
              />
            </a>
            <a
              class="tw-ml-3 btn-circle twitter-color"
              href="https://twitter.com/CSI_InfoShare"
              target="_blank"
            >
              <img
                :src="require('@/assets/icons/icon-twitter.svg')"
                alt="Twitter"
              />
            </a>
            <a
              class="tw-ml-3 btn-circle linkedin-color"
              href="https://www.linkedin.com/company/csi-technology-group/?viewAsMember=true"
              target="_blank"
            >
              <img
                :src="require('@/assets/icons/icon-linkedin.svg')"
                alt="Linkedin"
              />
            </a>
          </div>
          <!-- Address -->
          <div class="tw-text-center tw-mt-10 tw-opacity-70">
            <p>
              330 Mac Lane, Keasbey, NJ 08832 U.S.A<br />Tel: +1(732)346-0200
            </p>
          </div>
        </div>
        <!-- VERIFIED Seal -->
        <div class="tw-my-8 md:tw-my-16">
          <a
            href="//www.dandb.com/verified/business/576765318/"
            target="_blank"
          >
            <img
              src="images/verified_logo.png"
              alt="VERIFIED Seal"
              class="tw-mx-auto tw-h-16 md:tw-h-20"
            />
          </a>
        </div>
      </div>
      <!-- Headings -->
      <div class="tw-flex-auto">
        <div
          class="
            tw-hidden
            lg:tw-grid
            2xl:tw-grid-cols-6
            xl:tw-grid-cols-4
            lg:tw-grid-cols-3
            2xl:tw-flex 2xl:tw-flex-wrap
          "
        >
          <div v-for="(data, i) in datas" :key="i" class="tw-flex-auto">
            <div>
              <div class="tw-text-lg xl:tw-text-xl text-primary">
                {{ data.title }}
              </div>
              <div
                class="divide-primary-light tw-border-t tw-mt-2 tw-mb-4"
              ></div>
              <div v-for="(link, j) in data.links" :key="j">
                <div
                  v-if="link.sub"
                  class="tw-font-semibold tw-mb-3 text-primary-light"
                >
                  {{ link.sub }}
                </div>
                <div
                  v-for="(tab, k) in link.tabs"
                  :key="k"
                  class="item-link tw-pr-3"
                >
                  <nuxt-link
                    v-if="tab.id"
                    :to="'/' + data.category + tab.id"
                    class="
                      tw-block
                      footer-link
                      tw-text-sm
                      xl:tw-text-base
                      tw-mb-2
                    "
                  >
                    {{ tab.title }}
                  </nuxt-link>
                  <nuxt-link
                    v-else
                    :to="'/' + data.category"
                    class="
                      tw-block
                      footer-link
                      tw-text-sm
                      lg:tw-text-base
                      tw-mb-2
                    "
                  >
                    {{ tab.title }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Copyright -->
        <div
          class="
            tw-flex tw-flex-col
            md:tw-flex-row
            tw-justify-between tw-mt-10 tw-text-center
            lg:tw-text-left
          "
        >
          <div
            class="
              tw-text-sm tw-opacity-50 tw-order-last
              lg:tw-order-first
              tw-mr-4
            "
          >
            Copyright © CSI Technology Group.
          </div>
          <div class="tw-mb-2 lg:tw-mb-0 tw-mr-0 xl:tw-mr-16 sm:tw-mr-8">
            <nuxt-link
              v-for="(link, i) in footerLinks"
              :key="i"
              :to="'/' + link.url"
              class="
                tw-text-sm
                xl:tw-text-base
                text-link
                tw-opacity-50 tw-ml-4
                hover:tw-opacity-100
              "
              >{{ link.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Links from '~/data/heading.json'

export default {
  data: () => ({
    datas: Links,
    footerLinks: [
      { title: 'Terms of Service', url: 'terms' },
      { title: 'Privacy Policy', url: 'policy' },
      { title: 'Security', url: 'security' },
    ],
  }),
  methods: {},
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
