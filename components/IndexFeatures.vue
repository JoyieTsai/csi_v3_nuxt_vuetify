<template>
  <div class="main-container tw-mx-auto tw-text-center">
    <div class="header-2">InfoShare Engine®</div>
    <div class="tw-text-2xl tw-mb-10">
      Patented Application Development Platform
    </div>

    <div class="tw-mt-10">
      <div class="tw-flex tw-flex-col tw-flex-col-reverse">
        <ul
          class="
            tw-grid tw-grid-cols-2
            md:tw-grid-cols-4
            tw-gap-2
            md:tw-gap-5
            tw-mb-5
          "
        >
          <li
            v-for="(feature, i) in features"
            :id="'panel-' + i"
            :key="i"
            class="tw-flex tw-flex-col tabs line hover:tw-shadow-lg"
            @click="toggleFeature(i)"
          >
            <div class="tw-text-2xl tw-font-semibold tw-mb-2">
              {{ feature.title }}
            </div>
            <div class="tw-text-lg tw-opacity-80">{{ feature.desc }}</div>
          </li>
        </ul>

        <ul class="tabs-content tw-mx-auto tw-my-3">
          <li
            v-for="(feature, j) in features"
            :id="'panelContent-' + j"
            :key="j"
            class="tabs-content-item"
          >
            <img
              class="
                animate__animated animate__fadeIn
                tw-mx-auto
                md:tw-w-4/5
                xl:tw-w-auto
              "
              :src="require('@/assets/images/' + feature.img)"
              alt="Feature image"
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
