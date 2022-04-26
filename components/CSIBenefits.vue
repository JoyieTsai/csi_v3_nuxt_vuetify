<template>
  <div class="tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-8">
    <div
      v-for="(benefit, i) in benefits"
      :key="i"
      class="
        tw-bg-white
        shadow-1
        tw-flex tw-flex-col tw-items-center tw-text-center tw-p-5
        zoomin
      "
    >
      <img
        :src="require('~/assets/duotone/' + benefit.icon)"
        alt=""
        class="tw-w-16 xl:tw-w-20"
      />
      <div class="title tw-leading-tight tw-mt-3 tw-mb-2">
        {{ benefit.title }}
      </div>
      <div class="text-base tw-opacity-70">{{ benefit.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    benefits: [
      {
        icon: 'cost_up.svg',
        title: '401K Retirement Plan',
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
        icon: 'h1b.svg',
        title: 'H1B Sponsorship',
        desc: 'Company-paid H1B Sponsorship',
      },
      {
        icon: 'emergency_care.svg',
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
      {
        icon: 'id.svg',
        title: 'US Permanent Resident Sponsorship',
        desc: 'Eligible upon the 1st anniversary as H1B employee',
      },
    ],
  }),
}
</script>
