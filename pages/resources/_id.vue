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
        <div class="main-container tw-mx-auto">
          <nuxt-link
            class="tw-flex tw-text-white tw-mt-4 md:tw-mt-8 xl:tw-mt-10"
            to="/resources"
          >
            <img
              :src="require('~/assets/icons/icon-back.svg')"
              alt="back"
              class="tw-mr-3 tw-w-5"
            />
            <div class="tw-text-lg xl:tw-text-xl">All</div>
          </nuxt-link>
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div
          class="
            tw-flex tw-flex-wrap tw--mt-20
            md:tw--mt-36
            xl:tw--mt-44
            tw-mb-12
            lg:tw-mb-28
          "
        >
          <div
            class="
              tw-hidden
              md:tw-block
              lg:tw-w-24
              xl:tw-w-40
              2xl:tw-mt-96
              tw-mt-24
              md:tw-mt-52
              tw-px-2 tw-mr-5
            "
          >
            <div class="tw-text-center tw-mb-3 tw-mt-20">Share to</div>
            <div class="tw-flex tw-flex-col tw-items-center">
              <ShareNetwork
                v-for="network in networks"
                :key="network.network"
                :network="network.network"
                :style="{ backgroundColor: network.color }"
                :url="'https://www.csitech.com/resources/' + article.id"
                :title="article.title"
                :description="article.body"
                hashtags="CSI Technology Group, InfoShare"
                class="social tw-my-3 tw-flex tw-justify-center"
              >
                <img
                  :src="require('@/assets/icons/' + network.icon)"
                  alt="Social"
                />
              </ShareNetwork>
            </div>
          </div>

          <div
            class="tw-w-full tw-flex-1 md:tw-w-5/6 lg:tw-w-7/12 tw-shadow-xl"
          >
            <div class="tw-bg-white">
              <img :src="'images/news/' + article.cover" :alt="article.cover" />
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
                          tw-text-xs
                          sm:tw-text-sm
                        "
                      >
                        {{ article.type }}
                      </div>
                      <div
                        v-for="(item, t) in article.tags"
                        :key="t"
                        class="
                          tw-bg-gray-200
                          tw-px-3
                          tw-py-1
                          tw-mb-2
                          tw-uppercase
                          tw-mr-2
                          tw-rounded
                          tw-text-xs
                          sm:tw-text-sm
                        "
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      tw-text-right tw-opacity-50 tw-text-xs
                      sm:tw-text-sm
                      md:tw-text-base
                    "
                  >
                    {{ article.date }}
                  </div>
                </div>

                <div
                  class="
                    tw-text-2xl
                    xl:tw-text-3xl
                    2xl:tw-text-4xl
                    tw-font-semibold tw-my-5
                  "
                >
                  {{ article.title }}
                </div>

                <div class="tw-flex md:tw-hidden">
                  <ShareNetwork
                    v-for="network in networks"
                    :key="network.network"
                    :network="network.network"
                    :style="{ backgroundColor: network.color }"
                    :url="'https://www.csitech.com/resources/' + article.id"
                    :title="article.title"
                    :description="article.body"
                    hashtags="CSI Technology Group, InfoShare"
                    class="social tw-mr-5 tw-mb-5 tw-flex tw-justify-center"
                  >
                    <img
                      :src="require('@/assets/icons/' + network.icon)"
                      alt="Social"
                    />
                  </ShareNetwork>
                </div>

                <div
                  class="
                    tw-text-base
                    lg:tw-text-lg
                    tw-leading-relaxed tw-text-gray-500
                  "
                >
                  <div
                    class="news-body lg:tw-text-xl"
                    v-html="article.body"
                  ></div>
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
              lg:tw-mt-40
              xl:tw-mt-52
              tw-pl-0
              2xl:tw-pl-16
              lg:tw-pl-10
            "
          >
            <div class="tw-text-lg lg:tw-text-xl tw-mb-5">Related Products</div>
            <div
              class="
                tw-w-full tw-grid tw-grid-cols-1
                md:tw-grid-cols-3
                lg:tw-grid-cols-1
                tw-gap-4
                lg:tw-gap-8
              "
            >
              <div
                v-for="(item, i) in relatedProducts"
                :key="i"
                class="
                  tw-flex
                  md:tw-flex-col
                  2xl:tw-flex-row
                  bg-light
                  tw-cursor-pointer
                  hover:tw-bg-white hover:tw-shadow-xl
                  tw-p-5
                "
                @click.prevent="routerToProduct(item[0].category, item[0].id)"
              >
                <div
                  class="tw-flex-none tw-flex tw-items-center tw-justify-center"
                >
                  <img
                    :src="require('~/assets/duotone/' + item[0].icon)"
                    alt=""
                    class="tw-mb-3 2xl:tw-mb-3 2xl:tw-mr-5 tw-w-16"
                  />
                </div>
                <div
                  class="
                    tw-flex-auto
                    md:tw-pt-5
                    xl:tw-pt-0
                    tw-text-center
                    2xl:tw-text-left
                  "
                >
                  <div class="tw-text-base lg:tw-text-lg tw-font-semibold">
                    {{ item[0].title }}
                  </div>
                  <div class="tw-opacity-70 tw-text-sm lg:tw-text-base">
                    {{ item[0].subtitle }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedNews :aid="article.id" class="tw-my-12 xl:tw-my-28" />

      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Products from '~/data/allproducts.json'

export default {
  data: () => ({
    category: 'page',
    coverimg: 'blue.jpg',
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
    hasCurrentPost: Boolean,
  }),
  head() {
    return {
      titleTemplate: this.article.title + ' - %s',
      meta: [
        { property: 'og:title', content: this.article.title },
        { property: 'og:description', content: this.article.brief },
        {
          property: 'og:image:secure_url',
          content: 'https://www.csitech.com/images/news/' + this.article.img,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/resources/' + this.article.id,
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.article.title },
        { property: 'twitter:description', content: this.article.brief },
        {
          property: 'twitter:image',
          content: 'https://www.csitech.com/images/news/' + this.article.img,
        },
      ],
    }
  },
  computed: {
    ...mapState(['articleList', 'tags', 'currentArticle']),
    article() {
      return this.currentArticle
    },
    relatedProducts() {
      const arr = this.article.tags
      const resultArr = []
      if (arr) {
        arr.filter((tag) => {
          const result = Products.filter((res) => res.id === tag.name)
          if (result.length > 0) {
            resultArr.push(result)
          }
          return 1
        })
      }
      return resultArr
    },
  },
  mounted() {
    this.$store.dispatch('getArticleByID', this.$route.params.id)
  },
  methods: {
    routerToProduct(category, id) {
      this.$router.push({ path: '/' + category + '/' + id })
    },
    routerToArticle(val) {
      this.$router.push({ name: 'resources-id', params: { id: val } })
    },
  },
}
</script>

<style lang="scss">
.article-width {
  max-width: 1000px;
}
.social {
  border-radius: 50%;
  width: 38px;
  height: 38px;
  padding: 8px;
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
    margin-bottom: 3em;
    img {
      margin: 0 auto;
    }
    p {
      margin-top: 1em;
      margin-bottom: 3em;
      color: grey;
      font-style: italic;
      font-size: 16px;
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
    padding-left: 24px !important;
  }

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.75em;
    font-weight: 600;
    font-size: $body-1-size;
    @media only screen and (max-width: $breakpoints-md) {
      font-size: $body-3-size;
    }
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
    opacity: 0.7;
    margin-top: 3em;
    margin-bottom: 1em;
  }

  blockquote {
    position: relative;
    background: url('../../assets/vectors/testimonial-bg.svg');
    background-size: cover;
    color: white;
    margin: 2em 0 3em;
    padding: 3em 3em 2em;
    quotes: '\201C''\201D';
    font-size: 1em;

    @media only screen and (max-width: $breakpoints-sm) {
      padding: 3em 1.5em 1.5em;
    }

    &::before {
      content: '';
      background: url('../../assets/vectors/testimonial-quotes.svg') no-repeat;
      background-size: contain;
      position: absolute;
      top: -28px;
      left: -14px;
      width: 65px;
      height: 52px;
      display: block;

      @media only screen and (max-width: $breakpoints-lg) {
        top: -21px;
        left: -11px;
        width: 50px;
        height: 45px;
      }
    }

    &::after {
      content: '';
      background: url('../../assets/vectors/testimonial-vector.svg') no-repeat;
      background-size: contain;
      position: absolute;
      bottom: -32px;
      right: 0;
      width: 169px;
      height: 173px;
      display: block;
      @media only screen and (max-width: $breakpoints-lg) {
        bottom: -26px;
        width: 130px;
        height: 130px;
      }
    }

    p {
      display: inline;
      font-style: italic;
    }
    footer {
      margin-top: 2rem;
      font-size: 1rem;
      position: relative;
      z-index: 2;
      @media only screen and (max-width: $breakpoints-md) {
        font-size: 0.9rem;
      }
      b {
        font-size: $body-2-size;
        @media only screen and (max-width: $breakpoints-md) {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
