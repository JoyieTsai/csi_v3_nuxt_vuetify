<template>
  <div>
    <v-app-bar
      app
      flat
      fixed
      color="white"
      elevate-on-scroll
      :height="$vuetify.breakpoint.mdAndDown ? '72' : '100'"
    >
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>

      <div :class="[$vuetify.breakpoint.mdAndDown ? 'tw-hidden' : '']">
        <v-menu
          v-for="(data, i) in datas"
          :key="i"
          open-on-hover
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- <v-btn
              v-if="data.category === 'resources'"
              text
              class="capitalize"
              :to="'/' + data.url"
            >
              {{ data.title }}
            </v-btn> -->
            <v-btn
              v-if="data.url"
              text
              class="capitalize"
              v-bind="attrs"
              :to="'/' + data.url"
              v-on="on"
            >
              {{ data.title }}
            </v-btn>
            <v-btn v-else text class="capitalize" v-bind="attrs" v-on="on">
              {{ data.title }}
            </v-btn>
          </template>
          <v-list dense max-width="400" class="tw-p-0">
            <v-list-item
              v-for="(link, j) in data.links"
              :key="j"
              class="tw-p-0"
            >
              <v-list-item-content>
                <div v-if="link.sub" class="tw-px-6">
                  <div class="text-base text-primary-light tw-mb-3">
                    {{ link.sub }}
                  </div>
                  <v-divider></v-divider>
                </div>
                <v-list dense flat>
                  <v-list-item
                    v-for="(tab, k) in link.tabs"
                    :key="k"
                    class="font-medium"
                  >
                    <nuxt-link
                      v-if="tab.id"
                      :to="'/' + data.category + '/' + tab.id"
                      class="text-base text-link tw-p-2"
                      >{{ tab.title }}</nuxt-link
                    >
                    <nuxt-link
                      v-else
                      :to="'/' + data.category"
                      class="text-base text-link tw-p-2"
                      >{{ tab.title }}</nuxt-link
                    >
                  </v-list-item>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-spacer></v-spacer>

      <div
        :class="[
          $vuetify.breakpoint.mdAndDown ? 'tw-hidden' : '',
          'tw-items-center tw-justify-end',
        ]"
      >
        <!-- <v-btn icon @click.prevent="routerTo('/search')">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-divider vertical class="tw-h-4"></v-divider> -->
        <v-btn text href="tel:123-456-7890" class="primary-text tw-text-2xl"
          >1-732-346-0200</v-btn
        >
        <v-divider vertical class="tw-h-4"></v-divider>
        <v-btn text class="capitalize" @click.prevent="routerTo('/contact')">
          Contact Us
        </v-btn>
        <!-- <v-divider vertical class="tw-h-4"></v-divider> -->
        <!-- <v-btn text class="capitalize" href="/login" target="_blank">
          Login
        </v-btn> -->
      </div>
      <!-- Mobile Menu -->
      <div :class="[$vuetify.breakpoint.mdAndDown ? '' : 'tw-hidden']">
        <!-- <v-btn icon @click.prevent="routerTo('/search')">
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
        <!-- <v-btn icon href="/login" target="_blank">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn> -->
        <v-btn icon @click.prevent="routerTo('/contact')">
          <v-icon>mdi-message-processing-outline</v-icon>
        </v-btn>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" fixed temporary right width="300">
      <v-list>
        <v-list-group v-for="(data, i) in datas" :key="i" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content class="tw-p-0">
              <v-list-item-title>{{ data.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(link, j) in data.links" :key="j" class="tw-p-0">
            <v-list-item-content>
              <div v-if="link.sub" class="tw-pl-12">
                <div class="text-base text-primary-light tw-mb-1">
                  {{ link.sub }}
                </div>
                <v-divider></v-divider>
              </div>
              <v-list dense flat>
                <v-list-item
                  v-for="(tab, k) in link.tabs"
                  :key="k"
                  class="font-medium"
                >
                  <nuxt-link
                    v-if="tab.id"
                    :to="'/' + data.category + '/' + tab.id"
                    class="text-base text-link tw-p-2"
                    >{{ tab.title }}</nuxt-link
                  >
                  <nuxt-link
                    v-else
                    :to="'/' + data.category"
                    class="text-base text-link tw-p-2"
                    >{{ tab.title }}</nuxt-link
                  >
                </v-list-item>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Links from '~/data/heading.json'

export default {
  data: () => ({
    datas: Links,
    visible: false,
    placement: 'right',
    drawer: null,
  }),
  watch: {
    $route(to, from) {
      this.onClose()
    },
  },
  methods: {
    routerTo(id) {
      this.$router.push({ path: id })
    },
    onClose() {
      this.visible = false
    },
    onChange(e) {
      this.placement = e.target.value
    },
  },
}
</script>

<style lang="scss">
.v-app-bar {
  .v-btn {
    height: 60px !important;
  }
}
</style>
