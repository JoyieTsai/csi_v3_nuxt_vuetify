<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg">
        <template v-slot:icon>
          <img
            class="tw-w-16 xl:tw-w-20 tw-mb-5"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:subtitle>{{ subtitle }}</template>
        <template v-slot:desc-heading>{{ descHeading }}</template>
        <template v-slot:desc-content>{{ descContent }}</template>
      </Hero>

      <!-- Capabilities -->
      <div
        class="
          tw-flex tw-flex-col
          md:tw-flex-row
          tw-justify-center tw-relative
          2xl:tw-mx-28
          xl:tw-mx-10
          tw-my-12
          xl:tw-my-28
        "
      >
        <div
          class="
            header-2
            tw-text-center
            md:tw-absolute md:tw-mt-12
            xl:tw-mt-24
            md:tw-mr-10 md:tw-top-1/3
          "
        >
          Our Capabilities
        </div>
        <img
          :src="require('~/assets/vectors/capabilities.jpg')"
          alt="Capabilities"
          class="tw-hidden md:tw-block"
        />
        <img
          :src="require('~/assets/vectors/capabilities_s.jpg')"
          alt="Capabilities"
          class="md:tw-hidden"
        />
      </div>

      <!-- Timeline -->
      <div
        class="
          main-container
          tw-px-0
          md:tw-px-10
          tw-mx-auto tw-relative tw-my-12
          xl:tw-my-28
        "
      >
        <div class="header-2 tw-text-center">Technology Timeline</div>
        <div class="tw-mt-8 xl:tw-mt-16 tw-mx-0 lg:tw-mx-5 xl:tw-mx-0">
          <section id="cd-timeline" class="xl:tw-w-5/6 2xl:tw-w-4/5 tw-mx-auto">
            <div
              v-for="(item, index) in timelines"
              :key="index"
              :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-up'"
              data-aos-duration="1500"
              class="cd-timeline-block"
            >
              <div
                class="cd-timeline-arrow"
                :style="{
                  background:
                    `url(` +
                    require(`~/assets/vectors/${item.arrow}`) +
                    `) center no-repeat`,
                  backgroundSize: `contain`,
                }"
              >
                <div
                  class="
                    lg:tw-mt-3
                    md:tw-mt-2
                    tw-mt-1 tw-ml-16
                    lg:tw-ml-24
                    md:tw-ml-20
                    tw-text-xs
                    md:tw-text-sm
                    lg:tw-text-lg
                    xl:tw-text-xl
                  "
                >
                  {{ item.year }}
                </div>
              </div>
              <div
                v-if="item.img"
                class="cd-timeline-img"
                :style="{
                  background:
                    `url(` +
                    require(`~/assets/vectors/${item.img}`) +
                    `) center no-repeat`,
                  backgroundSize: `contain`,
                }"
              ></div>
              <div
                v-if="item.img"
                class="tw-flex tw--mt-12 lg:tw--mt-24 xl:tw--mt-36"
              >
                <div
                  :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-right'"
                  data-aos-duration="1500"
                  class="tw-flex-1"
                >
                  <div class="md:tw-mr-6 xl:tw-mr-12">
                    <img
                      v-if="item.leftImg"
                      class="tw-ml-auto"
                      :src="require(`~/assets/vectors/${item.leftImg}`)"
                    />
                  </div>
                </div>
                <div
                  :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-left'"
                  data-aos-duration="1500"
                  class="tw-flex-1"
                >
                  <div class="md:tw-ml-6 xl:tw-ml-12">
                    <img
                      v-if="item.rightImg"
                      :src="require(`~/assets/vectors/${item.rightImg}`)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    category: 'capabilities',
    title: 'Capabilities Overview',
    subtitle: 'Core Technologies Driving the InfoShare™ System',
    icon: 'capabilities.svg',
    coverimg: 'capabilities.jpg',
    descHeading:
      'Software innovation competencies with lasting utility and quality',
    descContent:
      'Existing software solutions are complex and inflexible. Third-party providers design and code disparate applications that lack true integration, leading to large overhead expenses, inefficiencies, and additional training down the road. In contrast, CSI has invested decades of research and development in designing scalable and adaptable software architecture, a low-code development platform, and innovations with real-world applications. Our intellectual property portfolio continues to grow with every project.',
    timelines: [
      {
        year: '1998',
        arrow: 't-arrow-1.svg',
        img: 't-engine-1.svg',
        leftImg: 't-item-2.svg',
        rightImg: 't-item-1.svg',
      },
      {
        year: '2010',
        arrow: 't-arrow-2.svg',
        img: 't-engine-2.svg',
        leftImg: 't-item-4.svg',
        rightImg: 't-item-3.svg',
      },
      {
        year: '2014',
        arrow: 't-arrow-3.svg',
        img: 't-engine-3.svg',
        leftImg: 't-item-6.svg',
        rightImg: 't-item-5.svg',
      },
      {
        year: '2018',
        arrow: 't-arrow-4.svg',
        img: 't-engine-4.svg',
        leftImg: 't-item-7.svg',
      },
      {
        year: 'Now',
        arrow: 't-arrow-5.svg',
      },
    ],
  }),
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
$blockL: 295px;
$blockS: 100px;
$imgWidth: 280px;
$imgHight: 250px;
$topH: 52px;
$arrowWidth: 250px;
$arrowHight: 90px;
$XL: 0.9;
$L: 0.7;
$M: 0.6;
$S: 0.4;

.cd-timeline-block {
  position: relative;
  height: $blockL;
  &:last-child {
    height: $blockS;
  }
}

.cd-timeline-arrow {
  position: absolute;
  display: flex;
  justify-content: center;
  width: $arrowWidth;
  height: $arrowHight;
  z-index: 4;
  left: 50%;
  transform: translateX(-50%);
}

.cd-timeline-img {
  position: relative;
  width: $imgWidth;
  height: $imgHight;
  top: $topH;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}

.cd-timeline-arrow {
  z-index: 5;
}

@media only screen and (max-width: $breakpoints-xl) {
  .cd-timeline-block {
    height: ceil($blockL * $XL);
    &:last-child {
      height: ceil($blockS * $XL);
    }
  }
  .cd-timeline-arrow {
    width: ceil($arrowWidth * $XL);
    height: ceil($arrowHight * $XL);
  }
  .cd-timeline-img {
    width: ceil($imgWidth * $XL);
    height: ceil($imgHight * $XL);
    top: ceil($topH * $XL);
  }
}
@media only screen and (max-width: $breakpoints-lg) {
  .cd-timeline-block {
    height: ceil($blockL * $L);
    &:last-child {
      height: ceil($blockS * $L);
    }
  }
  .cd-timeline-arrow {
    width: ceil($arrowWidth * $L);
    height: ceil($arrowHight * $L);
  }
  .cd-timeline-img {
    width: ceil($imgWidth * $L);
    height: ceil($imgHight * $L);
    top: ceil($topH * $L);
  }
}
@media only screen and (max-width: $breakpoints-md) {
  .cd-timeline-block {
    height: ceil($blockL * $M);
    &:last-child {
      height: ceil($blockS * $M);
    }
  }
  .cd-timeline-arrow {
    width: ceil($arrowWidth * $M);
    height: ceil($arrowHight * $M);
  }
  .cd-timeline-img {
    width: ceil($imgWidth * $M);
    height: ceil($imgHight * $M);
    top: ceil($topH * $M);
  }
}
@media only screen and (max-width: $breakpoints-sm) {
  .cd-timeline-block {
    height: 100px;
    &:last-child {
      height: 40px;
    }
  }
  .cd-timeline-arrow {
    width: 100px;
    height: 40px;
  }
  .cd-timeline-img {
    width: 90px;
    height: 85px;
    top: ceil($topH * $S);
  }
}
</style>
