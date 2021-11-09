<template>
  <div class="main-container tw-mx-auto">
    <!-- Careers -->
    <div class="tw-flex tw-flex-col lg:tw-flex-row">
      <div class="lg:tw-w-1/3">
        <div class="header-2">Careers</div>
        <div class="tw-text-base xl:tw-text-lg tw-opacity-70">
          <p>
            CSI is a bridge between government agencies and citizens. We partner
            with public safety, law enforcement, regulatory and judicial
            government organizations to solve their toughest technology
            challenges. We also facilitate the delivery and responsiveness of
            public services.
          </p>
          <p>
            Our highest priorities are customer satisfaction and product
            excellence. A career at CSI means that together, we make society a
            safer place with technology.
          </p>
          <p>
            Browse our job openings to find something that fits your interests
            and experience.
          </p>
        </div>
        <button
          class="tw-my-10 lg:tw-mb-0 btn-lg btn-primary hover:tw-shadow-xl"
          @click.prevent="routerTo('job')"
        >
          View Career Opportunities
        </button>
      </div>
      <div
        class="
          tw-my-5
          lg:tw-w-2/3 lg:tw-pl-16
          tw-grid tw-grid-cols-2
          md:tw-grid-cols-3
          tw-gap-4
          md:tw-gap-6
        "
      >
        <div
          v-for="(career, i) in careers"
          :key="i"
          class="
            tw-bg-white
            shadow-1
            tw-flex tw-flex-col tw-items-center tw-text-center tw-p-5
            zoomin
          "
        >
          <img
            :src="require('~/assets/duotone/' + career.icon)"
            alt=""
            class="tw-w-16 xl:tw-w-20"
          />
          <div class="tw-text-lg xl:tw-text-xl tw-leading-tight tw-my-3">
            {{ career.title }}
          </div>
          <div
            class="tw-text-sm xl:tw-text-base tw-opacity-70 tw-leading-tight"
          >
            {{ career.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    careers: [
      {
        icon: 'cost_up.svg',
        title: '401k Retirement Plan',
        desc: 'Eligible after one year of employment',
      },
      {
        icon: 'medical_dental.svg',
        title: 'Medical & Dental',
        desc: 'Full-time employee with 90 days of service',
      },
      {
        icon: 'worker_insurance.svg',
        title: "Worker's Compensation",
        desc: "Worker's compensation coverage",
      },
      {
        icon: 'life_insurance.svg',
        title: 'Disability Insurance',
        desc: 'Company-paid state short-term disability insurance',
      },
      {
        icon: 'health_care.svg',
        title: 'Life Insurance',
        desc: 'Company-paid life insurance',
      },
      {
        icon: 'money_insurance.svg',
        title: 'AD&D Insurance',
        desc: 'Company-paid accidental death & dismemberment (AD&D) insurance',
      },
    ],
  }),
  methods: {
    routerTo(url) {
      this.$router.push({ name: url })
    },
  },
}
</script>
