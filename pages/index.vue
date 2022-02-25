<template>
  <v-app>
    <v-main>
      <carousel
        autoplay
        loop
        autoplay-hover-pause
        :per-page="perPage"
        :autoplay-timeout="autoplayTimeout"
        :pagination-enabled="paginationEnabled"
      >
        <slide
          v-for="(cover, index) in covers"
          :key="index"
          class="
            tw-flex
            tw-flex-col
            tw-items-center
            tw-justify-center
            tw-text-center
            tw-text-white
            cover cover-height
            tw-px-5
          "
          :style="{
            background: `url(images/covers/index/` + cover.img + `) center`,
          }"
        >
          <div class="header-1 tw-mt-10 xl:tw-mt-20">{{ cover.title }}</div>
          <div class="header-4">{{ slogan }}</div>
          <div class="tw-mt-14">
            <v-dialog v-model="modalVideo">
              <template v-slot:activator="{ on, attrs }">
                <button class="btn-play" v-bind="attrs" v-on="on">
                  <img
                    src="../assets/icons/icon-play.svg"
                    alt="play"
                    class="tw-w-3 xl:tw-w-6"
                  />
                </button>
              </template>
              <div class="tw-aspect-w-16 tw-aspect-h-9">
                <iframe
                  v-if="modalVideo"
                  src="https://youtu.be/9wERtnQGOgE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <!-- <youtube
                  ref="youtube"
                  video-id="VRckuuKA1JE"
                  width="100%"
                  height="720"
                ></youtube> -->
            </v-dialog>
          </div>
        </slide>
      </carousel>
      <IndexCoreSolutions />
      <IndexVideos class="tw-my-12 xl:tw-my-20" />
      <IndexAbout class="tw-my-12 xl:tw-my-20" />
      <IndexFeatures class="tw-my-14 xl:tw-my-28" />
      <FeaturedArticle class="tw-mt-14 xl:tw-mt-28" />
      <RelatedNews
        title="false"
        class="tw-mt-8 xl:tw-mt-16 tw-mb-14 xl:tw-mb-28"
      />
      <Testimonials class="tw-my-14 xl:tw-my-28" />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    covers: [
      {
        id: 1,
        title: 'Powerful, Disruptive Government Technology',
        img: 'index-1.jpg',
        url: '',
      },
      {
        id: 2,
        title: 'Smarter and Safer Communities',
        img: 'index-2.jpg',
        url: '',
      },
      {
        id: 3,
        title: 'Empowerment. Collaboration. Efficiency.',
        img: 'index-3.jpg',
        url: '',
      },
    ],
    slogan: 'InfoShare™ - Premier Software Solutions for eGovernment',
    perPage: 1,
    autoplayTimeout: 4000,
    paginationEnabled: false,
    modalVideo: false,
  }),
  // watch: {
  //   modalVideo(val) {
  //     !val && this.stop()
  //   },
  // },
  // methods: {
  //   stop() {
  //     this.$refs.youtube.player.stopVideo()
  //   },
  // },
}
</script>

<style lang="scss">
.cover-height {
  height: $hero-xl;
  @media screen and (max-width: $breakpoints-xl) {
    height: ceil($hero-xl * 0.9);
  }
  @media screen and (max-width: $breakpoints-lg) {
    height: ceil($hero-xl * 0.8);
  }
}
</style>
