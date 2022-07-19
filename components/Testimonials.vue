<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <div v-intersect="onIntersect"></div>
        <div class="header-2 tw-text-center">Testimonials</div>

        <!-- Testimonial -->

        <div class="slick-list">
            <div class="slick-track">
                <div v-for="(item, i) in testimonials" :key="i" class="slick-slide">
                    <div
                        :class="[item.quote.length > 300 ? 'w-500' : 'w-400',item.highlight ? 'highlight' : '', 'tw-p-8 xl:tw-p-10 quote-card']">
                        <div class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-mt-5 lg:tw-mt-0">
                            {{ item.quote }}
                        </div>
                        <div class="middle-divider tw-mt-4">
                            <div class="tw-z-10 tw-w-16 tw-h-16 tw-rounded-full tw-bg-no-repeat tw-bg-contain"
                                :style="{ backgroundImage: `url(images/agency/${item.logo})`, }">
                            </div>
                        </div>
                        <div
                            class="tw-text-center tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5">
                            {{ item.author }}
                        </div>
                        <div
                            class="tw-text-center tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60">
                            {{ item.agency }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <swiper class="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(item, i) in testimonials" :key="i">
                <div :class="[item.highlight ? 'highlight' : '', 'tw-p-8 xl:tw-p-10 quote-card']">
                    <div class="tw-text-sm md:tw-text-base xl:tw-text-lg tw-mt-5 lg:tw-mt-0">
                        {{ item.quote }}
                    </div>
                    <div class="middle-divider tw-mt-4">
                        <div class="tw-z-10 tw-w-16 tw-h-16 tw-rounded-full tw-bg-no-repeat tw-bg-contain"
                            :style="{ backgroundImage: `url(images/agency/${item.logo})`, }">
                        </div>
                    </div>
                    <div
                        class="tw-text-center tw-text-sm md:tw-text-base lg:tw-text-lg tw-font-semibold tw-mt-5">
                        {{ item.author }}
                    </div>
                    <div
                        class="tw-text-center tw-text-xs md:tw-text-sm xl:tw-text-base tw-opacity-60">
                        {{ item.agency }}
                    </div>
                </div>
            </swiper-slide>
        </swiper> -->
    </div>
</template>

<script>
import TMS from '~/data/testimonials.json'

export default {
    data: () => ({
        swiperOption: {
            loop: true,
            centeredSlides: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },
            autoplay: {
                delay: 3000,
            }
        },
        isIntersecting: false,
    }),
    computed: {
        testimonials() {
            return TMS
        },
        position() {
            const pos = document.getElementsByClassName('slick-track').styly.transform.translateX = '6050px'
            return pos
        }
    },
    methods: {
        onIntersect(entries, observer) {
            this.isIntersecting = entries[0].isIntersecting
        },
    }
}
</script>

<style lang="scss">
.swiper-wrapper {
    padding: 2rem;
    transition: transform 2s linear 0s;
}
.slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 2rem;
}
.slick-track {
    width: 10000px;
    transform: translateX(0px);
    transition: transform 30s linear 0s;
}
.slick-slide {
    float: left;
    height: 100%;
    margin-right: 40px;
}
.w-400 {
    width: 400px;
}
.w-500 {
    width: 500px;
}
</style>
