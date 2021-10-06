<template>
  <div class="main-container tw-mx-auto">
    <!-- Careers -->
    <div class="tw-flex tw-flex-col lg:tw-flex-row">
      <div class="lg:tw-w-1/3">
        <div class="header-2">Careers</div>
        <div class="body-text-3 tw-opacity-70">
          CSI is a leading application provider for government agencies and
          local,regional and statewide law enforcement agencies.
          <br /><br />Currently contracted by County Prosecutors’ Offices, the
          Supreme Court and State Police of New Jersey, the North Carolina
          Department of Justice in Raleigh, and others, CSI has established a
          reputation in developing and supporting web-based application
          solutions for various criminal justice, judiciary and regulatory
          agencies. <br /><br />CSI has also installed and supports applications
          in Hawaii, New Mexico, and Oklahoma.
        </div>
        <button
          class="tw-mt-12 btn-lg btn-primary hover:tw-shadow-xl"
          @click.prevent="routerTo('job')"
        >
          VIEW JOB OPENINGS
        </button>
      </div>
      <div
        class="
          tw-my-5
          lg:tw-w-2/3 lg:tw-pl-16
          tw-grid tw-grid-cols-2
          md:tw-grid-cols-3
          tw-gap-6
        "
      >
        <div
          v-for="(career, i) in careers"
          :key="i"
          class="
            tw-bg-white
            shadow-1
            tw-flex tw-flex-col tw-items-center tw-text-center tw-p-5
          "
        >
          <img
            :src="require('~/assets/duotone/' + career.icon)"
            alt=""
            class="tw-w-16 xl:tw-w-20"
          />
          <div class="title tw-leading-tight tw-my-3">{{ career.title }}</div>
          <div class="text-base tw-opacity-70">{{ career.desc }}</div>
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
        icon: 'cafeteria_plan.svg',
        title: 'Cafeteria plan',
        desc: 'Full-time employee w/90 days of service',
      },
      {
        icon: 'medical_dental.svg',
        title: 'Medical & dental',
        desc: 'Full-time employee w/90 days of service',
      },
      {
        icon: 'worker_insurance.svg',
        title: "Worker's compensation Insurance",
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
