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
      <div class="main-container tw-mx-auto tw-pb-10 xl:tw-pb-20">
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
                height="44"
                placeholder="Search articles"
                append-outer-icon="mdi-magnify"
                clear-icon="mdi-close"
                clearable
                dark
                @click:append-outer="onSearch"
              ></v-text-field>
            </div>
          </div>
        </div>
      </div>
      <!-- Latest Story -->
      <FeaturedArticle />
      <!-- Articles -->
      <div class="main-container tw-mx-auto tw-my-12 xl:tw-my-28">
        <div class="header-2 tw-text-center tw-mb-6 xl:tw-mb-12">
          Explore All Articles
        </div>
        <!-- <v-text-field
            v-model="keyword"
            height="50"
            clearable
            solo
            single-line
            hide-details
            placeholder="Search resources…"
            prepend-inner-icon="search"
          ></v-text-field> -->
        <v-container fluid pa-0>
          <v-row>
            <v-col
              sm="3"
              md="2"
              :class="{ 'd-flex col-12': $vuetify.breakpoint.xsOnly }"
            >
              <!-- Resource Type -->
              <div class="tw-grid tw-gap-3 tw-grid-cols-2 md:tw-grid-cols-1">
                <div>
                  <div
                    class="
                      tw-uppercase tw-text-sm
                      xl:tw-text-base
                      tw-opacity-70 tw-border-b tw-border-t tw-py-2
                    "
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
                    class="
                      tw-uppercase tw-text-sm
                      xl:tw-text-base
                      tw-opacity-70 tw-border-b tw-border-t tw-py-2
                    "
                  >
                    Product & Solution
                  </div>
                  <div>
                    <v-radio-group v-model="radioGroup">
                      <div
                        v-for="(tag, index) in tags.solution"
                        :key="index"
                        class="tw-flex tw-mb-1"
                      >
                        <v-radio
                          color="primary"
                          :value="tag.value"
                          @click.prevent="changeTag(tag.value)"
                        ></v-radio>
                        <label class="tw-text-sm xl:tw-text-base">{{
                          tag.name
                        }}</label>
                      </div>
                    </v-radio-group>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col xs="12" sm="9" md="10">
              <v-data-iterator
                :items="filterArticles"
                :items-per-page.sync="itemsPerPage"
                :footer-props="{
                  'items-per-page-options': [6, 12, 18, -1],
                }"
                :page="page"
                :search="keyword"
                no-data-text="No data found."
                hide-default-footer
              >
                <template v-slot:default="props">
                  <div
                    class="
                      tw-grid tw-gap-4
                      lg:tw-gap-8
                      tw-grid-cols-2
                      xl:tw-grid-cols-3
                      tw-mb-5
                    "
                  >
                    <div
                      v-for="item in props.items"
                      :key="item.name"
                      class="
                        tw-flex-1
                        tw-bg-white
                        tw-shadow-md
                        tw-transition
                        tw-duration-500
                        tw-ease-in-out
                        tw-transform
                        hover:tw-scale-105
                        tw-cursor-pointer tw-h-full
                      "
                      @click.prevent="routerToArticle(item.id)"
                    >
                      <v-img
                        v-if="item.cover"
                        :src="'images/news/' + item.cover"
                        aspect-ratio="1.9"
                      ></v-img>
                      <div
                        class="
                          tw-px-2 tw-py-2
                          md:tw-px-5 md:tw-py-3
                          tw-text-xs
                          sm:tw-text-sm
                          md:tw-text-base
                          lg:tw-text-lg
                        "
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
                <template v-slot:footer>
                  <v-row class="ma-0" align="center" justify="center">
                    <span class="grey--text">Items</span>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          text
                          color="primary"
                          class="ml-2"
                          v-bind="attrs"
                          v-on="on"
                        >
                          {{ itemsPerPage }}
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(number, index) in itemsPerPageArray"
                          :key="index"
                          @click="updateItemsPerPage(number)"
                        >
                          <v-list-item-title>{{ number }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-pagination
                      v-model="page"
                      :length="numberOfPages"
                      :total-visible="7"
                    ></v-pagination>
                    <!-- <v-btn
                      fab
                      dark
                      color="blue darken-3"
                      class="mr-1"
                      @click="formerPage"
                    >
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn
                      fab
                      dark
                      color="blue darken-3"
                      class="ml-1"
                      @click="nextPage"
                    >
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn> -->
                  </v-row>
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
import allArticles from '~/data/articles.json'

export default {
  data: () => ({
    category: 'page',
    title: 'Resources',
    subtitle: 'Up to date on news, events, solutions, and products',
    coverimg: 'resource.jpg',
    articles: allArticles,
    filteredArticles: [],
    keyword: '',
    radioGroup: 'all',
    page: 1,
    itemsPerPageArray: [6, 12, 18],
    itemsPerPage: 12,
  }),
  computed: {
    ...mapState(['articleList', 'tags']),
    ...mapGetters(['filterArticles']),
    numberOfPages() {
      return Math.ceil(this.filterArticles.length / this.itemsPerPage)
    },
  },
  watch: {
    async $route(to, from) {
      await this.changeType(this.$route.query.id)
    },
  },
  mounted() {
    const id = this.$route.query.id
    if (id) {
      this.changeType(id)
    } else {
      this.changeType(this.radioGroup)
    }
  },
  methods: {
    ...mapActions(['changeFilteredType', 'changeFilteredTag']),
    changeType(type) {
      this.radioGroup = type
      this.changeFilteredType(type)
    },
    changeTag(tag) {
      this.radioGroup = tag
      this.changeFilteredTag(tag)
    },
    routerToArticle(id) {
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
    onSearch(value) {
      // eslint-disable-next-line no-console
      console.log(value)
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
</style>
