<template>
  <v-app>
    <v-main>
      <Hero :category="category" :coverimg="coverimg" :btns="btnGroup">
        <template v-slot:icon>
          <img
            class="tw-w-16 md:tw-w-20"
            :src="require('~/assets/duotone/' + icon)"
            :alt="title"
          />
        </template>
        <template v-slot:title>{{ title }}</template>
        <template v-slot:subtitle>{{ subtitle }}</template>
        <template v-slot:desc-heading>{{ descHeading }}</template>
        <template v-slot:desc-content>{{ descContent }}</template>
      </Hero>
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    btnGroup: true,
    category: 'justice-courts',
    title: 'Justice & Courts Overview',
    subtitle: 'Coming soon...',
    icon: 'justice_court.svg',
    coverimg: '',
    descHeading: '',
    descContent: '',
  }),
}
</script>
