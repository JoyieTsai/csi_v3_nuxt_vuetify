<template>
  <div class="main-container tw-mx-auto">
    <div class="tw-flex xl:tw-w-4/5 tw-mx-auto">
      <div v-for="(item, i) in data" :key="i" class="table-card">
        <div
          v-if="item.title === 'CSI'"
          class="tw-flex tw-items-center tw-justify-center table-card-title"
        >
          <img src="images/company_logo.svg" alt="" class="tw-px-2" />
        </div>
        <div
          v-else
          class="
            header-5
            tw-font-bold tw-flex tw-items-center tw-justify-center
            table-card-title
          "
        >
          {{ item.title }}
        </div>
        <div
          class="
            body-text-2
            sm:title
            tw-uppercase
            tw-h-16
            tw-flex
            tw-items-center
            tw-justify-center
            tw-text-white
            table-card-type
          "
        >
          {{ item.type }}
        </div>
        <div v-if="item.title === 'CSI'">
          <ul class="table-list blue">
            <li
              v-for="(con, j) in item.content"
              :key="j"
              class="
                body-text-3
                tw-flex tw-items-center tw-justify-center
                md:tw-px-5
              "
            >
              {{ con }}
            </li>
          </ul>
        </div>
        <div v-else>
          <ul class="table-list">
            <li
              v-for="(con, j) in item.content"
              :key="j"
              class="
                body-text-3
                tw-flex tw-items-center tw-justify-center
                md:tw-px-5
              "
            >
              {{ con }}
            </li>
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
  text-align: center;
  z-index: 1;
  padding-bottom: 1rem;
  margin-top: 25px;
  margin-bottom: 25px;

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
    font-size: $body-1-size;
    font-weight: 600;
    z-index: 0;

    @media only screen and (max-width: $breakpoints-md) {
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
  margin-bottom: 0;

  li {
    height: 5rem;
    &:nth-child(even) {
      background-color: $light-color;
    }
  }

  &.blue {
    li {
      &:nth-child(even) {
        background-color: rgba($primary-light-color, 0.1);
      }
    }
  }
}
</style>
