<!-- eslint-disable vue/no-v-html -->
 <template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :title="title">
        <template #icon>
          <img class="tw-w-16 xl:tw-w-20 tw-mb-5" :src="require('~/assets/duotone/' + icon)" :alt="title" />
        </template>
        <template #title>
          <div v-html="title"></div>
        </template>
        <template #subtitle>
          <div v-html="subtitle"></div>
        </template>
        <template #desc-heading>
          <div v-html="descHeading"></div>
        </template>
        <template #desc-content>
          <div v-html="descContent"></div>
        </template>
      </Hero>

      <!-- Capabilities -->
      <div class="header-2 tw-text-center tw-mt-12 xl:tw-mt-28">
        Our Capabilities
      </div>
      <div class="
          capabilities-diagram
          tw-py-10
          xl:tw-py-20
          tw-mx-auto
          2xl:tw-px-20
          tw-flex tw-flex-wrap
        ">
        <div v-for="(item, index) in items" :key="index" :class="'capabilities-diagram--' + index">
          <div v-if="item.type === 'icon'" class="hexagon-item norm">
            <img :src="require('@/assets/duotone/' + item.icon)" alt="" class="tw-w-20" />
          </div>
          <div v-else-if="item.type === 'highlight'" class="hexagon-item highlight" @click.prevent="routerTo(item.url)">
            <div class="tw-text-xl tw-font-semibold" v-html="item.title"></div>
            <div>{{ item.desc }}</div>
          </div>
          <div v-else class="hexagon-item prim" @click.prevent="routerTo(item.url)">
            <div class="tw-text-xl tw-font-semibold">{{ item.title }}</div>
            <div>{{ item.desc }}</div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="
          main-container
          tw-px-2
          md:tw-px-10
          tw-mx-auto tw-relative tw-my-12
          xl:tw-my-28
        ">
        <div class="header-2 tw-text-center">Technology Timeline</div>
        <div class="tw-mt-8 xl:tw-mt-16 tw-mx-0 lg:tw-mx-5 xl:tw-mx-0">
          <section id="cd-timeline" class="xl:tw-w-5/6 2xl:tw-w-4/5 tw-mx-auto">
            <div v-for="(item, index) in timelines" :key="index" :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-up'" data-aos-duration="1500"
              class="cd-timeline-block">
              <div class="cd-timeline-arrow" :style="{
                  background:
                    `url(` +
                    require(`~/assets/vectors/${item.arrow}`) +
                    `) center no-repeat`,
                  backgroundSize: `contain`,
                }">
                <div class="
                    lg:tw-mt-3
                    md:tw-mt-2
                    tw-mt-1 tw-ml-16
                    lg:tw-ml-24
                    md:tw-ml-20
                    tw-text-xs
                    md:tw-text-sm
                    lg:tw-text-lg
                    xl:tw-text-xl
                  ">
                  {{ item.year }}
                </div>
              </div>
              <div v-if="item.img" class="cd-timeline-img" :style="{
                  background:
                    `url(` +
                    require(`~/assets/vectors/${item.img}`) +
                    `) center no-repeat`,
                  backgroundSize: `contain`,
                }"></div>
              <div v-if="item.img" class="tw-flex tw--mt-12 lg:tw--mt-24 xl:tw--mt-36">
                <div :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-right'" data-aos-duration="1500" class="tw-flex-1">
                  <div class="md:tw-mr-6 xl:tw-mr-12">
                    <img v-if="item.leftImg" class="tw-ml-auto" :src="require(`~/assets/vectors/${item.leftImg}`)" />
                  </div>
                </div>
                <div :data-aos="$vuetify.breakpoint.smAndDown ? '' : 'fade-left'" data-aos-duration="1500" class="tw-flex-1">
                  <div class="md:tw-ml-6 xl:tw-ml-12">
                    <img v-if="item.rightImg" :src="require(`~/assets/vectors/${item.rightImg}`)" />
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
import Overview from '~/data/capabilities-overview.json'

export default {
  data: () => ({
    category: 'capabilities',
    title: String,
    subtitle: String,
    icon: String,
    coverimg: String,
    descHeading: String,
    descContent: String,
    items: Object,
    timelines: Object,
  }),
  head() {
    return {
      titleTemplate: '%s | ' + this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.subtitle },
        { name: 'keywords', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.subtitle },
        {
          property: 'og:image:secure_url',
          content:
            'https://www.csitech.com/images/covers/capabilities/' +
            this.coverimg,
        },
        {
          property: 'og:url',
          content: 'https://www.csitech.com/capabilities',
        },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.subtitle },
        {
          property: 'twitter:image',
          content:
            'https://www.csitech.com/images/covers/capabilities/' +
            this.coverimg,
        },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.title = Overview.title
      this.subtitle = Overview.subtitle
      this.icon = Overview.icon
      this.coverimg = Overview.coverImg
      this.descHeading = Overview.descHeading
      this.descContent = Overview.descContent
      this.items = Overview.items
      this.timelines = Overview.timelines
    },
    routerTo(id) {
      this.$router.push({ path: '/capabilities/' + id })
    },
  },
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

.capabilities-diagram {
  background: url('../../assets/vectors/capabilities-bg.svg') center no-repeat;
  background-size: cover;
  max-width: 1900px;

  & > div:nth-child(1) {
    margin-left: 120px;
  }

  & > div:nth-child(12) {
    margin-left: 120px;
  }

  & > div:nth-child(4) {
    margin-right: calc(1920px - 1280px);
  }

  & > div:nth-child(18) {
    margin-left: 480px;
  }

  .hexagon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 270px;
    height: 300px;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    color: $white;
    background-size: cover;
    padding: 3rem;
    text-align: center;
    transition: all 0.3s;
    margin: -45px -15px;

    &.prim,
    &.highlight {
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    &.norm {
      background-image: url('../../assets/vectors/normal.png');
    }
    &.prim {
      background-image: url('../../assets/vectors/primary.png');
    }
    &.highlight {
      background-image: url('../../assets/vectors/highlight.png');
    }
  }
}

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

@media only screen and (min-width: 1720px) and (max-width: 1880px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(12n + 1) {
        margin-left: 120px;
      }
    }
  }
}

@media only screen and (min-width: 1600px) and (max-width: 1719px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(11n + 1) {
        margin-left: 120px;
      }
    }
  }
}

@media only screen and (min-width: 1320px) and (max-width: 1599px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(10n + 1) {
        margin-left: 120px;
      }
    }
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1319px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(9n + 1) {
        margin-left: 120px;
      }
    }
  }
}

@media only screen and (min-width: 1080px) and (max-width: 1219px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(8n + 1) {
        margin-left: 120px;
      }
    }
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1079px) {
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(7n + 1) {
        margin-left: 120px;
      }
    }
  }
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
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(9n + 1) {
        margin-left: 100px;
      }
    }

    .hexagon-item {
      transform: scale(0.85);
      margin: -65px -35px;

      &.prim,
      &.highlight {
        &:hover {
          transform: none;
        }
      }
    }
  }
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
  .capabilities-diagram {
    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(5),
      &:nth-child(12),
      &:nth-child(19) {
        margin-left: 95px;
      }
    }

    .hexagon-item {
      transform: scale(0.8);
      margin: -68px -40px;

      &.prim,
      &.highlight {
        &:hover {
          transform: none;
        }
      }
    }
  }
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
  .capabilities-diagram {
    background: url('../../assets/vectors/capabilities-bg-s.svg') center
      no-repeat;
    background-size: contain;

    & > div:nth-child(n) {
      margin-left: 0;
      margin-right: 0;
    }

    & > div {
      &:nth-child(5n + 1) {
        margin-left: 62px;
      }
    }

    .hexagon-item {
      transform: scale(0.52);
      margin: -96px -73px;

      &.prim,
      &.highlight {
        &:hover {
          transform: none;
        }
      }
    }
  }
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

@media only screen and (max-width: $breakpoints-xs) {
  .capabilities-diagram {
    max-width: 375px;
    & > div {
      &:nth-child(5n + 1) {
        margin-left: 60px;
      }
    }

    .hexagon-item {
      transform: scale(0.52);
      margin: -98px -74px;

      &.prim,
      &.highlight {
        &:hover {
          transform: none;
        }
      }
    }
  }
}

@media only screen and (max-width: 355px) {
  .capabilities-diagram {
    max-width: 320px;
    & > div {
      &:nth-child(5n + 1) {
        margin-left: 53px;
      }
    }

    .hexagon-item {
      transform: scale(0.45);
      margin: -105px -82px;

      &.prim,
      &.highlight {
        &:hover {
          transform: none;
        }
      }
    }
  }
}
</style>
