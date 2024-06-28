<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-px-2 sm:tw-px-7 md:tw-mx-auto">
    <div class="tw-flex xl:tw-w-4/5 lg:tw-mx-10 xl:tw-mx-auto">
      <div v-for="(item, i) in data" :key="i" class="table-card">
        <div v-if="item.title === 'CSI'" class="tw-flex tw-items-center tw-justify-center table-card-title">
          <img src="images/company_logo.svg" alt="" class="tw-px-2 md:tw-px-5" />
        </div>
        <div v-else class="
            tw-text-base
            md:tw-text-lg
            xl:tw-text-xl
            tw-font-semibold tw-flex tw-items-center tw-justify-center
            table-card-title
            tw-leading-tight
          ">
          {{ item.title }}
        </div>
        <div class="
            tw-text-sm tw-font-semibold
            md:tw-text-base
            lg:tw-text-lg
            xl:tw-text-xl
            tw-uppercase
            tw-h-20
            tw-flex
            tw-items-center
            tw-justify-center
            tw-text-white
            table-card-type
            tw-px-2
            md:tw-px-5
            tw-leading-tight
          ">
          {{ item.type }}
        </div>
        <div v-if="item.title === 'CSI'">
          <ul class="table-list lightblue">
            <li v-for="(con, j) in item.content" :key="j" class="
                tw-text-xs
                sm:tw-text-base
                xl:tw-text-lg
                tw-flex tw-items-center tw-px-2
                md:tw-px-5
                tw-leading-none
                md:tw-leading-tight
                hover:tw-shadow-md
                zoomin
              " v-html="con"></li>
          </ul>
        </div>
        <div v-else>
          <ul class="table-list">
            <li v-for="(con, j) in item.content" :key="j" class="
                tw-text-xs
                sm:tw-text-base
                xl:tw-text-lg
                tw-flex tw-items-center tw-px-2
                md:tw-px-5
                tw-leading-none
                md:tw-leading-tight
                hover:tw-shadow-lg
                zoomin
              " v-html="con"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({}),
}
</script>

<style lang="scss">
.table-card {
  position: relative;
  background-color: $white;
  flex: 1;
  z-index: 1;
  padding-bottom: 1rem;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;

  .header-5 {
    margin-bottom: 0;
  }

  &-title {
    height: 75px;
    @media only screen and (max-width: $breakpoints-md) {
      height: 45px;
    }
  }

  &:first-child {
    flex-grow: 0;
    min-width: 250px;
    font-weight: 600;
    z-index: 0;
    color: $grey-dark-color;
    text-align: left;

    @media only screen and (max-width: $breakpoints-lg) {
      min-width: 150px;
    }
    @media only screen and (max-width: $breakpoints-sm) {
      min-width: auto;
    }

    .table-list {
      li {
        justify-content: flex-start;
      }
    }
  }

  &:nth-child(2) {
    box-shadow: 0 2px 15px 0 $grey-light-color;

    .table-card-type {
      background-color: $grey-color;
    }
  }
  &:last-child {
    margin-top: 0;
    margin-bottom: 10px;
    box-shadow: 0 2px 20px 0 rgba($primary-dark-color, 0.25),
      0 2px 15px 0 #ebebeb;

    .table-card-title {
      height: 100px;
      @media only screen and (max-width: $breakpoints-md) {
        height: 70px;
      }
    }

    .table-card-type {
      background-color: $primary-color;
    }
  }
}

.table-list {
  padding: 0 !important;
  margin-bottom: 0;

  li {
    height: 6rem;
    justify-content: center;
    background-color: $white;
    @media only screen and (max-width: $breakpoints-sm) {
      height: 7rem;
    }
    &:nth-child(even) {
      background-color: $light-color;
    }
  }

  &.lightblue {
    li {
      &:nth-child(even) {
        background-color: #eaf1f8;
      }
    }
  }
}
</style>
