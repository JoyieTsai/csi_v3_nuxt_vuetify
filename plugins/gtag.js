import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
    Vue.use(VueGtag, {
      config: { id: 'G-0T6KFFT3VY' },
      appName: 'app-name',
    }, app.router);
  }