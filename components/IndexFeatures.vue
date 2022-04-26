<template>
  <div class="main-container tw-mx-auto tw-text-center">
    <div class="header-2">InfoShare Engine®</div>
    <div class="tw-text-base md:tw-text-lg lg:tw-text-xl xl:tw-text-2xl">
      Patented Application Development Platform
    </div>

    <div>
      <div class="tw-flex tw-flex-col tw-flex-col-reverse">
        <ul
          class="
            tw-grid tw-grid-cols-2
            md:tw-grid-cols-4
            tw-gap-2
            md:tw-gap-5
            tw-mb-5 tw-p-0
          "
        >
          <li
            v-for="(feature, i) in features"
            :id="'panel-' + i"
            :key="i"
            class="
              tw-flex tw-flex-col
              tabs
              line
              hover:tw-shadow-lg
              tw-p-3
              lg:tw-p-5
            "
            @click="toggleFeature(i)"
          >
            <div
              class="
                tw-text-base
                md:tw-text-lg
                lg:tw-text-xl
                xl:tw-text-2xl
                tw-font-semibold tw-mb-2
              "
            >
              {{ feature.title }}
            </div>
            <div
              class="
                tw-text-sm
                lg:tw-text-base
                xl:tw-text-lg
                tw-opacity-70 tw-leading-snug
              "
            >
              {{ feature.desc }}
            </div>
          </li>
        </ul>

        <ul class="tabs-content tw-mx-auto tw-my-3 tw-p-0">
          <li
            v-for="(feature, j) in features"
            :id="'panelContent-' + j"
            :key="j"
            class="tabs-content-item"
          >
            <img
              class="tw-mx-auto tw-w-full md:tw-w-4/5 xl:tw-w-2/3 tw-my-5"
              :lazy-src="require('@/assets/images/1x/' + feature.img)"
              :src="require('@/assets/images/2x/' + feature.img)"
              alt="Feature image"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="linear"
              data-aos-duration="600"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    defaultKey: '0',
    features: [
      {
        title: 'Single Platform',
        desc: 'One single development platform empowers all applications, easing integration.',
        img: 'engine-1.jpg',
      },
      {
        title: 'Low-code Development',
        desc: 'Improved agility and adaptability whilst reducing implementation and maintenance costs.',
        img: 'engine-2.jpg',
      },
      {
        title: 'Enterprise Application',
        desc: 'From public safety to municipal services to judiciary and regulatory agencies.',
        img: 'engine-3.jpg',
      },
      {
        title: 'Scalable',
        desc: 'Adaptable to single, regional, or multi-jurisdictional organization requirements.',
        img: 'engine-4.jpg',
      },
    ],
  }),
  mounted() {
    this.toggleFeature('0')
  },
  methods: {
    toggleFeature(key) {
      const tab = document.getElementById('panel-' + key)
      const content = document.getElementById('panelContent-' + key)
      const alltabs = document.getElementsByClassName('tabs')
      const allcontents = document.getElementsByClassName('tabs-content-item')

      const tabarr = Array.from(alltabs)
      const contentarr = Array.from(allcontents)

      tabarr.forEach((el) => {
        el.classList.remove('active')
      })
      contentarr.forEach((el) => {
        el.classList.remove('active')
      })

      tab.classList.add('active')
      content.classList.add('active')
    },
  },
}
</script>
