<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section lg tw-items-center"
        :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
              <div class="tw-text-2xl">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Search Bar -->
      <!-- <div class="main-container tw-mx-auto tw-pb-10 xl:tw-pb-20">
        <div class="tw-flex">
          <div class="tw-flex-auto tw-relative">
            <div
              class="
                tw-absolute tw-inset-x-0
                md:tw-inset-x-10
                lg:tw-inset-x-20
                2xl:tw-inset-x-40
                tw-bottom-5
                xl:tw-bottom-8
                bg-primary-light
                tw-rounded tw-pl-6 tw-pr-3
                md:tw-pl-12 md:tw-pr-8
              "
            >
              <v-text-field
                v-model="keyword"
                height="36"
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
                clear-icon="mdi-close"
                clearable
                dark
                class="tw-text-lg"
              ></v-text-field>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Latest Story -->
      <FeaturedArticle class="tw-mb-12 xl:tw-mb-28" />
      <!-- Articles -->
      <div id="News" class="main-container tw-mx-auto tw-mb-12 xl:tw-mb-28">
        <div class="header-2 tw-text-center">Explore All Articles</div>
        <v-container fluid pa-0>
          <div class="tw-w-80 tw-ml-auto">
            <v-text-field
              v-model="keyword"
              height="36"
              placeholder="Search"
              prepend-inner-icon="mdi-magnify"
              clear-icon="mdi-close"
              clearable
              class="tw-text-lg"
            ></v-text-field>
          </div>
          <v-row>
            <v-col
              xs="12"
              sm="3"
              md="3"
              lg="2"
              :class="{ 'd-flex col-12 tw-pb-3': $vuetify.breakpoint.xsOnly }"
            >
              <!-- Resource Type -->
              <div
                class="tw-grid tw-gap-3 tw-grid-cols-2 md:tw-grid-cols-1 tw-w-full"
              >
                <div>
                  <div
                    class="tw-uppercase tw-text-sm xl:tw-text-base tw-opacity-70 tw-border-b tw-border-t tw-py-2"
                  >
                    Resource Type
                  </div>
                  <div>
                    <v-radio-group v-model="radioGroup">
                      <div
                        v-for="(tag, index) in tags.type"
                        :key="index"
                        class="tw-flex tw-mb-1"
                      >
                        <v-radio
                          color="primary"
                          :value="tag.value"
                          @click.prevent="changeType(tag.value)"
                        ></v-radio>
                        <label class="tw-text-sm xl:tw-text-base">{{
                          tag.name
                        }}</label>
                      </div>
                    </v-radio-group>
                  </div>
                </div>

                <!-- Solution -->
                <div>
                  <div
                    class="tw-uppercase tw-text-sm xl:tw-text-base tw-opacity-70 tw-border-b tw-border-t tw-py-2"
                  >
                    Product & Solution
                  </div>
                  <div>
                    <div v-for="(tag, index) in tags.solution" :key="index">
                      <v-checkbox
                        v-model="selected"
                        color="primary"
                        :label="tag.name"
                        :value="tag.value"
                        hide-details
                        @click.prevent="changeTag(selected)"
                      >
                        <template v-slot:label>
                          <label class="tw-text-sm xl:tw-text-base">{{
                            tag.name
                          }}</label>
                        </template>
                      </v-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col xs="12" sm="9" md="9" lg="10">
              <v-data-iterator
                :items="filterArticles"
                :items-per-page.sync="itemsPerPage"
                :footer-props="{
                  'items-per-page-options': [6, 12, 18, -1],
                  'items-per-page-text': $vuetify.breakpoint.xsOnly
                    ? ''
                    : 'Items per page:',
                }"
                :page.sync="page"
                :search="keyword"
                no-data-text="No data found."
              >
                <template v-slot:default="props">
                  <div
                    class="tw-grid tw-gap-4 lg:tw-gap-8 tw-grid-cols-2 xl:tw-grid-cols-3 tw-mb-5"
                  >
                    <div
                      v-for="item in props.items"
                      :key="item.name"
                      class="tw-flex-1 tw-bg-white tw-shadow-md tw-transition tw-duration-500 tw-ease-in-out tw-transform hover:tw-scale-105 tw-cursor-pointer tw-h-full"
                      @click.prevent="routerToArticle(item.id)"
                    >
                      <v-img
                        v-if="item.cover"
                        :src="'images/news/' + item.cover"
                        aspect-ratio="1.9"
                      ></v-img>
                      <div
                        class="tw-px-2 tw-py-2 md:tw-px-5 md:tw-py-3 tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg"
                      >
                        <div v-if="item.type === 'story'" class="text-grey">
                          Success Stories
                        </div>
                        <div v-else-if="item.type === 'news'" class="text-grey">
                          News
                        </div>
                        <div v-else class="text-grey">Event</div>
                        <div class="tw-font-semibold">
                          {{ item.title }}
                        </div>
                        <div v-if="!item.cover" class="tw-mt-3 tw-opacity-70">
                          {{ item.brief | getBrief(155) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </v-data-iterator>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    category: 'page',
    title: 'Resources',
    subtitle: 'Up to date on news, events, solutions, and products',
    coverimg: 'resource.jpg',
    selected: [],
    filteredArticles: [],
    keyword: '',
    radioGroup: 'all',
    page: 1,
    itemsPerPageArray: [6, 12, 18],
    itemsPerPage: 12,
    duration: 600,
    easing: 'easeInOutCubic',
  }),
  head() {
    return {
      titleTemplate: '%s | ' + this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.subtitle },
        { name: 'keywords', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.subtitle },
        {
          property: 'og:image:secure_url',
          content: 'https://www.csitech.com/images/post/' + this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/resources',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content: 'https://www.csitech.com/images/post/' + this.coverimg,
        },
      ],
    }
  },
  computed: {
    ...mapState([
      'articleList',
      'tags',
      'filterType',
      'filterTag',
      'currentPage',
    ]),
    ...mapGetters(['filterArticles']),
    numberOfPages() {
      return Math.ceil(this.filterArticles.length / this.itemsPerPage)
    },
    filteredData() {
      const conditions = []
      if (this.keyword) {
        conditions.push(this.filterKeywords)
      }

      if (conditions.length > 0) {
        return this.articleList.filter((art) => {
          return conditions.every((con) => {
            return con(art)
          })
        })
      }
      return this.articleList
    },
    options() {
      return {
        duration: this.duration,
        easing: this.easing,
      }
    },
  },
  watch: {
    async $route(to, from) {
      await this.changeType(this.$route.query.id)
    },
    filterArticles() {
      this.selected = this.filterTag
    },
  },
  mounted() {
    const id = this.$route.query.id
    if (id) {
      this.changeType(id)
      this.selected = this.filterTag
    }
    if (this.currentPage > 1) {
      this.page = this.currentPage
    } else {
      this.page = 1
    }
    if (this.filterTag) {
      this.changeTag(this.filterTag)
      this.selected = this.filterTag
    }
  },
  methods: {
    ...mapActions([
      'changeFilteredType',
      'changeFilteredTag',
      'changeCurrentPage',
    ]),
    changeType(type) {
      if (type) {
        this.radioGroup = type
      } else {
        this.radioGroup = 'all'
      }
      this.changeFilteredType(this.radioGroup)
      this.page = 1
      this.$router.push({ name: 'resources', query: { id: type } })
      this.$vuetify.goTo('#News')
    },
    changeTag(tag) {
      this.changeFilteredTag(tag)
    },
    changePage(page) {
      this.changeCurrentPage(page)
    },
    routerToArticle(id) {
      this.changePage(this.page)
      this.$router.push({ path: '/resources/' + id })
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  },
}
</script>

<style lang="scss">
input[type='checkbox'] {
  display: none;
}

input[type='checkbox'] + label {
  display: inline-block;
  position: relative;
  border-radius: 4px;
  padding: 8px 16px;
  min-width: 5rem;
  background: $white;
  border: 1px solid $grey-light-color;
  color: #444;
  cursor: pointer;
}

input[type='checkbox'] + label:hover {
  background: $primary-light-color;
  color: $white;
}

input[type='checkbox']:checked + label {
  background: $primary-color;
  color: $white;
}

.label-name {
  text-align: center;
}

@media only screen and (max-width: $breakpoints-sm) {
  .v-application--is-ltr .v-data-footer__select .v-select {
    margin: 13px 0 !important;
  }
}
</style>
