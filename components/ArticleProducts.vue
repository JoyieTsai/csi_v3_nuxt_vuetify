<template>
  <div class="main-container m-auto">
    <div class="flex">
      <div class="w-1/3 flex items-center">
        <div class="flex flex-col mr-28">
          <div class="header-3 text-dark font-semibold">{{ title }}</div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in data" :key="index" class="badge">
          <nuxt-link
            :to="'/' + item.link"
            class="
              relative
              z-10
              pt-8
              flex flex-col
              items-center
              justify-center
              text-white
              hover:text-white
              w-32
              transform
              -translate-x-3
            "
          >
            <div class="header-1 leading-3">
              <i :class="item.icon"></i>
            </div>
            <div class="tw-text-lg leading-tight">{{ item.title }}</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Products from '~/data/heading.json'

export default {
  data: () => ({
    tags: [
      {
        name: 'rms',
      },
      {
        name: 'cad',
      },
      {
        name: 'fire-ems',
      },
    ],
    datas: Products,
    title: 'Related Products',
  }),
}
</script>
