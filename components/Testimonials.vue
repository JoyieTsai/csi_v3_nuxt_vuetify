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
                        :class="[item.quote.length > 300 ? 'w-500' : 'w-350',item.highlight ? 'highlight' : '', 'tw-p-5 md:tw-p-8 xl:tw-p-10 quote-card']">
                        <div class="tw-text-sm md:tw-text-base xl:tw-text-lg">
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
        <div class="main-container tw-mx-auto tw-text-right">
            <v-btn text class="tw-capitalize" to="/resources/testimonial">
                <v-icon>mdi-arrow-right-thin</v-icon> View All
            </v-btn>
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
    },
    methods: {
        onIntersect(entries, observer) {
            this.isIntersecting = entries[0].isIntersecting
            if (this.isIntersecting === true) {
                this.moveRight()
            }
        },
        moveRight() {
            const track = document.querySelector('.slick-track')
            track.style.transform = 'translateX(-5750px)'
        },
        moveLeft() {
            const track = document.querySelector('.slick-track')
            track.style.transform = 'translateX(100px)'
        }
    }
}
</script>

<style lang="scss">
.swiper-wrapper {
    padding: 2rem;
}
.slick {
    &-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding-top: 2rem;
        padding-bottom: 1rem;
    }
    &-track {
        width: 8000px;
        transform: translateX(100px);
        transition: transform 300s linear 3s;
    }
    &-slide {
        float: left;
        height: 100%;
        margin-right: 40px;
    }
    @media only screen and (max-width: $breakpoints-lg) {
        &-track {
            transform: translateX(50px);
        }
        &-slide {
            margin-right: 30px;
        }
    }
}

.w-350 {
    width: 350px;
}
.w-500 {
    width: 500px;
}
@media only screen and (max-width: $breakpoints-md) {
    .w-350 {
        width: 250px;
    }
    .w-500 {
        width: 350px;
    }
}
</style>
