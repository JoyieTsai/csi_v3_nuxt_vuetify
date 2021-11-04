<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div
        class="hero-section md:tw-items-center"
        :style="{
          background: `url(images/covers/${category}/${coverimg}) 40% center no-repeat`,
          backgroundSize: `cover`,
        }"
      >
        <div class="main-container tw-mx-auto">
          <div class="tw-flex tw-mt-20 md:tw-mt-0 md:tw-mb-12">
            <div class="tw-flex-1 tw-flex-col">
              <div class="header-1 tw-leading-snug">{{ title }}</div>
              <div class="tw-text-2xl">{{ subtitle }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="main-container tw-mx-auto tw-b-20">
        <div class="tw-flex tw-flex-col md:tw-flex-row">
          <div class="md:tw-w-7/12 tw-text-base xl:tw-text-lg 2xl:tw-text-xl">
            {{ descContent }}
          </div>
          <div
            class="
              tw-flex-auto tw-relative tw-z-10 tw-order-first
              md:tw-order-last
            "
          >
            <img
              class="
                tw-absolute tw-bottom-5
                sm:tw-bottom-28
                lg:tw-bottom-5
                xl:tw-bottom-0
                tw-left-32
                sm:tw-left-0
              "
              src="images/company-photo.png"
              alt="CSI"
            />
          </div>
        </div>
      </div>

      <OurMission
        :missions="missions"
        :benefits="benefits"
        class="tw-my-10 xl:tw-my-28"
      />
      <!-- Tagline -->
      <div class="bg-about-tagline tw-pt-12 xl:tw-pt-24">
        <div class="tw-w-full xl:tw-px-20">
          <div class="tw-flex tw-items-center tw-justify-end bg-hexagon">
            <div
              class="
                tw-text-2xl
                xl:tw-text-3xl
                2xl:tw-text-4xl
                tw-w-full
                md:tw-w-80
                xl:tw-w-96
                tw-text-white tw-mr-20
                xl:tw-mr-32
                2xl:tw-mr-48
                tw-mt-20
                xl:tw-mt-28
                tw-mb-8
                xl:tw-mb-12
                tw-pl-5
                md:tw-pl-0
              "
            >
              {{ tagline }}
            </div>
          </div>
        </div>
      </div>
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
          <div
            slot="content"
            class="md:tw-w-3/4 tw-mx-auto tw-text-xl xl:tw-text-2xl"
          >
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
      'CSI Technology Group has over 30 years of experience designing robust, fully customizable eGovernment software. In this time, the company has matured into a successful software and service provider in the criminal justice, intelligence, prosecutorial, and judicial domains. Moreover, CSI has built extensive expertise in data migration, data analytics, and interfacing across disparate systems. As a customer-first organization, we believe the best measure of ROI is a satisfied customer.',
    missions: {
      title: 'Our Mission',
      desc: 'Integrating information technology solutions for eGovernment to maximize efficiency, collaboration, and safety.',
    },
    benefits: {
      title: 'Benefits and Values',
      items: [
        {
          icon: 'icon-limited_expertise_outline',
          title: 'Public sector expertise',
          desc: 'For 30 years, CSI has successfully implemented its solutions across a diverse governmental client list of all facets of public safety, regulatory, prosecutorial and judicial agencies at the municipal, county, and state level. Many of our account managers are former public servants who bring immense subject matter expertise to every client relationship.',
        },
        {
          icon: 'icon-relationship_outline',
          title: 'Client relationships',
          desc: 'We are extremely proud to achieve a 99.8% customer retention rate. We pride ourselves on developing long-term, collaborative partnerships and providing unmatched customer and technical support. CSI has grown strong leveraging our clients’ insights into shared progress for all.',
        },
        {
          icon: 'icon-innovation_outline',
          title: 'Continuous innovation',
          desc: 'We have never been satisfied with the status quo. Innovation is collaborative, so by maintaining close relationships with our clients and actively seeking their feedback, CSI continues to upgrade its technology and expand its intellectual property. Criminal justice never stops evolving and neither can we.',
        },
        {
          icon: 'icon-cost_efficient_outline',
          title: 'Cost Effectiveness',
          desc: 'Our products are affordable to deploy, upgrade, maintain, and scale. We believe in agency control, so all CSI applications are designed to be easily customizable as regulations or requirements demand. In addition, our cloud platform can accommodate several hosting options at different price points.',
        },
      ],
    },
    tagline:
      'CSI’s strength lies in the stability and longevity of our customer base. ',
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
