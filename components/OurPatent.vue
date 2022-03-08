<template>
  <div class="main-container tw-mx-auto">
    <!-- Patent -->
    <div class="header-2 tw-text-center tw-mb-5 lg:tw-mb-10">Our Patents</div>
    <swiper :options="swiperOption" class="swiper tw-pb-8">
      <swiper-slide v-for="(patent, i) in patents" :key="i">
        <div
          class="
            shadow-1
            tw-flex tw-flex-col tw-items-center tw-text-center tw-p-6
            xl:tw-p-10
            tw-m-3
            md:tw-m-5
          "
        >
          <div>
            <img
              :data-src="require('~/assets/images/1x/' + patent.cover)"
              :data-srcset="require('~/assets/images/2x/' + patent.cover)"
              class="swiper-lazy tw-w-full tw-mb-6 tw-mx-auto swiper-image"
            />
            <div class="swiper-lazy-preloader"></div>
            <div class="tw-text-lg xl:tw-text-xl tw-font-semibold">
              {{ patent.title }}
            </div>
            <div class="tw-text-lg xl:tw-text-xl tw-font-semibold">
              {{ patent.no }}
            </div>
            <div class="tw-text-lg xl:tw-text-xl tw-leading-tight tw-my-4">
              {{ patent.date }}
            </div>
            <div
              class="tw-text-sm xl:tw-text-base tw-opacity-70 tw-leading-tight"
            >
              {{ patent.desc }}
            </div>
          </div>
          <nuxt-link
            class="
              tw-mt-6
              lg:tw-my-10 lg:tw-mb-0
              btn-normal btn-primary
              hover:tw-shadow-xl
            "
            :to="patent.url"
          >
            Learn more
          </nuxt-link>
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data: () => ({
    patents: [
      {
        cover: 'engine-2.jpg',
        title: 'Application Developing Method and System',
        no: 'US Patent No. 10,649,743 B2',
        date: 'May 12, 2020',
        desc: 'Proprietary low code technology facilitates application development for government agencies and beyond. Users can design applications and plan business processes efficiently without building any infrastructure or writing any program code.',
        url: '/capabilities/low-code',
      },
      {
        cover: 'patent-1.jpg',
        title: 'Form Management System and Method',
        no: 'US Patent No. 10,706,225 B2',
        date: 'July 7, 2020',
        desc: 'Patented form management system with form building and common library building modules. Converts existing files into online fillable forms with all layout information and corresponding fields and data types stored in a common library. Users can modify and manage the form—edit input fields, set element types, design dropdown lists, create access permissions—without any programming or support from developers.',
        url: '/capabilities/doc-template-generation',
      },
      {
        cover: 'patent-2.jpg',
        title: 'Development Platform Of Mobile Native Applications',
        no: 'US Patent No. US 10,394,529 B2',
        date: 'Aug. 27, 2019',
        desc: 'Cloud or local development platform for a developer to develop mobile native applications without the need to write program code. Supports the development of cross-platform (iOS, Android) and cross-industry mobile native applications, and provides various templates for designing screen interactions and business processes. Updates made through the development platform are simultaneously applied to all mobile native applications.',
        url: '/capabilities/low-code',
      },
    ],
    swiperOption: {
      slidesPerView: 2,
      spaceBetween: 0,
      freeMode: true,
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    },
  }),
}
</script>
<style lang="scss">
.swiper-image {
  max-width: 600px;
}
</style>
