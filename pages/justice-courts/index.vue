<template>
  <v-app>
    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    btnGroup: true,
    category: 'justice-courts',
    title: 'Justice Courts Overview',
  }),
  fetch({ params, redirect }) {
    redirect(404, '/justice-courts/county-prosecution')
  },
}
</script>
