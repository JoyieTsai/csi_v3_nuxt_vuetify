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
        <div class="main-container tw-mx-auto tw-flex tw-items-center">
          <div class="tw-flex-1 tw-flex-col tw-text-white tw-text-center">
            <div class="header-1 tw-leading-snug">{{ title }}</div>
            <div class="tw-text-2xl">{{ subtitle }}</div>
          </div>
        </div>
      </div>

      <div class="main-container tw-mx-auto">
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-my-12 xl:tw-my-28">
          <div class="tw-pb-5">
            <ul
              class="
                tw-w-44
                xl:tw-w-60
                tw-border-l-8
                border-primary-light
                tw-pl-5
              "
            >
              <li v-for="(link, index) in links" :key="index" class="tw-mb-5">
                <nuxt-link :to="link.url" class="title md:tw-text-xl text-link"
                  >{{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="terms-body">No data ...</div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    category: 'page',
    title: 'Security',
    subtitle: '',
    coverimg: 'blue.jpg',
    links: [
      { title: 'Terms of Service', url: 'terms' },
      { title: 'Privacy Policy', url: 'policy' },
      { title: 'Security', url: 'security' },
    ],
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.$route.params.id,
      meta: [{ name: 'description', content: this.title }],
    }
  },
}
</script>
