<template>
  <div class="main-container tw-mx-auto md:tw-py-10">
    <div class="videos tw-grid md:tw-grid-cols-2 tw-gap-12 xl:tw-gap-20">
      <!-- Video 1 -->
      <div class="tw-order-1 header-3 tw-self-center tw-mb-5">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          Pioneering
          <a href="/capabilities/infoshare-engine" class="btn-link">
            InfoShare<sup>®</sup> Engine</a
          >, a low-code development platform for Government ERP applications
        </div>
      </div>
      <div class="tw-order-2 index-video tw-ml-5">
        <div class="index-video--1" @click="currentVideo('RPYlUFbNweY')">
          <div class="default">
            <div class="tw-absolute absolute-center btn-play primary">
              <img
                src="../assets/icons/icon-play.svg"
                alt="play"
                class="tw-w-3 xl:tw-w-6"
              />
            </div>
            <img src="videos/index-video-1.jpg" />
          </div>
          <img class="active" src="videos/tech.gif" />
        </div>
      </div>

      <!-- Video 2 -->
      <div class="tw-order-4 md:tw-order-3 index-video tw-mr-5">
        <div class="index-video--2">
          <div class="default">
            <!-- <div class="tw-absolute absolute-center btn-play primary">
              <img
                src="../assets/icons/icon-play.svg"
                alt="play"
                class="tw-w-3 xl:tw-w-6"
              />
            </div> -->
            <img src="videos/index-video-2.jpg" />
          </div>
          <img class="active" src="videos/index-video-2.jpg" />
        </div>
      </div>

      <div class="tw-order-3 md:tw-order-4 header-3 tw-self-center tw-mb-5">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          Building the future of
          <a href="public-safety" class="btn-link">public safety</a> with AI,
          mobile- and cloud-compatible CAD, RMS, Analytics, and Intelligence
          software
        </div>
      </div>

      <!-- Video 3 -->
      <div class="tw-order-5 header-3 tw-self-center tw-mb-5">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          Empowering agencies and individuals in the
          <a href="justice-courts" class="btn-link">justice system</a> with
          integrated software suites
        </div>
      </div>
      <div class="tw-order-6 index-video tw-ml-5">
        <div class="index-video--3" @click="currentVideo('jRt6Fca1rHc')">
          <div class="default">
            <div class="tw-absolute absolute-center btn-play primary">
              <img
                src="../assets/icons/icon-play.svg"
                alt="play"
                class="tw-w-3 xl:tw-w-6"
              />
            </div>
            <img src="videos/index-video-3.jpg" />
          </div>
          <img class="active" src="videos/court.gif" />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-dialog
      v-model="modalVideo"
      overlay-color="white"
      width="100%"
      @ok="() => (modalVideo = false)"
    >
      <div class="tw-aspect-w-16 tw-aspect-h-9">
        <iframe
          v-if="modalVideo"
          :src="'https://www.youtube.com/embed/' + videoid"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    modalVideo: false,
    videoid: String,
  }),
  methods: {
    currentVideo(id) {
      this.modalVideo = true
      this.videoid = id
    },
  },
}
</script>

<style lang="scss">
.index-video {
  position: relative;
  padding-top: 56.25%;

  &--1,
  &--2,
  &--3 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      .btn-play {
        z-index: 0;
      }
    }
    &::before {
      content: '';
      width: 50%;
      height: calc(100% - 50px);
      top: -1.5rem;
      left: -1.5rem;
      position: absolute;
    }
  }

  &--1 {
    &::before {
      background-color: $grey-light-color;
    }
  }

  &--2 {
    &::before {
      left: auto;
      right: -1.5rem;
      background-color: $primary-color;
      opacity: 0.2;
    }
  }

  &--3 {
    &::before {
      top: 4rem;
      left: -1.5rem;
      background-color: $grey-light-color;
    }
  }

  .default {
    position: absolute;
    z-index: 3;

    &:hover {
      opacity: 0;
      &::before {
        opacity: 0;
      }
    }
  }

  .active {
    position: absolute;
    z-index: 2;
  }
}
</style>
