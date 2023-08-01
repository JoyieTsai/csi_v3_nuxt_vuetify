<template>
    <div class="main-container tw-mx-auto">
        <!-- Patent -->
        <div class="header-2 tw-text-center tw-mb-5 lg:tw-mb-10">Our Patents</div>
        <swiper :options="swiperOption" class="tw-pb-8">
            <swiper-slide v-for="(patent, i) in patents" :key="i">
                <div class="
            patent-card
            shadow-1
            tw-flex
            tw-flex-col
            tw-items-center
            tw-justify-between
            tw-text-center
            tw-p-6
            2xl:tw-p-8
            tw-m-2
            2xl:tw-m-4
            tw-box-content
          ">
                    <div class="tw-grid">
                        <v-img :lazy-src="require('~/assets/images/1x/' + patent.cover)"
                            :src="require('~/assets/images/2x/' + patent.cover)" contain class="
                tw-mb-3
                lg:tw-mb-6
                tw-h-32
                md:tw-h-42
                lg:tw-h-48
                2xl:tw-h-56
                slow-zoom
              "></v-img>
                        <div class="
                tw-text-base
                md:tw-text-lg
                2xl:tw-text-xl
                tw-font-semibold tw-mb-1
              ">
                            {{ patent.title }}
                        </div>
                        <a :href="
                ' https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/' +
                patent.patentNo
              " target="_blank" class="
                text-primary
                tw-text-base
                md:tw-text-lg
                2xl:tw-text-xl
                tw-font-semibold
                hover:tw-underline
              ">
                            {{ patent.patent }}
                        </a>
                        <div class="
                tw-text-base
                md:tw-text-lg
                2xl:tw-text-xl
                tw-leading-tight tw-my-4
              ">
                            {{ patent.date }}
                        </div>
                        <div class="tw-text-sm xl:tw-text-base tw-opacity-70 tw-leading-tight">
                            {{ patent.desc }}
                        </div>
                    </div>
                    <nuxt-link class="
              tw-mt-6
              lg:tw-my-10 lg:tw-mb-0
              btn-normal btn-primary
              hover:tw-shadow-xl
            " :to="patent.url">
                        Learn more
                    </nuxt-link>
                </div>
            </swiper-slide>
            <div v-show="$vuetify.breakpoint.mdAndDown" slot="pagination" class="swiper-pagination">
            </div>
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
                patent: 'US Patent No. 10,649,743 B2',
                patentNo: '10649743',
                date: 'May 12, 2020',
                desc: 'Proprietary low code technology facilitates application development for government agencies and beyond. Users can design applications and plan business processes efficiently without building any infrastructure or writing any program code.',
                url: '/capabilities/low-code',
            },
            {
                cover: 'patent-1.jpg',
                title: 'Form Management System and Method',
                patent: 'US Patent No. 10,706,225 B2',
                patentNo: '10706225',
                date: 'July 7, 2020',
                desc: 'Patented form management system with form building and common library building modules. Converts existing files into online fillable forms with all layout information and corresponding fields and data types stored in a common library. Users can modify and manage the form—edit input fields, set element types, design dropdown lists, create access permissions—without any programming or support from developers.',
                url: '/capabilities/doc-template-generation',
            },
            {
                cover: 'patent-2.jpg',
                title: 'Development Platform Of Mobile Native Applications',
                patent: 'US Patent No. US 10,394,529 B2',
                patentNo: '10394529',
                date: 'Aug. 27, 2019',
                desc: 'Cloud or local development platform for a developer to develop mobile native applications without the need to write program code. Supports the development of cross-platform (iOS, Android) and cross-industry mobile native applications, and provides various templates for designing screen interactions and business processes. Updates made through the development platform are simultaneously applied to all mobile native applications.',
                url: '/capabilities/low-code',
            },
        ],
        swiperOption: {
            slidesPerView: 1,
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
                667: {
                    slidesPerView: 2,
                },
                1366: {
                    slidesPerView: 3,
                },
            },
        },
    }),
}
</script>
<style lang="scss">
.patent-card {
    height: 635px;

    @media only screen and (max-width: $breakpoints-lg) {
        height: 555px;
    }
}
</style>
