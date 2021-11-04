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
        <div class="main-container tw-mx-auto">
          <nuxt-link
            class="tw-flex tw-text-white tw-mt-8 lg:tw-mt-16"
            to="/resources"
          >
            <img
              :src="require('~/assets/icons/icon-back.svg')"
              alt="back"
              class="tw-mr-3"
            />
            <div class="tw-text-xl tw-hidden md:tw-block">All</div>
          </nuxt-link>
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div
          class="
            tw-flex tw-flex-wrap tw--mt-32
            xl:tw--mt-40
            tw-mb-12
            lg:tw-mb-28
          "
        >
          <div
            class="
              tw-w-1/6
              lg:tw-w-2/12
              2xl:tw-mt-96
              tw-mt-24
              md:tw-mt-52
              tw-px-2
            "
          >
            <div class="tw-text-center tw-mb-3 tw-mt-20">Share to</div>
            <div class="tw-flex tw-flex-col tw-items-center">
              <ShareNetwork
                v-for="network in networks"
                :key="network.network"
                :network="network.network"
                :style="{ backgroundColor: network.color }"
                :url="'https://www.csitech.com/resources/' + aid"
                :title="atitle"
                :description="abody"
                hashtags="CSI Technology Group, InfoShare"
                class="social"
              >
                <img
                  :src="require('@/assets/icons/' + network.icon)"
                  alt="Social"
                  class="tw-m-1"
                />
              </ShareNetwork>
            </div>
          </div>

          <div class="tw-w-5/6 lg:tw-w-7/12 tw-shadow-lg">
            <div class="tw-bg-white">
              <img :src="'images/news/' + acover" :alt="acover" />
              <div class="tw-p-5 md:tw-p-10">
                <div class="tw-flex tw-justify-between">
                  <div class="tips">
                    <div class="tw-flex tw-flex-wrap tw-opacity-70">
                      <div class="mr-3">Tags:</div>
                      <div
                        class="
                          tw-bg-gray-200
                          tw-px-3
                          tw-py-1
                          tw-mb-2
                          tw-uppercase
                          tw-mr-2
                          tw-rounded
                        "
                      >
                        {{ atype }}
                      </div>
                      <div
                        v-for="(item, t) in atags"
                        :key="t"
                        class="
                          tw-bg-gray-200
                          tw-px-3
                          tw-py-1
                          tw-mb-2
                          tw-uppercase
                          tw-mr-2
                          tw-rounded
                        "
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                  <div class="tw-text-right tw-opacity-50">
                    {{ adate }}
                  </div>
                </div>

                <div class="header-3 tw-font-semibold tw-my-5">
                  {{ atitle }}
                </div>
                <div
                  class="
                    tw-text-lg
                    tw-leading-relaxed tw-text-gray-500
                    news-body
                  "
                >
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <span v-html="abody"></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Related Products -->
          <div
            class="
              tw-w-full
              lg:tw-w-3/12
              tw-mt-20
              lg:tw-mt-52
              tw-pl-0
              2xl:tw-pl-16
              md:tw-pl-10
            "
          >
            <div class="title tw-mb-5">Related Products</div>
            <div
              class="
                tw-w-full tw-grid tw-grid-cols-1
                md:tw-grid-cols-3
                lg:tw-grid-cols-1
                tw-gap-8
              "
            >
              <div
                v-for="(item, i) in relatedProducts"
                :key="i"
                class="
                  tw-flex
                  md:tw-flex-col
                  xl:tw-flex-row
                  bg-light
                  tw-cursor-pointer
                  hover:tw-bg-white hover:tw-shadow-xl
                  tw-p-5
                "
                @click.prevent="routerToProduct(item.category, item.id)"
              >
                <div
                  class="tw-flex-none tw-flex tw-items-center tw-justify-center"
                >
                  <img
                    :src="require('~/assets/duotone/' + item.icon)"
                    width="60"
                    alt=""
                    class="tw-mr-5 md:tw-mr-0 xl:tw-mr-5"
                  />
                </div>
                <div class="tw-flex-auto md:tw-pt-5 xl:tw-pt-0">
                  <div class="tw-text-lg tw-font-semibold">
                    {{ item.title }}
                  </div>
                  <div class="tw-opacity-70">{{ item.subtitle }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedNews :pid="aid" class="tw-my-12 xl:tw-my-28" />

      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Articles from '~/data/articles.json'

export default {
  data: () => ({
    category: 'page',
    coverimg: 'blue.jpg',
    aid: '',
    atitle: '',
    adate: '',
    atype: '',
    atags: '',
    acover: '',
    abody: '',
    networks: [
      {
        network: 'facebook',
        name: 'Facebook',
        icon: 'icon-fb.svg',
        color: '#1877f2',
      },
      {
        network: 'twitter',
        name: 'Twitter',
        icon: 'icon-twitter.svg',
        color: '#1da1f2',
      },
      {
        network: 'linkedin',
        name: 'LinkedIn',
        icon: 'icon-linkin.svg',
        color: '#007bb5',
      },
    ],
    relatedProducts: [
      {
        id: 'cad',
        category: 'public-safety',
        icon: 'cad.svg',
        title: 'Computer Aided Dispatch (CAD)',
        subtitle: 'Advanced Public Safety Communication and Response',
      },
      {
        id: 'rms',
        category: 'public-safety',
        icon: 'rms.svg',
        title: 'Law Enforcement Records Management (RMS)',
        subtitle:
          'Revolutionize Public Safety Data Collection, Management, and Reporting',
      },
      {
        id: 'investigation',
        category: 'crime-intelligence',
        icon: 'investigation.svg',
        title: 'Investigation',
        subtitle: 'Manage Investigative Case Data, Documents, and Evidence',
      },
    ],
    hasCurrentPost: Boolean,
  }),
  created() {
    this.getData(this.$route.params.id)
  },
  methods: {
    routerToProduct(category, id) {
      this.$router.push({ path: '/' + category + '/' + id })
    },
    routerToArticle(val) {
      this.$router.push({ name: 'resources-id', params: { id: val } })
    },
    head() {
      return {
        titleTemplate: '%s - ' + this.$route.params.id,
        meta: [{ name: 'description', content: this.title }],
      }
    },
    getData(id) {
      for (let i = 0; i < Articles.length; i++) {
        if (id && id === Articles[i].id) {
          this.aid = Articles[i].id
          this.atitle = Articles[i].title
          this.adate = Articles[i].date
          this.atype = Articles[i].type
          this.atags = Articles[i].tags
          this.acover = Articles[i].cover
          this.abody = Articles[i].body
          return
        }
      }
    },
  },
}
</script>

<style lang="scss">
.article-width {
  max-width: 1000px;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  margin: 10px;
  @media only screen and (max-width: $breakpoints-sm) {
    width: 30px;
    height: 30px;
  }
}

.news-body {
  img {
    max-width: 100%;
    display: block;
    margin: 3em auto;
  }

  .img-area {
    text-align: center;
    margin-top: 3em;
    img {
      margin: 0 auto;
    }
    p {
      margin-top: 1em;
      margin-bottom: 3em;
      color: grey;
      font-style: italic;
      font-size: 14px;
    }
  }

  .member {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }

  ol,
  ul {
    list-style: initial;
  }

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.75em;
    font-weight: 600;
  }

  ul {
    margin: 1.5em 0 1.5em 1.2em;
  }

  p {
    margin-bottom: 0;
  }

  a {
    color: $primary-color;
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    opacity: 0.2;
    margin-top: 3em;
    margin-bottom: 1em;
  }

  blockquote {
    position: relative;
    background: url('../../assets/images/testimanial_900x500_0508.jpg');
    background-size: cover;
    color: white;
    margin: 2.5em 0;
    padding: 4.5em 3.5em 2.5em;
    quotes: '\201C''\201D';
    font-size: 1.1em;

    @media only screen and (max-width: $breakpoints-sm) {
      padding: 3em 1.5em 1.5em;
    }

    &:before {
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: white;
      content: open-quote;
      font-size: 7em;
      display: block;
      line-height: 0.1em;
    }

    p {
      display: inline;
      font-style: italic;
    }
    footer {
      margin-top: 2rem;

      &:before {
        content: '';
        background-color: white;
        display: block;
        width: 60px;
        height: 3px;
        border-radius: 5px;
        margin-bottom: 1.5em;
      }
    }
  }
}
</style>
