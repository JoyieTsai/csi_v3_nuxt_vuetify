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
              <div class="body-text-1">{{ subtitle }}</div>
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
      <IndexArticles />
      <!-- Articles -->
      <div class="main-container tw-mx-auto tw-my-12 xl:tw-my-28">
        <div class="header-2 tw-text-center">Explore All Articles</div>
        <div class="tw-my-5 tw-text-center">
          <v-btn
            v-for="(tag, index) in tags"
            :key="index"
            class="tw-m-2"
            outlined
          >
            {{ tag.label }}
          </v-btn>
          <!-- <a-radio-group v-model="radioGroup" button-style="solid">
            <a-radio-button
              v-for="(tag, index) in tags"
              :key="index"
              :value="tag.value"
              @click.prevent="changeTag(tag.value)"
            >
              {{ tag.label }}
            </a-radio-button>
          </a-radio-group> -->
        </div>
        <div
          class="
            tw-grid tw-gap-4
            md:tw-gap-8
            tw-grid-cols-2
            xl:tw-grid-cols-4
            tw-mt-16
          "
        >
          <div
            v-for="(article, i) in getArticles"
            :key="i"
            class="
              tw-flex-1
              tw-bg-white
              tw-shadow-md
              tw-transition
              tw-duration-500
              tw-ease-in-out
              tw-transform
              hover:tw-scale-105
              tw-cursor-pointer
            "
            @click.prevent="routerToArticle(article.id)"
          >
            <img v-if="article.cover" :src="'images/news/' + article.cover" />
            <div class="tw-px-2 tw-py-1 md:tw-px-5 md:tw-py-4">
              <div v-if="article.type === 'story'" class="text-grey tw-my-1">
                Success Stories
              </div>
              <div v-else-if="article.type === 'news'" class="text-grey">
                News
              </div>
              <div v-else class="text-grey">Event</div>
              <div class="body-text-3 tw-font-semibold">
                {{ article.title }}
              </div>
              <div v-if="!article.cover" class="tw-mt-3 tw-opacity-70">
                {{ article.brief | getBrief(155) }}
              </div>
            </div>
          </div>
        </div>
        <!-- Ｐagination -->
        <div class="tw-mt-12 tw-text-right">
          <a-pagination
            size="small"
            show-size-changer
            :total="allArticles.length"
            :show-total="(total) => `Total ${total} items`"
            :page-size="pageSize"
            :page-size-options="['12', '16', '18']"
            :default-current="1"
            @showSizeChange="onShowSizeChange"
          />
        </div>
      </div>
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Articles from '~/data/articles.json'

export default {
  data: () => ({
    category: 'page',
    title: 'Resources',
    subtitle: 'Up to date on news, events, solutions, and products',
    coverimg: 'resource.jpg',
    tags: [
      { label: 'All', value: 'all' },
      { label: 'News', value: 'news' },
      { label: 'Events', value: 'event' },
      { label: 'Success Stories', value: 'story' },
      { label: 'CAD', value: 'cad' },
      { label: 'RMS', value: 'rms' },
      { label: 'Fire/EMS', value: 'fire-ems' },
      { label: 'Prosecutor/DA', value: 'epro' },
      { label: 'Intelligence', value: 'intelligence' },
      { label: 'VW Portal', value: 'vw' },
      { label: 'State', value: 'state' },
      { label: 'Municipal', value: 'municipal' },
      { label: 'Low-code Platform', value: 'low-code' },
    ],
    allArticles: Articles,
    filteredArticles: [],
    keyword: '',
    radioGroup: 'all',
    selectedTags: [],
    allSelected: true,
    pageSize: 12,
  }),
  computed: {
    numberOfPages() {
      return Math.ceil(this.filterArticles.length / this.itemsPerPage)
    },
    getArticles() {
      return Articles.slice(0, this.pageSize)
    },
  },
  watch: {
    pageSize(val) {
      // eslint-disable-next-line no-console
      console.log('pageSize', val)
    },
  },
  methods: {
    changeTag(tag) {
      this.radioGroup = tag
    },
    routerToArticle(id) {
      this.$router.push({ path: '/resources/' + id })
    },
    onShowSizeChange(pageSize) {
      // eslint-disable-next-line no-console
      console.log(pageSize)
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
