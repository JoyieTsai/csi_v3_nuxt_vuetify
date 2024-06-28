<template>
  <v-app>
    <v-main>
      <!-- Cover -->
      <div class="hero-section sm tw-items-center" :style="{
          backgroundImage: `url(images/covers/${category}/${coverimg})`,
        }">
        <div class="main-container tw-mx-auto">
          <div class="tw-flex-1 tw-flex-col tw-text-white tw-text-center">
            <div class="header-1 ltw-eading-snug">{{ title }}</div>
          </div>
        </div>
      </div>

      <div class="main-container tw-mx-auto tw-my-10 xl:tw-my-20">
        <div class="tw-w-full lg:tw-w-4/5 tw-mx-auto">
          <!-- Search Bar -->
          <div>
            <v-text-field height="44" placeholder="Search keyword" append-outer-icon="mdi-magnify" clear-icon="mdi-close" clearable
              @click:append-outer="onSearch"></v-text-field>
          </div>
          <div class="tw-flex tw-flex-wrap">
            <v-chip v-for="(tag, index) in tags" :key="index" class="tw-m-2">
              {{ tag }}
            </v-chip>
          </div>

          <!-- Product result -->
          <div class="
              tw-grid
              xl:tw-grid-cols-3
              md:tw-grid-cols-2
              tw-gap-5 tw-my-10
              xl:tw-my-20
            ">
            <div v-for="(item, i) in searchedProducts" :key="i" class="
                tw-flex
                bg-light
                tw-cursor-pointer
                hover:tw-bg-white hover:tw-shadow-xl
              ">
              <div class="tw-flex-none tw-flex tw-items-center tw-justify-center">
                <img :src="require('~/assets/duotone/' + item.icon)" width="75" alt="" class="tw-m-7" />
              </div>
              <div class="tw-flex-auto tw-py-5 tw-pr-5">
                <div class="tw-text-xl tw-font-semibold tw-mb-2">
                  {{ item.title }}
                </div>
                <div class="tw-opacity-70">{{ item.subtitle }}</div>
              </div>
            </div>
          </div>

          <v-divider></v-divider>

          <!-- Article result -->
          <div v-for="(item, j) in searchedArticles" :key="j" class="
              tw-bg-white
              tw-filter
              tw-drop-shadow-md
              tw-mb-5
              tw-p-8
              tw-rounded
              tw-mt-10
            ">
            <div class="text-grey">{{ item.date }}</div>
            <div class="tw-text-2xl tw-font-semibold tw-my-2">
              {{ item.title }}
            </div>
            <div class="tw-opacity-70">{{ item.desc | getBrief(250) }}</div>
          </div>

          <!-- Ｐagination -->
          <div class="tw-mt-12 tw-text-right">
            <v-pagination v-model="page" :length="result" :total-visible="7"></v-pagination>
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
    title: 'How can we help you?',
    coverimg: 'blue.jpg',
    tags: ['CAD', 'RMS', 'Public safety', 'Total solution', 'Mobile platform'],
    searchedProducts: [
      {
        id: 'cad',
        icon: 'cad.svg',
        title: 'Computer Aided Dispatch (CAD)',
        subtitle: 'Advanced Public Safety Communication and Response',
      },
      {
        id: 'rms',
        icon: 'rms.svg',
        title: 'Law Enforcement Records Management (RMS)',
        subtitle:
          'Revolutionize Public Safety Data Collection, Management, and Reporting',
      },
      {
        id: 'investigation',
        icon: 'investigation.svg',
        title: 'Investigation',
        subtitle: 'Manage Investigative Case Data, Documents, and Evidence',
      },
    ],
    searchedArticles: [
      {
        date: '05/31/2021',
        title:
          'Jersey City, NJ, Public Safety, Police, and Fire Departments Implement a Unified Total Solution',
        desc: 'CSI Technology is proud to announce that the Jersey City, N.J. Public Safety Department is now part of the growing InfoShare<sup>®</sup> family. The Jersey City Public Safety Communications Center now enjoys a unified total solution for both police and fire Computer-Aided Dispatch (CAD) as well as a fully integrated Records Management System (RMS) for both the Police and Fire departments.',
      },
      {
        date: '05/14/2021',
        title:
          'NJBPU Demonstrates Deep Commitment to Public Integrity and Transparency',
        desc: 'CSI Technology Group has assisted the New Jersey Board of Public Utilities (NJBPU) in demonstrating in the most public way possible its deep commitment to public integrity and transparency. CSI, working at the behest of NJBPU, has brought online a Public Search and Comment module that creates unprecedented transparency and access for the public into the workings of the Board.',
      },
      {
        date: '01/26/2021',
        title:
          'Bergen County: Building and Maintaining a CAD/RMS System for a Regional Dispatch Center',
        desc: '10 years have passed since the inception of the Bergen County Public Safety Operations Center (PSOC). The concept was simple and straightforward: build a singular site through which all communication and data could flow for efficient and professional Police, Fire, and EMS response to emergent matters.',
      },
    ],
    page: 1,
    result: 15,
  }),
  methods: {
    onSearch(value) { },
  },
}
</script>
