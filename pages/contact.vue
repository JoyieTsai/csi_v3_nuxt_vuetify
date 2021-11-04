<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section md"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) center no-repeat`,
          backgroundSize: `cover`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col tw-text-white">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container tw-mx-auto tw-my-10 lg:tw-my-20 xl:tw-my-32">
        <div class="tw-flex tw-flex-col lg:tw-flex-row">
          <!-- Benefit -->
          <div class="lg:tw-w-2/5 xl:tw-w-1/2 md:tw-pr-20 deco-hexagon-2">
            <div
              class="
                tw-text-lg
                lg:tw-text-xl
                xl:tw-text-xl
                tw-mb-10
                lg:tw-mb-20
              "
            >
              {{ info.title }}
            </div>
            <ul class="tw-pl-0 tw-mb-10">
              <li v-for="(item, k) in info.contact" :key="k" class="tw-my-5">
                <div class="tw-flex">
                  <i
                    :class="[item.icon, 'text-primary tw-text-3xl tw-mr-5']"
                  ></i>
                  <div class="tw-text-base lg:tw-text-lg tw-opacity-70">
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Form -->
          <div class="lg:tw-w-3/5 xl:tw-w-1/2">
            <div
              class="
                tw-p-5
                lg:tw-p-10
                tw-mb-5 tw-bg-white tw-shadow-lg tw-relative
              "
            >
              <div class="tw-grid tw-grid-cols-2 tw-gap-5">
                <v-text-field
                  solo
                  placeholder="First Name"
                  hide-details="auto"
                  class="input-light"
                />
                <v-text-field
                  solo
                  placeholder="Last Name"
                  hide-details="auto"
                  class="input-light"
                />
                <v-text-field
                  solo
                  placeholder="Email"
                  hide-details="auto"
                  class="input-light"
                />
                <v-text-field
                  solo
                  placeholder="Phone"
                  hide-details="auto"
                  class="input-light"
                />
                <v-text-field
                  solo
                  placeholder="Agency/Organization"
                  hide-details="auto"
                  class="tw-col-span-2 input-light"
                />
                <v-textarea
                  solo
                  placeholder="Message"
                  hide-details="true"
                  rows="6"
                  class="tw-col-span-2 input-light"
                />
              </div>
              <div class="mt-6">
                <v-btn
                  color="primary"
                  class="hover:tw-shadow-xl"
                  html-type="submit"
                  large
                  block
                >
                  Send
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    category: 'page',
    title: 'Contact Us',
    coverimg: 'contact.jpg',
    info: {
      title:
        'We love hearing from you. If you have any questions or want to schedule a demo, please feel free to get in touch.',
      contact: [
        { icon: 'icon-tel_solid', content: '+(732) 346-0200' },
        { icon: 'icon-fax_solid', content: '+(732) 346-0209' },
        { icon: 'icon-mail_solid', content: 'sales@csitech.com' },
        {
          icon: 'icon-location_solid',
          content: '330 Mac Lane Keasbey, NJ 08832, U.S.A',
        },
      ],
    },
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.$route.params.id,
      meta: [{ name: 'description', content: this.title }],
    }
  },
}
</script>
