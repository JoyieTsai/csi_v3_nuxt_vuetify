<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="main-container tw-mx-auto tw-mt-10 xl:tw-mt-20">
    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
    <div class="elfsight-app-a2f65538-4e51-4a19-a037-bcdb4646e12f" data-elfsight-app-lazy></div>
    <!-- <div class="tw-inline-block">
      <div class="flex-group">
        <div v-for="(item, index) in socialFeed" :key="index" class="flex-group-card tw-mt-5">
          <iframe :src="item.url" height="587" width="504" frameborder="0" allowfullscreen="" title=""></iframe>
        </div>
      </div>
    </div> -->
  </div>
</template>

<!-- <script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['socialFeedList']),
    socialFeed() {
      const feed = this.socialFeedList.data.slice(0, 8)
      return feed
    },
  },
}
</script> -->
