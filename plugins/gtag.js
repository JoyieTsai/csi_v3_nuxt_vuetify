import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
      config: { id: 'G-HNE5XD0V2E' },
      appName: 'app-name',
    }, app.router);
  }