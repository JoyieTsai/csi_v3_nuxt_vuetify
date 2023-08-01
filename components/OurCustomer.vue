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
                    <div v-for="(item, i) in states" :key="i"
                        :class="['tw-absolute', 'client-map-points--' + i]">
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
                state: 'Delaware',
            },
            {
                state: 'Vermont',
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
            left: 710px;
        }
        &--1 {
            top: 160px;
            left: 745px;
        }
        &--2 {
            top: 175px;
            left: 690px;
        }
        &--3 {
            top: 285px;
            left: 705px;
        }
        &--4 {
            top: 355px;
            left: 265px;
        }
        &--5 {
            top: 225px;
            left: 570px;
        }
        &--6 {
            top: 90px;
            left: 765px;
        }
        &--7 {
            top: 206px;
            left: 715px;
        }
        &--8 {
            top: 200px;
            left: 740px;
        }
        &--9 {
            top: 73px;
            left: 745px;
        }
        @media only screen and (max-width: $breakpoints-md) {
            &--0 {
                top: 16.5%;
                left: 85.5%;
            }
            &--1 {
                top: 24.5%;
                left: 89.5%;
            }
            &--2 {
                top: 25.5%;
                left: 84.5%;
            }
            &--3 {
                top: 44%;
                left: 82.5%;
            }
            &--4 {
                top: 53.5%;
                left: 31.5%;
            }
            &--5 {
                top: 33.5%;
                left: 69%;
            }
            &--6 {
                top: 13.5%;
                left: 92.5%;
            }
            &--7 {
                top: 31.5%;
                left: 86%;
            }
            &--8 {
                top: 29.5%;
                left: 88.5%;
            }
            &--9 {
                top: 11%;
                left: 89.5%;
            }
        }
    }

    .point {
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: rgba($highlight-color, 0.22);
        transition: 0.3s all;
        @media (max-width: $breakpoints-sm) {
            transform: scale(0.65);
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
