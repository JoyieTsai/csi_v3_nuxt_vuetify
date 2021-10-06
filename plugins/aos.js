import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    // your settings here
    disable: 'phone',
  })
)
