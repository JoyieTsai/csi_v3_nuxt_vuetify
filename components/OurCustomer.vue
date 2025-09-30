<template>
  <div class="bg-primary-light tw-text-white">
    <div class="tw-flex tw-flex-col xl:tw-flex-row">
      <div class="tw-flex-1">
        <div class="tw-p-10 lg:tw-p-20 2xl:tw-p-28">
          <div class="header-2 tw-mb-5 lg:tw-mb-8">Our Clients</div>
          <div class="tw-text-sm md:tw-text-base xl:tw-text-lg">
            <p>
              Our clients are our most valuable asset. CSI has evolved into a
              premier software and service provider because we collaborated with
              our clients every step of the way. We listen closely to what our
              clients need in order to design solutions that handle their unique
              requirements. CSI’s success is a testament to the professionalism,
              teamwork, and dedication of all government agencies we serve. We
              are partners, and partners look out for each other.
            </p>
            <p>
              Each agency is supported by a dedicated account manager and
              experienced engineering staff to handle any client request or
              issue. Our dedicated professionals get to know the nuances and
              unique functions related to each agency. We respond to calls for
              service on the same business day. Our anticipated duration of the
              partnership is forever. That’s why our technology is designed not
              only to meet an agency’s current needs but also to address its
              future needs. Longevity is our priority.
            </p>
          </div>
        </div>
      </div>
      <div class="tw-flex-1 tw-flex tw-justify-center">
        <div class="client-map tw-transform tw-mt-0 xl:tw-mt-20 lg:tw-mb-10">
          <div v-for="(item, i) in states" :key="i" :class="['tw-absolute', 'client-map-points--' + i]">
            <v-tooltip top color="white">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" class="point" v-on="on"></div>
              </template>
              <span class="text-primary tw-text-lg tw-font-semibold">
                {{ item.state }}
              </span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    states: [
      {
        state: 'New York',
      },
      {
        state: 'New Jersey',
      },
      {
        state: 'Pennsylvania',
      },
      {
        state: 'North Carolina',
      },
      {
        state: 'New Mexico',
      },
      {
        state: 'Indiana',
      },
      {
        state: 'New Hampshire',
      },
      {
        state: 'Maryland',
      },
      {
        state: 'Vermont',
      },
      {
        state: 'Rhode Island',
      },
      {
        state: 'Massachusetts',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.client-map {
  position: relative;
  width: 860px;
  height: 605px;
  background: url('../assets/vectors/usmap.svg') no-repeat top left;
  background-size: contain;

  @media only screen and (max-width: $breakpoints-sm) {
    height: ceil(100vw * 0.75);
  }

  &-points {
    &--0 {
      top: 110px;
      left: 700px;
    }
    &--1 {
      top: 162px;
      left: 725px;
    }
    &--2 {
      top: 165px;
      left: 680px;
    }
    &--3 {
      top: 280px;
      left: 685px;
    }
    &--4 {
      top: 350px;
      left: 255px;
    }
    &--5 {
      top: 220px;
      left: 560px;
    }
    &--6 {
      top: 86px;
      left: 745px;
    }
    &--7 {
      top: 202px;
      left: 700px;
    }
    &--8 {
      top: 69px;
      left: 727px;
    }
    &--9 {
      top: 124px;
      left: 764px;
    }
    &--10 {
      top: 108px;
      left: 750px;
    }
    @media only screen and (max-width: $breakpoints-md) {
      &--0 {
        top: 16%;
        left: 82%;
      }
      &--1 {
        top: 24%;
        left: 84%;
      }
      &--2 {
        top: 25%;
        left: 78%;
      }
      &--3 {
        top: 41%;
        left: 79%;
      }
      &--4 {
        top: 52%;
        left: 30%;
      }
      &--5 {
        top: 32%;
        left: 65%;
      }
      &--6 {
        top: 12%;
        left: 86.5%;
      }
      &--7 {
        top: 29%;
        left: 80%;
      }
      &--8 {
        top: 11%;
        left: 84%;
      }
      &--9 {
        top: 18%;
        left: 88%;
      }
      &--10 {
        top: 16%;
        left: 86%;
      }
    }
  }

  .point {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: rgba($highlight-color, 0.22);
    transition: 0.3s all;
    @media (max-width: $breakpoints-sm) {
      transform: scale(0.6);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background-color: $highlight-color;
      transform: translate(-50%, -50%);
    }

    &:hover {
      opacity: 1;
      transform: scale(1.35);
    }
  }
}
</style>
