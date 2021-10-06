<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section tw-items-center"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) 40% center no-repeat`,
          backgroundSize: `cover`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mb-12">
            <div class="tw-flex-1 tw-flex-col">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
              <div class="body-text-1">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="main-container tw-mx-auto tw-b-20">
        <div class="tw-flex tw-flex-col md:tw-flex-row">
          <div class="md:tw-w-7/12 body-text-2">{{ descContent }}</div>
          <div
            class="
              tw-flex-auto tw-relative tw-z-10 tw-order-first
              md:tw-order-last
            "
          >
            <img
              class="tw-absolute tw-bottom-0 tw--right-28 md:tw-right-0"
              src="images/company-photo.png"
              alt="CSI"
            />
          </div>
        </div>
      </div>

      <OurMission :data="missions" class="tw-my-10 xl:tw-my-16" />
      <OurTeam id="team" class="tw-my-12 xl:tw-my-28" />
      <OurCustomer id="customers" />
      <OurPartner id="partners" class="tw-my-12 xl:tw-my-28" />
      <OurCareer id="careers" class="tw-my-12 xl:tw-my-28" />

      <div
        id="contact"
        class="bg-primary-light bg-contact-full tw-py-8 xl:tw-py-16"
      >
        <ContactForm class="tw-w-4/5 xl:tw-w-3/5 tw-mx-auto tw-text-white">
          <div slot="title">Get In Touch</div>
          <div slot="content" class="md:tw-w-3/4 tw-mx-auto body-text-1">
            Have more questions? Need more information? We are here to help.
          </div>
        </ContactForm>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Leadership from '~/data/leadership.json'

export default {
  data: () => ({
    category: 'page',
    title: 'About CSI',
    subtitle: 'Premier Software Solutions for eGovernment',
    coverimg: 'about.jpg',
    descContent:
      'Founded in 1990, CSI Technology Group (CSI) located in Keasbey, New Jersey, is the company at the heart of providing software and technology services. The company has matured into a successful software development and service provider in the criminal justice, intelligence, prosecutorial and judicial domain.',
    missions: {
      title: 'Our Mission',
      desc: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt turpis. Integer ac enim pellentesque, adipiscing metus id, pharetra odio. Donec bibendum nunc sit amet tortor scelerisque luctus et sit amet mauris. Suspendisse felis sem, condimentum ullamcorper est sit amet.',
      items: [
        { icon: 'icon-interfaces_solid', title: 'Donec facilisis tortor' },
        { icon: 'icon-interfaces_solid', title: 'Donec facilisis tortor' },
        { icon: 'icon-interfaces_solid', title: 'Donec facilisis tortor' },
        { icon: 'icon-interfaces_solid', title: 'Donec facilisis tortor' },
      ],
    },
  }),
  head() {
    return {
      titleTemplate: '%s - ' + this.$route.params.id,
      meta: [{ name: 'description', content: this.title }],
    }
  },
  computed: {
    getMember() {
      const members = []
      Leadership.forEach((item) => {
        if (item.product) {
          item.product.forEach((res) => {
            if (res === this.pid) {
              members.push(item)
            }
          })
        }
      })
      return members
    },
  },
}
</script>
